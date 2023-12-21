import { Network, NetworkToNetworkName } from "@aptos-labs/ts-sdk";

import { defaultNetwork } from "../constants";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// Returns a Network if the given string is a valid network name, otherwise returns
// undefined.
export function getNetwork(value: string): Network | undefined {
  // https://aptos-org.slack.com/archives/C05NLAKJM9U/p1699122142193429
  // This should be NetworkNameToNetwork
  return NetworkToNetworkName[value];
}

export function isValidNetworkString(value: string): boolean {
  return getNetwork(value) !== undefined;
}

const SELECTED_NETWORK_LOCAL_STORAGE_KEY = "selected_network";

function getUserSelectedNetworkFromLocalStorageWithDefault(): Network {
  const network = localStorage.getItem(SELECTED_NETWORK_LOCAL_STORAGE_KEY);
  return getNetwork(network ?? "") ?? defaultNetwork;
}

function writeSelectedNetworkToLocalStorage(network: string) {
  const currentLocalStorageNetwork = localStorage.getItem(
    SELECTED_NETWORK_LOCAL_STORAGE_KEY,
  );
  if (network === defaultNetwork && currentLocalStorageNetwork != null) {
    // if network selection is default network (i.e. mainnet) we remove the local storage entry
    localStorage.removeItem(SELECTED_NETWORK_LOCAL_STORAGE_KEY);
  } else if (currentLocalStorageNetwork !== network) {
    localStorage.setItem(SELECTED_NETWORK_LOCAL_STORAGE_KEY, network);
  }
}

// This is a custom hook that allows us to read and write the selectedNetwork.
// Note that this hook implements essentially 3 things:
// 1. The hook will return the currently selected network, which is essentially whatever is contained in the URL query param "network".
// 2. If the URL query param "network" is not present, the hook will perform this on initialization:
//    1. check localStorage for a previously selected network. If no previously selected network is found, it will default to the defaultNetworkName.
//    2. set the URL query param "network" to the result of 1.
// 3. Lastly, the hook provides a function to explicitly select/switch a network. This function will update the URL query param "network" and also store the selected network in local storage.
//    This is aimed to be used by the network selection dropdown in the header.
// WARNING: don't use this hook directly in components, rather use: const [useGlobalState, {selectNetwork}] = useGlobalState();
export function useNetworkSelector() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedNetworkQueryParam = searchParams.get("network") ?? "";

  function selectNetwork(
    network: string,
    { replace = false }: { replace?: boolean } = {},
  ) {
    setSearchParams((prev) => {
      prev.set("network", network);
      return prev;
    });
    writeSelectedNetworkToLocalStorage(network);
  }

  // on init check for existence of network query param, if not present, check local storage for a previously selected network. Then set query param to the network defined in local storage.
  useEffect(
    () => {
      const currentNetworkSearchParam = searchParams.get("network");
      if (!isValidNetworkString(currentNetworkSearchParam ?? "")) {
        selectNetwork(getUserSelectedNetworkFromLocalStorageWithDefault(), {
          replace: true,
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [], // empty [] makes this effect only run once (on mount)
  );

  const selectedNetwork = getNetwork(selectedNetworkQueryParam);
  if (selectedNetwork !== undefined) {
    return [selectedNetwork, selectNetwork] as const;
  } else {
    return [defaultNetwork, selectNetwork] as const;
  }
}
