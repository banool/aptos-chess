import * as Types from './operations';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';

export const GetGames = `
    query GetGames($eventType: String, $createdSpec: jsonb, $invitedSpec: jsonb) {
  created: events(
    where: {indexed_type: {_eq: $eventType}, data: {_contains: $createdSpec}}
  ) {
    data
  }
  invited: events(
    where: {indexed_type: {_eq: $eventType}, data: {_contains: $invitedSpec}}
  ) {
    data
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetGames(variables?: Types.GetGamesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetGamesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetGamesQuery>(GetGames, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetGames', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;