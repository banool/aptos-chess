import { Select, Box } from "@chakra-ui/react";
import { useGlobalState } from "../context/GlobalState";
import { useGetChainId } from "../api/useGetNetworkChainIds";
import { toTitleCase } from "../utils/utils";
import { Network } from "@aptos-labs/ts-sdk";

function NetworkAndChainIdCached({
  networkName,
  chainId,
}: {
  networkName: string;
  chainId: string | null;
}) {
  // return <>{chainId ? `${toTitleCase(networkName)} - ${chainId}` : "---"}</>;
  return <>{chainId ? `${toTitleCase(networkName)}` : "---"}</>;
}

function NetworkAndChainId({ network }: { network: Network }) {
  const chainId = useGetChainId(network);

  const out = chainId ? (
    <NetworkAndChainIdCached networkName={network} chainId={chainId} />
  ) : null;
  return out;
}

export default function NetworkSelect() {
  const [state, { selectNetwork }] = useGlobalState();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const network_name = event.target.value;
    selectNetwork(network_name);
  };

  const networks: Network[] = [Network.MAINNET, Network.TESTNET, Network.LOCAL];
  let options = [];
  for (const network of networks) {
    const item = NetworkAndChainId({ network });
    if (item === null) {
      continue;
    }
    options.push(
      <option key={network} value={network}>
        {item}
      </option>,
    );
  }

  return (
    <Box>
      <Select
        id="network-select"
        value={state.network}
        onChange={handleChange}
        variant="outlined"
      >
        <option disabled value="">
          Network
        </option>
        {options}
      </Select>
    </Box>
  );
}
