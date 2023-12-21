import { useQuery } from "@tanstack/react-query";
import { MoveStructId } from "@aptos-labs/ts-sdk";
import { useGlobalState } from "../context/GlobalState";

export function useGetAccountResource<T extends {}>(
  accountAddress: string,
  resourceType: string,
  options: { enabled?: boolean; refetchInterval?: number } = {},
) {
  const [globalState] = useGlobalState();
  return useQuery<T>({
    queryKey: [
      "accountResource",
      accountAddress,
      resourceType,
      globalState.network,
    ],
    queryFn: async () => {
      // TODO: This MoveStructId stuff is going away.
      // https://aptos-org.slack.com/archives/C05NLAKJM9U/p1703036068605009
      const rt = resourceType as MoveStructId;
      return await globalState.client.account.getAccountResource<T>({
        accountAddress,
        resourceType: rt,
      });
    },
    refetchInterval: options.refetchInterval,
    retry: false,
    enabled: options.enabled,
  });
}
