import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import React, { createContext, useMemo } from "react";
import { defaultNetwork } from "../constants";
import { useNetworkSelector } from "./networkSelection";
import { getSdk, Sdk } from "../codegen/indexer/generated/queries";
import { GraphQLClient } from "graphql-request";
import { createGasStationClient } from "@aptos-labs/gas-station-client";

export type GlobalState = {
  /** derived from external state ?network=<network> query parameter - e.g. devnet */
  readonly network: Network;
  /** derived from network_value */
  readonly client: Aptos;
  /** derived from network_value */
  readonly moduleAddress: string;
  /** derived from network_value */
  readonly moduleName: string;
  /** for querying the no code API, derived from network_value */
  readonly noCodeClient: Sdk;
  /** API key for the no code API */
  readonly noCodeApiKey: string;
};

type GlobalActions = {
  selectNetwork: ReturnType<typeof useNetworkSelector>[1];
};

function deriveGlobalState({ network }: { network: Network }): GlobalState {
  // TODO: Handle other networks, this only works for testnet.
  const gasStationClient = createGasStationClient({
    network,
    apiKey: "AG-NCLQHXTM2P4NNK5RGZSWIBSZKSXNSYEWO",
  });
  const config = new AptosConfig({
    network,
    pluginSettings: {
      TRANSACTION_SUBMITTER: gasStationClient,
    },
    clientConfig: {
      API_KEY: "AG-9ZHN7KXXIZO9SZDZ3NPI4S3VMT4NTP12"
    }
  });
  const client = new Aptos(config);
  const { address: moduleAddress, name: moduleName } =
    getModuleAddressAndName(network);
  // TODO: Handle other networks, this only works for testnet.
  const nocodeClient = getSdk(
    new GraphQLClient(
      "https://api.testnet.staging.aptoslabs.com/nocode/v1/api/cm9lbaypy000as6011st0h404/v1/graphql",
    ),
  );
  return {
    network,
    client,
    moduleAddress,
    moduleName,
    noCodeClient: nocodeClient,
    noCodeApiKey: "AG-6FSTEBEJMBGSVK23KQYXCESXYEBX9AADY",
  };
}

const initialGlobalState = deriveGlobalState({
  network: defaultNetwork,
});

export const GlobalStateContext = createContext(initialGlobalState);
export const GlobalActionsContext = createContext({} as GlobalActions);

export const GlobalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedNetwork, selectNetwork] = useNetworkSelector();
  const globalState: GlobalState = useMemo(
    () =>
      deriveGlobalState({
        network: selectedNetwork,
      }),
    [selectedNetwork],
  );

  const globalActions = useMemo(
    () => ({
      selectNetwork,
    }),
    [selectNetwork],
  );

  return (
    <GlobalStateContext.Provider value={globalState}>
      <GlobalActionsContext.Provider value={globalActions}>
        {children}
      </GlobalActionsContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () =>
  [
    React.useContext(GlobalStateContext),
    React.useContext(GlobalActionsContext),
  ] as const;

export const getChessIdentifier = (
  state: GlobalState,
  identifier: string,
): string => {
  return `${state.moduleAddress}::${state.moduleName}::${identifier}`;
};

function getModuleAddressAndName(network: Network): {
  address: string;
  name: string;
} {
  switch (network) {
    case Network.DEVNET:
      throw "DEVNET not supported";
    case Network.LOCAL:
      return {
        address:
          "0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30",
        name: "chess",
      };
    case Network.TESTNET:
      return {
        address:
          "0x505e057ec653a9a511e9c36e1cb1f2e80e54126c39849ac1fd69d95a4e756601",
        name: "chess",
      };
    case Network.MAINNET:
      // Doesn't work right now.
      return {
        address:
          "0x81e2e2499407693c81fe65c86405ca70df529438339d9da7a6fc2520142b591e",
        name: "chess",
      };
    case Network.CUSTOM:
      throw "CUSTOM not supported";
  }
}
