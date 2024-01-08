import { Network } from "@aptos-labs/ts-sdk";

export const defaultNetwork = Network.TESTNET;

/**
 * Core Address
 */
export const objectCoreAddress = "0x1::object::ObjectCore";

export const STATUS_ACTIVE = 0;
export const STATUS_DRAW = 1;
export const STATUS_WHITE_WON = 2;
export const STATUS_BLACK_WON = 3;
