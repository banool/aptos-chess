import * as Types from "./operations";

import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";

export const GetGames = `
    query GetGames($userAddress: String) {
  created: games(where: {creator_address: {_eq: $userAddress}}) {
    object_address
    opponent_address
    game_created_timestamp
  }
  invited: games(where: {opponent_address: {_eq: $userAddress}}) {
    object_address
    creator_address
    game_created_timestamp
  }
}
    `;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    GetGames(
      variables?: Types.GetGamesQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"],
    ): Promise<Types.GetGamesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.GetGamesQuery>(GetGames, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetGames",
        "query",
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
