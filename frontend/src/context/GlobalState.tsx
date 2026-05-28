import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import React, { createContext, useMemo } from "react";
import { defaultNetwork } from "../constants";
import { useNetworkSelector } from "./networkSelection";
import { DEFAULT_USE_FEE_PAYER, useFeePayerSelector } from "./feePayerSelection";
import { getSdk, Sdk } from "../codegen/indexer/generated/queries";
import { GraphQLClient } from "graphql-request";
import { GasStationTransactionSubmitter } from "@aptos-labs/gas-station-client";

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
  /** whether to sponsor transactions via the gas station (fee payer flow) */
  readonly useFeePayer: boolean;
};

type GlobalActions = {
  selectNetwork: ReturnType<typeof useNetworkSelector>[1];
  setUseFeePayer: ReturnType<typeof useFeePayerSelector>[1];
};

function deriveGlobalState({
  network,
  useFeePayer,
}: {
  network: Network;
  useFeePayer: boolean;
}): GlobalState {
  // TODO: Handle other networks, this only works for testnet.
  // We pass `baseUrl` explicitly so we can target the staging gas station.
  // When the user toggles the fee payer off we skip the submitter entirely so
  // the SDK falls back to direct submission and `withFeePayer: false`.
  const gasStationClient = useFeePayer
    ? new GasStationTransactionSubmitter({
        baseUrl: "https://api.testnet.staging.aptoslabs.com/gs/v1",
        apiKey: "AG-BYZAYOAVKBEFSRJCE7FL8P3HUVXGYZTV6",
      })
    : undefined;
  // We forcibly use staging here too.
  const config = new AptosConfig({
    network,
    fullnode: "https://api.testnet.staging.aptoslabs.com/v1",
    indexer: "https://api.testnet.staging.aptoslabs.com/v1/graphql",
    pluginSettings: {
      TRANSACTION_SUBMITTER: gasStationClient,
    },
    clientConfig: {
      API_KEY: "AG-NBHG5KQP5HL6TIOA8BUP9HV4S2OHIYTCW",
    },
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
    useFeePayer,
  };
}

const initialGlobalState = deriveGlobalState({
  network: defaultNetwork,
  useFeePayer: DEFAULT_USE_FEE_PAYER,
});

export const GlobalStateContext = createContext(initialGlobalState);
export const GlobalActionsContext = createContext({} as GlobalActions);

export const GlobalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedNetwork, selectNetwork] = useNetworkSelector();
  const [useFeePayer, setUseFeePayer] = useFeePayerSelector();
  const globalState: GlobalState = useMemo(
    () =>
      deriveGlobalState({
        network: selectedNetwork,
        useFeePayer,
      }),
    [selectedNetwork, useFeePayer],
  );

  const globalActions = useMemo(
    () => ({
      selectNetwork,
      setUseFeePayer,
    }),
    [selectNetwork, setUseFeePayer],
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
      throw "MAINNET not supported right now";
    case Network.SHELBYNET:
      throw "SHELBYNET not supported";
    case Network.NETNA:
      throw "NETNA not supported";
    case Network.CUSTOM:
      throw "CUSTOM not supported";
  }
}
