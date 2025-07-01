import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter } from "react-router-dom";
import { GlobalStateProvider, useGlobalState } from "./context/GlobalState";
import MyRoutes from "./MyRoutes";
import {
  AptosWalletAdapterProvider,
  AvailableWallets,
} from "@aptos-labs/wallet-adapter-react";

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

  const optInWallets: AvailableWallets[] = [
    "Petra",
    "Nightly",
    "OKX Wallet",
    "Continue with Apple",
    "Continue with Google",
  ];

  return (
    // This key is necessary to make the wallets used by the WalletSelector refresh when
    // the selected network changes / whether we use a custom transaction submitter.
    <Box
      key={`${state.network}-${
        state.client.config.getTransactionSubmitter() === undefined
          ? "default"
          : "custom"
      }`}
    >
      <AptosWalletAdapterProvider
        dappConfig={{
          network: state.network,
          transactionSubmitter: state.client.config.getTransactionSubmitter(),
        }}
        optInWallets={optInWallets}
        autoConnect={true}
      >
        <MyRoutes />
      </AptosWalletAdapterProvider>
    </Box>
  );
};
