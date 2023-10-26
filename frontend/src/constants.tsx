/**
 * Move module
 */
export const MODULE_ADDRESS = {
  mainnet: null,
  testnet: "0x81e2e2499407693c81fe65c86405ca70df529438339d9da7a6fc2520142b591e",
  devnet: "0x81e2e2499407693c81fe65c86405ca70df529438339d9da7a6fc2520142b591e",
  local: "0x296102a3893d43e11de2aa142fbb126377120d7d71c246a2f95d5b4f3ba16b30",
};

export const MODULE_NAME = {
  mainnet: null,
  testnet: "chess",
  devnet: "chess",
  local: "chess",
};

/**
 * Network
 */
export const networks = {
  mainnet: "https://fullnode.mainnet.aptoslabs.com/",
  testnet: "https://fullnode.testnet.aptoslabs.com",
  devnet: "https://fullnode.devnet.aptoslabs.com/",
  local: "http://127.0.0.1:8080",
};

export const indexerNetworks = {
  mainnet: "https://indexer.mainnet.aptoslabs.com/v1/graphql",
  testnet: "https://indexer-testnet.staging.gcp.aptosdev.com/v1/graphql",
  devnet: "https://indexer-devnet.staging.gcp.aptosdev.com/v1/graphql",
  local: "http://127.0.0.1:8090/v1/graphql",
};

export type NetworkName = keyof typeof networks;

// Remove trailing slashes
for (const key of Object.keys(networks)) {
  const networkName = key as NetworkName;
  if (networks[networkName].endsWith("/")) {
    networks[networkName] = networks[networkName].slice(0, -1);
  }
}

export const defaultNetworkName: NetworkName = "local" as const;

if (!(defaultNetworkName in networks)) {
  throw `defaultNetworkName '${defaultNetworkName}' not in Networks!`;
}

export const defaultNetwork = networks[defaultNetworkName];
export const defaultIndexerNetwork = indexerNetworks[defaultNetworkName];

/**
 * Feature
 */
export const features = {
  prod: "Production Mode",
  dev: "Development Mode",
};

export type FeatureName = keyof typeof features;

// Remove trailing slashes
for (const key of Object.keys(features)) {
  const featureName = key as FeatureName;
  if (features[featureName].endsWith("/")) {
    features[featureName] = features[featureName].slice(0, -1);
  }
}

export const defaultFeatureName: FeatureName = "prod" as const;

if (!(defaultFeatureName in features)) {
  throw `defaultFeatureName '${defaultFeatureName}' not in Features!`;
}

export const defaultFeature = features[defaultFeatureName];
