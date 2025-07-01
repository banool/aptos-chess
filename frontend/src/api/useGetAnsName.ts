import { useQuery } from "@tanstack/react-query";
import { useGlobalState } from "../context/GlobalState";

export function useGetAnsName(
  address: string,
  { enabled }: { enabled?: boolean },
) {
  const [globalState] = useGlobalState();
  return useQuery<string | undefined>({
    queryKey: ["getAnsName", address],
    queryFn: async () => {
      const name = await globalState.client.ans.getPrimaryName({
        address,
      });
      return name;
    },
    retry: false,
    enabled,
  });
}
