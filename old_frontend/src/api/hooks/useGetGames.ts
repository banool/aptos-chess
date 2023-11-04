import { Types } from "aptos";
import { useQuery } from "react-query";
import { getAccountResource } from "..";
import { ResponseError } from "../client";
import { useGlobalState } from "../../GlobalState";

export type useGetAccountResourceResponse = {
  accountResource: Types.MoveResource | undefined;
  isLoading: boolean;
  error: ResponseError | null;
};
// TODO: Does the events table return older or newer first?z
// Return information about the games that the player is a part of.
// TODO: Use indexer for this.
// TODO: Does the events table return older or newer first? can it be configured?
// TODO: Use TS SDK v2 for this
export function useGetGames(
  address: string,
  options: { enabled?: boolean; refetchInterval?: number } = {}
): useGetAccountResourceResponse {
  const [state, _setState] = useGlobalState();

  /*
  const accountResourcesResult = useQuery<Types.MoveResource, ResponseError>(
    ["accountResource", { address }, state.network_value],
    () =>
      getAccountResource(
        { address: playerAddress, resourceType: resource },
        state.network_value
      ),
    {
      refetchOnWindowFocus: false,
      enabled: options.enabled,
      refetchInterval: options.refetchInterval,
    }
  );

  const { isLoading, error } = accountResourcesResult;

  const accountResource = accountResourcesResult.data;

  return { accountResource, isLoading, error };
  */

  return {
    accountResource: undefined,
    isLoading: false,
    error: null,
  }
}
