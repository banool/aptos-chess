// Convert the on chain data into Forsyth-Edwards Notation, which we can load in to the
// ChessInstance to update the state of the game locally.
export function gameToFen(): string {
    return "";
}

// Note: fen only describes a position, whereas pgn describes a game by describing the
// moves of the game. deriving fen just from the on chain data is a good mvp but it'd
// be sweet to instead derive a pgn using data from a custom processor. this could
// theoretically be a "premium feature". actually streaming moves as they happen
// through some custom processor that exposes a websocket would be even more premium.
