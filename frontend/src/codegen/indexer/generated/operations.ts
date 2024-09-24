import * as Types from "./types";

export type GetGamesQueryVariables = Types.Exact<{
  userAddress?: Types.InputMaybe<Types.Scalars["String"]>;
}>;

export type GetGamesQuery = {
  __typename?: "query_root";
  created: Array<{
    __typename?: "games";
    object_address: string;
    opponent_address: string;
    game_created_timestamp?: any | null;
  }>;
  invited: Array<{
    __typename?: "games";
    object_address: string;
    creator_address: string;
    game_created_timestamp?: any | null;
  }>;
};
