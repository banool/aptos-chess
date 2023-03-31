// I use a coordinate system where 0,0 is the white rook in the bottom left corner.
// Or in standard chess notation, 0,0 is a1.

// TODO:
// - Add support for en passant
// - Add support for castling
// - Add support for pawn promotion
// - Add support for draw by repetition
// - Add support for draw by insufficient material
// - Add support for draw by agreement
// - Add support for draw by time
// - Add support for forfeiting
// - Add support for resigning
// - Any TODOs down in the comments.

module addr::chess01 {
    use std::error;
    use std::option::{Self, Option};
    use std::signer;
    use std::vector;
    use aptos_std::debug;
    use aptos_std::simple_map::{Self, SimpleMap};

    /// An invalid move was attempted.
    const E_INVALID_MOVE: u64 = 0;

    /// A player tried to make a move out of turn.
    const E_NOT_YOUR_TURN: u64 = 1;

    /// A player tried to make a move in a game that is finished.
    const E_GAME_FINISHED: u64 = 2;

    const ROOK: u8 = 1;
    const KNIGHT: u8 = 2;
    const BISHOP: u8 = 3;
    const QUEEN: u8 = 4;
    const KING: u8 = 5;
    const PAWN: u8 = 6;

    const LEFT: u8 = 255;
    const RIGHT: u8 = 1;
    const UP: u8 = 1;
    const DOWN: u8 = 255;

    const WHITE: u8 = 0;
    const BLACK: u8 = 1;

    struct Piece has store, drop {
        player: u8,
        piece_type: u8,
    }

    struct Board has store {
        board: vector<vector<Option<Piece>>>,
    }

    struct Game has store {
        player1: address,
        player2: address,
        board: Board,
        current_turn: u8,
        finished: bool,
    }

    struct GameStore has key {
        /// This contains all the games the user has created.
        games: SimpleMap<u32, Game>,

        /// Here we track the next index to use in the above map.
        next_index: u32,
    }

    // Initialize and create a new board
    public fun create_board(): Board {
        let board = vector::empty();

        // Create the board with starting positions for Player 1 (0) and Player 2 (1)
        let i = 0;
        while (i < 8) {
            let row = vector::empty();

            if ((i == 0) || (i == 7)) {
                let player;
                if (i == 0) {
                    player = WHITE;
                } else {
                    player = BLACK;
                };
                vector::push_back(&mut row, option::some(Piece { player: player, piece_type: ROOK }));
                vector::push_back(&mut row, option::some(Piece { player: player, piece_type: KNIGHT }));
                vector::push_back(&mut row, option::some(Piece { player: player, piece_type: BISHOP }));
                vector::push_back(&mut row, option::some(Piece { player: player, piece_type: QUEEN }));
                vector::push_back(&mut row, option::some(Piece { player: player, piece_type: KING }));
                vector::push_back(&mut row, option::some(Piece { player: player, piece_type: BISHOP }));
                vector::push_back(&mut row, option::some(Piece { player: player, piece_type: KNIGHT }));
                vector::push_back(&mut row, option::some(Piece { player: player, piece_type: ROOK }));
            } else if ((i == 1) || (i == 6)) {
                let player;
                if (i == 1) {
                    player = WHITE;
                } else {
                    player = BLACK;
                };
                let j = 0;
                while (j < 8) {
                    vector::push_back(&mut row, option::some(Piece { player: player, piece_type: PAWN }));
                    j = j + 1;
                }
            } else {
                let j = 0;
                while (j < 8) {
                    vector::push_back(&mut row, option::none());
                    j = j + 1;
                };
            };

            vector::push_back(&mut board, row);
            i = i + 1;
        };

        Board { board: board }
    }

    // Create a new game
    public fun create_game(player1: &signer, player2: address) acquires GameStore {
        // Create the board.
        let board = create_board();

        // Create the game.
        let player1_addr = signer::address_of(player1);

        let game = Game {
            player1: player1_addr,
            player2: player2,
            board: board,
            current_turn: 0,
            finished: false,
        };

        // Create the GameStore if necessary.
        if (!exists<GameStore>(player1_addr)) {
            let game_store = GameStore { games: simple_map::create(), next_index: 0 };
            move_to(player1, game_store);
        };

        // Add the game to the GameStore.
        let game_store = borrow_global_mut<GameStore>(player1_addr);

        simple_map::add(&mut game_store.games, game_store.next_index, game);
        game_store.next_index = game_store.next_index + 1;
    }

    // Make a move in an active game.

    public entry fun make_move(
        player: &signer,
        // This is the index for the game in the player's GameStore.
        game_index: u32,
        from_x: u8,
        from_y: u8,
        to_x: u8,
        to_y: u8,
        // This is the piece type that the player is promoting to. This is only
        // relevant for pawn moves to the enemy end of the board. This should be zero
        // if the player is not promoting a pawn.
        promote_to: u8,
    ) acquires GameStore {
        let player_addr = signer::address_of(player);

        let game_store = borrow_global_mut<GameStore>(player_addr);
        let game = simple_map::borrow_mut(&mut game_store.games, &game_index);

        // Assert the game is not finished.
        assert!(!game.finished, E_GAME_FINISHED);

        // TODO: Assert the player is making a move in their turn.
        // This depends on how we choose to represent which player is which color,
        // which depends on if we do any kind of random color assignment or not.

        // Assert the move passes some basic validity checks.
        assert!(is_valid_basic(&game.board, from_x, from_y, to_x, to_y, game.current_turn), E_INVALID_MOVE);

        // Get the moving piece. At this point we have asserted that there is a piece
        // in the starting position, so we can unwrap the option.
        let moving_piece = option::borrow(vector::borrow(vector::borrow(&game.board.board, (from_y as u64)), (from_x as u64)));
        let piece_type = moving_piece.piece_type;

        // Assert the move is valid based on the piece's movement rules.
        let valid_move: bool;
        if (piece_type == KING) {
            valid_move = is_valid_king_move(&game.board, from_x, from_y, to_x, to_y, game.current_turn);
        } else if (piece_type == QUEEN) {
            valid_move = is_valid_queen_move(&game.board, from_x, from_y, to_x, to_y, game.current_turn);
        } else if (piece_type == ROOK) {
            valid_move = is_valid_rook_move(&game.board, from_x, from_y, to_x, to_y, game.current_turn);
        } else if (piece_type == BISHOP) {
            valid_move = is_valid_bishop_move(&game.board, from_x, from_y, to_x, to_y, game.current_turn);
        } else if (piece_type == KNIGHT) {
            valid_move = is_valid_knight_move(&game.board, from_x, from_y, to_x, to_y, game.current_turn);
        } else if (piece_type == PAWN) {
            valid_move = is_valid_pawn_move(&game.board, from_x, from_y, to_x, to_y, game.current_turn);
        } else {
            // This should never be possible.
            abort 0;
        };
        assert(valid_move, E_INVALID_MOVE);

        // Set the source position to none.
        let piece = {
            let row = vector::borrow_mut(&mut game.board.board, (from_y as u64));
            let piece = vector::borrow_mut(row, (from_x as u64));
            option::extract(piece)
        };

        // Put the piece in the destination position.
        let row = vector::borrow_mut(&mut game.board.board, (to_y as u64));
        let dest_piece = vector::borrow_mut(row, (to_x as u64));
        let old_piece = option::swap(dest_piece, piece);

        // Drop the piece that has just been taken.
        old_piece;

        // TODO: Assert that the player's king is not in check now as a result of that move.

        // TODO: Check for checkmate or stalemate on the enemy king.

        // Update the current turn.
        game.current_turn = if (game.current_turn == WHITE) { BLACK } else { WHITE };
    }

    fun position_is_valid(position: u8): bool {
        position < 8
    }

    fun is_valid_basic(board: &Board, from_x: u8, from_y: u8, to_x: u8, to_y: u8, player: u8): bool {
        // Check that the positions are in the valid range.
        if (!position_is_valid(from_x) || !position_is_valid(from_y) || !position_is_valid(to_x) || !position_is_valid(to_y)) {
            return false
        };

        // Check that the piece is moving.
        if (from_x == to_x && from_y == to_y) {
            return false
        };

        // Check that there is a piece in the start position and the player owns it.
        let moving_piece = vector::borrow(vector::borrow(&board.board, (from_y as u64)), (from_x as u64));
        if (option::is_none(moving_piece)) {
            return false
        };
        if (option::borrow(moving_piece).piece_type == player) {
            return false
        };

        return true
    }

    // At this point we should have already asserted that the starting position
    // has a rook in it.
    fun is_valid_rook_move(board: &Board, from_x: u8, from_y: u8, to_x: u8, to_y: u8, player: u8): bool {
        // Check if the move is either horizontal or vertical.
        if (from_x != to_x && from_y != to_y) {
            return false
        };

        let delta_x = if (from_x < to_x) { to_x - from_x } else { from_x - to_x };
        let delta_y = if (from_y < to_y) { to_y - from_y } else { from_y - to_y };

        let x_step = if (from_x < to_x) { RIGHT } else if ( from_x > to_x ) { LEFT } else { 0 };
        let y_step = if (from_y < to_y) { UP } else if ( from_y > to_y ) { DOWN } else { 0 };

        let current_x = from_x;
        let current_y = from_y;

        let steps_remaining = if (delta_x > delta_y) { delta_x } else { delta_y };

        while (steps_remaining > 0) {
            current_x = if (x_step == RIGHT) { current_x + 1 } else if (x_step == LEFT) { current_x - 1 } else { current_x };
            current_y = if (y_step == UP) { current_y + 1 } else if (y_step == DOWN) { current_y - 1 } else { current_y };

            let row = vector::borrow(&board.board, (current_y as u64));
            let piece_opt = vector::borrow(row, (current_x as u64));
            if (option::is_some(piece_opt)) {
                if (current_x == to_x && current_y == to_y) {
                    let piece = option::borrow(piece_opt);
                    if (piece.player == player) {
                        return false
                    };
                } else {
                    return false
                };
            };
            steps_remaining = steps_remaining - 1;
        };

        return true
    }

    #[test(player1 = @0x123, player2 = @0x321)]
    fun test_is_valid_rook_move(player1: &signer, player2: &signer) acquires GameStore {
        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        create_game(player1, player2_addr);
        let game_store = borrow_global_mut<GameStore>(player1_addr);
        let game = simple_map::borrow(&game_store.games, &(game_store.next_index - 1));

        let player = WHITE;

        // Note: We don't validate that the starting position has a rook in it.
        // This is nice because we can put a rook anywhere on a freshly set up
        // board to test move validity.

        // A rook in the starting position in 0,0 should not be able to move right
        // since a friendly bishop is in the way.
        assert!(!is_valid_rook_move(&game.board, 0, 0, 1, 0, player), 1);

        // A rook at 0,2 should not be able to take the enemy rook at 0,7 because
        // a pawn is in the way at 0,6.
        assert!(!is_valid_rook_move(&game.board, 0, 2, 0, 7, player), 2);

        // A rook at 0,2 should be able to take the enemy pawn at 0,6 because
        // there is nothing in the way.
        assert!(is_valid_rook_move(&game.board, 0, 2, 0, 6, player), 3);

        // A rook at 0,2 should not be able to take its own pawn at 0,1.
        assert!(!is_valid_rook_move(&game.board, 0, 2, 0, 1, player), 3);

        // A rook at 0,4 should be able to move to 7,4 because nothing is in the way.
        assert!(is_valid_rook_move(&game.board, 0, 4, 7, 4, player), 4);

        // A rook should not be able to move diagonally.
        assert!(!is_valid_rook_move(&game.board, 3, 3, 4, 4, player), 5);
    }

    fun is_valid_knight_move(board: &Board, from_x: u8, from_y: u8, to_x: u8, to_y: u8, player: u8): bool {
        let delta_x = if (from_x > to_x) { from_x - to_x } else { to_x - from_x };
        let delta_y = if (from_y > to_y) { from_y - to_y } else { to_y - from_y };

        if (!((delta_x == 1 && delta_y == 2) || (delta_x == 2 && delta_y == 1))) {
            return false
        };

        let to_piece_opt = vector::borrow(vector::borrow(&board.board, (to_y as u64)), (to_x as u64));
        if (option::is_some(to_piece_opt)) {
            let to_piece = option::borrow(to_piece_opt);
            if (to_piece.player == player) {
                return false
            }
        };

        return true
    }

    #[test(player1 = @0x123, player2 = @0x321)]
    fun test_is_valid_knight_move(player1: &signer, player2: &signer) acquires GameStore {
        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        create_game(player1, player2_addr);
        let game_store = borrow_global_mut<GameStore>(player1_addr);
        let game = simple_map::borrow(&game_store.games, &(game_store.next_index - 1));

        let player = WHITE;

        // Test 1: Knight should be able to move in L-shape (2 squares in one axis and 1 square in the other)
        assert!(is_valid_knight_move(&game.board, 1, 0, 2, 2, player), 1);

        // Test 2: Knight should be able to move in L-shape (1 square in one axis and 2 squares in the other)
        assert!(is_valid_knight_move(&game.board, 2, 2, 4, 3, player), 2);

        // Test 3: Knight should be able to capture an opponent's piece (the enemy rook at 0,7)
        assert!(is_valid_knight_move(&game.board, 1, 5, 0, 7, player), 3);

        // Test 4: Knight should not be able to capture a friendly piece
        assert!(!is_valid_knight_move(&game.board, 1, 0, 3, 1, player), 4);

        // Test 5: Knight should not be able to move in a straight line
        assert!(!is_valid_knight_move(&game.board, 3, 2, 3, 4, player), 5);

        // Test 6: Knight should not be able to move in a diagonal line
        assert!(!is_valid_knight_move(&game.board, 3, 2, 4, 3, player), 6);
    }

    fun is_valid_bishop_move(board: &Board, from_x: u8, from_y: u8, to_x: u8, to_y: u8, player: u8): bool {
        if (!position_is_valid(from_x) || !position_is_valid(from_y) || !position_is_valid(to_x) || !position_is_valid(to_y)) {
            return false
        };

        let delta_x = if (from_x > to_x) { from_x - to_x } else { to_x - from_x };
        let delta_y = if (from_y > to_y) { from_y - to_y } else { to_y - from_y };

        if (delta_x != delta_y) {
            return false
        };

        let x_step = if (from_x < to_x) { RIGHT } else if ( from_x > to_x ) { LEFT } else { 0 };
        let y_step = if (from_y < to_y) { UP } else if ( from_y > to_y ) { DOWN } else { 0 };

        let current_x = from_x;
        let current_y = from_y;
        let steps_remaining = delta_x;

        while (steps_remaining > 1) {
            current_x = if (x_step == RIGHT) { current_x + 1 } else if (x_step == LEFT) { current_x - 1 } else { current_x };
            current_y = if (y_step == UP) { current_y + 1 } else if (y_step == DOWN) { current_y - 1 } else { current_y };

            let row = vector::borrow(&board.board, (current_y as u64));
            let piece_opt = vector::borrow(row, (current_x as u64));

            if (option::is_some(piece_opt)) {
                return false
            };

            steps_remaining = steps_remaining - 1;
        };

        let to_piece_opt = vector::borrow(vector::borrow(&board.board, (to_y as u64)), (to_x as u64));
        if (option::is_some(to_piece_opt)) {
            let to_piece = option::borrow(to_piece_opt);
            if (to_piece.player == player) {
                return false
            }
        };

        return true
    }

    #[test(player1 = @0x123, player2 = @0x321)]
    fun test_is_valid_bishop_move(player1: &signer, player2: &signer) acquires GameStore {
        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        create_game(player1, player2_addr);
        let game_store = borrow_global_mut<GameStore>(player1_addr);
        let game = simple_map::borrow(&game_store.games, &(game_store.next_index - 1));

        let player = WHITE;

        // A bishop at 2,0 should not be able to move to 4,2, because its own pawn is in the way.
        assert!(!is_valid_bishop_move(&game.board, 2, 0, 4, 2, player), 1);

        // A bishop at 3,3 should not be able to move to 3,5, because it's not a diagonal move.
        assert!(!is_valid_bishop_move(&game.board, 3, 3, 3, 5, player), 2);

        // A bishop at 2,2 should be able to move to 5,5, because nothing is in the way.
        assert!(is_valid_bishop_move(&game.board, 2, 2, 5, 5, player), 3);

        // A bishop at 3,3 should be able to capture the enemy pawn at 6,6.
        assert!(is_valid_bishop_move(&game.board, 3, 3, 6, 6, player), 4);

        // A bishop at 3,3 should not be able to capture its own pawn at 5,1.
        assert!(!is_valid_bishop_move(&game.board, 3, 3, 5, 1, player), 5);
    }

    fun is_valid_king_move(board: &Board, from_x: u8, from_y: u8, to_x: u8, to_y: u8, player: u8): bool {
        let delta_x = if (from_x < to_x) { to_x - from_x } else { from_x - to_x };
        let delta_y = if (from_y < to_y) { to_y - from_y } else { from_y - to_y };

        // Check if the move is within one square in any direction.
        if (delta_x > 1 || delta_y > 1) {
            return false
        };

        let to_piece_opt = vector::borrow(vector::borrow(&board.board, (to_y as u64)), (to_x as u64));

        // If there's a piece at the target position, ensure it's not a friendly piece.
        if (option::is_some(to_piece_opt)) {
            let to_piece = option::borrow(to_piece_opt);
            if (to_piece.player == player) {
                return false
            };
        };

        return true
    }

    #[test(player1 = @0x123, player2 = @0x321)]
    fun test_is_valid_king_move(player1: &signer, player2: &signer) acquires GameStore {
        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        create_game(player1, player2_addr);
        let game_store = borrow_global_mut<GameStore>(player1_addr);
        let game = simple_map::borrow(&game_store.games, &(game_store.next_index - 1));

        let player = WHITE;

        // A king at 4,0 should not be able to move to 4,2, because it's more than one square away.
        assert!(!is_valid_king_move(&game.board, 4, 0, 4, 2, player), 1);

        // A king at 4,0 should not be able to move to 6,0, because it's more than one square away.
        assert!(!is_valid_king_move(&game.board, 4, 0, 6, 0, player), 2);

        // A king at 3,3 should be able to move to 4,4 because it's one square away and no piece is blocking the way.
        assert!(is_valid_king_move(&game.board, 3, 3, 4, 4, player), 3);

        // A king at 0,7 should be able to capture the enemy knight at 1,7.
        assert!(is_valid_king_move(&game.board, 0, 7, 1, 7, player), 4);

        // A king at 4,0 should not be able to capture its own queen at 3,0.
        assert!(!is_valid_king_move(&game.board, 4, 0, 3, 0, player), 5);
    }

    fun is_valid_queen_move(board: &Board, from_x: u8, from_y: u8, to_x: u8, to_y: u8, player: u8): bool {
        return (is_valid_rook_move(board, from_x, from_y, to_x, to_y, player) || is_valid_bishop_move(board, from_x, from_y, to_x, to_y, player))
    }

    fun is_valid_pawn_move(board: &Board, from_x: u8, from_y: u8, to_x: u8, to_y: u8, player: u8): bool {
        let allowed_direction: u8 = if (player == WHITE) { UP } else { DOWN };

        let delta_x = if (from_x < to_x) { to_x - from_x } else { from_x - to_x };
        let delta_y = if (from_y < to_y) { to_y - from_y } else { from_y - to_y };

        let actual_direction: u8 = if (from_y < to_y) { UP } else { DOWN };

        if (actual_direction != allowed_direction) {
            return false
        };

        let starting_rank: u8 = if (player == WHITE) { 1 } else { 6 };

        let to_piece_opt = vector::borrow(vector::borrow(&board.board, (to_y as u64)), (to_x as u64));

        // Move one square forward.
        if (delta_x == 0 && delta_y == 1) {
            if (option::is_none(to_piece_opt)) {
                return true
            };
        }
        // Move two squares forward from the starting rank.
        else if (delta_x == 0 && delta_y == 2) {
            if (option::is_none(to_piece_opt)) {
                let middle_piece_opt;
                if (actual_direction == UP) {
                    if (from_y != 1) {
                        return false
                    };
                    middle_piece_opt = vector::borrow(vector::borrow(&board.board, ((from_y + 1) as u64)), (from_x as u64))
                } else {
                    if (from_y != 6) {
                        return false
                    };
                    middle_piece_opt = vector::borrow(vector::borrow(&board.board, ((from_y - 1) as u64)), (from_x as u64))
                };
                if (option::is_none(middle_piece_opt)) {
                    return true
                };
            };
        }
        // Capture diagonally.
        else if (delta_x == 1 && delta_y == 1) {
            if (option::is_some(to_piece_opt)) {
                let to_piece = option::borrow(to_piece_opt);
                if (to_piece.player != player) {
                    return true
                };
            };
        };

        return false
    }

    #[test(player1 = @0x123, player2 = @0x321)]
    fun test_is_valid_pawn_move(player1: &signer, player2: &signer) acquires GameStore {
        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        create_game(player1, player2_addr);
        let game_store = borrow_global_mut<GameStore>(player1_addr);
        let game = simple_map::borrow(&game_store.games, &(game_store.next_index - 1));

        // A white pawn at 1,1 should be able to move to 1,2.
        assert!(is_valid_pawn_move(&game.board, 1, 1, 1, 2, WHITE), 1);

        // A white pawn at 1,1 should be able to move to 1,3.
        assert!(is_valid_pawn_move(&game.board, 1, 1, 1, 3, WHITE), 2);

        // A white pawn at 1,2 should not be able to move to 1,4.
        assert!(!is_valid_pawn_move(&game.board, 1, 2, 1, 4, WHITE), 2);

        // A white pawn at 1,1 should not be able to move to 1,4.
        assert!(!is_valid_pawn_move(&game.board, 1, 1, 1, 4, WHITE), 3);

        // A white pawn at 1,1 should not be able to move to 2,2.
        assert!(!is_valid_pawn_move(&game.board, 1, 1, 2, 2, WHITE), 4);

        // A white pawn at 4,4 should not be able to move backwards to 4,3.
        assert!(!is_valid_pawn_move(&game.board, 4, 4, 4, 3, WHITE), 5);

        // A black pawn at 1,6 should be able to move to 1,5.
        assert!(is_valid_pawn_move(&game.board, 1, 6, 1, 5, BLACK), 6);

        // A black pawn at 1,6 should be able to move to 1,4.
        assert!(is_valid_pawn_move(&game.board, 1, 6, 1, 4, BLACK), 7);

        // A black pawn at 1,6 should not be able to move to 1,3.
        assert!(!is_valid_pawn_move(&game.board, 1, 6, 1, 3, BLACK), 8);

        // A black pawn at 1,6 should not be able to move to 2,5.
        assert!(!is_valid_pawn_move(&game.board, 1, 6, 2, 5, BLACK), 9);

        // A black pawn at 4,4 should not be able to move backwards to 4,5.
        assert!(!is_valid_pawn_move(&game.board, 4, 4, 4, 5, BLACK), 10);

        // A white pawn at 1,5 should be able to capture a black pawn at 0,6.
        assert!(is_valid_pawn_move(&game.board, 1, 5, 0, 6, WHITE), 11);

        // A black pawn at 0,7 should not be able to capture a black pawn at 1,6.
        assert!(!is_valid_pawn_move(&game.board, 0, 7, 1, 6, BLACK), 12);

        // A black pawn at 0,7 should not be able to move into a space with its own piece at 0,6.
        assert!(!is_valid_pawn_move(&game.board, 0, 7, 0, 6, BLACK), 12);
    }
}
