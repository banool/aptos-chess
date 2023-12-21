import { useQuery } from "@tanstack/react-query";
import { getLedgerInfoWithoutResponseError } from ".";
import {
  getLocalStorageWithExpiry,
  setLocalStorageWithExpiry,
} from "../utils/utils";
import { Network } from "@aptos-labs/ts-sdk";

const TTL = 3600000; // 1 hour

export function useGetChainId(network: Network): string | null {
  let chainIdFromCache = getLocalStorageWithExpiry(`${network}ChainId`);

  const { data } = useQuery({
    queryKey: ["ledgerInfo", network],
    queryFn: () => {
      try {
        return getLedgerInfoWithoutResponseError(network);
      } catch (e) {
        console.log(`Error fetching chainId for ${network}: ${e}`);
        return null;
      }
    },
    enabled: chainIdFromCache === null,
  });

  if (chainIdFromCache !== null) {
    return chainIdFromCache;
  }

  const chainId = data?.chain_id ? data?.chain_id.toString() : null;

  // cache network chain ids (except local) to `localStorage` to avoid refetching chain data
  // as the chain ids for those networks won't be changed very often
  if (chainId !== null && network !== "local") {
    setLocalStorageWithExpiry(`${network}ChainId`, chainId, TTL);
  }

  return chainId;
}
