import { useQuery } from "@tanstack/react-query";
import { useGlobalState } from "../context/GlobalState";
import { AccountAddress } from "@aptos-labs/ts-sdk";

export function useGetAnsAddress(
  ansName: string,
  { enabled }: { enabled?: boolean },
) {
  const [globalState] = useGlobalState();
  return useQuery<AccountAddress | undefined>({
    queryKey: ["getAnsAddress", ansName],
    queryFn: async () => {
      const address = await globalState.client.ans.getTargetAddress({
        name: ansName,
      });
      return address;
    },
    retry: false,
    enabled,
  });
}
