// hooks/useChessGames.ts

import { useQuery } from "react-query";
import { getSdk } from "../codegen/indexer/generated/queries";
import { useGlobalState } from "../context/GlobalState";
import { AccountAddress } from "@aptos-labs/ts-sdk";
import { GameCreatedEvent } from "@/types/surf";

export type GamesLookup = {
  created: GameCreatedEvent[];
  invited: GameCreatedEvent[];
}

export function useGamesQueryKey() {
  return ["getAccounts"];
}

export function useGames(userAddress: AccountAddress) {
  const [globalState] = useGlobalState();
  return useQuery<GamesLookup>(
    useGamesQueryKey(),
    async () => {
      const graphqlClient = getSdk(globalState.client);
      const eventType = `${globalState.moduleAddress}::chess::GameCreatedEvent`;
      const createdSpec = {
        creator_address: userAddress,
      };
      const invitedSpec = {
        invited_address: userAddress,
      };
      const response = await graphqlClient.GetGames({ eventType, createdSpec, invitedSpec });
      return {
        created: response.created.map((e) => e.data),
        invited: response.invited.map((e) => e.data),
      }
    },
    { refetchInterval: 10000, retry: false, staleTime: Infinity },
  );
}
