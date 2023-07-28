import { Box, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess, ChessInstance, Move, PieceColor, ShortMove } from "chess.js";
import { Piece, Square } from "react-chessboard/dist/chessboard/types";
import { useGetAccountResource } from "../../api/hooks/useGetAccountResource";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useSearchParams } from "react-router-dom";
import { useGlobalState } from "../../GlobalState";

const moduleAddress = "0x1";
const moduleName = "chess";
const structName = "GameStore";

const resourceTag = `${moduleAddress}::${moduleName}::${structName}`;

type MyChessboardProps = {
  gameCreatorAddress: number;
  gameId: number;
};

// TODO: How will people know about games they've been invited to? Events?
export const MyChessboard = ({ gameId }: MyChessboardProps) => {
  const [game, setGame] = useState<ChessInstance | undefined>(undefined);

  const [queryIntervalMs, setQueryIntervalMs] = useState(1000);

  const [globalState] = useGlobalState();

  const [searchParams, setSearchParams] = useSearchParams();

  const toast = useToast();

  const { signAndSubmitTransaction, account } = useWallet();

  function getPlayerColor(): PieceColor | undefined {
    if (game === undefined) {
      return undefined;
    }

    if (game.turn() === "w") {
      return "w";
    }
    return "b";
  }

  function getRefetchInterval() {
    const value = 1000;
    if (game === undefined) {
      return 0;
    }
    if (game.turn()) {
      return 0;
    }

    if (globalState === undefined) {
      return 1000;
    }
    return 0;
  }

  const { accountResource, error, isLoading } = useGetAccountResource(
    account!.address,
    resourceTag,
    { enabled: account !== null, refetchInterval: getRefetchInterval() }
  );

  // Returns null if the move is illegal.
  function makeAMove(move: ShortMove): Move | null {
    const gameCopy = Object.create(game!);

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
  if (game === undefined) {
    main = <Box>Loading...</Box>;
  } else {
    main = <Chessboard id="main" position={game.fen()} onPieceDrop={onDrop} />;
  }

  return <Box>{main}</Box>;
};
