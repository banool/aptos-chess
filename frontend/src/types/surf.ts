import { DefaultABITable, ExtractStructType } from "@thalalabs/surf";
import { CHESS_ABI } from "./abis";

type ABITAble = DefaultABITable & {
  "0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30::chess": typeof CHESS_ABI;
};

export type Game = ExtractStructType<ABITAble, typeof CHESS_ABI, "Game">;
export type Board = ExtractStructType<ABITAble, typeof CHESS_ABI, "Board">;
export type Piece = ExtractStructType<ABITAble, typeof CHESS_ABI, "Piece">;
export type GameCreatedEvent = ExtractStructType<
  ABITAble,
  typeof CHESS_ABI,
  "GameCreatedEvent"
>;

// Constants are not included in the ABI so we define them manually here.

export const WHITE = 0;
export const BLACK = 1;

export const ROOK = 1;
export const KNIGHT = 2;
export const BISHOP = 3;
export const QUEEN = 4;
export const KING = 5;
export const PAWN = 6;
