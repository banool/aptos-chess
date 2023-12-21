import { BLACK, Game, Piece } from "../types/surf";

// Convert a piece to the corresponding FEN character.
function pieceToFenChar(piece: Piece): string {
  const isBlack = piece.color === BLACK;
  // This is the same order as the piece types in the Move module.
  const fenChars = ["R", "N", "B", "Q", "K", "P"];
  let fenChar = fenChars[piece.piece_type - 1];
  return isBlack ? fenChar.toLowerCase() : fenChar;
}

// TODO: This is incomplete, it needs to support:
// - Active color.
// - Castling availability.
// - En passant target square.
// - Halfmove clock.
// - Fullmove number.
export function gameToFen(game: Game): string {
  const board = game.board.board;

  let fen = "";

  // 1. Piece position.
  for (let row = board.length - 1; row >= 0; row--) {
    // Start from the last row
    if (row < board.length - 1) fen += "/"; // Add row separator
    let emptyCount = 0;

    for (let col = 0; col < board[row].length; col++) {
      const piece = board[row][col];
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
      fen += emptyCount.toString();
    }
  }

  // 2. Active color
  fen += " " + (game.is_white_turn ? "w" : "b");

  // 3. Castling availability
  // Assuming you have some way to determine castling availability in your game object.
  // This is a simple example and may need to be adjusted based on your game logic.
  /*
  let castling = "";
  castling += game.white_piece_status.can_castle_kingside ? "K" : "";
  castling += game.white_piece_status.can_castle_queenside ? "Q" : "";
  castling += game.black_piece_status.can_castle_kingside ? "k" : "";
  castling += game.black_piece_status.can_castle_queenside ? "q" : "";
  castling = castling || "-"; // If no castling is available, use "-"
  fen += " " + castling;
  */
  let castling = "-";
  fen += " " + castling;

  // 4. En passant target square
  // Assuming the en_passant_target has a property like 'square' to indicate the target square.
  // Adjust based on your actual object structure.
  let enPassantTarget = "-";
  if (game.en_passant_target) {
    const { x, y } = game.en_passant_target.vec[0]!;
    const file = String.fromCharCode(97 + x); // Convert 0-7 to 'a'-'h'
    const rank = 8 - y; // Convert 0-7 to 8-1
    enPassantTarget = file + rank;
  }
  fen += " " + enPassantTarget;

  /*
  // 5. Halfmove clock
  // Assuming your Game structure tracks halfmove clock. Replace with actual property.
  fen += " " + game.halfmove_clock.toString();

  // 6. Fullmove number
  // Assuming your Game structure tracks the fullmove number. Replace with actual property.
  fen += " " + game.fullmove_number.toString();
  */

  return fen;
}
