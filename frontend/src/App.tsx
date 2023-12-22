import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter } from "react-router-dom";
import { GlobalStateProvider, useGlobalState } from "./context/GlobalState";
import MyRoutes from "./MyRoutes";
import {
  AptosWalletAdapterProvider,
  NetworkName,
  Wallet,
} from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import {
  IdentityConnectWallet,
  IdentityConnectWalletConfig,
} from "@identity-connect/wallet-adapter-plugin";
import { FewchaWallet } from "fewcha-plugin-wallet-adapter";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
import { PontemWallet } from "@pontem/wallet-adapter-plugin";
import { Network } from "@aptos-labs/ts-sdk";

// It is okay for this to be publicly accessible.
const identityConnectDappId = "7bd027c3-2f00-48a8-a2c7-31412ed82405";

const queryClient = new QueryClient();

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <GlobalStateProvider>
          <AppInner />
        </GlobalStateProvider>
      </HashRouter>
    </QueryClientProvider>
  </ChakraProvider>
);

export const AppInner = () => {
  const [state] = useGlobalState();

  let wallets: Wallet[] = [];

  // First try to add IdentityConnectWallet. This only works if we're on a production
  // network, it doesn't work for local development.
  const networkName = getNetworkName(state.network);
  if (networkName) {
    const identityConnectWalletConfig: IdentityConnectWalletConfig = {
      networkName: networkName,
    };
    wallets.push(
      new IdentityConnectWallet(
        identityConnectDappId,
        identityConnectWalletConfig,
      ),
    );
  }

  // Add the rest of the wallets. This order is intentional.
  wallets = wallets.concat([
    new PetraWallet(),
    new PontemWallet(),
    new MartianWallet(),
    new FewchaWallet(),
  ]);

  return (
    // This key is necessary to make the wallets used by the WalletSelector refresh
    // when the selected network changes.
    <Box key={state.network}>
      <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
        <MyRoutes />
      </AptosWalletAdapterProvider>
    </Box>
  );
};

const getNetworkName = (network: Network): NetworkName | undefined => {
  switch (network) {
    case Network.DEVNET:
      return NetworkName.Devnet;
    case Network.TESTNET:
      return NetworkName.Testnet;
    case Network.MAINNET:
      return NetworkName.Mainnet;
    default:
      return undefined;
  }
};
