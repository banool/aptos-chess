import { Box, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess, ChessInstance, Move, PieceColor, ShortMove } from "chess.js";
import { Piece, Square } from "react-chessboard/dist/chessboard/types";
import { useGetAccountResource } from "../../api/hooks/useGetAccountResource";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useSearchParams } from "react-router-dom";
import { getModuleIdentifier, useGlobalState } from "../../GlobalState";

const moduleAddress = "0x1";
const moduleName = "chess";
const structName = "GameStore";

const resourceTag = `${moduleAddress}::${moduleName}::${structName}`;

type MyChessboardProps = {
  objectAddress: string;
};

// TODO: How will people know about games they've been invited to? Events?
export const MyChessboard = ({ objectAddress }: MyChessboardProps) => {
  const [globalState] = useGlobalState();

  const resourceAddress = getModuleIdentifier(globalState, "Game");
  const { accountResource: gameData } = useGetAccountResource(objectAddress, resourceAddress)

  // todo try typemove by sentio

  console.log(`accountstuff: ${JSON.stringify(gameData)}`);

  // TODO: We don't want to replace the chessinstance, we just want to manipulate it.
  // what is the best way to do that with react?
  const [chessInstance, setGame] = useState<ChessInstance | undefined>(undefined);

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
    main = <Chessboard id="main" position={chessInstance.fen()} onPieceDrop={onDrop} />;
  }

  return <Box>{main}</Box>;
};
