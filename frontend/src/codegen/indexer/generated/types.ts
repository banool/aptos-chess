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
  bigint: bigint;
  jsonb: any;
  numeric: number;
  timestamp: string;
  timestamptz: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_comparison_exp = {
  _eq: InputMaybe<Scalars["Boolean"]>;
  _gt: InputMaybe<Scalars["Boolean"]>;
  _gte: InputMaybe<Scalars["Boolean"]>;
  _in: InputMaybe<Array<Scalars["Boolean"]>>;
  _is_null: InputMaybe<Scalars["Boolean"]>;
  _lt: InputMaybe<Scalars["Boolean"]>;
  _lte: InputMaybe<Scalars["Boolean"]>;
  _neq: InputMaybe<Scalars["Boolean"]>;
  _nin: InputMaybe<Array<Scalars["Boolean"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_comparison_exp = {
  _eq: InputMaybe<Scalars["Int"]>;
  _gt: InputMaybe<Scalars["Int"]>;
  _gte: InputMaybe<Scalars["Int"]>;
  _in: InputMaybe<Array<Scalars["Int"]>>;
  _is_null: InputMaybe<Scalars["Boolean"]>;
  _lt: InputMaybe<Scalars["Int"]>;
  _lte: InputMaybe<Scalars["Int"]>;
  _neq: InputMaybe<Scalars["Int"]>;
  _nin: InputMaybe<Array<Scalars["Int"]>>;
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

/** columns and relationships of "account_transactions" */
export type account_transactions = {
  __typename?: "account_transactions";
  account_address: Scalars["String"];
  /** An array relationship */
  coin_activities: Array<coin_activities>;
  /** An aggregate relationship */
  coin_activities_aggregate: coin_activities_aggregate;
  /** An array relationship */
  delegated_staking_activities: Array<delegated_staking_activities>;
  /** An array relationship */
  fungible_asset_activities: Array<fungible_asset_activities>;
  /** An array relationship */
  token_activities: Array<token_activities>;
  /** An aggregate relationship */
  token_activities_aggregate: token_activities_aggregate;
  /** An array relationship */
  token_activities_v2: Array<token_activities_v2>;
  /** An aggregate relationship */
  token_activities_v2_aggregate: token_activities_v2_aggregate;
  transaction_version: Scalars["bigint"];
};

/** columns and relationships of "account_transactions" */
export type account_transactionscoin_activitiesArgs = {
  distinct_on: InputMaybe<Array<coin_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<coin_activities_order_by>>;
  where: InputMaybe<coin_activities_bool_exp>;
};

/** columns and relationships of "account_transactions" */
export type account_transactionscoin_activities_aggregateArgs = {
  distinct_on: InputMaybe<Array<coin_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<coin_activities_order_by>>;
  where: InputMaybe<coin_activities_bool_exp>;
};

/** columns and relationships of "account_transactions" */
export type account_transactionsdelegated_staking_activitiesArgs = {
  distinct_on: InputMaybe<Array<delegated_staking_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<delegated_staking_activities_order_by>>;
  where: InputMaybe<delegated_staking_activities_bool_exp>;
};

/** columns and relationships of "account_transactions" */
export type account_transactionsfungible_asset_activitiesArgs = {
  distinct_on: InputMaybe<Array<fungible_asset_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<fungible_asset_activities_order_by>>;
  where: InputMaybe<fungible_asset_activities_bool_exp>;
};

/** columns and relationships of "account_transactions" */
export type account_transactionstoken_activitiesArgs = {
  distinct_on: InputMaybe<Array<token_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_activities_order_by>>;
  where: InputMaybe<token_activities_bool_exp>;
};

/** columns and relationships of "account_transactions" */
export type account_transactionstoken_activities_aggregateArgs = {
  distinct_on: InputMaybe<Array<token_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_activities_order_by>>;
  where: InputMaybe<token_activities_bool_exp>;
};

/** columns and relationships of "account_transactions" */
export type account_transactionstoken_activities_v2Args = {
  distinct_on: InputMaybe<Array<token_activities_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_activities_v2_order_by>>;
  where: InputMaybe<token_activities_v2_bool_exp>;
};

/** columns and relationships of "account_transactions" */
export type account_transactionstoken_activities_v2_aggregateArgs = {
  distinct_on: InputMaybe<Array<token_activities_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_activities_v2_order_by>>;
  where: InputMaybe<token_activities_v2_bool_exp>;
};

/** aggregated selection of "account_transactions" */
export type account_transactions_aggregate = {
  __typename?: "account_transactions_aggregate";
  aggregate: Maybe<account_transactions_aggregate_fields>;
  nodes: Array<account_transactions>;
};

/** aggregate fields of "account_transactions" */
export type account_transactions_aggregate_fields = {
  __typename?: "account_transactions_aggregate_fields";
  avg: Maybe<account_transactions_avg_fields>;
  count: Scalars["Int"];
  max: Maybe<account_transactions_max_fields>;
  min: Maybe<account_transactions_min_fields>;
  stddev: Maybe<account_transactions_stddev_fields>;
  stddev_pop: Maybe<account_transactions_stddev_pop_fields>;
  stddev_samp: Maybe<account_transactions_stddev_samp_fields>;
  sum: Maybe<account_transactions_sum_fields>;
  var_pop: Maybe<account_transactions_var_pop_fields>;
  var_samp: Maybe<account_transactions_var_samp_fields>;
  variance: Maybe<account_transactions_variance_fields>;
};

/** aggregate fields of "account_transactions" */
export type account_transactions_aggregate_fieldscountArgs = {
  columns: InputMaybe<Array<account_transactions_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type account_transactions_avg_fields = {
  __typename?: "account_transactions_avg_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "account_transactions". All fields are combined with a logical 'AND'. */
export type account_transactions_bool_exp = {
  _and: InputMaybe<Array<account_transactions_bool_exp>>;
  _not: InputMaybe<account_transactions_bool_exp>;
  _or: InputMaybe<Array<account_transactions_bool_exp>>;
  account_address: InputMaybe<String_comparison_exp>;
  coin_activities: InputMaybe<coin_activities_bool_exp>;
  coin_activities_aggregate: InputMaybe<coin_activities_aggregate_bool_exp>;
  delegated_staking_activities: InputMaybe<delegated_staking_activities_bool_exp>;
  fungible_asset_activities: InputMaybe<fungible_asset_activities_bool_exp>;
  token_activities: InputMaybe<token_activities_bool_exp>;
  token_activities_aggregate: InputMaybe<token_activities_aggregate_bool_exp>;
  token_activities_v2: InputMaybe<token_activities_v2_bool_exp>;
  token_activities_v2_aggregate: InputMaybe<token_activities_v2_aggregate_bool_exp>;
  transaction_version: InputMaybe<bigint_comparison_exp>;
};

/** aggregate max on columns */
export type account_transactions_max_fields = {
  __typename?: "account_transactions_max_fields";
  account_address: Maybe<Scalars["String"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** aggregate min on columns */
export type account_transactions_min_fields = {
  __typename?: "account_transactions_min_fields";
  account_address: Maybe<Scalars["String"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** Ordering options when selecting data from "account_transactions". */
export type account_transactions_order_by = {
  account_address: InputMaybe<order_by>;
  coin_activities_aggregate: InputMaybe<coin_activities_aggregate_order_by>;
  delegated_staking_activities_aggregate: InputMaybe<delegated_staking_activities_aggregate_order_by>;
  fungible_asset_activities_aggregate: InputMaybe<fungible_asset_activities_aggregate_order_by>;
  token_activities_aggregate: InputMaybe<token_activities_aggregate_order_by>;
  token_activities_v2_aggregate: InputMaybe<token_activities_v2_aggregate_order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** select columns of table "account_transactions" */
export enum account_transactions_select_column {
  /** column name */
  account_address = "account_address",
  /** column name */
  transaction_version = "transaction_version",
}

/** aggregate stddev on columns */
export type account_transactions_stddev_fields = {
  __typename?: "account_transactions_stddev_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type account_transactions_stddev_pop_fields = {
  __typename?: "account_transactions_stddev_pop_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type account_transactions_stddev_samp_fields = {
  __typename?: "account_transactions_stddev_samp_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "account_transactions" */
export type account_transactions_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: account_transactions_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type account_transactions_stream_cursor_value_input = {
  account_address: InputMaybe<Scalars["String"]>;
  transaction_version: InputMaybe<Scalars["bigint"]>;
};

/** aggregate sum on columns */
export type account_transactions_sum_fields = {
  __typename?: "account_transactions_sum_fields";
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** aggregate var_pop on columns */
export type account_transactions_var_pop_fields = {
  __typename?: "account_transactions_var_pop_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type account_transactions_var_samp_fields = {
  __typename?: "account_transactions_var_samp_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type account_transactions_variance_fields = {
  __typename?: "account_transactions_variance_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "address_events_summary" */
export type address_events_summary = {
  __typename?: "address_events_summary";
  account_address: Maybe<Scalars["String"]>;
  /** An object relationship */
  block_metadata: Maybe<block_metadata_transactions>;
  min_block_height: Maybe<Scalars["bigint"]>;
  num_distinct_versions: Maybe<Scalars["bigint"]>;
};

/** Boolean expression to filter rows from the table "address_events_summary". All fields are combined with a logical 'AND'. */
export type address_events_summary_bool_exp = {
  _and: InputMaybe<Array<address_events_summary_bool_exp>>;
  _not: InputMaybe<address_events_summary_bool_exp>;
  _or: InputMaybe<Array<address_events_summary_bool_exp>>;
  account_address: InputMaybe<String_comparison_exp>;
  block_metadata: InputMaybe<block_metadata_transactions_bool_exp>;
  min_block_height: InputMaybe<bigint_comparison_exp>;
  num_distinct_versions: InputMaybe<bigint_comparison_exp>;
};

/** Ordering options when selecting data from "address_events_summary". */
export type address_events_summary_order_by = {
  account_address: InputMaybe<order_by>;
  block_metadata: InputMaybe<block_metadata_transactions_order_by>;
  min_block_height: InputMaybe<order_by>;
  num_distinct_versions: InputMaybe<order_by>;
};

/** select columns of table "address_events_summary" */
export enum address_events_summary_select_column {
  /** column name */
  account_address = "account_address",
  /** column name */
  min_block_height = "min_block_height",
  /** column name */
  num_distinct_versions = "num_distinct_versions",
}

/** Streaming cursor of the table "address_events_summary" */
export type address_events_summary_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: address_events_summary_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type address_events_summary_stream_cursor_value_input = {
  account_address: InputMaybe<Scalars["String"]>;
  min_block_height: InputMaybe<Scalars["bigint"]>;
  num_distinct_versions: InputMaybe<Scalars["bigint"]>;
};

/** columns and relationships of "address_version_from_events" */
export type address_version_from_events = {
  __typename?: "address_version_from_events";
  account_address: Maybe<Scalars["String"]>;
  /** An array relationship */
  coin_activities: Array<coin_activities>;
  /** An aggregate relationship */
  coin_activities_aggregate: coin_activities_aggregate;
  /** An array relationship */
  delegated_staking_activities: Array<delegated_staking_activities>;
  /** An array relationship */
  token_activities: Array<token_activities>;
  /** An aggregate relationship */
  token_activities_aggregate: token_activities_aggregate;
  /** An array relationship */
  token_activities_v2: Array<token_activities_v2>;
  /** An aggregate relationship */
  token_activities_v2_aggregate: token_activities_v2_aggregate;
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** columns and relationships of "address_version_from_events" */
export type address_version_from_eventscoin_activitiesArgs = {
  distinct_on: InputMaybe<Array<coin_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<coin_activities_order_by>>;
  where: InputMaybe<coin_activities_bool_exp>;
};

/** columns and relationships of "address_version_from_events" */
export type address_version_from_eventscoin_activities_aggregateArgs = {
  distinct_on: InputMaybe<Array<coin_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<coin_activities_order_by>>;
  where: InputMaybe<coin_activities_bool_exp>;
};

/** columns and relationships of "address_version_from_events" */
export type address_version_from_eventsdelegated_staking_activitiesArgs = {
  distinct_on: InputMaybe<Array<delegated_staking_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<delegated_staking_activities_order_by>>;
  where: InputMaybe<delegated_staking_activities_bool_exp>;
};

/** columns and relationships of "address_version_from_events" */
export type address_version_from_eventstoken_activitiesArgs = {
  distinct_on: InputMaybe<Array<token_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_activities_order_by>>;
  where: InputMaybe<token_activities_bool_exp>;
};

/** columns and relationships of "address_version_from_events" */
export type address_version_from_eventstoken_activities_aggregateArgs = {
  distinct_on: InputMaybe<Array<token_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_activities_order_by>>;
  where: InputMaybe<token_activities_bool_exp>;
};

/** columns and relationships of "address_version_from_events" */
export type address_version_from_eventstoken_activities_v2Args = {
  distinct_on: InputMaybe<Array<token_activities_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_activities_v2_order_by>>;
  where: InputMaybe<token_activities_v2_bool_exp>;
};

/** columns and relationships of "address_version_from_events" */
export type address_version_from_eventstoken_activities_v2_aggregateArgs = {
  distinct_on: InputMaybe<Array<token_activities_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_activities_v2_order_by>>;
  where: InputMaybe<token_activities_v2_bool_exp>;
};

/** aggregated selection of "address_version_from_events" */
export type address_version_from_events_aggregate = {
  __typename?: "address_version_from_events_aggregate";
  aggregate: Maybe<address_version_from_events_aggregate_fields>;
  nodes: Array<address_version_from_events>;
};

/** aggregate fields of "address_version_from_events" */
export type address_version_from_events_aggregate_fields = {
  __typename?: "address_version_from_events_aggregate_fields";
  avg: Maybe<address_version_from_events_avg_fields>;
  count: Scalars["Int"];
  max: Maybe<address_version_from_events_max_fields>;
  min: Maybe<address_version_from_events_min_fields>;
  stddev: Maybe<address_version_from_events_stddev_fields>;
  stddev_pop: Maybe<address_version_from_events_stddev_pop_fields>;
  stddev_samp: Maybe<address_version_from_events_stddev_samp_fields>;
  sum: Maybe<address_version_from_events_sum_fields>;
  var_pop: Maybe<address_version_from_events_var_pop_fields>;
  var_samp: Maybe<address_version_from_events_var_samp_fields>;
  variance: Maybe<address_version_from_events_variance_fields>;
};

/** aggregate fields of "address_version_from_events" */
export type address_version_from_events_aggregate_fieldscountArgs = {
  columns: InputMaybe<Array<address_version_from_events_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type address_version_from_events_avg_fields = {
  __typename?: "address_version_from_events_avg_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "address_version_from_events". All fields are combined with a logical 'AND'. */
export type address_version_from_events_bool_exp = {
  _and: InputMaybe<Array<address_version_from_events_bool_exp>>;
  _not: InputMaybe<address_version_from_events_bool_exp>;
  _or: InputMaybe<Array<address_version_from_events_bool_exp>>;
  account_address: InputMaybe<String_comparison_exp>;
  coin_activities: InputMaybe<coin_activities_bool_exp>;
  coin_activities_aggregate: InputMaybe<coin_activities_aggregate_bool_exp>;
  delegated_staking_activities: InputMaybe<delegated_staking_activities_bool_exp>;
  token_activities: InputMaybe<token_activities_bool_exp>;
  token_activities_aggregate: InputMaybe<token_activities_aggregate_bool_exp>;
  token_activities_v2: InputMaybe<token_activities_v2_bool_exp>;
  token_activities_v2_aggregate: InputMaybe<token_activities_v2_aggregate_bool_exp>;
  transaction_version: InputMaybe<bigint_comparison_exp>;
};

/** aggregate max on columns */
export type address_version_from_events_max_fields = {
  __typename?: "address_version_from_events_max_fields";
  account_address: Maybe<Scalars["String"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** aggregate min on columns */
export type address_version_from_events_min_fields = {
  __typename?: "address_version_from_events_min_fields";
  account_address: Maybe<Scalars["String"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** Ordering options when selecting data from "address_version_from_events". */
export type address_version_from_events_order_by = {
  account_address: InputMaybe<order_by>;
  coin_activities_aggregate: InputMaybe<coin_activities_aggregate_order_by>;
  delegated_staking_activities_aggregate: InputMaybe<delegated_staking_activities_aggregate_order_by>;
  token_activities_aggregate: InputMaybe<token_activities_aggregate_order_by>;
  token_activities_v2_aggregate: InputMaybe<token_activities_v2_aggregate_order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** select columns of table "address_version_from_events" */
export enum address_version_from_events_select_column {
  /** column name */
  account_address = "account_address",
  /** column name */
  transaction_version = "transaction_version",
}

/** aggregate stddev on columns */
export type address_version_from_events_stddev_fields = {
  __typename?: "address_version_from_events_stddev_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type address_version_from_events_stddev_pop_fields = {
  __typename?: "address_version_from_events_stddev_pop_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type address_version_from_events_stddev_samp_fields = {
  __typename?: "address_version_from_events_stddev_samp_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "address_version_from_events" */
export type address_version_from_events_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: address_version_from_events_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type address_version_from_events_stream_cursor_value_input = {
  account_address: InputMaybe<Scalars["String"]>;
  transaction_version: InputMaybe<Scalars["bigint"]>;
};

/** aggregate sum on columns */
export type address_version_from_events_sum_fields = {
  __typename?: "address_version_from_events_sum_fields";
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** aggregate var_pop on columns */
export type address_version_from_events_var_pop_fields = {
  __typename?: "address_version_from_events_var_pop_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type address_version_from_events_var_samp_fields = {
  __typename?: "address_version_from_events_var_samp_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type address_version_from_events_variance_fields = {
  __typename?: "address_version_from_events_variance_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "address_version_from_move_resources" */
export type address_version_from_move_resources = {
  __typename?: "address_version_from_move_resources";
  address: Maybe<Scalars["String"]>;
  /** An array relationship */
  coin_activities: Array<coin_activities>;
  /** An aggregate relationship */
  coin_activities_aggregate: coin_activities_aggregate;
  /** An array relationship */
  delegated_staking_activities: Array<delegated_staking_activities>;
  /** An array relationship */
  token_activities: Array<token_activities>;
  /** An aggregate relationship */
  token_activities_aggregate: token_activities_aggregate;
  /** An array relationship */
  token_activities_v2: Array<token_activities_v2>;
  /** An aggregate relationship */
  token_activities_v2_aggregate: token_activities_v2_aggregate;
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** columns and relationships of "address_version_from_move_resources" */
export type address_version_from_move_resourcescoin_activitiesArgs = {
  distinct_on: InputMaybe<Array<coin_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<coin_activities_order_by>>;
  where: InputMaybe<coin_activities_bool_exp>;
};

/** columns and relationships of "address_version_from_move_resources" */
export type address_version_from_move_resourcescoin_activities_aggregateArgs = {
  distinct_on: InputMaybe<Array<coin_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<coin_activities_order_by>>;
  where: InputMaybe<coin_activities_bool_exp>;
};

/** columns and relationships of "address_version_from_move_resources" */
export type address_version_from_move_resourcesdelegated_staking_activitiesArgs =
  {
    distinct_on: InputMaybe<Array<delegated_staking_activities_select_column>>;
    limit: InputMaybe<Scalars["Int"]>;
    offset: InputMaybe<Scalars["Int"]>;
    order_by: InputMaybe<Array<delegated_staking_activities_order_by>>;
    where: InputMaybe<delegated_staking_activities_bool_exp>;
  };

/** columns and relationships of "address_version_from_move_resources" */
export type address_version_from_move_resourcestoken_activitiesArgs = {
  distinct_on: InputMaybe<Array<token_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_activities_order_by>>;
  where: InputMaybe<token_activities_bool_exp>;
};

/** columns and relationships of "address_version_from_move_resources" */
export type address_version_from_move_resourcestoken_activities_aggregateArgs =
  {
    distinct_on: InputMaybe<Array<token_activities_select_column>>;
    limit: InputMaybe<Scalars["Int"]>;
    offset: InputMaybe<Scalars["Int"]>;
    order_by: InputMaybe<Array<token_activities_order_by>>;
    where: InputMaybe<token_activities_bool_exp>;
  };

/** columns and relationships of "address_version_from_move_resources" */
export type address_version_from_move_resourcestoken_activities_v2Args = {
  distinct_on: InputMaybe<Array<token_activities_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_activities_v2_order_by>>;
  where: InputMaybe<token_activities_v2_bool_exp>;
};

/** columns and relationships of "address_version_from_move_resources" */
export type address_version_from_move_resourcestoken_activities_v2_aggregateArgs =
  {
    distinct_on: InputMaybe<Array<token_activities_v2_select_column>>;
    limit: InputMaybe<Scalars["Int"]>;
    offset: InputMaybe<Scalars["Int"]>;
    order_by: InputMaybe<Array<token_activities_v2_order_by>>;
    where: InputMaybe<token_activities_v2_bool_exp>;
  };

/** aggregated selection of "address_version_from_move_resources" */
export type address_version_from_move_resources_aggregate = {
  __typename?: "address_version_from_move_resources_aggregate";
  aggregate: Maybe<address_version_from_move_resources_aggregate_fields>;
  nodes: Array<address_version_from_move_resources>;
};

/** aggregate fields of "address_version_from_move_resources" */
export type address_version_from_move_resources_aggregate_fields = {
  __typename?: "address_version_from_move_resources_aggregate_fields";
  avg: Maybe<address_version_from_move_resources_avg_fields>;
  count: Scalars["Int"];
  max: Maybe<address_version_from_move_resources_max_fields>;
  min: Maybe<address_version_from_move_resources_min_fields>;
  stddev: Maybe<address_version_from_move_resources_stddev_fields>;
  stddev_pop: Maybe<address_version_from_move_resources_stddev_pop_fields>;
  stddev_samp: Maybe<address_version_from_move_resources_stddev_samp_fields>;
  sum: Maybe<address_version_from_move_resources_sum_fields>;
  var_pop: Maybe<address_version_from_move_resources_var_pop_fields>;
  var_samp: Maybe<address_version_from_move_resources_var_samp_fields>;
  variance: Maybe<address_version_from_move_resources_variance_fields>;
};

/** aggregate fields of "address_version_from_move_resources" */
export type address_version_from_move_resources_aggregate_fieldscountArgs = {
  columns: InputMaybe<Array<address_version_from_move_resources_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type address_version_from_move_resources_avg_fields = {
  __typename?: "address_version_from_move_resources_avg_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "address_version_from_move_resources". All fields are combined with a logical 'AND'. */
export type address_version_from_move_resources_bool_exp = {
  _and: InputMaybe<Array<address_version_from_move_resources_bool_exp>>;
  _not: InputMaybe<address_version_from_move_resources_bool_exp>;
  _or: InputMaybe<Array<address_version_from_move_resources_bool_exp>>;
  address: InputMaybe<String_comparison_exp>;
  coin_activities: InputMaybe<coin_activities_bool_exp>;
  coin_activities_aggregate: InputMaybe<coin_activities_aggregate_bool_exp>;
  delegated_staking_activities: InputMaybe<delegated_staking_activities_bool_exp>;
  token_activities: InputMaybe<token_activities_bool_exp>;
  token_activities_aggregate: InputMaybe<token_activities_aggregate_bool_exp>;
  token_activities_v2: InputMaybe<token_activities_v2_bool_exp>;
  token_activities_v2_aggregate: InputMaybe<token_activities_v2_aggregate_bool_exp>;
  transaction_version: InputMaybe<bigint_comparison_exp>;
};

/** aggregate max on columns */
export type address_version_from_move_resources_max_fields = {
  __typename?: "address_version_from_move_resources_max_fields";
  address: Maybe<Scalars["String"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** aggregate min on columns */
export type address_version_from_move_resources_min_fields = {
  __typename?: "address_version_from_move_resources_min_fields";
  address: Maybe<Scalars["String"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** Ordering options when selecting data from "address_version_from_move_resources". */
export type address_version_from_move_resources_order_by = {
  address: InputMaybe<order_by>;
  coin_activities_aggregate: InputMaybe<coin_activities_aggregate_order_by>;
  delegated_staking_activities_aggregate: InputMaybe<delegated_staking_activities_aggregate_order_by>;
  token_activities_aggregate: InputMaybe<token_activities_aggregate_order_by>;
  token_activities_v2_aggregate: InputMaybe<token_activities_v2_aggregate_order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** select columns of table "address_version_from_move_resources" */
export enum address_version_from_move_resources_select_column {
  /** column name */
  address = "address",
  /** column name */
  transaction_version = "transaction_version",
}

/** aggregate stddev on columns */
export type address_version_from_move_resources_stddev_fields = {
  __typename?: "address_version_from_move_resources_stddev_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type address_version_from_move_resources_stddev_pop_fields = {
  __typename?: "address_version_from_move_resources_stddev_pop_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type address_version_from_move_resources_stddev_samp_fields = {
  __typename?: "address_version_from_move_resources_stddev_samp_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "address_version_from_move_resources" */
export type address_version_from_move_resources_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: address_version_from_move_resources_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type address_version_from_move_resources_stream_cursor_value_input = {
  address: InputMaybe<Scalars["String"]>;
  transaction_version: InputMaybe<Scalars["bigint"]>;
};

/** aggregate sum on columns */
export type address_version_from_move_resources_sum_fields = {
  __typename?: "address_version_from_move_resources_sum_fields";
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** aggregate var_pop on columns */
export type address_version_from_move_resources_var_pop_fields = {
  __typename?: "address_version_from_move_resources_var_pop_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type address_version_from_move_resources_var_samp_fields = {
  __typename?: "address_version_from_move_resources_var_samp_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type address_version_from_move_resources_variance_fields = {
  __typename?: "address_version_from_move_resources_variance_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type bigint_comparison_exp = {
  _eq: InputMaybe<Scalars["bigint"]>;
  _gt: InputMaybe<Scalars["bigint"]>;
  _gte: InputMaybe<Scalars["bigint"]>;
  _in: InputMaybe<Array<Scalars["bigint"]>>;
  _is_null: InputMaybe<Scalars["Boolean"]>;
  _lt: InputMaybe<Scalars["bigint"]>;
  _lte: InputMaybe<Scalars["bigint"]>;
  _neq: InputMaybe<Scalars["bigint"]>;
  _nin: InputMaybe<Array<Scalars["bigint"]>>;
};

/** columns and relationships of "block_metadata_transactions" */
export type block_metadata_transactions = {
  __typename?: "block_metadata_transactions";
  block_height: Scalars["bigint"];
  epoch: Scalars["bigint"];
  failed_proposer_indices: Scalars["jsonb"];
  id: Scalars["String"];
  previous_block_votes_bitvec: Scalars["jsonb"];
  proposer: Scalars["String"];
  round: Scalars["bigint"];
  timestamp: Scalars["timestamp"];
  version: Scalars["bigint"];
};

/** columns and relationships of "block_metadata_transactions" */
export type block_metadata_transactionsfailed_proposer_indicesArgs = {
  path: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "block_metadata_transactions" */
export type block_metadata_transactionsprevious_block_votes_bitvecArgs = {
  path: InputMaybe<Scalars["String"]>;
};

/** Boolean expression to filter rows from the table "block_metadata_transactions". All fields are combined with a logical 'AND'. */
export type block_metadata_transactions_bool_exp = {
  _and: InputMaybe<Array<block_metadata_transactions_bool_exp>>;
  _not: InputMaybe<block_metadata_transactions_bool_exp>;
  _or: InputMaybe<Array<block_metadata_transactions_bool_exp>>;
  block_height: InputMaybe<bigint_comparison_exp>;
  epoch: InputMaybe<bigint_comparison_exp>;
  failed_proposer_indices: InputMaybe<jsonb_comparison_exp>;
  id: InputMaybe<String_comparison_exp>;
  previous_block_votes_bitvec: InputMaybe<jsonb_comparison_exp>;
  proposer: InputMaybe<String_comparison_exp>;
  round: InputMaybe<bigint_comparison_exp>;
  timestamp: InputMaybe<timestamp_comparison_exp>;
  version: InputMaybe<bigint_comparison_exp>;
};

/** Ordering options when selecting data from "block_metadata_transactions". */
export type block_metadata_transactions_order_by = {
  block_height: InputMaybe<order_by>;
  epoch: InputMaybe<order_by>;
  failed_proposer_indices: InputMaybe<order_by>;
  id: InputMaybe<order_by>;
  previous_block_votes_bitvec: InputMaybe<order_by>;
  proposer: InputMaybe<order_by>;
  round: InputMaybe<order_by>;
  timestamp: InputMaybe<order_by>;
  version: InputMaybe<order_by>;
};

/** select columns of table "block_metadata_transactions" */
export enum block_metadata_transactions_select_column {
  /** column name */
  block_height = "block_height",
  /** column name */
  epoch = "epoch",
  /** column name */
  failed_proposer_indices = "failed_proposer_indices",
  /** column name */
  id = "id",
  /** column name */
  previous_block_votes_bitvec = "previous_block_votes_bitvec",
  /** column name */
  proposer = "proposer",
  /** column name */
  round = "round",
  /** column name */
  timestamp = "timestamp",
  /** column name */
  version = "version",
}

/** Streaming cursor of the table "block_metadata_transactions" */
export type block_metadata_transactions_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: block_metadata_transactions_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type block_metadata_transactions_stream_cursor_value_input = {
  block_height: InputMaybe<Scalars["bigint"]>;
  epoch: InputMaybe<Scalars["bigint"]>;
  failed_proposer_indices: InputMaybe<Scalars["jsonb"]>;
  id: InputMaybe<Scalars["String"]>;
  previous_block_votes_bitvec: InputMaybe<Scalars["jsonb"]>;
  proposer: InputMaybe<Scalars["String"]>;
  round: InputMaybe<Scalars["bigint"]>;
  timestamp: InputMaybe<Scalars["timestamp"]>;
  version: InputMaybe<Scalars["bigint"]>;
};

/** columns and relationships of "coin_activities" */
export type coin_activities = {
  __typename?: "coin_activities";
  activity_type: Scalars["String"];
  amount: Scalars["numeric"];
  /** An array relationship */
  aptos_names: Array<current_aptos_names>;
  /** An aggregate relationship */
  aptos_names_aggregate: current_aptos_names_aggregate;
  block_height: Scalars["bigint"];
  /** An object relationship */
  coin_info: Maybe<coin_infos>;
  coin_type: Scalars["String"];
  entry_function_id_str: Maybe<Scalars["String"]>;
  event_account_address: Scalars["String"];
  event_creation_number: Scalars["bigint"];
  event_index: Maybe<Scalars["bigint"]>;
  event_sequence_number: Scalars["bigint"];
  is_gas_fee: Scalars["Boolean"];
  is_transaction_success: Scalars["Boolean"];
  owner_address: Scalars["String"];
  storage_refund_amount: Scalars["numeric"];
  transaction_timestamp: Scalars["timestamp"];
  transaction_version: Scalars["bigint"];
};

/** columns and relationships of "coin_activities" */
export type coin_activitiesaptos_namesArgs = {
  distinct_on: InputMaybe<Array<current_aptos_names_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_aptos_names_order_by>>;
  where: InputMaybe<current_aptos_names_bool_exp>;
};

/** columns and relationships of "coin_activities" */
export type coin_activitiesaptos_names_aggregateArgs = {
  distinct_on: InputMaybe<Array<current_aptos_names_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_aptos_names_order_by>>;
  where: InputMaybe<current_aptos_names_bool_exp>;
};

/** aggregated selection of "coin_activities" */
export type coin_activities_aggregate = {
  __typename?: "coin_activities_aggregate";
  aggregate: Maybe<coin_activities_aggregate_fields>;
  nodes: Array<coin_activities>;
};

export type coin_activities_aggregate_bool_exp = {
  bool_and: InputMaybe<coin_activities_aggregate_bool_exp_bool_and>;
  bool_or: InputMaybe<coin_activities_aggregate_bool_exp_bool_or>;
  count: InputMaybe<coin_activities_aggregate_bool_exp_count>;
};

export type coin_activities_aggregate_bool_exp_bool_and = {
  arguments: coin_activities_select_column_coin_activities_aggregate_bool_exp_bool_and_arguments_columns;
  distinct: InputMaybe<Scalars["Boolean"]>;
  filter: InputMaybe<coin_activities_bool_exp>;
  predicate: Boolean_comparison_exp;
};

export type coin_activities_aggregate_bool_exp_bool_or = {
  arguments: coin_activities_select_column_coin_activities_aggregate_bool_exp_bool_or_arguments_columns;
  distinct: InputMaybe<Scalars["Boolean"]>;
  filter: InputMaybe<coin_activities_bool_exp>;
  predicate: Boolean_comparison_exp;
};

export type coin_activities_aggregate_bool_exp_count = {
  arguments: InputMaybe<Array<coin_activities_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]>;
  filter: InputMaybe<coin_activities_bool_exp>;
  predicate: Int_comparison_exp;
};

/** aggregate fields of "coin_activities" */
export type coin_activities_aggregate_fields = {
  __typename?: "coin_activities_aggregate_fields";
  avg: Maybe<coin_activities_avg_fields>;
  count: Scalars["Int"];
  max: Maybe<coin_activities_max_fields>;
  min: Maybe<coin_activities_min_fields>;
  stddev: Maybe<coin_activities_stddev_fields>;
  stddev_pop: Maybe<coin_activities_stddev_pop_fields>;
  stddev_samp: Maybe<coin_activities_stddev_samp_fields>;
  sum: Maybe<coin_activities_sum_fields>;
  var_pop: Maybe<coin_activities_var_pop_fields>;
  var_samp: Maybe<coin_activities_var_samp_fields>;
  variance: Maybe<coin_activities_variance_fields>;
};

/** aggregate fields of "coin_activities" */
export type coin_activities_aggregate_fieldscountArgs = {
  columns: InputMaybe<Array<coin_activities_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "coin_activities" */
export type coin_activities_aggregate_order_by = {
  avg: InputMaybe<coin_activities_avg_order_by>;
  count: InputMaybe<order_by>;
  max: InputMaybe<coin_activities_max_order_by>;
  min: InputMaybe<coin_activities_min_order_by>;
  stddev: InputMaybe<coin_activities_stddev_order_by>;
  stddev_pop: InputMaybe<coin_activities_stddev_pop_order_by>;
  stddev_samp: InputMaybe<coin_activities_stddev_samp_order_by>;
  sum: InputMaybe<coin_activities_sum_order_by>;
  var_pop: InputMaybe<coin_activities_var_pop_order_by>;
  var_samp: InputMaybe<coin_activities_var_samp_order_by>;
  variance: InputMaybe<coin_activities_variance_order_by>;
};

/** aggregate avg on columns */
export type coin_activities_avg_fields = {
  __typename?: "coin_activities_avg_fields";
  amount: Maybe<Scalars["Float"]>;
  block_height: Maybe<Scalars["Float"]>;
  event_creation_number: Maybe<Scalars["Float"]>;
  event_index: Maybe<Scalars["Float"]>;
  event_sequence_number: Maybe<Scalars["Float"]>;
  storage_refund_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "coin_activities" */
export type coin_activities_avg_order_by = {
  amount: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "coin_activities". All fields are combined with a logical 'AND'. */
export type coin_activities_bool_exp = {
  _and: InputMaybe<Array<coin_activities_bool_exp>>;
  _not: InputMaybe<coin_activities_bool_exp>;
  _or: InputMaybe<Array<coin_activities_bool_exp>>;
  activity_type: InputMaybe<String_comparison_exp>;
  amount: InputMaybe<numeric_comparison_exp>;
  aptos_names: InputMaybe<current_aptos_names_bool_exp>;
  aptos_names_aggregate: InputMaybe<current_aptos_names_aggregate_bool_exp>;
  block_height: InputMaybe<bigint_comparison_exp>;
  coin_info: InputMaybe<coin_infos_bool_exp>;
  coin_type: InputMaybe<String_comparison_exp>;
  entry_function_id_str: InputMaybe<String_comparison_exp>;
  event_account_address: InputMaybe<String_comparison_exp>;
  event_creation_number: InputMaybe<bigint_comparison_exp>;
  event_index: InputMaybe<bigint_comparison_exp>;
  event_sequence_number: InputMaybe<bigint_comparison_exp>;
  is_gas_fee: InputMaybe<Boolean_comparison_exp>;
  is_transaction_success: InputMaybe<Boolean_comparison_exp>;
  owner_address: InputMaybe<String_comparison_exp>;
  storage_refund_amount: InputMaybe<numeric_comparison_exp>;
  transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  transaction_version: InputMaybe<bigint_comparison_exp>;
};

/** aggregate max on columns */
export type coin_activities_max_fields = {
  __typename?: "coin_activities_max_fields";
  activity_type: Maybe<Scalars["String"]>;
  amount: Maybe<Scalars["numeric"]>;
  block_height: Maybe<Scalars["bigint"]>;
  coin_type: Maybe<Scalars["String"]>;
  entry_function_id_str: Maybe<Scalars["String"]>;
  event_account_address: Maybe<Scalars["String"]>;
  event_creation_number: Maybe<Scalars["bigint"]>;
  event_index: Maybe<Scalars["bigint"]>;
  event_sequence_number: Maybe<Scalars["bigint"]>;
  owner_address: Maybe<Scalars["String"]>;
  storage_refund_amount: Maybe<Scalars["numeric"]>;
  transaction_timestamp: Maybe<Scalars["timestamp"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** order by max() on columns of table "coin_activities" */
export type coin_activities_max_order_by = {
  activity_type: InputMaybe<order_by>;
  amount: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  coin_type: InputMaybe<order_by>;
  entry_function_id_str: InputMaybe<order_by>;
  event_account_address: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  owner_address: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** aggregate min on columns */
export type coin_activities_min_fields = {
  __typename?: "coin_activities_min_fields";
  activity_type: Maybe<Scalars["String"]>;
  amount: Maybe<Scalars["numeric"]>;
  block_height: Maybe<Scalars["bigint"]>;
  coin_type: Maybe<Scalars["String"]>;
  entry_function_id_str: Maybe<Scalars["String"]>;
  event_account_address: Maybe<Scalars["String"]>;
  event_creation_number: Maybe<Scalars["bigint"]>;
  event_index: Maybe<Scalars["bigint"]>;
  event_sequence_number: Maybe<Scalars["bigint"]>;
  owner_address: Maybe<Scalars["String"]>;
  storage_refund_amount: Maybe<Scalars["numeric"]>;
  transaction_timestamp: Maybe<Scalars["timestamp"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** order by min() on columns of table "coin_activities" */
export type coin_activities_min_order_by = {
  activity_type: InputMaybe<order_by>;
  amount: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  coin_type: InputMaybe<order_by>;
  entry_function_id_str: InputMaybe<order_by>;
  event_account_address: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  owner_address: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "coin_activities". */
export type coin_activities_order_by = {
  activity_type: InputMaybe<order_by>;
  amount: InputMaybe<order_by>;
  aptos_names_aggregate: InputMaybe<current_aptos_names_aggregate_order_by>;
  block_height: InputMaybe<order_by>;
  coin_info: InputMaybe<coin_infos_order_by>;
  coin_type: InputMaybe<order_by>;
  entry_function_id_str: InputMaybe<order_by>;
  event_account_address: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  is_gas_fee: InputMaybe<order_by>;
  is_transaction_success: InputMaybe<order_by>;
  owner_address: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** select columns of table "coin_activities" */
export enum coin_activities_select_column {
  /** column name */
  activity_type = "activity_type",
  /** column name */
  amount = "amount",
  /** column name */
  block_height = "block_height",
  /** column name */
  coin_type = "coin_type",
  /** column name */
  entry_function_id_str = "entry_function_id_str",
  /** column name */
  event_account_address = "event_account_address",
  /** column name */
  event_creation_number = "event_creation_number",
  /** column name */
  event_index = "event_index",
  /** column name */
  event_sequence_number = "event_sequence_number",
  /** column name */
  is_gas_fee = "is_gas_fee",
  /** column name */
  is_transaction_success = "is_transaction_success",
  /** column name */
  owner_address = "owner_address",
  /** column name */
  storage_refund_amount = "storage_refund_amount",
  /** column name */
  transaction_timestamp = "transaction_timestamp",
  /** column name */
  transaction_version = "transaction_version",
}

/** select "coin_activities_aggregate_bool_exp_bool_and_arguments_columns" columns of table "coin_activities" */
export enum coin_activities_select_column_coin_activities_aggregate_bool_exp_bool_and_arguments_columns {
  /** column name */
  is_gas_fee = "is_gas_fee",
  /** column name */
  is_transaction_success = "is_transaction_success",
}

/** select "coin_activities_aggregate_bool_exp_bool_or_arguments_columns" columns of table "coin_activities" */
export enum coin_activities_select_column_coin_activities_aggregate_bool_exp_bool_or_arguments_columns {
  /** column name */
  is_gas_fee = "is_gas_fee",
  /** column name */
  is_transaction_success = "is_transaction_success",
}

/** aggregate stddev on columns */
export type coin_activities_stddev_fields = {
  __typename?: "coin_activities_stddev_fields";
  amount: Maybe<Scalars["Float"]>;
  block_height: Maybe<Scalars["Float"]>;
  event_creation_number: Maybe<Scalars["Float"]>;
  event_index: Maybe<Scalars["Float"]>;
  event_sequence_number: Maybe<Scalars["Float"]>;
  storage_refund_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "coin_activities" */
export type coin_activities_stddev_order_by = {
  amount: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** aggregate stddev_pop on columns */
export type coin_activities_stddev_pop_fields = {
  __typename?: "coin_activities_stddev_pop_fields";
  amount: Maybe<Scalars["Float"]>;
  block_height: Maybe<Scalars["Float"]>;
  event_creation_number: Maybe<Scalars["Float"]>;
  event_index: Maybe<Scalars["Float"]>;
  event_sequence_number: Maybe<Scalars["Float"]>;
  storage_refund_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "coin_activities" */
export type coin_activities_stddev_pop_order_by = {
  amount: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** aggregate stddev_samp on columns */
export type coin_activities_stddev_samp_fields = {
  __typename?: "coin_activities_stddev_samp_fields";
  amount: Maybe<Scalars["Float"]>;
  block_height: Maybe<Scalars["Float"]>;
  event_creation_number: Maybe<Scalars["Float"]>;
  event_index: Maybe<Scalars["Float"]>;
  event_sequence_number: Maybe<Scalars["Float"]>;
  storage_refund_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "coin_activities" */
export type coin_activities_stddev_samp_order_by = {
  amount: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** Streaming cursor of the table "coin_activities" */
export type coin_activities_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: coin_activities_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type coin_activities_stream_cursor_value_input = {
  activity_type: InputMaybe<Scalars["String"]>;
  amount: InputMaybe<Scalars["numeric"]>;
  block_height: InputMaybe<Scalars["bigint"]>;
  coin_type: InputMaybe<Scalars["String"]>;
  entry_function_id_str: InputMaybe<Scalars["String"]>;
  event_account_address: InputMaybe<Scalars["String"]>;
  event_creation_number: InputMaybe<Scalars["bigint"]>;
  event_index: InputMaybe<Scalars["bigint"]>;
  event_sequence_number: InputMaybe<Scalars["bigint"]>;
  is_gas_fee: InputMaybe<Scalars["Boolean"]>;
  is_transaction_success: InputMaybe<Scalars["Boolean"]>;
  owner_address: InputMaybe<Scalars["String"]>;
  storage_refund_amount: InputMaybe<Scalars["numeric"]>;
  transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  transaction_version: InputMaybe<Scalars["bigint"]>;
};

/** aggregate sum on columns */
export type coin_activities_sum_fields = {
  __typename?: "coin_activities_sum_fields";
  amount: Maybe<Scalars["numeric"]>;
  block_height: Maybe<Scalars["bigint"]>;
  event_creation_number: Maybe<Scalars["bigint"]>;
  event_index: Maybe<Scalars["bigint"]>;
  event_sequence_number: Maybe<Scalars["bigint"]>;
  storage_refund_amount: Maybe<Scalars["numeric"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "coin_activities" */
export type coin_activities_sum_order_by = {
  amount: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** aggregate var_pop on columns */
export type coin_activities_var_pop_fields = {
  __typename?: "coin_activities_var_pop_fields";
  amount: Maybe<Scalars["Float"]>;
  block_height: Maybe<Scalars["Float"]>;
  event_creation_number: Maybe<Scalars["Float"]>;
  event_index: Maybe<Scalars["Float"]>;
  event_sequence_number: Maybe<Scalars["Float"]>;
  storage_refund_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "coin_activities" */
export type coin_activities_var_pop_order_by = {
  amount: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** aggregate var_samp on columns */
export type coin_activities_var_samp_fields = {
  __typename?: "coin_activities_var_samp_fields";
  amount: Maybe<Scalars["Float"]>;
  block_height: Maybe<Scalars["Float"]>;
  event_creation_number: Maybe<Scalars["Float"]>;
  event_index: Maybe<Scalars["Float"]>;
  event_sequence_number: Maybe<Scalars["Float"]>;
  storage_refund_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "coin_activities" */
export type coin_activities_var_samp_order_by = {
  amount: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** aggregate variance on columns */
export type coin_activities_variance_fields = {
  __typename?: "coin_activities_variance_fields";
  amount: Maybe<Scalars["Float"]>;
  block_height: Maybe<Scalars["Float"]>;
  event_creation_number: Maybe<Scalars["Float"]>;
  event_index: Maybe<Scalars["Float"]>;
  event_sequence_number: Maybe<Scalars["Float"]>;
  storage_refund_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "coin_activities" */
export type coin_activities_variance_order_by = {
  amount: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** columns and relationships of "coin_balances" */
export type coin_balances = {
  __typename?: "coin_balances";
  amount: Scalars["numeric"];
  coin_type: Scalars["String"];
  coin_type_hash: Scalars["String"];
  owner_address: Scalars["String"];
  transaction_timestamp: Scalars["timestamp"];
  transaction_version: Scalars["bigint"];
};

/** Boolean expression to filter rows from the table "coin_balances". All fields are combined with a logical 'AND'. */
export type coin_balances_bool_exp = {
  _and: InputMaybe<Array<coin_balances_bool_exp>>;
  _not: InputMaybe<coin_balances_bool_exp>;
  _or: InputMaybe<Array<coin_balances_bool_exp>>;
  amount: InputMaybe<numeric_comparison_exp>;
  coin_type: InputMaybe<String_comparison_exp>;
  coin_type_hash: InputMaybe<String_comparison_exp>;
  owner_address: InputMaybe<String_comparison_exp>;
  transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  transaction_version: InputMaybe<bigint_comparison_exp>;
};

/** Ordering options when selecting data from "coin_balances". */
export type coin_balances_order_by = {
  amount: InputMaybe<order_by>;
  coin_type: InputMaybe<order_by>;
  coin_type_hash: InputMaybe<order_by>;
  owner_address: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** select columns of table "coin_balances" */
export enum coin_balances_select_column {
  /** column name */
  amount = "amount",
  /** column name */
  coin_type = "coin_type",
  /** column name */
  coin_type_hash = "coin_type_hash",
  /** column name */
  owner_address = "owner_address",
  /** column name */
  transaction_timestamp = "transaction_timestamp",
  /** column name */
  transaction_version = "transaction_version",
}

/** Streaming cursor of the table "coin_balances" */
export type coin_balances_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: coin_balances_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type coin_balances_stream_cursor_value_input = {
  amount: InputMaybe<Scalars["numeric"]>;
  coin_type: InputMaybe<Scalars["String"]>;
  coin_type_hash: InputMaybe<Scalars["String"]>;
  owner_address: InputMaybe<Scalars["String"]>;
  transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  transaction_version: InputMaybe<Scalars["bigint"]>;
};

/** columns and relationships of "coin_infos" */
export type coin_infos = {
  __typename?: "coin_infos";
  coin_type: Scalars["String"];
  coin_type_hash: Scalars["String"];
  creator_address: Scalars["String"];
  decimals: Scalars["Int"];
  name: Scalars["String"];
  supply_aggregator_table_handle: Maybe<Scalars["String"]>;
  supply_aggregator_table_key: Maybe<Scalars["String"]>;
  symbol: Scalars["String"];
  transaction_created_timestamp: Scalars["timestamp"];
  transaction_version_created: Scalars["bigint"];
};

/** Boolean expression to filter rows from the table "coin_infos". All fields are combined with a logical 'AND'. */
export type coin_infos_bool_exp = {
  _and: InputMaybe<Array<coin_infos_bool_exp>>;
  _not: InputMaybe<coin_infos_bool_exp>;
  _or: InputMaybe<Array<coin_infos_bool_exp>>;
  coin_type: InputMaybe<String_comparison_exp>;
  coin_type_hash: InputMaybe<String_comparison_exp>;
  creator_address: InputMaybe<String_comparison_exp>;
  decimals: InputMaybe<Int_comparison_exp>;
  name: InputMaybe<String_comparison_exp>;
  supply_aggregator_table_handle: InputMaybe<String_comparison_exp>;
  supply_aggregator_table_key: InputMaybe<String_comparison_exp>;
  symbol: InputMaybe<String_comparison_exp>;
  transaction_created_timestamp: InputMaybe<timestamp_comparison_exp>;
  transaction_version_created: InputMaybe<bigint_comparison_exp>;
};

/** Ordering options when selecting data from "coin_infos". */
export type coin_infos_order_by = {
  coin_type: InputMaybe<order_by>;
  coin_type_hash: InputMaybe<order_by>;
  creator_address: InputMaybe<order_by>;
  decimals: InputMaybe<order_by>;
  name: InputMaybe<order_by>;
  supply_aggregator_table_handle: InputMaybe<order_by>;
  supply_aggregator_table_key: InputMaybe<order_by>;
  symbol: InputMaybe<order_by>;
  transaction_created_timestamp: InputMaybe<order_by>;
  transaction_version_created: InputMaybe<order_by>;
};

/** select columns of table "coin_infos" */
export enum coin_infos_select_column {
  /** column name */
  coin_type = "coin_type",
  /** column name */
  coin_type_hash = "coin_type_hash",
  /** column name */
  creator_address = "creator_address",
  /** column name */
  decimals = "decimals",
  /** column name */
  name = "name",
  /** column name */
  supply_aggregator_table_handle = "supply_aggregator_table_handle",
  /** column name */
  supply_aggregator_table_key = "supply_aggregator_table_key",
  /** column name */
  symbol = "symbol",
  /** column name */
  transaction_created_timestamp = "transaction_created_timestamp",
  /** column name */
  transaction_version_created = "transaction_version_created",
}

/** Streaming cursor of the table "coin_infos" */
export type coin_infos_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: coin_infos_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type coin_infos_stream_cursor_value_input = {
  coin_type: InputMaybe<Scalars["String"]>;
  coin_type_hash: InputMaybe<Scalars["String"]>;
  creator_address: InputMaybe<Scalars["String"]>;
  decimals: InputMaybe<Scalars["Int"]>;
  name: InputMaybe<Scalars["String"]>;
  supply_aggregator_table_handle: InputMaybe<Scalars["String"]>;
  supply_aggregator_table_key: InputMaybe<Scalars["String"]>;
  symbol: InputMaybe<Scalars["String"]>;
  transaction_created_timestamp: InputMaybe<Scalars["timestamp"]>;
  transaction_version_created: InputMaybe<Scalars["bigint"]>;
};

/** columns and relationships of "coin_supply" */
export type coin_supply = {
  __typename?: "coin_supply";
  coin_type: Scalars["String"];
  coin_type_hash: Scalars["String"];
  supply: Scalars["numeric"];
  transaction_epoch: Scalars["bigint"];
  transaction_timestamp: Scalars["timestamp"];
  transaction_version: Scalars["bigint"];
};

/** Boolean expression to filter rows from the table "coin_supply". All fields are combined with a logical 'AND'. */
export type coin_supply_bool_exp = {
  _and: InputMaybe<Array<coin_supply_bool_exp>>;
  _not: InputMaybe<coin_supply_bool_exp>;
  _or: InputMaybe<Array<coin_supply_bool_exp>>;
  coin_type: InputMaybe<String_comparison_exp>;
  coin_type_hash: InputMaybe<String_comparison_exp>;
  supply: InputMaybe<numeric_comparison_exp>;
  transaction_epoch: InputMaybe<bigint_comparison_exp>;
  transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  transaction_version: InputMaybe<bigint_comparison_exp>;
};

/** Ordering options when selecting data from "coin_supply". */
export type coin_supply_order_by = {
  coin_type: InputMaybe<order_by>;
  coin_type_hash: InputMaybe<order_by>;
  supply: InputMaybe<order_by>;
  transaction_epoch: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** select columns of table "coin_supply" */
export enum coin_supply_select_column {
  /** column name */
  coin_type = "coin_type",
  /** column name */
  coin_type_hash = "coin_type_hash",
  /** column name */
  supply = "supply",
  /** column name */
  transaction_epoch = "transaction_epoch",
  /** column name */
  transaction_timestamp = "transaction_timestamp",
  /** column name */
  transaction_version = "transaction_version",
}

/** Streaming cursor of the table "coin_supply" */
export type coin_supply_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: coin_supply_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type coin_supply_stream_cursor_value_input = {
  coin_type: InputMaybe<Scalars["String"]>;
  coin_type_hash: InputMaybe<Scalars["String"]>;
  supply: InputMaybe<Scalars["numeric"]>;
  transaction_epoch: InputMaybe<Scalars["bigint"]>;
  transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  transaction_version: InputMaybe<Scalars["bigint"]>;
};

/** columns and relationships of "collection_datas" */
export type collection_datas = {
  __typename?: "collection_datas";
  collection_data_id_hash: Scalars["String"];
  collection_name: Scalars["String"];
  creator_address: Scalars["String"];
  description: Scalars["String"];
  description_mutable: Scalars["Boolean"];
  maximum: Scalars["numeric"];
  maximum_mutable: Scalars["Boolean"];
  metadata_uri: Scalars["String"];
  supply: Scalars["numeric"];
  table_handle: Scalars["String"];
  transaction_timestamp: Scalars["timestamp"];
  transaction_version: Scalars["bigint"];
  uri_mutable: Scalars["Boolean"];
};

/** Boolean expression to filter rows from the table "collection_datas". All fields are combined with a logical 'AND'. */
export type collection_datas_bool_exp = {
  _and: InputMaybe<Array<collection_datas_bool_exp>>;
  _not: InputMaybe<collection_datas_bool_exp>;
  _or: InputMaybe<Array<collection_datas_bool_exp>>;
  collection_data_id_hash: InputMaybe<String_comparison_exp>;
  collection_name: InputMaybe<String_comparison_exp>;
  creator_address: InputMaybe<String_comparison_exp>;
  description: InputMaybe<String_comparison_exp>;
  description_mutable: InputMaybe<Boolean_comparison_exp>;
  maximum: InputMaybe<numeric_comparison_exp>;
  maximum_mutable: InputMaybe<Boolean_comparison_exp>;
  metadata_uri: InputMaybe<String_comparison_exp>;
  supply: InputMaybe<numeric_comparison_exp>;
  table_handle: InputMaybe<String_comparison_exp>;
  transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  transaction_version: InputMaybe<bigint_comparison_exp>;
  uri_mutable: InputMaybe<Boolean_comparison_exp>;
};

/** Ordering options when selecting data from "collection_datas". */
export type collection_datas_order_by = {
  collection_data_id_hash: InputMaybe<order_by>;
  collection_name: InputMaybe<order_by>;
  creator_address: InputMaybe<order_by>;
  description: InputMaybe<order_by>;
  description_mutable: InputMaybe<order_by>;
  maximum: InputMaybe<order_by>;
  maximum_mutable: InputMaybe<order_by>;
  metadata_uri: InputMaybe<order_by>;
  supply: InputMaybe<order_by>;
  table_handle: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
  uri_mutable: InputMaybe<order_by>;
};

/** select columns of table "collection_datas" */
export enum collection_datas_select_column {
  /** column name */
  collection_data_id_hash = "collection_data_id_hash",
  /** column name */
  collection_name = "collection_name",
  /** column name */
  creator_address = "creator_address",
  /** column name */
  description = "description",
  /** column name */
  description_mutable = "description_mutable",
  /** column name */
  maximum = "maximum",
  /** column name */
  maximum_mutable = "maximum_mutable",
  /** column name */
  metadata_uri = "metadata_uri",
  /** column name */
  supply = "supply",
  /** column name */
  table_handle = "table_handle",
  /** column name */
  transaction_timestamp = "transaction_timestamp",
  /** column name */
  transaction_version = "transaction_version",
  /** column name */
  uri_mutable = "uri_mutable",
}

/** Streaming cursor of the table "collection_datas" */
export type collection_datas_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: collection_datas_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type collection_datas_stream_cursor_value_input = {
  collection_data_id_hash: InputMaybe<Scalars["String"]>;
  collection_name: InputMaybe<Scalars["String"]>;
  creator_address: InputMaybe<Scalars["String"]>;
  description: InputMaybe<Scalars["String"]>;
  description_mutable: InputMaybe<Scalars["Boolean"]>;
  maximum: InputMaybe<Scalars["numeric"]>;
  maximum_mutable: InputMaybe<Scalars["Boolean"]>;
  metadata_uri: InputMaybe<Scalars["String"]>;
  supply: InputMaybe<Scalars["numeric"]>;
  table_handle: InputMaybe<Scalars["String"]>;
  transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  transaction_version: InputMaybe<Scalars["bigint"]>;
  uri_mutable: InputMaybe<Scalars["Boolean"]>;
};

/** columns and relationships of "current_ans_lookup" */
export type current_ans_lookup = {
  __typename?: "current_ans_lookup";
  /** An array relationship */
  all_token_ownerships: Array<current_token_ownerships>;
  /** An aggregate relationship */
  all_token_ownerships_aggregate: current_token_ownerships_aggregate;
  domain: Scalars["String"];
  expiration_timestamp: Scalars["timestamp"];
  is_deleted: Scalars["Boolean"];
  last_transaction_version: Scalars["bigint"];
  registered_address: Maybe<Scalars["String"]>;
  subdomain: Scalars["String"];
  token_name: Scalars["String"];
};

/** columns and relationships of "current_ans_lookup" */
export type current_ans_lookupall_token_ownershipsArgs = {
  distinct_on: InputMaybe<Array<current_token_ownerships_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_token_ownerships_order_by>>;
  where: InputMaybe<current_token_ownerships_bool_exp>;
};

/** columns and relationships of "current_ans_lookup" */
export type current_ans_lookupall_token_ownerships_aggregateArgs = {
  distinct_on: InputMaybe<Array<current_token_ownerships_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_token_ownerships_order_by>>;
  where: InputMaybe<current_token_ownerships_bool_exp>;
};

/** Boolean expression to filter rows from the table "current_ans_lookup". All fields are combined with a logical 'AND'. */
export type current_ans_lookup_bool_exp = {
  _and: InputMaybe<Array<current_ans_lookup_bool_exp>>;
  _not: InputMaybe<current_ans_lookup_bool_exp>;
  _or: InputMaybe<Array<current_ans_lookup_bool_exp>>;
  all_token_ownerships: InputMaybe<current_token_ownerships_bool_exp>;
  all_token_ownerships_aggregate: InputMaybe<current_token_ownerships_aggregate_bool_exp>;
  domain: InputMaybe<String_comparison_exp>;
  expiration_timestamp: InputMaybe<timestamp_comparison_exp>;
  is_deleted: InputMaybe<Boolean_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  registered_address: InputMaybe<String_comparison_exp>;
  subdomain: InputMaybe<String_comparison_exp>;
  token_name: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "current_ans_lookup". */
export type current_ans_lookup_order_by = {
  all_token_ownerships_aggregate: InputMaybe<current_token_ownerships_aggregate_order_by>;
  domain: InputMaybe<order_by>;
  expiration_timestamp: InputMaybe<order_by>;
  is_deleted: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  registered_address: InputMaybe<order_by>;
  subdomain: InputMaybe<order_by>;
  token_name: InputMaybe<order_by>;
};

/** select columns of table "current_ans_lookup" */
export enum current_ans_lookup_select_column {
  /** column name */
  domain = "domain",
  /** column name */
  expiration_timestamp = "expiration_timestamp",
  /** column name */
  is_deleted = "is_deleted",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  registered_address = "registered_address",
  /** column name */
  subdomain = "subdomain",
  /** column name */
  token_name = "token_name",
}

/** Streaming cursor of the table "current_ans_lookup" */
export type current_ans_lookup_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: current_ans_lookup_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type current_ans_lookup_stream_cursor_value_input = {
  domain: InputMaybe<Scalars["String"]>;
  expiration_timestamp: InputMaybe<Scalars["timestamp"]>;
  is_deleted: InputMaybe<Scalars["Boolean"]>;
  last_transaction_version: InputMaybe<Scalars["bigint"]>;
  registered_address: InputMaybe<Scalars["String"]>;
  subdomain: InputMaybe<Scalars["String"]>;
  token_name: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "current_ans_lookup_v2" */
export type current_ans_lookup_v2 = {
  __typename?: "current_ans_lookup_v2";
  domain: Scalars["String"];
  expiration_timestamp: Scalars["timestamp"];
  is_deleted: Scalars["Boolean"];
  last_transaction_version: Scalars["bigint"];
  registered_address: Maybe<Scalars["String"]>;
  subdomain: Scalars["String"];
  token_name: Maybe<Scalars["String"]>;
  token_standard: Scalars["String"];
};

/** Boolean expression to filter rows from the table "current_ans_lookup_v2". All fields are combined with a logical 'AND'. */
export type current_ans_lookup_v2_bool_exp = {
  _and: InputMaybe<Array<current_ans_lookup_v2_bool_exp>>;
  _not: InputMaybe<current_ans_lookup_v2_bool_exp>;
  _or: InputMaybe<Array<current_ans_lookup_v2_bool_exp>>;
  domain: InputMaybe<String_comparison_exp>;
  expiration_timestamp: InputMaybe<timestamp_comparison_exp>;
  is_deleted: InputMaybe<Boolean_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  registered_address: InputMaybe<String_comparison_exp>;
  subdomain: InputMaybe<String_comparison_exp>;
  token_name: InputMaybe<String_comparison_exp>;
  token_standard: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "current_ans_lookup_v2". */
export type current_ans_lookup_v2_order_by = {
  domain: InputMaybe<order_by>;
  expiration_timestamp: InputMaybe<order_by>;
  is_deleted: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  registered_address: InputMaybe<order_by>;
  subdomain: InputMaybe<order_by>;
  token_name: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
};

/** select columns of table "current_ans_lookup_v2" */
export enum current_ans_lookup_v2_select_column {
  /** column name */
  domain = "domain",
  /** column name */
  expiration_timestamp = "expiration_timestamp",
  /** column name */
  is_deleted = "is_deleted",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  registered_address = "registered_address",
  /** column name */
  subdomain = "subdomain",
  /** column name */
  token_name = "token_name",
  /** column name */
  token_standard = "token_standard",
}

/** Streaming cursor of the table "current_ans_lookup_v2" */
export type current_ans_lookup_v2_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: current_ans_lookup_v2_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type current_ans_lookup_v2_stream_cursor_value_input = {
  domain: InputMaybe<Scalars["String"]>;
  expiration_timestamp: InputMaybe<Scalars["timestamp"]>;
  is_deleted: InputMaybe<Scalars["Boolean"]>;
  last_transaction_version: InputMaybe<Scalars["bigint"]>;
  registered_address: InputMaybe<Scalars["String"]>;
  subdomain: InputMaybe<Scalars["String"]>;
  token_name: InputMaybe<Scalars["String"]>;
  token_standard: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "current_aptos_names" */
export type current_aptos_names = {
  __typename?: "current_aptos_names";
  domain: Maybe<Scalars["String"]>;
  domain_with_suffix: Maybe<Scalars["String"]>;
  expiration_timestamp: Maybe<Scalars["timestamp"]>;
  is_active: Maybe<Scalars["Boolean"]>;
  /** An object relationship */
  is_domain_owner: Maybe<current_aptos_names>;
  is_primary: Maybe<Scalars["Boolean"]>;
  last_transaction_version: Maybe<Scalars["bigint"]>;
  owner_address: Maybe<Scalars["String"]>;
  registered_address: Maybe<Scalars["String"]>;
  subdomain: Maybe<Scalars["String"]>;
  token_name: Maybe<Scalars["String"]>;
  token_standard: Maybe<Scalars["String"]>;
};

/** aggregated selection of "current_aptos_names" */
export type current_aptos_names_aggregate = {
  __typename?: "current_aptos_names_aggregate";
  aggregate: Maybe<current_aptos_names_aggregate_fields>;
  nodes: Array<current_aptos_names>;
};

export type current_aptos_names_aggregate_bool_exp = {
  bool_and: InputMaybe<current_aptos_names_aggregate_bool_exp_bool_and>;
  bool_or: InputMaybe<current_aptos_names_aggregate_bool_exp_bool_or>;
  count: InputMaybe<current_aptos_names_aggregate_bool_exp_count>;
};

export type current_aptos_names_aggregate_bool_exp_bool_and = {
  arguments: current_aptos_names_select_column_current_aptos_names_aggregate_bool_exp_bool_and_arguments_columns;
  distinct: InputMaybe<Scalars["Boolean"]>;
  filter: InputMaybe<current_aptos_names_bool_exp>;
  predicate: Boolean_comparison_exp;
};

export type current_aptos_names_aggregate_bool_exp_bool_or = {
  arguments: current_aptos_names_select_column_current_aptos_names_aggregate_bool_exp_bool_or_arguments_columns;
  distinct: InputMaybe<Scalars["Boolean"]>;
  filter: InputMaybe<current_aptos_names_bool_exp>;
  predicate: Boolean_comparison_exp;
};

export type current_aptos_names_aggregate_bool_exp_count = {
  arguments: InputMaybe<Array<current_aptos_names_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]>;
  filter: InputMaybe<current_aptos_names_bool_exp>;
  predicate: Int_comparison_exp;
};

/** aggregate fields of "current_aptos_names" */
export type current_aptos_names_aggregate_fields = {
  __typename?: "current_aptos_names_aggregate_fields";
  avg: Maybe<current_aptos_names_avg_fields>;
  count: Scalars["Int"];
  max: Maybe<current_aptos_names_max_fields>;
  min: Maybe<current_aptos_names_min_fields>;
  stddev: Maybe<current_aptos_names_stddev_fields>;
  stddev_pop: Maybe<current_aptos_names_stddev_pop_fields>;
  stddev_samp: Maybe<current_aptos_names_stddev_samp_fields>;
  sum: Maybe<current_aptos_names_sum_fields>;
  var_pop: Maybe<current_aptos_names_var_pop_fields>;
  var_samp: Maybe<current_aptos_names_var_samp_fields>;
  variance: Maybe<current_aptos_names_variance_fields>;
};

/** aggregate fields of "current_aptos_names" */
export type current_aptos_names_aggregate_fieldscountArgs = {
  columns: InputMaybe<Array<current_aptos_names_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "current_aptos_names" */
export type current_aptos_names_aggregate_order_by = {
  avg: InputMaybe<current_aptos_names_avg_order_by>;
  count: InputMaybe<order_by>;
  max: InputMaybe<current_aptos_names_max_order_by>;
  min: InputMaybe<current_aptos_names_min_order_by>;
  stddev: InputMaybe<current_aptos_names_stddev_order_by>;
  stddev_pop: InputMaybe<current_aptos_names_stddev_pop_order_by>;
  stddev_samp: InputMaybe<current_aptos_names_stddev_samp_order_by>;
  sum: InputMaybe<current_aptos_names_sum_order_by>;
  var_pop: InputMaybe<current_aptos_names_var_pop_order_by>;
  var_samp: InputMaybe<current_aptos_names_var_samp_order_by>;
  variance: InputMaybe<current_aptos_names_variance_order_by>;
};

/** aggregate avg on columns */
export type current_aptos_names_avg_fields = {
  __typename?: "current_aptos_names_avg_fields";
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "current_aptos_names" */
export type current_aptos_names_avg_order_by = {
  last_transaction_version: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "current_aptos_names". All fields are combined with a logical 'AND'. */
export type current_aptos_names_bool_exp = {
  _and: InputMaybe<Array<current_aptos_names_bool_exp>>;
  _not: InputMaybe<current_aptos_names_bool_exp>;
  _or: InputMaybe<Array<current_aptos_names_bool_exp>>;
  domain: InputMaybe<String_comparison_exp>;
  domain_with_suffix: InputMaybe<String_comparison_exp>;
  expiration_timestamp: InputMaybe<timestamp_comparison_exp>;
  is_active: InputMaybe<Boolean_comparison_exp>;
  is_domain_owner: InputMaybe<current_aptos_names_bool_exp>;
  is_primary: InputMaybe<Boolean_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  owner_address: InputMaybe<String_comparison_exp>;
  registered_address: InputMaybe<String_comparison_exp>;
  subdomain: InputMaybe<String_comparison_exp>;
  token_name: InputMaybe<String_comparison_exp>;
  token_standard: InputMaybe<String_comparison_exp>;
};

/** aggregate max on columns */
export type current_aptos_names_max_fields = {
  __typename?: "current_aptos_names_max_fields";
  domain: Maybe<Scalars["String"]>;
  domain_with_suffix: Maybe<Scalars["String"]>;
  expiration_timestamp: Maybe<Scalars["timestamp"]>;
  last_transaction_version: Maybe<Scalars["bigint"]>;
  owner_address: Maybe<Scalars["String"]>;
  registered_address: Maybe<Scalars["String"]>;
  subdomain: Maybe<Scalars["String"]>;
  token_name: Maybe<Scalars["String"]>;
  token_standard: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "current_aptos_names" */
export type current_aptos_names_max_order_by = {
  domain: InputMaybe<order_by>;
  domain_with_suffix: InputMaybe<order_by>;
  expiration_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  owner_address: InputMaybe<order_by>;
  registered_address: InputMaybe<order_by>;
  subdomain: InputMaybe<order_by>;
  token_name: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
};

/** aggregate min on columns */
export type current_aptos_names_min_fields = {
  __typename?: "current_aptos_names_min_fields";
  domain: Maybe<Scalars["String"]>;
  domain_with_suffix: Maybe<Scalars["String"]>;
  expiration_timestamp: Maybe<Scalars["timestamp"]>;
  last_transaction_version: Maybe<Scalars["bigint"]>;
  owner_address: Maybe<Scalars["String"]>;
  registered_address: Maybe<Scalars["String"]>;
  subdomain: Maybe<Scalars["String"]>;
  token_name: Maybe<Scalars["String"]>;
  token_standard: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "current_aptos_names" */
export type current_aptos_names_min_order_by = {
  domain: InputMaybe<order_by>;
  domain_with_suffix: InputMaybe<order_by>;
  expiration_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  owner_address: InputMaybe<order_by>;
  registered_address: InputMaybe<order_by>;
  subdomain: InputMaybe<order_by>;
  token_name: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "current_aptos_names". */
export type current_aptos_names_order_by = {
  domain: InputMaybe<order_by>;
  domain_with_suffix: InputMaybe<order_by>;
  expiration_timestamp: InputMaybe<order_by>;
  is_active: InputMaybe<order_by>;
  is_domain_owner: InputMaybe<current_aptos_names_order_by>;
  is_primary: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  owner_address: InputMaybe<order_by>;
  registered_address: InputMaybe<order_by>;
  subdomain: InputMaybe<order_by>;
  token_name: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
};

/** select columns of table "current_aptos_names" */
export enum current_aptos_names_select_column {
  /** column name */
  domain = "domain",
  /** column name */
  domain_with_suffix = "domain_with_suffix",
  /** column name */
  expiration_timestamp = "expiration_timestamp",
  /** column name */
  is_active = "is_active",
  /** column name */
  is_primary = "is_primary",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  owner_address = "owner_address",
  /** column name */
  registered_address = "registered_address",
  /** column name */
  subdomain = "subdomain",
  /** column name */
  token_name = "token_name",
  /** column name */
  token_standard = "token_standard",
}

/** select "current_aptos_names_aggregate_bool_exp_bool_and_arguments_columns" columns of table "current_aptos_names" */
export enum current_aptos_names_select_column_current_aptos_names_aggregate_bool_exp_bool_and_arguments_columns {
  /** column name */
  is_active = "is_active",
  /** column name */
  is_primary = "is_primary",
}

/** select "current_aptos_names_aggregate_bool_exp_bool_or_arguments_columns" columns of table "current_aptos_names" */
export enum current_aptos_names_select_column_current_aptos_names_aggregate_bool_exp_bool_or_arguments_columns {
  /** column name */
  is_active = "is_active",
  /** column name */
  is_primary = "is_primary",
}

/** aggregate stddev on columns */
export type current_aptos_names_stddev_fields = {
  __typename?: "current_aptos_names_stddev_fields";
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "current_aptos_names" */
export type current_aptos_names_stddev_order_by = {
  last_transaction_version: InputMaybe<order_by>;
};

/** aggregate stddev_pop on columns */
export type current_aptos_names_stddev_pop_fields = {
  __typename?: "current_aptos_names_stddev_pop_fields";
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "current_aptos_names" */
export type current_aptos_names_stddev_pop_order_by = {
  last_transaction_version: InputMaybe<order_by>;
};

/** aggregate stddev_samp on columns */
export type current_aptos_names_stddev_samp_fields = {
  __typename?: "current_aptos_names_stddev_samp_fields";
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "current_aptos_names" */
export type current_aptos_names_stddev_samp_order_by = {
  last_transaction_version: InputMaybe<order_by>;
};

/** Streaming cursor of the table "current_aptos_names" */
export type current_aptos_names_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: current_aptos_names_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type current_aptos_names_stream_cursor_value_input = {
  domain: InputMaybe<Scalars["String"]>;
  domain_with_suffix: InputMaybe<Scalars["String"]>;
  expiration_timestamp: InputMaybe<Scalars["timestamp"]>;
  is_active: InputMaybe<Scalars["Boolean"]>;
  is_primary: InputMaybe<Scalars["Boolean"]>;
  last_transaction_version: InputMaybe<Scalars["bigint"]>;
  owner_address: InputMaybe<Scalars["String"]>;
  registered_address: InputMaybe<Scalars["String"]>;
  subdomain: InputMaybe<Scalars["String"]>;
  token_name: InputMaybe<Scalars["String"]>;
  token_standard: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type current_aptos_names_sum_fields = {
  __typename?: "current_aptos_names_sum_fields";
  last_transaction_version: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "current_aptos_names" */
export type current_aptos_names_sum_order_by = {
  last_transaction_version: InputMaybe<order_by>;
};

/** aggregate var_pop on columns */
export type current_aptos_names_var_pop_fields = {
  __typename?: "current_aptos_names_var_pop_fields";
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "current_aptos_names" */
export type current_aptos_names_var_pop_order_by = {
  last_transaction_version: InputMaybe<order_by>;
};

/** aggregate var_samp on columns */
export type current_aptos_names_var_samp_fields = {
  __typename?: "current_aptos_names_var_samp_fields";
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "current_aptos_names" */
export type current_aptos_names_var_samp_order_by = {
  last_transaction_version: InputMaybe<order_by>;
};

/** aggregate variance on columns */
export type current_aptos_names_variance_fields = {
  __typename?: "current_aptos_names_variance_fields";
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "current_aptos_names" */
export type current_aptos_names_variance_order_by = {
  last_transaction_version: InputMaybe<order_by>;
};

/** columns and relationships of "current_coin_balances" */
export type current_coin_balances = {
  __typename?: "current_coin_balances";
  amount: Scalars["numeric"];
  /** An object relationship */
  coin_info: Maybe<coin_infos>;
  coin_type: Scalars["String"];
  coin_type_hash: Scalars["String"];
  last_transaction_timestamp: Scalars["timestamp"];
  last_transaction_version: Scalars["bigint"];
  owner_address: Scalars["String"];
};

/** Boolean expression to filter rows from the table "current_coin_balances". All fields are combined with a logical 'AND'. */
export type current_coin_balances_bool_exp = {
  _and: InputMaybe<Array<current_coin_balances_bool_exp>>;
  _not: InputMaybe<current_coin_balances_bool_exp>;
  _or: InputMaybe<Array<current_coin_balances_bool_exp>>;
  amount: InputMaybe<numeric_comparison_exp>;
  coin_info: InputMaybe<coin_infos_bool_exp>;
  coin_type: InputMaybe<String_comparison_exp>;
  coin_type_hash: InputMaybe<String_comparison_exp>;
  last_transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  owner_address: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "current_coin_balances". */
export type current_coin_balances_order_by = {
  amount: InputMaybe<order_by>;
  coin_info: InputMaybe<coin_infos_order_by>;
  coin_type: InputMaybe<order_by>;
  coin_type_hash: InputMaybe<order_by>;
  last_transaction_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  owner_address: InputMaybe<order_by>;
};

/** select columns of table "current_coin_balances" */
export enum current_coin_balances_select_column {
  /** column name */
  amount = "amount",
  /** column name */
  coin_type = "coin_type",
  /** column name */
  coin_type_hash = "coin_type_hash",
  /** column name */
  last_transaction_timestamp = "last_transaction_timestamp",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  owner_address = "owner_address",
}

/** Streaming cursor of the table "current_coin_balances" */
export type current_coin_balances_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: current_coin_balances_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type current_coin_balances_stream_cursor_value_input = {
  amount: InputMaybe<Scalars["numeric"]>;
  coin_type: InputMaybe<Scalars["String"]>;
  coin_type_hash: InputMaybe<Scalars["String"]>;
  last_transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  last_transaction_version: InputMaybe<Scalars["bigint"]>;
  owner_address: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "current_collection_datas" */
export type current_collection_datas = {
  __typename?: "current_collection_datas";
  collection_data_id_hash: Scalars["String"];
  collection_name: Scalars["String"];
  creator_address: Scalars["String"];
  description: Scalars["String"];
  description_mutable: Scalars["Boolean"];
  last_transaction_timestamp: Scalars["timestamp"];
  last_transaction_version: Scalars["bigint"];
  maximum: Scalars["numeric"];
  maximum_mutable: Scalars["Boolean"];
  metadata_uri: Scalars["String"];
  supply: Scalars["numeric"];
  table_handle: Scalars["String"];
  uri_mutable: Scalars["Boolean"];
};

/** Boolean expression to filter rows from the table "current_collection_datas". All fields are combined with a logical 'AND'. */
export type current_collection_datas_bool_exp = {
  _and: InputMaybe<Array<current_collection_datas_bool_exp>>;
  _not: InputMaybe<current_collection_datas_bool_exp>;
  _or: InputMaybe<Array<current_collection_datas_bool_exp>>;
  collection_data_id_hash: InputMaybe<String_comparison_exp>;
  collection_name: InputMaybe<String_comparison_exp>;
  creator_address: InputMaybe<String_comparison_exp>;
  description: InputMaybe<String_comparison_exp>;
  description_mutable: InputMaybe<Boolean_comparison_exp>;
  last_transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  maximum: InputMaybe<numeric_comparison_exp>;
  maximum_mutable: InputMaybe<Boolean_comparison_exp>;
  metadata_uri: InputMaybe<String_comparison_exp>;
  supply: InputMaybe<numeric_comparison_exp>;
  table_handle: InputMaybe<String_comparison_exp>;
  uri_mutable: InputMaybe<Boolean_comparison_exp>;
};

/** Ordering options when selecting data from "current_collection_datas". */
export type current_collection_datas_order_by = {
  collection_data_id_hash: InputMaybe<order_by>;
  collection_name: InputMaybe<order_by>;
  creator_address: InputMaybe<order_by>;
  description: InputMaybe<order_by>;
  description_mutable: InputMaybe<order_by>;
  last_transaction_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  maximum: InputMaybe<order_by>;
  maximum_mutable: InputMaybe<order_by>;
  metadata_uri: InputMaybe<order_by>;
  supply: InputMaybe<order_by>;
  table_handle: InputMaybe<order_by>;
  uri_mutable: InputMaybe<order_by>;
};

/** select columns of table "current_collection_datas" */
export enum current_collection_datas_select_column {
  /** column name */
  collection_data_id_hash = "collection_data_id_hash",
  /** column name */
  collection_name = "collection_name",
  /** column name */
  creator_address = "creator_address",
  /** column name */
  description = "description",
  /** column name */
  description_mutable = "description_mutable",
  /** column name */
  last_transaction_timestamp = "last_transaction_timestamp",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  maximum = "maximum",
  /** column name */
  maximum_mutable = "maximum_mutable",
  /** column name */
  metadata_uri = "metadata_uri",
  /** column name */
  supply = "supply",
  /** column name */
  table_handle = "table_handle",
  /** column name */
  uri_mutable = "uri_mutable",
}

/** Streaming cursor of the table "current_collection_datas" */
export type current_collection_datas_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: current_collection_datas_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type current_collection_datas_stream_cursor_value_input = {
  collection_data_id_hash: InputMaybe<Scalars["String"]>;
  collection_name: InputMaybe<Scalars["String"]>;
  creator_address: InputMaybe<Scalars["String"]>;
  description: InputMaybe<Scalars["String"]>;
  description_mutable: InputMaybe<Scalars["Boolean"]>;
  last_transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  last_transaction_version: InputMaybe<Scalars["bigint"]>;
  maximum: InputMaybe<Scalars["numeric"]>;
  maximum_mutable: InputMaybe<Scalars["Boolean"]>;
  metadata_uri: InputMaybe<Scalars["String"]>;
  supply: InputMaybe<Scalars["numeric"]>;
  table_handle: InputMaybe<Scalars["String"]>;
  uri_mutable: InputMaybe<Scalars["Boolean"]>;
};

/** columns and relationships of "current_collection_ownership_v2_view" */
export type current_collection_ownership_v2_view = {
  __typename?: "current_collection_ownership_v2_view";
  collection_id: Maybe<Scalars["String"]>;
  collection_name: Maybe<Scalars["String"]>;
  collection_uri: Maybe<Scalars["String"]>;
  creator_address: Maybe<Scalars["String"]>;
  /** An object relationship */
  current_collection: Maybe<current_collections_v2>;
  distinct_tokens: Maybe<Scalars["bigint"]>;
  last_transaction_version: Maybe<Scalars["bigint"]>;
  owner_address: Maybe<Scalars["String"]>;
  single_token_uri: Maybe<Scalars["String"]>;
};

/** aggregated selection of "current_collection_ownership_v2_view" */
export type current_collection_ownership_v2_view_aggregate = {
  __typename?: "current_collection_ownership_v2_view_aggregate";
  aggregate: Maybe<current_collection_ownership_v2_view_aggregate_fields>;
  nodes: Array<current_collection_ownership_v2_view>;
};

/** aggregate fields of "current_collection_ownership_v2_view" */
export type current_collection_ownership_v2_view_aggregate_fields = {
  __typename?: "current_collection_ownership_v2_view_aggregate_fields";
  avg: Maybe<current_collection_ownership_v2_view_avg_fields>;
  count: Scalars["Int"];
  max: Maybe<current_collection_ownership_v2_view_max_fields>;
  min: Maybe<current_collection_ownership_v2_view_min_fields>;
  stddev: Maybe<current_collection_ownership_v2_view_stddev_fields>;
  stddev_pop: Maybe<current_collection_ownership_v2_view_stddev_pop_fields>;
  stddev_samp: Maybe<current_collection_ownership_v2_view_stddev_samp_fields>;
  sum: Maybe<current_collection_ownership_v2_view_sum_fields>;
  var_pop: Maybe<current_collection_ownership_v2_view_var_pop_fields>;
  var_samp: Maybe<current_collection_ownership_v2_view_var_samp_fields>;
  variance: Maybe<current_collection_ownership_v2_view_variance_fields>;
};

/** aggregate fields of "current_collection_ownership_v2_view" */
export type current_collection_ownership_v2_view_aggregate_fieldscountArgs = {
  columns: InputMaybe<
    Array<current_collection_ownership_v2_view_select_column>
  >;
  distinct: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type current_collection_ownership_v2_view_avg_fields = {
  __typename?: "current_collection_ownership_v2_view_avg_fields";
  distinct_tokens: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "current_collection_ownership_v2_view". All fields are combined with a logical 'AND'. */
export type current_collection_ownership_v2_view_bool_exp = {
  _and: InputMaybe<Array<current_collection_ownership_v2_view_bool_exp>>;
  _not: InputMaybe<current_collection_ownership_v2_view_bool_exp>;
  _or: InputMaybe<Array<current_collection_ownership_v2_view_bool_exp>>;
  collection_id: InputMaybe<String_comparison_exp>;
  collection_name: InputMaybe<String_comparison_exp>;
  collection_uri: InputMaybe<String_comparison_exp>;
  creator_address: InputMaybe<String_comparison_exp>;
  current_collection: InputMaybe<current_collections_v2_bool_exp>;
  distinct_tokens: InputMaybe<bigint_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  owner_address: InputMaybe<String_comparison_exp>;
  single_token_uri: InputMaybe<String_comparison_exp>;
};

/** aggregate max on columns */
export type current_collection_ownership_v2_view_max_fields = {
  __typename?: "current_collection_ownership_v2_view_max_fields";
  collection_id: Maybe<Scalars["String"]>;
  collection_name: Maybe<Scalars["String"]>;
  collection_uri: Maybe<Scalars["String"]>;
  creator_address: Maybe<Scalars["String"]>;
  distinct_tokens: Maybe<Scalars["bigint"]>;
  last_transaction_version: Maybe<Scalars["bigint"]>;
  owner_address: Maybe<Scalars["String"]>;
  single_token_uri: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type current_collection_ownership_v2_view_min_fields = {
  __typename?: "current_collection_ownership_v2_view_min_fields";
  collection_id: Maybe<Scalars["String"]>;
  collection_name: Maybe<Scalars["String"]>;
  collection_uri: Maybe<Scalars["String"]>;
  creator_address: Maybe<Scalars["String"]>;
  distinct_tokens: Maybe<Scalars["bigint"]>;
  last_transaction_version: Maybe<Scalars["bigint"]>;
  owner_address: Maybe<Scalars["String"]>;
  single_token_uri: Maybe<Scalars["String"]>;
};

/** Ordering options when selecting data from "current_collection_ownership_v2_view". */
export type current_collection_ownership_v2_view_order_by = {
  collection_id: InputMaybe<order_by>;
  collection_name: InputMaybe<order_by>;
  collection_uri: InputMaybe<order_by>;
  creator_address: InputMaybe<order_by>;
  current_collection: InputMaybe<current_collections_v2_order_by>;
  distinct_tokens: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  owner_address: InputMaybe<order_by>;
  single_token_uri: InputMaybe<order_by>;
};

/** select columns of table "current_collection_ownership_v2_view" */
export enum current_collection_ownership_v2_view_select_column {
  /** column name */
  collection_id = "collection_id",
  /** column name */
  collection_name = "collection_name",
  /** column name */
  collection_uri = "collection_uri",
  /** column name */
  creator_address = "creator_address",
  /** column name */
  distinct_tokens = "distinct_tokens",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  owner_address = "owner_address",
  /** column name */
  single_token_uri = "single_token_uri",
}

/** aggregate stddev on columns */
export type current_collection_ownership_v2_view_stddev_fields = {
  __typename?: "current_collection_ownership_v2_view_stddev_fields";
  distinct_tokens: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type current_collection_ownership_v2_view_stddev_pop_fields = {
  __typename?: "current_collection_ownership_v2_view_stddev_pop_fields";
  distinct_tokens: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type current_collection_ownership_v2_view_stddev_samp_fields = {
  __typename?: "current_collection_ownership_v2_view_stddev_samp_fields";
  distinct_tokens: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "current_collection_ownership_v2_view" */
export type current_collection_ownership_v2_view_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: current_collection_ownership_v2_view_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type current_collection_ownership_v2_view_stream_cursor_value_input = {
  collection_id: InputMaybe<Scalars["String"]>;
  collection_name: InputMaybe<Scalars["String"]>;
  collection_uri: InputMaybe<Scalars["String"]>;
  creator_address: InputMaybe<Scalars["String"]>;
  distinct_tokens: InputMaybe<Scalars["bigint"]>;
  last_transaction_version: InputMaybe<Scalars["bigint"]>;
  owner_address: InputMaybe<Scalars["String"]>;
  single_token_uri: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type current_collection_ownership_v2_view_sum_fields = {
  __typename?: "current_collection_ownership_v2_view_sum_fields";
  distinct_tokens: Maybe<Scalars["bigint"]>;
  last_transaction_version: Maybe<Scalars["bigint"]>;
};

/** aggregate var_pop on columns */
export type current_collection_ownership_v2_view_var_pop_fields = {
  __typename?: "current_collection_ownership_v2_view_var_pop_fields";
  distinct_tokens: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type current_collection_ownership_v2_view_var_samp_fields = {
  __typename?: "current_collection_ownership_v2_view_var_samp_fields";
  distinct_tokens: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type current_collection_ownership_v2_view_variance_fields = {
  __typename?: "current_collection_ownership_v2_view_variance_fields";
  distinct_tokens: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "current_collections_v2" */
export type current_collections_v2 = {
  __typename?: "current_collections_v2";
  /** An object relationship */
  cdn_asset_uris: Maybe<nft_metadata_crawler_parsed_asset_uris>;
  collection_id: Scalars["String"];
  collection_name: Scalars["String"];
  creator_address: Scalars["String"];
  current_supply: Scalars["numeric"];
  description: Scalars["String"];
  last_transaction_timestamp: Scalars["timestamp"];
  last_transaction_version: Scalars["bigint"];
  max_supply: Maybe<Scalars["numeric"]>;
  mutable_description: Maybe<Scalars["Boolean"]>;
  mutable_uri: Maybe<Scalars["Boolean"]>;
  table_handle_v1: Maybe<Scalars["String"]>;
  token_standard: Scalars["String"];
  total_minted_v2: Maybe<Scalars["numeric"]>;
  uri: Scalars["String"];
};

/** Boolean expression to filter rows from the table "current_collections_v2". All fields are combined with a logical 'AND'. */
export type current_collections_v2_bool_exp = {
  _and: InputMaybe<Array<current_collections_v2_bool_exp>>;
  _not: InputMaybe<current_collections_v2_bool_exp>;
  _or: InputMaybe<Array<current_collections_v2_bool_exp>>;
  cdn_asset_uris: InputMaybe<nft_metadata_crawler_parsed_asset_uris_bool_exp>;
  collection_id: InputMaybe<String_comparison_exp>;
  collection_name: InputMaybe<String_comparison_exp>;
  creator_address: InputMaybe<String_comparison_exp>;
  current_supply: InputMaybe<numeric_comparison_exp>;
  description: InputMaybe<String_comparison_exp>;
  last_transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  max_supply: InputMaybe<numeric_comparison_exp>;
  mutable_description: InputMaybe<Boolean_comparison_exp>;
  mutable_uri: InputMaybe<Boolean_comparison_exp>;
  table_handle_v1: InputMaybe<String_comparison_exp>;
  token_standard: InputMaybe<String_comparison_exp>;
  total_minted_v2: InputMaybe<numeric_comparison_exp>;
  uri: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "current_collections_v2". */
export type current_collections_v2_order_by = {
  cdn_asset_uris: InputMaybe<nft_metadata_crawler_parsed_asset_uris_order_by>;
  collection_id: InputMaybe<order_by>;
  collection_name: InputMaybe<order_by>;
  creator_address: InputMaybe<order_by>;
  current_supply: InputMaybe<order_by>;
  description: InputMaybe<order_by>;
  last_transaction_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  max_supply: InputMaybe<order_by>;
  mutable_description: InputMaybe<order_by>;
  mutable_uri: InputMaybe<order_by>;
  table_handle_v1: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
  total_minted_v2: InputMaybe<order_by>;
  uri: InputMaybe<order_by>;
};

/** select columns of table "current_collections_v2" */
export enum current_collections_v2_select_column {
  /** column name */
  collection_id = "collection_id",
  /** column name */
  collection_name = "collection_name",
  /** column name */
  creator_address = "creator_address",
  /** column name */
  current_supply = "current_supply",
  /** column name */
  description = "description",
  /** column name */
  last_transaction_timestamp = "last_transaction_timestamp",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  max_supply = "max_supply",
  /** column name */
  mutable_description = "mutable_description",
  /** column name */
  mutable_uri = "mutable_uri",
  /** column name */
  table_handle_v1 = "table_handle_v1",
  /** column name */
  token_standard = "token_standard",
  /** column name */
  total_minted_v2 = "total_minted_v2",
  /** column name */
  uri = "uri",
}

/** Streaming cursor of the table "current_collections_v2" */
export type current_collections_v2_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: current_collections_v2_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type current_collections_v2_stream_cursor_value_input = {
  collection_id: InputMaybe<Scalars["String"]>;
  collection_name: InputMaybe<Scalars["String"]>;
  creator_address: InputMaybe<Scalars["String"]>;
  current_supply: InputMaybe<Scalars["numeric"]>;
  description: InputMaybe<Scalars["String"]>;
  last_transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  last_transaction_version: InputMaybe<Scalars["bigint"]>;
  max_supply: InputMaybe<Scalars["numeric"]>;
  mutable_description: InputMaybe<Scalars["Boolean"]>;
  mutable_uri: InputMaybe<Scalars["Boolean"]>;
  table_handle_v1: InputMaybe<Scalars["String"]>;
  token_standard: InputMaybe<Scalars["String"]>;
  total_minted_v2: InputMaybe<Scalars["numeric"]>;
  uri: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "current_delegated_staking_pool_balances" */
export type current_delegated_staking_pool_balances = {
  __typename?: "current_delegated_staking_pool_balances";
  active_table_handle: Scalars["String"];
  inactive_table_handle: Scalars["String"];
  last_transaction_version: Scalars["bigint"];
  operator_commission_percentage: Scalars["numeric"];
  staking_pool_address: Scalars["String"];
  total_coins: Scalars["numeric"];
  total_shares: Scalars["numeric"];
};

/** Boolean expression to filter rows from the table "current_delegated_staking_pool_balances". All fields are combined with a logical 'AND'. */
export type current_delegated_staking_pool_balances_bool_exp = {
  _and: InputMaybe<Array<current_delegated_staking_pool_balances_bool_exp>>;
  _not: InputMaybe<current_delegated_staking_pool_balances_bool_exp>;
  _or: InputMaybe<Array<current_delegated_staking_pool_balances_bool_exp>>;
  active_table_handle: InputMaybe<String_comparison_exp>;
  inactive_table_handle: InputMaybe<String_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  operator_commission_percentage: InputMaybe<numeric_comparison_exp>;
  staking_pool_address: InputMaybe<String_comparison_exp>;
  total_coins: InputMaybe<numeric_comparison_exp>;
  total_shares: InputMaybe<numeric_comparison_exp>;
};

/** Ordering options when selecting data from "current_delegated_staking_pool_balances". */
export type current_delegated_staking_pool_balances_order_by = {
  active_table_handle: InputMaybe<order_by>;
  inactive_table_handle: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  operator_commission_percentage: InputMaybe<order_by>;
  staking_pool_address: InputMaybe<order_by>;
  total_coins: InputMaybe<order_by>;
  total_shares: InputMaybe<order_by>;
};

/** select columns of table "current_delegated_staking_pool_balances" */
export enum current_delegated_staking_pool_balances_select_column {
  /** column name */
  active_table_handle = "active_table_handle",
  /** column name */
  inactive_table_handle = "inactive_table_handle",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  operator_commission_percentage = "operator_commission_percentage",
  /** column name */
  staking_pool_address = "staking_pool_address",
  /** column name */
  total_coins = "total_coins",
  /** column name */
  total_shares = "total_shares",
}

/** Streaming cursor of the table "current_delegated_staking_pool_balances" */
export type current_delegated_staking_pool_balances_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: current_delegated_staking_pool_balances_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type current_delegated_staking_pool_balances_stream_cursor_value_input =
  {
    active_table_handle: InputMaybe<Scalars["String"]>;
    inactive_table_handle: InputMaybe<Scalars["String"]>;
    last_transaction_version: InputMaybe<Scalars["bigint"]>;
    operator_commission_percentage: InputMaybe<Scalars["numeric"]>;
    staking_pool_address: InputMaybe<Scalars["String"]>;
    total_coins: InputMaybe<Scalars["numeric"]>;
    total_shares: InputMaybe<Scalars["numeric"]>;
  };

/** columns and relationships of "current_delegated_voter" */
export type current_delegated_voter = {
  __typename?: "current_delegated_voter";
  delegation_pool_address: Scalars["String"];
  delegator_address: Scalars["String"];
  last_transaction_timestamp: Scalars["timestamp"];
  last_transaction_version: Scalars["bigint"];
  pending_voter: Maybe<Scalars["String"]>;
  table_handle: Maybe<Scalars["String"]>;
  voter: Maybe<Scalars["String"]>;
};

/** Boolean expression to filter rows from the table "current_delegated_voter". All fields are combined with a logical 'AND'. */
export type current_delegated_voter_bool_exp = {
  _and: InputMaybe<Array<current_delegated_voter_bool_exp>>;
  _not: InputMaybe<current_delegated_voter_bool_exp>;
  _or: InputMaybe<Array<current_delegated_voter_bool_exp>>;
  delegation_pool_address: InputMaybe<String_comparison_exp>;
  delegator_address: InputMaybe<String_comparison_exp>;
  last_transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  pending_voter: InputMaybe<String_comparison_exp>;
  table_handle: InputMaybe<String_comparison_exp>;
  voter: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "current_delegated_voter". */
export type current_delegated_voter_order_by = {
  delegation_pool_address: InputMaybe<order_by>;
  delegator_address: InputMaybe<order_by>;
  last_transaction_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  pending_voter: InputMaybe<order_by>;
  table_handle: InputMaybe<order_by>;
  voter: InputMaybe<order_by>;
};

/** select columns of table "current_delegated_voter" */
export enum current_delegated_voter_select_column {
  /** column name */
  delegation_pool_address = "delegation_pool_address",
  /** column name */
  delegator_address = "delegator_address",
  /** column name */
  last_transaction_timestamp = "last_transaction_timestamp",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  pending_voter = "pending_voter",
  /** column name */
  table_handle = "table_handle",
  /** column name */
  voter = "voter",
}

/** Streaming cursor of the table "current_delegated_voter" */
export type current_delegated_voter_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: current_delegated_voter_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type current_delegated_voter_stream_cursor_value_input = {
  delegation_pool_address: InputMaybe<Scalars["String"]>;
  delegator_address: InputMaybe<Scalars["String"]>;
  last_transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  last_transaction_version: InputMaybe<Scalars["bigint"]>;
  pending_voter: InputMaybe<Scalars["String"]>;
  table_handle: InputMaybe<Scalars["String"]>;
  voter: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "current_delegator_balances" */
export type current_delegator_balances = {
  __typename?: "current_delegator_balances";
  /** An object relationship */
  current_pool_balance: Maybe<current_delegated_staking_pool_balances>;
  delegator_address: Scalars["String"];
  last_transaction_version: Scalars["bigint"];
  parent_table_handle: Scalars["String"];
  pool_address: Scalars["String"];
  pool_type: Scalars["String"];
  shares: Scalars["numeric"];
  /** An object relationship */
  staking_pool_metadata: Maybe<current_staking_pool_voter>;
  table_handle: Scalars["String"];
};

/** Boolean expression to filter rows from the table "current_delegator_balances". All fields are combined with a logical 'AND'. */
export type current_delegator_balances_bool_exp = {
  _and: InputMaybe<Array<current_delegator_balances_bool_exp>>;
  _not: InputMaybe<current_delegator_balances_bool_exp>;
  _or: InputMaybe<Array<current_delegator_balances_bool_exp>>;
  current_pool_balance: InputMaybe<current_delegated_staking_pool_balances_bool_exp>;
  delegator_address: InputMaybe<String_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  parent_table_handle: InputMaybe<String_comparison_exp>;
  pool_address: InputMaybe<String_comparison_exp>;
  pool_type: InputMaybe<String_comparison_exp>;
  shares: InputMaybe<numeric_comparison_exp>;
  staking_pool_metadata: InputMaybe<current_staking_pool_voter_bool_exp>;
  table_handle: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "current_delegator_balances". */
export type current_delegator_balances_order_by = {
  current_pool_balance: InputMaybe<current_delegated_staking_pool_balances_order_by>;
  delegator_address: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  parent_table_handle: InputMaybe<order_by>;
  pool_address: InputMaybe<order_by>;
  pool_type: InputMaybe<order_by>;
  shares: InputMaybe<order_by>;
  staking_pool_metadata: InputMaybe<current_staking_pool_voter_order_by>;
  table_handle: InputMaybe<order_by>;
};

/** select columns of table "current_delegator_balances" */
export enum current_delegator_balances_select_column {
  /** column name */
  delegator_address = "delegator_address",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  parent_table_handle = "parent_table_handle",
  /** column name */
  pool_address = "pool_address",
  /** column name */
  pool_type = "pool_type",
  /** column name */
  shares = "shares",
  /** column name */
  table_handle = "table_handle",
}

/** Streaming cursor of the table "current_delegator_balances" */
export type current_delegator_balances_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: current_delegator_balances_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type current_delegator_balances_stream_cursor_value_input = {
  delegator_address: InputMaybe<Scalars["String"]>;
  last_transaction_version: InputMaybe<Scalars["bigint"]>;
  parent_table_handle: InputMaybe<Scalars["String"]>;
  pool_address: InputMaybe<Scalars["String"]>;
  pool_type: InputMaybe<Scalars["String"]>;
  shares: InputMaybe<Scalars["numeric"]>;
  table_handle: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "current_fungible_asset_balances" */
export type current_fungible_asset_balances = {
  __typename?: "current_fungible_asset_balances";
  amount: Scalars["numeric"];
  asset_type: Scalars["String"];
  is_frozen: Scalars["Boolean"];
  is_primary: Scalars["Boolean"];
  last_transaction_timestamp: Scalars["timestamp"];
  last_transaction_version: Scalars["bigint"];
  /** An object relationship */
  metadata: Maybe<fungible_asset_metadata>;
  owner_address: Scalars["String"];
  storage_id: Scalars["String"];
  token_standard: Scalars["String"];
};

/** aggregated selection of "current_fungible_asset_balances" */
export type current_fungible_asset_balances_aggregate = {
  __typename?: "current_fungible_asset_balances_aggregate";
  aggregate: Maybe<current_fungible_asset_balances_aggregate_fields>;
  nodes: Array<current_fungible_asset_balances>;
};

/** aggregate fields of "current_fungible_asset_balances" */
export type current_fungible_asset_balances_aggregate_fields = {
  __typename?: "current_fungible_asset_balances_aggregate_fields";
  avg: Maybe<current_fungible_asset_balances_avg_fields>;
  count: Scalars["Int"];
  max: Maybe<current_fungible_asset_balances_max_fields>;
  min: Maybe<current_fungible_asset_balances_min_fields>;
  stddev: Maybe<current_fungible_asset_balances_stddev_fields>;
  stddev_pop: Maybe<current_fungible_asset_balances_stddev_pop_fields>;
  stddev_samp: Maybe<current_fungible_asset_balances_stddev_samp_fields>;
  sum: Maybe<current_fungible_asset_balances_sum_fields>;
  var_pop: Maybe<current_fungible_asset_balances_var_pop_fields>;
  var_samp: Maybe<current_fungible_asset_balances_var_samp_fields>;
  variance: Maybe<current_fungible_asset_balances_variance_fields>;
};

/** aggregate fields of "current_fungible_asset_balances" */
export type current_fungible_asset_balances_aggregate_fieldscountArgs = {
  columns: InputMaybe<Array<current_fungible_asset_balances_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type current_fungible_asset_balances_avg_fields = {
  __typename?: "current_fungible_asset_balances_avg_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "current_fungible_asset_balances". All fields are combined with a logical 'AND'. */
export type current_fungible_asset_balances_bool_exp = {
  _and: InputMaybe<Array<current_fungible_asset_balances_bool_exp>>;
  _not: InputMaybe<current_fungible_asset_balances_bool_exp>;
  _or: InputMaybe<Array<current_fungible_asset_balances_bool_exp>>;
  amount: InputMaybe<numeric_comparison_exp>;
  asset_type: InputMaybe<String_comparison_exp>;
  is_frozen: InputMaybe<Boolean_comparison_exp>;
  is_primary: InputMaybe<Boolean_comparison_exp>;
  last_transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  metadata: InputMaybe<fungible_asset_metadata_bool_exp>;
  owner_address: InputMaybe<String_comparison_exp>;
  storage_id: InputMaybe<String_comparison_exp>;
  token_standard: InputMaybe<String_comparison_exp>;
};

/** aggregate max on columns */
export type current_fungible_asset_balances_max_fields = {
  __typename?: "current_fungible_asset_balances_max_fields";
  amount: Maybe<Scalars["numeric"]>;
  asset_type: Maybe<Scalars["String"]>;
  last_transaction_timestamp: Maybe<Scalars["timestamp"]>;
  last_transaction_version: Maybe<Scalars["bigint"]>;
  owner_address: Maybe<Scalars["String"]>;
  storage_id: Maybe<Scalars["String"]>;
  token_standard: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type current_fungible_asset_balances_min_fields = {
  __typename?: "current_fungible_asset_balances_min_fields";
  amount: Maybe<Scalars["numeric"]>;
  asset_type: Maybe<Scalars["String"]>;
  last_transaction_timestamp: Maybe<Scalars["timestamp"]>;
  last_transaction_version: Maybe<Scalars["bigint"]>;
  owner_address: Maybe<Scalars["String"]>;
  storage_id: Maybe<Scalars["String"]>;
  token_standard: Maybe<Scalars["String"]>;
};

/** Ordering options when selecting data from "current_fungible_asset_balances". */
export type current_fungible_asset_balances_order_by = {
  amount: InputMaybe<order_by>;
  asset_type: InputMaybe<order_by>;
  is_frozen: InputMaybe<order_by>;
  is_primary: InputMaybe<order_by>;
  last_transaction_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  metadata: InputMaybe<fungible_asset_metadata_order_by>;
  owner_address: InputMaybe<order_by>;
  storage_id: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
};

/** select columns of table "current_fungible_asset_balances" */
export enum current_fungible_asset_balances_select_column {
  /** column name */
  amount = "amount",
  /** column name */
  asset_type = "asset_type",
  /** column name */
  is_frozen = "is_frozen",
  /** column name */
  is_primary = "is_primary",
  /** column name */
  last_transaction_timestamp = "last_transaction_timestamp",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  owner_address = "owner_address",
  /** column name */
  storage_id = "storage_id",
  /** column name */
  token_standard = "token_standard",
}

/** aggregate stddev on columns */
export type current_fungible_asset_balances_stddev_fields = {
  __typename?: "current_fungible_asset_balances_stddev_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type current_fungible_asset_balances_stddev_pop_fields = {
  __typename?: "current_fungible_asset_balances_stddev_pop_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type current_fungible_asset_balances_stddev_samp_fields = {
  __typename?: "current_fungible_asset_balances_stddev_samp_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "current_fungible_asset_balances" */
export type current_fungible_asset_balances_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: current_fungible_asset_balances_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type current_fungible_asset_balances_stream_cursor_value_input = {
  amount: InputMaybe<Scalars["numeric"]>;
  asset_type: InputMaybe<Scalars["String"]>;
  is_frozen: InputMaybe<Scalars["Boolean"]>;
  is_primary: InputMaybe<Scalars["Boolean"]>;
  last_transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  last_transaction_version: InputMaybe<Scalars["bigint"]>;
  owner_address: InputMaybe<Scalars["String"]>;
  storage_id: InputMaybe<Scalars["String"]>;
  token_standard: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type current_fungible_asset_balances_sum_fields = {
  __typename?: "current_fungible_asset_balances_sum_fields";
  amount: Maybe<Scalars["numeric"]>;
  last_transaction_version: Maybe<Scalars["bigint"]>;
};

/** aggregate var_pop on columns */
export type current_fungible_asset_balances_var_pop_fields = {
  __typename?: "current_fungible_asset_balances_var_pop_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type current_fungible_asset_balances_var_samp_fields = {
  __typename?: "current_fungible_asset_balances_var_samp_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type current_fungible_asset_balances_variance_fields = {
  __typename?: "current_fungible_asset_balances_variance_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "current_objects" */
export type current_objects = {
  __typename?: "current_objects";
  allow_ungated_transfer: Scalars["Boolean"];
  is_deleted: Scalars["Boolean"];
  last_guid_creation_num: Scalars["numeric"];
  last_transaction_version: Scalars["bigint"];
  object_address: Scalars["String"];
  owner_address: Scalars["String"];
  state_key_hash: Scalars["String"];
};

/** Boolean expression to filter rows from the table "current_objects". All fields are combined with a logical 'AND'. */
export type current_objects_bool_exp = {
  _and: InputMaybe<Array<current_objects_bool_exp>>;
  _not: InputMaybe<current_objects_bool_exp>;
  _or: InputMaybe<Array<current_objects_bool_exp>>;
  allow_ungated_transfer: InputMaybe<Boolean_comparison_exp>;
  is_deleted: InputMaybe<Boolean_comparison_exp>;
  last_guid_creation_num: InputMaybe<numeric_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  object_address: InputMaybe<String_comparison_exp>;
  owner_address: InputMaybe<String_comparison_exp>;
  state_key_hash: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "current_objects". */
export type current_objects_order_by = {
  allow_ungated_transfer: InputMaybe<order_by>;
  is_deleted: InputMaybe<order_by>;
  last_guid_creation_num: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  object_address: InputMaybe<order_by>;
  owner_address: InputMaybe<order_by>;
  state_key_hash: InputMaybe<order_by>;
};

/** select columns of table "current_objects" */
export enum current_objects_select_column {
  /** column name */
  allow_ungated_transfer = "allow_ungated_transfer",
  /** column name */
  is_deleted = "is_deleted",
  /** column name */
  last_guid_creation_num = "last_guid_creation_num",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  object_address = "object_address",
  /** column name */
  owner_address = "owner_address",
  /** column name */
  state_key_hash = "state_key_hash",
}

/** Streaming cursor of the table "current_objects" */
export type current_objects_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: current_objects_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type current_objects_stream_cursor_value_input = {
  allow_ungated_transfer: InputMaybe<Scalars["Boolean"]>;
  is_deleted: InputMaybe<Scalars["Boolean"]>;
  last_guid_creation_num: InputMaybe<Scalars["numeric"]>;
  last_transaction_version: InputMaybe<Scalars["bigint"]>;
  object_address: InputMaybe<Scalars["String"]>;
  owner_address: InputMaybe<Scalars["String"]>;
  state_key_hash: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "current_staking_pool_voter" */
export type current_staking_pool_voter = {
  __typename?: "current_staking_pool_voter";
  last_transaction_version: Scalars["bigint"];
  operator_address: Scalars["String"];
  /** An array relationship */
  operator_aptos_name: Array<current_aptos_names>;
  /** An aggregate relationship */
  operator_aptos_name_aggregate: current_aptos_names_aggregate;
  staking_pool_address: Scalars["String"];
  voter_address: Scalars["String"];
};

/** columns and relationships of "current_staking_pool_voter" */
export type current_staking_pool_voteroperator_aptos_nameArgs = {
  distinct_on: InputMaybe<Array<current_aptos_names_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_aptos_names_order_by>>;
  where: InputMaybe<current_aptos_names_bool_exp>;
};

/** columns and relationships of "current_staking_pool_voter" */
export type current_staking_pool_voteroperator_aptos_name_aggregateArgs = {
  distinct_on: InputMaybe<Array<current_aptos_names_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_aptos_names_order_by>>;
  where: InputMaybe<current_aptos_names_bool_exp>;
};

/** Boolean expression to filter rows from the table "current_staking_pool_voter". All fields are combined with a logical 'AND'. */
export type current_staking_pool_voter_bool_exp = {
  _and: InputMaybe<Array<current_staking_pool_voter_bool_exp>>;
  _not: InputMaybe<current_staking_pool_voter_bool_exp>;
  _or: InputMaybe<Array<current_staking_pool_voter_bool_exp>>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  operator_address: InputMaybe<String_comparison_exp>;
  operator_aptos_name: InputMaybe<current_aptos_names_bool_exp>;
  operator_aptos_name_aggregate: InputMaybe<current_aptos_names_aggregate_bool_exp>;
  staking_pool_address: InputMaybe<String_comparison_exp>;
  voter_address: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "current_staking_pool_voter". */
export type current_staking_pool_voter_order_by = {
  last_transaction_version: InputMaybe<order_by>;
  operator_address: InputMaybe<order_by>;
  operator_aptos_name_aggregate: InputMaybe<current_aptos_names_aggregate_order_by>;
  staking_pool_address: InputMaybe<order_by>;
  voter_address: InputMaybe<order_by>;
};

/** select columns of table "current_staking_pool_voter" */
export enum current_staking_pool_voter_select_column {
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  operator_address = "operator_address",
  /** column name */
  staking_pool_address = "staking_pool_address",
  /** column name */
  voter_address = "voter_address",
}

/** Streaming cursor of the table "current_staking_pool_voter" */
export type current_staking_pool_voter_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: current_staking_pool_voter_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type current_staking_pool_voter_stream_cursor_value_input = {
  last_transaction_version: InputMaybe<Scalars["bigint"]>;
  operator_address: InputMaybe<Scalars["String"]>;
  staking_pool_address: InputMaybe<Scalars["String"]>;
  voter_address: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "current_table_items" */
export type current_table_items = {
  __typename?: "current_table_items";
  decoded_key: Scalars["jsonb"];
  decoded_value: Maybe<Scalars["jsonb"]>;
  is_deleted: Scalars["Boolean"];
  key: Scalars["String"];
  key_hash: Scalars["String"];
  last_transaction_version: Scalars["bigint"];
  table_handle: Scalars["String"];
};

/** columns and relationships of "current_table_items" */
export type current_table_itemsdecoded_keyArgs = {
  path: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "current_table_items" */
export type current_table_itemsdecoded_valueArgs = {
  path: InputMaybe<Scalars["String"]>;
};

/** Boolean expression to filter rows from the table "current_table_items". All fields are combined with a logical 'AND'. */
export type current_table_items_bool_exp = {
  _and: InputMaybe<Array<current_table_items_bool_exp>>;
  _not: InputMaybe<current_table_items_bool_exp>;
  _or: InputMaybe<Array<current_table_items_bool_exp>>;
  decoded_key: InputMaybe<jsonb_comparison_exp>;
  decoded_value: InputMaybe<jsonb_comparison_exp>;
  is_deleted: InputMaybe<Boolean_comparison_exp>;
  key: InputMaybe<String_comparison_exp>;
  key_hash: InputMaybe<String_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  table_handle: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "current_table_items". */
export type current_table_items_order_by = {
  decoded_key: InputMaybe<order_by>;
  decoded_value: InputMaybe<order_by>;
  is_deleted: InputMaybe<order_by>;
  key: InputMaybe<order_by>;
  key_hash: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  table_handle: InputMaybe<order_by>;
};

/** select columns of table "current_table_items" */
export enum current_table_items_select_column {
  /** column name */
  decoded_key = "decoded_key",
  /** column name */
  decoded_value = "decoded_value",
  /** column name */
  is_deleted = "is_deleted",
  /** column name */
  key = "key",
  /** column name */
  key_hash = "key_hash",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  table_handle = "table_handle",
}

/** Streaming cursor of the table "current_table_items" */
export type current_table_items_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: current_table_items_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type current_table_items_stream_cursor_value_input = {
  decoded_key: InputMaybe<Scalars["jsonb"]>;
  decoded_value: InputMaybe<Scalars["jsonb"]>;
  is_deleted: InputMaybe<Scalars["Boolean"]>;
  key: InputMaybe<Scalars["String"]>;
  key_hash: InputMaybe<Scalars["String"]>;
  last_transaction_version: InputMaybe<Scalars["bigint"]>;
  table_handle: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "current_token_datas" */
export type current_token_datas = {
  __typename?: "current_token_datas";
  collection_data_id_hash: Scalars["String"];
  collection_name: Scalars["String"];
  creator_address: Scalars["String"];
  /** An object relationship */
  current_collection_data: Maybe<current_collection_datas>;
  default_properties: Scalars["jsonb"];
  description: Scalars["String"];
  description_mutable: Scalars["Boolean"];
  largest_property_version: Scalars["numeric"];
  last_transaction_timestamp: Scalars["timestamp"];
  last_transaction_version: Scalars["bigint"];
  maximum: Scalars["numeric"];
  maximum_mutable: Scalars["Boolean"];
  metadata_uri: Scalars["String"];
  name: Scalars["String"];
  payee_address: Scalars["String"];
  properties_mutable: Scalars["Boolean"];
  royalty_mutable: Scalars["Boolean"];
  royalty_points_denominator: Scalars["numeric"];
  royalty_points_numerator: Scalars["numeric"];
  supply: Scalars["numeric"];
  token_data_id_hash: Scalars["String"];
  uri_mutable: Scalars["Boolean"];
};

/** columns and relationships of "current_token_datas" */
export type current_token_datasdefault_propertiesArgs = {
  path: InputMaybe<Scalars["String"]>;
};

/** Boolean expression to filter rows from the table "current_token_datas". All fields are combined with a logical 'AND'. */
export type current_token_datas_bool_exp = {
  _and: InputMaybe<Array<current_token_datas_bool_exp>>;
  _not: InputMaybe<current_token_datas_bool_exp>;
  _or: InputMaybe<Array<current_token_datas_bool_exp>>;
  collection_data_id_hash: InputMaybe<String_comparison_exp>;
  collection_name: InputMaybe<String_comparison_exp>;
  creator_address: InputMaybe<String_comparison_exp>;
  current_collection_data: InputMaybe<current_collection_datas_bool_exp>;
  default_properties: InputMaybe<jsonb_comparison_exp>;
  description: InputMaybe<String_comparison_exp>;
  description_mutable: InputMaybe<Boolean_comparison_exp>;
  largest_property_version: InputMaybe<numeric_comparison_exp>;
  last_transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  maximum: InputMaybe<numeric_comparison_exp>;
  maximum_mutable: InputMaybe<Boolean_comparison_exp>;
  metadata_uri: InputMaybe<String_comparison_exp>;
  name: InputMaybe<String_comparison_exp>;
  payee_address: InputMaybe<String_comparison_exp>;
  properties_mutable: InputMaybe<Boolean_comparison_exp>;
  royalty_mutable: InputMaybe<Boolean_comparison_exp>;
  royalty_points_denominator: InputMaybe<numeric_comparison_exp>;
  royalty_points_numerator: InputMaybe<numeric_comparison_exp>;
  supply: InputMaybe<numeric_comparison_exp>;
  token_data_id_hash: InputMaybe<String_comparison_exp>;
  uri_mutable: InputMaybe<Boolean_comparison_exp>;
};

/** Ordering options when selecting data from "current_token_datas". */
export type current_token_datas_order_by = {
  collection_data_id_hash: InputMaybe<order_by>;
  collection_name: InputMaybe<order_by>;
  creator_address: InputMaybe<order_by>;
  current_collection_data: InputMaybe<current_collection_datas_order_by>;
  default_properties: InputMaybe<order_by>;
  description: InputMaybe<order_by>;
  description_mutable: InputMaybe<order_by>;
  largest_property_version: InputMaybe<order_by>;
  last_transaction_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  maximum: InputMaybe<order_by>;
  maximum_mutable: InputMaybe<order_by>;
  metadata_uri: InputMaybe<order_by>;
  name: InputMaybe<order_by>;
  payee_address: InputMaybe<order_by>;
  properties_mutable: InputMaybe<order_by>;
  royalty_mutable: InputMaybe<order_by>;
  royalty_points_denominator: InputMaybe<order_by>;
  royalty_points_numerator: InputMaybe<order_by>;
  supply: InputMaybe<order_by>;
  token_data_id_hash: InputMaybe<order_by>;
  uri_mutable: InputMaybe<order_by>;
};

/** select columns of table "current_token_datas" */
export enum current_token_datas_select_column {
  /** column name */
  collection_data_id_hash = "collection_data_id_hash",
  /** column name */
  collection_name = "collection_name",
  /** column name */
  creator_address = "creator_address",
  /** column name */
  default_properties = "default_properties",
  /** column name */
  description = "description",
  /** column name */
  description_mutable = "description_mutable",
  /** column name */
  largest_property_version = "largest_property_version",
  /** column name */
  last_transaction_timestamp = "last_transaction_timestamp",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  maximum = "maximum",
  /** column name */
  maximum_mutable = "maximum_mutable",
  /** column name */
  metadata_uri = "metadata_uri",
  /** column name */
  name = "name",
  /** column name */
  payee_address = "payee_address",
  /** column name */
  properties_mutable = "properties_mutable",
  /** column name */
  royalty_mutable = "royalty_mutable",
  /** column name */
  royalty_points_denominator = "royalty_points_denominator",
  /** column name */
  royalty_points_numerator = "royalty_points_numerator",
  /** column name */
  supply = "supply",
  /** column name */
  token_data_id_hash = "token_data_id_hash",
  /** column name */
  uri_mutable = "uri_mutable",
}

/** Streaming cursor of the table "current_token_datas" */
export type current_token_datas_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: current_token_datas_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type current_token_datas_stream_cursor_value_input = {
  collection_data_id_hash: InputMaybe<Scalars["String"]>;
  collection_name: InputMaybe<Scalars["String"]>;
  creator_address: InputMaybe<Scalars["String"]>;
  default_properties: InputMaybe<Scalars["jsonb"]>;
  description: InputMaybe<Scalars["String"]>;
  description_mutable: InputMaybe<Scalars["Boolean"]>;
  largest_property_version: InputMaybe<Scalars["numeric"]>;
  last_transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  last_transaction_version: InputMaybe<Scalars["bigint"]>;
  maximum: InputMaybe<Scalars["numeric"]>;
  maximum_mutable: InputMaybe<Scalars["Boolean"]>;
  metadata_uri: InputMaybe<Scalars["String"]>;
  name: InputMaybe<Scalars["String"]>;
  payee_address: InputMaybe<Scalars["String"]>;
  properties_mutable: InputMaybe<Scalars["Boolean"]>;
  royalty_mutable: InputMaybe<Scalars["Boolean"]>;
  royalty_points_denominator: InputMaybe<Scalars["numeric"]>;
  royalty_points_numerator: InputMaybe<Scalars["numeric"]>;
  supply: InputMaybe<Scalars["numeric"]>;
  token_data_id_hash: InputMaybe<Scalars["String"]>;
  uri_mutable: InputMaybe<Scalars["Boolean"]>;
};

/** columns and relationships of "current_token_datas_v2" */
export type current_token_datas_v2 = {
  __typename?: "current_token_datas_v2";
  /** An object relationship */
  aptos_name: Maybe<current_aptos_names>;
  /** An object relationship */
  cdn_asset_uris: Maybe<nft_metadata_crawler_parsed_asset_uris>;
  collection_id: Scalars["String"];
  /** An object relationship */
  current_collection: Maybe<current_collections_v2>;
  /** An object relationship */
  current_token_ownership: Maybe<current_token_ownerships_v2>;
  description: Scalars["String"];
  is_fungible_v2: Maybe<Scalars["Boolean"]>;
  largest_property_version_v1: Maybe<Scalars["numeric"]>;
  last_transaction_timestamp: Scalars["timestamp"];
  last_transaction_version: Scalars["bigint"];
  maximum: Maybe<Scalars["numeric"]>;
  supply: Scalars["numeric"];
  token_data_id: Scalars["String"];
  token_name: Scalars["String"];
  token_properties: Scalars["jsonb"];
  token_standard: Scalars["String"];
  token_uri: Scalars["String"];
};

/** columns and relationships of "current_token_datas_v2" */
export type current_token_datas_v2token_propertiesArgs = {
  path: InputMaybe<Scalars["String"]>;
};

/** Boolean expression to filter rows from the table "current_token_datas_v2". All fields are combined with a logical 'AND'. */
export type current_token_datas_v2_bool_exp = {
  _and: InputMaybe<Array<current_token_datas_v2_bool_exp>>;
  _not: InputMaybe<current_token_datas_v2_bool_exp>;
  _or: InputMaybe<Array<current_token_datas_v2_bool_exp>>;
  aptos_name: InputMaybe<current_aptos_names_bool_exp>;
  cdn_asset_uris: InputMaybe<nft_metadata_crawler_parsed_asset_uris_bool_exp>;
  collection_id: InputMaybe<String_comparison_exp>;
  current_collection: InputMaybe<current_collections_v2_bool_exp>;
  current_token_ownership: InputMaybe<current_token_ownerships_v2_bool_exp>;
  description: InputMaybe<String_comparison_exp>;
  is_fungible_v2: InputMaybe<Boolean_comparison_exp>;
  largest_property_version_v1: InputMaybe<numeric_comparison_exp>;
  last_transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  maximum: InputMaybe<numeric_comparison_exp>;
  supply: InputMaybe<numeric_comparison_exp>;
  token_data_id: InputMaybe<String_comparison_exp>;
  token_name: InputMaybe<String_comparison_exp>;
  token_properties: InputMaybe<jsonb_comparison_exp>;
  token_standard: InputMaybe<String_comparison_exp>;
  token_uri: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "current_token_datas_v2". */
export type current_token_datas_v2_order_by = {
  aptos_name: InputMaybe<current_aptos_names_order_by>;
  cdn_asset_uris: InputMaybe<nft_metadata_crawler_parsed_asset_uris_order_by>;
  collection_id: InputMaybe<order_by>;
  current_collection: InputMaybe<current_collections_v2_order_by>;
  current_token_ownership: InputMaybe<current_token_ownerships_v2_order_by>;
  description: InputMaybe<order_by>;
  is_fungible_v2: InputMaybe<order_by>;
  largest_property_version_v1: InputMaybe<order_by>;
  last_transaction_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  maximum: InputMaybe<order_by>;
  supply: InputMaybe<order_by>;
  token_data_id: InputMaybe<order_by>;
  token_name: InputMaybe<order_by>;
  token_properties: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
  token_uri: InputMaybe<order_by>;
};

/** select columns of table "current_token_datas_v2" */
export enum current_token_datas_v2_select_column {
  /** column name */
  collection_id = "collection_id",
  /** column name */
  description = "description",
  /** column name */
  is_fungible_v2 = "is_fungible_v2",
  /** column name */
  largest_property_version_v1 = "largest_property_version_v1",
  /** column name */
  last_transaction_timestamp = "last_transaction_timestamp",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  maximum = "maximum",
  /** column name */
  supply = "supply",
  /** column name */
  token_data_id = "token_data_id",
  /** column name */
  token_name = "token_name",
  /** column name */
  token_properties = "token_properties",
  /** column name */
  token_standard = "token_standard",
  /** column name */
  token_uri = "token_uri",
}

/** Streaming cursor of the table "current_token_datas_v2" */
export type current_token_datas_v2_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: current_token_datas_v2_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type current_token_datas_v2_stream_cursor_value_input = {
  collection_id: InputMaybe<Scalars["String"]>;
  description: InputMaybe<Scalars["String"]>;
  is_fungible_v2: InputMaybe<Scalars["Boolean"]>;
  largest_property_version_v1: InputMaybe<Scalars["numeric"]>;
  last_transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  last_transaction_version: InputMaybe<Scalars["bigint"]>;
  maximum: InputMaybe<Scalars["numeric"]>;
  supply: InputMaybe<Scalars["numeric"]>;
  token_data_id: InputMaybe<Scalars["String"]>;
  token_name: InputMaybe<Scalars["String"]>;
  token_properties: InputMaybe<Scalars["jsonb"]>;
  token_standard: InputMaybe<Scalars["String"]>;
  token_uri: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "current_token_ownerships" */
export type current_token_ownerships = {
  __typename?: "current_token_ownerships";
  amount: Scalars["numeric"];
  /** An object relationship */
  aptos_name: Maybe<current_aptos_names>;
  collection_data_id_hash: Scalars["String"];
  collection_name: Scalars["String"];
  creator_address: Scalars["String"];
  /** An object relationship */
  current_collection_data: Maybe<current_collection_datas>;
  /** An object relationship */
  current_token_data: Maybe<current_token_datas>;
  last_transaction_timestamp: Scalars["timestamp"];
  last_transaction_version: Scalars["bigint"];
  name: Scalars["String"];
  owner_address: Scalars["String"];
  property_version: Scalars["numeric"];
  table_type: Scalars["String"];
  token_data_id_hash: Scalars["String"];
  token_properties: Scalars["jsonb"];
};

/** columns and relationships of "current_token_ownerships" */
export type current_token_ownershipstoken_propertiesArgs = {
  path: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "current_token_ownerships" */
export type current_token_ownerships_aggregate = {
  __typename?: "current_token_ownerships_aggregate";
  aggregate: Maybe<current_token_ownerships_aggregate_fields>;
  nodes: Array<current_token_ownerships>;
};

export type current_token_ownerships_aggregate_bool_exp = {
  count: InputMaybe<current_token_ownerships_aggregate_bool_exp_count>;
};

export type current_token_ownerships_aggregate_bool_exp_count = {
  arguments: InputMaybe<Array<current_token_ownerships_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]>;
  filter: InputMaybe<current_token_ownerships_bool_exp>;
  predicate: Int_comparison_exp;
};

/** aggregate fields of "current_token_ownerships" */
export type current_token_ownerships_aggregate_fields = {
  __typename?: "current_token_ownerships_aggregate_fields";
  avg: Maybe<current_token_ownerships_avg_fields>;
  count: Scalars["Int"];
  max: Maybe<current_token_ownerships_max_fields>;
  min: Maybe<current_token_ownerships_min_fields>;
  stddev: Maybe<current_token_ownerships_stddev_fields>;
  stddev_pop: Maybe<current_token_ownerships_stddev_pop_fields>;
  stddev_samp: Maybe<current_token_ownerships_stddev_samp_fields>;
  sum: Maybe<current_token_ownerships_sum_fields>;
  var_pop: Maybe<current_token_ownerships_var_pop_fields>;
  var_samp: Maybe<current_token_ownerships_var_samp_fields>;
  variance: Maybe<current_token_ownerships_variance_fields>;
};

/** aggregate fields of "current_token_ownerships" */
export type current_token_ownerships_aggregate_fieldscountArgs = {
  columns: InputMaybe<Array<current_token_ownerships_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "current_token_ownerships" */
export type current_token_ownerships_aggregate_order_by = {
  avg: InputMaybe<current_token_ownerships_avg_order_by>;
  count: InputMaybe<order_by>;
  max: InputMaybe<current_token_ownerships_max_order_by>;
  min: InputMaybe<current_token_ownerships_min_order_by>;
  stddev: InputMaybe<current_token_ownerships_stddev_order_by>;
  stddev_pop: InputMaybe<current_token_ownerships_stddev_pop_order_by>;
  stddev_samp: InputMaybe<current_token_ownerships_stddev_samp_order_by>;
  sum: InputMaybe<current_token_ownerships_sum_order_by>;
  var_pop: InputMaybe<current_token_ownerships_var_pop_order_by>;
  var_samp: InputMaybe<current_token_ownerships_var_samp_order_by>;
  variance: InputMaybe<current_token_ownerships_variance_order_by>;
};

/** aggregate avg on columns */
export type current_token_ownerships_avg_fields = {
  __typename?: "current_token_ownerships_avg_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
  property_version: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "current_token_ownerships" */
export type current_token_ownerships_avg_order_by = {
  amount: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "current_token_ownerships". All fields are combined with a logical 'AND'. */
export type current_token_ownerships_bool_exp = {
  _and: InputMaybe<Array<current_token_ownerships_bool_exp>>;
  _not: InputMaybe<current_token_ownerships_bool_exp>;
  _or: InputMaybe<Array<current_token_ownerships_bool_exp>>;
  amount: InputMaybe<numeric_comparison_exp>;
  aptos_name: InputMaybe<current_aptos_names_bool_exp>;
  collection_data_id_hash: InputMaybe<String_comparison_exp>;
  collection_name: InputMaybe<String_comparison_exp>;
  creator_address: InputMaybe<String_comparison_exp>;
  current_collection_data: InputMaybe<current_collection_datas_bool_exp>;
  current_token_data: InputMaybe<current_token_datas_bool_exp>;
  last_transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  name: InputMaybe<String_comparison_exp>;
  owner_address: InputMaybe<String_comparison_exp>;
  property_version: InputMaybe<numeric_comparison_exp>;
  table_type: InputMaybe<String_comparison_exp>;
  token_data_id_hash: InputMaybe<String_comparison_exp>;
  token_properties: InputMaybe<jsonb_comparison_exp>;
};

/** aggregate max on columns */
export type current_token_ownerships_max_fields = {
  __typename?: "current_token_ownerships_max_fields";
  amount: Maybe<Scalars["numeric"]>;
  collection_data_id_hash: Maybe<Scalars["String"]>;
  collection_name: Maybe<Scalars["String"]>;
  creator_address: Maybe<Scalars["String"]>;
  last_transaction_timestamp: Maybe<Scalars["timestamp"]>;
  last_transaction_version: Maybe<Scalars["bigint"]>;
  name: Maybe<Scalars["String"]>;
  owner_address: Maybe<Scalars["String"]>;
  property_version: Maybe<Scalars["numeric"]>;
  table_type: Maybe<Scalars["String"]>;
  token_data_id_hash: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "current_token_ownerships" */
export type current_token_ownerships_max_order_by = {
  amount: InputMaybe<order_by>;
  collection_data_id_hash: InputMaybe<order_by>;
  collection_name: InputMaybe<order_by>;
  creator_address: InputMaybe<order_by>;
  last_transaction_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  name: InputMaybe<order_by>;
  owner_address: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
  table_type: InputMaybe<order_by>;
  token_data_id_hash: InputMaybe<order_by>;
};

/** aggregate min on columns */
export type current_token_ownerships_min_fields = {
  __typename?: "current_token_ownerships_min_fields";
  amount: Maybe<Scalars["numeric"]>;
  collection_data_id_hash: Maybe<Scalars["String"]>;
  collection_name: Maybe<Scalars["String"]>;
  creator_address: Maybe<Scalars["String"]>;
  last_transaction_timestamp: Maybe<Scalars["timestamp"]>;
  last_transaction_version: Maybe<Scalars["bigint"]>;
  name: Maybe<Scalars["String"]>;
  owner_address: Maybe<Scalars["String"]>;
  property_version: Maybe<Scalars["numeric"]>;
  table_type: Maybe<Scalars["String"]>;
  token_data_id_hash: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "current_token_ownerships" */
export type current_token_ownerships_min_order_by = {
  amount: InputMaybe<order_by>;
  collection_data_id_hash: InputMaybe<order_by>;
  collection_name: InputMaybe<order_by>;
  creator_address: InputMaybe<order_by>;
  last_transaction_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  name: InputMaybe<order_by>;
  owner_address: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
  table_type: InputMaybe<order_by>;
  token_data_id_hash: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "current_token_ownerships". */
export type current_token_ownerships_order_by = {
  amount: InputMaybe<order_by>;
  aptos_name: InputMaybe<current_aptos_names_order_by>;
  collection_data_id_hash: InputMaybe<order_by>;
  collection_name: InputMaybe<order_by>;
  creator_address: InputMaybe<order_by>;
  current_collection_data: InputMaybe<current_collection_datas_order_by>;
  current_token_data: InputMaybe<current_token_datas_order_by>;
  last_transaction_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  name: InputMaybe<order_by>;
  owner_address: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
  table_type: InputMaybe<order_by>;
  token_data_id_hash: InputMaybe<order_by>;
  token_properties: InputMaybe<order_by>;
};

/** select columns of table "current_token_ownerships" */
export enum current_token_ownerships_select_column {
  /** column name */
  amount = "amount",
  /** column name */
  collection_data_id_hash = "collection_data_id_hash",
  /** column name */
  collection_name = "collection_name",
  /** column name */
  creator_address = "creator_address",
  /** column name */
  last_transaction_timestamp = "last_transaction_timestamp",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  name = "name",
  /** column name */
  owner_address = "owner_address",
  /** column name */
  property_version = "property_version",
  /** column name */
  table_type = "table_type",
  /** column name */
  token_data_id_hash = "token_data_id_hash",
  /** column name */
  token_properties = "token_properties",
}

/** aggregate stddev on columns */
export type current_token_ownerships_stddev_fields = {
  __typename?: "current_token_ownerships_stddev_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
  property_version: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "current_token_ownerships" */
export type current_token_ownerships_stddev_order_by = {
  amount: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
};

/** aggregate stddev_pop on columns */
export type current_token_ownerships_stddev_pop_fields = {
  __typename?: "current_token_ownerships_stddev_pop_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
  property_version: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "current_token_ownerships" */
export type current_token_ownerships_stddev_pop_order_by = {
  amount: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
};

/** aggregate stddev_samp on columns */
export type current_token_ownerships_stddev_samp_fields = {
  __typename?: "current_token_ownerships_stddev_samp_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
  property_version: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "current_token_ownerships" */
export type current_token_ownerships_stddev_samp_order_by = {
  amount: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
};

/** Streaming cursor of the table "current_token_ownerships" */
export type current_token_ownerships_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: current_token_ownerships_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type current_token_ownerships_stream_cursor_value_input = {
  amount: InputMaybe<Scalars["numeric"]>;
  collection_data_id_hash: InputMaybe<Scalars["String"]>;
  collection_name: InputMaybe<Scalars["String"]>;
  creator_address: InputMaybe<Scalars["String"]>;
  last_transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  last_transaction_version: InputMaybe<Scalars["bigint"]>;
  name: InputMaybe<Scalars["String"]>;
  owner_address: InputMaybe<Scalars["String"]>;
  property_version: InputMaybe<Scalars["numeric"]>;
  table_type: InputMaybe<Scalars["String"]>;
  token_data_id_hash: InputMaybe<Scalars["String"]>;
  token_properties: InputMaybe<Scalars["jsonb"]>;
};

/** aggregate sum on columns */
export type current_token_ownerships_sum_fields = {
  __typename?: "current_token_ownerships_sum_fields";
  amount: Maybe<Scalars["numeric"]>;
  last_transaction_version: Maybe<Scalars["bigint"]>;
  property_version: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "current_token_ownerships" */
export type current_token_ownerships_sum_order_by = {
  amount: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
};

/** columns and relationships of "current_token_ownerships_v2" */
export type current_token_ownerships_v2 = {
  __typename?: "current_token_ownerships_v2";
  amount: Scalars["numeric"];
  /** An array relationship */
  composed_nfts: Array<current_token_ownerships_v2>;
  /** An aggregate relationship */
  composed_nfts_aggregate: current_token_ownerships_v2_aggregate;
  /** An object relationship */
  current_token_data: Maybe<current_token_datas_v2>;
  is_fungible_v2: Maybe<Scalars["Boolean"]>;
  is_soulbound_v2: Maybe<Scalars["Boolean"]>;
  last_transaction_timestamp: Scalars["timestamp"];
  last_transaction_version: Scalars["bigint"];
  owner_address: Scalars["String"];
  property_version_v1: Scalars["numeric"];
  storage_id: Scalars["String"];
  table_type_v1: Maybe<Scalars["String"]>;
  token_data_id: Scalars["String"];
  token_properties_mutated_v1: Maybe<Scalars["jsonb"]>;
  token_standard: Scalars["String"];
};

/** columns and relationships of "current_token_ownerships_v2" */
export type current_token_ownerships_v2composed_nftsArgs = {
  distinct_on: InputMaybe<Array<current_token_ownerships_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_token_ownerships_v2_order_by>>;
  where: InputMaybe<current_token_ownerships_v2_bool_exp>;
};

/** columns and relationships of "current_token_ownerships_v2" */
export type current_token_ownerships_v2composed_nfts_aggregateArgs = {
  distinct_on: InputMaybe<Array<current_token_ownerships_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_token_ownerships_v2_order_by>>;
  where: InputMaybe<current_token_ownerships_v2_bool_exp>;
};

/** columns and relationships of "current_token_ownerships_v2" */
export type current_token_ownerships_v2token_properties_mutated_v1Args = {
  path: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "current_token_ownerships_v2" */
export type current_token_ownerships_v2_aggregate = {
  __typename?: "current_token_ownerships_v2_aggregate";
  aggregate: Maybe<current_token_ownerships_v2_aggregate_fields>;
  nodes: Array<current_token_ownerships_v2>;
};

export type current_token_ownerships_v2_aggregate_bool_exp = {
  bool_and: InputMaybe<current_token_ownerships_v2_aggregate_bool_exp_bool_and>;
  bool_or: InputMaybe<current_token_ownerships_v2_aggregate_bool_exp_bool_or>;
  count: InputMaybe<current_token_ownerships_v2_aggregate_bool_exp_count>;
};

export type current_token_ownerships_v2_aggregate_bool_exp_bool_and = {
  arguments: current_token_ownerships_v2_select_column_current_token_ownerships_v2_aggregate_bool_exp_bool_and_arguments_columns;
  distinct: InputMaybe<Scalars["Boolean"]>;
  filter: InputMaybe<current_token_ownerships_v2_bool_exp>;
  predicate: Boolean_comparison_exp;
};

export type current_token_ownerships_v2_aggregate_bool_exp_bool_or = {
  arguments: current_token_ownerships_v2_select_column_current_token_ownerships_v2_aggregate_bool_exp_bool_or_arguments_columns;
  distinct: InputMaybe<Scalars["Boolean"]>;
  filter: InputMaybe<current_token_ownerships_v2_bool_exp>;
  predicate: Boolean_comparison_exp;
};

export type current_token_ownerships_v2_aggregate_bool_exp_count = {
  arguments: InputMaybe<Array<current_token_ownerships_v2_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]>;
  filter: InputMaybe<current_token_ownerships_v2_bool_exp>;
  predicate: Int_comparison_exp;
};

/** aggregate fields of "current_token_ownerships_v2" */
export type current_token_ownerships_v2_aggregate_fields = {
  __typename?: "current_token_ownerships_v2_aggregate_fields";
  avg: Maybe<current_token_ownerships_v2_avg_fields>;
  count: Scalars["Int"];
  max: Maybe<current_token_ownerships_v2_max_fields>;
  min: Maybe<current_token_ownerships_v2_min_fields>;
  stddev: Maybe<current_token_ownerships_v2_stddev_fields>;
  stddev_pop: Maybe<current_token_ownerships_v2_stddev_pop_fields>;
  stddev_samp: Maybe<current_token_ownerships_v2_stddev_samp_fields>;
  sum: Maybe<current_token_ownerships_v2_sum_fields>;
  var_pop: Maybe<current_token_ownerships_v2_var_pop_fields>;
  var_samp: Maybe<current_token_ownerships_v2_var_samp_fields>;
  variance: Maybe<current_token_ownerships_v2_variance_fields>;
};

/** aggregate fields of "current_token_ownerships_v2" */
export type current_token_ownerships_v2_aggregate_fieldscountArgs = {
  columns: InputMaybe<Array<current_token_ownerships_v2_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "current_token_ownerships_v2" */
export type current_token_ownerships_v2_aggregate_order_by = {
  avg: InputMaybe<current_token_ownerships_v2_avg_order_by>;
  count: InputMaybe<order_by>;
  max: InputMaybe<current_token_ownerships_v2_max_order_by>;
  min: InputMaybe<current_token_ownerships_v2_min_order_by>;
  stddev: InputMaybe<current_token_ownerships_v2_stddev_order_by>;
  stddev_pop: InputMaybe<current_token_ownerships_v2_stddev_pop_order_by>;
  stddev_samp: InputMaybe<current_token_ownerships_v2_stddev_samp_order_by>;
  sum: InputMaybe<current_token_ownerships_v2_sum_order_by>;
  var_pop: InputMaybe<current_token_ownerships_v2_var_pop_order_by>;
  var_samp: InputMaybe<current_token_ownerships_v2_var_samp_order_by>;
  variance: InputMaybe<current_token_ownerships_v2_variance_order_by>;
};

/** aggregate avg on columns */
export type current_token_ownerships_v2_avg_fields = {
  __typename?: "current_token_ownerships_v2_avg_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
  property_version_v1: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "current_token_ownerships_v2" */
export type current_token_ownerships_v2_avg_order_by = {
  amount: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "current_token_ownerships_v2". All fields are combined with a logical 'AND'. */
export type current_token_ownerships_v2_bool_exp = {
  _and: InputMaybe<Array<current_token_ownerships_v2_bool_exp>>;
  _not: InputMaybe<current_token_ownerships_v2_bool_exp>;
  _or: InputMaybe<Array<current_token_ownerships_v2_bool_exp>>;
  amount: InputMaybe<numeric_comparison_exp>;
  composed_nfts: InputMaybe<current_token_ownerships_v2_bool_exp>;
  composed_nfts_aggregate: InputMaybe<current_token_ownerships_v2_aggregate_bool_exp>;
  current_token_data: InputMaybe<current_token_datas_v2_bool_exp>;
  is_fungible_v2: InputMaybe<Boolean_comparison_exp>;
  is_soulbound_v2: InputMaybe<Boolean_comparison_exp>;
  last_transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  owner_address: InputMaybe<String_comparison_exp>;
  property_version_v1: InputMaybe<numeric_comparison_exp>;
  storage_id: InputMaybe<String_comparison_exp>;
  table_type_v1: InputMaybe<String_comparison_exp>;
  token_data_id: InputMaybe<String_comparison_exp>;
  token_properties_mutated_v1: InputMaybe<jsonb_comparison_exp>;
  token_standard: InputMaybe<String_comparison_exp>;
};

/** aggregate max on columns */
export type current_token_ownerships_v2_max_fields = {
  __typename?: "current_token_ownerships_v2_max_fields";
  amount: Maybe<Scalars["numeric"]>;
  last_transaction_timestamp: Maybe<Scalars["timestamp"]>;
  last_transaction_version: Maybe<Scalars["bigint"]>;
  owner_address: Maybe<Scalars["String"]>;
  property_version_v1: Maybe<Scalars["numeric"]>;
  storage_id: Maybe<Scalars["String"]>;
  table_type_v1: Maybe<Scalars["String"]>;
  token_data_id: Maybe<Scalars["String"]>;
  token_standard: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "current_token_ownerships_v2" */
export type current_token_ownerships_v2_max_order_by = {
  amount: InputMaybe<order_by>;
  last_transaction_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  owner_address: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
  storage_id: InputMaybe<order_by>;
  table_type_v1: InputMaybe<order_by>;
  token_data_id: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
};

/** aggregate min on columns */
export type current_token_ownerships_v2_min_fields = {
  __typename?: "current_token_ownerships_v2_min_fields";
  amount: Maybe<Scalars["numeric"]>;
  last_transaction_timestamp: Maybe<Scalars["timestamp"]>;
  last_transaction_version: Maybe<Scalars["bigint"]>;
  owner_address: Maybe<Scalars["String"]>;
  property_version_v1: Maybe<Scalars["numeric"]>;
  storage_id: Maybe<Scalars["String"]>;
  table_type_v1: Maybe<Scalars["String"]>;
  token_data_id: Maybe<Scalars["String"]>;
  token_standard: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "current_token_ownerships_v2" */
export type current_token_ownerships_v2_min_order_by = {
  amount: InputMaybe<order_by>;
  last_transaction_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  owner_address: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
  storage_id: InputMaybe<order_by>;
  table_type_v1: InputMaybe<order_by>;
  token_data_id: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "current_token_ownerships_v2". */
export type current_token_ownerships_v2_order_by = {
  amount: InputMaybe<order_by>;
  composed_nfts_aggregate: InputMaybe<current_token_ownerships_v2_aggregate_order_by>;
  current_token_data: InputMaybe<current_token_datas_v2_order_by>;
  is_fungible_v2: InputMaybe<order_by>;
  is_soulbound_v2: InputMaybe<order_by>;
  last_transaction_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  owner_address: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
  storage_id: InputMaybe<order_by>;
  table_type_v1: InputMaybe<order_by>;
  token_data_id: InputMaybe<order_by>;
  token_properties_mutated_v1: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
};

/** select columns of table "current_token_ownerships_v2" */
export enum current_token_ownerships_v2_select_column {
  /** column name */
  amount = "amount",
  /** column name */
  is_fungible_v2 = "is_fungible_v2",
  /** column name */
  is_soulbound_v2 = "is_soulbound_v2",
  /** column name */
  last_transaction_timestamp = "last_transaction_timestamp",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  owner_address = "owner_address",
  /** column name */
  property_version_v1 = "property_version_v1",
  /** column name */
  storage_id = "storage_id",
  /** column name */
  table_type_v1 = "table_type_v1",
  /** column name */
  token_data_id = "token_data_id",
  /** column name */
  token_properties_mutated_v1 = "token_properties_mutated_v1",
  /** column name */
  token_standard = "token_standard",
}

/** select "current_token_ownerships_v2_aggregate_bool_exp_bool_and_arguments_columns" columns of table "current_token_ownerships_v2" */
export enum current_token_ownerships_v2_select_column_current_token_ownerships_v2_aggregate_bool_exp_bool_and_arguments_columns {
  /** column name */
  is_fungible_v2 = "is_fungible_v2",
  /** column name */
  is_soulbound_v2 = "is_soulbound_v2",
}

/** select "current_token_ownerships_v2_aggregate_bool_exp_bool_or_arguments_columns" columns of table "current_token_ownerships_v2" */
export enum current_token_ownerships_v2_select_column_current_token_ownerships_v2_aggregate_bool_exp_bool_or_arguments_columns {
  /** column name */
  is_fungible_v2 = "is_fungible_v2",
  /** column name */
  is_soulbound_v2 = "is_soulbound_v2",
}

/** aggregate stddev on columns */
export type current_token_ownerships_v2_stddev_fields = {
  __typename?: "current_token_ownerships_v2_stddev_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
  property_version_v1: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "current_token_ownerships_v2" */
export type current_token_ownerships_v2_stddev_order_by = {
  amount: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
};

/** aggregate stddev_pop on columns */
export type current_token_ownerships_v2_stddev_pop_fields = {
  __typename?: "current_token_ownerships_v2_stddev_pop_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
  property_version_v1: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "current_token_ownerships_v2" */
export type current_token_ownerships_v2_stddev_pop_order_by = {
  amount: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
};

/** aggregate stddev_samp on columns */
export type current_token_ownerships_v2_stddev_samp_fields = {
  __typename?: "current_token_ownerships_v2_stddev_samp_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
  property_version_v1: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "current_token_ownerships_v2" */
export type current_token_ownerships_v2_stddev_samp_order_by = {
  amount: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
};

/** Streaming cursor of the table "current_token_ownerships_v2" */
export type current_token_ownerships_v2_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: current_token_ownerships_v2_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type current_token_ownerships_v2_stream_cursor_value_input = {
  amount: InputMaybe<Scalars["numeric"]>;
  is_fungible_v2: InputMaybe<Scalars["Boolean"]>;
  is_soulbound_v2: InputMaybe<Scalars["Boolean"]>;
  last_transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  last_transaction_version: InputMaybe<Scalars["bigint"]>;
  owner_address: InputMaybe<Scalars["String"]>;
  property_version_v1: InputMaybe<Scalars["numeric"]>;
  storage_id: InputMaybe<Scalars["String"]>;
  table_type_v1: InputMaybe<Scalars["String"]>;
  token_data_id: InputMaybe<Scalars["String"]>;
  token_properties_mutated_v1: InputMaybe<Scalars["jsonb"]>;
  token_standard: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type current_token_ownerships_v2_sum_fields = {
  __typename?: "current_token_ownerships_v2_sum_fields";
  amount: Maybe<Scalars["numeric"]>;
  last_transaction_version: Maybe<Scalars["bigint"]>;
  property_version_v1: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "current_token_ownerships_v2" */
export type current_token_ownerships_v2_sum_order_by = {
  amount: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
};

/** aggregate var_pop on columns */
export type current_token_ownerships_v2_var_pop_fields = {
  __typename?: "current_token_ownerships_v2_var_pop_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
  property_version_v1: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "current_token_ownerships_v2" */
export type current_token_ownerships_v2_var_pop_order_by = {
  amount: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
};

/** aggregate var_samp on columns */
export type current_token_ownerships_v2_var_samp_fields = {
  __typename?: "current_token_ownerships_v2_var_samp_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
  property_version_v1: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "current_token_ownerships_v2" */
export type current_token_ownerships_v2_var_samp_order_by = {
  amount: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
};

/** aggregate variance on columns */
export type current_token_ownerships_v2_variance_fields = {
  __typename?: "current_token_ownerships_v2_variance_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
  property_version_v1: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "current_token_ownerships_v2" */
export type current_token_ownerships_v2_variance_order_by = {
  amount: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
};

/** aggregate var_pop on columns */
export type current_token_ownerships_var_pop_fields = {
  __typename?: "current_token_ownerships_var_pop_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
  property_version: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "current_token_ownerships" */
export type current_token_ownerships_var_pop_order_by = {
  amount: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
};

/** aggregate var_samp on columns */
export type current_token_ownerships_var_samp_fields = {
  __typename?: "current_token_ownerships_var_samp_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
  property_version: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "current_token_ownerships" */
export type current_token_ownerships_var_samp_order_by = {
  amount: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
};

/** aggregate variance on columns */
export type current_token_ownerships_variance_fields = {
  __typename?: "current_token_ownerships_variance_fields";
  amount: Maybe<Scalars["Float"]>;
  last_transaction_version: Maybe<Scalars["Float"]>;
  property_version: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "current_token_ownerships" */
export type current_token_ownerships_variance_order_by = {
  amount: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
};

/** columns and relationships of "current_token_pending_claims" */
export type current_token_pending_claims = {
  __typename?: "current_token_pending_claims";
  amount: Scalars["numeric"];
  collection_data_id_hash: Scalars["String"];
  collection_id: Scalars["String"];
  collection_name: Scalars["String"];
  creator_address: Scalars["String"];
  /** An object relationship */
  current_collection_data: Maybe<current_collection_datas>;
  /** An object relationship */
  current_collection_v2: Maybe<current_collections_v2>;
  /** An object relationship */
  current_token_data: Maybe<current_token_datas>;
  /** An object relationship */
  current_token_data_v2: Maybe<current_token_datas_v2>;
  from_address: Scalars["String"];
  last_transaction_timestamp: Scalars["timestamp"];
  last_transaction_version: Scalars["bigint"];
  name: Scalars["String"];
  property_version: Scalars["numeric"];
  table_handle: Scalars["String"];
  to_address: Scalars["String"];
  /** An object relationship */
  token: Maybe<tokens>;
  token_data_id: Scalars["String"];
  token_data_id_hash: Scalars["String"];
};

/** Boolean expression to filter rows from the table "current_token_pending_claims". All fields are combined with a logical 'AND'. */
export type current_token_pending_claims_bool_exp = {
  _and: InputMaybe<Array<current_token_pending_claims_bool_exp>>;
  _not: InputMaybe<current_token_pending_claims_bool_exp>;
  _or: InputMaybe<Array<current_token_pending_claims_bool_exp>>;
  amount: InputMaybe<numeric_comparison_exp>;
  collection_data_id_hash: InputMaybe<String_comparison_exp>;
  collection_id: InputMaybe<String_comparison_exp>;
  collection_name: InputMaybe<String_comparison_exp>;
  creator_address: InputMaybe<String_comparison_exp>;
  current_collection_data: InputMaybe<current_collection_datas_bool_exp>;
  current_collection_v2: InputMaybe<current_collections_v2_bool_exp>;
  current_token_data: InputMaybe<current_token_datas_bool_exp>;
  current_token_data_v2: InputMaybe<current_token_datas_v2_bool_exp>;
  from_address: InputMaybe<String_comparison_exp>;
  last_transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  name: InputMaybe<String_comparison_exp>;
  property_version: InputMaybe<numeric_comparison_exp>;
  table_handle: InputMaybe<String_comparison_exp>;
  to_address: InputMaybe<String_comparison_exp>;
  token: InputMaybe<tokens_bool_exp>;
  token_data_id: InputMaybe<String_comparison_exp>;
  token_data_id_hash: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "current_token_pending_claims". */
export type current_token_pending_claims_order_by = {
  amount: InputMaybe<order_by>;
  collection_data_id_hash: InputMaybe<order_by>;
  collection_id: InputMaybe<order_by>;
  collection_name: InputMaybe<order_by>;
  creator_address: InputMaybe<order_by>;
  current_collection_data: InputMaybe<current_collection_datas_order_by>;
  current_collection_v2: InputMaybe<current_collections_v2_order_by>;
  current_token_data: InputMaybe<current_token_datas_order_by>;
  current_token_data_v2: InputMaybe<current_token_datas_v2_order_by>;
  from_address: InputMaybe<order_by>;
  last_transaction_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  name: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
  table_handle: InputMaybe<order_by>;
  to_address: InputMaybe<order_by>;
  token: InputMaybe<tokens_order_by>;
  token_data_id: InputMaybe<order_by>;
  token_data_id_hash: InputMaybe<order_by>;
};

/** select columns of table "current_token_pending_claims" */
export enum current_token_pending_claims_select_column {
  /** column name */
  amount = "amount",
  /** column name */
  collection_data_id_hash = "collection_data_id_hash",
  /** column name */
  collection_id = "collection_id",
  /** column name */
  collection_name = "collection_name",
  /** column name */
  creator_address = "creator_address",
  /** column name */
  from_address = "from_address",
  /** column name */
  last_transaction_timestamp = "last_transaction_timestamp",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  name = "name",
  /** column name */
  property_version = "property_version",
  /** column name */
  table_handle = "table_handle",
  /** column name */
  to_address = "to_address",
  /** column name */
  token_data_id = "token_data_id",
  /** column name */
  token_data_id_hash = "token_data_id_hash",
}

/** Streaming cursor of the table "current_token_pending_claims" */
export type current_token_pending_claims_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: current_token_pending_claims_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type current_token_pending_claims_stream_cursor_value_input = {
  amount: InputMaybe<Scalars["numeric"]>;
  collection_data_id_hash: InputMaybe<Scalars["String"]>;
  collection_id: InputMaybe<Scalars["String"]>;
  collection_name: InputMaybe<Scalars["String"]>;
  creator_address: InputMaybe<Scalars["String"]>;
  from_address: InputMaybe<Scalars["String"]>;
  last_transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  last_transaction_version: InputMaybe<Scalars["bigint"]>;
  name: InputMaybe<Scalars["String"]>;
  property_version: InputMaybe<Scalars["numeric"]>;
  table_handle: InputMaybe<Scalars["String"]>;
  to_address: InputMaybe<Scalars["String"]>;
  token_data_id: InputMaybe<Scalars["String"]>;
  token_data_id_hash: InputMaybe<Scalars["String"]>;
};

/** ordering argument of a cursor */
export enum cursor_ordering {
  /** ascending ordering of the cursor */
  ASC = "ASC",
  /** descending ordering of the cursor */
  DESC = "DESC",
}

/** columns and relationships of "delegated_staking_activities" */
export type delegated_staking_activities = {
  __typename?: "delegated_staking_activities";
  amount: Scalars["numeric"];
  delegator_address: Scalars["String"];
  event_index: Scalars["bigint"];
  event_type: Scalars["String"];
  pool_address: Scalars["String"];
  transaction_version: Scalars["bigint"];
};

/** order by aggregate values of table "delegated_staking_activities" */
export type delegated_staking_activities_aggregate_order_by = {
  avg: InputMaybe<delegated_staking_activities_avg_order_by>;
  count: InputMaybe<order_by>;
  max: InputMaybe<delegated_staking_activities_max_order_by>;
  min: InputMaybe<delegated_staking_activities_min_order_by>;
  stddev: InputMaybe<delegated_staking_activities_stddev_order_by>;
  stddev_pop: InputMaybe<delegated_staking_activities_stddev_pop_order_by>;
  stddev_samp: InputMaybe<delegated_staking_activities_stddev_samp_order_by>;
  sum: InputMaybe<delegated_staking_activities_sum_order_by>;
  var_pop: InputMaybe<delegated_staking_activities_var_pop_order_by>;
  var_samp: InputMaybe<delegated_staking_activities_var_samp_order_by>;
  variance: InputMaybe<delegated_staking_activities_variance_order_by>;
};

/** order by avg() on columns of table "delegated_staking_activities" */
export type delegated_staking_activities_avg_order_by = {
  amount: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "delegated_staking_activities". All fields are combined with a logical 'AND'. */
export type delegated_staking_activities_bool_exp = {
  _and: InputMaybe<Array<delegated_staking_activities_bool_exp>>;
  _not: InputMaybe<delegated_staking_activities_bool_exp>;
  _or: InputMaybe<Array<delegated_staking_activities_bool_exp>>;
  amount: InputMaybe<numeric_comparison_exp>;
  delegator_address: InputMaybe<String_comparison_exp>;
  event_index: InputMaybe<bigint_comparison_exp>;
  event_type: InputMaybe<String_comparison_exp>;
  pool_address: InputMaybe<String_comparison_exp>;
  transaction_version: InputMaybe<bigint_comparison_exp>;
};

/** order by max() on columns of table "delegated_staking_activities" */
export type delegated_staking_activities_max_order_by = {
  amount: InputMaybe<order_by>;
  delegator_address: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_type: InputMaybe<order_by>;
  pool_address: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** order by min() on columns of table "delegated_staking_activities" */
export type delegated_staking_activities_min_order_by = {
  amount: InputMaybe<order_by>;
  delegator_address: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_type: InputMaybe<order_by>;
  pool_address: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "delegated_staking_activities". */
export type delegated_staking_activities_order_by = {
  amount: InputMaybe<order_by>;
  delegator_address: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_type: InputMaybe<order_by>;
  pool_address: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** select columns of table "delegated_staking_activities" */
export enum delegated_staking_activities_select_column {
  /** column name */
  amount = "amount",
  /** column name */
  delegator_address = "delegator_address",
  /** column name */
  event_index = "event_index",
  /** column name */
  event_type = "event_type",
  /** column name */
  pool_address = "pool_address",
  /** column name */
  transaction_version = "transaction_version",
}

/** order by stddev() on columns of table "delegated_staking_activities" */
export type delegated_staking_activities_stddev_order_by = {
  amount: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** order by stddev_pop() on columns of table "delegated_staking_activities" */
export type delegated_staking_activities_stddev_pop_order_by = {
  amount: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** order by stddev_samp() on columns of table "delegated_staking_activities" */
export type delegated_staking_activities_stddev_samp_order_by = {
  amount: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** Streaming cursor of the table "delegated_staking_activities" */
export type delegated_staking_activities_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: delegated_staking_activities_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type delegated_staking_activities_stream_cursor_value_input = {
  amount: InputMaybe<Scalars["numeric"]>;
  delegator_address: InputMaybe<Scalars["String"]>;
  event_index: InputMaybe<Scalars["bigint"]>;
  event_type: InputMaybe<Scalars["String"]>;
  pool_address: InputMaybe<Scalars["String"]>;
  transaction_version: InputMaybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "delegated_staking_activities" */
export type delegated_staking_activities_sum_order_by = {
  amount: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** order by var_pop() on columns of table "delegated_staking_activities" */
export type delegated_staking_activities_var_pop_order_by = {
  amount: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** order by var_samp() on columns of table "delegated_staking_activities" */
export type delegated_staking_activities_var_samp_order_by = {
  amount: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** order by variance() on columns of table "delegated_staking_activities" */
export type delegated_staking_activities_variance_order_by = {
  amount: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** columns and relationships of "delegated_staking_pools" */
export type delegated_staking_pools = {
  __typename?: "delegated_staking_pools";
  /** An object relationship */
  current_staking_pool: Maybe<current_staking_pool_voter>;
  first_transaction_version: Scalars["bigint"];
  staking_pool_address: Scalars["String"];
};

/** Boolean expression to filter rows from the table "delegated_staking_pools". All fields are combined with a logical 'AND'. */
export type delegated_staking_pools_bool_exp = {
  _and: InputMaybe<Array<delegated_staking_pools_bool_exp>>;
  _not: InputMaybe<delegated_staking_pools_bool_exp>;
  _or: InputMaybe<Array<delegated_staking_pools_bool_exp>>;
  current_staking_pool: InputMaybe<current_staking_pool_voter_bool_exp>;
  first_transaction_version: InputMaybe<bigint_comparison_exp>;
  staking_pool_address: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "delegated_staking_pools". */
export type delegated_staking_pools_order_by = {
  current_staking_pool: InputMaybe<current_staking_pool_voter_order_by>;
  first_transaction_version: InputMaybe<order_by>;
  staking_pool_address: InputMaybe<order_by>;
};

/** select columns of table "delegated_staking_pools" */
export enum delegated_staking_pools_select_column {
  /** column name */
  first_transaction_version = "first_transaction_version",
  /** column name */
  staking_pool_address = "staking_pool_address",
}

/** Streaming cursor of the table "delegated_staking_pools" */
export type delegated_staking_pools_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: delegated_staking_pools_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type delegated_staking_pools_stream_cursor_value_input = {
  first_transaction_version: InputMaybe<Scalars["bigint"]>;
  staking_pool_address: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "delegator_distinct_pool" */
export type delegator_distinct_pool = {
  __typename?: "delegator_distinct_pool";
  /** An object relationship */
  current_pool_balance: Maybe<current_delegated_staking_pool_balances>;
  delegator_address: Maybe<Scalars["String"]>;
  pool_address: Maybe<Scalars["String"]>;
  /** An object relationship */
  staking_pool_metadata: Maybe<current_staking_pool_voter>;
};

/** aggregated selection of "delegator_distinct_pool" */
export type delegator_distinct_pool_aggregate = {
  __typename?: "delegator_distinct_pool_aggregate";
  aggregate: Maybe<delegator_distinct_pool_aggregate_fields>;
  nodes: Array<delegator_distinct_pool>;
};

/** aggregate fields of "delegator_distinct_pool" */
export type delegator_distinct_pool_aggregate_fields = {
  __typename?: "delegator_distinct_pool_aggregate_fields";
  count: Scalars["Int"];
  max: Maybe<delegator_distinct_pool_max_fields>;
  min: Maybe<delegator_distinct_pool_min_fields>;
};

/** aggregate fields of "delegator_distinct_pool" */
export type delegator_distinct_pool_aggregate_fieldscountArgs = {
  columns: InputMaybe<Array<delegator_distinct_pool_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "delegator_distinct_pool". All fields are combined with a logical 'AND'. */
export type delegator_distinct_pool_bool_exp = {
  _and: InputMaybe<Array<delegator_distinct_pool_bool_exp>>;
  _not: InputMaybe<delegator_distinct_pool_bool_exp>;
  _or: InputMaybe<Array<delegator_distinct_pool_bool_exp>>;
  current_pool_balance: InputMaybe<current_delegated_staking_pool_balances_bool_exp>;
  delegator_address: InputMaybe<String_comparison_exp>;
  pool_address: InputMaybe<String_comparison_exp>;
  staking_pool_metadata: InputMaybe<current_staking_pool_voter_bool_exp>;
};

/** aggregate max on columns */
export type delegator_distinct_pool_max_fields = {
  __typename?: "delegator_distinct_pool_max_fields";
  delegator_address: Maybe<Scalars["String"]>;
  pool_address: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type delegator_distinct_pool_min_fields = {
  __typename?: "delegator_distinct_pool_min_fields";
  delegator_address: Maybe<Scalars["String"]>;
  pool_address: Maybe<Scalars["String"]>;
};

/** Ordering options when selecting data from "delegator_distinct_pool". */
export type delegator_distinct_pool_order_by = {
  current_pool_balance: InputMaybe<current_delegated_staking_pool_balances_order_by>;
  delegator_address: InputMaybe<order_by>;
  pool_address: InputMaybe<order_by>;
  staking_pool_metadata: InputMaybe<current_staking_pool_voter_order_by>;
};

/** select columns of table "delegator_distinct_pool" */
export enum delegator_distinct_pool_select_column {
  /** column name */
  delegator_address = "delegator_address",
  /** column name */
  pool_address = "pool_address",
}

/** Streaming cursor of the table "delegator_distinct_pool" */
export type delegator_distinct_pool_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: delegator_distinct_pool_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type delegator_distinct_pool_stream_cursor_value_input = {
  delegator_address: InputMaybe<Scalars["String"]>;
  pool_address: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "events" */
export type events = {
  __typename?: "events";
  account_address: Scalars["String"];
  creation_number: Scalars["bigint"];
  data: Scalars["jsonb"];
  event_index: Scalars["bigint"];
  indexed_type: Scalars["String"];
  sequence_number: Scalars["bigint"];
  transaction_block_height: Scalars["bigint"];
  transaction_version: Scalars["bigint"];
  type: Scalars["String"];
};

/** columns and relationships of "events" */
export type eventsdataArgs = {
  path: InputMaybe<Scalars["String"]>;
};

/** Boolean expression to filter rows from the table "events". All fields are combined with a logical 'AND'. */
export type events_bool_exp = {
  _and: InputMaybe<Array<events_bool_exp>>;
  _not: InputMaybe<events_bool_exp>;
  _or: InputMaybe<Array<events_bool_exp>>;
  account_address: InputMaybe<String_comparison_exp>;
  creation_number: InputMaybe<bigint_comparison_exp>;
  data: InputMaybe<jsonb_comparison_exp>;
  event_index: InputMaybe<bigint_comparison_exp>;
  indexed_type: InputMaybe<String_comparison_exp>;
  sequence_number: InputMaybe<bigint_comparison_exp>;
  transaction_block_height: InputMaybe<bigint_comparison_exp>;
  transaction_version: InputMaybe<bigint_comparison_exp>;
  type: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "events". */
export type events_order_by = {
  account_address: InputMaybe<order_by>;
  creation_number: InputMaybe<order_by>;
  data: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  indexed_type: InputMaybe<order_by>;
  sequence_number: InputMaybe<order_by>;
  transaction_block_height: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
  type: InputMaybe<order_by>;
};

/** select columns of table "events" */
export enum events_select_column {
  /** column name */
  account_address = "account_address",
  /** column name */
  creation_number = "creation_number",
  /** column name */
  data = "data",
  /** column name */
  event_index = "event_index",
  /** column name */
  indexed_type = "indexed_type",
  /** column name */
  sequence_number = "sequence_number",
  /** column name */
  transaction_block_height = "transaction_block_height",
  /** column name */
  transaction_version = "transaction_version",
  /** column name */
  type = "type",
}

/** Streaming cursor of the table "events" */
export type events_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: events_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type events_stream_cursor_value_input = {
  account_address: InputMaybe<Scalars["String"]>;
  creation_number: InputMaybe<Scalars["bigint"]>;
  data: InputMaybe<Scalars["jsonb"]>;
  event_index: InputMaybe<Scalars["bigint"]>;
  indexed_type: InputMaybe<Scalars["String"]>;
  sequence_number: InputMaybe<Scalars["bigint"]>;
  transaction_block_height: InputMaybe<Scalars["bigint"]>;
  transaction_version: InputMaybe<Scalars["bigint"]>;
  type: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "fungible_asset_activities" */
export type fungible_asset_activities = {
  __typename?: "fungible_asset_activities";
  amount: Maybe<Scalars["numeric"]>;
  asset_type: Scalars["String"];
  block_height: Scalars["bigint"];
  entry_function_id_str: Maybe<Scalars["String"]>;
  event_index: Scalars["bigint"];
  gas_fee_payer_address: Maybe<Scalars["String"]>;
  is_frozen: Maybe<Scalars["Boolean"]>;
  is_gas_fee: Scalars["Boolean"];
  is_transaction_success: Scalars["Boolean"];
  /** An object relationship */
  metadata: Maybe<fungible_asset_metadata>;
  owner_address: Scalars["String"];
  /** An array relationship */
  owner_aptos_names: Array<current_aptos_names>;
  /** An aggregate relationship */
  owner_aptos_names_aggregate: current_aptos_names_aggregate;
  storage_id: Scalars["String"];
  storage_refund_amount: Scalars["numeric"];
  token_standard: Scalars["String"];
  transaction_timestamp: Scalars["timestamp"];
  transaction_version: Scalars["bigint"];
  type: Scalars["String"];
};

/** columns and relationships of "fungible_asset_activities" */
export type fungible_asset_activitiesowner_aptos_namesArgs = {
  distinct_on: InputMaybe<Array<current_aptos_names_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_aptos_names_order_by>>;
  where: InputMaybe<current_aptos_names_bool_exp>;
};

/** columns and relationships of "fungible_asset_activities" */
export type fungible_asset_activitiesowner_aptos_names_aggregateArgs = {
  distinct_on: InputMaybe<Array<current_aptos_names_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_aptos_names_order_by>>;
  where: InputMaybe<current_aptos_names_bool_exp>;
};

/** order by aggregate values of table "fungible_asset_activities" */
export type fungible_asset_activities_aggregate_order_by = {
  avg: InputMaybe<fungible_asset_activities_avg_order_by>;
  count: InputMaybe<order_by>;
  max: InputMaybe<fungible_asset_activities_max_order_by>;
  min: InputMaybe<fungible_asset_activities_min_order_by>;
  stddev: InputMaybe<fungible_asset_activities_stddev_order_by>;
  stddev_pop: InputMaybe<fungible_asset_activities_stddev_pop_order_by>;
  stddev_samp: InputMaybe<fungible_asset_activities_stddev_samp_order_by>;
  sum: InputMaybe<fungible_asset_activities_sum_order_by>;
  var_pop: InputMaybe<fungible_asset_activities_var_pop_order_by>;
  var_samp: InputMaybe<fungible_asset_activities_var_samp_order_by>;
  variance: InputMaybe<fungible_asset_activities_variance_order_by>;
};

/** order by avg() on columns of table "fungible_asset_activities" */
export type fungible_asset_activities_avg_order_by = {
  amount: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "fungible_asset_activities". All fields are combined with a logical 'AND'. */
export type fungible_asset_activities_bool_exp = {
  _and: InputMaybe<Array<fungible_asset_activities_bool_exp>>;
  _not: InputMaybe<fungible_asset_activities_bool_exp>;
  _or: InputMaybe<Array<fungible_asset_activities_bool_exp>>;
  amount: InputMaybe<numeric_comparison_exp>;
  asset_type: InputMaybe<String_comparison_exp>;
  block_height: InputMaybe<bigint_comparison_exp>;
  entry_function_id_str: InputMaybe<String_comparison_exp>;
  event_index: InputMaybe<bigint_comparison_exp>;
  gas_fee_payer_address: InputMaybe<String_comparison_exp>;
  is_frozen: InputMaybe<Boolean_comparison_exp>;
  is_gas_fee: InputMaybe<Boolean_comparison_exp>;
  is_transaction_success: InputMaybe<Boolean_comparison_exp>;
  metadata: InputMaybe<fungible_asset_metadata_bool_exp>;
  owner_address: InputMaybe<String_comparison_exp>;
  owner_aptos_names: InputMaybe<current_aptos_names_bool_exp>;
  owner_aptos_names_aggregate: InputMaybe<current_aptos_names_aggregate_bool_exp>;
  storage_id: InputMaybe<String_comparison_exp>;
  storage_refund_amount: InputMaybe<numeric_comparison_exp>;
  token_standard: InputMaybe<String_comparison_exp>;
  transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  transaction_version: InputMaybe<bigint_comparison_exp>;
  type: InputMaybe<String_comparison_exp>;
};

/** order by max() on columns of table "fungible_asset_activities" */
export type fungible_asset_activities_max_order_by = {
  amount: InputMaybe<order_by>;
  asset_type: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  entry_function_id_str: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  gas_fee_payer_address: InputMaybe<order_by>;
  owner_address: InputMaybe<order_by>;
  storage_id: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
  type: InputMaybe<order_by>;
};

/** order by min() on columns of table "fungible_asset_activities" */
export type fungible_asset_activities_min_order_by = {
  amount: InputMaybe<order_by>;
  asset_type: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  entry_function_id_str: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  gas_fee_payer_address: InputMaybe<order_by>;
  owner_address: InputMaybe<order_by>;
  storage_id: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
  type: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "fungible_asset_activities". */
export type fungible_asset_activities_order_by = {
  amount: InputMaybe<order_by>;
  asset_type: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  entry_function_id_str: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  gas_fee_payer_address: InputMaybe<order_by>;
  is_frozen: InputMaybe<order_by>;
  is_gas_fee: InputMaybe<order_by>;
  is_transaction_success: InputMaybe<order_by>;
  metadata: InputMaybe<fungible_asset_metadata_order_by>;
  owner_address: InputMaybe<order_by>;
  owner_aptos_names_aggregate: InputMaybe<current_aptos_names_aggregate_order_by>;
  storage_id: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
  type: InputMaybe<order_by>;
};

/** select columns of table "fungible_asset_activities" */
export enum fungible_asset_activities_select_column {
  /** column name */
  amount = "amount",
  /** column name */
  asset_type = "asset_type",
  /** column name */
  block_height = "block_height",
  /** column name */
  entry_function_id_str = "entry_function_id_str",
  /** column name */
  event_index = "event_index",
  /** column name */
  gas_fee_payer_address = "gas_fee_payer_address",
  /** column name */
  is_frozen = "is_frozen",
  /** column name */
  is_gas_fee = "is_gas_fee",
  /** column name */
  is_transaction_success = "is_transaction_success",
  /** column name */
  owner_address = "owner_address",
  /** column name */
  storage_id = "storage_id",
  /** column name */
  storage_refund_amount = "storage_refund_amount",
  /** column name */
  token_standard = "token_standard",
  /** column name */
  transaction_timestamp = "transaction_timestamp",
  /** column name */
  transaction_version = "transaction_version",
  /** column name */
  type = "type",
}

/** order by stddev() on columns of table "fungible_asset_activities" */
export type fungible_asset_activities_stddev_order_by = {
  amount: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** order by stddev_pop() on columns of table "fungible_asset_activities" */
export type fungible_asset_activities_stddev_pop_order_by = {
  amount: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** order by stddev_samp() on columns of table "fungible_asset_activities" */
export type fungible_asset_activities_stddev_samp_order_by = {
  amount: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** Streaming cursor of the table "fungible_asset_activities" */
export type fungible_asset_activities_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: fungible_asset_activities_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type fungible_asset_activities_stream_cursor_value_input = {
  amount: InputMaybe<Scalars["numeric"]>;
  asset_type: InputMaybe<Scalars["String"]>;
  block_height: InputMaybe<Scalars["bigint"]>;
  entry_function_id_str: InputMaybe<Scalars["String"]>;
  event_index: InputMaybe<Scalars["bigint"]>;
  gas_fee_payer_address: InputMaybe<Scalars["String"]>;
  is_frozen: InputMaybe<Scalars["Boolean"]>;
  is_gas_fee: InputMaybe<Scalars["Boolean"]>;
  is_transaction_success: InputMaybe<Scalars["Boolean"]>;
  owner_address: InputMaybe<Scalars["String"]>;
  storage_id: InputMaybe<Scalars["String"]>;
  storage_refund_amount: InputMaybe<Scalars["numeric"]>;
  token_standard: InputMaybe<Scalars["String"]>;
  transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  transaction_version: InputMaybe<Scalars["bigint"]>;
  type: InputMaybe<Scalars["String"]>;
};

/** order by sum() on columns of table "fungible_asset_activities" */
export type fungible_asset_activities_sum_order_by = {
  amount: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** order by var_pop() on columns of table "fungible_asset_activities" */
export type fungible_asset_activities_var_pop_order_by = {
  amount: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** order by var_samp() on columns of table "fungible_asset_activities" */
export type fungible_asset_activities_var_samp_order_by = {
  amount: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** order by variance() on columns of table "fungible_asset_activities" */
export type fungible_asset_activities_variance_order_by = {
  amount: InputMaybe<order_by>;
  block_height: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  storage_refund_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** columns and relationships of "fungible_asset_metadata" */
export type fungible_asset_metadata = {
  __typename?: "fungible_asset_metadata";
  asset_type: Scalars["String"];
  creator_address: Scalars["String"];
  decimals: Scalars["Int"];
  icon_uri: Maybe<Scalars["String"]>;
  last_transaction_timestamp: Scalars["timestamp"];
  last_transaction_version: Scalars["bigint"];
  name: Scalars["String"];
  project_uri: Maybe<Scalars["String"]>;
  supply_aggregator_table_handle_v1: Maybe<Scalars["String"]>;
  supply_aggregator_table_key_v1: Maybe<Scalars["String"]>;
  symbol: Scalars["String"];
  token_standard: Scalars["String"];
};

/** Boolean expression to filter rows from the table "fungible_asset_metadata". All fields are combined with a logical 'AND'. */
export type fungible_asset_metadata_bool_exp = {
  _and: InputMaybe<Array<fungible_asset_metadata_bool_exp>>;
  _not: InputMaybe<fungible_asset_metadata_bool_exp>;
  _or: InputMaybe<Array<fungible_asset_metadata_bool_exp>>;
  asset_type: InputMaybe<String_comparison_exp>;
  creator_address: InputMaybe<String_comparison_exp>;
  decimals: InputMaybe<Int_comparison_exp>;
  icon_uri: InputMaybe<String_comparison_exp>;
  last_transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  name: InputMaybe<String_comparison_exp>;
  project_uri: InputMaybe<String_comparison_exp>;
  supply_aggregator_table_handle_v1: InputMaybe<String_comparison_exp>;
  supply_aggregator_table_key_v1: InputMaybe<String_comparison_exp>;
  symbol: InputMaybe<String_comparison_exp>;
  token_standard: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "fungible_asset_metadata". */
export type fungible_asset_metadata_order_by = {
  asset_type: InputMaybe<order_by>;
  creator_address: InputMaybe<order_by>;
  decimals: InputMaybe<order_by>;
  icon_uri: InputMaybe<order_by>;
  last_transaction_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  name: InputMaybe<order_by>;
  project_uri: InputMaybe<order_by>;
  supply_aggregator_table_handle_v1: InputMaybe<order_by>;
  supply_aggregator_table_key_v1: InputMaybe<order_by>;
  symbol: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
};

/** select columns of table "fungible_asset_metadata" */
export enum fungible_asset_metadata_select_column {
  /** column name */
  asset_type = "asset_type",
  /** column name */
  creator_address = "creator_address",
  /** column name */
  decimals = "decimals",
  /** column name */
  icon_uri = "icon_uri",
  /** column name */
  last_transaction_timestamp = "last_transaction_timestamp",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  name = "name",
  /** column name */
  project_uri = "project_uri",
  /** column name */
  supply_aggregator_table_handle_v1 = "supply_aggregator_table_handle_v1",
  /** column name */
  supply_aggregator_table_key_v1 = "supply_aggregator_table_key_v1",
  /** column name */
  symbol = "symbol",
  /** column name */
  token_standard = "token_standard",
}

/** Streaming cursor of the table "fungible_asset_metadata" */
export type fungible_asset_metadata_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: fungible_asset_metadata_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type fungible_asset_metadata_stream_cursor_value_input = {
  asset_type: InputMaybe<Scalars["String"]>;
  creator_address: InputMaybe<Scalars["String"]>;
  decimals: InputMaybe<Scalars["Int"]>;
  icon_uri: InputMaybe<Scalars["String"]>;
  last_transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  last_transaction_version: InputMaybe<Scalars["bigint"]>;
  name: InputMaybe<Scalars["String"]>;
  project_uri: InputMaybe<Scalars["String"]>;
  supply_aggregator_table_handle_v1: InputMaybe<Scalars["String"]>;
  supply_aggregator_table_key_v1: InputMaybe<Scalars["String"]>;
  symbol: InputMaybe<Scalars["String"]>;
  token_standard: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "indexer_status" */
export type indexer_status = {
  __typename?: "indexer_status";
  db: Scalars["String"];
  is_indexer_up: Scalars["Boolean"];
};

/** Boolean expression to filter rows from the table "indexer_status". All fields are combined with a logical 'AND'. */
export type indexer_status_bool_exp = {
  _and: InputMaybe<Array<indexer_status_bool_exp>>;
  _not: InputMaybe<indexer_status_bool_exp>;
  _or: InputMaybe<Array<indexer_status_bool_exp>>;
  db: InputMaybe<String_comparison_exp>;
  is_indexer_up: InputMaybe<Boolean_comparison_exp>;
};

/** Ordering options when selecting data from "indexer_status". */
export type indexer_status_order_by = {
  db: InputMaybe<order_by>;
  is_indexer_up: InputMaybe<order_by>;
};

/** select columns of table "indexer_status" */
export enum indexer_status_select_column {
  /** column name */
  db = "db",
  /** column name */
  is_indexer_up = "is_indexer_up",
}

/** Streaming cursor of the table "indexer_status" */
export type indexer_status_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: indexer_status_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type indexer_status_stream_cursor_value_input = {
  db: InputMaybe<Scalars["String"]>;
  is_indexer_up: InputMaybe<Scalars["Boolean"]>;
};

export type jsonb_cast_exp = {
  String: InputMaybe<String_comparison_exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type jsonb_comparison_exp = {
  _cast: InputMaybe<jsonb_cast_exp>;
  /** is the column contained in the given json value */
  _contained_in: InputMaybe<Scalars["jsonb"]>;
  /** does the column contain the given json value at the top level */
  _contains: InputMaybe<Scalars["jsonb"]>;
  _eq: InputMaybe<Scalars["jsonb"]>;
  _gt: InputMaybe<Scalars["jsonb"]>;
  _gte: InputMaybe<Scalars["jsonb"]>;
  /** does the string exist as a top-level key in the column */
  _has_key: InputMaybe<Scalars["String"]>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all: InputMaybe<Array<Scalars["String"]>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any: InputMaybe<Array<Scalars["String"]>>;
  _in: InputMaybe<Array<Scalars["jsonb"]>>;
  _is_null: InputMaybe<Scalars["Boolean"]>;
  _lt: InputMaybe<Scalars["jsonb"]>;
  _lte: InputMaybe<Scalars["jsonb"]>;
  _neq: InputMaybe<Scalars["jsonb"]>;
  _nin: InputMaybe<Array<Scalars["jsonb"]>>;
};

/** columns and relationships of "ledger_infos" */
export type ledger_infos = {
  __typename?: "ledger_infos";
  chain_id: Scalars["bigint"];
};

/** Boolean expression to filter rows from the table "ledger_infos". All fields are combined with a logical 'AND'. */
export type ledger_infos_bool_exp = {
  _and: InputMaybe<Array<ledger_infos_bool_exp>>;
  _not: InputMaybe<ledger_infos_bool_exp>;
  _or: InputMaybe<Array<ledger_infos_bool_exp>>;
  chain_id: InputMaybe<bigint_comparison_exp>;
};

/** Ordering options when selecting data from "ledger_infos". */
export type ledger_infos_order_by = {
  chain_id: InputMaybe<order_by>;
};

/** select columns of table "ledger_infos" */
export enum ledger_infos_select_column {
  /** column name */
  chain_id = "chain_id",
}

/** Streaming cursor of the table "ledger_infos" */
export type ledger_infos_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: ledger_infos_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ledger_infos_stream_cursor_value_input = {
  chain_id: InputMaybe<Scalars["bigint"]>;
};

/** columns and relationships of "move_resources" */
export type move_resources = {
  __typename?: "move_resources";
  address: Scalars["String"];
  transaction_version: Scalars["bigint"];
};

/** aggregated selection of "move_resources" */
export type move_resources_aggregate = {
  __typename?: "move_resources_aggregate";
  aggregate: Maybe<move_resources_aggregate_fields>;
  nodes: Array<move_resources>;
};

/** aggregate fields of "move_resources" */
export type move_resources_aggregate_fields = {
  __typename?: "move_resources_aggregate_fields";
  avg: Maybe<move_resources_avg_fields>;
  count: Scalars["Int"];
  max: Maybe<move_resources_max_fields>;
  min: Maybe<move_resources_min_fields>;
  stddev: Maybe<move_resources_stddev_fields>;
  stddev_pop: Maybe<move_resources_stddev_pop_fields>;
  stddev_samp: Maybe<move_resources_stddev_samp_fields>;
  sum: Maybe<move_resources_sum_fields>;
  var_pop: Maybe<move_resources_var_pop_fields>;
  var_samp: Maybe<move_resources_var_samp_fields>;
  variance: Maybe<move_resources_variance_fields>;
};

/** aggregate fields of "move_resources" */
export type move_resources_aggregate_fieldscountArgs = {
  columns: InputMaybe<Array<move_resources_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type move_resources_avg_fields = {
  __typename?: "move_resources_avg_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "move_resources". All fields are combined with a logical 'AND'. */
export type move_resources_bool_exp = {
  _and: InputMaybe<Array<move_resources_bool_exp>>;
  _not: InputMaybe<move_resources_bool_exp>;
  _or: InputMaybe<Array<move_resources_bool_exp>>;
  address: InputMaybe<String_comparison_exp>;
  transaction_version: InputMaybe<bigint_comparison_exp>;
};

/** aggregate max on columns */
export type move_resources_max_fields = {
  __typename?: "move_resources_max_fields";
  address: Maybe<Scalars["String"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** aggregate min on columns */
export type move_resources_min_fields = {
  __typename?: "move_resources_min_fields";
  address: Maybe<Scalars["String"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** Ordering options when selecting data from "move_resources". */
export type move_resources_order_by = {
  address: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** select columns of table "move_resources" */
export enum move_resources_select_column {
  /** column name */
  address = "address",
  /** column name */
  transaction_version = "transaction_version",
}

/** aggregate stddev on columns */
export type move_resources_stddev_fields = {
  __typename?: "move_resources_stddev_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type move_resources_stddev_pop_fields = {
  __typename?: "move_resources_stddev_pop_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type move_resources_stddev_samp_fields = {
  __typename?: "move_resources_stddev_samp_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "move_resources" */
export type move_resources_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: move_resources_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type move_resources_stream_cursor_value_input = {
  address: InputMaybe<Scalars["String"]>;
  transaction_version: InputMaybe<Scalars["bigint"]>;
};

/** aggregate sum on columns */
export type move_resources_sum_fields = {
  __typename?: "move_resources_sum_fields";
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** aggregate var_pop on columns */
export type move_resources_var_pop_fields = {
  __typename?: "move_resources_var_pop_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type move_resources_var_samp_fields = {
  __typename?: "move_resources_var_samp_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type move_resources_variance_fields = {
  __typename?: "move_resources_variance_fields";
  transaction_version: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "nft_marketplace_v2.current_nft_marketplace_auctions" */
export type nft_marketplace_v2_current_nft_marketplace_auctions = {
  __typename?: "nft_marketplace_v2_current_nft_marketplace_auctions";
  buy_it_now_price: Maybe<Scalars["numeric"]>;
  coin_type: Maybe<Scalars["String"]>;
  collection_id: Scalars["String"];
  contract_address: Scalars["String"];
  current_bid_price: Maybe<Scalars["numeric"]>;
  current_bidder: Maybe<Scalars["String"]>;
  /** An object relationship */
  current_token_data: Maybe<current_token_datas_v2>;
  entry_function_id_str: Scalars["String"];
  expiration_time: Scalars["numeric"];
  fee_schedule_id: Scalars["String"];
  is_deleted: Scalars["Boolean"];
  last_transaction_timestamp: Scalars["timestamptz"];
  last_transaction_version: Scalars["bigint"];
  listing_id: Scalars["String"];
  marketplace: Scalars["String"];
  seller: Scalars["String"];
  starting_bid_price: Scalars["numeric"];
  token_amount: Scalars["numeric"];
  token_data_id: Scalars["String"];
  token_standard: Scalars["String"];
};

/** Boolean expression to filter rows from the table "nft_marketplace_v2.current_nft_marketplace_auctions". All fields are combined with a logical 'AND'. */
export type nft_marketplace_v2_current_nft_marketplace_auctions_bool_exp = {
  _and: InputMaybe<
    Array<nft_marketplace_v2_current_nft_marketplace_auctions_bool_exp>
  >;
  _not: InputMaybe<nft_marketplace_v2_current_nft_marketplace_auctions_bool_exp>;
  _or: InputMaybe<
    Array<nft_marketplace_v2_current_nft_marketplace_auctions_bool_exp>
  >;
  buy_it_now_price: InputMaybe<numeric_comparison_exp>;
  coin_type: InputMaybe<String_comparison_exp>;
  collection_id: InputMaybe<String_comparison_exp>;
  contract_address: InputMaybe<String_comparison_exp>;
  current_bid_price: InputMaybe<numeric_comparison_exp>;
  current_bidder: InputMaybe<String_comparison_exp>;
  current_token_data: InputMaybe<current_token_datas_v2_bool_exp>;
  entry_function_id_str: InputMaybe<String_comparison_exp>;
  expiration_time: InputMaybe<numeric_comparison_exp>;
  fee_schedule_id: InputMaybe<String_comparison_exp>;
  is_deleted: InputMaybe<Boolean_comparison_exp>;
  last_transaction_timestamp: InputMaybe<timestamptz_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  listing_id: InputMaybe<String_comparison_exp>;
  marketplace: InputMaybe<String_comparison_exp>;
  seller: InputMaybe<String_comparison_exp>;
  starting_bid_price: InputMaybe<numeric_comparison_exp>;
  token_amount: InputMaybe<numeric_comparison_exp>;
  token_data_id: InputMaybe<String_comparison_exp>;
  token_standard: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "nft_marketplace_v2.current_nft_marketplace_auctions". */
export type nft_marketplace_v2_current_nft_marketplace_auctions_order_by = {
  buy_it_now_price: InputMaybe<order_by>;
  coin_type: InputMaybe<order_by>;
  collection_id: InputMaybe<order_by>;
  contract_address: InputMaybe<order_by>;
  current_bid_price: InputMaybe<order_by>;
  current_bidder: InputMaybe<order_by>;
  current_token_data: InputMaybe<current_token_datas_v2_order_by>;
  entry_function_id_str: InputMaybe<order_by>;
  expiration_time: InputMaybe<order_by>;
  fee_schedule_id: InputMaybe<order_by>;
  is_deleted: InputMaybe<order_by>;
  last_transaction_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  listing_id: InputMaybe<order_by>;
  marketplace: InputMaybe<order_by>;
  seller: InputMaybe<order_by>;
  starting_bid_price: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  token_data_id: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
};

/** select columns of table "nft_marketplace_v2.current_nft_marketplace_auctions" */
export enum nft_marketplace_v2_current_nft_marketplace_auctions_select_column {
  /** column name */
  buy_it_now_price = "buy_it_now_price",
  /** column name */
  coin_type = "coin_type",
  /** column name */
  collection_id = "collection_id",
  /** column name */
  contract_address = "contract_address",
  /** column name */
  current_bid_price = "current_bid_price",
  /** column name */
  current_bidder = "current_bidder",
  /** column name */
  entry_function_id_str = "entry_function_id_str",
  /** column name */
  expiration_time = "expiration_time",
  /** column name */
  fee_schedule_id = "fee_schedule_id",
  /** column name */
  is_deleted = "is_deleted",
  /** column name */
  last_transaction_timestamp = "last_transaction_timestamp",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  listing_id = "listing_id",
  /** column name */
  marketplace = "marketplace",
  /** column name */
  seller = "seller",
  /** column name */
  starting_bid_price = "starting_bid_price",
  /** column name */
  token_amount = "token_amount",
  /** column name */
  token_data_id = "token_data_id",
  /** column name */
  token_standard = "token_standard",
}

/** Streaming cursor of the table "nft_marketplace_v2_current_nft_marketplace_auctions" */
export type nft_marketplace_v2_current_nft_marketplace_auctions_stream_cursor_input =
  {
    /** Stream column input with initial value */
    initial_value: nft_marketplace_v2_current_nft_marketplace_auctions_stream_cursor_value_input;
    /** cursor ordering */
    ordering: InputMaybe<cursor_ordering>;
  };

/** Initial value of the column from where the streaming should start */
export type nft_marketplace_v2_current_nft_marketplace_auctions_stream_cursor_value_input =
  {
    buy_it_now_price: InputMaybe<Scalars["numeric"]>;
    coin_type: InputMaybe<Scalars["String"]>;
    collection_id: InputMaybe<Scalars["String"]>;
    contract_address: InputMaybe<Scalars["String"]>;
    current_bid_price: InputMaybe<Scalars["numeric"]>;
    current_bidder: InputMaybe<Scalars["String"]>;
    entry_function_id_str: InputMaybe<Scalars["String"]>;
    expiration_time: InputMaybe<Scalars["numeric"]>;
    fee_schedule_id: InputMaybe<Scalars["String"]>;
    is_deleted: InputMaybe<Scalars["Boolean"]>;
    last_transaction_timestamp: InputMaybe<Scalars["timestamptz"]>;
    last_transaction_version: InputMaybe<Scalars["bigint"]>;
    listing_id: InputMaybe<Scalars["String"]>;
    marketplace: InputMaybe<Scalars["String"]>;
    seller: InputMaybe<Scalars["String"]>;
    starting_bid_price: InputMaybe<Scalars["numeric"]>;
    token_amount: InputMaybe<Scalars["numeric"]>;
    token_data_id: InputMaybe<Scalars["String"]>;
    token_standard: InputMaybe<Scalars["String"]>;
  };

/** columns and relationships of "nft_marketplace_v2.current_nft_marketplace_collection_offers" */
export type nft_marketplace_v2_current_nft_marketplace_collection_offers = {
  __typename?: "nft_marketplace_v2_current_nft_marketplace_collection_offers";
  buyer: Scalars["String"];
  coin_type: Maybe<Scalars["String"]>;
  collection_id: Scalars["String"];
  collection_offer_id: Scalars["String"];
  contract_address: Scalars["String"];
  /** An object relationship */
  current_collection_v2: Maybe<current_collections_v2>;
  entry_function_id_str: Scalars["String"];
  expiration_time: Scalars["numeric"];
  fee_schedule_id: Scalars["String"];
  is_deleted: Scalars["Boolean"];
  item_price: Scalars["numeric"];
  last_transaction_timestamp: Scalars["timestamptz"];
  last_transaction_version: Scalars["bigint"];
  marketplace: Scalars["String"];
  remaining_token_amount: Scalars["numeric"];
  token_standard: Scalars["String"];
};

/** Boolean expression to filter rows from the table "nft_marketplace_v2.current_nft_marketplace_collection_offers". All fields are combined with a logical 'AND'. */
export type nft_marketplace_v2_current_nft_marketplace_collection_offers_bool_exp =
  {
    _and: InputMaybe<
      Array<nft_marketplace_v2_current_nft_marketplace_collection_offers_bool_exp>
    >;
    _not: InputMaybe<nft_marketplace_v2_current_nft_marketplace_collection_offers_bool_exp>;
    _or: InputMaybe<
      Array<nft_marketplace_v2_current_nft_marketplace_collection_offers_bool_exp>
    >;
    buyer: InputMaybe<String_comparison_exp>;
    coin_type: InputMaybe<String_comparison_exp>;
    collection_id: InputMaybe<String_comparison_exp>;
    collection_offer_id: InputMaybe<String_comparison_exp>;
    contract_address: InputMaybe<String_comparison_exp>;
    current_collection_v2: InputMaybe<current_collections_v2_bool_exp>;
    entry_function_id_str: InputMaybe<String_comparison_exp>;
    expiration_time: InputMaybe<numeric_comparison_exp>;
    fee_schedule_id: InputMaybe<String_comparison_exp>;
    is_deleted: InputMaybe<Boolean_comparison_exp>;
    item_price: InputMaybe<numeric_comparison_exp>;
    last_transaction_timestamp: InputMaybe<timestamptz_comparison_exp>;
    last_transaction_version: InputMaybe<bigint_comparison_exp>;
    marketplace: InputMaybe<String_comparison_exp>;
    remaining_token_amount: InputMaybe<numeric_comparison_exp>;
    token_standard: InputMaybe<String_comparison_exp>;
  };

/** Ordering options when selecting data from "nft_marketplace_v2.current_nft_marketplace_collection_offers". */
export type nft_marketplace_v2_current_nft_marketplace_collection_offers_order_by =
  {
    buyer: InputMaybe<order_by>;
    coin_type: InputMaybe<order_by>;
    collection_id: InputMaybe<order_by>;
    collection_offer_id: InputMaybe<order_by>;
    contract_address: InputMaybe<order_by>;
    current_collection_v2: InputMaybe<current_collections_v2_order_by>;
    entry_function_id_str: InputMaybe<order_by>;
    expiration_time: InputMaybe<order_by>;
    fee_schedule_id: InputMaybe<order_by>;
    is_deleted: InputMaybe<order_by>;
    item_price: InputMaybe<order_by>;
    last_transaction_timestamp: InputMaybe<order_by>;
    last_transaction_version: InputMaybe<order_by>;
    marketplace: InputMaybe<order_by>;
    remaining_token_amount: InputMaybe<order_by>;
    token_standard: InputMaybe<order_by>;
  };

/** select columns of table "nft_marketplace_v2.current_nft_marketplace_collection_offers" */
export enum nft_marketplace_v2_current_nft_marketplace_collection_offers_select_column {
  /** column name */
  buyer = "buyer",
  /** column name */
  coin_type = "coin_type",
  /** column name */
  collection_id = "collection_id",
  /** column name */
  collection_offer_id = "collection_offer_id",
  /** column name */
  contract_address = "contract_address",
  /** column name */
  entry_function_id_str = "entry_function_id_str",
  /** column name */
  expiration_time = "expiration_time",
  /** column name */
  fee_schedule_id = "fee_schedule_id",
  /** column name */
  is_deleted = "is_deleted",
  /** column name */
  item_price = "item_price",
  /** column name */
  last_transaction_timestamp = "last_transaction_timestamp",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  marketplace = "marketplace",
  /** column name */
  remaining_token_amount = "remaining_token_amount",
  /** column name */
  token_standard = "token_standard",
}

/** Streaming cursor of the table "nft_marketplace_v2_current_nft_marketplace_collection_offers" */
export type nft_marketplace_v2_current_nft_marketplace_collection_offers_stream_cursor_input =
  {
    /** Stream column input with initial value */
    initial_value: nft_marketplace_v2_current_nft_marketplace_collection_offers_stream_cursor_value_input;
    /** cursor ordering */
    ordering: InputMaybe<cursor_ordering>;
  };

/** Initial value of the column from where the streaming should start */
export type nft_marketplace_v2_current_nft_marketplace_collection_offers_stream_cursor_value_input =
  {
    buyer: InputMaybe<Scalars["String"]>;
    coin_type: InputMaybe<Scalars["String"]>;
    collection_id: InputMaybe<Scalars["String"]>;
    collection_offer_id: InputMaybe<Scalars["String"]>;
    contract_address: InputMaybe<Scalars["String"]>;
    entry_function_id_str: InputMaybe<Scalars["String"]>;
    expiration_time: InputMaybe<Scalars["numeric"]>;
    fee_schedule_id: InputMaybe<Scalars["String"]>;
    is_deleted: InputMaybe<Scalars["Boolean"]>;
    item_price: InputMaybe<Scalars["numeric"]>;
    last_transaction_timestamp: InputMaybe<Scalars["timestamptz"]>;
    last_transaction_version: InputMaybe<Scalars["bigint"]>;
    marketplace: InputMaybe<Scalars["String"]>;
    remaining_token_amount: InputMaybe<Scalars["numeric"]>;
    token_standard: InputMaybe<Scalars["String"]>;
  };

/** columns and relationships of "nft_marketplace_v2.current_nft_marketplace_listings" */
export type nft_marketplace_v2_current_nft_marketplace_listings = {
  __typename?: "nft_marketplace_v2_current_nft_marketplace_listings";
  coin_type: Maybe<Scalars["String"]>;
  collection_id: Scalars["String"];
  contract_address: Scalars["String"];
  /** An object relationship */
  current_token_data: Maybe<current_token_datas_v2>;
  entry_function_id_str: Scalars["String"];
  fee_schedule_id: Scalars["String"];
  is_deleted: Scalars["Boolean"];
  last_transaction_timestamp: Scalars["timestamptz"];
  last_transaction_version: Scalars["bigint"];
  listing_id: Scalars["String"];
  marketplace: Scalars["String"];
  price: Scalars["numeric"];
  seller: Scalars["String"];
  token_amount: Scalars["numeric"];
  token_data_id: Scalars["String"];
  token_standard: Scalars["String"];
};

/** Boolean expression to filter rows from the table "nft_marketplace_v2.current_nft_marketplace_listings". All fields are combined with a logical 'AND'. */
export type nft_marketplace_v2_current_nft_marketplace_listings_bool_exp = {
  _and: InputMaybe<
    Array<nft_marketplace_v2_current_nft_marketplace_listings_bool_exp>
  >;
  _not: InputMaybe<nft_marketplace_v2_current_nft_marketplace_listings_bool_exp>;
  _or: InputMaybe<
    Array<nft_marketplace_v2_current_nft_marketplace_listings_bool_exp>
  >;
  coin_type: InputMaybe<String_comparison_exp>;
  collection_id: InputMaybe<String_comparison_exp>;
  contract_address: InputMaybe<String_comparison_exp>;
  current_token_data: InputMaybe<current_token_datas_v2_bool_exp>;
  entry_function_id_str: InputMaybe<String_comparison_exp>;
  fee_schedule_id: InputMaybe<String_comparison_exp>;
  is_deleted: InputMaybe<Boolean_comparison_exp>;
  last_transaction_timestamp: InputMaybe<timestamptz_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  listing_id: InputMaybe<String_comparison_exp>;
  marketplace: InputMaybe<String_comparison_exp>;
  price: InputMaybe<numeric_comparison_exp>;
  seller: InputMaybe<String_comparison_exp>;
  token_amount: InputMaybe<numeric_comparison_exp>;
  token_data_id: InputMaybe<String_comparison_exp>;
  token_standard: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "nft_marketplace_v2.current_nft_marketplace_listings". */
export type nft_marketplace_v2_current_nft_marketplace_listings_order_by = {
  coin_type: InputMaybe<order_by>;
  collection_id: InputMaybe<order_by>;
  contract_address: InputMaybe<order_by>;
  current_token_data: InputMaybe<current_token_datas_v2_order_by>;
  entry_function_id_str: InputMaybe<order_by>;
  fee_schedule_id: InputMaybe<order_by>;
  is_deleted: InputMaybe<order_by>;
  last_transaction_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  listing_id: InputMaybe<order_by>;
  marketplace: InputMaybe<order_by>;
  price: InputMaybe<order_by>;
  seller: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  token_data_id: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
};

/** select columns of table "nft_marketplace_v2.current_nft_marketplace_listings" */
export enum nft_marketplace_v2_current_nft_marketplace_listings_select_column {
  /** column name */
  coin_type = "coin_type",
  /** column name */
  collection_id = "collection_id",
  /** column name */
  contract_address = "contract_address",
  /** column name */
  entry_function_id_str = "entry_function_id_str",
  /** column name */
  fee_schedule_id = "fee_schedule_id",
  /** column name */
  is_deleted = "is_deleted",
  /** column name */
  last_transaction_timestamp = "last_transaction_timestamp",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  listing_id = "listing_id",
  /** column name */
  marketplace = "marketplace",
  /** column name */
  price = "price",
  /** column name */
  seller = "seller",
  /** column name */
  token_amount = "token_amount",
  /** column name */
  token_data_id = "token_data_id",
  /** column name */
  token_standard = "token_standard",
}

/** Streaming cursor of the table "nft_marketplace_v2_current_nft_marketplace_listings" */
export type nft_marketplace_v2_current_nft_marketplace_listings_stream_cursor_input =
  {
    /** Stream column input with initial value */
    initial_value: nft_marketplace_v2_current_nft_marketplace_listings_stream_cursor_value_input;
    /** cursor ordering */
    ordering: InputMaybe<cursor_ordering>;
  };

/** Initial value of the column from where the streaming should start */
export type nft_marketplace_v2_current_nft_marketplace_listings_stream_cursor_value_input =
  {
    coin_type: InputMaybe<Scalars["String"]>;
    collection_id: InputMaybe<Scalars["String"]>;
    contract_address: InputMaybe<Scalars["String"]>;
    entry_function_id_str: InputMaybe<Scalars["String"]>;
    fee_schedule_id: InputMaybe<Scalars["String"]>;
    is_deleted: InputMaybe<Scalars["Boolean"]>;
    last_transaction_timestamp: InputMaybe<Scalars["timestamptz"]>;
    last_transaction_version: InputMaybe<Scalars["bigint"]>;
    listing_id: InputMaybe<Scalars["String"]>;
    marketplace: InputMaybe<Scalars["String"]>;
    price: InputMaybe<Scalars["numeric"]>;
    seller: InputMaybe<Scalars["String"]>;
    token_amount: InputMaybe<Scalars["numeric"]>;
    token_data_id: InputMaybe<Scalars["String"]>;
    token_standard: InputMaybe<Scalars["String"]>;
  };

/** columns and relationships of "nft_marketplace_v2.current_nft_marketplace_token_offers" */
export type nft_marketplace_v2_current_nft_marketplace_token_offers = {
  __typename?: "nft_marketplace_v2_current_nft_marketplace_token_offers";
  buyer: Scalars["String"];
  coin_type: Maybe<Scalars["String"]>;
  collection_id: Scalars["String"];
  contract_address: Scalars["String"];
  /** An object relationship */
  current_token_data: Maybe<current_token_datas_v2>;
  entry_function_id_str: Scalars["String"];
  expiration_time: Scalars["numeric"];
  fee_schedule_id: Scalars["String"];
  is_deleted: Scalars["Boolean"];
  last_transaction_timestamp: Scalars["timestamptz"];
  last_transaction_version: Scalars["bigint"];
  marketplace: Scalars["String"];
  offer_id: Scalars["String"];
  price: Scalars["numeric"];
  token_amount: Scalars["numeric"];
  token_data_id: Scalars["String"];
  token_standard: Scalars["String"];
};

/** Boolean expression to filter rows from the table "nft_marketplace_v2.current_nft_marketplace_token_offers". All fields are combined with a logical 'AND'. */
export type nft_marketplace_v2_current_nft_marketplace_token_offers_bool_exp = {
  _and: InputMaybe<
    Array<nft_marketplace_v2_current_nft_marketplace_token_offers_bool_exp>
  >;
  _not: InputMaybe<nft_marketplace_v2_current_nft_marketplace_token_offers_bool_exp>;
  _or: InputMaybe<
    Array<nft_marketplace_v2_current_nft_marketplace_token_offers_bool_exp>
  >;
  buyer: InputMaybe<String_comparison_exp>;
  coin_type: InputMaybe<String_comparison_exp>;
  collection_id: InputMaybe<String_comparison_exp>;
  contract_address: InputMaybe<String_comparison_exp>;
  current_token_data: InputMaybe<current_token_datas_v2_bool_exp>;
  entry_function_id_str: InputMaybe<String_comparison_exp>;
  expiration_time: InputMaybe<numeric_comparison_exp>;
  fee_schedule_id: InputMaybe<String_comparison_exp>;
  is_deleted: InputMaybe<Boolean_comparison_exp>;
  last_transaction_timestamp: InputMaybe<timestamptz_comparison_exp>;
  last_transaction_version: InputMaybe<bigint_comparison_exp>;
  marketplace: InputMaybe<String_comparison_exp>;
  offer_id: InputMaybe<String_comparison_exp>;
  price: InputMaybe<numeric_comparison_exp>;
  token_amount: InputMaybe<numeric_comparison_exp>;
  token_data_id: InputMaybe<String_comparison_exp>;
  token_standard: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "nft_marketplace_v2.current_nft_marketplace_token_offers". */
export type nft_marketplace_v2_current_nft_marketplace_token_offers_order_by = {
  buyer: InputMaybe<order_by>;
  coin_type: InputMaybe<order_by>;
  collection_id: InputMaybe<order_by>;
  contract_address: InputMaybe<order_by>;
  current_token_data: InputMaybe<current_token_datas_v2_order_by>;
  entry_function_id_str: InputMaybe<order_by>;
  expiration_time: InputMaybe<order_by>;
  fee_schedule_id: InputMaybe<order_by>;
  is_deleted: InputMaybe<order_by>;
  last_transaction_timestamp: InputMaybe<order_by>;
  last_transaction_version: InputMaybe<order_by>;
  marketplace: InputMaybe<order_by>;
  offer_id: InputMaybe<order_by>;
  price: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  token_data_id: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
};

/** select columns of table "nft_marketplace_v2.current_nft_marketplace_token_offers" */
export enum nft_marketplace_v2_current_nft_marketplace_token_offers_select_column {
  /** column name */
  buyer = "buyer",
  /** column name */
  coin_type = "coin_type",
  /** column name */
  collection_id = "collection_id",
  /** column name */
  contract_address = "contract_address",
  /** column name */
  entry_function_id_str = "entry_function_id_str",
  /** column name */
  expiration_time = "expiration_time",
  /** column name */
  fee_schedule_id = "fee_schedule_id",
  /** column name */
  is_deleted = "is_deleted",
  /** column name */
  last_transaction_timestamp = "last_transaction_timestamp",
  /** column name */
  last_transaction_version = "last_transaction_version",
  /** column name */
  marketplace = "marketplace",
  /** column name */
  offer_id = "offer_id",
  /** column name */
  price = "price",
  /** column name */
  token_amount = "token_amount",
  /** column name */
  token_data_id = "token_data_id",
  /** column name */
  token_standard = "token_standard",
}

/** Streaming cursor of the table "nft_marketplace_v2_current_nft_marketplace_token_offers" */
export type nft_marketplace_v2_current_nft_marketplace_token_offers_stream_cursor_input =
  {
    /** Stream column input with initial value */
    initial_value: nft_marketplace_v2_current_nft_marketplace_token_offers_stream_cursor_value_input;
    /** cursor ordering */
    ordering: InputMaybe<cursor_ordering>;
  };

/** Initial value of the column from where the streaming should start */
export type nft_marketplace_v2_current_nft_marketplace_token_offers_stream_cursor_value_input =
  {
    buyer: InputMaybe<Scalars["String"]>;
    coin_type: InputMaybe<Scalars["String"]>;
    collection_id: InputMaybe<Scalars["String"]>;
    contract_address: InputMaybe<Scalars["String"]>;
    entry_function_id_str: InputMaybe<Scalars["String"]>;
    expiration_time: InputMaybe<Scalars["numeric"]>;
    fee_schedule_id: InputMaybe<Scalars["String"]>;
    is_deleted: InputMaybe<Scalars["Boolean"]>;
    last_transaction_timestamp: InputMaybe<Scalars["timestamptz"]>;
    last_transaction_version: InputMaybe<Scalars["bigint"]>;
    marketplace: InputMaybe<Scalars["String"]>;
    offer_id: InputMaybe<Scalars["String"]>;
    price: InputMaybe<Scalars["numeric"]>;
    token_amount: InputMaybe<Scalars["numeric"]>;
    token_data_id: InputMaybe<Scalars["String"]>;
    token_standard: InputMaybe<Scalars["String"]>;
  };

/** columns and relationships of "nft_marketplace_v2.nft_marketplace_activities" */
export type nft_marketplace_v2_nft_marketplace_activities = {
  __typename?: "nft_marketplace_v2_nft_marketplace_activities";
  buyer: Maybe<Scalars["String"]>;
  coin_type: Maybe<Scalars["String"]>;
  collection_id: Scalars["String"];
  collection_name: Scalars["String"];
  contract_address: Scalars["String"];
  creator_address: Scalars["String"];
  /** An object relationship */
  current_token_data: Maybe<current_token_datas_v2>;
  entry_function_id_str: Scalars["String"];
  event_index: Scalars["bigint"];
  event_type: Scalars["String"];
  fee_schedule_id: Scalars["String"];
  marketplace: Scalars["String"];
  offer_or_listing_id: Scalars["String"];
  price: Scalars["numeric"];
  property_version: Maybe<Scalars["String"]>;
  seller: Maybe<Scalars["String"]>;
  token_amount: Scalars["numeric"];
  token_data_id: Maybe<Scalars["String"]>;
  token_name: Maybe<Scalars["String"]>;
  token_standard: Scalars["String"];
  transaction_timestamp: Scalars["timestamptz"];
  transaction_version: Scalars["bigint"];
};

/** Boolean expression to filter rows from the table "nft_marketplace_v2.nft_marketplace_activities". All fields are combined with a logical 'AND'. */
export type nft_marketplace_v2_nft_marketplace_activities_bool_exp = {
  _and: InputMaybe<
    Array<nft_marketplace_v2_nft_marketplace_activities_bool_exp>
  >;
  _not: InputMaybe<nft_marketplace_v2_nft_marketplace_activities_bool_exp>;
  _or: InputMaybe<
    Array<nft_marketplace_v2_nft_marketplace_activities_bool_exp>
  >;
  buyer: InputMaybe<String_comparison_exp>;
  coin_type: InputMaybe<String_comparison_exp>;
  collection_id: InputMaybe<String_comparison_exp>;
  collection_name: InputMaybe<String_comparison_exp>;
  contract_address: InputMaybe<String_comparison_exp>;
  creator_address: InputMaybe<String_comparison_exp>;
  current_token_data: InputMaybe<current_token_datas_v2_bool_exp>;
  entry_function_id_str: InputMaybe<String_comparison_exp>;
  event_index: InputMaybe<bigint_comparison_exp>;
  event_type: InputMaybe<String_comparison_exp>;
  fee_schedule_id: InputMaybe<String_comparison_exp>;
  marketplace: InputMaybe<String_comparison_exp>;
  offer_or_listing_id: InputMaybe<String_comparison_exp>;
  price: InputMaybe<numeric_comparison_exp>;
  property_version: InputMaybe<String_comparison_exp>;
  seller: InputMaybe<String_comparison_exp>;
  token_amount: InputMaybe<numeric_comparison_exp>;
  token_data_id: InputMaybe<String_comparison_exp>;
  token_name: InputMaybe<String_comparison_exp>;
  token_standard: InputMaybe<String_comparison_exp>;
  transaction_timestamp: InputMaybe<timestamptz_comparison_exp>;
  transaction_version: InputMaybe<bigint_comparison_exp>;
};

/** Ordering options when selecting data from "nft_marketplace_v2.nft_marketplace_activities". */
export type nft_marketplace_v2_nft_marketplace_activities_order_by = {
  buyer: InputMaybe<order_by>;
  coin_type: InputMaybe<order_by>;
  collection_id: InputMaybe<order_by>;
  collection_name: InputMaybe<order_by>;
  contract_address: InputMaybe<order_by>;
  creator_address: InputMaybe<order_by>;
  current_token_data: InputMaybe<current_token_datas_v2_order_by>;
  entry_function_id_str: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_type: InputMaybe<order_by>;
  fee_schedule_id: InputMaybe<order_by>;
  marketplace: InputMaybe<order_by>;
  offer_or_listing_id: InputMaybe<order_by>;
  price: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
  seller: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  token_data_id: InputMaybe<order_by>;
  token_name: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** select columns of table "nft_marketplace_v2.nft_marketplace_activities" */
export enum nft_marketplace_v2_nft_marketplace_activities_select_column {
  /** column name */
  buyer = "buyer",
  /** column name */
  coin_type = "coin_type",
  /** column name */
  collection_id = "collection_id",
  /** column name */
  collection_name = "collection_name",
  /** column name */
  contract_address = "contract_address",
  /** column name */
  creator_address = "creator_address",
  /** column name */
  entry_function_id_str = "entry_function_id_str",
  /** column name */
  event_index = "event_index",
  /** column name */
  event_type = "event_type",
  /** column name */
  fee_schedule_id = "fee_schedule_id",
  /** column name */
  marketplace = "marketplace",
  /** column name */
  offer_or_listing_id = "offer_or_listing_id",
  /** column name */
  price = "price",
  /** column name */
  property_version = "property_version",
  /** column name */
  seller = "seller",
  /** column name */
  token_amount = "token_amount",
  /** column name */
  token_data_id = "token_data_id",
  /** column name */
  token_name = "token_name",
  /** column name */
  token_standard = "token_standard",
  /** column name */
  transaction_timestamp = "transaction_timestamp",
  /** column name */
  transaction_version = "transaction_version",
}

/** Streaming cursor of the table "nft_marketplace_v2_nft_marketplace_activities" */
export type nft_marketplace_v2_nft_marketplace_activities_stream_cursor_input =
  {
    /** Stream column input with initial value */
    initial_value: nft_marketplace_v2_nft_marketplace_activities_stream_cursor_value_input;
    /** cursor ordering */
    ordering: InputMaybe<cursor_ordering>;
  };

/** Initial value of the column from where the streaming should start */
export type nft_marketplace_v2_nft_marketplace_activities_stream_cursor_value_input =
  {
    buyer: InputMaybe<Scalars["String"]>;
    coin_type: InputMaybe<Scalars["String"]>;
    collection_id: InputMaybe<Scalars["String"]>;
    collection_name: InputMaybe<Scalars["String"]>;
    contract_address: InputMaybe<Scalars["String"]>;
    creator_address: InputMaybe<Scalars["String"]>;
    entry_function_id_str: InputMaybe<Scalars["String"]>;
    event_index: InputMaybe<Scalars["bigint"]>;
    event_type: InputMaybe<Scalars["String"]>;
    fee_schedule_id: InputMaybe<Scalars["String"]>;
    marketplace: InputMaybe<Scalars["String"]>;
    offer_or_listing_id: InputMaybe<Scalars["String"]>;
    price: InputMaybe<Scalars["numeric"]>;
    property_version: InputMaybe<Scalars["String"]>;
    seller: InputMaybe<Scalars["String"]>;
    token_amount: InputMaybe<Scalars["numeric"]>;
    token_data_id: InputMaybe<Scalars["String"]>;
    token_name: InputMaybe<Scalars["String"]>;
    token_standard: InputMaybe<Scalars["String"]>;
    transaction_timestamp: InputMaybe<Scalars["timestamptz"]>;
    transaction_version: InputMaybe<Scalars["bigint"]>;
  };

/** columns and relationships of "nft_metadata_crawler.parsed_asset_uris" */
export type nft_metadata_crawler_parsed_asset_uris = {
  __typename?: "nft_metadata_crawler_parsed_asset_uris";
  animation_optimizer_retry_count: Scalars["Int"];
  asset_uri: Scalars["String"];
  cdn_animation_uri: Maybe<Scalars["String"]>;
  cdn_image_uri: Maybe<Scalars["String"]>;
  cdn_json_uri: Maybe<Scalars["String"]>;
  image_optimizer_retry_count: Scalars["Int"];
  json_parser_retry_count: Scalars["Int"];
  raw_animation_uri: Maybe<Scalars["String"]>;
  raw_image_uri: Maybe<Scalars["String"]>;
};

/** Boolean expression to filter rows from the table "nft_metadata_crawler.parsed_asset_uris". All fields are combined with a logical 'AND'. */
export type nft_metadata_crawler_parsed_asset_uris_bool_exp = {
  _and: InputMaybe<Array<nft_metadata_crawler_parsed_asset_uris_bool_exp>>;
  _not: InputMaybe<nft_metadata_crawler_parsed_asset_uris_bool_exp>;
  _or: InputMaybe<Array<nft_metadata_crawler_parsed_asset_uris_bool_exp>>;
  animation_optimizer_retry_count: InputMaybe<Int_comparison_exp>;
  asset_uri: InputMaybe<String_comparison_exp>;
  cdn_animation_uri: InputMaybe<String_comparison_exp>;
  cdn_image_uri: InputMaybe<String_comparison_exp>;
  cdn_json_uri: InputMaybe<String_comparison_exp>;
  image_optimizer_retry_count: InputMaybe<Int_comparison_exp>;
  json_parser_retry_count: InputMaybe<Int_comparison_exp>;
  raw_animation_uri: InputMaybe<String_comparison_exp>;
  raw_image_uri: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "nft_metadata_crawler.parsed_asset_uris". */
export type nft_metadata_crawler_parsed_asset_uris_order_by = {
  animation_optimizer_retry_count: InputMaybe<order_by>;
  asset_uri: InputMaybe<order_by>;
  cdn_animation_uri: InputMaybe<order_by>;
  cdn_image_uri: InputMaybe<order_by>;
  cdn_json_uri: InputMaybe<order_by>;
  image_optimizer_retry_count: InputMaybe<order_by>;
  json_parser_retry_count: InputMaybe<order_by>;
  raw_animation_uri: InputMaybe<order_by>;
  raw_image_uri: InputMaybe<order_by>;
};

/** select columns of table "nft_metadata_crawler.parsed_asset_uris" */
export enum nft_metadata_crawler_parsed_asset_uris_select_column {
  /** column name */
  animation_optimizer_retry_count = "animation_optimizer_retry_count",
  /** column name */
  asset_uri = "asset_uri",
  /** column name */
  cdn_animation_uri = "cdn_animation_uri",
  /** column name */
  cdn_image_uri = "cdn_image_uri",
  /** column name */
  cdn_json_uri = "cdn_json_uri",
  /** column name */
  image_optimizer_retry_count = "image_optimizer_retry_count",
  /** column name */
  json_parser_retry_count = "json_parser_retry_count",
  /** column name */
  raw_animation_uri = "raw_animation_uri",
  /** column name */
  raw_image_uri = "raw_image_uri",
}

/** Streaming cursor of the table "nft_metadata_crawler_parsed_asset_uris" */
export type nft_metadata_crawler_parsed_asset_uris_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: nft_metadata_crawler_parsed_asset_uris_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type nft_metadata_crawler_parsed_asset_uris_stream_cursor_value_input = {
  animation_optimizer_retry_count: InputMaybe<Scalars["Int"]>;
  asset_uri: InputMaybe<Scalars["String"]>;
  cdn_animation_uri: InputMaybe<Scalars["String"]>;
  cdn_image_uri: InputMaybe<Scalars["String"]>;
  cdn_json_uri: InputMaybe<Scalars["String"]>;
  image_optimizer_retry_count: InputMaybe<Scalars["Int"]>;
  json_parser_retry_count: InputMaybe<Scalars["Int"]>;
  raw_animation_uri: InputMaybe<Scalars["String"]>;
  raw_image_uri: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "num_active_delegator_per_pool" */
export type num_active_delegator_per_pool = {
  __typename?: "num_active_delegator_per_pool";
  num_active_delegator: Maybe<Scalars["bigint"]>;
  pool_address: Maybe<Scalars["String"]>;
};

/** Boolean expression to filter rows from the table "num_active_delegator_per_pool". All fields are combined with a logical 'AND'. */
export type num_active_delegator_per_pool_bool_exp = {
  _and: InputMaybe<Array<num_active_delegator_per_pool_bool_exp>>;
  _not: InputMaybe<num_active_delegator_per_pool_bool_exp>;
  _or: InputMaybe<Array<num_active_delegator_per_pool_bool_exp>>;
  num_active_delegator: InputMaybe<bigint_comparison_exp>;
  pool_address: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "num_active_delegator_per_pool". */
export type num_active_delegator_per_pool_order_by = {
  num_active_delegator: InputMaybe<order_by>;
  pool_address: InputMaybe<order_by>;
};

/** select columns of table "num_active_delegator_per_pool" */
export enum num_active_delegator_per_pool_select_column {
  /** column name */
  num_active_delegator = "num_active_delegator",
  /** column name */
  pool_address = "pool_address",
}

/** Streaming cursor of the table "num_active_delegator_per_pool" */
export type num_active_delegator_per_pool_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: num_active_delegator_per_pool_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type num_active_delegator_per_pool_stream_cursor_value_input = {
  num_active_delegator: InputMaybe<Scalars["bigint"]>;
  pool_address: InputMaybe<Scalars["String"]>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type numeric_comparison_exp = {
  _eq: InputMaybe<Scalars["numeric"]>;
  _gt: InputMaybe<Scalars["numeric"]>;
  _gte: InputMaybe<Scalars["numeric"]>;
  _in: InputMaybe<Array<Scalars["numeric"]>>;
  _is_null: InputMaybe<Scalars["Boolean"]>;
  _lt: InputMaybe<Scalars["numeric"]>;
  _lte: InputMaybe<Scalars["numeric"]>;
  _neq: InputMaybe<Scalars["numeric"]>;
  _nin: InputMaybe<Array<Scalars["numeric"]>>;
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

/** columns and relationships of "processor_status" */
export type processor_status = {
  __typename?: "processor_status";
  last_success_version: Scalars["bigint"];
  last_updated: Scalars["timestamp"];
  processor: Scalars["String"];
};

/** Boolean expression to filter rows from the table "processor_status". All fields are combined with a logical 'AND'. */
export type processor_status_bool_exp = {
  _and: InputMaybe<Array<processor_status_bool_exp>>;
  _not: InputMaybe<processor_status_bool_exp>;
  _or: InputMaybe<Array<processor_status_bool_exp>>;
  last_success_version: InputMaybe<bigint_comparison_exp>;
  last_updated: InputMaybe<timestamp_comparison_exp>;
  processor: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "processor_status". */
export type processor_status_order_by = {
  last_success_version: InputMaybe<order_by>;
  last_updated: InputMaybe<order_by>;
  processor: InputMaybe<order_by>;
};

/** select columns of table "processor_status" */
export enum processor_status_select_column {
  /** column name */
  last_success_version = "last_success_version",
  /** column name */
  last_updated = "last_updated",
  /** column name */
  processor = "processor",
}

/** Streaming cursor of the table "processor_status" */
export type processor_status_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: processor_status_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type processor_status_stream_cursor_value_input = {
  last_success_version: InputMaybe<Scalars["bigint"]>;
  last_updated: InputMaybe<Scalars["timestamp"]>;
  processor: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "proposal_votes" */
export type proposal_votes = {
  __typename?: "proposal_votes";
  num_votes: Scalars["numeric"];
  proposal_id: Scalars["bigint"];
  should_pass: Scalars["Boolean"];
  staking_pool_address: Scalars["String"];
  transaction_timestamp: Scalars["timestamp"];
  transaction_version: Scalars["bigint"];
  voter_address: Scalars["String"];
};

/** aggregated selection of "proposal_votes" */
export type proposal_votes_aggregate = {
  __typename?: "proposal_votes_aggregate";
  aggregate: Maybe<proposal_votes_aggregate_fields>;
  nodes: Array<proposal_votes>;
};

/** aggregate fields of "proposal_votes" */
export type proposal_votes_aggregate_fields = {
  __typename?: "proposal_votes_aggregate_fields";
  avg: Maybe<proposal_votes_avg_fields>;
  count: Scalars["Int"];
  max: Maybe<proposal_votes_max_fields>;
  min: Maybe<proposal_votes_min_fields>;
  stddev: Maybe<proposal_votes_stddev_fields>;
  stddev_pop: Maybe<proposal_votes_stddev_pop_fields>;
  stddev_samp: Maybe<proposal_votes_stddev_samp_fields>;
  sum: Maybe<proposal_votes_sum_fields>;
  var_pop: Maybe<proposal_votes_var_pop_fields>;
  var_samp: Maybe<proposal_votes_var_samp_fields>;
  variance: Maybe<proposal_votes_variance_fields>;
};

/** aggregate fields of "proposal_votes" */
export type proposal_votes_aggregate_fieldscountArgs = {
  columns: InputMaybe<Array<proposal_votes_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type proposal_votes_avg_fields = {
  __typename?: "proposal_votes_avg_fields";
  num_votes: Maybe<Scalars["Float"]>;
  proposal_id: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "proposal_votes". All fields are combined with a logical 'AND'. */
export type proposal_votes_bool_exp = {
  _and: InputMaybe<Array<proposal_votes_bool_exp>>;
  _not: InputMaybe<proposal_votes_bool_exp>;
  _or: InputMaybe<Array<proposal_votes_bool_exp>>;
  num_votes: InputMaybe<numeric_comparison_exp>;
  proposal_id: InputMaybe<bigint_comparison_exp>;
  should_pass: InputMaybe<Boolean_comparison_exp>;
  staking_pool_address: InputMaybe<String_comparison_exp>;
  transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  transaction_version: InputMaybe<bigint_comparison_exp>;
  voter_address: InputMaybe<String_comparison_exp>;
};

/** aggregate max on columns */
export type proposal_votes_max_fields = {
  __typename?: "proposal_votes_max_fields";
  num_votes: Maybe<Scalars["numeric"]>;
  proposal_id: Maybe<Scalars["bigint"]>;
  staking_pool_address: Maybe<Scalars["String"]>;
  transaction_timestamp: Maybe<Scalars["timestamp"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
  voter_address: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type proposal_votes_min_fields = {
  __typename?: "proposal_votes_min_fields";
  num_votes: Maybe<Scalars["numeric"]>;
  proposal_id: Maybe<Scalars["bigint"]>;
  staking_pool_address: Maybe<Scalars["String"]>;
  transaction_timestamp: Maybe<Scalars["timestamp"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
  voter_address: Maybe<Scalars["String"]>;
};

/** Ordering options when selecting data from "proposal_votes". */
export type proposal_votes_order_by = {
  num_votes: InputMaybe<order_by>;
  proposal_id: InputMaybe<order_by>;
  should_pass: InputMaybe<order_by>;
  staking_pool_address: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
  voter_address: InputMaybe<order_by>;
};

/** select columns of table "proposal_votes" */
export enum proposal_votes_select_column {
  /** column name */
  num_votes = "num_votes",
  /** column name */
  proposal_id = "proposal_id",
  /** column name */
  should_pass = "should_pass",
  /** column name */
  staking_pool_address = "staking_pool_address",
  /** column name */
  transaction_timestamp = "transaction_timestamp",
  /** column name */
  transaction_version = "transaction_version",
  /** column name */
  voter_address = "voter_address",
}

/** aggregate stddev on columns */
export type proposal_votes_stddev_fields = {
  __typename?: "proposal_votes_stddev_fields";
  num_votes: Maybe<Scalars["Float"]>;
  proposal_id: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type proposal_votes_stddev_pop_fields = {
  __typename?: "proposal_votes_stddev_pop_fields";
  num_votes: Maybe<Scalars["Float"]>;
  proposal_id: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type proposal_votes_stddev_samp_fields = {
  __typename?: "proposal_votes_stddev_samp_fields";
  num_votes: Maybe<Scalars["Float"]>;
  proposal_id: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "proposal_votes" */
export type proposal_votes_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: proposal_votes_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type proposal_votes_stream_cursor_value_input = {
  num_votes: InputMaybe<Scalars["numeric"]>;
  proposal_id: InputMaybe<Scalars["bigint"]>;
  should_pass: InputMaybe<Scalars["Boolean"]>;
  staking_pool_address: InputMaybe<Scalars["String"]>;
  transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  transaction_version: InputMaybe<Scalars["bigint"]>;
  voter_address: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type proposal_votes_sum_fields = {
  __typename?: "proposal_votes_sum_fields";
  num_votes: Maybe<Scalars["numeric"]>;
  proposal_id: Maybe<Scalars["bigint"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** aggregate var_pop on columns */
export type proposal_votes_var_pop_fields = {
  __typename?: "proposal_votes_var_pop_fields";
  num_votes: Maybe<Scalars["Float"]>;
  proposal_id: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type proposal_votes_var_samp_fields = {
  __typename?: "proposal_votes_var_samp_fields";
  num_votes: Maybe<Scalars["Float"]>;
  proposal_id: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type proposal_votes_variance_fields = {
  __typename?: "proposal_votes_variance_fields";
  num_votes: Maybe<Scalars["Float"]>;
  proposal_id: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

export type query_root = {
  __typename?: "query_root";
  /** fetch data from the table: "account_transactions" */
  account_transactions: Array<account_transactions>;
  /** fetch aggregated fields from the table: "account_transactions" */
  account_transactions_aggregate: account_transactions_aggregate;
  /** fetch data from the table: "account_transactions" using primary key columns */
  account_transactions_by_pk: Maybe<account_transactions>;
  /** fetch data from the table: "address_events_summary" */
  address_events_summary: Array<address_events_summary>;
  /** fetch data from the table: "address_version_from_events" */
  address_version_from_events: Array<address_version_from_events>;
  /** fetch aggregated fields from the table: "address_version_from_events" */
  address_version_from_events_aggregate: address_version_from_events_aggregate;
  /** fetch data from the table: "address_version_from_move_resources" */
  address_version_from_move_resources: Array<address_version_from_move_resources>;
  /** fetch aggregated fields from the table: "address_version_from_move_resources" */
  address_version_from_move_resources_aggregate: address_version_from_move_resources_aggregate;
  /** fetch data from the table: "block_metadata_transactions" */
  block_metadata_transactions: Array<block_metadata_transactions>;
  /** fetch data from the table: "block_metadata_transactions" using primary key columns */
  block_metadata_transactions_by_pk: Maybe<block_metadata_transactions>;
  /** An array relationship */
  coin_activities: Array<coin_activities>;
  /** An aggregate relationship */
  coin_activities_aggregate: coin_activities_aggregate;
  /** fetch data from the table: "coin_activities" using primary key columns */
  coin_activities_by_pk: Maybe<coin_activities>;
  /** fetch data from the table: "coin_balances" */
  coin_balances: Array<coin_balances>;
  /** fetch data from the table: "coin_balances" using primary key columns */
  coin_balances_by_pk: Maybe<coin_balances>;
  /** fetch data from the table: "coin_infos" */
  coin_infos: Array<coin_infos>;
  /** fetch data from the table: "coin_infos" using primary key columns */
  coin_infos_by_pk: Maybe<coin_infos>;
  /** fetch data from the table: "coin_supply" */
  coin_supply: Array<coin_supply>;
  /** fetch data from the table: "coin_supply" using primary key columns */
  coin_supply_by_pk: Maybe<coin_supply>;
  /** fetch data from the table: "collection_datas" */
  collection_datas: Array<collection_datas>;
  /** fetch data from the table: "collection_datas" using primary key columns */
  collection_datas_by_pk: Maybe<collection_datas>;
  /** fetch data from the table: "current_ans_lookup" */
  current_ans_lookup: Array<current_ans_lookup>;
  /** fetch data from the table: "current_ans_lookup" using primary key columns */
  current_ans_lookup_by_pk: Maybe<current_ans_lookup>;
  /** fetch data from the table: "current_ans_lookup_v2" */
  current_ans_lookup_v2: Array<current_ans_lookup_v2>;
  /** fetch data from the table: "current_ans_lookup_v2" using primary key columns */
  current_ans_lookup_v2_by_pk: Maybe<current_ans_lookup_v2>;
  /** fetch data from the table: "current_aptos_names" */
  current_aptos_names: Array<current_aptos_names>;
  /** fetch aggregated fields from the table: "current_aptos_names" */
  current_aptos_names_aggregate: current_aptos_names_aggregate;
  /** fetch data from the table: "current_coin_balances" */
  current_coin_balances: Array<current_coin_balances>;
  /** fetch data from the table: "current_coin_balances" using primary key columns */
  current_coin_balances_by_pk: Maybe<current_coin_balances>;
  /** fetch data from the table: "current_collection_datas" */
  current_collection_datas: Array<current_collection_datas>;
  /** fetch data from the table: "current_collection_datas" using primary key columns */
  current_collection_datas_by_pk: Maybe<current_collection_datas>;
  /** fetch data from the table: "current_collection_ownership_v2_view" */
  current_collection_ownership_v2_view: Array<current_collection_ownership_v2_view>;
  /** fetch aggregated fields from the table: "current_collection_ownership_v2_view" */
  current_collection_ownership_v2_view_aggregate: current_collection_ownership_v2_view_aggregate;
  /** fetch data from the table: "current_collections_v2" */
  current_collections_v2: Array<current_collections_v2>;
  /** fetch data from the table: "current_collections_v2" using primary key columns */
  current_collections_v2_by_pk: Maybe<current_collections_v2>;
  /** fetch data from the table: "current_delegated_staking_pool_balances" */
  current_delegated_staking_pool_balances: Array<current_delegated_staking_pool_balances>;
  /** fetch data from the table: "current_delegated_staking_pool_balances" using primary key columns */
  current_delegated_staking_pool_balances_by_pk: Maybe<current_delegated_staking_pool_balances>;
  /** fetch data from the table: "current_delegated_voter" */
  current_delegated_voter: Array<current_delegated_voter>;
  /** fetch data from the table: "current_delegated_voter" using primary key columns */
  current_delegated_voter_by_pk: Maybe<current_delegated_voter>;
  /** fetch data from the table: "current_delegator_balances" */
  current_delegator_balances: Array<current_delegator_balances>;
  /** fetch data from the table: "current_delegator_balances" using primary key columns */
  current_delegator_balances_by_pk: Maybe<current_delegator_balances>;
  /** fetch data from the table: "current_fungible_asset_balances" */
  current_fungible_asset_balances: Array<current_fungible_asset_balances>;
  /** fetch aggregated fields from the table: "current_fungible_asset_balances" */
  current_fungible_asset_balances_aggregate: current_fungible_asset_balances_aggregate;
  /** fetch data from the table: "current_fungible_asset_balances" using primary key columns */
  current_fungible_asset_balances_by_pk: Maybe<current_fungible_asset_balances>;
  /** fetch data from the table: "current_objects" */
  current_objects: Array<current_objects>;
  /** fetch data from the table: "current_objects" using primary key columns */
  current_objects_by_pk: Maybe<current_objects>;
  /** fetch data from the table: "current_staking_pool_voter" */
  current_staking_pool_voter: Array<current_staking_pool_voter>;
  /** fetch data from the table: "current_staking_pool_voter" using primary key columns */
  current_staking_pool_voter_by_pk: Maybe<current_staking_pool_voter>;
  /** fetch data from the table: "current_table_items" */
  current_table_items: Array<current_table_items>;
  /** fetch data from the table: "current_table_items" using primary key columns */
  current_table_items_by_pk: Maybe<current_table_items>;
  /** fetch data from the table: "current_token_datas" */
  current_token_datas: Array<current_token_datas>;
  /** fetch data from the table: "current_token_datas" using primary key columns */
  current_token_datas_by_pk: Maybe<current_token_datas>;
  /** fetch data from the table: "current_token_datas_v2" */
  current_token_datas_v2: Array<current_token_datas_v2>;
  /** fetch data from the table: "current_token_datas_v2" using primary key columns */
  current_token_datas_v2_by_pk: Maybe<current_token_datas_v2>;
  /** fetch data from the table: "current_token_ownerships" */
  current_token_ownerships: Array<current_token_ownerships>;
  /** fetch aggregated fields from the table: "current_token_ownerships" */
  current_token_ownerships_aggregate: current_token_ownerships_aggregate;
  /** fetch data from the table: "current_token_ownerships" using primary key columns */
  current_token_ownerships_by_pk: Maybe<current_token_ownerships>;
  /** fetch data from the table: "current_token_ownerships_v2" */
  current_token_ownerships_v2: Array<current_token_ownerships_v2>;
  /** fetch aggregated fields from the table: "current_token_ownerships_v2" */
  current_token_ownerships_v2_aggregate: current_token_ownerships_v2_aggregate;
  /** fetch data from the table: "current_token_ownerships_v2" using primary key columns */
  current_token_ownerships_v2_by_pk: Maybe<current_token_ownerships_v2>;
  /** fetch data from the table: "current_token_pending_claims" */
  current_token_pending_claims: Array<current_token_pending_claims>;
  /** fetch data from the table: "current_token_pending_claims" using primary key columns */
  current_token_pending_claims_by_pk: Maybe<current_token_pending_claims>;
  /** An array relationship */
  delegated_staking_activities: Array<delegated_staking_activities>;
  /** fetch data from the table: "delegated_staking_activities" using primary key columns */
  delegated_staking_activities_by_pk: Maybe<delegated_staking_activities>;
  /** fetch data from the table: "delegated_staking_pools" */
  delegated_staking_pools: Array<delegated_staking_pools>;
  /** fetch data from the table: "delegated_staking_pools" using primary key columns */
  delegated_staking_pools_by_pk: Maybe<delegated_staking_pools>;
  /** fetch data from the table: "delegator_distinct_pool" */
  delegator_distinct_pool: Array<delegator_distinct_pool>;
  /** fetch aggregated fields from the table: "delegator_distinct_pool" */
  delegator_distinct_pool_aggregate: delegator_distinct_pool_aggregate;
  /** fetch data from the table: "events" */
  events: Array<events>;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk: Maybe<events>;
  /** An array relationship */
  fungible_asset_activities: Array<fungible_asset_activities>;
  /** fetch data from the table: "fungible_asset_activities" using primary key columns */
  fungible_asset_activities_by_pk: Maybe<fungible_asset_activities>;
  /** fetch data from the table: "fungible_asset_metadata" */
  fungible_asset_metadata: Array<fungible_asset_metadata>;
  /** fetch data from the table: "fungible_asset_metadata" using primary key columns */
  fungible_asset_metadata_by_pk: Maybe<fungible_asset_metadata>;
  /** fetch data from the table: "indexer_status" */
  indexer_status: Array<indexer_status>;
  /** fetch data from the table: "indexer_status" using primary key columns */
  indexer_status_by_pk: Maybe<indexer_status>;
  /** fetch data from the table: "ledger_infos" */
  ledger_infos: Array<ledger_infos>;
  /** fetch data from the table: "ledger_infos" using primary key columns */
  ledger_infos_by_pk: Maybe<ledger_infos>;
  /** fetch data from the table: "move_resources" */
  move_resources: Array<move_resources>;
  /** fetch aggregated fields from the table: "move_resources" */
  move_resources_aggregate: move_resources_aggregate;
  /** fetch data from the table: "nft_marketplace_v2.current_nft_marketplace_auctions" */
  nft_marketplace_v2_current_nft_marketplace_auctions: Array<nft_marketplace_v2_current_nft_marketplace_auctions>;
  /** fetch data from the table: "nft_marketplace_v2.current_nft_marketplace_auctions" using primary key columns */
  nft_marketplace_v2_current_nft_marketplace_auctions_by_pk: Maybe<nft_marketplace_v2_current_nft_marketplace_auctions>;
  /** fetch data from the table: "nft_marketplace_v2.current_nft_marketplace_collection_offers" */
  nft_marketplace_v2_current_nft_marketplace_collection_offers: Array<nft_marketplace_v2_current_nft_marketplace_collection_offers>;
  /** fetch data from the table: "nft_marketplace_v2.current_nft_marketplace_collection_offers" using primary key columns */
  nft_marketplace_v2_current_nft_marketplace_collection_offers_by_pk: Maybe<nft_marketplace_v2_current_nft_marketplace_collection_offers>;
  /** fetch data from the table: "nft_marketplace_v2.current_nft_marketplace_listings" */
  nft_marketplace_v2_current_nft_marketplace_listings: Array<nft_marketplace_v2_current_nft_marketplace_listings>;
  /** fetch data from the table: "nft_marketplace_v2.current_nft_marketplace_listings" using primary key columns */
  nft_marketplace_v2_current_nft_marketplace_listings_by_pk: Maybe<nft_marketplace_v2_current_nft_marketplace_listings>;
  /** fetch data from the table: "nft_marketplace_v2.current_nft_marketplace_token_offers" */
  nft_marketplace_v2_current_nft_marketplace_token_offers: Array<nft_marketplace_v2_current_nft_marketplace_token_offers>;
  /** fetch data from the table: "nft_marketplace_v2.current_nft_marketplace_token_offers" using primary key columns */
  nft_marketplace_v2_current_nft_marketplace_token_offers_by_pk: Maybe<nft_marketplace_v2_current_nft_marketplace_token_offers>;
  /** fetch data from the table: "nft_marketplace_v2.nft_marketplace_activities" */
  nft_marketplace_v2_nft_marketplace_activities: Array<nft_marketplace_v2_nft_marketplace_activities>;
  /** fetch data from the table: "nft_marketplace_v2.nft_marketplace_activities" using primary key columns */
  nft_marketplace_v2_nft_marketplace_activities_by_pk: Maybe<nft_marketplace_v2_nft_marketplace_activities>;
  /** fetch data from the table: "nft_metadata_crawler.parsed_asset_uris" */
  nft_metadata_crawler_parsed_asset_uris: Array<nft_metadata_crawler_parsed_asset_uris>;
  /** fetch data from the table: "nft_metadata_crawler.parsed_asset_uris" using primary key columns */
  nft_metadata_crawler_parsed_asset_uris_by_pk: Maybe<nft_metadata_crawler_parsed_asset_uris>;
  /** fetch data from the table: "num_active_delegator_per_pool" */
  num_active_delegator_per_pool: Array<num_active_delegator_per_pool>;
  /** fetch data from the table: "processor_status" */
  processor_status: Array<processor_status>;
  /** fetch data from the table: "processor_status" using primary key columns */
  processor_status_by_pk: Maybe<processor_status>;
  /** fetch data from the table: "proposal_votes" */
  proposal_votes: Array<proposal_votes>;
  /** fetch aggregated fields from the table: "proposal_votes" */
  proposal_votes_aggregate: proposal_votes_aggregate;
  /** fetch data from the table: "proposal_votes" using primary key columns */
  proposal_votes_by_pk: Maybe<proposal_votes>;
  /** fetch data from the table: "table_items" */
  table_items: Array<table_items>;
  /** fetch data from the table: "table_items" using primary key columns */
  table_items_by_pk: Maybe<table_items>;
  /** fetch data from the table: "table_metadatas" */
  table_metadatas: Array<table_metadatas>;
  /** fetch data from the table: "table_metadatas" using primary key columns */
  table_metadatas_by_pk: Maybe<table_metadatas>;
  /** An array relationship */
  token_activities: Array<token_activities>;
  /** An aggregate relationship */
  token_activities_aggregate: token_activities_aggregate;
  /** fetch data from the table: "token_activities" using primary key columns */
  token_activities_by_pk: Maybe<token_activities>;
  /** An array relationship */
  token_activities_v2: Array<token_activities_v2>;
  /** An aggregate relationship */
  token_activities_v2_aggregate: token_activities_v2_aggregate;
  /** fetch data from the table: "token_activities_v2" using primary key columns */
  token_activities_v2_by_pk: Maybe<token_activities_v2>;
  /** fetch data from the table: "token_datas" */
  token_datas: Array<token_datas>;
  /** fetch data from the table: "token_datas" using primary key columns */
  token_datas_by_pk: Maybe<token_datas>;
  /** fetch data from the table: "token_ownerships" */
  token_ownerships: Array<token_ownerships>;
  /** fetch data from the table: "token_ownerships" using primary key columns */
  token_ownerships_by_pk: Maybe<token_ownerships>;
  /** fetch data from the table: "tokens" */
  tokens: Array<tokens>;
  /** fetch data from the table: "tokens" using primary key columns */
  tokens_by_pk: Maybe<tokens>;
  /** fetch data from the table: "user_transactions" */
  user_transactions: Array<user_transactions>;
  /** fetch data from the table: "user_transactions" using primary key columns */
  user_transactions_by_pk: Maybe<user_transactions>;
};

export type query_rootaccount_transactionsArgs = {
  distinct_on: InputMaybe<Array<account_transactions_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<account_transactions_order_by>>;
  where: InputMaybe<account_transactions_bool_exp>;
};

export type query_rootaccount_transactions_aggregateArgs = {
  distinct_on: InputMaybe<Array<account_transactions_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<account_transactions_order_by>>;
  where: InputMaybe<account_transactions_bool_exp>;
};

export type query_rootaccount_transactions_by_pkArgs = {
  account_address: Scalars["String"];
  transaction_version: Scalars["bigint"];
};

export type query_rootaddress_events_summaryArgs = {
  distinct_on: InputMaybe<Array<address_events_summary_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<address_events_summary_order_by>>;
  where: InputMaybe<address_events_summary_bool_exp>;
};

export type query_rootaddress_version_from_eventsArgs = {
  distinct_on: InputMaybe<Array<address_version_from_events_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<address_version_from_events_order_by>>;
  where: InputMaybe<address_version_from_events_bool_exp>;
};

export type query_rootaddress_version_from_events_aggregateArgs = {
  distinct_on: InputMaybe<Array<address_version_from_events_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<address_version_from_events_order_by>>;
  where: InputMaybe<address_version_from_events_bool_exp>;
};

export type query_rootaddress_version_from_move_resourcesArgs = {
  distinct_on: InputMaybe<
    Array<address_version_from_move_resources_select_column>
  >;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<address_version_from_move_resources_order_by>>;
  where: InputMaybe<address_version_from_move_resources_bool_exp>;
};

export type query_rootaddress_version_from_move_resources_aggregateArgs = {
  distinct_on: InputMaybe<
    Array<address_version_from_move_resources_select_column>
  >;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<address_version_from_move_resources_order_by>>;
  where: InputMaybe<address_version_from_move_resources_bool_exp>;
};

export type query_rootblock_metadata_transactionsArgs = {
  distinct_on: InputMaybe<Array<block_metadata_transactions_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<block_metadata_transactions_order_by>>;
  where: InputMaybe<block_metadata_transactions_bool_exp>;
};

export type query_rootblock_metadata_transactions_by_pkArgs = {
  version: Scalars["bigint"];
};

export type query_rootcoin_activitiesArgs = {
  distinct_on: InputMaybe<Array<coin_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<coin_activities_order_by>>;
  where: InputMaybe<coin_activities_bool_exp>;
};

export type query_rootcoin_activities_aggregateArgs = {
  distinct_on: InputMaybe<Array<coin_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<coin_activities_order_by>>;
  where: InputMaybe<coin_activities_bool_exp>;
};

export type query_rootcoin_activities_by_pkArgs = {
  event_account_address: Scalars["String"];
  event_creation_number: Scalars["bigint"];
  event_sequence_number: Scalars["bigint"];
  transaction_version: Scalars["bigint"];
};

export type query_rootcoin_balancesArgs = {
  distinct_on: InputMaybe<Array<coin_balances_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<coin_balances_order_by>>;
  where: InputMaybe<coin_balances_bool_exp>;
};

export type query_rootcoin_balances_by_pkArgs = {
  coin_type_hash: Scalars["String"];
  owner_address: Scalars["String"];
  transaction_version: Scalars["bigint"];
};

export type query_rootcoin_infosArgs = {
  distinct_on: InputMaybe<Array<coin_infos_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<coin_infos_order_by>>;
  where: InputMaybe<coin_infos_bool_exp>;
};

export type query_rootcoin_infos_by_pkArgs = {
  coin_type_hash: Scalars["String"];
};

export type query_rootcoin_supplyArgs = {
  distinct_on: InputMaybe<Array<coin_supply_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<coin_supply_order_by>>;
  where: InputMaybe<coin_supply_bool_exp>;
};

export type query_rootcoin_supply_by_pkArgs = {
  coin_type_hash: Scalars["String"];
  transaction_version: Scalars["bigint"];
};

export type query_rootcollection_datasArgs = {
  distinct_on: InputMaybe<Array<collection_datas_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<collection_datas_order_by>>;
  where: InputMaybe<collection_datas_bool_exp>;
};

export type query_rootcollection_datas_by_pkArgs = {
  collection_data_id_hash: Scalars["String"];
  transaction_version: Scalars["bigint"];
};

export type query_rootcurrent_ans_lookupArgs = {
  distinct_on: InputMaybe<Array<current_ans_lookup_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_ans_lookup_order_by>>;
  where: InputMaybe<current_ans_lookup_bool_exp>;
};

export type query_rootcurrent_ans_lookup_by_pkArgs = {
  domain: Scalars["String"];
  subdomain: Scalars["String"];
};

export type query_rootcurrent_ans_lookup_v2Args = {
  distinct_on: InputMaybe<Array<current_ans_lookup_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_ans_lookup_v2_order_by>>;
  where: InputMaybe<current_ans_lookup_v2_bool_exp>;
};

export type query_rootcurrent_ans_lookup_v2_by_pkArgs = {
  domain: Scalars["String"];
  subdomain: Scalars["String"];
  token_standard: Scalars["String"];
};

export type query_rootcurrent_aptos_namesArgs = {
  distinct_on: InputMaybe<Array<current_aptos_names_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_aptos_names_order_by>>;
  where: InputMaybe<current_aptos_names_bool_exp>;
};

export type query_rootcurrent_aptos_names_aggregateArgs = {
  distinct_on: InputMaybe<Array<current_aptos_names_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_aptos_names_order_by>>;
  where: InputMaybe<current_aptos_names_bool_exp>;
};

export type query_rootcurrent_coin_balancesArgs = {
  distinct_on: InputMaybe<Array<current_coin_balances_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_coin_balances_order_by>>;
  where: InputMaybe<current_coin_balances_bool_exp>;
};

export type query_rootcurrent_coin_balances_by_pkArgs = {
  coin_type_hash: Scalars["String"];
  owner_address: Scalars["String"];
};

export type query_rootcurrent_collection_datasArgs = {
  distinct_on: InputMaybe<Array<current_collection_datas_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_collection_datas_order_by>>;
  where: InputMaybe<current_collection_datas_bool_exp>;
};

export type query_rootcurrent_collection_datas_by_pkArgs = {
  collection_data_id_hash: Scalars["String"];
};

export type query_rootcurrent_collection_ownership_v2_viewArgs = {
  distinct_on: InputMaybe<
    Array<current_collection_ownership_v2_view_select_column>
  >;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_collection_ownership_v2_view_order_by>>;
  where: InputMaybe<current_collection_ownership_v2_view_bool_exp>;
};

export type query_rootcurrent_collection_ownership_v2_view_aggregateArgs = {
  distinct_on: InputMaybe<
    Array<current_collection_ownership_v2_view_select_column>
  >;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_collection_ownership_v2_view_order_by>>;
  where: InputMaybe<current_collection_ownership_v2_view_bool_exp>;
};

export type query_rootcurrent_collections_v2Args = {
  distinct_on: InputMaybe<Array<current_collections_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_collections_v2_order_by>>;
  where: InputMaybe<current_collections_v2_bool_exp>;
};

export type query_rootcurrent_collections_v2_by_pkArgs = {
  collection_id: Scalars["String"];
};

export type query_rootcurrent_delegated_staking_pool_balancesArgs = {
  distinct_on: InputMaybe<
    Array<current_delegated_staking_pool_balances_select_column>
  >;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_delegated_staking_pool_balances_order_by>>;
  where: InputMaybe<current_delegated_staking_pool_balances_bool_exp>;
};

export type query_rootcurrent_delegated_staking_pool_balances_by_pkArgs = {
  staking_pool_address: Scalars["String"];
};

export type query_rootcurrent_delegated_voterArgs = {
  distinct_on: InputMaybe<Array<current_delegated_voter_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_delegated_voter_order_by>>;
  where: InputMaybe<current_delegated_voter_bool_exp>;
};

export type query_rootcurrent_delegated_voter_by_pkArgs = {
  delegation_pool_address: Scalars["String"];
  delegator_address: Scalars["String"];
};

export type query_rootcurrent_delegator_balancesArgs = {
  distinct_on: InputMaybe<Array<current_delegator_balances_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_delegator_balances_order_by>>;
  where: InputMaybe<current_delegator_balances_bool_exp>;
};

export type query_rootcurrent_delegator_balances_by_pkArgs = {
  delegator_address: Scalars["String"];
  pool_address: Scalars["String"];
  pool_type: Scalars["String"];
  table_handle: Scalars["String"];
};

export type query_rootcurrent_fungible_asset_balancesArgs = {
  distinct_on: InputMaybe<Array<current_fungible_asset_balances_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_fungible_asset_balances_order_by>>;
  where: InputMaybe<current_fungible_asset_balances_bool_exp>;
};

export type query_rootcurrent_fungible_asset_balances_aggregateArgs = {
  distinct_on: InputMaybe<Array<current_fungible_asset_balances_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_fungible_asset_balances_order_by>>;
  where: InputMaybe<current_fungible_asset_balances_bool_exp>;
};

export type query_rootcurrent_fungible_asset_balances_by_pkArgs = {
  storage_id: Scalars["String"];
};

export type query_rootcurrent_objectsArgs = {
  distinct_on: InputMaybe<Array<current_objects_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_objects_order_by>>;
  where: InputMaybe<current_objects_bool_exp>;
};

export type query_rootcurrent_objects_by_pkArgs = {
  object_address: Scalars["String"];
};

export type query_rootcurrent_staking_pool_voterArgs = {
  distinct_on: InputMaybe<Array<current_staking_pool_voter_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_staking_pool_voter_order_by>>;
  where: InputMaybe<current_staking_pool_voter_bool_exp>;
};

export type query_rootcurrent_staking_pool_voter_by_pkArgs = {
  staking_pool_address: Scalars["String"];
};

export type query_rootcurrent_table_itemsArgs = {
  distinct_on: InputMaybe<Array<current_table_items_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_table_items_order_by>>;
  where: InputMaybe<current_table_items_bool_exp>;
};

export type query_rootcurrent_table_items_by_pkArgs = {
  key_hash: Scalars["String"];
  table_handle: Scalars["String"];
};

export type query_rootcurrent_token_datasArgs = {
  distinct_on: InputMaybe<Array<current_token_datas_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_token_datas_order_by>>;
  where: InputMaybe<current_token_datas_bool_exp>;
};

export type query_rootcurrent_token_datas_by_pkArgs = {
  token_data_id_hash: Scalars["String"];
};

export type query_rootcurrent_token_datas_v2Args = {
  distinct_on: InputMaybe<Array<current_token_datas_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_token_datas_v2_order_by>>;
  where: InputMaybe<current_token_datas_v2_bool_exp>;
};

export type query_rootcurrent_token_datas_v2_by_pkArgs = {
  token_data_id: Scalars["String"];
};

export type query_rootcurrent_token_ownershipsArgs = {
  distinct_on: InputMaybe<Array<current_token_ownerships_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_token_ownerships_order_by>>;
  where: InputMaybe<current_token_ownerships_bool_exp>;
};

export type query_rootcurrent_token_ownerships_aggregateArgs = {
  distinct_on: InputMaybe<Array<current_token_ownerships_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_token_ownerships_order_by>>;
  where: InputMaybe<current_token_ownerships_bool_exp>;
};

export type query_rootcurrent_token_ownerships_by_pkArgs = {
  owner_address: Scalars["String"];
  property_version: Scalars["numeric"];
  token_data_id_hash: Scalars["String"];
};

export type query_rootcurrent_token_ownerships_v2Args = {
  distinct_on: InputMaybe<Array<current_token_ownerships_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_token_ownerships_v2_order_by>>;
  where: InputMaybe<current_token_ownerships_v2_bool_exp>;
};

export type query_rootcurrent_token_ownerships_v2_aggregateArgs = {
  distinct_on: InputMaybe<Array<current_token_ownerships_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_token_ownerships_v2_order_by>>;
  where: InputMaybe<current_token_ownerships_v2_bool_exp>;
};

export type query_rootcurrent_token_ownerships_v2_by_pkArgs = {
  owner_address: Scalars["String"];
  property_version_v1: Scalars["numeric"];
  storage_id: Scalars["String"];
  token_data_id: Scalars["String"];
};

export type query_rootcurrent_token_pending_claimsArgs = {
  distinct_on: InputMaybe<Array<current_token_pending_claims_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_token_pending_claims_order_by>>;
  where: InputMaybe<current_token_pending_claims_bool_exp>;
};

export type query_rootcurrent_token_pending_claims_by_pkArgs = {
  from_address: Scalars["String"];
  property_version: Scalars["numeric"];
  to_address: Scalars["String"];
  token_data_id_hash: Scalars["String"];
};

export type query_rootdelegated_staking_activitiesArgs = {
  distinct_on: InputMaybe<Array<delegated_staking_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<delegated_staking_activities_order_by>>;
  where: InputMaybe<delegated_staking_activities_bool_exp>;
};

export type query_rootdelegated_staking_activities_by_pkArgs = {
  event_index: Scalars["bigint"];
  transaction_version: Scalars["bigint"];
};

export type query_rootdelegated_staking_poolsArgs = {
  distinct_on: InputMaybe<Array<delegated_staking_pools_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<delegated_staking_pools_order_by>>;
  where: InputMaybe<delegated_staking_pools_bool_exp>;
};

export type query_rootdelegated_staking_pools_by_pkArgs = {
  staking_pool_address: Scalars["String"];
};

export type query_rootdelegator_distinct_poolArgs = {
  distinct_on: InputMaybe<Array<delegator_distinct_pool_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<delegator_distinct_pool_order_by>>;
  where: InputMaybe<delegator_distinct_pool_bool_exp>;
};

export type query_rootdelegator_distinct_pool_aggregateArgs = {
  distinct_on: InputMaybe<Array<delegator_distinct_pool_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<delegator_distinct_pool_order_by>>;
  where: InputMaybe<delegator_distinct_pool_bool_exp>;
};

export type query_rooteventsArgs = {
  distinct_on: InputMaybe<Array<events_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<events_order_by>>;
  where: InputMaybe<events_bool_exp>;
};

export type query_rootevents_by_pkArgs = {
  event_index: Scalars["bigint"];
  transaction_version: Scalars["bigint"];
};

export type query_rootfungible_asset_activitiesArgs = {
  distinct_on: InputMaybe<Array<fungible_asset_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<fungible_asset_activities_order_by>>;
  where: InputMaybe<fungible_asset_activities_bool_exp>;
};

export type query_rootfungible_asset_activities_by_pkArgs = {
  event_index: Scalars["bigint"];
  transaction_version: Scalars["bigint"];
};

export type query_rootfungible_asset_metadataArgs = {
  distinct_on: InputMaybe<Array<fungible_asset_metadata_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<fungible_asset_metadata_order_by>>;
  where: InputMaybe<fungible_asset_metadata_bool_exp>;
};

export type query_rootfungible_asset_metadata_by_pkArgs = {
  asset_type: Scalars["String"];
};

export type query_rootindexer_statusArgs = {
  distinct_on: InputMaybe<Array<indexer_status_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<indexer_status_order_by>>;
  where: InputMaybe<indexer_status_bool_exp>;
};

export type query_rootindexer_status_by_pkArgs = {
  db: Scalars["String"];
};

export type query_rootledger_infosArgs = {
  distinct_on: InputMaybe<Array<ledger_infos_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<ledger_infos_order_by>>;
  where: InputMaybe<ledger_infos_bool_exp>;
};

export type query_rootledger_infos_by_pkArgs = {
  chain_id: Scalars["bigint"];
};

export type query_rootmove_resourcesArgs = {
  distinct_on: InputMaybe<Array<move_resources_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<move_resources_order_by>>;
  where: InputMaybe<move_resources_bool_exp>;
};

export type query_rootmove_resources_aggregateArgs = {
  distinct_on: InputMaybe<Array<move_resources_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<move_resources_order_by>>;
  where: InputMaybe<move_resources_bool_exp>;
};

export type query_rootnft_marketplace_v2_current_nft_marketplace_auctionsArgs =
  {
    distinct_on: InputMaybe<
      Array<nft_marketplace_v2_current_nft_marketplace_auctions_select_column>
    >;
    limit: InputMaybe<Scalars["Int"]>;
    offset: InputMaybe<Scalars["Int"]>;
    order_by: InputMaybe<
      Array<nft_marketplace_v2_current_nft_marketplace_auctions_order_by>
    >;
    where: InputMaybe<nft_marketplace_v2_current_nft_marketplace_auctions_bool_exp>;
  };

export type query_rootnft_marketplace_v2_current_nft_marketplace_auctions_by_pkArgs =
  {
    listing_id: Scalars["String"];
    token_data_id: Scalars["String"];
  };

export type query_rootnft_marketplace_v2_current_nft_marketplace_collection_offersArgs =
  {
    distinct_on: InputMaybe<
      Array<nft_marketplace_v2_current_nft_marketplace_collection_offers_select_column>
    >;
    limit: InputMaybe<Scalars["Int"]>;
    offset: InputMaybe<Scalars["Int"]>;
    order_by: InputMaybe<
      Array<nft_marketplace_v2_current_nft_marketplace_collection_offers_order_by>
    >;
    where: InputMaybe<nft_marketplace_v2_current_nft_marketplace_collection_offers_bool_exp>;
  };

export type query_rootnft_marketplace_v2_current_nft_marketplace_collection_offers_by_pkArgs =
  {
    collection_id: Scalars["String"];
    collection_offer_id: Scalars["String"];
  };

export type query_rootnft_marketplace_v2_current_nft_marketplace_listingsArgs =
  {
    distinct_on: InputMaybe<
      Array<nft_marketplace_v2_current_nft_marketplace_listings_select_column>
    >;
    limit: InputMaybe<Scalars["Int"]>;
    offset: InputMaybe<Scalars["Int"]>;
    order_by: InputMaybe<
      Array<nft_marketplace_v2_current_nft_marketplace_listings_order_by>
    >;
    where: InputMaybe<nft_marketplace_v2_current_nft_marketplace_listings_bool_exp>;
  };

export type query_rootnft_marketplace_v2_current_nft_marketplace_listings_by_pkArgs =
  {
    listing_id: Scalars["String"];
    token_data_id: Scalars["String"];
  };

export type query_rootnft_marketplace_v2_current_nft_marketplace_token_offersArgs =
  {
    distinct_on: InputMaybe<
      Array<nft_marketplace_v2_current_nft_marketplace_token_offers_select_column>
    >;
    limit: InputMaybe<Scalars["Int"]>;
    offset: InputMaybe<Scalars["Int"]>;
    order_by: InputMaybe<
      Array<nft_marketplace_v2_current_nft_marketplace_token_offers_order_by>
    >;
    where: InputMaybe<nft_marketplace_v2_current_nft_marketplace_token_offers_bool_exp>;
  };

export type query_rootnft_marketplace_v2_current_nft_marketplace_token_offers_by_pkArgs =
  {
    offer_id: Scalars["String"];
    token_data_id: Scalars["String"];
  };

export type query_rootnft_marketplace_v2_nft_marketplace_activitiesArgs = {
  distinct_on: InputMaybe<
    Array<nft_marketplace_v2_nft_marketplace_activities_select_column>
  >;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<
    Array<nft_marketplace_v2_nft_marketplace_activities_order_by>
  >;
  where: InputMaybe<nft_marketplace_v2_nft_marketplace_activities_bool_exp>;
};

export type query_rootnft_marketplace_v2_nft_marketplace_activities_by_pkArgs =
  {
    event_index: Scalars["bigint"];
    transaction_version: Scalars["bigint"];
  };

export type query_rootnft_metadata_crawler_parsed_asset_urisArgs = {
  distinct_on: InputMaybe<
    Array<nft_metadata_crawler_parsed_asset_uris_select_column>
  >;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<nft_metadata_crawler_parsed_asset_uris_order_by>>;
  where: InputMaybe<nft_metadata_crawler_parsed_asset_uris_bool_exp>;
};

export type query_rootnft_metadata_crawler_parsed_asset_uris_by_pkArgs = {
  asset_uri: Scalars["String"];
};

export type query_rootnum_active_delegator_per_poolArgs = {
  distinct_on: InputMaybe<Array<num_active_delegator_per_pool_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<num_active_delegator_per_pool_order_by>>;
  where: InputMaybe<num_active_delegator_per_pool_bool_exp>;
};

export type query_rootprocessor_statusArgs = {
  distinct_on: InputMaybe<Array<processor_status_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<processor_status_order_by>>;
  where: InputMaybe<processor_status_bool_exp>;
};

export type query_rootprocessor_status_by_pkArgs = {
  processor: Scalars["String"];
};

export type query_rootproposal_votesArgs = {
  distinct_on: InputMaybe<Array<proposal_votes_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<proposal_votes_order_by>>;
  where: InputMaybe<proposal_votes_bool_exp>;
};

export type query_rootproposal_votes_aggregateArgs = {
  distinct_on: InputMaybe<Array<proposal_votes_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<proposal_votes_order_by>>;
  where: InputMaybe<proposal_votes_bool_exp>;
};

export type query_rootproposal_votes_by_pkArgs = {
  proposal_id: Scalars["bigint"];
  transaction_version: Scalars["bigint"];
  voter_address: Scalars["String"];
};

export type query_roottable_itemsArgs = {
  distinct_on: InputMaybe<Array<table_items_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<table_items_order_by>>;
  where: InputMaybe<table_items_bool_exp>;
};

export type query_roottable_items_by_pkArgs = {
  transaction_version: Scalars["bigint"];
  write_set_change_index: Scalars["bigint"];
};

export type query_roottable_metadatasArgs = {
  distinct_on: InputMaybe<Array<table_metadatas_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<table_metadatas_order_by>>;
  where: InputMaybe<table_metadatas_bool_exp>;
};

export type query_roottable_metadatas_by_pkArgs = {
  handle: Scalars["String"];
};

export type query_roottoken_activitiesArgs = {
  distinct_on: InputMaybe<Array<token_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_activities_order_by>>;
  where: InputMaybe<token_activities_bool_exp>;
};

export type query_roottoken_activities_aggregateArgs = {
  distinct_on: InputMaybe<Array<token_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_activities_order_by>>;
  where: InputMaybe<token_activities_bool_exp>;
};

export type query_roottoken_activities_by_pkArgs = {
  event_account_address: Scalars["String"];
  event_creation_number: Scalars["bigint"];
  event_sequence_number: Scalars["bigint"];
  transaction_version: Scalars["bigint"];
};

export type query_roottoken_activities_v2Args = {
  distinct_on: InputMaybe<Array<token_activities_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_activities_v2_order_by>>;
  where: InputMaybe<token_activities_v2_bool_exp>;
};

export type query_roottoken_activities_v2_aggregateArgs = {
  distinct_on: InputMaybe<Array<token_activities_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_activities_v2_order_by>>;
  where: InputMaybe<token_activities_v2_bool_exp>;
};

export type query_roottoken_activities_v2_by_pkArgs = {
  event_index: Scalars["bigint"];
  transaction_version: Scalars["bigint"];
};

export type query_roottoken_datasArgs = {
  distinct_on: InputMaybe<Array<token_datas_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_datas_order_by>>;
  where: InputMaybe<token_datas_bool_exp>;
};

export type query_roottoken_datas_by_pkArgs = {
  token_data_id_hash: Scalars["String"];
  transaction_version: Scalars["bigint"];
};

export type query_roottoken_ownershipsArgs = {
  distinct_on: InputMaybe<Array<token_ownerships_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_ownerships_order_by>>;
  where: InputMaybe<token_ownerships_bool_exp>;
};

export type query_roottoken_ownerships_by_pkArgs = {
  property_version: Scalars["numeric"];
  table_handle: Scalars["String"];
  token_data_id_hash: Scalars["String"];
  transaction_version: Scalars["bigint"];
};

export type query_roottokensArgs = {
  distinct_on: InputMaybe<Array<tokens_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<tokens_order_by>>;
  where: InputMaybe<tokens_bool_exp>;
};

export type query_roottokens_by_pkArgs = {
  property_version: Scalars["numeric"];
  token_data_id_hash: Scalars["String"];
  transaction_version: Scalars["bigint"];
};

export type query_rootuser_transactionsArgs = {
  distinct_on: InputMaybe<Array<user_transactions_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<user_transactions_order_by>>;
  where: InputMaybe<user_transactions_bool_exp>;
};

export type query_rootuser_transactions_by_pkArgs = {
  version: Scalars["bigint"];
};

export type subscription_root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "account_transactions" */
  account_transactions: Array<account_transactions>;
  /** fetch aggregated fields from the table: "account_transactions" */
  account_transactions_aggregate: account_transactions_aggregate;
  /** fetch data from the table: "account_transactions" using primary key columns */
  account_transactions_by_pk: Maybe<account_transactions>;
  /** fetch data from the table in a streaming manner: "account_transactions" */
  account_transactions_stream: Array<account_transactions>;
  /** fetch data from the table: "address_events_summary" */
  address_events_summary: Array<address_events_summary>;
  /** fetch data from the table in a streaming manner: "address_events_summary" */
  address_events_summary_stream: Array<address_events_summary>;
  /** fetch data from the table: "address_version_from_events" */
  address_version_from_events: Array<address_version_from_events>;
  /** fetch aggregated fields from the table: "address_version_from_events" */
  address_version_from_events_aggregate: address_version_from_events_aggregate;
  /** fetch data from the table in a streaming manner: "address_version_from_events" */
  address_version_from_events_stream: Array<address_version_from_events>;
  /** fetch data from the table: "address_version_from_move_resources" */
  address_version_from_move_resources: Array<address_version_from_move_resources>;
  /** fetch aggregated fields from the table: "address_version_from_move_resources" */
  address_version_from_move_resources_aggregate: address_version_from_move_resources_aggregate;
  /** fetch data from the table in a streaming manner: "address_version_from_move_resources" */
  address_version_from_move_resources_stream: Array<address_version_from_move_resources>;
  /** fetch data from the table: "block_metadata_transactions" */
  block_metadata_transactions: Array<block_metadata_transactions>;
  /** fetch data from the table: "block_metadata_transactions" using primary key columns */
  block_metadata_transactions_by_pk: Maybe<block_metadata_transactions>;
  /** fetch data from the table in a streaming manner: "block_metadata_transactions" */
  block_metadata_transactions_stream: Array<block_metadata_transactions>;
  /** An array relationship */
  coin_activities: Array<coin_activities>;
  /** An aggregate relationship */
  coin_activities_aggregate: coin_activities_aggregate;
  /** fetch data from the table: "coin_activities" using primary key columns */
  coin_activities_by_pk: Maybe<coin_activities>;
  /** fetch data from the table in a streaming manner: "coin_activities" */
  coin_activities_stream: Array<coin_activities>;
  /** fetch data from the table: "coin_balances" */
  coin_balances: Array<coin_balances>;
  /** fetch data from the table: "coin_balances" using primary key columns */
  coin_balances_by_pk: Maybe<coin_balances>;
  /** fetch data from the table in a streaming manner: "coin_balances" */
  coin_balances_stream: Array<coin_balances>;
  /** fetch data from the table: "coin_infos" */
  coin_infos: Array<coin_infos>;
  /** fetch data from the table: "coin_infos" using primary key columns */
  coin_infos_by_pk: Maybe<coin_infos>;
  /** fetch data from the table in a streaming manner: "coin_infos" */
  coin_infos_stream: Array<coin_infos>;
  /** fetch data from the table: "coin_supply" */
  coin_supply: Array<coin_supply>;
  /** fetch data from the table: "coin_supply" using primary key columns */
  coin_supply_by_pk: Maybe<coin_supply>;
  /** fetch data from the table in a streaming manner: "coin_supply" */
  coin_supply_stream: Array<coin_supply>;
  /** fetch data from the table: "collection_datas" */
  collection_datas: Array<collection_datas>;
  /** fetch data from the table: "collection_datas" using primary key columns */
  collection_datas_by_pk: Maybe<collection_datas>;
  /** fetch data from the table in a streaming manner: "collection_datas" */
  collection_datas_stream: Array<collection_datas>;
  /** fetch data from the table: "current_ans_lookup" */
  current_ans_lookup: Array<current_ans_lookup>;
  /** fetch data from the table: "current_ans_lookup" using primary key columns */
  current_ans_lookup_by_pk: Maybe<current_ans_lookup>;
  /** fetch data from the table in a streaming manner: "current_ans_lookup" */
  current_ans_lookup_stream: Array<current_ans_lookup>;
  /** fetch data from the table: "current_ans_lookup_v2" */
  current_ans_lookup_v2: Array<current_ans_lookup_v2>;
  /** fetch data from the table: "current_ans_lookup_v2" using primary key columns */
  current_ans_lookup_v2_by_pk: Maybe<current_ans_lookup_v2>;
  /** fetch data from the table in a streaming manner: "current_ans_lookup_v2" */
  current_ans_lookup_v2_stream: Array<current_ans_lookup_v2>;
  /** fetch data from the table: "current_aptos_names" */
  current_aptos_names: Array<current_aptos_names>;
  /** fetch aggregated fields from the table: "current_aptos_names" */
  current_aptos_names_aggregate: current_aptos_names_aggregate;
  /** fetch data from the table in a streaming manner: "current_aptos_names" */
  current_aptos_names_stream: Array<current_aptos_names>;
  /** fetch data from the table: "current_coin_balances" */
  current_coin_balances: Array<current_coin_balances>;
  /** fetch data from the table: "current_coin_balances" using primary key columns */
  current_coin_balances_by_pk: Maybe<current_coin_balances>;
  /** fetch data from the table in a streaming manner: "current_coin_balances" */
  current_coin_balances_stream: Array<current_coin_balances>;
  /** fetch data from the table: "current_collection_datas" */
  current_collection_datas: Array<current_collection_datas>;
  /** fetch data from the table: "current_collection_datas" using primary key columns */
  current_collection_datas_by_pk: Maybe<current_collection_datas>;
  /** fetch data from the table in a streaming manner: "current_collection_datas" */
  current_collection_datas_stream: Array<current_collection_datas>;
  /** fetch data from the table: "current_collection_ownership_v2_view" */
  current_collection_ownership_v2_view: Array<current_collection_ownership_v2_view>;
  /** fetch aggregated fields from the table: "current_collection_ownership_v2_view" */
  current_collection_ownership_v2_view_aggregate: current_collection_ownership_v2_view_aggregate;
  /** fetch data from the table in a streaming manner: "current_collection_ownership_v2_view" */
  current_collection_ownership_v2_view_stream: Array<current_collection_ownership_v2_view>;
  /** fetch data from the table: "current_collections_v2" */
  current_collections_v2: Array<current_collections_v2>;
  /** fetch data from the table: "current_collections_v2" using primary key columns */
  current_collections_v2_by_pk: Maybe<current_collections_v2>;
  /** fetch data from the table in a streaming manner: "current_collections_v2" */
  current_collections_v2_stream: Array<current_collections_v2>;
  /** fetch data from the table: "current_delegated_staking_pool_balances" */
  current_delegated_staking_pool_balances: Array<current_delegated_staking_pool_balances>;
  /** fetch data from the table: "current_delegated_staking_pool_balances" using primary key columns */
  current_delegated_staking_pool_balances_by_pk: Maybe<current_delegated_staking_pool_balances>;
  /** fetch data from the table in a streaming manner: "current_delegated_staking_pool_balances" */
  current_delegated_staking_pool_balances_stream: Array<current_delegated_staking_pool_balances>;
  /** fetch data from the table: "current_delegated_voter" */
  current_delegated_voter: Array<current_delegated_voter>;
  /** fetch data from the table: "current_delegated_voter" using primary key columns */
  current_delegated_voter_by_pk: Maybe<current_delegated_voter>;
  /** fetch data from the table in a streaming manner: "current_delegated_voter" */
  current_delegated_voter_stream: Array<current_delegated_voter>;
  /** fetch data from the table: "current_delegator_balances" */
  current_delegator_balances: Array<current_delegator_balances>;
  /** fetch data from the table: "current_delegator_balances" using primary key columns */
  current_delegator_balances_by_pk: Maybe<current_delegator_balances>;
  /** fetch data from the table in a streaming manner: "current_delegator_balances" */
  current_delegator_balances_stream: Array<current_delegator_balances>;
  /** fetch data from the table: "current_fungible_asset_balances" */
  current_fungible_asset_balances: Array<current_fungible_asset_balances>;
  /** fetch aggregated fields from the table: "current_fungible_asset_balances" */
  current_fungible_asset_balances_aggregate: current_fungible_asset_balances_aggregate;
  /** fetch data from the table: "current_fungible_asset_balances" using primary key columns */
  current_fungible_asset_balances_by_pk: Maybe<current_fungible_asset_balances>;
  /** fetch data from the table in a streaming manner: "current_fungible_asset_balances" */
  current_fungible_asset_balances_stream: Array<current_fungible_asset_balances>;
  /** fetch data from the table: "current_objects" */
  current_objects: Array<current_objects>;
  /** fetch data from the table: "current_objects" using primary key columns */
  current_objects_by_pk: Maybe<current_objects>;
  /** fetch data from the table in a streaming manner: "current_objects" */
  current_objects_stream: Array<current_objects>;
  /** fetch data from the table: "current_staking_pool_voter" */
  current_staking_pool_voter: Array<current_staking_pool_voter>;
  /** fetch data from the table: "current_staking_pool_voter" using primary key columns */
  current_staking_pool_voter_by_pk: Maybe<current_staking_pool_voter>;
  /** fetch data from the table in a streaming manner: "current_staking_pool_voter" */
  current_staking_pool_voter_stream: Array<current_staking_pool_voter>;
  /** fetch data from the table: "current_table_items" */
  current_table_items: Array<current_table_items>;
  /** fetch data from the table: "current_table_items" using primary key columns */
  current_table_items_by_pk: Maybe<current_table_items>;
  /** fetch data from the table in a streaming manner: "current_table_items" */
  current_table_items_stream: Array<current_table_items>;
  /** fetch data from the table: "current_token_datas" */
  current_token_datas: Array<current_token_datas>;
  /** fetch data from the table: "current_token_datas" using primary key columns */
  current_token_datas_by_pk: Maybe<current_token_datas>;
  /** fetch data from the table in a streaming manner: "current_token_datas" */
  current_token_datas_stream: Array<current_token_datas>;
  /** fetch data from the table: "current_token_datas_v2" */
  current_token_datas_v2: Array<current_token_datas_v2>;
  /** fetch data from the table: "current_token_datas_v2" using primary key columns */
  current_token_datas_v2_by_pk: Maybe<current_token_datas_v2>;
  /** fetch data from the table in a streaming manner: "current_token_datas_v2" */
  current_token_datas_v2_stream: Array<current_token_datas_v2>;
  /** fetch data from the table: "current_token_ownerships" */
  current_token_ownerships: Array<current_token_ownerships>;
  /** fetch aggregated fields from the table: "current_token_ownerships" */
  current_token_ownerships_aggregate: current_token_ownerships_aggregate;
  /** fetch data from the table: "current_token_ownerships" using primary key columns */
  current_token_ownerships_by_pk: Maybe<current_token_ownerships>;
  /** fetch data from the table in a streaming manner: "current_token_ownerships" */
  current_token_ownerships_stream: Array<current_token_ownerships>;
  /** fetch data from the table: "current_token_ownerships_v2" */
  current_token_ownerships_v2: Array<current_token_ownerships_v2>;
  /** fetch aggregated fields from the table: "current_token_ownerships_v2" */
  current_token_ownerships_v2_aggregate: current_token_ownerships_v2_aggregate;
  /** fetch data from the table: "current_token_ownerships_v2" using primary key columns */
  current_token_ownerships_v2_by_pk: Maybe<current_token_ownerships_v2>;
  /** fetch data from the table in a streaming manner: "current_token_ownerships_v2" */
  current_token_ownerships_v2_stream: Array<current_token_ownerships_v2>;
  /** fetch data from the table: "current_token_pending_claims" */
  current_token_pending_claims: Array<current_token_pending_claims>;
  /** fetch data from the table: "current_token_pending_claims" using primary key columns */
  current_token_pending_claims_by_pk: Maybe<current_token_pending_claims>;
  /** fetch data from the table in a streaming manner: "current_token_pending_claims" */
  current_token_pending_claims_stream: Array<current_token_pending_claims>;
  /** An array relationship */
  delegated_staking_activities: Array<delegated_staking_activities>;
  /** fetch data from the table: "delegated_staking_activities" using primary key columns */
  delegated_staking_activities_by_pk: Maybe<delegated_staking_activities>;
  /** fetch data from the table in a streaming manner: "delegated_staking_activities" */
  delegated_staking_activities_stream: Array<delegated_staking_activities>;
  /** fetch data from the table: "delegated_staking_pools" */
  delegated_staking_pools: Array<delegated_staking_pools>;
  /** fetch data from the table: "delegated_staking_pools" using primary key columns */
  delegated_staking_pools_by_pk: Maybe<delegated_staking_pools>;
  /** fetch data from the table in a streaming manner: "delegated_staking_pools" */
  delegated_staking_pools_stream: Array<delegated_staking_pools>;
  /** fetch data from the table: "delegator_distinct_pool" */
  delegator_distinct_pool: Array<delegator_distinct_pool>;
  /** fetch aggregated fields from the table: "delegator_distinct_pool" */
  delegator_distinct_pool_aggregate: delegator_distinct_pool_aggregate;
  /** fetch data from the table in a streaming manner: "delegator_distinct_pool" */
  delegator_distinct_pool_stream: Array<delegator_distinct_pool>;
  /** fetch data from the table: "events" */
  events: Array<events>;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk: Maybe<events>;
  /** fetch data from the table in a streaming manner: "events" */
  events_stream: Array<events>;
  /** An array relationship */
  fungible_asset_activities: Array<fungible_asset_activities>;
  /** fetch data from the table: "fungible_asset_activities" using primary key columns */
  fungible_asset_activities_by_pk: Maybe<fungible_asset_activities>;
  /** fetch data from the table in a streaming manner: "fungible_asset_activities" */
  fungible_asset_activities_stream: Array<fungible_asset_activities>;
  /** fetch data from the table: "fungible_asset_metadata" */
  fungible_asset_metadata: Array<fungible_asset_metadata>;
  /** fetch data from the table: "fungible_asset_metadata" using primary key columns */
  fungible_asset_metadata_by_pk: Maybe<fungible_asset_metadata>;
  /** fetch data from the table in a streaming manner: "fungible_asset_metadata" */
  fungible_asset_metadata_stream: Array<fungible_asset_metadata>;
  /** fetch data from the table: "indexer_status" */
  indexer_status: Array<indexer_status>;
  /** fetch data from the table: "indexer_status" using primary key columns */
  indexer_status_by_pk: Maybe<indexer_status>;
  /** fetch data from the table in a streaming manner: "indexer_status" */
  indexer_status_stream: Array<indexer_status>;
  /** fetch data from the table: "ledger_infos" */
  ledger_infos: Array<ledger_infos>;
  /** fetch data from the table: "ledger_infos" using primary key columns */
  ledger_infos_by_pk: Maybe<ledger_infos>;
  /** fetch data from the table in a streaming manner: "ledger_infos" */
  ledger_infos_stream: Array<ledger_infos>;
  /** fetch data from the table: "move_resources" */
  move_resources: Array<move_resources>;
  /** fetch aggregated fields from the table: "move_resources" */
  move_resources_aggregate: move_resources_aggregate;
  /** fetch data from the table in a streaming manner: "move_resources" */
  move_resources_stream: Array<move_resources>;
  /** fetch data from the table: "nft_marketplace_v2.current_nft_marketplace_auctions" */
  nft_marketplace_v2_current_nft_marketplace_auctions: Array<nft_marketplace_v2_current_nft_marketplace_auctions>;
  /** fetch data from the table: "nft_marketplace_v2.current_nft_marketplace_auctions" using primary key columns */
  nft_marketplace_v2_current_nft_marketplace_auctions_by_pk: Maybe<nft_marketplace_v2_current_nft_marketplace_auctions>;
  /** fetch data from the table in a streaming manner: "nft_marketplace_v2.current_nft_marketplace_auctions" */
  nft_marketplace_v2_current_nft_marketplace_auctions_stream: Array<nft_marketplace_v2_current_nft_marketplace_auctions>;
  /** fetch data from the table: "nft_marketplace_v2.current_nft_marketplace_collection_offers" */
  nft_marketplace_v2_current_nft_marketplace_collection_offers: Array<nft_marketplace_v2_current_nft_marketplace_collection_offers>;
  /** fetch data from the table: "nft_marketplace_v2.current_nft_marketplace_collection_offers" using primary key columns */
  nft_marketplace_v2_current_nft_marketplace_collection_offers_by_pk: Maybe<nft_marketplace_v2_current_nft_marketplace_collection_offers>;
  /** fetch data from the table in a streaming manner: "nft_marketplace_v2.current_nft_marketplace_collection_offers" */
  nft_marketplace_v2_current_nft_marketplace_collection_offers_stream: Array<nft_marketplace_v2_current_nft_marketplace_collection_offers>;
  /** fetch data from the table: "nft_marketplace_v2.current_nft_marketplace_listings" */
  nft_marketplace_v2_current_nft_marketplace_listings: Array<nft_marketplace_v2_current_nft_marketplace_listings>;
  /** fetch data from the table: "nft_marketplace_v2.current_nft_marketplace_listings" using primary key columns */
  nft_marketplace_v2_current_nft_marketplace_listings_by_pk: Maybe<nft_marketplace_v2_current_nft_marketplace_listings>;
  /** fetch data from the table in a streaming manner: "nft_marketplace_v2.current_nft_marketplace_listings" */
  nft_marketplace_v2_current_nft_marketplace_listings_stream: Array<nft_marketplace_v2_current_nft_marketplace_listings>;
  /** fetch data from the table: "nft_marketplace_v2.current_nft_marketplace_token_offers" */
  nft_marketplace_v2_current_nft_marketplace_token_offers: Array<nft_marketplace_v2_current_nft_marketplace_token_offers>;
  /** fetch data from the table: "nft_marketplace_v2.current_nft_marketplace_token_offers" using primary key columns */
  nft_marketplace_v2_current_nft_marketplace_token_offers_by_pk: Maybe<nft_marketplace_v2_current_nft_marketplace_token_offers>;
  /** fetch data from the table in a streaming manner: "nft_marketplace_v2.current_nft_marketplace_token_offers" */
  nft_marketplace_v2_current_nft_marketplace_token_offers_stream: Array<nft_marketplace_v2_current_nft_marketplace_token_offers>;
  /** fetch data from the table: "nft_marketplace_v2.nft_marketplace_activities" */
  nft_marketplace_v2_nft_marketplace_activities: Array<nft_marketplace_v2_nft_marketplace_activities>;
  /** fetch data from the table: "nft_marketplace_v2.nft_marketplace_activities" using primary key columns */
  nft_marketplace_v2_nft_marketplace_activities_by_pk: Maybe<nft_marketplace_v2_nft_marketplace_activities>;
  /** fetch data from the table in a streaming manner: "nft_marketplace_v2.nft_marketplace_activities" */
  nft_marketplace_v2_nft_marketplace_activities_stream: Array<nft_marketplace_v2_nft_marketplace_activities>;
  /** fetch data from the table: "nft_metadata_crawler.parsed_asset_uris" */
  nft_metadata_crawler_parsed_asset_uris: Array<nft_metadata_crawler_parsed_asset_uris>;
  /** fetch data from the table: "nft_metadata_crawler.parsed_asset_uris" using primary key columns */
  nft_metadata_crawler_parsed_asset_uris_by_pk: Maybe<nft_metadata_crawler_parsed_asset_uris>;
  /** fetch data from the table in a streaming manner: "nft_metadata_crawler.parsed_asset_uris" */
  nft_metadata_crawler_parsed_asset_uris_stream: Array<nft_metadata_crawler_parsed_asset_uris>;
  /** fetch data from the table: "num_active_delegator_per_pool" */
  num_active_delegator_per_pool: Array<num_active_delegator_per_pool>;
  /** fetch data from the table in a streaming manner: "num_active_delegator_per_pool" */
  num_active_delegator_per_pool_stream: Array<num_active_delegator_per_pool>;
  /** fetch data from the table: "processor_status" */
  processor_status: Array<processor_status>;
  /** fetch data from the table: "processor_status" using primary key columns */
  processor_status_by_pk: Maybe<processor_status>;
  /** fetch data from the table in a streaming manner: "processor_status" */
  processor_status_stream: Array<processor_status>;
  /** fetch data from the table: "proposal_votes" */
  proposal_votes: Array<proposal_votes>;
  /** fetch aggregated fields from the table: "proposal_votes" */
  proposal_votes_aggregate: proposal_votes_aggregate;
  /** fetch data from the table: "proposal_votes" using primary key columns */
  proposal_votes_by_pk: Maybe<proposal_votes>;
  /** fetch data from the table in a streaming manner: "proposal_votes" */
  proposal_votes_stream: Array<proposal_votes>;
  /** fetch data from the table: "table_items" */
  table_items: Array<table_items>;
  /** fetch data from the table: "table_items" using primary key columns */
  table_items_by_pk: Maybe<table_items>;
  /** fetch data from the table in a streaming manner: "table_items" */
  table_items_stream: Array<table_items>;
  /** fetch data from the table: "table_metadatas" */
  table_metadatas: Array<table_metadatas>;
  /** fetch data from the table: "table_metadatas" using primary key columns */
  table_metadatas_by_pk: Maybe<table_metadatas>;
  /** fetch data from the table in a streaming manner: "table_metadatas" */
  table_metadatas_stream: Array<table_metadatas>;
  /** An array relationship */
  token_activities: Array<token_activities>;
  /** An aggregate relationship */
  token_activities_aggregate: token_activities_aggregate;
  /** fetch data from the table: "token_activities" using primary key columns */
  token_activities_by_pk: Maybe<token_activities>;
  /** fetch data from the table in a streaming manner: "token_activities" */
  token_activities_stream: Array<token_activities>;
  /** An array relationship */
  token_activities_v2: Array<token_activities_v2>;
  /** An aggregate relationship */
  token_activities_v2_aggregate: token_activities_v2_aggregate;
  /** fetch data from the table: "token_activities_v2" using primary key columns */
  token_activities_v2_by_pk: Maybe<token_activities_v2>;
  /** fetch data from the table in a streaming manner: "token_activities_v2" */
  token_activities_v2_stream: Array<token_activities_v2>;
  /** fetch data from the table: "token_datas" */
  token_datas: Array<token_datas>;
  /** fetch data from the table: "token_datas" using primary key columns */
  token_datas_by_pk: Maybe<token_datas>;
  /** fetch data from the table in a streaming manner: "token_datas" */
  token_datas_stream: Array<token_datas>;
  /** fetch data from the table: "token_ownerships" */
  token_ownerships: Array<token_ownerships>;
  /** fetch data from the table: "token_ownerships" using primary key columns */
  token_ownerships_by_pk: Maybe<token_ownerships>;
  /** fetch data from the table in a streaming manner: "token_ownerships" */
  token_ownerships_stream: Array<token_ownerships>;
  /** fetch data from the table: "tokens" */
  tokens: Array<tokens>;
  /** fetch data from the table: "tokens" using primary key columns */
  tokens_by_pk: Maybe<tokens>;
  /** fetch data from the table in a streaming manner: "tokens" */
  tokens_stream: Array<tokens>;
  /** fetch data from the table: "user_transactions" */
  user_transactions: Array<user_transactions>;
  /** fetch data from the table: "user_transactions" using primary key columns */
  user_transactions_by_pk: Maybe<user_transactions>;
  /** fetch data from the table in a streaming manner: "user_transactions" */
  user_transactions_stream: Array<user_transactions>;
};

export type subscription_rootaccount_transactionsArgs = {
  distinct_on: InputMaybe<Array<account_transactions_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<account_transactions_order_by>>;
  where: InputMaybe<account_transactions_bool_exp>;
};

export type subscription_rootaccount_transactions_aggregateArgs = {
  distinct_on: InputMaybe<Array<account_transactions_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<account_transactions_order_by>>;
  where: InputMaybe<account_transactions_bool_exp>;
};

export type subscription_rootaccount_transactions_by_pkArgs = {
  account_address: Scalars["String"];
  transaction_version: Scalars["bigint"];
};

export type subscription_rootaccount_transactions_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<account_transactions_stream_cursor_input>>;
  where: InputMaybe<account_transactions_bool_exp>;
};

export type subscription_rootaddress_events_summaryArgs = {
  distinct_on: InputMaybe<Array<address_events_summary_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<address_events_summary_order_by>>;
  where: InputMaybe<address_events_summary_bool_exp>;
};

export type subscription_rootaddress_events_summary_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<address_events_summary_stream_cursor_input>>;
  where: InputMaybe<address_events_summary_bool_exp>;
};

export type subscription_rootaddress_version_from_eventsArgs = {
  distinct_on: InputMaybe<Array<address_version_from_events_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<address_version_from_events_order_by>>;
  where: InputMaybe<address_version_from_events_bool_exp>;
};

export type subscription_rootaddress_version_from_events_aggregateArgs = {
  distinct_on: InputMaybe<Array<address_version_from_events_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<address_version_from_events_order_by>>;
  where: InputMaybe<address_version_from_events_bool_exp>;
};

export type subscription_rootaddress_version_from_events_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<address_version_from_events_stream_cursor_input>>;
  where: InputMaybe<address_version_from_events_bool_exp>;
};

export type subscription_rootaddress_version_from_move_resourcesArgs = {
  distinct_on: InputMaybe<
    Array<address_version_from_move_resources_select_column>
  >;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<address_version_from_move_resources_order_by>>;
  where: InputMaybe<address_version_from_move_resources_bool_exp>;
};

export type subscription_rootaddress_version_from_move_resources_aggregateArgs =
  {
    distinct_on: InputMaybe<
      Array<address_version_from_move_resources_select_column>
    >;
    limit: InputMaybe<Scalars["Int"]>;
    offset: InputMaybe<Scalars["Int"]>;
    order_by: InputMaybe<Array<address_version_from_move_resources_order_by>>;
    where: InputMaybe<address_version_from_move_resources_bool_exp>;
  };

export type subscription_rootaddress_version_from_move_resources_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<
    InputMaybe<address_version_from_move_resources_stream_cursor_input>
  >;
  where: InputMaybe<address_version_from_move_resources_bool_exp>;
};

export type subscription_rootblock_metadata_transactionsArgs = {
  distinct_on: InputMaybe<Array<block_metadata_transactions_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<block_metadata_transactions_order_by>>;
  where: InputMaybe<block_metadata_transactions_bool_exp>;
};

export type subscription_rootblock_metadata_transactions_by_pkArgs = {
  version: Scalars["bigint"];
};

export type subscription_rootblock_metadata_transactions_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<block_metadata_transactions_stream_cursor_input>>;
  where: InputMaybe<block_metadata_transactions_bool_exp>;
};

export type subscription_rootcoin_activitiesArgs = {
  distinct_on: InputMaybe<Array<coin_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<coin_activities_order_by>>;
  where: InputMaybe<coin_activities_bool_exp>;
};

export type subscription_rootcoin_activities_aggregateArgs = {
  distinct_on: InputMaybe<Array<coin_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<coin_activities_order_by>>;
  where: InputMaybe<coin_activities_bool_exp>;
};

export type subscription_rootcoin_activities_by_pkArgs = {
  event_account_address: Scalars["String"];
  event_creation_number: Scalars["bigint"];
  event_sequence_number: Scalars["bigint"];
  transaction_version: Scalars["bigint"];
};

export type subscription_rootcoin_activities_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<coin_activities_stream_cursor_input>>;
  where: InputMaybe<coin_activities_bool_exp>;
};

export type subscription_rootcoin_balancesArgs = {
  distinct_on: InputMaybe<Array<coin_balances_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<coin_balances_order_by>>;
  where: InputMaybe<coin_balances_bool_exp>;
};

export type subscription_rootcoin_balances_by_pkArgs = {
  coin_type_hash: Scalars["String"];
  owner_address: Scalars["String"];
  transaction_version: Scalars["bigint"];
};

export type subscription_rootcoin_balances_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<coin_balances_stream_cursor_input>>;
  where: InputMaybe<coin_balances_bool_exp>;
};

export type subscription_rootcoin_infosArgs = {
  distinct_on: InputMaybe<Array<coin_infos_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<coin_infos_order_by>>;
  where: InputMaybe<coin_infos_bool_exp>;
};

export type subscription_rootcoin_infos_by_pkArgs = {
  coin_type_hash: Scalars["String"];
};

export type subscription_rootcoin_infos_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<coin_infos_stream_cursor_input>>;
  where: InputMaybe<coin_infos_bool_exp>;
};

export type subscription_rootcoin_supplyArgs = {
  distinct_on: InputMaybe<Array<coin_supply_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<coin_supply_order_by>>;
  where: InputMaybe<coin_supply_bool_exp>;
};

export type subscription_rootcoin_supply_by_pkArgs = {
  coin_type_hash: Scalars["String"];
  transaction_version: Scalars["bigint"];
};

export type subscription_rootcoin_supply_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<coin_supply_stream_cursor_input>>;
  where: InputMaybe<coin_supply_bool_exp>;
};

export type subscription_rootcollection_datasArgs = {
  distinct_on: InputMaybe<Array<collection_datas_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<collection_datas_order_by>>;
  where: InputMaybe<collection_datas_bool_exp>;
};

export type subscription_rootcollection_datas_by_pkArgs = {
  collection_data_id_hash: Scalars["String"];
  transaction_version: Scalars["bigint"];
};

export type subscription_rootcollection_datas_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<collection_datas_stream_cursor_input>>;
  where: InputMaybe<collection_datas_bool_exp>;
};

export type subscription_rootcurrent_ans_lookupArgs = {
  distinct_on: InputMaybe<Array<current_ans_lookup_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_ans_lookup_order_by>>;
  where: InputMaybe<current_ans_lookup_bool_exp>;
};

export type subscription_rootcurrent_ans_lookup_by_pkArgs = {
  domain: Scalars["String"];
  subdomain: Scalars["String"];
};

export type subscription_rootcurrent_ans_lookup_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<current_ans_lookup_stream_cursor_input>>;
  where: InputMaybe<current_ans_lookup_bool_exp>;
};

export type subscription_rootcurrent_ans_lookup_v2Args = {
  distinct_on: InputMaybe<Array<current_ans_lookup_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_ans_lookup_v2_order_by>>;
  where: InputMaybe<current_ans_lookup_v2_bool_exp>;
};

export type subscription_rootcurrent_ans_lookup_v2_by_pkArgs = {
  domain: Scalars["String"];
  subdomain: Scalars["String"];
  token_standard: Scalars["String"];
};

export type subscription_rootcurrent_ans_lookup_v2_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<current_ans_lookup_v2_stream_cursor_input>>;
  where: InputMaybe<current_ans_lookup_v2_bool_exp>;
};

export type subscription_rootcurrent_aptos_namesArgs = {
  distinct_on: InputMaybe<Array<current_aptos_names_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_aptos_names_order_by>>;
  where: InputMaybe<current_aptos_names_bool_exp>;
};

export type subscription_rootcurrent_aptos_names_aggregateArgs = {
  distinct_on: InputMaybe<Array<current_aptos_names_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_aptos_names_order_by>>;
  where: InputMaybe<current_aptos_names_bool_exp>;
};

export type subscription_rootcurrent_aptos_names_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<current_aptos_names_stream_cursor_input>>;
  where: InputMaybe<current_aptos_names_bool_exp>;
};

export type subscription_rootcurrent_coin_balancesArgs = {
  distinct_on: InputMaybe<Array<current_coin_balances_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_coin_balances_order_by>>;
  where: InputMaybe<current_coin_balances_bool_exp>;
};

export type subscription_rootcurrent_coin_balances_by_pkArgs = {
  coin_type_hash: Scalars["String"];
  owner_address: Scalars["String"];
};

export type subscription_rootcurrent_coin_balances_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<current_coin_balances_stream_cursor_input>>;
  where: InputMaybe<current_coin_balances_bool_exp>;
};

export type subscription_rootcurrent_collection_datasArgs = {
  distinct_on: InputMaybe<Array<current_collection_datas_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_collection_datas_order_by>>;
  where: InputMaybe<current_collection_datas_bool_exp>;
};

export type subscription_rootcurrent_collection_datas_by_pkArgs = {
  collection_data_id_hash: Scalars["String"];
};

export type subscription_rootcurrent_collection_datas_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<current_collection_datas_stream_cursor_input>>;
  where: InputMaybe<current_collection_datas_bool_exp>;
};

export type subscription_rootcurrent_collection_ownership_v2_viewArgs = {
  distinct_on: InputMaybe<
    Array<current_collection_ownership_v2_view_select_column>
  >;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_collection_ownership_v2_view_order_by>>;
  where: InputMaybe<current_collection_ownership_v2_view_bool_exp>;
};

export type subscription_rootcurrent_collection_ownership_v2_view_aggregateArgs =
  {
    distinct_on: InputMaybe<
      Array<current_collection_ownership_v2_view_select_column>
    >;
    limit: InputMaybe<Scalars["Int"]>;
    offset: InputMaybe<Scalars["Int"]>;
    order_by: InputMaybe<Array<current_collection_ownership_v2_view_order_by>>;
    where: InputMaybe<current_collection_ownership_v2_view_bool_exp>;
  };

export type subscription_rootcurrent_collection_ownership_v2_view_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<
    InputMaybe<current_collection_ownership_v2_view_stream_cursor_input>
  >;
  where: InputMaybe<current_collection_ownership_v2_view_bool_exp>;
};

export type subscription_rootcurrent_collections_v2Args = {
  distinct_on: InputMaybe<Array<current_collections_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_collections_v2_order_by>>;
  where: InputMaybe<current_collections_v2_bool_exp>;
};

export type subscription_rootcurrent_collections_v2_by_pkArgs = {
  collection_id: Scalars["String"];
};

export type subscription_rootcurrent_collections_v2_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<current_collections_v2_stream_cursor_input>>;
  where: InputMaybe<current_collections_v2_bool_exp>;
};

export type subscription_rootcurrent_delegated_staking_pool_balancesArgs = {
  distinct_on: InputMaybe<
    Array<current_delegated_staking_pool_balances_select_column>
  >;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_delegated_staking_pool_balances_order_by>>;
  where: InputMaybe<current_delegated_staking_pool_balances_bool_exp>;
};

export type subscription_rootcurrent_delegated_staking_pool_balances_by_pkArgs =
  {
    staking_pool_address: Scalars["String"];
  };

export type subscription_rootcurrent_delegated_staking_pool_balances_streamArgs =
  {
    batch_size: Scalars["Int"];
    cursor: Array<
      InputMaybe<current_delegated_staking_pool_balances_stream_cursor_input>
    >;
    where: InputMaybe<current_delegated_staking_pool_balances_bool_exp>;
  };

export type subscription_rootcurrent_delegated_voterArgs = {
  distinct_on: InputMaybe<Array<current_delegated_voter_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_delegated_voter_order_by>>;
  where: InputMaybe<current_delegated_voter_bool_exp>;
};

export type subscription_rootcurrent_delegated_voter_by_pkArgs = {
  delegation_pool_address: Scalars["String"];
  delegator_address: Scalars["String"];
};

export type subscription_rootcurrent_delegated_voter_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<current_delegated_voter_stream_cursor_input>>;
  where: InputMaybe<current_delegated_voter_bool_exp>;
};

export type subscription_rootcurrent_delegator_balancesArgs = {
  distinct_on: InputMaybe<Array<current_delegator_balances_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_delegator_balances_order_by>>;
  where: InputMaybe<current_delegator_balances_bool_exp>;
};

export type subscription_rootcurrent_delegator_balances_by_pkArgs = {
  delegator_address: Scalars["String"];
  pool_address: Scalars["String"];
  pool_type: Scalars["String"];
  table_handle: Scalars["String"];
};

export type subscription_rootcurrent_delegator_balances_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<current_delegator_balances_stream_cursor_input>>;
  where: InputMaybe<current_delegator_balances_bool_exp>;
};

export type subscription_rootcurrent_fungible_asset_balancesArgs = {
  distinct_on: InputMaybe<Array<current_fungible_asset_balances_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_fungible_asset_balances_order_by>>;
  where: InputMaybe<current_fungible_asset_balances_bool_exp>;
};

export type subscription_rootcurrent_fungible_asset_balances_aggregateArgs = {
  distinct_on: InputMaybe<Array<current_fungible_asset_balances_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_fungible_asset_balances_order_by>>;
  where: InputMaybe<current_fungible_asset_balances_bool_exp>;
};

export type subscription_rootcurrent_fungible_asset_balances_by_pkArgs = {
  storage_id: Scalars["String"];
};

export type subscription_rootcurrent_fungible_asset_balances_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<
    InputMaybe<current_fungible_asset_balances_stream_cursor_input>
  >;
  where: InputMaybe<current_fungible_asset_balances_bool_exp>;
};

export type subscription_rootcurrent_objectsArgs = {
  distinct_on: InputMaybe<Array<current_objects_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_objects_order_by>>;
  where: InputMaybe<current_objects_bool_exp>;
};

export type subscription_rootcurrent_objects_by_pkArgs = {
  object_address: Scalars["String"];
};

export type subscription_rootcurrent_objects_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<current_objects_stream_cursor_input>>;
  where: InputMaybe<current_objects_bool_exp>;
};

export type subscription_rootcurrent_staking_pool_voterArgs = {
  distinct_on: InputMaybe<Array<current_staking_pool_voter_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_staking_pool_voter_order_by>>;
  where: InputMaybe<current_staking_pool_voter_bool_exp>;
};

export type subscription_rootcurrent_staking_pool_voter_by_pkArgs = {
  staking_pool_address: Scalars["String"];
};

export type subscription_rootcurrent_staking_pool_voter_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<current_staking_pool_voter_stream_cursor_input>>;
  where: InputMaybe<current_staking_pool_voter_bool_exp>;
};

export type subscription_rootcurrent_table_itemsArgs = {
  distinct_on: InputMaybe<Array<current_table_items_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_table_items_order_by>>;
  where: InputMaybe<current_table_items_bool_exp>;
};

export type subscription_rootcurrent_table_items_by_pkArgs = {
  key_hash: Scalars["String"];
  table_handle: Scalars["String"];
};

export type subscription_rootcurrent_table_items_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<current_table_items_stream_cursor_input>>;
  where: InputMaybe<current_table_items_bool_exp>;
};

export type subscription_rootcurrent_token_datasArgs = {
  distinct_on: InputMaybe<Array<current_token_datas_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_token_datas_order_by>>;
  where: InputMaybe<current_token_datas_bool_exp>;
};

export type subscription_rootcurrent_token_datas_by_pkArgs = {
  token_data_id_hash: Scalars["String"];
};

export type subscription_rootcurrent_token_datas_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<current_token_datas_stream_cursor_input>>;
  where: InputMaybe<current_token_datas_bool_exp>;
};

export type subscription_rootcurrent_token_datas_v2Args = {
  distinct_on: InputMaybe<Array<current_token_datas_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_token_datas_v2_order_by>>;
  where: InputMaybe<current_token_datas_v2_bool_exp>;
};

export type subscription_rootcurrent_token_datas_v2_by_pkArgs = {
  token_data_id: Scalars["String"];
};

export type subscription_rootcurrent_token_datas_v2_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<current_token_datas_v2_stream_cursor_input>>;
  where: InputMaybe<current_token_datas_v2_bool_exp>;
};

export type subscription_rootcurrent_token_ownershipsArgs = {
  distinct_on: InputMaybe<Array<current_token_ownerships_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_token_ownerships_order_by>>;
  where: InputMaybe<current_token_ownerships_bool_exp>;
};

export type subscription_rootcurrent_token_ownerships_aggregateArgs = {
  distinct_on: InputMaybe<Array<current_token_ownerships_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_token_ownerships_order_by>>;
  where: InputMaybe<current_token_ownerships_bool_exp>;
};

export type subscription_rootcurrent_token_ownerships_by_pkArgs = {
  owner_address: Scalars["String"];
  property_version: Scalars["numeric"];
  token_data_id_hash: Scalars["String"];
};

export type subscription_rootcurrent_token_ownerships_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<current_token_ownerships_stream_cursor_input>>;
  where: InputMaybe<current_token_ownerships_bool_exp>;
};

export type subscription_rootcurrent_token_ownerships_v2Args = {
  distinct_on: InputMaybe<Array<current_token_ownerships_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_token_ownerships_v2_order_by>>;
  where: InputMaybe<current_token_ownerships_v2_bool_exp>;
};

export type subscription_rootcurrent_token_ownerships_v2_aggregateArgs = {
  distinct_on: InputMaybe<Array<current_token_ownerships_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_token_ownerships_v2_order_by>>;
  where: InputMaybe<current_token_ownerships_v2_bool_exp>;
};

export type subscription_rootcurrent_token_ownerships_v2_by_pkArgs = {
  owner_address: Scalars["String"];
  property_version_v1: Scalars["numeric"];
  storage_id: Scalars["String"];
  token_data_id: Scalars["String"];
};

export type subscription_rootcurrent_token_ownerships_v2_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<current_token_ownerships_v2_stream_cursor_input>>;
  where: InputMaybe<current_token_ownerships_v2_bool_exp>;
};

export type subscription_rootcurrent_token_pending_claimsArgs = {
  distinct_on: InputMaybe<Array<current_token_pending_claims_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_token_pending_claims_order_by>>;
  where: InputMaybe<current_token_pending_claims_bool_exp>;
};

export type subscription_rootcurrent_token_pending_claims_by_pkArgs = {
  from_address: Scalars["String"];
  property_version: Scalars["numeric"];
  to_address: Scalars["String"];
  token_data_id_hash: Scalars["String"];
};

export type subscription_rootcurrent_token_pending_claims_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<current_token_pending_claims_stream_cursor_input>>;
  where: InputMaybe<current_token_pending_claims_bool_exp>;
};

export type subscription_rootdelegated_staking_activitiesArgs = {
  distinct_on: InputMaybe<Array<delegated_staking_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<delegated_staking_activities_order_by>>;
  where: InputMaybe<delegated_staking_activities_bool_exp>;
};

export type subscription_rootdelegated_staking_activities_by_pkArgs = {
  event_index: Scalars["bigint"];
  transaction_version: Scalars["bigint"];
};

export type subscription_rootdelegated_staking_activities_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<delegated_staking_activities_stream_cursor_input>>;
  where: InputMaybe<delegated_staking_activities_bool_exp>;
};

export type subscription_rootdelegated_staking_poolsArgs = {
  distinct_on: InputMaybe<Array<delegated_staking_pools_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<delegated_staking_pools_order_by>>;
  where: InputMaybe<delegated_staking_pools_bool_exp>;
};

export type subscription_rootdelegated_staking_pools_by_pkArgs = {
  staking_pool_address: Scalars["String"];
};

export type subscription_rootdelegated_staking_pools_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<delegated_staking_pools_stream_cursor_input>>;
  where: InputMaybe<delegated_staking_pools_bool_exp>;
};

export type subscription_rootdelegator_distinct_poolArgs = {
  distinct_on: InputMaybe<Array<delegator_distinct_pool_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<delegator_distinct_pool_order_by>>;
  where: InputMaybe<delegator_distinct_pool_bool_exp>;
};

export type subscription_rootdelegator_distinct_pool_aggregateArgs = {
  distinct_on: InputMaybe<Array<delegator_distinct_pool_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<delegator_distinct_pool_order_by>>;
  where: InputMaybe<delegator_distinct_pool_bool_exp>;
};

export type subscription_rootdelegator_distinct_pool_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<delegator_distinct_pool_stream_cursor_input>>;
  where: InputMaybe<delegator_distinct_pool_bool_exp>;
};

export type subscription_rooteventsArgs = {
  distinct_on: InputMaybe<Array<events_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<events_order_by>>;
  where: InputMaybe<events_bool_exp>;
};

export type subscription_rootevents_by_pkArgs = {
  event_index: Scalars["bigint"];
  transaction_version: Scalars["bigint"];
};

export type subscription_rootevents_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<events_stream_cursor_input>>;
  where: InputMaybe<events_bool_exp>;
};

export type subscription_rootfungible_asset_activitiesArgs = {
  distinct_on: InputMaybe<Array<fungible_asset_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<fungible_asset_activities_order_by>>;
  where: InputMaybe<fungible_asset_activities_bool_exp>;
};

export type subscription_rootfungible_asset_activities_by_pkArgs = {
  event_index: Scalars["bigint"];
  transaction_version: Scalars["bigint"];
};

export type subscription_rootfungible_asset_activities_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<fungible_asset_activities_stream_cursor_input>>;
  where: InputMaybe<fungible_asset_activities_bool_exp>;
};

export type subscription_rootfungible_asset_metadataArgs = {
  distinct_on: InputMaybe<Array<fungible_asset_metadata_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<fungible_asset_metadata_order_by>>;
  where: InputMaybe<fungible_asset_metadata_bool_exp>;
};

export type subscription_rootfungible_asset_metadata_by_pkArgs = {
  asset_type: Scalars["String"];
};

export type subscription_rootfungible_asset_metadata_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<fungible_asset_metadata_stream_cursor_input>>;
  where: InputMaybe<fungible_asset_metadata_bool_exp>;
};

export type subscription_rootindexer_statusArgs = {
  distinct_on: InputMaybe<Array<indexer_status_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<indexer_status_order_by>>;
  where: InputMaybe<indexer_status_bool_exp>;
};

export type subscription_rootindexer_status_by_pkArgs = {
  db: Scalars["String"];
};

export type subscription_rootindexer_status_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<indexer_status_stream_cursor_input>>;
  where: InputMaybe<indexer_status_bool_exp>;
};

export type subscription_rootledger_infosArgs = {
  distinct_on: InputMaybe<Array<ledger_infos_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<ledger_infos_order_by>>;
  where: InputMaybe<ledger_infos_bool_exp>;
};

export type subscription_rootledger_infos_by_pkArgs = {
  chain_id: Scalars["bigint"];
};

export type subscription_rootledger_infos_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<ledger_infos_stream_cursor_input>>;
  where: InputMaybe<ledger_infos_bool_exp>;
};

export type subscription_rootmove_resourcesArgs = {
  distinct_on: InputMaybe<Array<move_resources_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<move_resources_order_by>>;
  where: InputMaybe<move_resources_bool_exp>;
};

export type subscription_rootmove_resources_aggregateArgs = {
  distinct_on: InputMaybe<Array<move_resources_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<move_resources_order_by>>;
  where: InputMaybe<move_resources_bool_exp>;
};

export type subscription_rootmove_resources_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<move_resources_stream_cursor_input>>;
  where: InputMaybe<move_resources_bool_exp>;
};

export type subscription_rootnft_marketplace_v2_current_nft_marketplace_auctionsArgs =
  {
    distinct_on: InputMaybe<
      Array<nft_marketplace_v2_current_nft_marketplace_auctions_select_column>
    >;
    limit: InputMaybe<Scalars["Int"]>;
    offset: InputMaybe<Scalars["Int"]>;
    order_by: InputMaybe<
      Array<nft_marketplace_v2_current_nft_marketplace_auctions_order_by>
    >;
    where: InputMaybe<nft_marketplace_v2_current_nft_marketplace_auctions_bool_exp>;
  };

export type subscription_rootnft_marketplace_v2_current_nft_marketplace_auctions_by_pkArgs =
  {
    listing_id: Scalars["String"];
    token_data_id: Scalars["String"];
  };

export type subscription_rootnft_marketplace_v2_current_nft_marketplace_auctions_streamArgs =
  {
    batch_size: Scalars["Int"];
    cursor: Array<
      InputMaybe<nft_marketplace_v2_current_nft_marketplace_auctions_stream_cursor_input>
    >;
    where: InputMaybe<nft_marketplace_v2_current_nft_marketplace_auctions_bool_exp>;
  };

export type subscription_rootnft_marketplace_v2_current_nft_marketplace_collection_offersArgs =
  {
    distinct_on: InputMaybe<
      Array<nft_marketplace_v2_current_nft_marketplace_collection_offers_select_column>
    >;
    limit: InputMaybe<Scalars["Int"]>;
    offset: InputMaybe<Scalars["Int"]>;
    order_by: InputMaybe<
      Array<nft_marketplace_v2_current_nft_marketplace_collection_offers_order_by>
    >;
    where: InputMaybe<nft_marketplace_v2_current_nft_marketplace_collection_offers_bool_exp>;
  };

export type subscription_rootnft_marketplace_v2_current_nft_marketplace_collection_offers_by_pkArgs =
  {
    collection_id: Scalars["String"];
    collection_offer_id: Scalars["String"];
  };

export type subscription_rootnft_marketplace_v2_current_nft_marketplace_collection_offers_streamArgs =
  {
    batch_size: Scalars["Int"];
    cursor: Array<
      InputMaybe<nft_marketplace_v2_current_nft_marketplace_collection_offers_stream_cursor_input>
    >;
    where: InputMaybe<nft_marketplace_v2_current_nft_marketplace_collection_offers_bool_exp>;
  };

export type subscription_rootnft_marketplace_v2_current_nft_marketplace_listingsArgs =
  {
    distinct_on: InputMaybe<
      Array<nft_marketplace_v2_current_nft_marketplace_listings_select_column>
    >;
    limit: InputMaybe<Scalars["Int"]>;
    offset: InputMaybe<Scalars["Int"]>;
    order_by: InputMaybe<
      Array<nft_marketplace_v2_current_nft_marketplace_listings_order_by>
    >;
    where: InputMaybe<nft_marketplace_v2_current_nft_marketplace_listings_bool_exp>;
  };

export type subscription_rootnft_marketplace_v2_current_nft_marketplace_listings_by_pkArgs =
  {
    listing_id: Scalars["String"];
    token_data_id: Scalars["String"];
  };

export type subscription_rootnft_marketplace_v2_current_nft_marketplace_listings_streamArgs =
  {
    batch_size: Scalars["Int"];
    cursor: Array<
      InputMaybe<nft_marketplace_v2_current_nft_marketplace_listings_stream_cursor_input>
    >;
    where: InputMaybe<nft_marketplace_v2_current_nft_marketplace_listings_bool_exp>;
  };

export type subscription_rootnft_marketplace_v2_current_nft_marketplace_token_offersArgs =
  {
    distinct_on: InputMaybe<
      Array<nft_marketplace_v2_current_nft_marketplace_token_offers_select_column>
    >;
    limit: InputMaybe<Scalars["Int"]>;
    offset: InputMaybe<Scalars["Int"]>;
    order_by: InputMaybe<
      Array<nft_marketplace_v2_current_nft_marketplace_token_offers_order_by>
    >;
    where: InputMaybe<nft_marketplace_v2_current_nft_marketplace_token_offers_bool_exp>;
  };

export type subscription_rootnft_marketplace_v2_current_nft_marketplace_token_offers_by_pkArgs =
  {
    offer_id: Scalars["String"];
    token_data_id: Scalars["String"];
  };

export type subscription_rootnft_marketplace_v2_current_nft_marketplace_token_offers_streamArgs =
  {
    batch_size: Scalars["Int"];
    cursor: Array<
      InputMaybe<nft_marketplace_v2_current_nft_marketplace_token_offers_stream_cursor_input>
    >;
    where: InputMaybe<nft_marketplace_v2_current_nft_marketplace_token_offers_bool_exp>;
  };

export type subscription_rootnft_marketplace_v2_nft_marketplace_activitiesArgs =
  {
    distinct_on: InputMaybe<
      Array<nft_marketplace_v2_nft_marketplace_activities_select_column>
    >;
    limit: InputMaybe<Scalars["Int"]>;
    offset: InputMaybe<Scalars["Int"]>;
    order_by: InputMaybe<
      Array<nft_marketplace_v2_nft_marketplace_activities_order_by>
    >;
    where: InputMaybe<nft_marketplace_v2_nft_marketplace_activities_bool_exp>;
  };

export type subscription_rootnft_marketplace_v2_nft_marketplace_activities_by_pkArgs =
  {
    event_index: Scalars["bigint"];
    transaction_version: Scalars["bigint"];
  };

export type subscription_rootnft_marketplace_v2_nft_marketplace_activities_streamArgs =
  {
    batch_size: Scalars["Int"];
    cursor: Array<
      InputMaybe<nft_marketplace_v2_nft_marketplace_activities_stream_cursor_input>
    >;
    where: InputMaybe<nft_marketplace_v2_nft_marketplace_activities_bool_exp>;
  };

export type subscription_rootnft_metadata_crawler_parsed_asset_urisArgs = {
  distinct_on: InputMaybe<
    Array<nft_metadata_crawler_parsed_asset_uris_select_column>
  >;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<nft_metadata_crawler_parsed_asset_uris_order_by>>;
  where: InputMaybe<nft_metadata_crawler_parsed_asset_uris_bool_exp>;
};

export type subscription_rootnft_metadata_crawler_parsed_asset_uris_by_pkArgs =
  {
    asset_uri: Scalars["String"];
  };

export type subscription_rootnft_metadata_crawler_parsed_asset_uris_streamArgs =
  {
    batch_size: Scalars["Int"];
    cursor: Array<
      InputMaybe<nft_metadata_crawler_parsed_asset_uris_stream_cursor_input>
    >;
    where: InputMaybe<nft_metadata_crawler_parsed_asset_uris_bool_exp>;
  };

export type subscription_rootnum_active_delegator_per_poolArgs = {
  distinct_on: InputMaybe<Array<num_active_delegator_per_pool_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<num_active_delegator_per_pool_order_by>>;
  where: InputMaybe<num_active_delegator_per_pool_bool_exp>;
};

export type subscription_rootnum_active_delegator_per_pool_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<num_active_delegator_per_pool_stream_cursor_input>>;
  where: InputMaybe<num_active_delegator_per_pool_bool_exp>;
};

export type subscription_rootprocessor_statusArgs = {
  distinct_on: InputMaybe<Array<processor_status_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<processor_status_order_by>>;
  where: InputMaybe<processor_status_bool_exp>;
};

export type subscription_rootprocessor_status_by_pkArgs = {
  processor: Scalars["String"];
};

export type subscription_rootprocessor_status_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<processor_status_stream_cursor_input>>;
  where: InputMaybe<processor_status_bool_exp>;
};

export type subscription_rootproposal_votesArgs = {
  distinct_on: InputMaybe<Array<proposal_votes_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<proposal_votes_order_by>>;
  where: InputMaybe<proposal_votes_bool_exp>;
};

export type subscription_rootproposal_votes_aggregateArgs = {
  distinct_on: InputMaybe<Array<proposal_votes_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<proposal_votes_order_by>>;
  where: InputMaybe<proposal_votes_bool_exp>;
};

export type subscription_rootproposal_votes_by_pkArgs = {
  proposal_id: Scalars["bigint"];
  transaction_version: Scalars["bigint"];
  voter_address: Scalars["String"];
};

export type subscription_rootproposal_votes_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<proposal_votes_stream_cursor_input>>;
  where: InputMaybe<proposal_votes_bool_exp>;
};

export type subscription_roottable_itemsArgs = {
  distinct_on: InputMaybe<Array<table_items_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<table_items_order_by>>;
  where: InputMaybe<table_items_bool_exp>;
};

export type subscription_roottable_items_by_pkArgs = {
  transaction_version: Scalars["bigint"];
  write_set_change_index: Scalars["bigint"];
};

export type subscription_roottable_items_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<table_items_stream_cursor_input>>;
  where: InputMaybe<table_items_bool_exp>;
};

export type subscription_roottable_metadatasArgs = {
  distinct_on: InputMaybe<Array<table_metadatas_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<table_metadatas_order_by>>;
  where: InputMaybe<table_metadatas_bool_exp>;
};

export type subscription_roottable_metadatas_by_pkArgs = {
  handle: Scalars["String"];
};

export type subscription_roottable_metadatas_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<table_metadatas_stream_cursor_input>>;
  where: InputMaybe<table_metadatas_bool_exp>;
};

export type subscription_roottoken_activitiesArgs = {
  distinct_on: InputMaybe<Array<token_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_activities_order_by>>;
  where: InputMaybe<token_activities_bool_exp>;
};

export type subscription_roottoken_activities_aggregateArgs = {
  distinct_on: InputMaybe<Array<token_activities_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_activities_order_by>>;
  where: InputMaybe<token_activities_bool_exp>;
};

export type subscription_roottoken_activities_by_pkArgs = {
  event_account_address: Scalars["String"];
  event_creation_number: Scalars["bigint"];
  event_sequence_number: Scalars["bigint"];
  transaction_version: Scalars["bigint"];
};

export type subscription_roottoken_activities_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<token_activities_stream_cursor_input>>;
  where: InputMaybe<token_activities_bool_exp>;
};

export type subscription_roottoken_activities_v2Args = {
  distinct_on: InputMaybe<Array<token_activities_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_activities_v2_order_by>>;
  where: InputMaybe<token_activities_v2_bool_exp>;
};

export type subscription_roottoken_activities_v2_aggregateArgs = {
  distinct_on: InputMaybe<Array<token_activities_v2_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_activities_v2_order_by>>;
  where: InputMaybe<token_activities_v2_bool_exp>;
};

export type subscription_roottoken_activities_v2_by_pkArgs = {
  event_index: Scalars["bigint"];
  transaction_version: Scalars["bigint"];
};

export type subscription_roottoken_activities_v2_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<token_activities_v2_stream_cursor_input>>;
  where: InputMaybe<token_activities_v2_bool_exp>;
};

export type subscription_roottoken_datasArgs = {
  distinct_on: InputMaybe<Array<token_datas_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_datas_order_by>>;
  where: InputMaybe<token_datas_bool_exp>;
};

export type subscription_roottoken_datas_by_pkArgs = {
  token_data_id_hash: Scalars["String"];
  transaction_version: Scalars["bigint"];
};

export type subscription_roottoken_datas_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<token_datas_stream_cursor_input>>;
  where: InputMaybe<token_datas_bool_exp>;
};

export type subscription_roottoken_ownershipsArgs = {
  distinct_on: InputMaybe<Array<token_ownerships_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<token_ownerships_order_by>>;
  where: InputMaybe<token_ownerships_bool_exp>;
};

export type subscription_roottoken_ownerships_by_pkArgs = {
  property_version: Scalars["numeric"];
  table_handle: Scalars["String"];
  token_data_id_hash: Scalars["String"];
  transaction_version: Scalars["bigint"];
};

export type subscription_roottoken_ownerships_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<token_ownerships_stream_cursor_input>>;
  where: InputMaybe<token_ownerships_bool_exp>;
};

export type subscription_roottokensArgs = {
  distinct_on: InputMaybe<Array<tokens_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<tokens_order_by>>;
  where: InputMaybe<tokens_bool_exp>;
};

export type subscription_roottokens_by_pkArgs = {
  property_version: Scalars["numeric"];
  token_data_id_hash: Scalars["String"];
  transaction_version: Scalars["bigint"];
};

export type subscription_roottokens_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<tokens_stream_cursor_input>>;
  where: InputMaybe<tokens_bool_exp>;
};

export type subscription_rootuser_transactionsArgs = {
  distinct_on: InputMaybe<Array<user_transactions_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<user_transactions_order_by>>;
  where: InputMaybe<user_transactions_bool_exp>;
};

export type subscription_rootuser_transactions_by_pkArgs = {
  version: Scalars["bigint"];
};

export type subscription_rootuser_transactions_streamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<user_transactions_stream_cursor_input>>;
  where: InputMaybe<user_transactions_bool_exp>;
};

/** columns and relationships of "table_items" */
export type table_items = {
  __typename?: "table_items";
  decoded_key: Scalars["jsonb"];
  decoded_value: Maybe<Scalars["jsonb"]>;
  key: Scalars["String"];
  table_handle: Scalars["String"];
  transaction_version: Scalars["bigint"];
  write_set_change_index: Scalars["bigint"];
};

/** columns and relationships of "table_items" */
export type table_itemsdecoded_keyArgs = {
  path: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "table_items" */
export type table_itemsdecoded_valueArgs = {
  path: InputMaybe<Scalars["String"]>;
};

/** Boolean expression to filter rows from the table "table_items". All fields are combined with a logical 'AND'. */
export type table_items_bool_exp = {
  _and: InputMaybe<Array<table_items_bool_exp>>;
  _not: InputMaybe<table_items_bool_exp>;
  _or: InputMaybe<Array<table_items_bool_exp>>;
  decoded_key: InputMaybe<jsonb_comparison_exp>;
  decoded_value: InputMaybe<jsonb_comparison_exp>;
  key: InputMaybe<String_comparison_exp>;
  table_handle: InputMaybe<String_comparison_exp>;
  transaction_version: InputMaybe<bigint_comparison_exp>;
  write_set_change_index: InputMaybe<bigint_comparison_exp>;
};

/** Ordering options when selecting data from "table_items". */
export type table_items_order_by = {
  decoded_key: InputMaybe<order_by>;
  decoded_value: InputMaybe<order_by>;
  key: InputMaybe<order_by>;
  table_handle: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
  write_set_change_index: InputMaybe<order_by>;
};

/** select columns of table "table_items" */
export enum table_items_select_column {
  /** column name */
  decoded_key = "decoded_key",
  /** column name */
  decoded_value = "decoded_value",
  /** column name */
  key = "key",
  /** column name */
  table_handle = "table_handle",
  /** column name */
  transaction_version = "transaction_version",
  /** column name */
  write_set_change_index = "write_set_change_index",
}

/** Streaming cursor of the table "table_items" */
export type table_items_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: table_items_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type table_items_stream_cursor_value_input = {
  decoded_key: InputMaybe<Scalars["jsonb"]>;
  decoded_value: InputMaybe<Scalars["jsonb"]>;
  key: InputMaybe<Scalars["String"]>;
  table_handle: InputMaybe<Scalars["String"]>;
  transaction_version: InputMaybe<Scalars["bigint"]>;
  write_set_change_index: InputMaybe<Scalars["bigint"]>;
};

/** columns and relationships of "table_metadatas" */
export type table_metadatas = {
  __typename?: "table_metadatas";
  handle: Scalars["String"];
  key_type: Scalars["String"];
  value_type: Scalars["String"];
};

/** Boolean expression to filter rows from the table "table_metadatas". All fields are combined with a logical 'AND'. */
export type table_metadatas_bool_exp = {
  _and: InputMaybe<Array<table_metadatas_bool_exp>>;
  _not: InputMaybe<table_metadatas_bool_exp>;
  _or: InputMaybe<Array<table_metadatas_bool_exp>>;
  handle: InputMaybe<String_comparison_exp>;
  key_type: InputMaybe<String_comparison_exp>;
  value_type: InputMaybe<String_comparison_exp>;
};

/** Ordering options when selecting data from "table_metadatas". */
export type table_metadatas_order_by = {
  handle: InputMaybe<order_by>;
  key_type: InputMaybe<order_by>;
  value_type: InputMaybe<order_by>;
};

/** select columns of table "table_metadatas" */
export enum table_metadatas_select_column {
  /** column name */
  handle = "handle",
  /** column name */
  key_type = "key_type",
  /** column name */
  value_type = "value_type",
}

/** Streaming cursor of the table "table_metadatas" */
export type table_metadatas_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: table_metadatas_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type table_metadatas_stream_cursor_value_input = {
  handle: InputMaybe<Scalars["String"]>;
  key_type: InputMaybe<Scalars["String"]>;
  value_type: InputMaybe<Scalars["String"]>;
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

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type timestamptz_comparison_exp = {
  _eq: InputMaybe<Scalars["timestamptz"]>;
  _gt: InputMaybe<Scalars["timestamptz"]>;
  _gte: InputMaybe<Scalars["timestamptz"]>;
  _in: InputMaybe<Array<Scalars["timestamptz"]>>;
  _is_null: InputMaybe<Scalars["Boolean"]>;
  _lt: InputMaybe<Scalars["timestamptz"]>;
  _lte: InputMaybe<Scalars["timestamptz"]>;
  _neq: InputMaybe<Scalars["timestamptz"]>;
  _nin: InputMaybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "token_activities" */
export type token_activities = {
  __typename?: "token_activities";
  /** An array relationship */
  aptos_names_owner: Array<current_aptos_names>;
  /** An aggregate relationship */
  aptos_names_owner_aggregate: current_aptos_names_aggregate;
  /** An array relationship */
  aptos_names_to: Array<current_aptos_names>;
  /** An aggregate relationship */
  aptos_names_to_aggregate: current_aptos_names_aggregate;
  coin_amount: Maybe<Scalars["numeric"]>;
  coin_type: Maybe<Scalars["String"]>;
  collection_data_id_hash: Scalars["String"];
  collection_name: Scalars["String"];
  creator_address: Scalars["String"];
  /** An object relationship */
  current_token_data: Maybe<current_token_datas>;
  event_account_address: Scalars["String"];
  event_creation_number: Scalars["bigint"];
  event_index: Maybe<Scalars["bigint"]>;
  event_sequence_number: Scalars["bigint"];
  from_address: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  property_version: Scalars["numeric"];
  to_address: Maybe<Scalars["String"]>;
  token_amount: Scalars["numeric"];
  token_data_id_hash: Scalars["String"];
  transaction_timestamp: Scalars["timestamp"];
  transaction_version: Scalars["bigint"];
  transfer_type: Scalars["String"];
};

/** columns and relationships of "token_activities" */
export type token_activitiesaptos_names_ownerArgs = {
  distinct_on: InputMaybe<Array<current_aptos_names_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_aptos_names_order_by>>;
  where: InputMaybe<current_aptos_names_bool_exp>;
};

/** columns and relationships of "token_activities" */
export type token_activitiesaptos_names_owner_aggregateArgs = {
  distinct_on: InputMaybe<Array<current_aptos_names_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_aptos_names_order_by>>;
  where: InputMaybe<current_aptos_names_bool_exp>;
};

/** columns and relationships of "token_activities" */
export type token_activitiesaptos_names_toArgs = {
  distinct_on: InputMaybe<Array<current_aptos_names_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_aptos_names_order_by>>;
  where: InputMaybe<current_aptos_names_bool_exp>;
};

/** columns and relationships of "token_activities" */
export type token_activitiesaptos_names_to_aggregateArgs = {
  distinct_on: InputMaybe<Array<current_aptos_names_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_aptos_names_order_by>>;
  where: InputMaybe<current_aptos_names_bool_exp>;
};

/** aggregated selection of "token_activities" */
export type token_activities_aggregate = {
  __typename?: "token_activities_aggregate";
  aggregate: Maybe<token_activities_aggregate_fields>;
  nodes: Array<token_activities>;
};

export type token_activities_aggregate_bool_exp = {
  count: InputMaybe<token_activities_aggregate_bool_exp_count>;
};

export type token_activities_aggregate_bool_exp_count = {
  arguments: InputMaybe<Array<token_activities_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]>;
  filter: InputMaybe<token_activities_bool_exp>;
  predicate: Int_comparison_exp;
};

/** aggregate fields of "token_activities" */
export type token_activities_aggregate_fields = {
  __typename?: "token_activities_aggregate_fields";
  avg: Maybe<token_activities_avg_fields>;
  count: Scalars["Int"];
  max: Maybe<token_activities_max_fields>;
  min: Maybe<token_activities_min_fields>;
  stddev: Maybe<token_activities_stddev_fields>;
  stddev_pop: Maybe<token_activities_stddev_pop_fields>;
  stddev_samp: Maybe<token_activities_stddev_samp_fields>;
  sum: Maybe<token_activities_sum_fields>;
  var_pop: Maybe<token_activities_var_pop_fields>;
  var_samp: Maybe<token_activities_var_samp_fields>;
  variance: Maybe<token_activities_variance_fields>;
};

/** aggregate fields of "token_activities" */
export type token_activities_aggregate_fieldscountArgs = {
  columns: InputMaybe<Array<token_activities_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "token_activities" */
export type token_activities_aggregate_order_by = {
  avg: InputMaybe<token_activities_avg_order_by>;
  count: InputMaybe<order_by>;
  max: InputMaybe<token_activities_max_order_by>;
  min: InputMaybe<token_activities_min_order_by>;
  stddev: InputMaybe<token_activities_stddev_order_by>;
  stddev_pop: InputMaybe<token_activities_stddev_pop_order_by>;
  stddev_samp: InputMaybe<token_activities_stddev_samp_order_by>;
  sum: InputMaybe<token_activities_sum_order_by>;
  var_pop: InputMaybe<token_activities_var_pop_order_by>;
  var_samp: InputMaybe<token_activities_var_samp_order_by>;
  variance: InputMaybe<token_activities_variance_order_by>;
};

/** aggregate avg on columns */
export type token_activities_avg_fields = {
  __typename?: "token_activities_avg_fields";
  coin_amount: Maybe<Scalars["Float"]>;
  event_creation_number: Maybe<Scalars["Float"]>;
  event_index: Maybe<Scalars["Float"]>;
  event_sequence_number: Maybe<Scalars["Float"]>;
  property_version: Maybe<Scalars["Float"]>;
  token_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "token_activities" */
export type token_activities_avg_order_by = {
  coin_amount: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "token_activities". All fields are combined with a logical 'AND'. */
export type token_activities_bool_exp = {
  _and: InputMaybe<Array<token_activities_bool_exp>>;
  _not: InputMaybe<token_activities_bool_exp>;
  _or: InputMaybe<Array<token_activities_bool_exp>>;
  aptos_names_owner: InputMaybe<current_aptos_names_bool_exp>;
  aptos_names_owner_aggregate: InputMaybe<current_aptos_names_aggregate_bool_exp>;
  aptos_names_to: InputMaybe<current_aptos_names_bool_exp>;
  aptos_names_to_aggregate: InputMaybe<current_aptos_names_aggregate_bool_exp>;
  coin_amount: InputMaybe<numeric_comparison_exp>;
  coin_type: InputMaybe<String_comparison_exp>;
  collection_data_id_hash: InputMaybe<String_comparison_exp>;
  collection_name: InputMaybe<String_comparison_exp>;
  creator_address: InputMaybe<String_comparison_exp>;
  current_token_data: InputMaybe<current_token_datas_bool_exp>;
  event_account_address: InputMaybe<String_comparison_exp>;
  event_creation_number: InputMaybe<bigint_comparison_exp>;
  event_index: InputMaybe<bigint_comparison_exp>;
  event_sequence_number: InputMaybe<bigint_comparison_exp>;
  from_address: InputMaybe<String_comparison_exp>;
  name: InputMaybe<String_comparison_exp>;
  property_version: InputMaybe<numeric_comparison_exp>;
  to_address: InputMaybe<String_comparison_exp>;
  token_amount: InputMaybe<numeric_comparison_exp>;
  token_data_id_hash: InputMaybe<String_comparison_exp>;
  transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  transaction_version: InputMaybe<bigint_comparison_exp>;
  transfer_type: InputMaybe<String_comparison_exp>;
};

/** aggregate max on columns */
export type token_activities_max_fields = {
  __typename?: "token_activities_max_fields";
  coin_amount: Maybe<Scalars["numeric"]>;
  coin_type: Maybe<Scalars["String"]>;
  collection_data_id_hash: Maybe<Scalars["String"]>;
  collection_name: Maybe<Scalars["String"]>;
  creator_address: Maybe<Scalars["String"]>;
  event_account_address: Maybe<Scalars["String"]>;
  event_creation_number: Maybe<Scalars["bigint"]>;
  event_index: Maybe<Scalars["bigint"]>;
  event_sequence_number: Maybe<Scalars["bigint"]>;
  from_address: Maybe<Scalars["String"]>;
  name: Maybe<Scalars["String"]>;
  property_version: Maybe<Scalars["numeric"]>;
  to_address: Maybe<Scalars["String"]>;
  token_amount: Maybe<Scalars["numeric"]>;
  token_data_id_hash: Maybe<Scalars["String"]>;
  transaction_timestamp: Maybe<Scalars["timestamp"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
  transfer_type: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "token_activities" */
export type token_activities_max_order_by = {
  coin_amount: InputMaybe<order_by>;
  coin_type: InputMaybe<order_by>;
  collection_data_id_hash: InputMaybe<order_by>;
  collection_name: InputMaybe<order_by>;
  creator_address: InputMaybe<order_by>;
  event_account_address: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  from_address: InputMaybe<order_by>;
  name: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
  to_address: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  token_data_id_hash: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
  transfer_type: InputMaybe<order_by>;
};

/** aggregate min on columns */
export type token_activities_min_fields = {
  __typename?: "token_activities_min_fields";
  coin_amount: Maybe<Scalars["numeric"]>;
  coin_type: Maybe<Scalars["String"]>;
  collection_data_id_hash: Maybe<Scalars["String"]>;
  collection_name: Maybe<Scalars["String"]>;
  creator_address: Maybe<Scalars["String"]>;
  event_account_address: Maybe<Scalars["String"]>;
  event_creation_number: Maybe<Scalars["bigint"]>;
  event_index: Maybe<Scalars["bigint"]>;
  event_sequence_number: Maybe<Scalars["bigint"]>;
  from_address: Maybe<Scalars["String"]>;
  name: Maybe<Scalars["String"]>;
  property_version: Maybe<Scalars["numeric"]>;
  to_address: Maybe<Scalars["String"]>;
  token_amount: Maybe<Scalars["numeric"]>;
  token_data_id_hash: Maybe<Scalars["String"]>;
  transaction_timestamp: Maybe<Scalars["timestamp"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
  transfer_type: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "token_activities" */
export type token_activities_min_order_by = {
  coin_amount: InputMaybe<order_by>;
  coin_type: InputMaybe<order_by>;
  collection_data_id_hash: InputMaybe<order_by>;
  collection_name: InputMaybe<order_by>;
  creator_address: InputMaybe<order_by>;
  event_account_address: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  from_address: InputMaybe<order_by>;
  name: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
  to_address: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  token_data_id_hash: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
  transfer_type: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "token_activities". */
export type token_activities_order_by = {
  aptos_names_owner_aggregate: InputMaybe<current_aptos_names_aggregate_order_by>;
  aptos_names_to_aggregate: InputMaybe<current_aptos_names_aggregate_order_by>;
  coin_amount: InputMaybe<order_by>;
  coin_type: InputMaybe<order_by>;
  collection_data_id_hash: InputMaybe<order_by>;
  collection_name: InputMaybe<order_by>;
  creator_address: InputMaybe<order_by>;
  current_token_data: InputMaybe<current_token_datas_order_by>;
  event_account_address: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  from_address: InputMaybe<order_by>;
  name: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
  to_address: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  token_data_id_hash: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
  transfer_type: InputMaybe<order_by>;
};

/** select columns of table "token_activities" */
export enum token_activities_select_column {
  /** column name */
  coin_amount = "coin_amount",
  /** column name */
  coin_type = "coin_type",
  /** column name */
  collection_data_id_hash = "collection_data_id_hash",
  /** column name */
  collection_name = "collection_name",
  /** column name */
  creator_address = "creator_address",
  /** column name */
  event_account_address = "event_account_address",
  /** column name */
  event_creation_number = "event_creation_number",
  /** column name */
  event_index = "event_index",
  /** column name */
  event_sequence_number = "event_sequence_number",
  /** column name */
  from_address = "from_address",
  /** column name */
  name = "name",
  /** column name */
  property_version = "property_version",
  /** column name */
  to_address = "to_address",
  /** column name */
  token_amount = "token_amount",
  /** column name */
  token_data_id_hash = "token_data_id_hash",
  /** column name */
  transaction_timestamp = "transaction_timestamp",
  /** column name */
  transaction_version = "transaction_version",
  /** column name */
  transfer_type = "transfer_type",
}

/** aggregate stddev on columns */
export type token_activities_stddev_fields = {
  __typename?: "token_activities_stddev_fields";
  coin_amount: Maybe<Scalars["Float"]>;
  event_creation_number: Maybe<Scalars["Float"]>;
  event_index: Maybe<Scalars["Float"]>;
  event_sequence_number: Maybe<Scalars["Float"]>;
  property_version: Maybe<Scalars["Float"]>;
  token_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "token_activities" */
export type token_activities_stddev_order_by = {
  coin_amount: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** aggregate stddev_pop on columns */
export type token_activities_stddev_pop_fields = {
  __typename?: "token_activities_stddev_pop_fields";
  coin_amount: Maybe<Scalars["Float"]>;
  event_creation_number: Maybe<Scalars["Float"]>;
  event_index: Maybe<Scalars["Float"]>;
  event_sequence_number: Maybe<Scalars["Float"]>;
  property_version: Maybe<Scalars["Float"]>;
  token_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "token_activities" */
export type token_activities_stddev_pop_order_by = {
  coin_amount: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** aggregate stddev_samp on columns */
export type token_activities_stddev_samp_fields = {
  __typename?: "token_activities_stddev_samp_fields";
  coin_amount: Maybe<Scalars["Float"]>;
  event_creation_number: Maybe<Scalars["Float"]>;
  event_index: Maybe<Scalars["Float"]>;
  event_sequence_number: Maybe<Scalars["Float"]>;
  property_version: Maybe<Scalars["Float"]>;
  token_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "token_activities" */
export type token_activities_stddev_samp_order_by = {
  coin_amount: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** Streaming cursor of the table "token_activities" */
export type token_activities_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: token_activities_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type token_activities_stream_cursor_value_input = {
  coin_amount: InputMaybe<Scalars["numeric"]>;
  coin_type: InputMaybe<Scalars["String"]>;
  collection_data_id_hash: InputMaybe<Scalars["String"]>;
  collection_name: InputMaybe<Scalars["String"]>;
  creator_address: InputMaybe<Scalars["String"]>;
  event_account_address: InputMaybe<Scalars["String"]>;
  event_creation_number: InputMaybe<Scalars["bigint"]>;
  event_index: InputMaybe<Scalars["bigint"]>;
  event_sequence_number: InputMaybe<Scalars["bigint"]>;
  from_address: InputMaybe<Scalars["String"]>;
  name: InputMaybe<Scalars["String"]>;
  property_version: InputMaybe<Scalars["numeric"]>;
  to_address: InputMaybe<Scalars["String"]>;
  token_amount: InputMaybe<Scalars["numeric"]>;
  token_data_id_hash: InputMaybe<Scalars["String"]>;
  transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  transaction_version: InputMaybe<Scalars["bigint"]>;
  transfer_type: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type token_activities_sum_fields = {
  __typename?: "token_activities_sum_fields";
  coin_amount: Maybe<Scalars["numeric"]>;
  event_creation_number: Maybe<Scalars["bigint"]>;
  event_index: Maybe<Scalars["bigint"]>;
  event_sequence_number: Maybe<Scalars["bigint"]>;
  property_version: Maybe<Scalars["numeric"]>;
  token_amount: Maybe<Scalars["numeric"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "token_activities" */
export type token_activities_sum_order_by = {
  coin_amount: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** columns and relationships of "token_activities_v2" */
export type token_activities_v2 = {
  __typename?: "token_activities_v2";
  after_value: Maybe<Scalars["String"]>;
  /** An array relationship */
  aptos_names_from: Array<current_aptos_names>;
  /** An aggregate relationship */
  aptos_names_from_aggregate: current_aptos_names_aggregate;
  /** An array relationship */
  aptos_names_to: Array<current_aptos_names>;
  /** An aggregate relationship */
  aptos_names_to_aggregate: current_aptos_names_aggregate;
  before_value: Maybe<Scalars["String"]>;
  /** An object relationship */
  current_token_data: Maybe<current_token_datas_v2>;
  entry_function_id_str: Maybe<Scalars["String"]>;
  event_account_address: Scalars["String"];
  event_index: Scalars["bigint"];
  from_address: Maybe<Scalars["String"]>;
  is_fungible_v2: Maybe<Scalars["Boolean"]>;
  property_version_v1: Scalars["numeric"];
  to_address: Maybe<Scalars["String"]>;
  token_amount: Scalars["numeric"];
  token_data_id: Scalars["String"];
  token_standard: Scalars["String"];
  transaction_timestamp: Scalars["timestamp"];
  transaction_version: Scalars["bigint"];
  type: Scalars["String"];
};

/** columns and relationships of "token_activities_v2" */
export type token_activities_v2aptos_names_fromArgs = {
  distinct_on: InputMaybe<Array<current_aptos_names_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_aptos_names_order_by>>;
  where: InputMaybe<current_aptos_names_bool_exp>;
};

/** columns and relationships of "token_activities_v2" */
export type token_activities_v2aptos_names_from_aggregateArgs = {
  distinct_on: InputMaybe<Array<current_aptos_names_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_aptos_names_order_by>>;
  where: InputMaybe<current_aptos_names_bool_exp>;
};

/** columns and relationships of "token_activities_v2" */
export type token_activities_v2aptos_names_toArgs = {
  distinct_on: InputMaybe<Array<current_aptos_names_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_aptos_names_order_by>>;
  where: InputMaybe<current_aptos_names_bool_exp>;
};

/** columns and relationships of "token_activities_v2" */
export type token_activities_v2aptos_names_to_aggregateArgs = {
  distinct_on: InputMaybe<Array<current_aptos_names_select_column>>;
  limit: InputMaybe<Scalars["Int"]>;
  offset: InputMaybe<Scalars["Int"]>;
  order_by: InputMaybe<Array<current_aptos_names_order_by>>;
  where: InputMaybe<current_aptos_names_bool_exp>;
};

/** aggregated selection of "token_activities_v2" */
export type token_activities_v2_aggregate = {
  __typename?: "token_activities_v2_aggregate";
  aggregate: Maybe<token_activities_v2_aggregate_fields>;
  nodes: Array<token_activities_v2>;
};

export type token_activities_v2_aggregate_bool_exp = {
  bool_and: InputMaybe<token_activities_v2_aggregate_bool_exp_bool_and>;
  bool_or: InputMaybe<token_activities_v2_aggregate_bool_exp_bool_or>;
  count: InputMaybe<token_activities_v2_aggregate_bool_exp_count>;
};

export type token_activities_v2_aggregate_bool_exp_bool_and = {
  arguments: token_activities_v2_select_column_token_activities_v2_aggregate_bool_exp_bool_and_arguments_columns;
  distinct: InputMaybe<Scalars["Boolean"]>;
  filter: InputMaybe<token_activities_v2_bool_exp>;
  predicate: Boolean_comparison_exp;
};

export type token_activities_v2_aggregate_bool_exp_bool_or = {
  arguments: token_activities_v2_select_column_token_activities_v2_aggregate_bool_exp_bool_or_arguments_columns;
  distinct: InputMaybe<Scalars["Boolean"]>;
  filter: InputMaybe<token_activities_v2_bool_exp>;
  predicate: Boolean_comparison_exp;
};

export type token_activities_v2_aggregate_bool_exp_count = {
  arguments: InputMaybe<Array<token_activities_v2_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]>;
  filter: InputMaybe<token_activities_v2_bool_exp>;
  predicate: Int_comparison_exp;
};

/** aggregate fields of "token_activities_v2" */
export type token_activities_v2_aggregate_fields = {
  __typename?: "token_activities_v2_aggregate_fields";
  avg: Maybe<token_activities_v2_avg_fields>;
  count: Scalars["Int"];
  max: Maybe<token_activities_v2_max_fields>;
  min: Maybe<token_activities_v2_min_fields>;
  stddev: Maybe<token_activities_v2_stddev_fields>;
  stddev_pop: Maybe<token_activities_v2_stddev_pop_fields>;
  stddev_samp: Maybe<token_activities_v2_stddev_samp_fields>;
  sum: Maybe<token_activities_v2_sum_fields>;
  var_pop: Maybe<token_activities_v2_var_pop_fields>;
  var_samp: Maybe<token_activities_v2_var_samp_fields>;
  variance: Maybe<token_activities_v2_variance_fields>;
};

/** aggregate fields of "token_activities_v2" */
export type token_activities_v2_aggregate_fieldscountArgs = {
  columns: InputMaybe<Array<token_activities_v2_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "token_activities_v2" */
export type token_activities_v2_aggregate_order_by = {
  avg: InputMaybe<token_activities_v2_avg_order_by>;
  count: InputMaybe<order_by>;
  max: InputMaybe<token_activities_v2_max_order_by>;
  min: InputMaybe<token_activities_v2_min_order_by>;
  stddev: InputMaybe<token_activities_v2_stddev_order_by>;
  stddev_pop: InputMaybe<token_activities_v2_stddev_pop_order_by>;
  stddev_samp: InputMaybe<token_activities_v2_stddev_samp_order_by>;
  sum: InputMaybe<token_activities_v2_sum_order_by>;
  var_pop: InputMaybe<token_activities_v2_var_pop_order_by>;
  var_samp: InputMaybe<token_activities_v2_var_samp_order_by>;
  variance: InputMaybe<token_activities_v2_variance_order_by>;
};

/** aggregate avg on columns */
export type token_activities_v2_avg_fields = {
  __typename?: "token_activities_v2_avg_fields";
  event_index: Maybe<Scalars["Float"]>;
  property_version_v1: Maybe<Scalars["Float"]>;
  token_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "token_activities_v2" */
export type token_activities_v2_avg_order_by = {
  event_index: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "token_activities_v2". All fields are combined with a logical 'AND'. */
export type token_activities_v2_bool_exp = {
  _and: InputMaybe<Array<token_activities_v2_bool_exp>>;
  _not: InputMaybe<token_activities_v2_bool_exp>;
  _or: InputMaybe<Array<token_activities_v2_bool_exp>>;
  after_value: InputMaybe<String_comparison_exp>;
  aptos_names_from: InputMaybe<current_aptos_names_bool_exp>;
  aptos_names_from_aggregate: InputMaybe<current_aptos_names_aggregate_bool_exp>;
  aptos_names_to: InputMaybe<current_aptos_names_bool_exp>;
  aptos_names_to_aggregate: InputMaybe<current_aptos_names_aggregate_bool_exp>;
  before_value: InputMaybe<String_comparison_exp>;
  current_token_data: InputMaybe<current_token_datas_v2_bool_exp>;
  entry_function_id_str: InputMaybe<String_comparison_exp>;
  event_account_address: InputMaybe<String_comparison_exp>;
  event_index: InputMaybe<bigint_comparison_exp>;
  from_address: InputMaybe<String_comparison_exp>;
  is_fungible_v2: InputMaybe<Boolean_comparison_exp>;
  property_version_v1: InputMaybe<numeric_comparison_exp>;
  to_address: InputMaybe<String_comparison_exp>;
  token_amount: InputMaybe<numeric_comparison_exp>;
  token_data_id: InputMaybe<String_comparison_exp>;
  token_standard: InputMaybe<String_comparison_exp>;
  transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  transaction_version: InputMaybe<bigint_comparison_exp>;
  type: InputMaybe<String_comparison_exp>;
};

/** aggregate max on columns */
export type token_activities_v2_max_fields = {
  __typename?: "token_activities_v2_max_fields";
  after_value: Maybe<Scalars["String"]>;
  before_value: Maybe<Scalars["String"]>;
  entry_function_id_str: Maybe<Scalars["String"]>;
  event_account_address: Maybe<Scalars["String"]>;
  event_index: Maybe<Scalars["bigint"]>;
  from_address: Maybe<Scalars["String"]>;
  property_version_v1: Maybe<Scalars["numeric"]>;
  to_address: Maybe<Scalars["String"]>;
  token_amount: Maybe<Scalars["numeric"]>;
  token_data_id: Maybe<Scalars["String"]>;
  token_standard: Maybe<Scalars["String"]>;
  transaction_timestamp: Maybe<Scalars["timestamp"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
  type: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "token_activities_v2" */
export type token_activities_v2_max_order_by = {
  after_value: InputMaybe<order_by>;
  before_value: InputMaybe<order_by>;
  entry_function_id_str: InputMaybe<order_by>;
  event_account_address: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  from_address: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
  to_address: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  token_data_id: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
  type: InputMaybe<order_by>;
};

/** aggregate min on columns */
export type token_activities_v2_min_fields = {
  __typename?: "token_activities_v2_min_fields";
  after_value: Maybe<Scalars["String"]>;
  before_value: Maybe<Scalars["String"]>;
  entry_function_id_str: Maybe<Scalars["String"]>;
  event_account_address: Maybe<Scalars["String"]>;
  event_index: Maybe<Scalars["bigint"]>;
  from_address: Maybe<Scalars["String"]>;
  property_version_v1: Maybe<Scalars["numeric"]>;
  to_address: Maybe<Scalars["String"]>;
  token_amount: Maybe<Scalars["numeric"]>;
  token_data_id: Maybe<Scalars["String"]>;
  token_standard: Maybe<Scalars["String"]>;
  transaction_timestamp: Maybe<Scalars["timestamp"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
  type: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "token_activities_v2" */
export type token_activities_v2_min_order_by = {
  after_value: InputMaybe<order_by>;
  before_value: InputMaybe<order_by>;
  entry_function_id_str: InputMaybe<order_by>;
  event_account_address: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  from_address: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
  to_address: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  token_data_id: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
  type: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "token_activities_v2". */
export type token_activities_v2_order_by = {
  after_value: InputMaybe<order_by>;
  aptos_names_from_aggregate: InputMaybe<current_aptos_names_aggregate_order_by>;
  aptos_names_to_aggregate: InputMaybe<current_aptos_names_aggregate_order_by>;
  before_value: InputMaybe<order_by>;
  current_token_data: InputMaybe<current_token_datas_v2_order_by>;
  entry_function_id_str: InputMaybe<order_by>;
  event_account_address: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  from_address: InputMaybe<order_by>;
  is_fungible_v2: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
  to_address: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  token_data_id: InputMaybe<order_by>;
  token_standard: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
  type: InputMaybe<order_by>;
};

/** select columns of table "token_activities_v2" */
export enum token_activities_v2_select_column {
  /** column name */
  after_value = "after_value",
  /** column name */
  before_value = "before_value",
  /** column name */
  entry_function_id_str = "entry_function_id_str",
  /** column name */
  event_account_address = "event_account_address",
  /** column name */
  event_index = "event_index",
  /** column name */
  from_address = "from_address",
  /** column name */
  is_fungible_v2 = "is_fungible_v2",
  /** column name */
  property_version_v1 = "property_version_v1",
  /** column name */
  to_address = "to_address",
  /** column name */
  token_amount = "token_amount",
  /** column name */
  token_data_id = "token_data_id",
  /** column name */
  token_standard = "token_standard",
  /** column name */
  transaction_timestamp = "transaction_timestamp",
  /** column name */
  transaction_version = "transaction_version",
  /** column name */
  type = "type",
}

/** select "token_activities_v2_aggregate_bool_exp_bool_and_arguments_columns" columns of table "token_activities_v2" */
export enum token_activities_v2_select_column_token_activities_v2_aggregate_bool_exp_bool_and_arguments_columns {
  /** column name */
  is_fungible_v2 = "is_fungible_v2",
}

/** select "token_activities_v2_aggregate_bool_exp_bool_or_arguments_columns" columns of table "token_activities_v2" */
export enum token_activities_v2_select_column_token_activities_v2_aggregate_bool_exp_bool_or_arguments_columns {
  /** column name */
  is_fungible_v2 = "is_fungible_v2",
}

/** aggregate stddev on columns */
export type token_activities_v2_stddev_fields = {
  __typename?: "token_activities_v2_stddev_fields";
  event_index: Maybe<Scalars["Float"]>;
  property_version_v1: Maybe<Scalars["Float"]>;
  token_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "token_activities_v2" */
export type token_activities_v2_stddev_order_by = {
  event_index: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** aggregate stddev_pop on columns */
export type token_activities_v2_stddev_pop_fields = {
  __typename?: "token_activities_v2_stddev_pop_fields";
  event_index: Maybe<Scalars["Float"]>;
  property_version_v1: Maybe<Scalars["Float"]>;
  token_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "token_activities_v2" */
export type token_activities_v2_stddev_pop_order_by = {
  event_index: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** aggregate stddev_samp on columns */
export type token_activities_v2_stddev_samp_fields = {
  __typename?: "token_activities_v2_stddev_samp_fields";
  event_index: Maybe<Scalars["Float"]>;
  property_version_v1: Maybe<Scalars["Float"]>;
  token_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "token_activities_v2" */
export type token_activities_v2_stddev_samp_order_by = {
  event_index: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** Streaming cursor of the table "token_activities_v2" */
export type token_activities_v2_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: token_activities_v2_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type token_activities_v2_stream_cursor_value_input = {
  after_value: InputMaybe<Scalars["String"]>;
  before_value: InputMaybe<Scalars["String"]>;
  entry_function_id_str: InputMaybe<Scalars["String"]>;
  event_account_address: InputMaybe<Scalars["String"]>;
  event_index: InputMaybe<Scalars["bigint"]>;
  from_address: InputMaybe<Scalars["String"]>;
  is_fungible_v2: InputMaybe<Scalars["Boolean"]>;
  property_version_v1: InputMaybe<Scalars["numeric"]>;
  to_address: InputMaybe<Scalars["String"]>;
  token_amount: InputMaybe<Scalars["numeric"]>;
  token_data_id: InputMaybe<Scalars["String"]>;
  token_standard: InputMaybe<Scalars["String"]>;
  transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  transaction_version: InputMaybe<Scalars["bigint"]>;
  type: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type token_activities_v2_sum_fields = {
  __typename?: "token_activities_v2_sum_fields";
  event_index: Maybe<Scalars["bigint"]>;
  property_version_v1: Maybe<Scalars["numeric"]>;
  token_amount: Maybe<Scalars["numeric"]>;
  transaction_version: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "token_activities_v2" */
export type token_activities_v2_sum_order_by = {
  event_index: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** aggregate var_pop on columns */
export type token_activities_v2_var_pop_fields = {
  __typename?: "token_activities_v2_var_pop_fields";
  event_index: Maybe<Scalars["Float"]>;
  property_version_v1: Maybe<Scalars["Float"]>;
  token_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "token_activities_v2" */
export type token_activities_v2_var_pop_order_by = {
  event_index: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** aggregate var_samp on columns */
export type token_activities_v2_var_samp_fields = {
  __typename?: "token_activities_v2_var_samp_fields";
  event_index: Maybe<Scalars["Float"]>;
  property_version_v1: Maybe<Scalars["Float"]>;
  token_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "token_activities_v2" */
export type token_activities_v2_var_samp_order_by = {
  event_index: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** aggregate variance on columns */
export type token_activities_v2_variance_fields = {
  __typename?: "token_activities_v2_variance_fields";
  event_index: Maybe<Scalars["Float"]>;
  property_version_v1: Maybe<Scalars["Float"]>;
  token_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "token_activities_v2" */
export type token_activities_v2_variance_order_by = {
  event_index: InputMaybe<order_by>;
  property_version_v1: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** aggregate var_pop on columns */
export type token_activities_var_pop_fields = {
  __typename?: "token_activities_var_pop_fields";
  coin_amount: Maybe<Scalars["Float"]>;
  event_creation_number: Maybe<Scalars["Float"]>;
  event_index: Maybe<Scalars["Float"]>;
  event_sequence_number: Maybe<Scalars["Float"]>;
  property_version: Maybe<Scalars["Float"]>;
  token_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "token_activities" */
export type token_activities_var_pop_order_by = {
  coin_amount: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** aggregate var_samp on columns */
export type token_activities_var_samp_fields = {
  __typename?: "token_activities_var_samp_fields";
  coin_amount: Maybe<Scalars["Float"]>;
  event_creation_number: Maybe<Scalars["Float"]>;
  event_index: Maybe<Scalars["Float"]>;
  event_sequence_number: Maybe<Scalars["Float"]>;
  property_version: Maybe<Scalars["Float"]>;
  token_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "token_activities" */
export type token_activities_var_samp_order_by = {
  coin_amount: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** aggregate variance on columns */
export type token_activities_variance_fields = {
  __typename?: "token_activities_variance_fields";
  coin_amount: Maybe<Scalars["Float"]>;
  event_creation_number: Maybe<Scalars["Float"]>;
  event_index: Maybe<Scalars["Float"]>;
  event_sequence_number: Maybe<Scalars["Float"]>;
  property_version: Maybe<Scalars["Float"]>;
  token_amount: Maybe<Scalars["Float"]>;
  transaction_version: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "token_activities" */
export type token_activities_variance_order_by = {
  coin_amount: InputMaybe<order_by>;
  event_creation_number: InputMaybe<order_by>;
  event_index: InputMaybe<order_by>;
  event_sequence_number: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
  token_amount: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** columns and relationships of "token_datas" */
export type token_datas = {
  __typename?: "token_datas";
  collection_data_id_hash: Scalars["String"];
  collection_name: Scalars["String"];
  creator_address: Scalars["String"];
  default_properties: Scalars["jsonb"];
  description: Scalars["String"];
  description_mutable: Scalars["Boolean"];
  largest_property_version: Scalars["numeric"];
  maximum: Scalars["numeric"];
  maximum_mutable: Scalars["Boolean"];
  metadata_uri: Scalars["String"];
  name: Scalars["String"];
  payee_address: Scalars["String"];
  properties_mutable: Scalars["Boolean"];
  royalty_mutable: Scalars["Boolean"];
  royalty_points_denominator: Scalars["numeric"];
  royalty_points_numerator: Scalars["numeric"];
  supply: Scalars["numeric"];
  token_data_id_hash: Scalars["String"];
  transaction_timestamp: Scalars["timestamp"];
  transaction_version: Scalars["bigint"];
  uri_mutable: Scalars["Boolean"];
};

/** columns and relationships of "token_datas" */
export type token_datasdefault_propertiesArgs = {
  path: InputMaybe<Scalars["String"]>;
};

/** Boolean expression to filter rows from the table "token_datas". All fields are combined with a logical 'AND'. */
export type token_datas_bool_exp = {
  _and: InputMaybe<Array<token_datas_bool_exp>>;
  _not: InputMaybe<token_datas_bool_exp>;
  _or: InputMaybe<Array<token_datas_bool_exp>>;
  collection_data_id_hash: InputMaybe<String_comparison_exp>;
  collection_name: InputMaybe<String_comparison_exp>;
  creator_address: InputMaybe<String_comparison_exp>;
  default_properties: InputMaybe<jsonb_comparison_exp>;
  description: InputMaybe<String_comparison_exp>;
  description_mutable: InputMaybe<Boolean_comparison_exp>;
  largest_property_version: InputMaybe<numeric_comparison_exp>;
  maximum: InputMaybe<numeric_comparison_exp>;
  maximum_mutable: InputMaybe<Boolean_comparison_exp>;
  metadata_uri: InputMaybe<String_comparison_exp>;
  name: InputMaybe<String_comparison_exp>;
  payee_address: InputMaybe<String_comparison_exp>;
  properties_mutable: InputMaybe<Boolean_comparison_exp>;
  royalty_mutable: InputMaybe<Boolean_comparison_exp>;
  royalty_points_denominator: InputMaybe<numeric_comparison_exp>;
  royalty_points_numerator: InputMaybe<numeric_comparison_exp>;
  supply: InputMaybe<numeric_comparison_exp>;
  token_data_id_hash: InputMaybe<String_comparison_exp>;
  transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  transaction_version: InputMaybe<bigint_comparison_exp>;
  uri_mutable: InputMaybe<Boolean_comparison_exp>;
};

/** Ordering options when selecting data from "token_datas". */
export type token_datas_order_by = {
  collection_data_id_hash: InputMaybe<order_by>;
  collection_name: InputMaybe<order_by>;
  creator_address: InputMaybe<order_by>;
  default_properties: InputMaybe<order_by>;
  description: InputMaybe<order_by>;
  description_mutable: InputMaybe<order_by>;
  largest_property_version: InputMaybe<order_by>;
  maximum: InputMaybe<order_by>;
  maximum_mutable: InputMaybe<order_by>;
  metadata_uri: InputMaybe<order_by>;
  name: InputMaybe<order_by>;
  payee_address: InputMaybe<order_by>;
  properties_mutable: InputMaybe<order_by>;
  royalty_mutable: InputMaybe<order_by>;
  royalty_points_denominator: InputMaybe<order_by>;
  royalty_points_numerator: InputMaybe<order_by>;
  supply: InputMaybe<order_by>;
  token_data_id_hash: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
  uri_mutable: InputMaybe<order_by>;
};

/** select columns of table "token_datas" */
export enum token_datas_select_column {
  /** column name */
  collection_data_id_hash = "collection_data_id_hash",
  /** column name */
  collection_name = "collection_name",
  /** column name */
  creator_address = "creator_address",
  /** column name */
  default_properties = "default_properties",
  /** column name */
  description = "description",
  /** column name */
  description_mutable = "description_mutable",
  /** column name */
  largest_property_version = "largest_property_version",
  /** column name */
  maximum = "maximum",
  /** column name */
  maximum_mutable = "maximum_mutable",
  /** column name */
  metadata_uri = "metadata_uri",
  /** column name */
  name = "name",
  /** column name */
  payee_address = "payee_address",
  /** column name */
  properties_mutable = "properties_mutable",
  /** column name */
  royalty_mutable = "royalty_mutable",
  /** column name */
  royalty_points_denominator = "royalty_points_denominator",
  /** column name */
  royalty_points_numerator = "royalty_points_numerator",
  /** column name */
  supply = "supply",
  /** column name */
  token_data_id_hash = "token_data_id_hash",
  /** column name */
  transaction_timestamp = "transaction_timestamp",
  /** column name */
  transaction_version = "transaction_version",
  /** column name */
  uri_mutable = "uri_mutable",
}

/** Streaming cursor of the table "token_datas" */
export type token_datas_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: token_datas_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type token_datas_stream_cursor_value_input = {
  collection_data_id_hash: InputMaybe<Scalars["String"]>;
  collection_name: InputMaybe<Scalars["String"]>;
  creator_address: InputMaybe<Scalars["String"]>;
  default_properties: InputMaybe<Scalars["jsonb"]>;
  description: InputMaybe<Scalars["String"]>;
  description_mutable: InputMaybe<Scalars["Boolean"]>;
  largest_property_version: InputMaybe<Scalars["numeric"]>;
  maximum: InputMaybe<Scalars["numeric"]>;
  maximum_mutable: InputMaybe<Scalars["Boolean"]>;
  metadata_uri: InputMaybe<Scalars["String"]>;
  name: InputMaybe<Scalars["String"]>;
  payee_address: InputMaybe<Scalars["String"]>;
  properties_mutable: InputMaybe<Scalars["Boolean"]>;
  royalty_mutable: InputMaybe<Scalars["Boolean"]>;
  royalty_points_denominator: InputMaybe<Scalars["numeric"]>;
  royalty_points_numerator: InputMaybe<Scalars["numeric"]>;
  supply: InputMaybe<Scalars["numeric"]>;
  token_data_id_hash: InputMaybe<Scalars["String"]>;
  transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  transaction_version: InputMaybe<Scalars["bigint"]>;
  uri_mutable: InputMaybe<Scalars["Boolean"]>;
};

/** columns and relationships of "token_ownerships" */
export type token_ownerships = {
  __typename?: "token_ownerships";
  amount: Scalars["numeric"];
  collection_data_id_hash: Scalars["String"];
  collection_name: Scalars["String"];
  creator_address: Scalars["String"];
  name: Scalars["String"];
  owner_address: Maybe<Scalars["String"]>;
  property_version: Scalars["numeric"];
  table_handle: Scalars["String"];
  table_type: Maybe<Scalars["String"]>;
  token_data_id_hash: Scalars["String"];
  transaction_timestamp: Scalars["timestamp"];
  transaction_version: Scalars["bigint"];
};

/** Boolean expression to filter rows from the table "token_ownerships". All fields are combined with a logical 'AND'. */
export type token_ownerships_bool_exp = {
  _and: InputMaybe<Array<token_ownerships_bool_exp>>;
  _not: InputMaybe<token_ownerships_bool_exp>;
  _or: InputMaybe<Array<token_ownerships_bool_exp>>;
  amount: InputMaybe<numeric_comparison_exp>;
  collection_data_id_hash: InputMaybe<String_comparison_exp>;
  collection_name: InputMaybe<String_comparison_exp>;
  creator_address: InputMaybe<String_comparison_exp>;
  name: InputMaybe<String_comparison_exp>;
  owner_address: InputMaybe<String_comparison_exp>;
  property_version: InputMaybe<numeric_comparison_exp>;
  table_handle: InputMaybe<String_comparison_exp>;
  table_type: InputMaybe<String_comparison_exp>;
  token_data_id_hash: InputMaybe<String_comparison_exp>;
  transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  transaction_version: InputMaybe<bigint_comparison_exp>;
};

/** Ordering options when selecting data from "token_ownerships". */
export type token_ownerships_order_by = {
  amount: InputMaybe<order_by>;
  collection_data_id_hash: InputMaybe<order_by>;
  collection_name: InputMaybe<order_by>;
  creator_address: InputMaybe<order_by>;
  name: InputMaybe<order_by>;
  owner_address: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
  table_handle: InputMaybe<order_by>;
  table_type: InputMaybe<order_by>;
  token_data_id_hash: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** select columns of table "token_ownerships" */
export enum token_ownerships_select_column {
  /** column name */
  amount = "amount",
  /** column name */
  collection_data_id_hash = "collection_data_id_hash",
  /** column name */
  collection_name = "collection_name",
  /** column name */
  creator_address = "creator_address",
  /** column name */
  name = "name",
  /** column name */
  owner_address = "owner_address",
  /** column name */
  property_version = "property_version",
  /** column name */
  table_handle = "table_handle",
  /** column name */
  table_type = "table_type",
  /** column name */
  token_data_id_hash = "token_data_id_hash",
  /** column name */
  transaction_timestamp = "transaction_timestamp",
  /** column name */
  transaction_version = "transaction_version",
}

/** Streaming cursor of the table "token_ownerships" */
export type token_ownerships_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: token_ownerships_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type token_ownerships_stream_cursor_value_input = {
  amount: InputMaybe<Scalars["numeric"]>;
  collection_data_id_hash: InputMaybe<Scalars["String"]>;
  collection_name: InputMaybe<Scalars["String"]>;
  creator_address: InputMaybe<Scalars["String"]>;
  name: InputMaybe<Scalars["String"]>;
  owner_address: InputMaybe<Scalars["String"]>;
  property_version: InputMaybe<Scalars["numeric"]>;
  table_handle: InputMaybe<Scalars["String"]>;
  table_type: InputMaybe<Scalars["String"]>;
  token_data_id_hash: InputMaybe<Scalars["String"]>;
  transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  transaction_version: InputMaybe<Scalars["bigint"]>;
};

/** columns and relationships of "tokens" */
export type tokens = {
  __typename?: "tokens";
  collection_data_id_hash: Scalars["String"];
  collection_name: Scalars["String"];
  creator_address: Scalars["String"];
  name: Scalars["String"];
  property_version: Scalars["numeric"];
  token_data_id_hash: Scalars["String"];
  token_properties: Scalars["jsonb"];
  transaction_timestamp: Scalars["timestamp"];
  transaction_version: Scalars["bigint"];
};

/** columns and relationships of "tokens" */
export type tokenstoken_propertiesArgs = {
  path: InputMaybe<Scalars["String"]>;
};

/** Boolean expression to filter rows from the table "tokens". All fields are combined with a logical 'AND'. */
export type tokens_bool_exp = {
  _and: InputMaybe<Array<tokens_bool_exp>>;
  _not: InputMaybe<tokens_bool_exp>;
  _or: InputMaybe<Array<tokens_bool_exp>>;
  collection_data_id_hash: InputMaybe<String_comparison_exp>;
  collection_name: InputMaybe<String_comparison_exp>;
  creator_address: InputMaybe<String_comparison_exp>;
  name: InputMaybe<String_comparison_exp>;
  property_version: InputMaybe<numeric_comparison_exp>;
  token_data_id_hash: InputMaybe<String_comparison_exp>;
  token_properties: InputMaybe<jsonb_comparison_exp>;
  transaction_timestamp: InputMaybe<timestamp_comparison_exp>;
  transaction_version: InputMaybe<bigint_comparison_exp>;
};

/** Ordering options when selecting data from "tokens". */
export type tokens_order_by = {
  collection_data_id_hash: InputMaybe<order_by>;
  collection_name: InputMaybe<order_by>;
  creator_address: InputMaybe<order_by>;
  name: InputMaybe<order_by>;
  property_version: InputMaybe<order_by>;
  token_data_id_hash: InputMaybe<order_by>;
  token_properties: InputMaybe<order_by>;
  transaction_timestamp: InputMaybe<order_by>;
  transaction_version: InputMaybe<order_by>;
};

/** select columns of table "tokens" */
export enum tokens_select_column {
  /** column name */
  collection_data_id_hash = "collection_data_id_hash",
  /** column name */
  collection_name = "collection_name",
  /** column name */
  creator_address = "creator_address",
  /** column name */
  name = "name",
  /** column name */
  property_version = "property_version",
  /** column name */
  token_data_id_hash = "token_data_id_hash",
  /** column name */
  token_properties = "token_properties",
  /** column name */
  transaction_timestamp = "transaction_timestamp",
  /** column name */
  transaction_version = "transaction_version",
}

/** Streaming cursor of the table "tokens" */
export type tokens_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: tokens_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type tokens_stream_cursor_value_input = {
  collection_data_id_hash: InputMaybe<Scalars["String"]>;
  collection_name: InputMaybe<Scalars["String"]>;
  creator_address: InputMaybe<Scalars["String"]>;
  name: InputMaybe<Scalars["String"]>;
  property_version: InputMaybe<Scalars["numeric"]>;
  token_data_id_hash: InputMaybe<Scalars["String"]>;
  token_properties: InputMaybe<Scalars["jsonb"]>;
  transaction_timestamp: InputMaybe<Scalars["timestamp"]>;
  transaction_version: InputMaybe<Scalars["bigint"]>;
};

/** columns and relationships of "user_transactions" */
export type user_transactions = {
  __typename?: "user_transactions";
  block_height: Scalars["bigint"];
  entry_function_id_str: Scalars["String"];
  epoch: Scalars["bigint"];
  expiration_timestamp_secs: Scalars["timestamp"];
  gas_unit_price: Scalars["numeric"];
  max_gas_amount: Scalars["numeric"];
  parent_signature_type: Scalars["String"];
  sender: Scalars["String"];
  sequence_number: Scalars["bigint"];
  timestamp: Scalars["timestamp"];
  version: Scalars["bigint"];
};

/** Boolean expression to filter rows from the table "user_transactions". All fields are combined with a logical 'AND'. */
export type user_transactions_bool_exp = {
  _and: InputMaybe<Array<user_transactions_bool_exp>>;
  _not: InputMaybe<user_transactions_bool_exp>;
  _or: InputMaybe<Array<user_transactions_bool_exp>>;
  block_height: InputMaybe<bigint_comparison_exp>;
  entry_function_id_str: InputMaybe<String_comparison_exp>;
  epoch: InputMaybe<bigint_comparison_exp>;
  expiration_timestamp_secs: InputMaybe<timestamp_comparison_exp>;
  gas_unit_price: InputMaybe<numeric_comparison_exp>;
  max_gas_amount: InputMaybe<numeric_comparison_exp>;
  parent_signature_type: InputMaybe<String_comparison_exp>;
  sender: InputMaybe<String_comparison_exp>;
  sequence_number: InputMaybe<bigint_comparison_exp>;
  timestamp: InputMaybe<timestamp_comparison_exp>;
  version: InputMaybe<bigint_comparison_exp>;
};

/** Ordering options when selecting data from "user_transactions". */
export type user_transactions_order_by = {
  block_height: InputMaybe<order_by>;
  entry_function_id_str: InputMaybe<order_by>;
  epoch: InputMaybe<order_by>;
  expiration_timestamp_secs: InputMaybe<order_by>;
  gas_unit_price: InputMaybe<order_by>;
  max_gas_amount: InputMaybe<order_by>;
  parent_signature_type: InputMaybe<order_by>;
  sender: InputMaybe<order_by>;
  sequence_number: InputMaybe<order_by>;
  timestamp: InputMaybe<order_by>;
  version: InputMaybe<order_by>;
};

/** select columns of table "user_transactions" */
export enum user_transactions_select_column {
  /** column name */
  block_height = "block_height",
  /** column name */
  entry_function_id_str = "entry_function_id_str",
  /** column name */
  epoch = "epoch",
  /** column name */
  expiration_timestamp_secs = "expiration_timestamp_secs",
  /** column name */
  gas_unit_price = "gas_unit_price",
  /** column name */
  max_gas_amount = "max_gas_amount",
  /** column name */
  parent_signature_type = "parent_signature_type",
  /** column name */
  sender = "sender",
  /** column name */
  sequence_number = "sequence_number",
  /** column name */
  timestamp = "timestamp",
  /** column name */
  version = "version",
}

/** Streaming cursor of the table "user_transactions" */
export type user_transactions_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: user_transactions_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type user_transactions_stream_cursor_value_input = {
  block_height: InputMaybe<Scalars["bigint"]>;
  entry_function_id_str: InputMaybe<Scalars["String"]>;
  epoch: InputMaybe<Scalars["bigint"]>;
  expiration_timestamp_secs: InputMaybe<Scalars["timestamp"]>;
  gas_unit_price: InputMaybe<Scalars["numeric"]>;
  max_gas_amount: InputMaybe<Scalars["numeric"]>;
  parent_signature_type: InputMaybe<Scalars["String"]>;
  sender: InputMaybe<Scalars["String"]>;
  sequence_number: InputMaybe<Scalars["bigint"]>;
  timestamp: InputMaybe<Scalars["timestamp"]>;
  version: InputMaybe<Scalars["bigint"]>;
};
