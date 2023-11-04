// hooks/useChessGames.ts

import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Game } from "../codegen/move/generated/types";
import { useGlobalState } from '@/context/GlobalState';
import { AccountAddress } from '@aptos-labs/ts-sdk';

export function useGamesQueryKey() {
  return ['getAccounts'];
}

export default function useGames(userAddress: AccountAddress) {
  const [globalState] = useGlobalState();
  return useQuery<Game[]>(
    useGamesQueryKey(),
    async () => {
      const result = await (
        // globalState.client
        await fetch(`${serverUrl}/v1/user/accounts`, {
          credentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'GET',
          mode: 'cors',
        })
      ).json();

      return result;
    },
    { refetchInterval: 10000, retry: false, staleTime: Infinity },
  );
}
