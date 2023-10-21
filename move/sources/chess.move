// I use a coordinate system where 0,0 is the white rook in the bottom left corner.
// Or in standard chess notation, 0,0 is a1.

// TODO:
// - Add support for en passant
// - Add support for draw by repetition
// - Add support for draw by insufficient material
// - Add support for draw by agreement
// - Add support for various time settings
//   (full game limits, per move limits, regaining time on move, etc)
// - Add support for draw by time
// - Add support for resigning
// - Any TODOs down in the comments.
// - Add support for custom extensions. We could define a trait that has a bunch of
//   hook functions that the custom extension can implement, e.g. relating to the
//   starting position of pieces, move validity, etc.


module addr::chess {
    use std::error;
    use std::option::{Self, Option};
    use std::signer;
    use std::vector;
    // use aptos_std::debug;
    use aptos_framework::account;
    use aptos_framework::event::{Self, EventHandle};
    use aptos_std::table::{Self, Table};

    /// You tried to make an invalid move.
    const E_INVALID_MOVE: u64 = 0;

    /// You tried to make a move out of turn.
    const E_NOT_YOUR_TURN: u64 = 1;

    /// You tried to make a move in a game that is finished.
    const E_GAME_FINISHED: u64 = 2;

    /// You tried to join a game that you're not a part of.
    const E_PLAYER_NOT_IN_GAME: u64 = 3;

    /// You tried to make a game with themselves.
    const E_PLAYER_MADE_GAME_WITH_SELF: u64 = 4;

    /// You tried to promote to an invalid piece type.
    const E_INVALID_PROMOTION_INTENT: u64 = 5;

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

    // Game statuses.
    const ACTIVE: u8 = 0;
    const DRAW: u8 = 1;
    const WHITE_WON: u8 = 2;
    const BLACK_WON: u8 = 3;

    struct Piece has store, drop {
        color: u8,
        piece_type: u8,
    }

    struct Board has store {
        board: vector<vector<Option<Piece>>>,
    }

    struct Game has store {
        player1: address,
        player2: address,
        board: Board,
        is_white_turn: bool,
        white_piece_status: PieceStatus,
        black_piece_status: PieceStatus,
        game_status: u8,
    }

    struct PieceStatus has store, copy, drop {
        queen_side_rook_has_moved: bool,
        king_side_rook_has_moved: bool,
        king_has_moved: bool,
    }

    struct GameStore has key {
        /// This contains all the games the user has created.
        games: Table<u32, Game>,

        /// Here we track the next index to use in the above map.
        next_index: u32,

        /// This contains handles to events emitted when games are created.
        game_created_events: EventHandle<GameCreatedEvent>,
    }

    // We don't store the address of the creator, only the opponent.
    struct GameCreatedEvent has drop, store {
        // The index of the game in the table.
        index: u32,

        // The address of the opponent.
        opponent: address,
    }

    // Create a new game
    public entry fun create_game(player1: &signer, player2_addr: address) acquires GameStore {
        // Create the board.
        let board = create_board();

        let player1_addr = signer::address_of(player1);

        // Assert that the player isn't making a game with themselves.
        assert!(player1_addr != player2_addr, E_PLAYER_MADE_GAME_WITH_SELF);

        let piece_status = PieceStatus {
            queen_side_rook_has_moved: false,
            king_side_rook_has_moved: false,
            king_has_moved: false,
        };

        // Create the game.
        let game = Game {
            player1: player1_addr,
            player2: player2_addr,
            board: board,
            // The color of the player whose turn it is.
            is_white_turn: true,
            white_piece_status: piece_status,
            black_piece_status: piece_status,
            game_status: ACTIVE,
        };

        // Create the GameStore if necessary.
        if (!exists<GameStore>(player1_addr)) {
            let game_store = GameStore {
                games: table::new(),
                next_index: 0,
                game_created_events: account::new_event_handle<GameCreatedEvent>(player1),
            };
            move_to(player1, game_store);
        };

        // Add the game to the GameStore.
        let game_store = borrow_global_mut<GameStore>(player1_addr);

        table::add(&mut game_store.games, game_store.next_index, game);

        // Emit an event so that the frontend can discover games using the events table
        // in the indexer.
        event::emit_event<GameCreatedEvent>(
            &mut game_store.game_created_events,
            GameCreatedEvent {
                index: game_store.next_index,
                opponent: player2_addr,
            },
        );

        game_store.next_index = game_store.next_index + 1;
    }

    // Initialize and create a new board
    public fun create_board(): Board {
        let board = vector::empty();

        // Create the board with starting positions for Player 1 (WHITE) and Player 2 (BLACK).
        let i = 0;
        while (i < 8) {
            let row = vector::empty();

            if ((i == 0) || (i == 7)) {
                let color;
                if (i == 0) {
                    color = WHITE;
                } else {
                    color = BLACK;
                };
                vector::push_back(&mut row, option::some(Piece { color: color, piece_type: ROOK }));
                vector::push_back(&mut row, option::some(Piece { color: color, piece_type: KNIGHT }));
                vector::push_back(&mut row, option::some(Piece { color: color, piece_type: BISHOP }));
                vector::push_back(&mut row, option::some(Piece { color: color, piece_type: QUEEN }));
                vector::push_back(&mut row, option::some(Piece { color: color, piece_type: KING }));
                vector::push_back(&mut row, option::some(Piece { color: color, piece_type: BISHOP }));
                vector::push_back(&mut row, option::some(Piece { color: color, piece_type: KNIGHT }));
                vector::push_back(&mut row, option::some(Piece { color: color, piece_type: ROOK }));
            } else if ((i == 1) || (i == 6)) {
                let color;
                if (i == 1) {
                    color = WHITE;
                } else {
                    color = BLACK;
                };
                let j = 0;
                while (j < 8) {
                    vector::push_back(&mut row, option::some(Piece { color: color, piece_type: PAWN }));
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

    // Make a move in an active game.
    public entry fun make_move(
        player: &signer,
        // This is the index for the game in the player's GameStore.
        game_index: u32,
        src_x: u8,
        src_y: u8,
        dest_x: u8,
        dest_y: u8,
        // This is the piece type that the player is promoting to. This is only
        // relevant for pawn moves to the enemy end of the board. This will be ignored
        // if the move is not a pawn move to the enemy end of the board.
        promote_to: u8,
    ) acquires GameStore {
        let player_addr = signer::address_of(player);

        let game_store = borrow_global_mut<GameStore>(player_addr);
        let game = table::borrow_mut(&mut game_store.games, game_index);

        // For now player1 is always white, so if the player trying to make the move is
        // player1 then it must be white's turn.
        let color;
        if (game.player1 == player_addr) {
            assert!(game.is_white_turn, error::invalid_state(E_NOT_YOUR_TURN));
            color = WHITE;
        } else if (game.player2 == player_addr) {
            assert!(!game.is_white_turn, error::invalid_state(E_NOT_YOUR_TURN));
            color = BLACK;
        } else {
            abort(E_PLAYER_NOT_IN_GAME)
        };

        let enemy_color;
        let piece_status;
        if (color == WHITE) {
            enemy_color = BLACK;
            piece_status = game.white_piece_status;
        } else {
            enemy_color = WHITE;
            piece_status = game.black_piece_status;
        };

        // Assert the game is not finished.
        assert!(game.game_status == ACTIVE, error::invalid_state(E_GAME_FINISHED));

        // Assert the move passes some basic validity checks.
        assert!(is_valid_basic(&game.board, src_x, src_y, dest_x, dest_y, color), error::invalid_argument(E_INVALID_MOVE));

        // Get the moving piece. At this point we have asserted that there is a piece
        // in the starting position, so we can unwrap the option.
        let moving_piece = option::borrow(borrow_piece(&game.board, src_x, src_y));
        let piece_type = moving_piece.piece_type;

        // Assert the move is valid based on the piece's movement rules.
        assert!(is_valid_move(&game.board, src_x, src_y, dest_x, dest_y, color, piece_status), error::invalid_argument(E_INVALID_MOVE));

        // Set the source position to none.
        let piece = {
            let row = vector::borrow_mut(&mut game.board.board, (src_y as u64));
            let piece = vector::borrow_mut(row, (src_x as u64));
            option::extract(piece)
        };

        assert!(
            promote_to == QUEEN || promote_to == ROOK || promote_to == BISHOP || promote_to == KNIGHT,
            error::invalid_argument(E_INVALID_PROMOTION_INTENT),
        );

        // If the piece is a pawn and it made it to the back rank, promote it.
        if (piece_type == PAWN && ((color == WHITE && dest_y == 7) || (color == BLACK && dest_y == 0))) {
            piece.piece_type = promote_to;
        };

        // Put the piece in the destination position.
        let row = vector::borrow_mut(&mut game.board.board, (dest_y as u64));
        let dest_piece = vector::borrow_mut(row, (dest_x as u64));
        let maybe_old_piece = option::swap_or_fill(dest_piece, piece);

        // Drop the piece that has just been taken.
        maybe_old_piece;

        // Assert that the player's king is not in check now as a result of that move.
        assert!(!is_king_in_check(&game.board, color), error::invalid_state(E_INVALID_MOVE));

        // Check if the enemy king has any valid moves now.
        let (enemy_king_x, enemy_king_y) = find_king(&game.board, enemy_color);
        let enemy_king_has_valid_moves = king_has_valid_moves(&game.board, enemy_king_x, enemy_king_y, enemy_color);

        // If the king has no valid moves and the king is in check, that is checkmate.
        if (!enemy_king_has_valid_moves && is_king_in_check(&game.board, enemy_color)) {
            game.game_status = if (color == WHITE) { WHITE_WON } else { BLACK_WON };
            return
        };

        // TODO: Check for stalemate. This is the case if the enemy king is not in
        // check, but the enemy cannot move any piece / cannot do so without putting
        // their king in check. This is complex, so I'm avoiding this for now.

        // Update whose turn it is.
        game.is_white_turn = !game.is_white_turn;
    }

    // Useful for tests to move pieces wherever you want with no validation.
    #[test_only]
    fun move_piece(board: &mut Board, src_x: u8, src_y: u8, dest_x: u8, dest_y: u8) {
        // Take the piece.
        let piece = {
            let piece = borrow_piece_mut(board, src_x, src_y);
            option::extract(piece)
        };

        // Put the piece in the destination position.
        let row = vector::borrow_mut(&mut board.board, (dest_y as u64));
        let dest_piece = vector::borrow_mut(row, (dest_x as u64));
        let maybe_old_piece = option::swap_or_fill(dest_piece, piece);

        // Drop whatever piece (if any) was at the destination.
        maybe_old_piece;
    }

    // Useful for tests to set up the board with some pieces missing.
    #[test_only]
    fun delete_piece(board: &mut Board, x: u8, y: u8) {
        let piece = borrow_piece_mut(board, x, y);
        let piece = option::extract(piece);

        // Drop the piece that was at the destination.
        piece;
    }

    fun is_valid_move(board: &Board, src_x: u8, src_y: u8, dest_x: u8, dest_y: u8, color: u8, piece_status: PieceStatus): bool {
        let moving_piece = option::borrow(vector::borrow(vector::borrow(&board.board, (src_y as u64)), (src_x as u64)));
        let piece_type = moving_piece.piece_type;

        // Assert the move is valid based on the piece's movement rules.
        let valid_move: bool;
        if (piece_type == KING) {
            valid_move = (
                is_valid_king_move_basic(board, src_x, src_y, dest_x, dest_y, color) ||
                is_valid_king_move_castle(board, src_x, src_y, dest_x, dest_y, color, &piece_status)
            );
        } else if (piece_type == QUEEN) {
            valid_move = is_valid_queen_move(board, src_x, src_y, dest_x, dest_y, color);
        } else if (piece_type == ROOK) {
            valid_move = is_valid_rook_move(board, src_x, src_y, dest_x, dest_y, color);
        } else if (piece_type == BISHOP) {
            valid_move = is_valid_bishop_move(board, src_x, src_y, dest_x, dest_y, color);
        } else if (piece_type == KNIGHT) {
            valid_move = is_valid_knight_move(board, src_x, src_y, dest_x, dest_y, color);
        } else if (piece_type == PAWN) {
            valid_move = is_valid_pawn_move(board, src_x, src_y, dest_x, dest_y, color);
        } else {
            // This should never be possible.
            abort 0
        };

        valid_move
    }

    fun position_is_valid(position: u8): bool {
        position < 8
    }

    fun is_valid_basic(board: &Board, src_x: u8, src_y: u8, dest_x: u8, dest_y: u8, color: u8): bool {
        // Check that the positions are in the valid range.
        if (!position_is_valid(src_x) || !position_is_valid(src_y) || !position_is_valid(dest_x) || !position_is_valid(dest_y)) {
            return false
        };

        // Check that the piece is moving.
        if (src_x == dest_x && src_y == dest_y) {
            return false
        };

        // Check that there is a piece in the start position and the player owns it.
        let moving_piece = vector::borrow(vector::borrow(&board.board, (src_y as u64)), (src_x as u64));
        if (option::is_none(moving_piece)) {
            return false
        };
        if (option::borrow(moving_piece).color == color) {
            return false
        };

        return true
    }

    fun find_king(board: &Board, color: u8): (u8, u8) {
        let y: u8 = 0;

        loop {
            let row = vector::borrow(&board.board, (y as u64));
            let x: u8 = 0;
            loop {
                let piece_opt = vector::borrow(row, (x as u64));
                if (option::is_some(piece_opt)) {
                    let piece = option::borrow(piece_opt);
                    if (piece.color == color && piece.piece_type == KING) {
                        return (x, y)
                    };
                };

                x = x + 1;
                if (x == 8) {
                    break
                }
            };
            y = y + 1;
            if (y == 8) {
                break
            };
        };

        // The code should never reach here, as every board must have a king for each player.
        abort 0
    }

    #[test(player1 = @0x123, player2 = @0x321)]
    fun test_find_king(player1: &signer, player2: &signer) acquires GameStore {
        // This is necessary because the GameStore contains event handles.
        account::create_account_for_test(signer::address_of(player1));

        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        create_game(player1, player2_addr);
        let game_store = borrow_global_mut<GameStore>(player1_addr);
        let game = table::borrow(&game_store.games, (game_store.next_index - 1));

        let (x, y) = find_king(&game.board, WHITE);
        assert!(x == 4, 1);
        assert!(y == 0, 2);

        let (x, y) = find_king(&game.board, BLACK);
        assert!(x == 4, 3);
        assert!(y == 7, 4);
    }

    // This function checks whether the king of a particular color would be in check if
    // it were at the given position.
    fun is_position_in_check(board: &Board, piece_x: u8, piece_y: u8, color: u8): bool {
        let opponent = if (color == WHITE) { BLACK } else { WHITE };

        let x: u8 = 0;
        let y: u8 = 0;

        loop {
            let piece_opt = vector::borrow(vector::borrow(&board.board, (y as u64)), (x as u64));
            if (option::is_some(piece_opt)) {
                let piece = option::borrow(piece_opt);

                if (piece.color == opponent) {
                    // TODO: I don't think the PieceStatus matters here but double check.
                    let piece_status = PieceStatus {
                        queen_side_rook_has_moved: false,
                        king_side_rook_has_moved: false,
                        king_has_moved: false,
                    };
                    if (is_valid_move(board, x, y, piece_x, piece_y, opponent, piece_status)) {
                        return true
                    };
                };
            };

            x = x + 1;
            if (x == 8) {
                x = 0;
                y = y + 1;
                if (y == 8) {
                    break
                };
            };
        };

        return false
    }

    fun is_king_in_check(board: &Board, color: u8): bool {
        let (king_x, king_y) = find_king(board, color);
        is_position_in_check(board, king_x, king_y, color)
    }

    #[test(player1 = @0x123, player2 = @0x321)]
    fun test_is_king_in_check(player1: &signer, player2: &signer) acquires GameStore {
        // This is necessary because the GameStore contains event handles.
        account::create_account_for_test(signer::address_of(player1));

        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        create_game(player1, player2_addr);
        let game_store = borrow_global_mut<GameStore>(player1_addr);
        let game = table::borrow_mut(&mut game_store.games, (game_store.next_index - 1));

        // Move the white king to 3,3 and verify it is not in check.
        move_piece(&mut game.board, 4, 0, 3, 3);
        assert!(!is_king_in_check(&game.board, WHITE), 1);

        // Move the black knight to 2,5 and verify the white king is in check.
        move_piece(&mut game.board, 1, 7, 2, 5);
        assert!(is_king_in_check(&game.board, WHITE), 2);

        // Move the white king to 0,5 and verify it is in check from the pawn at 1,6.
        move_piece(&mut game.board, 3, 3, 0, 5);
        assert!(is_king_in_check(&game.board, WHITE), 3);

        // Move the white king to 5,4 and verify it is not in check.
        move_piece(&mut game.board, 0, 5, 5, 4);
        assert!(!is_king_in_check(&game.board, WHITE), 4);

        // Move the black pawn at 3,6 to 3,5 and verify that the white king is now in
        // check from the bishop (discovered check).
        move_piece(&mut game.board, 3, 6, 3, 5);
        assert!(is_king_in_check(&game.board, WHITE), 5);

        // Move the white queen to 4,5 to block the check and confirm the white king
        // is no longer in check.
        move_piece(&mut game.board, 3, 0, 4, 5);
        assert!(!is_king_in_check(&game.board, WHITE), 6);
    }

    // TODO: Use the UP DOWN LEFT RIGHT constants
    fun king_has_valid_moves(board: &Board, king_x: u8, king_y: u8, player: u8): bool {
        let dx: vector<u8> = vector::empty();
        let dy: vector<u8> = vector::empty();

        vector::push_back(&mut dx, 0);
        vector::push_back(&mut dx, 1);
        vector::push_back(&mut dx, 1);
        vector::push_back(&mut dx, 1);
        vector::push_back(&mut dx, 0);
        vector::push_back(&mut dx, 7);
        vector::push_back(&mut dx, 7);
        vector::push_back(&mut dx, 7);

        vector::push_back(&mut dy, 1);
        vector::push_back(&mut dy, 1);
        vector::push_back(&mut dy, 0);
        vector::push_back(&mut dy, 7);
        vector::push_back(&mut dy, 7);
        vector::push_back(&mut dy, 7);
        vector::push_back(&mut dy, 0);
        vector::push_back(&mut dy, 1);

        let size = vector::length(&dx);
        let i = 0;

        while (i < size) {
            let delta_x = vector::borrow(&dx, i);
            let delta_y = vector::borrow(&dy, i);
            let new_x = king_x;
            let new_y = king_y;

            if (*delta_x != 0) {
                if (*delta_x == 1) {
                    new_x = new_x + 1;
                } else {
                    if (king_x > 0) {
                        new_x = new_x - 1;
                    };
                };
            };

            if (*delta_y != 0) {
                if (*delta_y == 1) {
                    new_y = new_y + 1;
                } else {
                    if (king_y > 0) {
                        new_y = new_y - 1;
                    };
                };
            };

            if (
                is_valid_king_move_basic(board, king_x, king_y, new_x, new_y, player) &&
                !is_position_in_check(board, new_x, new_y, player)
            ) {
                return true
            };

            i = i + 1;
        };

        return false
    }

    #[test(player1 = @0x123, player2 = @0x321)]
    fun test_king_has_valid_moves(player1: &signer, player2: &signer) acquires GameStore {
        // This is necessary because the GameStore contains event handles.
        account::create_account_for_test(signer::address_of(player1));

        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        create_game(player1, player2_addr);
        let game_store = borrow_global_mut<GameStore>(player1_addr);
        let game = table::borrow_mut(&mut game_store.games, (game_store.next_index - 1));

        // Place the white king at the center of the board.
        move_piece(&mut game.board, 4, 0, 4, 4);

        // Assert the white king has valid moves in this new position.
        assert!(king_has_valid_moves(&game.board, 4, 4, WHITE), 1);

        // Move the two black rooks and queen into rows 3, 4, and 5.
        move_piece(&mut game.board, 0, 7, 0, 3);
        move_piece(&mut game.board, 3, 7, 0, 4);
        move_piece(&mut game.board, 7, 7, 0, 5);

        // Assert that the king has no valid moves now.
        assert!(!king_has_valid_moves(&game.board, 4, 4, WHITE), 2);

        // Move the rook on row 3 back to where it was.
        move_piece(&mut game.board, 0, 3, 0, 7);

        // Assert that the king now has an escape.
        assert!(king_has_valid_moves(&game.board, 4, 4, WHITE), 2);
    }

    // At this point we should have already asserted that the starting position
    // has a rook in it.
    fun is_valid_rook_move(board: &Board, src_x: u8, src_y: u8, dest_x: u8, dest_y: u8, color: u8): bool {
        // Check if the move is either horizontal or vertical.
        if (src_x != dest_x && src_y != dest_y) {
            return false
        };

        let delta_x = difference(src_x, dest_x);
        let delta_y = difference(src_y, dest_y);

        let x_step = if (src_x < dest_x) { RIGHT } else if ( src_x > dest_x ) { LEFT } else { 0 };
        let y_step = if (src_y < dest_y) { UP } else if ( src_y > dest_y ) { DOWN } else { 0 };

        let current_x = src_x;
        let current_y = src_y;

        let steps_remaining = if (delta_x > delta_y) { delta_x } else { delta_y };

        while (steps_remaining > 0) {
            current_x = if (x_step == RIGHT) { current_x + 1 } else if (x_step == LEFT) { current_x - 1 } else { current_x };
            current_y = if (y_step == UP) { current_y + 1 } else if (y_step == DOWN) { current_y - 1 } else { current_y };

            let row = vector::borrow(&board.board, (current_y as u64));
            let piece_opt = vector::borrow(row, (current_x as u64));
            if (option::is_some(piece_opt)) {
                if (current_x == dest_x && current_y == dest_y) {
                    let piece = option::borrow(piece_opt);
                    if (piece.color == color) {
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
        // This is necessary because the GameStore contains event handles.
        account::create_account_for_test(signer::address_of(player1));

        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        create_game(player1, player2_addr);
        let game_store = borrow_global_mut<GameStore>(player1_addr);
        let game = table::borrow(&game_store.games, (game_store.next_index - 1));

        let color = WHITE;

        // Note: We don't validate that the starting position has a rook in it.
        // This is nice because we can put a rook anywhere on a freshly set up
        // board to test move validity.

        // A rook in the starting position in 0,0 should not be able to move right
        // since a friendly bishop is in the way.
        assert!(!is_valid_rook_move(&game.board, 0, 0, 1, 0, color), 1);

        // A rook at 0,2 should not be able to take the enemy rook at 0,7 because
        // a pawn is in the way at 0,6.
        assert!(!is_valid_rook_move(&game.board, 0, 2, 0, 7, color), 2);

        // A rook at 0,2 should be able to take the enemy pawn at 0,6 because
        // there is nothing in the way.
        assert!(is_valid_rook_move(&game.board, 0, 2, 0, 6, color), 3);

        // A rook at 0,2 should not be able to take its own pawn at 0,1.
        assert!(!is_valid_rook_move(&game.board, 0, 2, 0, 1, color), 3);

        // A rook at 0,4 should be able to move to 7,4 because nothing is in the way.
        assert!(is_valid_rook_move(&game.board, 0, 4, 7, 4, color), 4);

        // A rook should not be able to move diagonally.
        assert!(!is_valid_rook_move(&game.board, 3, 3, 4, 4, color), 5);
    }

    fun is_valid_knight_move(board: &Board, src_x: u8, src_y: u8, dest_x: u8, dest_y: u8, color: u8): bool {
        let delta_x = difference(src_x, dest_x);
        let delta_y = difference(src_y, dest_y);

        if (!((delta_x == 1 && delta_y == 2) || (delta_x == 2 && delta_y == 1))) {
            return false
        };

        let to_piece_opt = vector::borrow(vector::borrow(&board.board, (dest_y as u64)), (dest_x as u64));
        if (option::is_some(to_piece_opt)) {
            let to_piece = option::borrow(to_piece_opt);
            if (to_piece.color == color) {
                return false
            }
        };

        return true
    }

    #[test(player1 = @0x123, player2 = @0x321)]
    fun test_is_valid_knight_move(player1: &signer, player2: &signer) acquires GameStore {
        // This is necessary because the GameStore contains event handles.
        account::create_account_for_test(signer::address_of(player1));

        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        create_game(player1, player2_addr);
        let game_store = borrow_global_mut<GameStore>(player1_addr);
        let game = table::borrow(&game_store.games, (game_store.next_index - 1));

        let color = WHITE;

        // Test 1: Knight should be able to move in L-shape (2 squares in one axis and 1 square in the other)
        assert!(is_valid_knight_move(&game.board, 1, 0, 2, 2, color), 1);

        // Test 2: Knight should be able to move in L-shape (1 square in one axis and 2 squares in the other)
        assert!(is_valid_knight_move(&game.board, 2, 2, 4, 3, color), 2);

        // Test 3: Knight should be able to capture an opponent's piece (the enemy rook at 0,7)
        assert!(is_valid_knight_move(&game.board, 1, 5, 0, 7, color), 3);

        // Test 4: Knight should not be able to capture a friendly piece
        assert!(!is_valid_knight_move(&game.board, 1, 0, 3, 1, color), 4);

        // Test 5: Knight should not be able to move in a straight line
        assert!(!is_valid_knight_move(&game.board, 3, 2, 3, 4, color), 5);

        // Test 6: Knight should not be able to move in a diagonal line
        assert!(!is_valid_knight_move(&game.board, 3, 2, 4, 3, color), 6);
    }

    fun is_valid_bishop_move(board: &Board, src_x: u8, src_y: u8, dest_x: u8, dest_y: u8, color: u8): bool {
        if (!position_is_valid(src_x) || !position_is_valid(src_y) || !position_is_valid(dest_x) || !position_is_valid(dest_y)) {
            return false
        };

        let delta_x = if (src_x > dest_x) { src_x - dest_x } else { dest_x - src_x };
        let delta_y = if (src_y > dest_y) { src_y - dest_y } else { dest_y - src_y };

        if (delta_x != delta_y) {
            return false
        };

        let x_step = if (src_x < dest_x) { RIGHT } else if ( src_x > dest_x ) { LEFT } else { 0 };
        let y_step = if (src_y < dest_y) { UP } else if ( src_y > dest_y ) { DOWN } else { 0 };

        let current_x = src_x;
        let current_y = src_y;
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

        let to_piece_opt = vector::borrow(vector::borrow(&board.board, (dest_y as u64)), (dest_x as u64));
        if (option::is_some(to_piece_opt)) {
            let to_piece = option::borrow(to_piece_opt);
            if (to_piece.color == color) {
                return false
            }
        };

        return true
    }

    #[test(player1 = @0x123, player2 = @0x321)]
    fun test_is_valid_bishop_move(player1: &signer, player2: &signer) acquires GameStore {
        // This is necessary because the GameStore contains event handles.
        account::create_account_for_test(signer::address_of(player1));

        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        create_game(player1, player2_addr);
        let game_store = borrow_global_mut<GameStore>(player1_addr);
        let game = table::borrow(&game_store.games, (game_store.next_index - 1));

        let color = WHITE;

        // A bishop at 2,0 should not be able to move to 4,2, because its own pawn is in the way.
        assert!(!is_valid_bishop_move(&game.board, 2, 0, 4, 2, color), 1);

        // A bishop at 3,3 should not be able to move to 3,5, because it's not a diagonal move.
        assert!(!is_valid_bishop_move(&game.board, 3, 3, 3, 5, color), 2);

        // A bishop at 2,2 should be able to move to 5,5, because nothing is in the way.
        assert!(is_valid_bishop_move(&game.board, 2, 2, 5, 5, color), 3);

        // A bishop at 3,3 should be able to capture the enemy pawn at 6,6.
        assert!(is_valid_bishop_move(&game.board, 3, 3, 6, 6, color), 4);

        // A bishop at 3,3 should not be able to capture its own pawn at 5,1.
        assert!(!is_valid_bishop_move(&game.board, 3, 3, 5, 1, color), 5);
    }

    // This just checks that the king is allowed to move into the square based on its
    // normal movement rules (one square in any direction) and that it's not moving
    // into a square occupied by a friendly piece. It does not check for checks or
    // anything, this is covered by other functions. It does not check for castling.
    fun is_valid_king_move_basic(board: &Board, src_x: u8, src_y: u8, dest_x: u8, dest_y: u8, color: u8): bool {
        let delta_x = difference(src_x, dest_x);
        let delta_y = difference(src_y, dest_y);

        // Check if the move is within one square in any direction.
        if (delta_x > 1 || delta_y > 1) {
            return false
        };

        let to_piece_opt = vector::borrow(vector::borrow(&board.board, (dest_y as u64)), (dest_x as u64));

        // If there's a piece at the target position, ensure it's not a friendly piece.
        if (option::is_some(to_piece_opt)) {
            let to_piece = option::borrow(to_piece_opt);
            if (to_piece.color == color) {
                return false
            };
        };

        return true
    }

    #[test(player1 = @0x123, player2 = @0x321)]
    fun test_is_valid_king_move_basic(player1: &signer, player2: &signer) acquires GameStore {
        // This is necessary because the GameStore contains event handles.
        account::create_account_for_test(signer::address_of(player1));

        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        create_game(player1, player2_addr);
        let game_store = borrow_global_mut<GameStore>(player1_addr);
        let game = table::borrow(&game_store.games, (game_store.next_index - 1));

        let color = WHITE;

        // A king at 4,0 should not be able to move to 4,2, because it's more than one square away.
        assert!(!is_valid_king_move_basic(&game.board, 4, 0, 4, 2, color), 1);

        // A king at 4,0 should not be able to move to 6,0, because it's more than one square away.
        assert!(!is_valid_king_move_basic(&game.board, 4, 0, 6, 0, color), 2);

        // A king at 3,3 should be able to move to 4,4 because it's one square away and no piece is blocking the way.
        assert!(is_valid_king_move_basic(&game.board, 3, 3, 4, 4, color), 3);

        // A king at 0,7 should be able to capture the enemy knight at 1,7.
        assert!(is_valid_king_move_basic(&game.board, 0, 7, 1, 7, color), 4);

        // A king at 4,0 should not be able to capture its own queen at 3,0.
        assert!(!is_valid_king_move_basic(&game.board, 4, 0, 3, 0, color), 5);
    }

    // todo
    fun is_valid_king_move_castle(
        board: &Board,
        src_x: u8,
        src_y: u8,
        dest_x: u8,
        dest_y: u8,
        color: u8,
        piece_status: &PieceStatus
    ): bool {

        // Ensure the king hasn't moved yet.
        if (piece_status.king_has_moved) {
            return false
        };

        // Ensure the king is only moving horizontally.
        if (src_y != dest_y) {
            return false
        };

        let delta_x = difference(src_x, dest_x);

        // Ensure the x coordinate difference is 2.
        if (delta_x != 2) {
            return false
        };

        let rook_x: u8;
        let is_king_side_castle: bool;

        if (dest_x > src_x) {
            // King-side castling.
            rook_x = 7;
            is_king_side_castle = true;
        } else {
            // Queen-side castling.
            rook_x = 0;
            is_king_side_castle = false;
        };

        // Ensure the corresponding rook hasn't moved yet.
        if (is_king_side_castle && piece_status.king_side_rook_has_moved) {
            return false
        } else if (!is_king_side_castle && piece_status.queen_side_rook_has_moved) {
            return false
        };

        // Ensure the corresponding rook is still on the board.
        let rook_opt = if (is_king_side_castle) {
            borrow_piece(board, 7, src_y)
        } else {
            borrow_piece(board, 0, src_y)
        };
        if (option::is_none(rook_opt)) {
            return false
        };

        let (start, end) = if (is_king_side_castle) { (src_x + 1, rook_x - 1) } else { (rook_x + 1, src_x - 1) };

        // Ensure the squares between the king and rook are unoccupied.
        let x = start;
        while (x < end) {
            let piece_opt = vector::borrow(vector::borrow(&board.board, (src_y as u64)), (x as u64));
            if (option::is_some(piece_opt)) {
                return false
            };
            x = x + 1;
        };

        // Ensure the king is not currently in check. You cannot castle out of check.
        if (is_position_in_check(board, src_x, src_y, color)) {
            return false
        };

        // Ensure the squares the king moves across and the square the king ends on
        // are not under attack.
        if (is_king_side_castle) {
            if (
                is_position_in_check(board, src_x + 1, src_y, color) ||
                is_position_in_check(board, src_x + 2, src_y, color)
            ) {
                return false
            }
        } else {
            if (
                is_position_in_check(board, src_x - 1, src_y, color) ||
                is_position_in_check(board, src_x - 2, src_y, color)
            ) {
                return false
            }
        };

        return true
    }

    #[test(player1 = @0x123, player2 = @0x321)]
    fun test_is_valid_king_move_castle(player1: &signer, player2: &signer) acquires GameStore {
        // This is necessary because the GameStore contains event handles.
        account::create_account_for_test(signer::address_of(player1));

        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        create_game(player1, player2_addr);
        let game_store = borrow_global_mut<GameStore>(player1_addr);
        let game = table::borrow_mut(&mut game_store.games, (game_store.next_index - 1));

        let color = WHITE;

        // The king should not be able to castle in either direction at the start.
        assert!(!is_valid_king_move_castle(&game.board, 4, 0, 6, 0, color, &game.white_piece_status), 1);
        assert!(!is_valid_king_move_castle(&game.board, 4, 0, 2, 0, color, &game.white_piece_status), 1);

        // Remove the king side bishop and knight. Confirm that the king can now castle
        // king side.
        delete_piece(&mut game.board, 5, 0);
        delete_piece(&mut game.board, 6, 0);
        assert!(is_valid_king_move_castle(&game.board, 4, 0, 6, 0, color, &game.white_piece_status), 2);

        // Assert that the king still can't castle queen side.
        assert!(!is_valid_king_move_castle(&game.board, 4, 0, 2, 0, color, &game.white_piece_status), 3);

        // Remove the queen side knight. Confirm that the king still can't castle queen
        // side.
        delete_piece(&mut game.board, 1, 0);
        assert!(!is_valid_king_move_castle(&game.board, 4, 0, 2, 0, color, &game.white_piece_status), 4);

        // Remove the queen. Confirm that the king still can't castle queen side.
        delete_piece(&mut game.board, 3, 0);
        assert!(!is_valid_king_move_castle(&game.board, 4, 0, 2, 0, color, &game.white_piece_status), 5);

        // Remove the queen side bishop. Confirm that the king can now castle queen
        // side.
        delete_piece(&mut game.board, 2, 0);
        assert!(is_valid_king_move_castle(&game.board, 4, 0, 2, 0, color, &game.white_piece_status), 6);

        // Remove the king side rook. Confirm that the king can no longer castle
        // king side.
        delete_piece(&mut game.board, 7, 0);
        assert!(!is_valid_king_move_castle(&game.board, 4, 0, 6, 0, color, &game.white_piece_status), 7);

        // Mark the queen side rook has having moved. Confirm that the king can no
        // longer castle queen side.
        game.white_piece_status.queen_side_rook_has_moved = true;
        assert!(!is_valid_king_move_castle(&game.board, 4, 0, 2, 0, color, &game.white_piece_status), 8);

        // Mark it as not having moved again but mark the king as having moved. Confirm
        // that the king can no longer castle.
        game.white_piece_status.queen_side_rook_has_moved = false;
        game.white_piece_status.king_has_moved = true;
        assert!(!is_valid_king_move_castle(&game.board, 4, 0, 2, 0, color, &game.white_piece_status), 9);

        // Mark the king as not having moved.
        game.white_piece_status.king_has_moved = false;

        // Remove all the queen side pawns.
        delete_piece(&mut game.board, 0, 1);
        delete_piece(&mut game.board, 1, 1);
        delete_piece(&mut game.board, 2, 1);
        delete_piece(&mut game.board, 3, 1);
        delete_piece(&mut game.board, 4, 1);

        // Place a black rook such that it watches the column with the rook. Confirm
        // that queen side castling is still valid.
        move_piece(&mut game.board, 7, 7, 0, 3);
        assert!(is_valid_king_move_castle(&game.board, 4, 0, 2, 0, color, &game.white_piece_status), 10);

        // Move the black rook to watch the column that had the knight. Confirm that
        // queen side castling is still valid.
        move_piece(&mut game.board, 0, 3, 1, 3);
        assert!(is_valid_king_move_castle(&game.board, 4, 0, 2, 0, color, &game.white_piece_status), 11);

        // Move the black rook to watch the column that had the bishop. Confirm that
        // queen side castling is no longer valid.
        move_piece(&mut game.board, 1, 3, 2, 3);
        assert!(!is_valid_king_move_castle(&game.board, 4, 0, 2, 0, color, &game.white_piece_status), 11);

        // Move the black rook to watch the column that had the queen. Confirm that
        // queen side castling is no longer valid.
        move_piece(&mut game.board, 2, 3, 3, 3);
        assert!(!is_valid_king_move_castle(&game.board, 4, 0, 2, 0, color, &game.white_piece_status), 11);

        // Move the black rook to watch the column that has the king. Confirm that
        // queen side castling is no longer valid.
        move_piece(&mut game.board, 3, 3, 4, 3);
        assert!(!is_valid_king_move_castle(&game.board, 4, 0, 2, 0, color, &game.white_piece_status), 11);

        // Remove the black rook. Confirm that queen side castling is now valid again.
        delete_piece(&mut game.board, 4, 3);
        assert!(is_valid_king_move_castle(&game.board, 4, 0, 2, 0, color, &game.white_piece_status), 12);
    }

    fun is_valid_queen_move(board: &Board, src_x: u8, src_y: u8, dest_x: u8, dest_y: u8, color: u8): bool {
        return (is_valid_rook_move(board, src_x, src_y, dest_x, dest_y, color) || is_valid_bishop_move(board, src_x, src_y, dest_x, dest_y, color))
    }

    fun is_valid_pawn_move(board: &Board, src_x: u8, src_y: u8, dest_x: u8, dest_y: u8, color: u8): bool {
        let allowed_direction: u8 = if (color == WHITE) { UP } else { DOWN };

        let delta_x = difference(src_x, dest_x);
        let delta_y = difference(src_y, dest_y);

        // There is no valid pawn move where it doesn't move along the y axis.
        if (delta_y == 0) {
            return false
        };

        let actual_direction: u8 = if (src_y < dest_y) { UP } else { DOWN };

        if (actual_direction != allowed_direction) {
            return false
        };

        let to_piece_opt = vector::borrow(vector::borrow(&board.board, (dest_y as u64)), (dest_x as u64));

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
                    if (src_y != 1) {
                        return false
                    };
                    middle_piece_opt = vector::borrow(vector::borrow(&board.board, ((src_y + 1) as u64)), (src_x as u64))
                } else {
                    if (src_y != 6) {
                        return false
                    };
                    middle_piece_opt = vector::borrow(vector::borrow(&board.board, ((src_y - 1) as u64)), (src_x as u64))
                };
                if (option::is_none(middle_piece_opt)) {
                    return true
                };
            };
        }
        else if (delta_x == 1 && delta_y == 1) {
            // Capture diagonally.
            if (option::is_some(to_piece_opt)) {
                let to_piece = option::borrow(to_piece_opt);
                if (to_piece.color != color) {
                    return true
                };
            };
        };

        return false
    }

    #[test(player1 = @0x123, player2 = @0x321)]
    fun test_is_valid_pawn_move(player1: &signer, player2: &signer) acquires GameStore {
        // This is necessary because the GameStore contains event handles.
        account::create_account_for_test(signer::address_of(player1));

        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        create_game(player1, player2_addr);
        let game_store = borrow_global_mut<GameStore>(player1_addr);
        let game = table::borrow(&game_store.games, (game_store.next_index - 1));

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

        // TODO: Test pawn promotion works.
    }

    // TODO: Surely this exists in a math module somewhere.
    fun difference(a: u8, b: u8): u8 {
        if (a > b) {
            return a - b
        } else {
            return b - a
        }
    }

    fun borrow_piece(board: &Board, x: u8, y: u8): &Option<Piece> {
        return vector::borrow(vector::borrow(&board.board, (y as u64)), (x as u64))
    }

    fun borrow_piece_mut(board: &mut Board, x: u8, y: u8): &mut Option<Piece> {
        return vector::borrow_mut(vector::borrow_mut(&mut board.board, (y as u64)), (x as u64))
    }
}
