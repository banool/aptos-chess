import { useQuery } from "@tanstack/react-query";
import { useGlobalState } from "../context/GlobalState";
import { AccountAddressInput } from "@aptos-labs/ts-sdk";
import { GetGamesQuery } from "../codegen/indexer/generated/operations";

export function useGames(
  userAddress: AccountAddressInput,
  { enabled }: { enabled?: boolean },
) {
  const [globalState] = useGlobalState();
  return useQuery<GetGamesQuery>({
    queryKey: ["getGames", userAddress],
    queryFn: async () => {
      return await globalState.noCodeClient.GetGames({
        userAddress: userAddress.toString(),
      });
    },
    refetchInterval: 10000,
    retry: false,
    enabled,
  });
}
