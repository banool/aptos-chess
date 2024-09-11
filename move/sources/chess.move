// I use a coordinate system where 0,0 is the white rook in the bottom left corner.
// Or in standard chess notation, 0,0 is a1.

// All TODOs have been moved to GitHub issues.

module addr::chess {
    use std::error;
    use std::option::{Self, Option};
    use std::signer;
    use std::vector;
    use aptos_framework::event;
    use aptos_framework::object::{Self, Object};

    #[test_only]
    use std::features;
    #[test_only]
    use aptos_framework::account;

    /// You tried to make an invalid move based on that piece's specific movement rules.
    const E_INVALID_MOVE: u64 = 1;

    /// This Move would leave your king in check.
    const E_INVALID_MOVE_KING_IN_CHECK: u64 = 2;

    /// You tried to make a move out of turn.
    const E_NOT_YOUR_TURN: u64 = 3;

    /// You tried to make a move in a game that is finished.
    const E_GAME_FINISHED: u64 = 4;

    /// You tried to join a game that you're not a part of.
    const E_PLAYER_NOT_IN_GAME: u64 = 5;

    /// You tried to make a game with themselves.
    const E_PLAYER_MADE_GAME_WITH_SELF: u64 = 6;

    /// You tried to promote to an invalid piece type.
    const E_INVALID_PROMOTION_INTENT: u64 = 7;

    /// You tried to accept a draw but the other player didn't offer one.
    const E_NO_DRAW_OFFERED: u64 = 8;

    /// You tried to accept a draw but you're the one who offered it.
    const E_CANNOT_ACCEPT_OWN_DRAW_OFFER: u64 = 515;

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

    struct Piece has copy, drop, store {
        color: u8,
        piece_type: u8,
    }

    struct Board has copy, drop, store {
        board: vector<vector<Option<Piece>>>,
    }

    struct EnPassantTarget has drop, store {
        x: u8,
        y: u8,
    }

    struct Game has key, store {
        player1: address,
        player2: address,
        board: Board,
        is_white_turn: bool,
        white_piece_status: PieceStatus,
        black_piece_status: PieceStatus,
        en_passant_target: Option<EnPassantTarget>,
        game_status: u8,
        player_resigned: bool,
        draw_offered_by: Option<u8>,
        // In FEN terms a half move is a single piece move. A full move is when both
        // white and black have moved. The number of full moves is just the number of
        // half moves divided by 2 rounded down + 1.
        num_half_moves: u8,
        // This is used for determining the 50 / 75 move rule.
        num_half_moves_since_last_capture_or_pawn_advance: u8,
    }

    struct PieceStatus has copy, drop, store {
        queen_side_rook_has_moved: bool,
        king_side_rook_has_moved: bool,
        king_has_moved: bool,
    }

    #[event]
    struct GameCreatedEvent has drop, store {
        // The address of the creator.
        creator_address: address,

        // The address of the opponent.
        opponent_address: address,

        // The address of the object.
        object_address: address,
    }

    public entry fun create_game(player1: &signer, player2_addr: address) {
        create_game_(player1, player2_addr);
    }

    // Create a new game
    public fun create_game_(player1: &signer, player2_addr: address): Object<Game> {
        let player1_addr = signer::address_of(player1);

        // Assert that the player isn't making a game with themselves.
        assert!(player1_addr != player2_addr, E_PLAYER_MADE_GAME_WITH_SELF);

        // Create the board.
        let board = create_board();

        // Set up initial relevant status of the pieces.
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
            en_passant_target: option::none(),
            game_status: ACTIVE,
            player_resigned: false,
            draw_offered_by: option::none(),
            num_half_moves: 0,
            num_half_moves_since_last_capture_or_pawn_advance: 0,
        };

        let constructor_ref = object::create_object(player1_addr);

        let object_signer = object::generate_signer(&constructor_ref);

        // Move the game into the container alongside the ObjectCore.
        move_to(&object_signer, game);

        let obj = object::object_from_constructor_ref(&constructor_ref);

        // Emit an event so that the frontend can discover games using the events table
        // in the indexer.
        event::emit(
            GameCreatedEvent {
                creator_address: player1_addr,
                opponent_address: player2_addr,
                object_address: object::object_address(&obj),
            },
        );

        obj
    }

    // Initialize and create a new board
    public fun create_board(): Board {
        let board = vector::empty();

        // Create the board with starting positions for Player 1 (WHITE) and Player 2 (BLACK).
        for (i in 0..8) {
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
                for (j in 0..8) {
                    vector::push_back(&mut row, option::some(Piece { color: color, piece_type: PAWN }));
                }
            } else {
                for (j in 0..8) {
                    vector::push_back(&mut row, option::none());
                };
            };

            vector::push_back(&mut board, row);
        };

        Board { board: board }
    }

    // Make a move in an active game.
    public entry fun make_move(
        player: &signer,
        game: Object<Game>,
        src_x: u8,
        src_y: u8,
        dest_x: u8,
        dest_y: u8,
        // This is the piece type that the player is promoting to. This is only
        // relevant for pawn moves to the enemy end of the board. This will be ignored
        // if the move is not a pawn move to the enemy end of the board.
        promote_to: u8,
    ) acquires Game {
        let player_addr = signer::address_of(player);

        let game_ = borrow_global_mut<Game>(object::object_address(&game));

        // Assert the game is not finished.
        assert!(game_.game_status == ACTIVE, error::invalid_state(E_GAME_FINISHED));

        // For now player1 is always white, so if the player trying to make the move is
        // player1 then it must be white's turn.
        let color;
        if (game_.player1 == player_addr) {
            assert!(game_.is_white_turn, error::invalid_state(E_NOT_YOUR_TURN));
            color = WHITE;
        } else if (game_.player2 == player_addr) {
            assert!(!game_.is_white_turn, error::invalid_state(E_NOT_YOUR_TURN));
            color = BLACK;
        } else {
            abort(E_PLAYER_NOT_IN_GAME)
        };

        let enemy_color;
        let piece_status;
        if (color == WHITE) {
            enemy_color = BLACK;
            piece_status = game_.white_piece_status;
        } else {
            enemy_color = WHITE;
            piece_status = game_.black_piece_status;
        };

        // Assert the move is valid based on the piece's movement rules.
        assert!(
            is_valid_move(&game_.board, src_x, src_y, dest_x, dest_y, color, piece_status, &game_.en_passant_target, false),
            error::invalid_argument(E_INVALID_MOVE),
        );

        // Get the moving piece. At this point we have asserted that there is a piece
        // in the starting position, so we can unwrap the option.
        let moving_piece = option::borrow(borrow_piece(&game_.board, src_x, src_y));
        let piece_type = moving_piece.piece_type;


        // Set the source position to none.
        let piece = {
            let row = vector::borrow_mut(&mut game_.board.board, (src_y as u64));
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

        // If the piece is a pawn and it moved to the en passant target, capture the
        // enemy pawn.
        if (piece_type == PAWN && option::is_some(&game_.en_passant_target)) {
            let en_passant_target = option::borrow(&game_.en_passant_target);
            if (dest_x == en_passant_target.x && dest_y == en_passant_target.y) {
                // Remove the enemy pawn.
                let enemy_pawn_y = if (color == WHITE) { dest_y - 1 } else { dest_y + 1 };
                let enemy_pawn = {
                    let row = vector::borrow_mut(&mut game_.board.board, (enemy_pawn_y as u64));
                    let enemy_pawn = vector::borrow_mut(row, (dest_x as u64));
                    option::extract(enemy_pawn)
                };
                enemy_pawn;
            };
        };

        // If the piece moved is a pawn and it moved two spaces, record that there is a
        // valid en passant target. Otherwise, remove any en passant target. We have
        // already checked whether this was valid, e.g. if the piece was at the
        // starting position, so we don't need to check that again.
        let delta_y = difference(src_y, dest_y);
        if (delta_y == 2 && piece_type == PAWN) {
            let en_passant_target = if (color == WHITE) {
                EnPassantTarget { x: dest_x, y: dest_y - 1 }
            } else {
                EnPassantTarget { x: dest_x, y: dest_y + 1 }
            };
            game_.en_passant_target = option::some(en_passant_target);
        } else {
            // En passant must be exercised immediately or the privilege is lost.
            game_.en_passant_target = option::none();
        };

        // Put the piece in the destination position.
        let row = vector::borrow_mut(&mut game_.board.board, (dest_y as u64));
        let dest_piece = vector::borrow_mut(row, (dest_x as u64));
        let maybe_old_piece = option::swap_or_fill(dest_piece, piece);

        let piece_was_captured = option::is_some(&maybe_old_piece);

        // Drop the piece that has just been taken, if any.
        maybe_old_piece;

        // Assert that the player's king is not in check now as a result of that move.
        let (king_x, king_y) = find_king(&game_.board, color);
        assert!(!is_position_in_check(&game_.board, king_x, king_y, color), error::invalid_state(E_INVALID_MOVE_KING_IN_CHECK));

        // Update whose turn it is.
        game_.is_white_turn = !game_.is_white_turn;

        // Bump the number of half moves.
        game_.num_half_moves = game_.num_half_moves + 1;

        if (piece_type == PAWN || piece_was_captured) {
            game_.num_half_moves_since_last_capture_or_pawn_advance = 0;
        } else {
            game_.num_half_moves_since_last_capture_or_pawn_advance = game_.num_half_moves_since_last_capture_or_pawn_advance + 1;
        };

        let (enemy_king_x, enemy_king_y) = find_king(&game_.board, enemy_color);
        if (is_checkmate(&game_.board, enemy_king_x, enemy_king_y, enemy_color)) {
            // TODO: https://github.com/banool/aptos-chess/issues/5
            game_.game_status = if (color == WHITE) { WHITE_WON } else { BLACK_WON };
            return
        };

        // TODO: Check for stalemate: https://github.com/banool/aptos-chess/issues/6

        // If there is an active draw offer, consider making a move either a retraction
        // or a rejection of that offer.
        game_.draw_offered_by = option::none();
    }

    // If the the enemy king is in check, has no valid moves itself, and the enemy
    // can't take a piece or block to get their king out of check, that is checkmate.
    fun is_checkmate(board: &Board, king_x: u8, king_y: u8, king_color: u8): bool {
        let attackers = find_attackers(board, king_x, king_y, king_color);
        (
            is_position_in_check(board, king_x, king_y, king_color) &&
            !king_has_valid_moves(board, king_x, king_y, king_color) &&
            !can_remove_check(board, king_x, king_y, king_color, &attackers)
        )
    }

    public entry fun resign(
        player: &signer,
        game: Object<Game>,
    ) acquires Game {
        let game_ = borrow_global_mut<Game>(object::object_address(&game));

        let player_addr = signer::address_of(player);

        game_.player_resigned = true;

        let player_color = determine_color(game_, &player_addr);

        if (player_color == WHITE) {
            game_.game_status = BLACK_WON;
        } else {
            game_.game_status = WHITE_WON;
        }
    }

    // Even though it is good etiquete to make a move before offering a draw, it is not
    // a rule, so we don't enforce it here.
    public entry fun offer_draw(
        player: &signer,
        game: Object<Game>,
    ) acquires Game {
        // TODO: This is incomplete: https://github.com/banool/aptos-chess/issues/7
        let game_ = borrow_global_mut<Game>(object::object_address(&game));

        let player_addr = signer::address_of(player);

        let player_color = determine_color(game_, &player_addr);

        game_.draw_offered_by = option::some(player_color);
    }

    public entry fun accept_draw(
        player: &signer,
        game: Object<Game>,
    ) acquires Game {
        // TODO: This is incomplete: https://github.com/banool/aptos-chess/issues/7
        let game_ = borrow_global_mut<Game>(object::object_address(&game));

        let player_addr = signer::address_of(player);

        let player_color = determine_color(game_, &player_addr);

        // Make sure the other player offered a draw.
        assert!(option::is_some(&game_.draw_offered_by), error::invalid_state(E_NO_DRAW_OFFERED));
        assert!(option::borrow(&game_.draw_offered_by) != &player_color, error::invalid_state(E_CANNOT_ACCEPT_OWN_DRAW_OFFER));

        game_.game_status = DRAW;
    }

    #[test_only]
    fun setup(
        aptos_framework: &signer,
        player1_addr: address,
        player2_addr: address,
    ) {
        account::create_account_for_test(player1_addr);
        account::create_account_for_test(player2_addr);
        features::change_feature_flags(
            aptos_framework,
            vector[
                features::get_auids(),
                features::get_module_event_feature(),
            ],
            vector[],
        );
    }

    // TODO: Change everywhere we accept x and y to accept EnPassantTarget, which
    // should be renamed to Position.

    // Useful for tests to move pieces wherever you want with no validation. Don't use
    // on the real board, only use it on a clone or in tests.
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

    fun is_valid_move(
        board: &Board,
        src_x: u8,
        src_y: u8,
        dest_x: u8,
        dest_y: u8,
        color: u8,
        piece_status: PieceStatus,
        en_passant_target: &Option<EnPassantTarget>,
        // If set, consider a move valid even if there is a friendly piece at the
        // destination. Useful for checking if one piece defends another.
        ignore_same_color_piece_at_dest: bool,
    ): bool {
        // Assert the move passes some basic validity checks.
        if (!is_valid_basic(board, src_x, src_y, dest_x, dest_y, color)) {
            return false
        };

        let board = if (ignore_same_color_piece_at_dest) {
            // Make a clone of the board so we can remove the dest piece if
            // ignore_piece_at_dest is true.
            let board_clone = *board;

            // Remove the piece at the destination in the clone if it is the same color
            // as the piece we're moving.
            let dest_piece_option = borrow_piece_mut(&mut board_clone, dest_x, dest_y);
            if (option::is_some(dest_piece_option)) {
                if (option::borrow(dest_piece_option).color == color) {
                    option::extract(dest_piece_option);
                };
            };

            &board_clone
        } else {
            // No need to clone it, just use the board that was passed in.
            board
        };

        let moving_piece = option::borrow(borrow_piece(board, src_x, src_y));
        let piece_type = moving_piece.piece_type;

        // Assert the move is valid based on the piece's movement rules.
        let valid_move: bool;
        if (piece_type == KING) {
            // We don't check if the king would be in check after this move, we do that
            // later.
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
            valid_move = is_valid_pawn_move(board, src_x, src_y, dest_x, dest_y, color, en_passant_target);
        } else {
            // This should never be possible.
            abort 0
        };

        // No need to put the piece back if ignore_piece_at_dest was true, we were only
        // working with a clone.

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

        // Check that there is a piece in the start position.
        let moving_piece = borrow_piece(board, src_x, src_y);
        if (option::is_none(moving_piece)) {
            return false
        };

        // Check that the player owns it.
        if (option::borrow(moving_piece).color != color) {
            return false
        };

        return true
    }

    fun find_king(board: &Board, color: u8): (u8, u8) {
        for (x in 0..8) {
            for (y in 0..8) {
                let piece_opt = borrow_piece(board, x, y);
                if (option::is_some(piece_opt)) {
                    let piece = option::borrow(piece_opt);
                    if (piece.color == color && piece.piece_type == KING) {
                        return (x, y)
                    };
                };
            };
        };

        // The code should never reach here, as every board must have a king for each player.
        abort 0
    }

    #[test(aptos_framework = @aptos_framework, player1 = @0x123, player2 = @0x321)]
    fun test_find_king(aptos_framework: &signer, player1: &signer, player2: &signer) acquires Game {
        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        setup(aptos_framework, player1_addr, player2_addr);

        let game = create_game_(player1, player2_addr);
        let game_ = borrow_global_mut<Game>(object::object_address(&game));

        let (x, y) = find_king(&game_.board, WHITE);
        assert!(x == 4, 1);
        assert!(y == 0, 2);

        let (x, y) = find_king(&game_.board, BLACK);
        assert!(x == 4, 3);
        assert!(y == 7, 4);
    }

    // Checks if any piece other than the king can remove the check
    fun can_remove_check(board: &Board, king_x: u8, king_y: u8, player_color: u8, attackers: &vector<EnPassantTarget>): bool {
        // TODO: https://github.com/banool/aptos-chess/issues/8
        let piece_status = PieceStatus {
            queen_side_rook_has_moved: false,
            king_side_rook_has_moved: false,
            king_has_moved: false,
        };
        for (x in 0..8) {
            for (y in 0..8) {
                let piece_opt = borrow_piece(board, x, y);
                if (option::is_some(piece_opt)) {
                    let piece = option::borrow(piece_opt);
                    // Skip if the piece is the king or not the player's color
                    if (piece.piece_type == KING || piece.color != player_color) {
                        continue
                    };

                    for (i in 0..vector::length(attackers)) {
                        let attacker = vector::borrow(attackers, i);
                        if (is_valid_move(board, x, y, attacker.x, attacker.y, player_color, piece_status, &option::none(), false)) {
                            // Check if moving the piece to the attacker's position does not leave the king in check.
                            let board_clone = *board;
                            move_piece(&mut board_clone, x, y, attacker.x, attacker.y);
                            if (!is_position_in_check(&board_clone, king_x, king_y, player_color)) {
                                return true
                            }
                        }
                    }
                }
            }
        };
        false
    }

    // Find attackers of a king.
    fun find_attackers(board: &Board, king_x: u8, king_y: u8, king_color: u8): vector<EnPassantTarget> {
        let piece_status = PieceStatus {
            queen_side_rook_has_moved: false,
            king_side_rook_has_moved: false,
            king_has_moved: false,
        };

        let attackers: vector<EnPassantTarget> = vector::empty();
        let enemy_color = if (king_color == WHITE) { BLACK } else { WHITE };

        for (x in 0..8) {
            for (y in 0..8) {
                let piece_opt = borrow_piece(board, x, y);
                if (option::is_some(piece_opt)) {
                    let piece = option::borrow(piece_opt);
                    if (piece.color == enemy_color && is_valid_move(board, x, y, king_x, king_y, enemy_color, piece_status, &option::none(), false)) {
                        vector::push_back(&mut attackers, EnPassantTarget { x, y });
                    }
                }
            }
        };
        attackers
    }

    // This function checks whether the king of a particular color would be in check if
    // it were at the given position.
    fun is_position_in_check(board: &Board, position_x: u8, position_y: u8, color: u8): bool {
        let opponent_color = if (color == WHITE) { BLACK } else { WHITE };

        for (x in 0..8) {
            for (y in 0..8) {
                let piece_opt = borrow_piece(board, x, y);
                if (option::is_some(piece_opt)) {
                    let piece = option::borrow(piece_opt);

                    if (piece.color == opponent_color) {
                        // TODO: https://github.com/banool/aptos-chess/issues/8
                        let piece_status = PieceStatus {
                            queen_side_rook_has_moved: false,
                            king_side_rook_has_moved: false,
                            king_has_moved: false,
                        };

                        // If x,y == position_x, position_y this will return false due to is_valid_basic.
                        if (is_valid_move(board, x, y, position_x, position_y, opponent_color, piece_status, &option::none(), true)) {
                            return true
                        };
                    };
                };
            }
        };

        return false
    }

    #[test_only]
    fun is_king_in_check(board: &Board, color: u8): bool {
        let (king_x, king_y) = find_king(board, color);
        is_position_in_check(board, king_x, king_y, color)
    }

    #[test(aptos_framework = @aptos_framework, player1 = @0x123, player2 = @0x321)]
    fun test_is_king_in_check(aptos_framework: &signer, player1: &signer, player2: &signer) acquires Game {
        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        setup(aptos_framework, player1_addr, player2_addr);

        let game = create_game_(player1, player2_addr);
        let game_ = borrow_global_mut<Game>(object::object_address(&game));


        // Move the white king to 3,3 and verify it is not in check.
        move_piece(&mut game_.board, 4, 0, 3, 3);
        assert!(!is_king_in_check(&game_.board, WHITE), 1);

        // Move the black knight to 2,5 and verify the white king is in check.
        move_piece(&mut game_.board, 1, 7, 2, 5);
        assert!(is_king_in_check(&game_.board, WHITE), 2);

        // Move the white king to 0,5 and verify it is in check from the pawn at 1,6.
        move_piece(&mut game_.board, 3, 3, 0, 5);
        assert!(is_king_in_check(&game_.board, WHITE), 3);

        // Move the white king to 5,4 and verify it is not in check.
        move_piece(&mut game_.board, 0, 5, 5, 4);
        assert!(!is_king_in_check(&game_.board, WHITE), 4);

        // Move the black pawn at 3,6 to 3,5 and verify that the white king is now in
        // check from the bishop (discovered check).
        move_piece(&mut game_.board, 3, 6, 3, 5);
        assert!(is_king_in_check(&game_.board, WHITE), 5);

        // Move the white queen to 4,5 to block the check and confirm the white king
        // is no longer in check.
        move_piece(&mut game_.board, 3, 0, 4, 5);
        assert!(!is_king_in_check(&game_.board, WHITE), 6);
    }

    fun king_has_valid_moves(board: &Board, src_x: u8, src_y: u8, player: u8): bool {
        let dx: vector<u8> = vector::empty();
        let dy: vector<u8> = vector::empty();

        vector::push_back(&mut dx, 0);
        vector::push_back(&mut dy, UP);

        vector::push_back(&mut dx, RIGHT);
        vector::push_back(&mut dy, UP);

        vector::push_back(&mut dx, RIGHT);
        vector::push_back(&mut dy, 0);

        vector::push_back(&mut dx, RIGHT);
        vector::push_back(&mut dy, DOWN);

        vector::push_back(&mut dx, 0);
        vector::push_back(&mut dy, DOWN);

        vector::push_back(&mut dx, LEFT);
        vector::push_back(&mut dy, DOWN);

        vector::push_back(&mut dx, LEFT);
        vector::push_back(&mut dy, 0);

        vector::push_back(&mut dx, LEFT);
        vector::push_back(&mut dy, UP);

        let size = vector::length(&dx);

        for (i in 0..size) {
            let delta_x = vector::borrow(&dx, i);
            let delta_y = vector::borrow(&dy, i);
            let new_x = src_x;
            let new_y = src_y;

            // TODO: Use bounded math: https://github.com/banool/aptos-chess/issues/9

            if (*delta_x == RIGHT && src_x < 7) {
                new_x = new_x + 1;
            };
            if (*delta_x == LEFT && src_x > 0) {
                new_x = new_x - 1;
            };

            if (*delta_y == UP && src_y < 7) {
                new_y = new_y + 1;
            };
            if (*delta_y == DOWN && src_y > 0) {
                new_y = new_y - 1;
            };

            if (
                is_valid_king_move_basic(board, src_x, src_y, new_x, new_y, player) &&
                !is_position_in_check(board, new_x, new_y, player)
            ) {
                return true
            };
        };

        return false
    }

    // https://github.com/banool/aptos-chess/issues/10
    #[test(aptos_framework = @aptos_framework, player1 = @0x123, player2 = @0x321)]
    fun test_king_has_valid_moves(aptos_framework: &signer, player1: &signer, player2: &signer) acquires Game {
        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        setup(aptos_framework, player1_addr, player2_addr);

        let game = create_game_(player1, player2_addr);
        let game_ = borrow_global_mut<Game>(object::object_address(&game));

        // Place the white king to the center of the board.
        move_piece(&mut game_.board, 4, 0, 4, 4);

        // Assert the white king has valid moves in this new position.
        assert!(king_has_valid_moves(&game_.board, 4, 4, WHITE), 1);

        // Move the two black rooks and queen into rows 3, 4, and 5.
        move_piece(&mut game_.board, 0, 7, 0, 3);
        move_piece(&mut game_.board, 3, 7, 0, 4);
        move_piece(&mut game_.board, 7, 7, 0, 5);

        // Assert that the king has no valid moves now.
        assert!(!king_has_valid_moves(&game_.board, 4, 4, WHITE), 2);

        // Move the rook on row 3 back to where it was.
        move_piece(&mut game_.board, 0, 3, 0, 7);

        // Assert that the king now has an escape.
        assert!(king_has_valid_moves(&game_.board, 4, 4, WHITE), 2);
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

    #[test(aptos_framework = @aptos_framework, player1 = @0x123, player2 = @0x321)]
    fun test_is_valid_rook_move(aptos_framework: &signer, player1: &signer, player2: &signer) acquires Game {
        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        setup(aptos_framework, player1_addr, player2_addr);

        let game = create_game_(player1, player2_addr);
        let game_ = borrow_global_mut<Game>(object::object_address(&game));

        let color = WHITE;

        // Note: We don't validate that the starting position has a rook in it.
        // This is nice because we can put a rook anywhere on a freshly set up
        // board to test move validity.

        // A rook in the starting position in 0,0 should not be able to move right
        // since a friendly bishop is in the way.
        assert!(!is_valid_rook_move(&game_.board, 0, 0, 1, 0, color), 1);

        // A rook at 0,2 should not be able to take the enemy rook at 0,7 because
        // a pawn is in the way at 0,6.
        assert!(!is_valid_rook_move(&game_.board, 0, 2, 0, 7, color), 2);

        // A rook at 0,2 should be able to take the enemy pawn at 0,6 because
        // there is nothing in the way.
        assert!(is_valid_rook_move(&game_.board, 0, 2, 0, 6, color), 3);

        // A rook at 0,2 should not be able to take its own pawn at 0,1.
        assert!(!is_valid_rook_move(&game_.board, 0, 2, 0, 1, color), 3);

        // A rook at 0,4 should be able to move to 7,4 because nothing is in the way.
        assert!(is_valid_rook_move(&game_.board, 0, 4, 7, 4, color), 4);

        // A rook should not be able to move diagonally.
        assert!(!is_valid_rook_move(&game_.board, 3, 3, 4, 4, color), 5);
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

    #[test(aptos_framework = @aptos_framework, player1 = @0x123, player2 = @0x321)]
    fun test_is_valid_knight_move(aptos_framework: &signer, player1: &signer, player2: &signer) acquires Game {
        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        setup(aptos_framework, player1_addr, player2_addr);

        let game = create_game_(player1, player2_addr);
        let game_ = borrow_global_mut<Game>(object::object_address(&game));

        let color = WHITE;

        // Test 1: Knight should be able to move in L-shape (2 squares in one axis and 1 square in the other)
        assert!(is_valid_knight_move(&game_.board, 1, 0, 2, 2, color), 1);

        // Test 2: Knight should be able to move in L-shape (1 square in one axis and 2 squares in the other)
        assert!(is_valid_knight_move(&game_.board, 2, 2, 4, 3, color), 2);

        // Test 3: Knight should be able to capture an opponent's piece (the enemy rook at 0,7)
        assert!(is_valid_knight_move(&game_.board, 1, 5, 0, 7, color), 3);

        // Test 4: Knight should not be able to capture a friendly piece
        assert!(!is_valid_knight_move(&game_.board, 1, 0, 3, 1, color), 4);

        // Test 5: Knight should not be able to move in a straight line
        assert!(!is_valid_knight_move(&game_.board, 3, 2, 3, 4, color), 5);

        // Test 6: Knight should not be able to move in a diagonal line
        assert!(!is_valid_knight_move(&game_.board, 3, 2, 4, 3, color), 6);
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

        // TODO: Should this be zero? It is for rooks.
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

    #[test(aptos_framework = @aptos_framework, player1 = @0x123, player2 = @0x321)]
    fun test_is_valid_bishop_move(aptos_framework: &signer, player1: &signer, player2: &signer) acquires Game {
        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        setup(aptos_framework, player1_addr, player2_addr);

        let game = create_game_(player1, player2_addr);
        let game_ = borrow_global_mut<Game>(object::object_address(&game));

        let color = WHITE;

        // A bishop at 2,0 should not be able to move to 4,2, because its own pawn is in the way.
        assert!(!is_valid_bishop_move(&game_.board, 2, 0, 4, 2, color), 1);

        // A bishop at 3,3 should not be able to move to 3,5, because it's not a diagonal move.
        assert!(!is_valid_bishop_move(&game_.board, 3, 3, 3, 5, color), 2);

        // A bishop at 2,2 should be able to move to 5,5, because nothing is in the way.
        assert!(is_valid_bishop_move(&game_.board, 2, 2, 5, 5, color), 3);

        // A bishop at 3,3 should be able to capture the enemy pawn at 6,6.
        assert!(is_valid_bishop_move(&game_.board, 3, 3, 6, 6, color), 4);

        // A bishop at 3,3 should not be able to capture its own pawn at 5,1.
        assert!(!is_valid_bishop_move(&game_.board, 3, 3, 5, 1, color), 5);
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

    #[test(aptos_framework = @aptos_framework, player1 = @0x123, player2 = @0x321)]
    fun test_is_valid_king_move_basic(aptos_framework: &signer, player1: &signer, player2: &signer) acquires Game {
        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        setup(aptos_framework, player1_addr, player2_addr);

        let game = create_game_(player1, player2_addr);
        let game_ = borrow_global_mut<Game>(object::object_address(&game));

        let color = WHITE;

        // A king at 4,0 should not be able to move to 4,2, because it's more than one square away.
        assert!(!is_valid_king_move_basic(&game_.board, 4, 0, 4, 2, color), 1);

        // A king at 4,0 should not be able to move to 6,0, because it's more than one square away.
        assert!(!is_valid_king_move_basic(&game_.board, 4, 0, 6, 0, color), 2);

        // A king at 3,3 should be able to move to 4,4 because it's one square away and no piece is blocking the way.
        assert!(is_valid_king_move_basic(&game_.board, 3, 3, 4, 4, color), 3);

        // A king at 0,7 should be able to capture the enemy knight at 1,7.
        assert!(is_valid_king_move_basic(&game_.board, 0, 7, 1, 7, color), 4);

        // A king at 4,0 should not be able to capture its own queen at 3,0.
        assert!(!is_valid_king_move_basic(&game_.board, 4, 0, 3, 0, color), 5);
    }

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
        for (x in start..end) {
            let piece_opt = vector::borrow(vector::borrow(&board.board, (src_y as u64)), (x as u64));
            if (option::is_some(piece_opt)) {
                return false
            };
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

    #[test(aptos_framework = @aptos_framework, player1 = @0x123, player2 = @0x321)]
    fun test_scholars_mate(aptos_framework: &signer, player1: &signer, player2: &signer) acquires Game {
        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        setup(aptos_framework, player1_addr, player2_addr);

        let game = create_game_(player1, player2_addr);

        // Here we set up a bungled scholar's mate attempt. White put their bishop on
        // b5 instead of c4, so the black king can just take their queen. Confirm that
        // the king is not considered checkmated and that taking the queen is valid.

        // Move the white pawn.
        make_move(player1, game, 4, 1, 4, 3, 2);

        // Move the black pawn.
        make_move(player2, game, 4, 6, 4, 4, 2);

        // Move the white bishop.
        make_move(player1, game, 5, 0, 2, 3, 2);

        // Move the black knight.
        make_move(player2, game, 1, 7, 2, 5, 2);

        // Move the white queen.
        make_move(player1, game, 3, 0, 7, 4, 2);

        // Move the other black knight.
        make_move(player2, game, 6, 7, 5, 5, 2);

        // Move the white queen in front of the king.
        make_move(player1, game, 7, 4, 5, 6, 2);

        let game_ = borrow_global_mut<Game>(object::object_address(&game));

        // Confirm that the black king is in check.
        assert!(is_king_in_check(&game_.board, BLACK), 1);

        // Confirm that the black king is checkmated.
        assert!(!king_has_valid_moves(&game_.board, 4, 7, BLACK), 2);

        // Confirm that the game is considered a victory for white.
        assert!(game_.game_status == WHITE_WON, 1);
    }

    // TODO: Add a test for blocking to prevent checkmate:
    // https://github.com/banool/aptos-chess/issues/14

    #[test(aptos_framework = @aptos_framework, player1 = @0x123, player2 = @0x321)]
    fun test_scholars_mate_queen_undefended(aptos_framework: &signer, player1: &signer, player2: &signer) acquires Game {
        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        setup(aptos_framework, player1_addr, player2_addr);

        let game = create_game_(player1, player2_addr);

        // Here we set up a bungled scholar's mate attempt. White put their bishop on
        // b5 instead of c4, so the black king can just take their queen. Confirm that
        // the king is not considered checkmated and that taking the queen is valid.

        // Move the white pawn.
        make_move(player1, game, 4, 1, 4, 3, 2);

        // Move the black pawn.
        make_move(player2, game, 4, 6, 4, 4, 2);

        // Move the white bishop to the wrong spot for a scholar's mate.
        make_move(player1, game, 5, 0, 1, 4, 2);

        // Move the black knight.
        make_move(player2, game, 1, 7, 2, 5, 2);

        // Move the white queen.
        make_move(player1, game, 3, 0, 7, 4, 2);

        // Move the other black knight towards the center of the board.
        make_move(player2, game, 6, 7, 5, 5, 2);

        // Move the white queen in front of the king. Alas, it's not actually defended.
        make_move(player1, game, 7, 4, 5, 6, 2);

        let game_ = borrow_global_mut<Game>(object::object_address(&game));

        // Confirm that the black king is in check.
        assert!(is_king_in_check(&game_.board, BLACK), 1);

        // Confirm that the black king is not checkmated.
        assert!(king_has_valid_moves(&game_.board, 4, 7, BLACK), 2);

        // Confirm that the black king can capture the queen.
        make_move(player2, game, 4, 7, 5, 6, 2);
    }

    #[test(aptos_framework = @aptos_framework, player1 = @0x123, player2 = @0x321)]
    fun test_scholars_mate_queen_capturable(aptos_framework: &signer, player1: &signer, player2: &signer) acquires Game {
        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        setup(aptos_framework, player1_addr, player2_addr);

        let game = create_game_(player1, player2_addr);

        // Here we set up a bungled scholar's mate attempt. White gets into the final
        // position but black has already moved their queen into a place that can take
        // the white queen.

        // Move the white pawn.
        make_move(player1, game, 4, 1, 4, 3, 2);

        // Move the black pawn.
        make_move(player2, game, 4, 6, 4, 4, 2);

        // Move the white bishop.
        make_move(player1, game, 5, 0, 2, 3, 2);

        // Move the black knight.
        make_move(player2, game, 1, 7, 2, 5, 2);

        // Move the white queen.
        make_move(player1, game, 3, 0, 7, 4, 2);

        // Move the other black knight to the edge of the board.
        make_move(player2, game, 6, 7, 7, 5, 2);

        // Move the white queen in front of the king.
        make_move(player1, game, 7, 4, 5, 6, 2);

        let game_ = borrow_global_mut<Game>(object::object_address(&game));

        // Confirm that the black king is in check.
        assert!(is_king_in_check(&game_.board, BLACK), 1);

        // Confirm that the black king cannot capture the queen because it is defended
        // by the bishop.
        assert!(!king_has_valid_moves(&game_.board, 4, 7, BLACK), 2);

        // Confirm that the black king is not considered checkmated because the black
        // knight can capture the white queen.
        assert!(game_.game_status == ACTIVE, 1);

        // Confirm that the black knight can capture the white queen.
        make_move(player2, game, 7, 5, 5, 6, 2);
    }

    #[test(aptos_framework = @aptos_framework, player1 = @0x123, player2 = @0x321)]
    fun test_is_valid_king_move_castle(aptos_framework: &signer, player1: &signer, player2: &signer) acquires Game {
        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        setup(aptos_framework, player1_addr, player2_addr);

        let game = create_game_(player1, player2_addr);
        let game_ = borrow_global_mut<Game>(object::object_address(&game));

        let color = WHITE;

        // The king should not be able to castle in either direction at the start.
        assert!(!is_valid_king_move_castle(&game_.board, 4, 0, 6, 0, color, &game_.white_piece_status), 1);
        assert!(!is_valid_king_move_castle(&game_.board, 4, 0, 2, 0, color, &game_.white_piece_status), 1);

        // Remove the king side bishop and knight. Confirm that the king can now castle
        // king side.
        delete_piece(&mut game_.board, 5, 0);
        delete_piece(&mut game_.board, 6, 0);
        assert!(is_valid_king_move_castle(&game_.board, 4, 0, 6, 0, color, &game_.white_piece_status), 2);

        // Assert that the king still can't castle queen side.
        assert!(!is_valid_king_move_castle(&game_.board, 4, 0, 2, 0, color, &game_.white_piece_status), 3);

        // Remove the queen side knight. Confirm that the king still can't castle queen
        // side.
        delete_piece(&mut game_.board, 1, 0);
        assert!(!is_valid_king_move_castle(&game_.board, 4, 0, 2, 0, color, &game_.white_piece_status), 4);

        // Remove the queen. Confirm that the king still can't castle queen side.
        delete_piece(&mut game_.board, 3, 0);
        assert!(!is_valid_king_move_castle(&game_.board, 4, 0, 2, 0, color, &game_.white_piece_status), 5);

        // Remove the queen side bishop. Confirm that the king can now castle queen
        // side.
        delete_piece(&mut game_.board, 2, 0);
        assert!(is_valid_king_move_castle(&game_.board, 4, 0, 2, 0, color, &game_.white_piece_status), 6);

        // Remove the king side rook. Confirm that the king can no longer castle
        // king side.
        delete_piece(&mut game_.board, 7, 0);
        assert!(!is_valid_king_move_castle(&game_.board, 4, 0, 6, 0, color, &game_.white_piece_status), 7);

        // Mark the queen side rook has having moved. Confirm that the king can no
        // longer castle queen side.
        game_.white_piece_status.queen_side_rook_has_moved = true;
        assert!(!is_valid_king_move_castle(&game_.board, 4, 0, 2, 0, color, &game_.white_piece_status), 8);

        // Mark it as not having moved again but mark the king as having moved. Confirm
        // that the king can no longer castle.
        game_.white_piece_status.queen_side_rook_has_moved = false;
        game_.white_piece_status.king_has_moved = true;
        assert!(!is_valid_king_move_castle(&game_.board, 4, 0, 2, 0, color, &game_.white_piece_status), 9);

        // Mark the king as not having moved.
        game_.white_piece_status.king_has_moved = false;

        // Remove all the queen side pawns.
        delete_piece(&mut game_.board, 0, 1);
        delete_piece(&mut game_.board, 1, 1);
        delete_piece(&mut game_.board, 2, 1);
        delete_piece(&mut game_.board, 3, 1);
        delete_piece(&mut game_.board, 4, 1);

        // Place a black rook such that it watches the column with the rook. Confirm
        // that queen side castling is still valid.
        move_piece(&mut game_.board, 7, 7, 0, 3);
        assert!(is_valid_king_move_castle(&game_.board, 4, 0, 2, 0, color, &game_.white_piece_status), 10);

        // Move the black rook to watch the column that had the knight. Confirm that
        // queen side castling is still valid.
        move_piece(&mut game_.board, 0, 3, 1, 3);
        assert!(is_valid_king_move_castle(&game_.board, 4, 0, 2, 0, color, &game_.white_piece_status), 11);

        // Move the black rook to watch the column that had the bishop. Confirm that
        // queen side castling is no longer valid.
        move_piece(&mut game_.board, 1, 3, 2, 3);
        assert!(!is_valid_king_move_castle(&game_.board, 4, 0, 2, 0, color, &game_.white_piece_status), 11);

        // Move the black rook to watch the column that had the queen. Confirm that
        // queen side castling is no longer valid.
        move_piece(&mut game_.board, 2, 3, 3, 3);
        assert!(!is_valid_king_move_castle(&game_.board, 4, 0, 2, 0, color, &game_.white_piece_status), 11);

        // Move the black rook to watch the column that has the king. Confirm that
        // queen side castling is no longer valid.
        move_piece(&mut game_.board, 3, 3, 4, 3);
        assert!(!is_valid_king_move_castle(&game_.board, 4, 0, 2, 0, color, &game_.white_piece_status), 11);

        // Remove the black rook. Confirm that queen side castling is now valid again.
        delete_piece(&mut game_.board, 4, 3);
        assert!(is_valid_king_move_castle(&game_.board, 4, 0, 2, 0, color, &game_.white_piece_status), 12);
    }

    fun is_valid_queen_move(board: &Board, src_x: u8, src_y: u8, dest_x: u8, dest_y: u8, color: u8): bool {
        return (is_valid_rook_move(board, src_x, src_y, dest_x, dest_y, color) || is_valid_bishop_move(board, src_x, src_y, dest_x, dest_y, color))
    }

    fun is_valid_pawn_move(board: &Board, src_x: u8, src_y: u8, dest_x: u8, dest_y: u8, color: u8, en_passant_target: &Option<EnPassantTarget>): bool {
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


        let to_piece_opt = borrow_piece(board, dest_x, dest_y);

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
                    middle_piece_opt = borrow_piece(board, src_x, src_y + 1)
                } else {
                    if (src_y != 6) {
                        return false
                    };
                    middle_piece_opt = borrow_piece(board, src_x, src_y - 1)
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
            // Check for en passant.
            } else if (option::is_some(en_passant_target)) {
                let en_passant_target = option::borrow(en_passant_target);
                if (dest_x == en_passant_target.x && dest_y == en_passant_target.y) {
                    return true
                }
            }
        };

        return false
    }

    #[test(aptos_framework = @aptos_framework, player1 = @0x123, player2 = @0x321)]
    fun test_is_valid_pawn_move(aptos_framework: &signer, player1: &signer, player2: &signer) acquires Game {
        let player1_addr = signer::address_of(player1);
        let player2_addr = signer::address_of(player2);
        setup(aptos_framework, player1_addr, player2_addr);

        let game = create_game_(player1, player2_addr);
        let game_ = borrow_global_mut<Game>(object::object_address(&game));

        // A white pawn at 1,1 should be able to move to 1,2.
        assert!(is_valid_pawn_move(&game_.board, 1, 1, 1, 2, WHITE, &option::none()), 1);

        // A white pawn at 1,1 should be able to move to 1,3.
        assert!(is_valid_pawn_move(&game_.board, 1, 1, 1, 3, WHITE, &option::none()), 2);

        // A white pawn at 1,2 should not be able to move to 1,4.
        assert!(!is_valid_pawn_move(&game_.board, 1, 2, 1, 4, WHITE, &option::none()), 2);

        // A white pawn at 1,1 should not be able to move to 1,4.
        assert!(!is_valid_pawn_move(&game_.board, 1, 1, 1, 4, WHITE, &option::none()), 3);

        // A white pawn at 1,1 should not be able to move to 2,2.
        assert!(!is_valid_pawn_move(&game_.board, 1, 1, 2, 2, WHITE, &option::none()), 4);

        // A white pawn at 4,4 should not be able to move backwards to 4,3.
        assert!(!is_valid_pawn_move(&game_.board, 4, 4, 4, 3, WHITE, &option::none()), 5);

        // A black pawn at 1,6 should be able to move to 1,5.
        assert!(is_valid_pawn_move(&game_.board, 1, 6, 1, 5, BLACK, &option::none()), 6);

        // A black pawn at 1,6 should be able to move to 1,4.
        assert!(is_valid_pawn_move(&game_.board, 1, 6, 1, 4, BLACK, &option::none()), 7);

        // A black pawn at 1,6 should not be able to move to 1,3.
        assert!(!is_valid_pawn_move(&game_.board, 1, 6, 1, 3, BLACK, &option::none()), 8);

        // A black pawn at 1,6 should not be able to move to 2,5.
        assert!(!is_valid_pawn_move(&game_.board, 1, 6, 2, 5, BLACK, &option::none()), 9);

        // A black pawn at 4,4 should not be able to move backwards to 4,5.
        assert!(!is_valid_pawn_move(&game_.board, 4, 4, 4, 5, BLACK, &option::none()), 10);

        // A white pawn at 1,5 should be able to capture a black pawn at 0,6.
        assert!(is_valid_pawn_move(&game_.board, 1, 5, 0, 6, WHITE, &option::none()), 11);

        // A black pawn at 0,7 should not be able to capture a black pawn at 1,6.
        assert!(!is_valid_pawn_move(&game_.board, 0, 7, 1, 6, BLACK, &option::none()), 12);

        // A black pawn at 0,7 should not be able to move into a space with its own piece at 0,6.
        assert!(!is_valid_pawn_move(&game_.board, 0, 7, 0, 6, BLACK, &option::none()), 12);

        // If there is a black pawn at 1,3 and a white pawn just moved to 0,3 from the
        // starting rank, the black pawn should be able to capture the white pawn en
        // passant.
        move_piece(&mut game_.board, 1, 6, 1, 3);
        assert!(is_valid_pawn_move(&game_.board, 1, 3, 0, 2, BLACK, &option::some(EnPassantTarget { x: 0, y: 2 })), 13);
    }

    // Surely this exists in a math module somewhere.
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

    fun determine_color(game_: &Game, player_addr: &address): u8 {
        if (&game_.player1 == player_addr) {
            WHITE
        } else if (&game_.player2 == player_addr) {
            BLACK
        } else {
            abort(E_PLAYER_NOT_IN_GAME)
        }
    }
}
