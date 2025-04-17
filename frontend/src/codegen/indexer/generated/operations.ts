import * as Types from "./types";

export type GetGamesQueryVariables = Types.Exact<{
  userAddress?: Types.InputMaybe<Types.Scalars["String"]>;
}>;

export type GetGamesQuery = {
  __typename?: "query_root";
  created: Array<{
    __typename?: "games";
    object_address: string;
    opponent: string;
    created_at: any;
  }>;
  invited: Array<{
    __typename?: "games";
    object_address: string;
    creator: string;
    created_at: any;
  }>;
};
