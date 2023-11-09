import * as Types from './types';

export type GetGamesQueryVariables = Types.Exact<{
  eventType?: Types.InputMaybe<Types.Scalars['String']>;
  createdSpec?: Types.InputMaybe<Types.Scalars['jsonb']>;
  invitedSpec?: Types.InputMaybe<Types.Scalars['jsonb']>;
}>;


export type GetGamesQuery = { __typename?: 'query_root', created: Array<{ __typename?: 'events', data: any }>, invited: Array<{ __typename?: 'events', data: any }> };
