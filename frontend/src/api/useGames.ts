import { useQuery } from "react-query";
import { GetGames } from "../codegen/indexer/generated/queries";
import { useGlobalState } from "../context/GlobalState";
import { AccountAddress } from "@aptos-labs/ts-sdk";
import { GameCreatedEvent } from "../types/surf";
import { GetGamesQuery } from "../codegen/indexer/generated/operations";

export type GamesLookup = {
  created: GameCreatedEvent[];
  invited: GameCreatedEvent[];
};

export function useGamesQueryKey() {
  return ["getAccounts"];
}

export function useGames(
  userAddress: AccountAddress,
  { enabled }: { enabled?: boolean },
) {
  const [globalState] = useGlobalState();
  return useQuery<GamesLookup>(
    useGamesQueryKey(),
    async () => {
      const eventType = `${globalState.moduleAddress}::chess::GameCreatedEvent`;
      const createdSpec = {
        creator_address: userAddress,
      };
      const invitedSpec = {
        invited_address: userAddress,
      };
      const response = await globalState.client.queryIndexer<GetGamesQuery>({
        query: {
          query: GetGames,
          variables: { eventType, createdSpec, invitedSpec },
        },
      });
      return {
        created: response.created.map((e) => e.data),
        invited: response.invited.map((e) => e.data),
      };
    },
    { refetchInterval: 10000, retry: false, staleTime: Infinity, enabled },
  );
}
