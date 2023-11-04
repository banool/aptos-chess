export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Address: string;
  Any: any;
  U8: number;
  U16: number;
  U32: number;
  U64: string;
  U128: string;
  U256: string;
};

export type ACL = {
  __typename?: 'ACL';
  list: Array<Scalars['Address']>;
};

export type AUID = {
  __typename?: 'AUID';
  unique_address: Scalars['Address'];
};

export type Account = {
  __typename?: 'Account';
  authentication_key: Array<Scalars['U8']>;
  coin_register_events: EventHandle;
  guid_creation_num: Scalars['U64'];
  key_rotation_events: EventHandle;
  rotation_capability_offer: CapabilityOffer;
  sequence_number: Scalars['U64'];
  signer_capability_offer: CapabilityOffer;
};

export type AccountMap = {
  __typename?: 'AccountMap';
  account_address: Scalars['Address'];
  balance: Scalars['U64'];
};

export type AddDistributionEvent = {
  __typename?: 'AddDistributionEvent';
  amount: Scalars['U64'];
  operator: Scalars['Address'];
  pool_address: Scalars['Address'];
};

export type AddOwnersEvent = {
  __typename?: 'AddOwnersEvent';
  owners_added: Array<Scalars['Address']>;
};

export type AdminStore = {
  __typename?: 'AdminStore';
  create_events: EventHandle;
  nonce: Scalars['U64'];
  vesting_contracts: Array<Scalars['Address']>;
};

export type AdminWithdrawEvent = {
  __typename?: 'AdminWithdrawEvent';
  admin: Scalars['Address'];
  amount: Scalars['U64'];
  vesting_contract_address: Scalars['Address'];
};

export type AggrOrMultiSignature = {
  __typename?: 'AggrOrMultiSignature';
  bytes: Array<Scalars['U8']>;
};

export type AggrPublicKeysWithPoP = {
  __typename?: 'AggrPublicKeysWithPoP';
  bytes: Array<Scalars['U8']>;
};

export type AggregatableCoin = {
  __typename?: 'AggregatableCoin';
  value: _0x1__aggregator__Aggregator;
};

export type AggregatorFactory = {
  __typename?: 'AggregatorFactory';
  phantom_table: Table;
};

export type AggregatorSnapshot = {
  __typename?: 'AggregatorSnapshot';
  value: Scalars['Any'];
};

export type AllowedDep = {
  __typename?: 'AllowedDep';
  account: Scalars['Address'];
  module_name: Scalars['String'];
};

export type AllowedValidators = {
  __typename?: 'AllowedValidators';
  accounts: Array<Scalars['Address']>;
};

export type ApprovedExecutionHashes = {
  __typename?: 'ApprovedExecutionHashes';
  hashes: SimpleMap;
};

export type AptosCoin = {
  __typename?: 'AptosCoin';
  dummy_field: Scalars['Boolean'];
};

export type AptosCoinMintCapability = {
  __typename?: 'AptosCoinMintCapability';
  mint_cap: MintCapability;
};

export type BigVector = {
  __typename?: 'BigVector';
  bucket_size: Scalars['U64'];
  buckets: TableWithLength;
  end_index: Scalars['U64'];
};

export type BitVector = {
  __typename?: 'BitVector';
  bit_field: Array<Scalars['Boolean']>;
  length: Scalars['U64'];
};

export type BlockResource = {
  __typename?: 'BlockResource';
  epoch_interval: Scalars['U64'];
  height: Scalars['U64'];
  new_block_events: EventHandle;
  update_epoch_interval_events: EventHandle;
};

export type Board = {
  __typename?: 'Board';
  board: Array<Array<Option>>;
};

export type Box = {
  __typename?: 'Box';
  val: Scalars['Any'];
};

export type BurnCapability = {
  __typename?: 'BurnCapability';
  dummy_field: Scalars['Boolean'];
};

export type BurnRef = {
  __typename?: 'BurnRef';
  metadata: Object;
};

export type Cap = {
  __typename?: 'Cap';
  root: Scalars['Address'];
};

export type CapDelegateState = {
  __typename?: 'CapDelegateState';
  root: Scalars['Address'];
};

export type CapState = {
  __typename?: 'CapState';
  delegates: Array<Scalars['Address']>;
};

export type Capabilities = {
  __typename?: 'Capabilities';
  burn_cap: BurnCapability;
  freeze_cap: FreezeCapability;
  mint_cap: MintCapability;
};

export type CapabilityOffer = {
  __typename?: 'CapabilityOffer';
  for: Option;
};

export type ChainId = {
  __typename?: 'ChainId';
  id: Scalars['U8'];
};

export type Ciphertext = {
  __typename?: 'Ciphertext';
  left: RistrettoPoint;
  right: RistrettoPoint;
};

export type Coin = {
  __typename?: 'Coin';
  value: Scalars['U64'];
};

export type CoinInfo = {
  __typename?: 'CoinInfo';
  decimals: Scalars['U8'];
  name: Scalars['String'];
  supply: Option;
  symbol: Scalars['String'];
};

export type CoinRegisterEvent = {
  __typename?: 'CoinRegisterEvent';
  type_info: TypeInfo;
};

export type CoinStore = {
  __typename?: 'CoinStore';
  coin: Coin;
  deposit_events: EventHandle;
  frozen: Scalars['Boolean'];
  withdraw_events: EventHandle;
};

export type CollectedFeesPerBlock = {
  __typename?: 'CollectedFeesPerBlock';
  amount: AggregatableCoin;
  burn_percentage: Scalars['U8'];
  proposer: Option;
};

export type Commitment = {
  __typename?: 'Commitment';
  point: RistrettoPoint;
};

export type CompressedCiphertext = {
  __typename?: 'CompressedCiphertext';
  left: CompressedRistretto;
  right: CompressedRistretto;
};

export type CompressedPubkey = {
  __typename?: 'CompressedPubkey';
  point: CompressedRistretto;
};

export type CompressedRistretto = {
  __typename?: 'CompressedRistretto';
  data: Array<Scalars['U8']>;
};

export type ConcurrentSupply = {
  __typename?: 'ConcurrentSupply';
  current: _0x1__aggregator_v2__Aggregator;
};

export type Configuration = {
  __typename?: 'Configuration';
  epoch: Scalars['U64'];
  events: EventHandle;
  last_reconfiguration_time: Scalars['U64'];
};

export type Cons = {
  __typename?: 'Cons';
  car: Scalars['Any'];
  cdr: Scalars['Any'];
};

export type ConsensusConfig = {
  __typename?: 'ConsensusConfig';
  config: Array<Scalars['U8']>;
};

export type ConstructorRef = {
  __typename?: 'ConstructorRef';
  can_delete: Scalars['Boolean'];
  self: Scalars['Address'];
};

export type Container = {
  __typename?: 'Container';
  store: SimpleMap;
};

export type CreateStakingContractEvent = {
  __typename?: 'CreateStakingContractEvent';
  commission_percentage: Scalars['U64'];
  operator: Scalars['Address'];
  pool_address: Scalars['Address'];
  principal: Scalars['U64'];
  voter: Scalars['Address'];
};

export type CreateTransactionEvent = {
  __typename?: 'CreateTransactionEvent';
  creator: Scalars['Address'];
  sequence_number: Scalars['U64'];
  transaction: MultisigTransaction;
};

export type CreateVestingContractEvent = {
  __typename?: 'CreateVestingContractEvent';
  commission_percentage: Scalars['U64'];
  grant_amount: Scalars['U64'];
  operator: Scalars['Address'];
  staking_pool_address: Scalars['Address'];
  vesting_contract_address: Scalars['Address'];
  voter: Scalars['Address'];
  withdrawal_address: Scalars['Address'];
};

export type CurrentTimeMicroseconds = {
  __typename?: 'CurrentTimeMicroseconds';
  microseconds: Scalars['U64'];
};

export type DelegateVotingPowerEvent = {
  __typename?: 'DelegateVotingPowerEvent';
  delegator: Scalars['Address'];
  pool_address: Scalars['Address'];
  voter: Scalars['Address'];
};

export type DelegatedMintCapability = {
  __typename?: 'DelegatedMintCapability';
  to: Scalars['Address'];
};

export type DelegatedVotes = {
  __typename?: 'DelegatedVotes';
  active_shares: Scalars['U128'];
  active_shares_next_lockup: Scalars['U128'];
  last_locked_until_secs: Scalars['U64'];
  pending_inactive_shares: Scalars['U128'];
};

export type DelegationPool = {
  __typename?: 'DelegationPool';
  active_shares: _0x1__pool_u64_unbound__Pool;
  add_stake_events: EventHandle;
  distribute_commission_events: EventHandle;
  inactive_shares: Table;
  observed_lockup_cycle: ObservedLockupCycle;
  operator_commission_percentage: Scalars['U64'];
  pending_withdrawals: Table;
  reactivate_stake_events: EventHandle;
  stake_pool_signer_cap: SignerCapability;
  total_coins_inactive: Scalars['U64'];
  unlock_stake_events: EventHandle;
  withdraw_stake_events: EventHandle;
};

export type DelegationPoolOwnership = {
  __typename?: 'DelegationPoolOwnership';
  pool_address: Scalars['Address'];
};

export type Delegations = {
  __typename?: 'Delegations';
  inner: Array<DelegatedMintCapability>;
};

export type DeleteRef = {
  __typename?: 'DeleteRef';
  self: Scalars['Address'];
};

export type DeriveRef = {
  __typename?: 'DeriveRef';
  self: Scalars['Address'];
};

export type DeriveRefPod = {
  __typename?: 'DeriveRefPod';
  metadata_derive_ref: DeriveRef;
};

export type DirectCoinTransferConfigUpdatedEvent = {
  __typename?: 'DirectCoinTransferConfigUpdatedEvent';
  new_allow_direct_transfers: Scalars['Boolean'];
};

export type DirectTransferConfig = {
  __typename?: 'DirectTransferConfig';
  allow_arbitrary_coin_transfers: Scalars['Boolean'];
  update_coin_transfer_events: EventHandle;
};

export type DisableReconfiguration = {
  __typename?: 'DisableReconfiguration';
  dummy_field: Scalars['Boolean'];
};

export type DistributeCommission = {
  __typename?: 'DistributeCommission';
  beneficiary: Scalars['Address'];
  commission_active: Scalars['U64'];
  commission_pending_inactive: Scalars['U64'];
  operator: Scalars['Address'];
  pool_address: Scalars['Address'];
};

export type DistributeCommissionEvent = {
  __typename?: 'DistributeCommissionEvent';
  commission_active: Scalars['U64'];
  commission_pending_inactive: Scalars['U64'];
  operator: Scalars['Address'];
  pool_address: Scalars['Address'];
};

export type DistributeRewardsEvent = {
  __typename?: 'DistributeRewardsEvent';
  pool_address: Scalars['Address'];
  rewards_amount: Scalars['U64'];
};

export type ECDSARawPublicKey = {
  __typename?: 'ECDSARawPublicKey';
  bytes: Array<Scalars['U8']>;
};

export type ECDSASignature = {
  __typename?: 'ECDSASignature';
  bytes: Array<Scalars['U8']>;
};

export type EmployeeAccountMap = {
  __typename?: 'EmployeeAccountMap';
  accounts: Array<Scalars['Address']>;
  beneficiary_resetter: Scalars['Address'];
  validator: ValidatorConfigurationWithCommission;
  vesting_schedule_denominator: Scalars['U64'];
  vesting_schedule_numerator: Array<Scalars['U64']>;
};

export type EnPassantTarget = {
  __typename?: 'EnPassantTarget';
  x: Scalars['U8'];
  y: Scalars['U8'];
};

export type Entry = {
  __typename?: 'Entry';
  hash: Scalars['U64'];
  key: Scalars['Any'];
  value: Scalars['Any'];
};

export type EventHandle = {
  __typename?: 'EventHandle';
  counter: Scalars['U64'];
  guid: GUID;
};

export type ExecuteRejectedTransactionEvent = {
  __typename?: 'ExecuteRejectedTransactionEvent';
  executor: Scalars['Address'];
  num_rejections: Scalars['U64'];
  sequence_number: Scalars['U64'];
};

export type ExecutionConfig = {
  __typename?: 'ExecutionConfig';
  config: Array<Scalars['U8']>;
};

export type ExecutionError = {
  __typename?: 'ExecutionError';
  abort_location: Scalars['String'];
  error_code: Scalars['U64'];
  error_type: Scalars['String'];
};

export type ExtendRef = {
  __typename?: 'ExtendRef';
  self: Scalars['Address'];
};

export type FakeCons = {
  __typename?: 'FakeCons';
  car: Scalars['Any'];
  cdr: Scalars['Any'];
};

export type Features = {
  __typename?: 'Features';
  features: Array<Scalars['U8']>;
};

export type FeeStatement = {
  __typename?: 'FeeStatement';
  execution_gas_units: Scalars['U64'];
  io_gas_units: Scalars['U64'];
  storage_fee_octas: Scalars['U64'];
  storage_fee_refund_octas: Scalars['U64'];
  total_charge_gas_units: Scalars['U64'];
};

export type FixedPoint32 = {
  __typename?: 'FixedPoint32';
  value: Scalars['U64'];
};

export type FixedPoint64 = {
  __typename?: 'FixedPoint64';
  value: Scalars['U128'];
};

export type FormatFq12LscLsb = {
  __typename?: 'FormatFq12LscLsb';
  dummy_field: Scalars['Boolean'];
};

export type FormatFrLsb = {
  __typename?: 'FormatFrLsb';
  dummy_field: Scalars['Boolean'];
};

export type FormatFrMsb = {
  __typename?: 'FormatFrMsb';
  dummy_field: Scalars['Boolean'];
};

export type FormatG1Compr = {
  __typename?: 'FormatG1Compr';
  dummy_field: Scalars['Boolean'];
};

export type FormatG1Uncompr = {
  __typename?: 'FormatG1Uncompr';
  dummy_field: Scalars['Boolean'];
};

export type FormatG2Compr = {
  __typename?: 'FormatG2Compr';
  dummy_field: Scalars['Boolean'];
};

export type FormatG2Uncompr = {
  __typename?: 'FormatG2Uncompr';
  dummy_field: Scalars['Boolean'];
};

export type FormatGt = {
  __typename?: 'FormatGt';
  dummy_field: Scalars['Boolean'];
};

export type Fq12 = {
  __typename?: 'Fq12';
  dummy_field: Scalars['Boolean'];
};

export type Fr = {
  __typename?: 'Fr';
  dummy_field: Scalars['Boolean'];
};

export type FreezeCapability = {
  __typename?: 'FreezeCapability';
  dummy_field: Scalars['Boolean'];
};

export type FrozenEvent = {
  __typename?: 'FrozenEvent';
  frozen: Scalars['Boolean'];
};

export type FungibleAsset = {
  __typename?: 'FungibleAsset';
  amount: Scalars['U64'];
  metadata: Object;
};

export type FungibleAssetEvents = {
  __typename?: 'FungibleAssetEvents';
  deposit_events: EventHandle;
  frozen_events: EventHandle;
  withdraw_events: EventHandle;
};

export type FungibleStore = {
  __typename?: 'FungibleStore';
  balance: Scalars['U64'];
  frozen: Scalars['Boolean'];
  metadata: Object;
};

export type G1 = {
  __typename?: 'G1';
  dummy_field: Scalars['Boolean'];
};

export type G2 = {
  __typename?: 'G2';
  dummy_field: Scalars['Boolean'];
};

export type GUID = {
  __typename?: 'GUID';
  id: _0x1__guid__ID;
};

export type Game = {
  __typename?: 'Game';
  black_piece_status: PieceStatus;
  board: Board;
  draw_offered_by: Option;
  en_passant_target: Option;
  game_status: Scalars['U8'];
  is_white_turn: Scalars['Boolean'];
  player1: Scalars['Address'];
  player2: Scalars['Address'];
  player_resigned: Scalars['Boolean'];
  white_piece_status: PieceStatus;
};

export type GameCreatedEvent = {
  __typename?: 'GameCreatedEvent';
  creator_address: Scalars['Address'];
  object_address: Scalars['Address'];
  opponent_address: Scalars['Address'];
};

export type GasCurve = {
  __typename?: 'GasCurve';
  max_gas: Scalars['U64'];
  min_gas: Scalars['U64'];
  points: Array<Point>;
};

export type GasEntry = {
  __typename?: 'GasEntry';
  key: Scalars['String'];
  val: Scalars['U64'];
};

export type GasParameter = {
  __typename?: 'GasParameter';
  usage: Usage;
};

export type GasSchedule = {
  __typename?: 'GasSchedule';
  entries: Array<GasEntry>;
};

export type GasScheduleV2 = {
  __typename?: 'GasScheduleV2';
  entries: Array<GasEntry>;
  feature_version: Scalars['U64'];
};

export type GenesisEndMarker = {
  __typename?: 'GenesisEndMarker';
  dummy_field: Scalars['Boolean'];
};

export type GovernanceConfig = {
  __typename?: 'GovernanceConfig';
  min_voting_threshold: Scalars['U128'];
  required_proposer_stake: Scalars['U64'];
  voting_duration_secs: Scalars['U64'];
};

export type GovernanceEvents = {
  __typename?: 'GovernanceEvents';
  create_proposal_events: EventHandle;
  update_config_events: EventHandle;
  vote_events: EventHandle;
};

export type GovernanceProposal = {
  __typename?: 'GovernanceProposal';
  dummy_field: Scalars['Boolean'];
};

export type GovernanceRecords = {
  __typename?: 'GovernanceRecords';
  create_proposal_events: EventHandle;
  delegate_voting_power_events: EventHandle;
  delegated_votes: SmartTable;
  vote_delegation: SmartTable;
  vote_events: EventHandle;
  votes: SmartTable;
  votes_per_proposal: SmartTable;
};

export type GovernanceResponsbility = {
  __typename?: 'GovernanceResponsbility';
  signer_caps: SimpleMap;
};

export type Gt = {
  __typename?: 'Gt';
  dummy_field: Scalars['Boolean'];
};

export type HashG1XmdSha256SswuRo = {
  __typename?: 'HashG1XmdSha256SswuRo';
  dummy_field: Scalars['Boolean'];
};

export type HashG2XmdSha256SswuRo = {
  __typename?: 'HashG2XmdSha256SswuRo';
  dummy_field: Scalars['Boolean'];
};

export type IncreaseLockupEvent = {
  __typename?: 'IncreaseLockupEvent';
  new_locked_until_secs: Scalars['U64'];
  old_locked_until_secs: Scalars['U64'];
  pool_address: Scalars['Address'];
};

export type IndividualValidatorPerformance = {
  __typename?: 'IndividualValidatorPerformance';
  failed_proposals: Scalars['U64'];
  successful_proposals: Scalars['U64'];
};

export type Integer = {
  __typename?: 'Integer';
  limit: Scalars['U128'];
  value: Scalars['U128'];
};

export type JoinValidatorSetEvent = {
  __typename?: 'JoinValidatorSetEvent';
  pool_address: Scalars['Address'];
};

export type KeyRotationEvent = {
  __typename?: 'KeyRotationEvent';
  new_authentication_key: Array<Scalars['U8']>;
  old_authentication_key: Array<Scalars['U8']>;
};

export type LeaveValidatorSetEvent = {
  __typename?: 'LeaveValidatorSetEvent';
  pool_address: Scalars['Address'];
};

export type LinearCap = {
  __typename?: 'LinearCap';
  root: Scalars['Address'];
};

export type LinearTransferRef = {
  __typename?: 'LinearTransferRef';
  owner: Scalars['Address'];
  self: Scalars['Address'];
};

export type Metadata = {
  __typename?: 'Metadata';
  decimals: Scalars['U8'];
  icon_uri: Scalars['String'];
  name: Scalars['String'];
  project_uri: Scalars['String'];
  symbol: Scalars['String'];
};

export type MetadataUpdatedEvent = {
  __typename?: 'MetadataUpdatedEvent';
  new_metadata: SimpleMap;
  old_metadata: SimpleMap;
};

export type MintCapStore = {
  __typename?: 'MintCapStore';
  mint_cap: MintCapability;
};

export type MintCapability = {
  __typename?: 'MintCapability';
  dummy_field: Scalars['Boolean'];
};

export type MintRef = {
  __typename?: 'MintRef';
  metadata: Object;
};

export type ModuleMetadata = {
  __typename?: 'ModuleMetadata';
  extension: Option;
  name: Scalars['String'];
  source: Array<Scalars['U8']>;
  source_map: Array<Scalars['U8']>;
};

export type MultisigAccount = {
  __typename?: 'MultisigAccount';
  add_owners_events: EventHandle;
  create_transaction_events: EventHandle;
  execute_rejected_transaction_events: EventHandle;
  execute_transaction_events: EventHandle;
  last_executed_sequence_number: Scalars['U64'];
  metadata: SimpleMap;
  metadata_updated_events: EventHandle;
  next_sequence_number: Scalars['U64'];
  num_signatures_required: Scalars['U64'];
  owners: Array<Scalars['Address']>;
  remove_owners_events: EventHandle;
  signer_cap: Option;
  transaction_execution_failed_events: EventHandle;
  transactions: Table;
  update_signature_required_events: EventHandle;
  vote_events: EventHandle;
};

export type MultisigAccountCreationMessage = {
  __typename?: 'MultisigAccountCreationMessage';
  account_address: Scalars['Address'];
  chain_id: Scalars['U8'];
  num_signatures_required: Scalars['U64'];
  owners: Array<Scalars['Address']>;
  sequence_number: Scalars['U64'];
};

export type MultisigAccountCreationWithAuthKeyRevocationMessage = {
  __typename?: 'MultisigAccountCreationWithAuthKeyRevocationMessage';
  account_address: Scalars['Address'];
  chain_id: Scalars['U8'];
  num_signatures_required: Scalars['U64'];
  owners: Array<Scalars['Address']>;
  sequence_number: Scalars['U64'];
};

export type MultisigTransaction = {
  __typename?: 'MultisigTransaction';
  creation_time_secs: Scalars['U64'];
  creator: Scalars['Address'];
  payload: Option;
  payload_hash: Option;
  votes: SimpleMap;
};

export type NIL = {
  __typename?: 'NIL';
  dummy_field: Scalars['Boolean'];
};

export type NewBlockEvent = {
  __typename?: 'NewBlockEvent';
  epoch: Scalars['U64'];
  failed_proposer_indices: Array<Scalars['U64']>;
  hash: Scalars['Address'];
  height: Scalars['U64'];
  previous_block_votes_bitvec: Array<Scalars['U8']>;
  proposer: Scalars['Address'];
  round: Scalars['U64'];
  time_microseconds: Scalars['U64'];
};

export type NewEpochEvent = {
  __typename?: 'NewEpochEvent';
  epoch: Scalars['U64'];
};

export type Object = {
  __typename?: 'Object';
  inner: Scalars['Address'];
};

export type ObjectCore = {
  __typename?: 'ObjectCore';
  allow_ungated_transfer: Scalars['Boolean'];
  guid_creation_num: Scalars['U64'];
  owner: Scalars['Address'];
  transfer_events: EventHandle;
};

export type ObjectGroup = {
  __typename?: 'ObjectGroup';
  dummy_field: Scalars['Boolean'];
};

export type ObservedLockupCycle = {
  __typename?: 'ObservedLockupCycle';
  index: Scalars['U64'];
};

export type Option = {
  __typename?: 'Option';
  vec: Array<Scalars['Any']>;
};

export type OptionalAggregator = {
  __typename?: 'OptionalAggregator';
  aggregator: Option;
  integer: Option;
};

export type OriginatingAddress = {
  __typename?: 'OriginatingAddress';
  address_map: Table;
};

export type OwnerCapability = {
  __typename?: 'OwnerCapability';
  pool_address: Scalars['Address'];
};

export type PackageDep = {
  __typename?: 'PackageDep';
  account: Scalars['Address'];
  package_name: Scalars['String'];
};

export type PackageMetadata = {
  __typename?: 'PackageMetadata';
  deps: Array<PackageDep>;
  extension: Option;
  manifest: Array<Scalars['U8']>;
  modules: Array<ModuleMetadata>;
  name: Scalars['String'];
  source_digest: Scalars['String'];
  upgrade_number: Scalars['U64'];
  upgrade_policy: UpgradePolicy;
};

export type PackageRegistry = {
  __typename?: 'PackageRegistry';
  packages: Array<PackageMetadata>;
};

export type Piece = {
  __typename?: 'Piece';
  color: Scalars['U8'];
  piece_type: Scalars['U8'];
};

export type PieceStatus = {
  __typename?: 'PieceStatus';
  king_has_moved: Scalars['Boolean'];
  king_side_rook_has_moved: Scalars['Boolean'];
  queen_side_rook_has_moved: Scalars['Boolean'];
};

export type Point = {
  __typename?: 'Point';
  x: Scalars['U64'];
  y: Scalars['U64'];
};

export type ProofOfPossession = {
  __typename?: 'ProofOfPossession';
  bytes: Array<Scalars['U8']>;
};

export type Proposal = {
  __typename?: 'Proposal';
  creation_time_secs: Scalars['U64'];
  early_resolution_vote_threshold: Option;
  execution_content: Option;
  execution_hash: Array<Scalars['U8']>;
  expiration_secs: Scalars['U64'];
  is_resolved: Scalars['Boolean'];
  metadata: SimpleMap;
  min_vote_threshold: Scalars['U128'];
  no_votes: Scalars['U128'];
  proposer: Scalars['Address'];
  resolution_time_secs: Scalars['U64'];
  yes_votes: Scalars['U128'];
};

export type PublicKey = {
  __typename?: 'PublicKey';
  bytes: Array<Scalars['U8']>;
};

export type PublicKeyWithPoP = {
  __typename?: 'PublicKeyWithPoP';
  bytes: Array<Scalars['U8']>;
};

export type RangeProof = {
  __typename?: 'RangeProof';
  bytes: Array<Scalars['U8']>;
};

export type RecordKey = {
  __typename?: 'RecordKey';
  proposal_id: Scalars['U64'];
  stake_pool: Scalars['Address'];
};

export type RegisterForumEvent = {
  __typename?: 'RegisterForumEvent';
  hosting_account: Scalars['Address'];
  proposal_type_info: TypeInfo;
};

export type RegisterValidatorCandidateEvent = {
  __typename?: 'RegisterValidatorCandidateEvent';
  pool_address: Scalars['Address'];
};

export type RemoveOwnersEvent = {
  __typename?: 'RemoveOwnersEvent';
  owners_removed: Array<Scalars['Address']>;
};

export type RequestCommissionEvent = {
  __typename?: 'RequestCommissionEvent';
  accumulated_rewards: Scalars['U64'];
  commission_amount: Scalars['U64'];
  operator: Scalars['Address'];
  pool_address: Scalars['Address'];
};

export type ResolveProposal = {
  __typename?: 'ResolveProposal';
  no_votes: Scalars['U128'];
  proposal_id: Scalars['U64'];
  resolved_early: Scalars['Boolean'];
  yes_votes: Scalars['U128'];
};

export type Result = {
  __typename?: 'Result';
  inner: Scalars['U8'];
};

export type RistrettoPoint = {
  __typename?: 'RistrettoPoint';
  handle: Scalars['U64'];
};

export type RotateConsensusKeyEvent = {
  __typename?: 'RotateConsensusKeyEvent';
  new_consensus_pubkey: Array<Scalars['U8']>;
  old_consensus_pubkey: Array<Scalars['U8']>;
  pool_address: Scalars['Address'];
};

export type RotationCapability = {
  __typename?: 'RotationCapability';
  account: Scalars['Address'];
};

export type RotationCapabilityOfferProofChallenge = {
  __typename?: 'RotationCapabilityOfferProofChallenge';
  recipient_address: Scalars['Address'];
  sequence_number: Scalars['U64'];
};

export type RotationCapabilityOfferProofChallengeV2 = {
  __typename?: 'RotationCapabilityOfferProofChallengeV2';
  chain_id: Scalars['U8'];
  recipient_address: Scalars['Address'];
  sequence_number: Scalars['U64'];
  source_address: Scalars['Address'];
};

export type RotationProofChallenge = {
  __typename?: 'RotationProofChallenge';
  current_auth_key: Scalars['Address'];
  new_public_key: Array<Scalars['U8']>;
  originator: Scalars['Address'];
  sequence_number: Scalars['U64'];
};

export type Scalar = {
  __typename?: 'Scalar';
  data: Array<Scalars['U8']>;
};

export type SetBeneficiaryEvent = {
  __typename?: 'SetBeneficiaryEvent';
  admin: Scalars['Address'];
  new_beneficiary: Scalars['Address'];
  old_beneficiary: Scalars['Address'];
  shareholder: Scalars['Address'];
  vesting_contract_address: Scalars['Address'];
};

export type SetOperatorEvent = {
  __typename?: 'SetOperatorEvent';
  new_operator: Scalars['Address'];
  old_operator: Scalars['Address'];
  pool_address: Scalars['Address'];
};

export type SetVersionCapability = {
  __typename?: 'SetVersionCapability';
  dummy_field: Scalars['Boolean'];
};

export type SignedMessage = {
  __typename?: 'SignedMessage';
  inner: Scalars['Any'];
  type_info: TypeInfo;
};

export type SignerCapability = {
  __typename?: 'SignerCapability';
  account: Scalars['Address'];
};

export type SignerCapabilityOfferProofChallenge = {
  __typename?: 'SignerCapabilityOfferProofChallenge';
  recipient_address: Scalars['Address'];
  sequence_number: Scalars['U64'];
};

export type SignerCapabilityOfferProofChallengeV2 = {
  __typename?: 'SignerCapabilityOfferProofChallengeV2';
  recipient_address: Scalars['Address'];
  sequence_number: Scalars['U64'];
  source_address: Scalars['Address'];
};

export type SimpleMap = {
  __typename?: 'SimpleMap';
  data: Array<_0x1__simple_map__Element>;
};

export type SmartTable = {
  __typename?: 'SmartTable';
  buckets: TableWithLength;
  level: Scalars['U8'];
  num_buckets: Scalars['U64'];
  size: Scalars['U64'];
  split_load_threshold: Scalars['U8'];
  target_bucket_size: Scalars['U64'];
};

export type SmartVector = {
  __typename?: 'SmartVector';
  big_vec: Option;
  bucket_size: Option;
  inline_capacity: Option;
  inline_vec: Array<Scalars['Any']>;
};

export type StakePool = {
  __typename?: 'StakePool';
  active: Coin;
  add_stake_events: EventHandle;
  delegated_voter: Scalars['Address'];
  distribute_rewards_events: EventHandle;
  inactive: Coin;
  increase_lockup_events: EventHandle;
  initialize_validator_events: EventHandle;
  join_validator_set_events: EventHandle;
  leave_validator_set_events: EventHandle;
  locked_until_secs: Scalars['U64'];
  operator_address: Scalars['Address'];
  pending_active: Coin;
  pending_inactive: Coin;
  reactivate_stake_events: EventHandle;
  rotate_consensus_key_events: EventHandle;
  set_operator_events: EventHandle;
  unlock_stake_events: EventHandle;
  update_network_and_fullnode_addresses_events: EventHandle;
  withdraw_stake_events: EventHandle;
};

export type StakingConfig = {
  __typename?: 'StakingConfig';
  allow_validator_set_change: Scalars['Boolean'];
  maximum_stake: Scalars['U64'];
  minimum_stake: Scalars['U64'];
  recurring_lockup_duration_secs: Scalars['U64'];
  rewards_rate: Scalars['U64'];
  rewards_rate_denominator: Scalars['U64'];
  voting_power_increase_limit: Scalars['U64'];
};

export type StakingContract = {
  __typename?: 'StakingContract';
  commission_percentage: Scalars['U64'];
  distribution_pool: _0x1__pool_u64__Pool;
  owner_cap: OwnerCapability;
  pool_address: Scalars['Address'];
  principal: Scalars['U64'];
  signer_cap: SignerCapability;
};

export type StakingGroupContainer = {
  __typename?: 'StakingGroupContainer';
  dummy_field: Scalars['Boolean'];
};

export type StakingGroupUpdateCommissionEvent = {
  __typename?: 'StakingGroupUpdateCommissionEvent';
  update_commission_events: EventHandle;
};

export type StakingInfo = {
  __typename?: 'StakingInfo';
  commission_percentage: Scalars['U64'];
  operator: Scalars['Address'];
  pool_address: Scalars['Address'];
  voter: Scalars['Address'];
};

export type StakingRewardsConfig = {
  __typename?: 'StakingRewardsConfig';
  last_rewards_rate_period_start_in_secs: Scalars['U64'];
  min_rewards_rate: FixedPoint64;
  rewards_rate: FixedPoint64;
  rewards_rate_decrease_rate: FixedPoint64;
  rewards_rate_period_in_secs: Scalars['U64'];
};

export type StateStorageUsage = {
  __typename?: 'StateStorageUsage';
  epoch: Scalars['U64'];
  usage: Usage;
};

export type StorageGas = {
  __typename?: 'StorageGas';
  per_byte_create: Scalars['U64'];
  per_byte_read: Scalars['U64'];
  per_byte_write: Scalars['U64'];
  per_item_create: Scalars['U64'];
  per_item_read: Scalars['U64'];
  per_item_write: Scalars['U64'];
};

export type StorageGasConfig = {
  __typename?: 'StorageGasConfig';
  byte_config: UsageGasConfig;
  item_config: UsageGasConfig;
};

export type Store = {
  __typename?: 'Store';
  add_distribution_events: EventHandle;
  add_stake_events: EventHandle;
  create_staking_contract_events: EventHandle;
  distribute_events: EventHandle;
  request_commission_events: EventHandle;
  reset_lockup_events: EventHandle;
  staking_contracts: SimpleMap;
  switch_operator_events: EventHandle;
  unlock_stake_events: EventHandle;
  update_voter_events: EventHandle;
};

export type Supply = {
  __typename?: 'Supply';
  current: Scalars['U128'];
  maximum: Option;
};

export type SupplyConfig = {
  __typename?: 'SupplyConfig';
  allow_upgrades: Scalars['Boolean'];
};

export type SwitchOperatorEvent = {
  __typename?: 'SwitchOperatorEvent';
  new_operator: Scalars['Address'];
  old_operator: Scalars['Address'];
  pool_address: Scalars['Address'];
};

export type Table = {
  __typename?: 'Table';
  handle: Scalars['Address'];
};

export type TableWithLength = {
  __typename?: 'TableWithLength';
  inner: Table;
  length: Scalars['U64'];
};

export type TerminateEvent = {
  __typename?: 'TerminateEvent';
  admin: Scalars['Address'];
  vesting_contract_address: Scalars['Address'];
};

export type TombStone = {
  __typename?: 'TombStone';
  original_owner: Scalars['Address'];
};

export type TransactionExecutionFailedEvent = {
  __typename?: 'TransactionExecutionFailedEvent';
  execution_error: ExecutionError;
  executor: Scalars['Address'];
  num_approvals: Scalars['U64'];
  sequence_number: Scalars['U64'];
  transaction_payload: Array<Scalars['U8']>;
};

export type TransactionExecutionSucceededEvent = {
  __typename?: 'TransactionExecutionSucceededEvent';
  executor: Scalars['Address'];
  num_approvals: Scalars['U64'];
  sequence_number: Scalars['U64'];
  transaction_payload: Array<Scalars['U8']>;
};

export type TransactionValidation = {
  __typename?: 'TransactionValidation';
  module_addr: Scalars['Address'];
  module_name: Array<Scalars['U8']>;
  module_prologue_name: Array<Scalars['U8']>;
  multi_agent_prologue_name: Array<Scalars['U8']>;
  script_prologue_name: Array<Scalars['U8']>;
  user_epilogue_name: Array<Scalars['U8']>;
};

export type TransferEvent = {
  __typename?: 'TransferEvent';
  from: Scalars['Address'];
  object: Scalars['Address'];
  to: Scalars['Address'];
};

export type TypeInfo = {
  __typename?: 'TypeInfo';
  account_address: Scalars['Address'];
  module_name: Array<Scalars['U8']>;
  struct_name: Array<Scalars['U8']>;
};

export type UnlockRewardsEvent = {
  __typename?: 'UnlockRewardsEvent';
  admin: Scalars['Address'];
  amount: Scalars['U64'];
  staking_pool_address: Scalars['Address'];
  vesting_contract_address: Scalars['Address'];
};

export type UpdateCommissionEvent = {
  __typename?: 'UpdateCommissionEvent';
  new_commission_percentage: Scalars['U64'];
  old_commission_percentage: Scalars['U64'];
  operator: Scalars['Address'];
  staker: Scalars['Address'];
};

export type UpdateConfigEvent = {
  __typename?: 'UpdateConfigEvent';
  min_voting_threshold: Scalars['U128'];
  required_proposer_stake: Scalars['U64'];
  voting_duration_secs: Scalars['U64'];
};

export type UpdateEpochIntervalEvent = {
  __typename?: 'UpdateEpochIntervalEvent';
  new_epoch_interval: Scalars['U64'];
  old_epoch_interval: Scalars['U64'];
};

export type UpdateNetworkAndFullnodeAddressesEvent = {
  __typename?: 'UpdateNetworkAndFullnodeAddressesEvent';
  new_fullnode_addresses: Array<Scalars['U8']>;
  new_network_addresses: Array<Scalars['U8']>;
  old_fullnode_addresses: Array<Scalars['U8']>;
  old_network_addresses: Array<Scalars['U8']>;
  pool_address: Scalars['Address'];
};

export type UpdateOperatorEvent = {
  __typename?: 'UpdateOperatorEvent';
  admin: Scalars['Address'];
  commission_percentage: Scalars['U64'];
  new_operator: Scalars['Address'];
  old_operator: Scalars['Address'];
  staking_pool_address: Scalars['Address'];
  vesting_contract_address: Scalars['Address'];
};

export type UpdateSignaturesRequiredEvent = {
  __typename?: 'UpdateSignaturesRequiredEvent';
  new_num_signatures_required: Scalars['U64'];
  old_num_signatures_required: Scalars['U64'];
};

export type UpgradePolicy = {
  __typename?: 'UpgradePolicy';
  policy: Scalars['U8'];
};

export type Usage = {
  __typename?: 'Usage';
  bytes: Scalars['U64'];
  items: Scalars['U64'];
};

export type UsageGasConfig = {
  __typename?: 'UsageGasConfig';
  create_curve: GasCurve;
  read_curve: GasCurve;
  target_usage: Scalars['U64'];
  write_curve: GasCurve;
};

export type ValidatorConfig = {
  __typename?: 'ValidatorConfig';
  consensus_pubkey: Array<Scalars['U8']>;
  fullnode_addresses: Array<Scalars['U8']>;
  network_addresses: Array<Scalars['U8']>;
  validator_index: Scalars['U64'];
};

export type ValidatorConfiguration = {
  __typename?: 'ValidatorConfiguration';
  consensus_pubkey: Array<Scalars['U8']>;
  full_node_network_addresses: Array<Scalars['U8']>;
  network_addresses: Array<Scalars['U8']>;
  operator_address: Scalars['Address'];
  owner_address: Scalars['Address'];
  proof_of_possession: Array<Scalars['U8']>;
  stake_amount: Scalars['U64'];
  voter_address: Scalars['Address'];
};

export type ValidatorConfigurationWithCommission = {
  __typename?: 'ValidatorConfigurationWithCommission';
  commission_percentage: Scalars['U64'];
  join_during_genesis: Scalars['Boolean'];
  validator_config: ValidatorConfiguration;
};

export type ValidatorFees = {
  __typename?: 'ValidatorFees';
  fees_table: Table;
};

export type ValidatorInfo = {
  __typename?: 'ValidatorInfo';
  addr: Scalars['Address'];
  config: ValidatorConfig;
  voting_power: Scalars['U64'];
};

export type ValidatorPerformance = {
  __typename?: 'ValidatorPerformance';
  validators: Array<IndividualValidatorPerformance>;
};

export type ValidatorSet = {
  __typename?: 'ValidatorSet';
  active_validators: Array<ValidatorInfo>;
  consensus_scheme: Scalars['U8'];
  pending_active: Array<ValidatorInfo>;
  pending_inactive: Array<ValidatorInfo>;
  total_joining_power: Scalars['U128'];
  total_voting_power: Scalars['U128'];
};

export type Version = {
  __typename?: 'Version';
  major: Scalars['U64'];
};

export type VestEvent = {
  __typename?: 'VestEvent';
  admin: Scalars['Address'];
  amount: Scalars['U64'];
  period_vested: Scalars['U64'];
  staking_pool_address: Scalars['Address'];
  vesting_contract_address: Scalars['Address'];
};

export type VestingAccountManagement = {
  __typename?: 'VestingAccountManagement';
  roles: SimpleMap;
};

export type VestingContract = {
  __typename?: 'VestingContract';
  admin: Scalars['Address'];
  admin_withdraw_events: EventHandle;
  beneficiaries: SimpleMap;
  distribute_events: EventHandle;
  grant_pool: _0x1__pool_u64__Pool;
  remaining_grant: Scalars['U64'];
  reset_lockup_events: EventHandle;
  set_beneficiary_events: EventHandle;
  signer_cap: SignerCapability;
  staking: StakingInfo;
  state: Scalars['U64'];
  terminate_events: EventHandle;
  unlock_rewards_events: EventHandle;
  update_operator_events: EventHandle;
  update_voter_events: EventHandle;
  vest_events: EventHandle;
  vesting_schedule: VestingSchedule;
  withdrawal_address: Scalars['Address'];
};

export type VestingSchedule = {
  __typename?: 'VestingSchedule';
  last_vested_period: Scalars['U64'];
  period_duration: Scalars['U64'];
  schedule: Array<FixedPoint32>;
  start_timestamp_secs: Scalars['U64'];
};

export type VoteDelegation = {
  __typename?: 'VoteDelegation';
  last_locked_until_secs: Scalars['U64'];
  pending_voter: Scalars['Address'];
  voter: Scalars['Address'];
};

export type VotingEvents = {
  __typename?: 'VotingEvents';
  create_proposal_events: EventHandle;
  register_forum_events: EventHandle;
  resolve_proposal_events: EventHandle;
  vote_events: EventHandle;
};

export type VotingForum = {
  __typename?: 'VotingForum';
  events: VotingEvents;
  next_proposal_id: Scalars['U64'];
  proposals: Table;
};

export type VotingRecordKey = {
  __typename?: 'VotingRecordKey';
  proposal_id: Scalars['U64'];
  voter: Scalars['Address'];
};

export type VotingRecords = {
  __typename?: 'VotingRecords';
  votes: Table;
};

export type VotingRecordsV2 = {
  __typename?: 'VotingRecordsV2';
  votes: SmartTable;
};

export type _0x1__aggregator__Aggregator = {
  __typename?: '_0x1__aggregator__Aggregator';
  handle: Scalars['Address'];
  key: Scalars['Address'];
  limit: Scalars['U128'];
};

export type _0x1__aggregator_v2__Aggregator = {
  __typename?: '_0x1__aggregator_v2__Aggregator';
  max_value: Scalars['Any'];
  value: Scalars['Any'];
};

export type _0x1__any__Any = {
  __typename?: '_0x1__any__Any';
  data: Array<Scalars['U8']>;
  type_name: Scalars['String'];
};

export type _0x1__aptos_governance__CreateProposalEvent = {
  __typename?: '_0x1__aptos_governance__CreateProposalEvent';
  execution_hash: Array<Scalars['U8']>;
  proposal_id: Scalars['U64'];
  proposal_metadata: SimpleMap;
  proposer: Scalars['Address'];
  stake_pool: Scalars['Address'];
};

export type _0x1__aptos_governance__VoteEvent = {
  __typename?: '_0x1__aptos_governance__VoteEvent';
  num_votes: Scalars['U64'];
  proposal_id: Scalars['U64'];
  should_pass: Scalars['Boolean'];
  stake_pool: Scalars['Address'];
  voter: Scalars['Address'];
};

export type _0x1__bls12381__Signature = {
  __typename?: '_0x1__bls12381__Signature';
  bytes: Array<Scalars['U8']>;
};

export type _0x1__coin__DepositEvent = {
  __typename?: '_0x1__coin__DepositEvent';
  amount: Scalars['U64'];
};

export type _0x1__coin__WithdrawEvent = {
  __typename?: '_0x1__coin__WithdrawEvent';
  amount: Scalars['U64'];
};

export type _0x1__copyable_any__Any = {
  __typename?: '_0x1__copyable_any__Any';
  data: Array<Scalars['U8']>;
  type_name: Scalars['String'];
};

export type _0x1__crypto_algebra__Element = {
  __typename?: '_0x1__crypto_algebra__Element';
  handle: Scalars['U64'];
};

export type _0x1__delegation_pool__AddStakeEvent = {
  __typename?: '_0x1__delegation_pool__AddStakeEvent';
  add_stake_fee: Scalars['U64'];
  amount_added: Scalars['U64'];
  delegator_address: Scalars['Address'];
  pool_address: Scalars['Address'];
};

export type _0x1__delegation_pool__BeneficiaryForOperator = {
  __typename?: '_0x1__delegation_pool__BeneficiaryForOperator';
  beneficiary_for_operator: Scalars['Address'];
};

export type _0x1__delegation_pool__CreateProposalEvent = {
  __typename?: '_0x1__delegation_pool__CreateProposalEvent';
  delegation_pool: Scalars['Address'];
  proposal_id: Scalars['U64'];
  voter: Scalars['Address'];
};

export type _0x1__delegation_pool__ReactivateStakeEvent = {
  __typename?: '_0x1__delegation_pool__ReactivateStakeEvent';
  amount_reactivated: Scalars['U64'];
  delegator_address: Scalars['Address'];
  pool_address: Scalars['Address'];
};

export type _0x1__delegation_pool__SetBeneficiaryForOperator = {
  __typename?: '_0x1__delegation_pool__SetBeneficiaryForOperator';
  new_beneficiary: Scalars['Address'];
  old_beneficiary: Scalars['Address'];
  operator: Scalars['Address'];
};

export type _0x1__delegation_pool__UnlockStakeEvent = {
  __typename?: '_0x1__delegation_pool__UnlockStakeEvent';
  amount_unlocked: Scalars['U64'];
  delegator_address: Scalars['Address'];
  pool_address: Scalars['Address'];
};

export type _0x1__delegation_pool__VoteEvent = {
  __typename?: '_0x1__delegation_pool__VoteEvent';
  delegation_pool: Scalars['Address'];
  num_votes: Scalars['U64'];
  proposal_id: Scalars['U64'];
  should_pass: Scalars['Boolean'];
  voter: Scalars['Address'];
};

export type _0x1__delegation_pool__WithdrawStakeEvent = {
  __typename?: '_0x1__delegation_pool__WithdrawStakeEvent';
  amount_withdrawn: Scalars['U64'];
  delegator_address: Scalars['Address'];
  pool_address: Scalars['Address'];
};

export type _0x1__ed25519__Signature = {
  __typename?: '_0x1__ed25519__Signature';
  bytes: Array<Scalars['U8']>;
};

export type _0x1__ed25519__UnvalidatedPublicKey = {
  __typename?: '_0x1__ed25519__UnvalidatedPublicKey';
  bytes: Array<Scalars['U8']>;
};

export type _0x1__ed25519__ValidatedPublicKey = {
  __typename?: '_0x1__ed25519__ValidatedPublicKey';
  bytes: Array<Scalars['U8']>;
};

export type _0x1__fungible_asset__DepositEvent = {
  __typename?: '_0x1__fungible_asset__DepositEvent';
  amount: Scalars['U64'];
};

export type _0x1__fungible_asset__TransferRef = {
  __typename?: '_0x1__fungible_asset__TransferRef';
  metadata: Object;
};

export type _0x1__fungible_asset__WithdrawEvent = {
  __typename?: '_0x1__fungible_asset__WithdrawEvent';
  amount: Scalars['U64'];
};

export type _0x1__guid__ID = {
  __typename?: '_0x1__guid__ID';
  addr: Scalars['Address'];
  creation_num: Scalars['U64'];
};

export type _0x1__multi_ed25519__Signature = {
  __typename?: '_0x1__multi_ed25519__Signature';
  bytes: Array<Scalars['U8']>;
};

export type _0x1__multi_ed25519__UnvalidatedPublicKey = {
  __typename?: '_0x1__multi_ed25519__UnvalidatedPublicKey';
  bytes: Array<Scalars['U8']>;
};

export type _0x1__multi_ed25519__ValidatedPublicKey = {
  __typename?: '_0x1__multi_ed25519__ValidatedPublicKey';
  bytes: Array<Scalars['U8']>;
};

export type _0x1__multisig_account__VoteEvent = {
  __typename?: '_0x1__multisig_account__VoteEvent';
  approved: Scalars['Boolean'];
  owner: Scalars['Address'];
  sequence_number: Scalars['U64'];
};

export type _0x1__object__TransferRef = {
  __typename?: '_0x1__object__TransferRef';
  self: Scalars['Address'];
};

export type _0x1__pool_u64__Pool = {
  __typename?: '_0x1__pool_u64__Pool';
  scaling_factor: Scalars['U64'];
  shareholders: Array<Scalars['Address']>;
  shareholders_limit: Scalars['U64'];
  shares: SimpleMap;
  total_coins: Scalars['U64'];
  total_shares: Scalars['U64'];
};

export type _0x1__pool_u64_unbound__Pool = {
  __typename?: '_0x1__pool_u64_unbound__Pool';
  scaling_factor: Scalars['U64'];
  shares: TableWithLength;
  total_coins: Scalars['U64'];
  total_shares: Scalars['U128'];
};

export type _0x1__simple_map__Element = {
  __typename?: '_0x1__simple_map__Element';
  key: Scalars['Any'];
  value: Scalars['Any'];
};

export type _0x1__stake__AddStakeEvent = {
  __typename?: '_0x1__stake__AddStakeEvent';
  amount_added: Scalars['U64'];
  pool_address: Scalars['Address'];
};

export type _0x1__stake__AptosCoinCapabilities = {
  __typename?: '_0x1__stake__AptosCoinCapabilities';
  mint_cap: MintCapability;
};

export type _0x1__stake__ReactivateStakeEvent = {
  __typename?: '_0x1__stake__ReactivateStakeEvent';
  amount: Scalars['U64'];
  pool_address: Scalars['Address'];
};

export type _0x1__stake__UnlockStakeEvent = {
  __typename?: '_0x1__stake__UnlockStakeEvent';
  amount_unlocked: Scalars['U64'];
  pool_address: Scalars['Address'];
};

export type _0x1__stake__WithdrawStakeEvent = {
  __typename?: '_0x1__stake__WithdrawStakeEvent';
  amount_withdrawn: Scalars['U64'];
  pool_address: Scalars['Address'];
};

export type _0x1__staking_contract__AddStakeEvent = {
  __typename?: '_0x1__staking_contract__AddStakeEvent';
  amount: Scalars['U64'];
  operator: Scalars['Address'];
  pool_address: Scalars['Address'];
};

export type _0x1__staking_contract__BeneficiaryForOperator = {
  __typename?: '_0x1__staking_contract__BeneficiaryForOperator';
  beneficiary_for_operator: Scalars['Address'];
};

export type _0x1__staking_contract__DistributeEvent = {
  __typename?: '_0x1__staking_contract__DistributeEvent';
  amount: Scalars['U64'];
  operator: Scalars['Address'];
  pool_address: Scalars['Address'];
  recipient: Scalars['Address'];
};

export type _0x1__staking_contract__ResetLockupEvent = {
  __typename?: '_0x1__staking_contract__ResetLockupEvent';
  operator: Scalars['Address'];
  pool_address: Scalars['Address'];
};

export type _0x1__staking_contract__SetBeneficiaryForOperator = {
  __typename?: '_0x1__staking_contract__SetBeneficiaryForOperator';
  new_beneficiary: Scalars['Address'];
  old_beneficiary: Scalars['Address'];
  operator: Scalars['Address'];
};

export type _0x1__staking_contract__UnlockStakeEvent = {
  __typename?: '_0x1__staking_contract__UnlockStakeEvent';
  amount: Scalars['U64'];
  commission_paid: Scalars['U64'];
  operator: Scalars['Address'];
  pool_address: Scalars['Address'];
};

export type _0x1__staking_contract__UpdateVoterEvent = {
  __typename?: '_0x1__staking_contract__UpdateVoterEvent';
  new_voter: Scalars['Address'];
  old_voter: Scalars['Address'];
  operator: Scalars['Address'];
  pool_address: Scalars['Address'];
};

export type _0x1__string__String = {
  __typename?: '_0x1__string__String';
  bytes: Array<Scalars['U8']>;
};

export type _0x1__transaction_fee__AptosCoinCapabilities = {
  __typename?: '_0x1__transaction_fee__AptosCoinCapabilities';
  burn_cap: BurnCapability;
};

export type _0x1__vesting__DistributeEvent = {
  __typename?: '_0x1__vesting__DistributeEvent';
  admin: Scalars['Address'];
  amount: Scalars['U64'];
  vesting_contract_address: Scalars['Address'];
};

export type _0x1__vesting__ResetLockupEvent = {
  __typename?: '_0x1__vesting__ResetLockupEvent';
  admin: Scalars['Address'];
  new_lockup_expiration_secs: Scalars['U64'];
  staking_pool_address: Scalars['Address'];
  vesting_contract_address: Scalars['Address'];
};

export type _0x1__vesting__UpdateVoterEvent = {
  __typename?: '_0x1__vesting__UpdateVoterEvent';
  admin: Scalars['Address'];
  new_voter: Scalars['Address'];
  old_voter: Scalars['Address'];
  staking_pool_address: Scalars['Address'];
  vesting_contract_address: Scalars['Address'];
};

export type _0x1__voting__CreateProposalEvent = {
  __typename?: '_0x1__voting__CreateProposalEvent';
  early_resolution_vote_threshold: Option;
  execution_hash: Array<Scalars['U8']>;
  expiration_secs: Scalars['U64'];
  metadata: SimpleMap;
  min_vote_threshold: Scalars['U128'];
  proposal_id: Scalars['U64'];
};

export type _0x1__voting__VoteEvent = {
  __typename?: '_0x1__voting__VoteEvent';
  num_votes: Scalars['U64'];
  proposal_id: Scalars['U64'];
};
