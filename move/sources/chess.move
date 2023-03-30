// I use a coordinate system where 0,0 is the white rook in the bottom left corner.
// Or in standard chess notation, 0,0 is a1.

module addr::chess01 {
    use std::error;
    use std::option::{Self, Option};
    use std::signer;
    use std::vector;
    use aptos_std::debug;
    use aptos_std::simple_map::{Self, SimpleMap};

    const E_INVALID_MOVE: u64 = 0;
    const E_NOT_YOUR_TURN: u64 = 1;
    const E_GAME_OVER: u64 = 2;

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

    struct Piece has store {
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
        game_over: bool,
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
            game_over: false,
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

    // Make a move in the game
    public fun make_move(game: &mut Game, from_x: u8, from_y: u8, to_x: u8, to_y: u8) {
        // Check that the positions are valid.
        //if (!position_is_valid(from_x) || !position_is_valid(from_y) || !position_is_valid(to_x) || !position_is_valid(to_y)) {

        //};

        // Check that the piece is moving.
        //if (from_x == to_x && from_y == to_y) {
        //    return false
        //};


    }

    // Get the current game state
    public fun get_game_state(game: &Game) {
        // ... Implement the logic for checking the game state ...
    }

    fun position_is_valid(position: u8): bool {
        position < 8
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
            debug::print(&b"steps");
            debug::print(&steps_remaining);
            debug::print(&current_x);
            current_y = if (y_step == UP) { current_y + 1 } else if (y_step == DOWN) { current_y - 1 } else { current_y };
            debug::print(&current_y);

            let row = vector::borrow(&board.board, (current_y as u64));
            debug::print(row);
            let piece_opt = vector::borrow(row, (current_x as u64));
            debug::print(piece_opt);
            if (option::is_some(piece_opt)) {
                debug::print(&b"meowwwwwwwwwwwwwww");
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
}
