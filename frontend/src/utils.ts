import { Types } from "aptos";
import { useGlobalState } from "./GlobalState";

/**
 * Helper function for exhaustiveness checks.
 *
 * Hint: If this function is causing a type error, check to make sure that your
 * switch statement covers all cases!
 */
export function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}

/*
If the transaction doesn't have a version property,
that means it's a pending transaction (and thus it's expected version will be higher than any existing versions).
We can consider the version to be Infinity for this case.
*/
export function sortTransactions(
  a: Types.Transaction,
  b: Types.Transaction
): number {
  const first = "version" in a ? parseInt(a.version) : Infinity;
  const second = "version" in b ? parseInt(b.version) : Infinity;
  return first < second ? 1 : -1;
}

/*
Converts a utf8 string encoded as hex back to string
if hex starts with 0x - ignore this part and start from the 3rd char (at index 2).
*/
export function hex_to_string(hex: string): string {
  const hexString = hex.toString();
  let str = "";
  let n = hex.startsWith("0x") ? 2 : 0;
  for (n; n < hexString.length; n += 2) {
    str += String.fromCharCode(parseInt(hexString.substring(n, n + 2), 16));
  }
  return str;
}

/* set localStorage with Expiry */
export function setLocalStorageWithExpiry(
  key: string,
  value: string,
  ttl: number
) {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };

  localStorage.setItem(key, JSON.stringify(item));
}

/* get localStorage with Expiry */
export function getLocalStorageWithExpiry(key: string) {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
}

export function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export function isValidAccountAddress(accountAddr: string): boolean {
  // account address is 0x{64 hex characters}
  // with multiple options - 0X, 0x001, 0x1, 0x01
  // can start with that and see if any fails to parsing
  return /^0x[a-fA-F0-9]{1,64}$/.test(accountAddr);
}

export function getDatetimePretty(unixtimeSecs: number) {
  var a = new Date(unixtimeSecs * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
  var sec = a.getSeconds() < 10 ? "0" + a.getSeconds() : a.getSeconds();
  var time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}

// From https://stackoverflow.com/a/7579799.
export function getDurationPretty(durationSecs: number) {
  var hours: any = Math.floor(durationSecs / 3600);
  var minutes: any = Math.floor((durationSecs - hours * 3600) / 60);
  var seconds: any = durationSecs - hours * 3600 - minutes * 60;
  var time = "";

  if (hours !== 0) {
    time = hours + " hours ";
  }
  if (minutes !== 0 || time !== "") {
    minutes = minutes < 10 && time !== "" ? "0" + minutes : String(minutes);
    time += minutes + " minutes ";
  }
  if (time === "") {
    time = seconds + " seconds";
  } else {
    time += seconds < 10 ? "0" + seconds : String(seconds) + " seconds";
  }
  return time;
}

export const OCTA_NUMBER: number = 8 as const;
export const OCTA_NEGATIVE_EXPONENT = 10 ** -OCTA_NUMBER;
export const OCTA_POSITIVE_EXPONENT = 10 ** OCTA_NUMBER;

export const aptToOcta = (octa: number) => octa * OCTA_POSITIVE_EXPONENT;
export const octaToApt = (apt: bigint) => apt / BigInt(OCTA_POSITIVE_EXPONENT);

function range(size: number, startAt: number = 0): ReadonlyArray<number> {
  return [...Array(size).keys()].map((i) => i + startAt);
}

export function getShortAddress(addr: string): string {
  return addr.slice(0, 6) + "..." + addr.slice(-4);
}

export function formatAptAmount(aptAmount: number | bigint): string {
  return `${aptAmount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} APT`;
}

export function formatUsdAmount(usdAmount: number | bigint): string {
  return `$${usdAmount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

// Builds a link to the account page of the explorer for the given address.
export function useBuildExplorerUrl(accountAddress: string): string {
  const [state, _setState] = useGlobalState();
  const networkParam =
    state.network_name === "mainnet" ? "" : `?network=${state.network_name}`;
  return `https://explorer.aptoslabs.com/account/${accountAddress}${networkParam}`;
}
