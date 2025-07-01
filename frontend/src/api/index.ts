import { Aptos, AptosConfig, LedgerInfo, Network } from "@aptos-labs/ts-sdk";

export const REFETCH_INTERVAL_MS = 15000;

export function getLedgerInfoWithoutResponseError(
  client: Aptos,
  network: Network,
): Promise<LedgerInfo> {
  const config = new AptosConfig({ ...client.config, network });
  const aptos = new Aptos(config);
  return aptos.getLedgerInfo();
}
