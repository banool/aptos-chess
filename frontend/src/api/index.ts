import { AptosClient, IndexerClient, Types } from "aptos";
import { withResponseError } from "./client";

export function getLedgerInfoWithoutResponseError(
  nodeUrl: string
): Promise<Types.IndexResponse> {
  const client = new AptosClient(nodeUrl);
  return client.getLedgerInfo();
}

export function getAccountResources(
  requestParameters: { address: string; ledgerVersion?: number },
  nodeUrl: string
): Promise<Types.MoveResource[]> {
  const client = new AptosClient(nodeUrl);
  const { address, ledgerVersion } = requestParameters;
  let ledgerVersionBig;
  if (ledgerVersion !== undefined) {
    ledgerVersionBig = BigInt(ledgerVersion);
  }
  return withResponseError(
    client.getAccountResources(address, { ledgerVersion: ledgerVersionBig })
  );
}

export function getAccountResource(
  requestParameters: {
    address: string;
    resourceType: string;
    ledgerVersion?: number;
  },
  nodeUrl: string
): Promise<Types.MoveResource> {
  const client = new AptosClient(nodeUrl);
  const { address, resourceType, ledgerVersion } = requestParameters;
  let ledgerVersionBig;
  if (ledgerVersion !== undefined) {
    ledgerVersionBig = BigInt(ledgerVersion);
  }
  return withResponseError(
    client.getAccountResource(address, resourceType, {
      ledgerVersion: ledgerVersionBig,
    })
  );
}

export async function getGames(
  indexerUrl: string,
  eventHandle: string,
  gamerAddress: string
): Promise<void> {
  const indexerClient = new IndexerClient(indexerUrl);
  // TODO: Make this query https://gist.github.com/banool/7a17abef1c39eb210e6f04f1b5679668.
  indexerClient;
}
