// See the README for an explanation of where this came from.
export const CHESS_ABI = {
  address: "0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30",
  name: "chess",
  friends: [],
  exposed_functions: [
    {
      name: "accept_draw",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30::chess::Game>",
      ],
      return: [],
    },
    {
      name: "create_board",
      visibility: "public",
      is_entry: false,
      is_view: false,
      generic_type_params: [],
      params: [],
      return: [
        "0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30::chess::Board",
      ],
    },
    {
      name: "create_game",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: ["&signer", "address"],
      return: [],
    },
    {
      name: "create_game_",
      visibility: "public",
      is_entry: false,
      is_view: false,
      generic_type_params: [],
      params: ["&signer", "address"],
      return: [
        "0x1::object::Object<0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30::chess::Game>",
      ],
    },
    {
      name: "make_move",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30::chess::Game>",
        "u8",
        "u8",
        "u8",
        "u8",
        "u8",
      ],
      return: [],
    },
    {
      name: "offer_draw",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30::chess::Game>",
      ],
      return: [],
    },
    {
      name: "resign",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30::chess::Game>",
      ],
      return: [],
    },
  ],
  structs: [
    {
      name: "Board",
      is_native: false,
      abilities: ["store"],
      generic_type_params: [],
      fields: [
        {
          name: "board",
          type: "vector<vector<0x1::option::Option<0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30::chess::Piece>>>",
        },
      ],
    },
    {
      name: "EnPassantTarget",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "x",
          type: "u8",
        },
        {
          name: "y",
          type: "u8",
        },
      ],
    },
    {
      name: "Game",
      is_native: false,
      abilities: ["store", "key"],
      generic_type_params: [],
      fields: [
        {
          name: "player1",
          type: "address",
        },
        {
          name: "player2",
          type: "address",
        },
        {
          name: "board",
          type: "0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30::chess::Board",
        },
        {
          name: "is_white_turn",
          type: "bool",
        },
        {
          name: "white_piece_status",
          type: "0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30::chess::PieceStatus",
        },
        {
          name: "black_piece_status",
          type: "0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30::chess::PieceStatus",
        },
        {
          name: "en_passant_target",
          type: "0x1::option::Option<0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30::chess::EnPassantTarget>",
        },
        {
          name: "game_status",
          type: "u8",
        },
        {
          name: "player_resigned",
          type: "bool",
        },
        {
          name: "draw_offered_by",
          type: "0x1::option::Option<u8>",
        },
        {
          name: "num_half_moves",
          type: "u8",
        },
        {
          name: "num_half_moves_since_last_capture_or_pawn_advance",
          type: "u8",
        },
      ],
    },
    {
      name: "GameCreatedEvent",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "creator_address",
          type: "address",
        },
        {
          name: "opponent_address",
          type: "address",
        },
        {
          name: "object_address",
          type: "address",
        },
      ],
    },
    {
      name: "Piece",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "color",
          type: "u8",
        },
        {
          name: "piece_type",
          type: "u8",
        },
      ],
    },
    {
      name: "PieceStatus",
      is_native: false,
      abilities: ["copy", "drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "queen_side_rook_has_moved",
          type: "bool",
        },
        {
          name: "king_side_rook_has_moved",
          type: "bool",
        },
        {
          name: "king_has_moved",
          type: "bool",
        },
      ],
    },
  ],
} as const;
