export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamp: string;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_comparison_exp = {
  _eq: InputMaybe<Scalars["String"]>;
  _gt: InputMaybe<Scalars["String"]>;
  _gte: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike: InputMaybe<Scalars["String"]>;
  _in: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex: InputMaybe<Scalars["String"]>;
  _is_null: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like: InputMaybe<Scalars["String"]>;
  _lt: InputMaybe<Scalars["String"]>;
  _lte: InputMaybe<Scalars["String"]>;
  _neq: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike: InputMaybe<Scalars["String"]>;
  _nin: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar: InputMaybe<Scalars["String"]>;
};

/** ordering argument of a cursor */
export enum cursor_ordering {
  /** ascending ordering of the cursor */
  ASC = "ASC",
  /** descending ordering of the cursor */
  DESC = "DESC",
}

/** columns and relationships of "games" */
export type games = {
  __typename?: "games";
  creator_address: Scalars["String"];
  game_created_timestamp: Maybe<Scalars["timestamp"]>;
  object_address: Scalars["String"];
  opponent_address: Scalars["String"];
};

/** Boolean expression to filter rows from the table "games". All fields are combined with a logical 'AND'. */
export type games_bool_exp = {
  _and: InputMaybe<Array<games_bool_exp>>;
  _not: InputMaybe<games_bool_exp>;
  _or: InputMaybe<Array<games_bool_exp>>;
  creator_address: InputMaybe<String_comparison_exp>;
  game_created_timestamp: InputMaybe<timestamp_comparison_exp>;
  object_address: InputMaybe<String_comparison_exp>;
  opponent_address: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "games". */
export type games_order_by = {
  creator_address: InputMaybe<order_by>;
  game_created_timestamp: InputMaybe<order_by>;
  object_address: InputMaybe<order_by>;
  opponent_address: InputMaybe<order_by>;
};

/** select columns of table "games" */
export enum games_select_column {
  /** column name */
  creator_address = "creator_address",
  /** column name */
  game_created_timestamp = "game_created_timestamp",
  /** column name */
  object_address = "object_address",
  /** column name */
  opponent_address = "opponent_address",
}

/** Streaming cursor of the table "games" */
export type games_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: games_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type games_stream_cursor_value_input = {
  creator_address: InputMaybe<Scalars["String"]>;
  game_created_timestamp: InputMaybe<Scalars["timestamp"]>;
  object_address: InputMaybe<Scalars["String"]>;
  opponent_address: InputMaybe<Scalars["String"]>;
};

/** column ordering options */
export enum order_by {
  /** in ascending order, nulls last */
  asc = "asc",
  /** in ascending order, nulls first */
  asc_nulls_first = "asc_nulls_first",
  /** in ascending order, nulls last */
  asc_nulls_last = "asc_nulls_last",
  /** in descending order, nulls first */
  desc = "desc",
  /** in descending order, nulls first */
  desc_nulls_first = "desc_nulls_first",
  /** in descending order, nulls last */
  desc_nulls_last = "desc_nulls_last",
}

export type query_root = {
  __typename?: "query_root";
  /** fetch data from the table: "games" */
  games: Array<games>;
};

export type query_rootgamesArgs = {
  distinct_on: InputMaybe<Array<games_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<games_order_by>>;
  where: InputMaybe<games_bool_exp>;
};

export type subscription_root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "games" */
  games: Array<games>;
  /** fetch data from the table in a streaming manner: "games" */
  games_stream: Array<games>;
};

export type subscription_rootgamesArgs = {
  distinct_on: InputMaybe<Array<games_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<games_order_by>>;
  where: InputMaybe<games_bool_exp>;
};

export type subscription_rootgames_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<games_stream_cursor_input>>;
  where: InputMaybe<games_bool_exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type timestamp_comparison_exp = {
  _eq: InputMaybe<Scalars["timestamp"]>;
  _gt: InputMaybe<Scalars["timestamp"]>;
  _gte: InputMaybe<Scalars["timestamp"]>;
  _in: InputMaybe<Array<Scalars["timestamp"]>>;
  _is_null: InputMaybe<Scalars["Boolean"]>;
  _lt: InputMaybe<Scalars["timestamp"]>;
  _lte: InputMaybe<Scalars["timestamp"]>;
  _neq: InputMaybe<Scalars["timestamp"]>;
  _nin: InputMaybe<Array<Scalars["timestamp"]>>;
};
