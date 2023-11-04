import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { HashRouter } from "react-router-dom";
import { GlobalStateProvider } from "./GlobalState";
import MyRoutes from "./MyRoutes";

const queryClient = new QueryClient();

export const App = () => (
  <ChakraProvider theme={theme}>
    <GlobalStateProvider>
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <MyRoutes />
        </HashRouter>
      </QueryClientProvider>
    </GlobalStateProvider>
  </ChakraProvider>
);
