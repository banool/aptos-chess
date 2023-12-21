import { Aptos, AptosConfig, LedgerInfo, Network } from "@aptos-labs/ts-sdk";

export const REFETCH_INTERVAL_MS = 15000;

export function getLedgerInfoWithoutResponseError(
  network: Network,
): Promise<LedgerInfo> {
  const config = new AptosConfig({
    network,
  });
  const client = new Aptos(config);
  return client.getLedgerInfo();
}
