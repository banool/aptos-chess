import { useQuery } from "@tanstack/react-query";
import { useGlobalState } from "../context/GlobalState";
import { MoveAddressType } from "@aptos-labs/ts-sdk";

export function useGetAnsAddress(
  ansName: string,
  { enabled }: { enabled?: boolean },
) {
  const [globalState] = useGlobalState();
  return useQuery<MoveAddressType | undefined>({
    queryKey: ["getAnsAddress", ansName],
    queryFn: async () => {
      return await globalState.client.ans.getTargetAddress({
        name: ansName,
      });
    },
    retry: false,
    enabled,
  });
}
