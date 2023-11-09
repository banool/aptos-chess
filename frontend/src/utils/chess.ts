import { BLACK, Board, Piece } from "../types/surf";

// Convert a piece to the corresponding FEN character.
function pieceToFenChar(piece: Piece): string {
  const isBlack = piece.color == BLACK;
  // This is the same order as the piece types in the Move module.
  const fenChars = ["R", "N", "B", "Q", "K", "P"];
  let fenChar = fenChars[piece.piece_type - 1];
  return isBlack ? fenChar.toLowerCase() : fenChar;
}

function boardToFen(boardOuter: Board): string {
  const board = boardOuter.board;
  let fen = "";
  for (let row = 0; row < board.length; row++) {
    if (row > 0) fen += "/"; // Add row separator
    let emptyCount = 0;

    for (let col = 0; col < board[row].length; col++) {
      const piece = board[row][col];
      // This is how you "unwrap" the option.
      if (piece.vec.length === 0) {
        emptyCount++;
      } else {
        const inner = piece.vec[0];
        if (emptyCount > 0) {
          fen += emptyCount.toString();
          emptyCount = 0;
        }
        fen += pieceToFenChar(inner);
      }
    }

    if (emptyCount > 0) {
      // Add remaining empty square count at the end of the row
      fen += emptyCount.toString();
    }
  }
  return fen;
}
