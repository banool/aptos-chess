import { AspectRatio, Box, Flex, useToast } from "@chakra-ui/react";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { Chessboard, ClearPremoves } from "react-chessboard";
import { Chess, ChessInstance, Move, PieceColor, ShortMove } from "chess.js";
import {
  BoardOrientation,
  ChessboardProps,
  Piece,
  Square,
} from "react-chessboard/dist/chessboard/types";
import { useGetAccountResource } from "../../api/useGetAccountResource";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useSearchParams } from "react-router-dom";
import {
  getChessResourceType,
  useGlobalState,
} from "../../context/GlobalState";
import { Game } from "../../types/surf";
import { gameToFen } from "../../utils/chess";

export const MyChessboard = ({ objectAddress }: { objectAddress: string }) => {
  const [globalState] = useGlobalState();
  const { account } = useWallet();

  const parentRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const [localGame, setLocalGame] = useState(new Chess());

  const { data: onChainGame, error } = useGetAccountResource<Game>(
    objectAddress,
    getChessResourceType(globalState, "Game"),
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

    const remoteFen = gameToFen(onChainGame);

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
    const localGameCopy = { ...localGame };
    const result = localGameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      // TODO: Handle this.
      promotion: "q",
    });

    // If move is null then the move was illegal.
    if (result === null) return false;

    setLocalGame(localGameCopy);

    return true;
  }

  console.log(`Final FEN: ${localGame.fen()}`);

  return (
    <Flex
      ref={parentRef}
      w="100%"
      flex="1"
      justifyContent="center"
      alignItems="center"
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
    </Flex>
  );
};
