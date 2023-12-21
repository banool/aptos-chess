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
 * Converts a utf8 string encoded as hex back to string
 * if hex starts with 0x - ignore this part and start from the 3rd char (at index 2).
 */
export function hexToString(hex: string): string {
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
  ttl: number,
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

export function getDurationPretty(seconds: number | bigint): string {
  if (typeof seconds === "bigint") {
    seconds = Number(seconds);
  }
  const days = Math.floor(seconds / (24 * 60 * 60));
  seconds -= days * 24 * 60 * 60;
  const hours = Math.floor(seconds / (60 * 60));
  seconds -= hours * 60 * 60;
  const minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;

  let duration: string[] = [];
  if (days > 0) duration.push(`${days} ${days === 1 ? "day" : "days"}`);
  if (hours > 0) duration.push(`${hours} ${hours === 1 ? "hour" : "hours"}`);
  if (minutes > 0)
    duration.push(`${minutes} ${minutes === 1 ? "minute" : "minutes"}`);
  if (seconds > 0)
    duration.push(`${seconds} ${seconds === 1 ? "second" : "seconds"}`);

  return duration.join(" ");
}

export const OCTA_NUMBER: number = 8 as const;
export const OCTA_NEGATIVE_EXPONENT = 10 ** -OCTA_NUMBER;
export const OCTA_POSITIVE_EXPONENT = 10 ** OCTA_NUMBER;

export const aptToOcta = (octa: number) => octa * OCTA_POSITIVE_EXPONENT;
export const octaToApt = (apt: bigint) => apt / BigInt(OCTA_POSITIVE_EXPONENT);
export const octaToAptNormal = (apt: number) => apt / OCTA_POSITIVE_EXPONENT;

function range(size: number, startAt: number = 0): ReadonlyArray<number> {
  return [...Array(size).keys()].map((i) => i + startAt);
}

// Meaning, the denominator can go as high as 64, starting from 1.
const acceptableDenominators = range(63, 1);
const maxDistanceToNumerator = 0.001;

export function getShortAddress(addr: string): string {
  console.log(`addrrrrrrrrrrr: ${JSON.stringify(addr)}`);
  return addr.slice(0, 5) + "..." + addr.slice(-3);
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

// https://stackoverflow.com/a/67629097/3846032
export const interleave = (array: any[], ele: any) => {
  return array.flatMap((x) => [ele, x]).slice(1);
};

// This is the kinda thing we could have in a RemoteAbiReader btw.
export function simpleMapArrayToMap(
  arr: { key: string; value: any }[],
): Map<string, any> {
  const map = new Map<string, any>();
  arr.forEach((item) => {
    map.set(item.key, item.value);
  });
  return map;
}

// Confirm that a string representing an APT amount is a valid number and converts
// correctly to OCTA. Returns the value as a number in OCTA if valid or null if not.
export function validateAptString(s: string): number | null {
  try {
    const a = aptToOcta(parseFloat(s));
    // Confirm we still have an OCTA amount of APT.
    Number.isInteger(a);
    if (!Number.isNaN(a) && a >= 1) {
      return a;
    }
  } catch (_) {}
  return null;
}

export function sum<T>(arr: T[], fn: (item: T) => number): number {
  return arr.reduce((acc, item) => acc + fn(item), 0);
}
