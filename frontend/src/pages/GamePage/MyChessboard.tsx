import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess, ChessInstance, PieceType } from "chess.js";
import {
  BoardOrientation,
  Piece,
  Square,
} from "react-chessboard/dist/chessboard/types";
import { useGetAccountResource } from "../../api/useGetAccountResource";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { getChessIdentifier, useGlobalState } from "../../context/GlobalState";
import { Game } from "../../types/surf";
import {
  chessJsPieceTypeToNumber,
  chessJsSquareToXY,
  onChainGameToFen,
} from "../../utils/chess";
import { createEntryPayload } from "@thalalabs/surf";
import { CHESS_ABI } from "../../types/abis";

export const MyChessboard = ({ gameAddress }: { gameAddress: string }) => {
  const [globalState] = useGlobalState();
  const { account, signAndSubmitTransaction } = useWallet();
  const toast = useToast();

  const parentRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const [localGame, setLocalGame] = useState(new Chess());

  /**
   * This returns a copy of localGame completely detached from localGame. The example
   * code they provide does this instead:
   *
   * const localGameCopy = {...localGame};
   *
   * Unforunately changing this object actually changes localGame somehow. So we do
   * this instead.
   */
  function cloneLocalGame(): ChessInstance {
    return new Chess(localGame.fen());
  }

  const { data: onChainGame, error } = useGetAccountResource<Game>(
    gameAddress,
    getChessIdentifier(globalState, "Game"),
    { refetchInterval: 1500 },
  );

  // TODO: Constantly refetch the game data from on chain. If the number of turns made
  // on chain is greater than the number of turns made locally, then we need to update
  // the local state. We don't just unconditionaly update the local state because we
  // don't want to overwrite the user's moves.
  //
  // Determine the number of moves made in the local state by calling .history() and
  // checking the length.
  //
  // If submitting a move fails, call undo.
  useEffect(() => {
    if (onChainGame === undefined) {
      return;
    }

    const remoteFen = onChainGameToFen(onChainGame);

    // Determine if we need to update by comparing the halfmove count. We derive it
    // from the FEN by looking at the fullmove count and seeing whose turn it is.
    const numLocalFullMoves = parseInt(localGame.fen().split(" ")[5]) - 1;
    const numRemoteFullMoves = parseInt(remoteFen.split(" ")[5]) - 1;
    const numLocalHalfMoves =
      numLocalFullMoves * 2 + (localGame.fen().split(" ")[1] === "w" ? 0 : 1);
    const numRemoteHalfMoves =
      numRemoteFullMoves * 2 + (remoteFen.split(" ")[1] === "w" ? 0 : 1);

    console.log("numLocalHalfMoves", numLocalHalfMoves);
    console.log("numRemoteHalfMoves", numRemoteHalfMoves);

    if (numRemoteHalfMoves > numLocalHalfMoves) {
      console.log("Updating local state based on the on chain state");
      setLocalGame(new Chess(remoteFen));
    }
  }, [onChainGame, localGame]);

  // The only way I could find to properly resize the Chessboard was to make use of its
  // boardWidth property. This useEffect is used to figure out the width and height of
  // the parent flex and use that to figure out boardWidth. We make sure this triggers
  // when the game data changes, because we don't render the Chessboard until that data
  // comes in.
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (parentRef.current) {
      observer.observe(parentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [localGame]);

  if (error) {
    console.log("error", error);
    return <Box p={10}>{`Error loading game: ${JSON.stringify(error)}`}</Box>;
  }

  let boardOrientation: BoardOrientation = "white";
  if (account !== null && onChainGame !== undefined) {
    // TODO: Update this if we break the player1 is always white invariant.
    boardOrientation =
      onChainGame.player1 === account.address ? "white" : "black";
  }

  // Because width and height are zero when first loading, we must set a minimum width
  // of 100 pixels otherwise it breaks the board (it will just show the number zero),
  // even once the width and height update.
  // console.log(`Dimensions: ${JSON.stringify(dimensions)}`);
  const width = Math.max(
    Math.min(dimensions.width, dimensions.height) * 0.8,
    24,
  );
  // If the width is less than 25 we hide the chessboard to avoid perceived flickering
  // on load.
  let boxDisplay = undefined;
  if (width < 25) {
    boxDisplay = "none";
  }

  function onPieceDrop(
    sourceSquare: Square,
    targetSquare: Square,
    piece: Piece,
  ) {
    if (account === null) {
      toast({
        title: "Please connect your wallet",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return false;
    }

    let promotion: Exclude<PieceType, "p" | "k">;
    if (piece[1].toLowerCase() === "p" || piece[1].toLowerCase() === "k") {
      // This means there is no actual promotion intent, just set "q" as a dummy value.
      promotion = "q";
    } else {
      promotion = piece[1].toLowerCase()! as any;
    }

    const localGameCopy = cloneLocalGame();

    const result = localGameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion,
    });

    // If move is null then the move was illegal.
    if (result === null) return false;

    const source = chessJsSquareToXY(sourceSquare);
    const target = chessJsSquareToXY(targetSquare);

    /*
    // https://github.com/ThalaLabs/surf/issues/100
    const data = createEntryPayload(CHESS_ABI, {
      function: "make_move",
      typeArguments: [],
      functionArguments: [gameAddress as any, source.x, source.y, target.x, target.y, chessJsPieceTypeToNumber(promotion)],
    });
    */
    const data = {
      function: getChessIdentifier(globalState, "make_move") as any,
      typeArguments: [],
      functionArguments: [
        gameAddress as any,
        source.x,
        source.y,
        target.x,
        target.y,
        chessJsPieceTypeToNumber(promotion),
      ],
    };

    console.log(`Submitting payload: ${JSON.stringify(data, null, 2)}`);

    // onPieceDrop can't be async so we fire this off in the background. If submitting
    // the transaction fails we never update the state and nothing happens.
    const submit = async () => {
      try {
        let response = await signAndSubmitTransaction({
          sender: account.address,
          data,
        });
        await globalState.client.waitForTransaction({
          transactionHash: response.hash,
        });
        console.log("blehhhhhhhhhhh");
        setLocalGame(localGameCopy);
        toast({
          title: "Move submitted successfully!",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      } catch (error) {
        console.log(`Error submitting move: ${JSON.stringify(error)}`);
        toast({
          title: "Error submitting move",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    };

    submit();

    return true;
  }

  console.log(`Game: ${localGame.ascii()}`);
  console.log(`Final FEN: ${localGame.fen()}`);

  return (
    <Flex
      ref={parentRef}
      w="100%"
      flex="1"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        display={boxDisplay}
        filter={onChainGame === undefined ? "blur(4px)" : "none"}
      >
        <Chessboard
          boardWidth={width}
          boardOrientation={boardOrientation}
          position={localGame.fen()}
          onPieceDrop={onPieceDrop}
        />
      </Box>
      <Text marginTop={5}>{`${
        localGame.turn() === "w" ? "White" : "Black"
      } to move`}</Text>
    </Flex>
  );
};
