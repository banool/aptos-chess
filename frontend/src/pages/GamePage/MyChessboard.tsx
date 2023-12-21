import { AspectRatio, Box, Flex, useToast } from "@chakra-ui/react";
import { ReactNode, useEffect, useRef, useState } from "react";
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

  const { data: game, error } = useGetAccountResource<Game>(
    objectAddress,
    getChessResourceType(globalState, "Game"),
    { refetchInterval: 1500 },
  );

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
  }, [game]);

  if (error) {
    return <Box>{`Error loading game: ${JSON.stringify(error)}`}</Box>;
  }

  if (game === undefined) {
    return null;
  }

  const fen = gameToFen(game);
  let boardOrientation: BoardOrientation;
  if (account !== null) {
    // TODO: Update this if we break the player1 is always white invariant.
    boardOrientation = game.player1 === account.address ? "white" : "black";
  } else {
    // If there is no account connected, just show white at the bottom.
    boardOrientation = "white";
  }

  console.log(`FEN: ${fen}`);

  // Because width and height are zero when first loading, we must set a minimum width
  // of 100 pixels otherwise it breaks the board (it will just show the number zero),
  // even once the width and height update.
  console.log(`Dimensions: ${JSON.stringify(dimensions)}`);
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

  return (
    <Flex
      ref={parentRef}
      w="100%"
      flex="1"
      justifyContent="center"
      alignItems="center"
    >
      <Box display={boxDisplay}>
        <Chessboard
          id="main"
          boardWidth={width}
          boardOrientation={boardOrientation}
          position={fen}
        />
        </Box>
    </Flex>
  );
};

/*
  // TODO: We don't want to replace the chessinstance, we just want to manipulate it.
  // what is the best way to do that with react?
  const [chessInstance, setGame] = useState<ChessInstance | undefined>(
    undefined,
  );

  const [queryIntervalMs, setQueryIntervalMs] = useState(1000);

  const [searchParams, setSearchParams] = useSearchParams();

  const toast = useToast();

  const { signAndSubmitTransaction, account } = useWallet();

  // todo fix this up
  function getPlayerColor(): PieceColor | undefined {
    if (chessInstance === undefined) {
      return undefined;
    }

    if (chessInstance.turn() === "w") {
      return "w";
    }
    return "b";
  }

  function getRefetchInterval() {
    const value = 1000;
    if (chessInstance === undefined) {
      return 0;
    }
    // TODO: Fix this
    if (chessInstance.turn() === getPlayerColor()) {
      return 0;
    }

    if (globalState === undefined) {
      return 1000;
    }
    return 0;
  }

  // Returns null if the move is illegal.
  function makeAMove(move: ShortMove): Move | null {
    const gameCopy = Object.create(chessInstance!);

    let result;
    try {
      result = gameCopy.move(move);
    } catch (e) {
      result = null;
    }
    if (result !== null) {
      setGame(gameCopy);
    }
    return result;
  }

  function onDrop(sourceSquare: Square, targetSquare: Square, piece: Piece) {
    console.log("onDrop", sourceSquare, targetSquare, piece);
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
    });

    // Illegal move
    if (move === null) return false;

    return true;
  }

  let main;
  if (chessInstance === undefined) {
    main = <Box>Loading...</Box>;
  } else {
    main = (
      <Chessboard
        id="main"
        position={chessInstance.fen()}
        onPieceDrop={onDrop}
      />
    );
  }
  */
