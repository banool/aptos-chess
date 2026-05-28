import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const FEE_PAYER_LOCAL_STORAGE_KEY = "use_fee_payer";
const QUERY_PARAM = "feePayer";

// Default is off; users must explicitly opt in to the gas station fee payer
// flow. This avoids surprising failures when a wallet (e.g. Petra Web) signs a
// transaction that the gas station rejects with INVALID_AUTH_KEY.
export const DEFAULT_USE_FEE_PAYER = false;

function parseBool(value: string | null): boolean | undefined {
  if (value === "true") return true;
  if (value === "false") return false;
  return undefined;
}

function getUseFeePayerFromLocalStorageWithDefault(): boolean {
  return (
    parseBool(localStorage.getItem(FEE_PAYER_LOCAL_STORAGE_KEY)) ??
    DEFAULT_USE_FEE_PAYER
  );
}

function writeUseFeePayerToLocalStorage(useFeePayer: boolean) {
  if (useFeePayer === DEFAULT_USE_FEE_PAYER) {
    localStorage.removeItem(FEE_PAYER_LOCAL_STORAGE_KEY);
  } else {
    localStorage.setItem(FEE_PAYER_LOCAL_STORAGE_KEY, String(useFeePayer));
  }
}

// Mirrors useNetworkSelector: persists the user's choice in a URL query param,
// and falls back to localStorage / a hardcoded default on first load.
// WARNING: don't use this hook directly in components, rather use:
//   const [state, { setUseFeePayer }] = useGlobalState();
export function useFeePayerSelector() {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParamValue = parseBool(searchParams.get(QUERY_PARAM));

  function setUseFeePayer(useFeePayer: boolean) {
    setSearchParams((prev) => {
      prev.set(QUERY_PARAM, String(useFeePayer));
      return prev;
    });
    writeUseFeePayerToLocalStorage(useFeePayer);
  }

  useEffect(
    () => {
      const current = parseBool(searchParams.get(QUERY_PARAM));
      if (current === undefined) {
        setUseFeePayer(getUseFeePayerFromLocalStorageWithDefault());
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return [queryParamValue ?? DEFAULT_USE_FEE_PAYER, setUseFeePayer] as const;
}
