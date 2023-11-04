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
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Address: { input: string; output: string };
  Any: { input: any; output: any };
  U8: { input: number; output: number };
  U16: { input: number; output: number };
  U32: { input: number; output: number };
  U64: { input: string; output: string };
  U128: { input: string; output: string };
  U256: { input: string; output: string };
};

export type ACL = {
  __typename?: "ACL";
  list: Array<Scalars["Address"]["output"]>;
};

export type AUID = {
  __typename?: "AUID";
  unique_address: Scalars["Address"]["output"];
};

export type Account = {
  __typename?: "Account";
  authentication_key: Array<Scalars["U8"]["output"]>;
  coin_register_events: EventHandle;
  guid_creation_num: Scalars["U64"]["output"];
  key_rotation_events: EventHandle;
  rotation_capability_offer: CapabilityOffer;
  sequence_number: Scalars["U64"]["output"];
  signer_capability_offer: CapabilityOffer;
};

export type AccountMap = {
  __typename?: "AccountMap";
  account_address: Scalars["Address"]["output"];
  balance: Scalars["U64"]["output"];
};

export type AddDistributionEvent = {
  __typename?: "AddDistributionEvent";
  amount: Scalars["U64"]["output"];
  operator: Scalars["Address"]["output"];
  pool_address: Scalars["Address"]["output"];
};

export type AddOwnersEvent = {
  __typename?: "AddOwnersEvent";
  owners_added: Array<Scalars["Address"]["output"]>;
};

export type AdminStore = {
  __typename?: "AdminStore";
  create_events: EventHandle;
  nonce: Scalars["U64"]["output"];
  vesting_contracts: Array<Scalars["Address"]["output"]>;
};

export type AdminWithdrawEvent = {
  __typename?: "AdminWithdrawEvent";
  admin: Scalars["Address"]["output"];
  amount: Scalars["U64"]["output"];
  vesting_contract_address: Scalars["Address"]["output"];
};

export type AggrOrMultiSignature = {
  __typename?: "AggrOrMultiSignature";
  bytes: Array<Scalars["U8"]["output"]>;
};

export type AggrPublicKeysWithPoP = {
  __typename?: "AggrPublicKeysWithPoP";
  bytes: Array<Scalars["U8"]["output"]>;
};

export type AggregatableCoin = {
  __typename?: "AggregatableCoin";
  value: _0x1__aggregator__Aggregator;
};

export type AggregatorFactory = {
  __typename?: "AggregatorFactory";
  phantom_table: Table;
};

export type AggregatorSnapshot = {
  __typename?: "AggregatorSnapshot";
  value: Scalars["Any"]["output"];
};

export type AllowedDep = {
  __typename?: "AllowedDep";
  account: Scalars["Address"]["output"];
  module_name: Scalars["String"]["output"];
};

export type AllowedValidators = {
  __typename?: "AllowedValidators";
  accounts: Array<Scalars["Address"]["output"]>;
};

export type ApprovedExecutionHashes = {
  __typename?: "ApprovedExecutionHashes";
  hashes: SimpleMap;
};

export type AptosCoin = {
  __typename?: "AptosCoin";
  dummy_field: Scalars["Boolean"]["output"];
};

export type AptosCoinMintCapability = {
  __typename?: "AptosCoinMintCapability";
  mint_cap: MintCapability;
};

export type BigVector = {
  __typename?: "BigVector";
  bucket_size: Scalars["U64"]["output"];
  buckets: TableWithLength;
  end_index: Scalars["U64"]["output"];
};

export type BitVector = {
  __typename?: "BitVector";
  bit_field: Array<Scalars["Boolean"]["output"]>;
  length: Scalars["U64"]["output"];
};

export type BlockResource = {
  __typename?: "BlockResource";
  epoch_interval: Scalars["U64"]["output"];
  height: Scalars["U64"]["output"];
  new_block_events: EventHandle;
  update_epoch_interval_events: EventHandle;
};

export type Board = {
  __typename?: "Board";
  board: Array<Array<Option>>;
};

export type Box = {
  __typename?: "Box";
  val: Scalars["Any"]["output"];
};

export type BurnCapability = {
  __typename?: "BurnCapability";
  dummy_field: Scalars["Boolean"]["output"];
};

export type BurnRef = {
  __typename?: "BurnRef";
  metadata: Object;
};

export type Cap = {
  __typename?: "Cap";
  root: Scalars["Address"]["output"];
};

export type CapDelegateState = {
  __typename?: "CapDelegateState";
  root: Scalars["Address"]["output"];
};

export type CapState = {
  __typename?: "CapState";
  delegates: Array<Scalars["Address"]["output"]>;
};

export type Capabilities = {
  __typename?: "Capabilities";
  burn_cap: BurnCapability;
  freeze_cap: FreezeCapability;
  mint_cap: MintCapability;
};

export type CapabilityOffer = {
  __typename?: "CapabilityOffer";
  for: Option;
};

export type ChainId = {
  __typename?: "ChainId";
  id: Scalars["U8"]["output"];
};

export type Ciphertext = {
  __typename?: "Ciphertext";
  left: RistrettoPoint;
  right: RistrettoPoint;
};

export type Coin = {
  __typename?: "Coin";
  value: Scalars["U64"]["output"];
};

export type CoinInfo = {
  __typename?: "CoinInfo";
  decimals: Scalars["U8"]["output"];
  name: Scalars["String"]["output"];
  supply: Option;
  symbol: Scalars["String"]["output"];
};

export type CoinRegisterEvent = {
  __typename?: "CoinRegisterEvent";
  type_info: TypeInfo;
};

export type CoinStore = {
  __typename?: "CoinStore";
  coin: Coin;
  deposit_events: EventHandle;
  frozen: Scalars["Boolean"]["output"];
  withdraw_events: EventHandle;
};

export type CollectedFeesPerBlock = {
  __typename?: "CollectedFeesPerBlock";
  amount: AggregatableCoin;
  burn_percentage: Scalars["U8"]["output"];
  proposer: Option;
};

export type Commitment = {
  __typename?: "Commitment";
  point: RistrettoPoint;
};

export type CompressedCiphertext = {
  __typename?: "CompressedCiphertext";
  left: CompressedRistretto;
  right: CompressedRistretto;
};

export type CompressedPubkey = {
  __typename?: "CompressedPubkey";
  point: CompressedRistretto;
};

export type CompressedRistretto = {
  __typename?: "CompressedRistretto";
  data: Array<Scalars["U8"]["output"]>;
};

export type ConcurrentSupply = {
  __typename?: "ConcurrentSupply";
  current: _0x1__aggregator_v2__Aggregator;
};

export type Configuration = {
  __typename?: "Configuration";
  epoch: Scalars["U64"]["output"];
  events: EventHandle;
  last_reconfiguration_time: Scalars["U64"]["output"];
};

export type Cons = {
  __typename?: "Cons";
  car: Scalars["Any"]["output"];
  cdr: Scalars["Any"]["output"];
};

export type ConsensusConfig = {
  __typename?: "ConsensusConfig";
  config: Array<Scalars["U8"]["output"]>;
};

export type ConstructorRef = {
  __typename?: "ConstructorRef";
  can_delete: Scalars["Boolean"]["output"];
  self: Scalars["Address"]["output"];
};

export type Container = {
  __typename?: "Container";
  store: SimpleMap;
};

export type CreateStakingContractEvent = {
  __typename?: "CreateStakingContractEvent";
  commission_percentage: Scalars["U64"]["output"];
  operator: Scalars["Address"]["output"];
  pool_address: Scalars["Address"]["output"];
  principal: Scalars["U64"]["output"];
  voter: Scalars["Address"]["output"];
};

export type CreateTransactionEvent = {
  __typename?: "CreateTransactionEvent";
  creator: Scalars["Address"]["output"];
  sequence_number: Scalars["U64"]["output"];
  transaction: MultisigTransaction;
};

export type CreateVestingContractEvent = {
  __typename?: "CreateVestingContractEvent";
  commission_percentage: Scalars["U64"]["output"];
  grant_amount: Scalars["U64"]["output"];
  operator: Scalars["Address"]["output"];
  staking_pool_address: Scalars["Address"]["output"];
  vesting_contract_address: Scalars["Address"]["output"];
  voter: Scalars["Address"]["output"];
  withdrawal_address: Scalars["Address"]["output"];
};

export type CurrentTimeMicroseconds = {
  __typename?: "CurrentTimeMicroseconds";
  microseconds: Scalars["U64"]["output"];
};

export type DelegateVotingPowerEvent = {
  __typename?: "DelegateVotingPowerEvent";
  delegator: Scalars["Address"]["output"];
  pool_address: Scalars["Address"]["output"];
  voter: Scalars["Address"]["output"];
};

export type DelegatedMintCapability = {
  __typename?: "DelegatedMintCapability";
  to: Scalars["Address"]["output"];
};

export type DelegatedVotes = {
  __typename?: "DelegatedVotes";
  active_shares: Scalars["U128"]["output"];
  active_shares_next_lockup: Scalars["U128"]["output"];
  last_locked_until_secs: Scalars["U64"]["output"];
  pending_inactive_shares: Scalars["U128"]["output"];
};

export type DelegationPool = {
  __typename?: "DelegationPool";
  active_shares: _0x1__pool_u64_unbound__Pool;
  add_stake_events: EventHandle;
  distribute_commission_events: EventHandle;
  inactive_shares: Table;
  observed_lockup_cycle: ObservedLockupCycle;
  operator_commission_percentage: Scalars["U64"]["output"];
  pending_withdrawals: Table;
  reactivate_stake_events: EventHandle;
  stake_pool_signer_cap: SignerCapability;
  total_coins_inactive: Scalars["U64"]["output"];
  unlock_stake_events: EventHandle;
  withdraw_stake_events: EventHandle;
};

export type DelegationPoolOwnership = {
  __typename?: "DelegationPoolOwnership";
  pool_address: Scalars["Address"]["output"];
};

export type Delegations = {
  __typename?: "Delegations";
  inner: Array<DelegatedMintCapability>;
};

export type DeleteRef = {
  __typename?: "DeleteRef";
  self: Scalars["Address"]["output"];
};

export type DeriveRef = {
  __typename?: "DeriveRef";
  self: Scalars["Address"]["output"];
};

export type DeriveRefPod = {
  __typename?: "DeriveRefPod";
  metadata_derive_ref: DeriveRef;
};

export type DirectCoinTransferConfigUpdatedEvent = {
  __typename?: "DirectCoinTransferConfigUpdatedEvent";
  new_allow_direct_transfers: Scalars["Boolean"]["output"];
};

export type DirectTransferConfig = {
  __typename?: "DirectTransferConfig";
  allow_arbitrary_coin_transfers: Scalars["Boolean"]["output"];
  update_coin_transfer_events: EventHandle;
};

export type DisableReconfiguration = {
  __typename?: "DisableReconfiguration";
  dummy_field: Scalars["Boolean"]["output"];
};

export type DistributeCommission = {
  __typename?: "DistributeCommission";
  beneficiary: Scalars["Address"]["output"];
  commission_active: Scalars["U64"]["output"];
  commission_pending_inactive: Scalars["U64"]["output"];
  operator: Scalars["Address"]["output"];
  pool_address: Scalars["Address"]["output"];
};

export type DistributeCommissionEvent = {
  __typename?: "DistributeCommissionEvent";
  commission_active: Scalars["U64"]["output"];
  commission_pending_inactive: Scalars["U64"]["output"];
  operator: Scalars["Address"]["output"];
  pool_address: Scalars["Address"]["output"];
};

export type DistributeRewardsEvent = {
  __typename?: "DistributeRewardsEvent";
  pool_address: Scalars["Address"]["output"];
  rewards_amount: Scalars["U64"]["output"];
};

export type ECDSARawPublicKey = {
  __typename?: "ECDSARawPublicKey";
  bytes: Array<Scalars["U8"]["output"]>;
};

export type ECDSASignature = {
  __typename?: "ECDSASignature";
  bytes: Array<Scalars["U8"]["output"]>;
};

export type EmployeeAccountMap = {
  __typename?: "EmployeeAccountMap";
  accounts: Array<Scalars["Address"]["output"]>;
  beneficiary_resetter: Scalars["Address"]["output"];
  validator: ValidatorConfigurationWithCommission;
  vesting_schedule_denominator: Scalars["U64"]["output"];
  vesting_schedule_numerator: Array<Scalars["U64"]["output"]>;
};

export type EnPassantTarget = {
  __typename?: "EnPassantTarget";
  x: Scalars["U8"]["output"];
  y: Scalars["U8"]["output"];
};

export type Entry = {
  __typename?: "Entry";
  hash: Scalars["U64"]["output"];
  key: Scalars["Any"]["output"];
  value: Scalars["Any"]["output"];
};

export type EventHandle = {
  __typename?: "EventHandle";
  counter: Scalars["U64"]["output"];
  guid: GUID;
};

export type ExecuteRejectedTransactionEvent = {
  __typename?: "ExecuteRejectedTransactionEvent";
  executor: Scalars["Address"]["output"];
  num_rejections: Scalars["U64"]["output"];
  sequence_number: Scalars["U64"]["output"];
};

export type ExecutionConfig = {
  __typename?: "ExecutionConfig";
  config: Array<Scalars["U8"]["output"]>;
};

export type ExecutionError = {
  __typename?: "ExecutionError";
  abort_location: Scalars["String"]["output"];
  error_code: Scalars["U64"]["output"];
  error_type: Scalars["String"]["output"];
};

export type ExtendRef = {
  __typename?: "ExtendRef";
  self: Scalars["Address"]["output"];
};

export type FakeCons = {
  __typename?: "FakeCons";
  car: Scalars["Any"]["output"];
  cdr: Scalars["Any"]["output"];
};

export type Features = {
  __typename?: "Features";
  features: Array<Scalars["U8"]["output"]>;
};

export type FeeStatement = {
  __typename?: "FeeStatement";
  execution_gas_units: Scalars["U64"]["output"];
  io_gas_units: Scalars["U64"]["output"];
  storage_fee_octas: Scalars["U64"]["output"];
  storage_fee_refund_octas: Scalars["U64"]["output"];
  total_charge_gas_units: Scalars["U64"]["output"];
};

export type FixedPoint32 = {
  __typename?: "FixedPoint32";
  value: Scalars["U64"]["output"];
};

export type FixedPoint64 = {
  __typename?: "FixedPoint64";
  value: Scalars["U128"]["output"];
};

export type FormatFq12LscLsb = {
  __typename?: "FormatFq12LscLsb";
  dummy_field: Scalars["Boolean"]["output"];
};

export type FormatFrLsb = {
  __typename?: "FormatFrLsb";
  dummy_field: Scalars["Boolean"]["output"];
};

export type FormatFrMsb = {
  __typename?: "FormatFrMsb";
  dummy_field: Scalars["Boolean"]["output"];
};

export type FormatG1Compr = {
  __typename?: "FormatG1Compr";
  dummy_field: Scalars["Boolean"]["output"];
};

export type FormatG1Uncompr = {
  __typename?: "FormatG1Uncompr";
  dummy_field: Scalars["Boolean"]["output"];
};

export type FormatG2Compr = {
  __typename?: "FormatG2Compr";
  dummy_field: Scalars["Boolean"]["output"];
};

export type FormatG2Uncompr = {
  __typename?: "FormatG2Uncompr";
  dummy_field: Scalars["Boolean"]["output"];
};

export type FormatGt = {
  __typename?: "FormatGt";
  dummy_field: Scalars["Boolean"]["output"];
};

export type Fq12 = {
  __typename?: "Fq12";
  dummy_field: Scalars["Boolean"]["output"];
};

export type Fr = {
  __typename?: "Fr";
  dummy_field: Scalars["Boolean"]["output"];
};

export type FreezeCapability = {
  __typename?: "FreezeCapability";
  dummy_field: Scalars["Boolean"]["output"];
};

export type FrozenEvent = {
  __typename?: "FrozenEvent";
  frozen: Scalars["Boolean"]["output"];
};

export type FungibleAsset = {
  __typename?: "FungibleAsset";
  amount: Scalars["U64"]["output"];
  metadata: Object;
};

export type FungibleAssetEvents = {
  __typename?: "FungibleAssetEvents";
  deposit_events: EventHandle;
  frozen_events: EventHandle;
  withdraw_events: EventHandle;
};

export type FungibleStore = {
  __typename?: "FungibleStore";
  balance: Scalars["U64"]["output"];
  frozen: Scalars["Boolean"]["output"];
  metadata: Object;
};

export type G1 = {
  __typename?: "G1";
  dummy_field: Scalars["Boolean"]["output"];
};

export type G2 = {
  __typename?: "G2";
  dummy_field: Scalars["Boolean"]["output"];
};

export type GUID = {
  __typename?: "GUID";
  id: _0x1__guid__ID;
};

export type Game = {
  __typename?: "Game";
  black_piece_status: PieceStatus;
  board: Board;
  draw_offered_by: Option;
  en_passant_target: Option;
  game_status: Scalars["U8"]["output"];
  is_white_turn: Scalars["Boolean"]["output"];
  player1: Scalars["Address"]["output"];
  player2: Scalars["Address"]["output"];
  player_resigned: Scalars["Boolean"]["output"];
  white_piece_status: PieceStatus;
};

export type GameCreatedEvent = {
  __typename?: "GameCreatedEvent";
  creator_address: Scalars["Address"]["output"];
  object_address: Scalars["Address"]["output"];
  opponent_address: Scalars["Address"]["output"];
};

export type GasCurve = {
  __typename?: "GasCurve";
  max_gas: Scalars["U64"]["output"];
  min_gas: Scalars["U64"]["output"];
  points: Array<Point>;
};

export type GasEntry = {
  __typename?: "GasEntry";
  key: Scalars["String"]["output"];
  val: Scalars["U64"]["output"];
};

export type GasParameter = {
  __typename?: "GasParameter";
  usage: Usage;
};

export type GasSchedule = {
  __typename?: "GasSchedule";
  entries: Array<GasEntry>;
};

export type GasScheduleV2 = {
  __typename?: "GasScheduleV2";
  entries: Array<GasEntry>;
  feature_version: Scalars["U64"]["output"];
};

export type GenesisEndMarker = {
  __typename?: "GenesisEndMarker";
  dummy_field: Scalars["Boolean"]["output"];
};

export type GovernanceConfig = {
  __typename?: "GovernanceConfig";
  min_voting_threshold: Scalars["U128"]["output"];
  required_proposer_stake: Scalars["U64"]["output"];
  voting_duration_secs: Scalars["U64"]["output"];
};

export type GovernanceEvents = {
  __typename?: "GovernanceEvents";
  create_proposal_events: EventHandle;
  update_config_events: EventHandle;
  vote_events: EventHandle;
};

export type GovernanceProposal = {
  __typename?: "GovernanceProposal";
  dummy_field: Scalars["Boolean"]["output"];
};

export type GovernanceRecords = {
  __typename?: "GovernanceRecords";
  create_proposal_events: EventHandle;
  delegate_voting_power_events: EventHandle;
  delegated_votes: SmartTable;
  vote_delegation: SmartTable;
  vote_events: EventHandle;
  votes: SmartTable;
  votes_per_proposal: SmartTable;
};

export type GovernanceResponsbility = {
  __typename?: "GovernanceResponsbility";
  signer_caps: SimpleMap;
};

export type Gt = {
  __typename?: "Gt";
  dummy_field: Scalars["Boolean"]["output"];
};

export type HashG1XmdSha256SswuRo = {
  __typename?: "HashG1XmdSha256SswuRo";
  dummy_field: Scalars["Boolean"]["output"];
};

export type HashG2XmdSha256SswuRo = {
  __typename?: "HashG2XmdSha256SswuRo";
  dummy_field: Scalars["Boolean"]["output"];
};

export type IncreaseLockupEvent = {
  __typename?: "IncreaseLockupEvent";
  new_locked_until_secs: Scalars["U64"]["output"];
  old_locked_until_secs: Scalars["U64"]["output"];
  pool_address: Scalars["Address"]["output"];
};

export type IndividualValidatorPerformance = {
  __typename?: "IndividualValidatorPerformance";
  failed_proposals: Scalars["U64"]["output"];
  successful_proposals: Scalars["U64"]["output"];
};

export type Integer = {
  __typename?: "Integer";
  limit: Scalars["U128"]["output"];
  value: Scalars["U128"]["output"];
};

export type JoinValidatorSetEvent = {
  __typename?: "JoinValidatorSetEvent";
  pool_address: Scalars["Address"]["output"];
};

export type KeyRotationEvent = {
  __typename?: "KeyRotationEvent";
  new_authentication_key: Array<Scalars["U8"]["output"]>;
  old_authentication_key: Array<Scalars["U8"]["output"]>;
};

export type LeaveValidatorSetEvent = {
  __typename?: "LeaveValidatorSetEvent";
  pool_address: Scalars["Address"]["output"];
};

export type LinearCap = {
  __typename?: "LinearCap";
  root: Scalars["Address"]["output"];
};

export type LinearTransferRef = {
  __typename?: "LinearTransferRef";
  owner: Scalars["Address"]["output"];
  self: Scalars["Address"]["output"];
};

export type Metadata = {
  __typename?: "Metadata";
  decimals: Scalars["U8"]["output"];
  icon_uri: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  project_uri: Scalars["String"]["output"];
  symbol: Scalars["String"]["output"];
};

export type MetadataUpdatedEvent = {
  __typename?: "MetadataUpdatedEvent";
  new_metadata: SimpleMap;
  old_metadata: SimpleMap;
};

export type MintCapStore = {
  __typename?: "MintCapStore";
  mint_cap: MintCapability;
};

export type MintCapability = {
  __typename?: "MintCapability";
  dummy_field: Scalars["Boolean"]["output"];
};

export type MintRef = {
  __typename?: "MintRef";
  metadata: Object;
};

export type ModuleMetadata = {
  __typename?: "ModuleMetadata";
  extension: Option;
  name: Scalars["String"]["output"];
  source: Array<Scalars["U8"]["output"]>;
  source_map: Array<Scalars["U8"]["output"]>;
};

export type MultisigAccount = {
  __typename?: "MultisigAccount";
  add_owners_events: EventHandle;
  create_transaction_events: EventHandle;
  execute_rejected_transaction_events: EventHandle;
  execute_transaction_events: EventHandle;
  last_executed_sequence_number: Scalars["U64"]["output"];
  metadata: SimpleMap;
  metadata_updated_events: EventHandle;
  next_sequence_number: Scalars["U64"]["output"];
  num_signatures_required: Scalars["U64"]["output"];
  owners: Array<Scalars["Address"]["output"]>;
  remove_owners_events: EventHandle;
  signer_cap: Option;
  transaction_execution_failed_events: EventHandle;
  transactions: Table;
  update_signature_required_events: EventHandle;
  vote_events: EventHandle;
};

export type MultisigAccountCreationMessage = {
  __typename?: "MultisigAccountCreationMessage";
  account_address: Scalars["Address"]["output"];
  chain_id: Scalars["U8"]["output"];
  num_signatures_required: Scalars["U64"]["output"];
  owners: Array<Scalars["Address"]["output"]>;
  sequence_number: Scalars["U64"]["output"];
};

export type MultisigAccountCreationWithAuthKeyRevocationMessage = {
  __typename?: "MultisigAccountCreationWithAuthKeyRevocationMessage";
  account_address: Scalars["Address"]["output"];
  chain_id: Scalars["U8"]["output"];
  num_signatures_required: Scalars["U64"]["output"];
  owners: Array<Scalars["Address"]["output"]>;
  sequence_number: Scalars["U64"]["output"];
};

export type MultisigTransaction = {
  __typename?: "MultisigTransaction";
  creation_time_secs: Scalars["U64"]["output"];
  creator: Scalars["Address"]["output"];
  payload: Option;
  payload_hash: Option;
  votes: SimpleMap;
};

export type NIL = {
  __typename?: "NIL";
  dummy_field: Scalars["Boolean"]["output"];
};

export type NewBlockEvent = {
  __typename?: "NewBlockEvent";
  epoch: Scalars["U64"]["output"];
  failed_proposer_indices: Array<Scalars["U64"]["output"]>;
  hash: Scalars["Address"]["output"];
  height: Scalars["U64"]["output"];
  previous_block_votes_bitvec: Array<Scalars["U8"]["output"]>;
  proposer: Scalars["Address"]["output"];
  round: Scalars["U64"]["output"];
  time_microseconds: Scalars["U64"]["output"];
};

export type NewEpochEvent = {
  __typename?: "NewEpochEvent";
  epoch: Scalars["U64"]["output"];
};

export type Object = {
  __typename?: "Object";
  inner: Scalars["Address"]["output"];
};

export type ObjectCore = {
  __typename?: "ObjectCore";
  allow_ungated_transfer: Scalars["Boolean"]["output"];
  guid_creation_num: Scalars["U64"]["output"];
  owner: Scalars["Address"]["output"];
  transfer_events: EventHandle;
};

export type ObjectGroup = {
  __typename?: "ObjectGroup";
  dummy_field: Scalars["Boolean"]["output"];
};

export type ObservedLockupCycle = {
  __typename?: "ObservedLockupCycle";
  index: Scalars["U64"]["output"];
};

export type Option = {
  __typename?: "Option";
  vec: Array<Scalars["Any"]["output"]>;
};

export type OptionalAggregator = {
  __typename?: "OptionalAggregator";
  aggregator: Option;
  integer: Option;
};

export type OriginatingAddress = {
  __typename?: "OriginatingAddress";
  address_map: Table;
};

export type OwnerCapability = {
  __typename?: "OwnerCapability";
  pool_address: Scalars["Address"]["output"];
};

export type PackageDep = {
  __typename?: "PackageDep";
  account: Scalars["Address"]["output"];
  package_name: Scalars["String"]["output"];
};

export type PackageMetadata = {
  __typename?: "PackageMetadata";
  deps: Array<PackageDep>;
  extension: Option;
  manifest: Array<Scalars["U8"]["output"]>;
  modules: Array<ModuleMetadata>;
  name: Scalars["String"]["output"];
  source_digest: Scalars["String"]["output"];
  upgrade_number: Scalars["U64"]["output"];
  upgrade_policy: UpgradePolicy;
};

export type PackageRegistry = {
  __typename?: "PackageRegistry";
  packages: Array<PackageMetadata>;
};

export type Piece = {
  __typename?: "Piece";
  color: Scalars["U8"]["output"];
  piece_type: Scalars["U8"]["output"];
};

export type PieceStatus = {
  __typename?: "PieceStatus";
  king_has_moved: Scalars["Boolean"]["output"];
  king_side_rook_has_moved: Scalars["Boolean"]["output"];
  queen_side_rook_has_moved: Scalars["Boolean"]["output"];
};

export type Point = {
  __typename?: "Point";
  x: Scalars["U64"]["output"];
  y: Scalars["U64"]["output"];
};

export type ProofOfPossession = {
  __typename?: "ProofOfPossession";
  bytes: Array<Scalars["U8"]["output"]>;
};

export type Proposal = {
  __typename?: "Proposal";
  creation_time_secs: Scalars["U64"]["output"];
  early_resolution_vote_threshold: Option;
  execution_content: Option;
  execution_hash: Array<Scalars["U8"]["output"]>;
  expiration_secs: Scalars["U64"]["output"];
  is_resolved: Scalars["Boolean"]["output"];
  metadata: SimpleMap;
  min_vote_threshold: Scalars["U128"]["output"];
  no_votes: Scalars["U128"]["output"];
  proposer: Scalars["Address"]["output"];
  resolution_time_secs: Scalars["U64"]["output"];
  yes_votes: Scalars["U128"]["output"];
};

export type PublicKey = {
  __typename?: "PublicKey";
  bytes: Array<Scalars["U8"]["output"]>;
};

export type PublicKeyWithPoP = {
  __typename?: "PublicKeyWithPoP";
  bytes: Array<Scalars["U8"]["output"]>;
};

export type RangeProof = {
  __typename?: "RangeProof";
  bytes: Array<Scalars["U8"]["output"]>;
};

export type RecordKey = {
  __typename?: "RecordKey";
  proposal_id: Scalars["U64"]["output"];
  stake_pool: Scalars["Address"]["output"];
};

export type RegisterForumEvent = {
  __typename?: "RegisterForumEvent";
  hosting_account: Scalars["Address"]["output"];
  proposal_type_info: TypeInfo;
};

export type RegisterValidatorCandidateEvent = {
  __typename?: "RegisterValidatorCandidateEvent";
  pool_address: Scalars["Address"]["output"];
};

export type RemoveOwnersEvent = {
  __typename?: "RemoveOwnersEvent";
  owners_removed: Array<Scalars["Address"]["output"]>;
};

export type RequestCommissionEvent = {
  __typename?: "RequestCommissionEvent";
  accumulated_rewards: Scalars["U64"]["output"];
  commission_amount: Scalars["U64"]["output"];
  operator: Scalars["Address"]["output"];
  pool_address: Scalars["Address"]["output"];
};

export type ResolveProposal = {
  __typename?: "ResolveProposal";
  no_votes: Scalars["U128"]["output"];
  proposal_id: Scalars["U64"]["output"];
  resolved_early: Scalars["Boolean"]["output"];
  yes_votes: Scalars["U128"]["output"];
};

export type Result = {
  __typename?: "Result";
  inner: Scalars["U8"]["output"];
};

export type RistrettoPoint = {
  __typename?: "RistrettoPoint";
  handle: Scalars["U64"]["output"];
};

export type RotateConsensusKeyEvent = {
  __typename?: "RotateConsensusKeyEvent";
  new_consensus_pubkey: Array<Scalars["U8"]["output"]>;
  old_consensus_pubkey: Array<Scalars["U8"]["output"]>;
  pool_address: Scalars["Address"]["output"];
};

export type RotationCapability = {
  __typename?: "RotationCapability";
  account: Scalars["Address"]["output"];
};

export type RotationCapabilityOfferProofChallenge = {
  __typename?: "RotationCapabilityOfferProofChallenge";
  recipient_address: Scalars["Address"]["output"];
  sequence_number: Scalars["U64"]["output"];
};

export type RotationCapabilityOfferProofChallengeV2 = {
  __typename?: "RotationCapabilityOfferProofChallengeV2";
  chain_id: Scalars["U8"]["output"];
  recipient_address: Scalars["Address"]["output"];
  sequence_number: Scalars["U64"]["output"];
  source_address: Scalars["Address"]["output"];
};

export type RotationProofChallenge = {
  __typename?: "RotationProofChallenge";
  current_auth_key: Scalars["Address"]["output"];
  new_public_key: Array<Scalars["U8"]["output"]>;
  originator: Scalars["Address"]["output"];
  sequence_number: Scalars["U64"]["output"];
};

export type Scalar = {
  __typename?: "Scalar";
  data: Array<Scalars["U8"]["output"]>;
};

export type SetBeneficiaryEvent = {
  __typename?: "SetBeneficiaryEvent";
  admin: Scalars["Address"]["output"];
  new_beneficiary: Scalars["Address"]["output"];
  old_beneficiary: Scalars["Address"]["output"];
  shareholder: Scalars["Address"]["output"];
  vesting_contract_address: Scalars["Address"]["output"];
};

export type SetOperatorEvent = {
  __typename?: "SetOperatorEvent";
  new_operator: Scalars["Address"]["output"];
  old_operator: Scalars["Address"]["output"];
  pool_address: Scalars["Address"]["output"];
};

export type SetVersionCapability = {
  __typename?: "SetVersionCapability";
  dummy_field: Scalars["Boolean"]["output"];
};

export type SignedMessage = {
  __typename?: "SignedMessage";
  inner: Scalars["Any"]["output"];
  type_info: TypeInfo;
};

export type SignerCapability = {
  __typename?: "SignerCapability";
  account: Scalars["Address"]["output"];
};

export type SignerCapabilityOfferProofChallenge = {
  __typename?: "SignerCapabilityOfferProofChallenge";
  recipient_address: Scalars["Address"]["output"];
  sequence_number: Scalars["U64"]["output"];
};

export type SignerCapabilityOfferProofChallengeV2 = {
  __typename?: "SignerCapabilityOfferProofChallengeV2";
  recipient_address: Scalars["Address"]["output"];
  sequence_number: Scalars["U64"]["output"];
  source_address: Scalars["Address"]["output"];
};

export type SimpleMap = {
  __typename?: "SimpleMap";
  data: Array<_0x1__simple_map__Element>;
};

export type SmartTable = {
  __typename?: "SmartTable";
  buckets: TableWithLength;
  level: Scalars["U8"]["output"];
  num_buckets: Scalars["U64"]["output"];
  size: Scalars["U64"]["output"];
  split_load_threshold: Scalars["U8"]["output"];
  target_bucket_size: Scalars["U64"]["output"];
};

export type SmartVector = {
  __typename?: "SmartVector";
  big_vec: Option;
  bucket_size: Option;
  inline_capacity: Option;
  inline_vec: Array<Scalars["Any"]["output"]>;
};

export type StakePool = {
  __typename?: "StakePool";
  active: Coin;
  add_stake_events: EventHandle;
  delegated_voter: Scalars["Address"]["output"];
  distribute_rewards_events: EventHandle;
  inactive: Coin;
  increase_lockup_events: EventHandle;
  initialize_validator_events: EventHandle;
  join_validator_set_events: EventHandle;
  leave_validator_set_events: EventHandle;
  locked_until_secs: Scalars["U64"]["output"];
  operator_address: Scalars["Address"]["output"];
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
  __typename?: "StakingConfig";
  allow_validator_set_change: Scalars["Boolean"]["output"];
  maximum_stake: Scalars["U64"]["output"];
  minimum_stake: Scalars["U64"]["output"];
  recurring_lockup_duration_secs: Scalars["U64"]["output"];
  rewards_rate: Scalars["U64"]["output"];
  rewards_rate_denominator: Scalars["U64"]["output"];
  voting_power_increase_limit: Scalars["U64"]["output"];
};

export type StakingContract = {
  __typename?: "StakingContract";
  commission_percentage: Scalars["U64"]["output"];
  distribution_pool: _0x1__pool_u64__Pool;
  owner_cap: OwnerCapability;
  pool_address: Scalars["Address"]["output"];
  principal: Scalars["U64"]["output"];
  signer_cap: SignerCapability;
};

export type StakingGroupContainer = {
  __typename?: "StakingGroupContainer";
  dummy_field: Scalars["Boolean"]["output"];
};

export type StakingGroupUpdateCommissionEvent = {
  __typename?: "StakingGroupUpdateCommissionEvent";
  update_commission_events: EventHandle;
};

export type StakingInfo = {
  __typename?: "StakingInfo";
  commission_percentage: Scalars["U64"]["output"];
  operator: Scalars["Address"]["output"];
  pool_address: Scalars["Address"]["output"];
  voter: Scalars["Address"]["output"];
};

export type StakingRewardsConfig = {
  __typename?: "StakingRewardsConfig";
  last_rewards_rate_period_start_in_secs: Scalars["U64"]["output"];
  min_rewards_rate: FixedPoint64;
  rewards_rate: FixedPoint64;
  rewards_rate_decrease_rate: FixedPoint64;
  rewards_rate_period_in_secs: Scalars["U64"]["output"];
};

export type StateStorageUsage = {
  __typename?: "StateStorageUsage";
  epoch: Scalars["U64"]["output"];
  usage: Usage;
};

export type StorageGas = {
  __typename?: "StorageGas";
  per_byte_create: Scalars["U64"]["output"];
  per_byte_read: Scalars["U64"]["output"];
  per_byte_write: Scalars["U64"]["output"];
  per_item_create: Scalars["U64"]["output"];
  per_item_read: Scalars["U64"]["output"];
  per_item_write: Scalars["U64"]["output"];
};

export type StorageGasConfig = {
  __typename?: "StorageGasConfig";
  byte_config: UsageGasConfig;
  item_config: UsageGasConfig;
};

export type Store = {
  __typename?: "Store";
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
  __typename?: "Supply";
  current: Scalars["U128"]["output"];
  maximum: Option;
};

export type SupplyConfig = {
  __typename?: "SupplyConfig";
  allow_upgrades: Scalars["Boolean"]["output"];
};

export type SwitchOperatorEvent = {
  __typename?: "SwitchOperatorEvent";
  new_operator: Scalars["Address"]["output"];
  old_operator: Scalars["Address"]["output"];
  pool_address: Scalars["Address"]["output"];
};

export type Table = {
  __typename?: "Table";
  handle: Scalars["Address"]["output"];
};

export type TableWithLength = {
  __typename?: "TableWithLength";
  inner: Table;
  length: Scalars["U64"]["output"];
};

export type TerminateEvent = {
  __typename?: "TerminateEvent";
  admin: Scalars["Address"]["output"];
  vesting_contract_address: Scalars["Address"]["output"];
};

export type TombStone = {
  __typename?: "TombStone";
  original_owner: Scalars["Address"]["output"];
};

export type TransactionExecutionFailedEvent = {
  __typename?: "TransactionExecutionFailedEvent";
  execution_error: ExecutionError;
  executor: Scalars["Address"]["output"];
  num_approvals: Scalars["U64"]["output"];
  sequence_number: Scalars["U64"]["output"];
  transaction_payload: Array<Scalars["U8"]["output"]>;
};

export type TransactionExecutionSucceededEvent = {
  __typename?: "TransactionExecutionSucceededEvent";
  executor: Scalars["Address"]["output"];
  num_approvals: Scalars["U64"]["output"];
  sequence_number: Scalars["U64"]["output"];
  transaction_payload: Array<Scalars["U8"]["output"]>;
};

export type TransactionValidation = {
  __typename?: "TransactionValidation";
  module_addr: Scalars["Address"]["output"];
  module_name: Array<Scalars["U8"]["output"]>;
  module_prologue_name: Array<Scalars["U8"]["output"]>;
  multi_agent_prologue_name: Array<Scalars["U8"]["output"]>;
  script_prologue_name: Array<Scalars["U8"]["output"]>;
  user_epilogue_name: Array<Scalars["U8"]["output"]>;
};

export type TransferEvent = {
  __typename?: "TransferEvent";
  from: Scalars["Address"]["output"];
  object: Scalars["Address"]["output"];
  to: Scalars["Address"]["output"];
};

export type TypeInfo = {
  __typename?: "TypeInfo";
  account_address: Scalars["Address"]["output"];
  module_name: Array<Scalars["U8"]["output"]>;
  struct_name: Array<Scalars["U8"]["output"]>;
};

export type UnlockRewardsEvent = {
  __typename?: "UnlockRewardsEvent";
  admin: Scalars["Address"]["output"];
  amount: Scalars["U64"]["output"];
  staking_pool_address: Scalars["Address"]["output"];
  vesting_contract_address: Scalars["Address"]["output"];
};

export type UpdateCommissionEvent = {
  __typename?: "UpdateCommissionEvent";
  new_commission_percentage: Scalars["U64"]["output"];
  old_commission_percentage: Scalars["U64"]["output"];
  operator: Scalars["Address"]["output"];
  staker: Scalars["Address"]["output"];
};

export type UpdateConfigEvent = {
  __typename?: "UpdateConfigEvent";
  min_voting_threshold: Scalars["U128"]["output"];
  required_proposer_stake: Scalars["U64"]["output"];
  voting_duration_secs: Scalars["U64"]["output"];
};

export type UpdateEpochIntervalEvent = {
  __typename?: "UpdateEpochIntervalEvent";
  new_epoch_interval: Scalars["U64"]["output"];
  old_epoch_interval: Scalars["U64"]["output"];
};

export type UpdateNetworkAndFullnodeAddressesEvent = {
  __typename?: "UpdateNetworkAndFullnodeAddressesEvent";
  new_fullnode_addresses: Array<Scalars["U8"]["output"]>;
  new_network_addresses: Array<Scalars["U8"]["output"]>;
  old_fullnode_addresses: Array<Scalars["U8"]["output"]>;
  old_network_addresses: Array<Scalars["U8"]["output"]>;
  pool_address: Scalars["Address"]["output"];
};

export type UpdateOperatorEvent = {
  __typename?: "UpdateOperatorEvent";
  admin: Scalars["Address"]["output"];
  commission_percentage: Scalars["U64"]["output"];
  new_operator: Scalars["Address"]["output"];
  old_operator: Scalars["Address"]["output"];
  staking_pool_address: Scalars["Address"]["output"];
  vesting_contract_address: Scalars["Address"]["output"];
};

export type UpdateSignaturesRequiredEvent = {
  __typename?: "UpdateSignaturesRequiredEvent";
  new_num_signatures_required: Scalars["U64"]["output"];
  old_num_signatures_required: Scalars["U64"]["output"];
};

export type UpgradePolicy = {
  __typename?: "UpgradePolicy";
  policy: Scalars["U8"]["output"];
};

export type Usage = {
  __typename?: "Usage";
  bytes: Scalars["U64"]["output"];
  items: Scalars["U64"]["output"];
};

export type UsageGasConfig = {
  __typename?: "UsageGasConfig";
  create_curve: GasCurve;
  read_curve: GasCurve;
  target_usage: Scalars["U64"]["output"];
  write_curve: GasCurve;
};

export type ValidatorConfig = {
  __typename?: "ValidatorConfig";
  consensus_pubkey: Array<Scalars["U8"]["output"]>;
  fullnode_addresses: Array<Scalars["U8"]["output"]>;
  network_addresses: Array<Scalars["U8"]["output"]>;
  validator_index: Scalars["U64"]["output"];
};

export type ValidatorConfiguration = {
  __typename?: "ValidatorConfiguration";
  consensus_pubkey: Array<Scalars["U8"]["output"]>;
  full_node_network_addresses: Array<Scalars["U8"]["output"]>;
  network_addresses: Array<Scalars["U8"]["output"]>;
  operator_address: Scalars["Address"]["output"];
  owner_address: Scalars["Address"]["output"];
  proof_of_possession: Array<Scalars["U8"]["output"]>;
  stake_amount: Scalars["U64"]["output"];
  voter_address: Scalars["Address"]["output"];
};

export type ValidatorConfigurationWithCommission = {
  __typename?: "ValidatorConfigurationWithCommission";
  commission_percentage: Scalars["U64"]["output"];
  join_during_genesis: Scalars["Boolean"]["output"];
  validator_config: ValidatorConfiguration;
};

export type ValidatorFees = {
  __typename?: "ValidatorFees";
  fees_table: Table;
};

export type ValidatorInfo = {
  __typename?: "ValidatorInfo";
  addr: Scalars["Address"]["output"];
  config: ValidatorConfig;
  voting_power: Scalars["U64"]["output"];
};

export type ValidatorPerformance = {
  __typename?: "ValidatorPerformance";
  validators: Array<IndividualValidatorPerformance>;
};

export type ValidatorSet = {
  __typename?: "ValidatorSet";
  active_validators: Array<ValidatorInfo>;
  consensus_scheme: Scalars["U8"]["output"];
  pending_active: Array<ValidatorInfo>;
  pending_inactive: Array<ValidatorInfo>;
  total_joining_power: Scalars["U128"]["output"];
  total_voting_power: Scalars["U128"]["output"];
};

export type Version = {
  __typename?: "Version";
  major: Scalars["U64"]["output"];
};

export type VestEvent = {
  __typename?: "VestEvent";
  admin: Scalars["Address"]["output"];
  amount: Scalars["U64"]["output"];
  period_vested: Scalars["U64"]["output"];
  staking_pool_address: Scalars["Address"]["output"];
  vesting_contract_address: Scalars["Address"]["output"];
};

export type VestingAccountManagement = {
  __typename?: "VestingAccountManagement";
  roles: SimpleMap;
};

export type VestingContract = {
  __typename?: "VestingContract";
  admin: Scalars["Address"]["output"];
  admin_withdraw_events: EventHandle;
  beneficiaries: SimpleMap;
  distribute_events: EventHandle;
  grant_pool: _0x1__pool_u64__Pool;
  remaining_grant: Scalars["U64"]["output"];
  reset_lockup_events: EventHandle;
  set_beneficiary_events: EventHandle;
  signer_cap: SignerCapability;
  staking: StakingInfo;
  state: Scalars["U64"]["output"];
  terminate_events: EventHandle;
  unlock_rewards_events: EventHandle;
  update_operator_events: EventHandle;
  update_voter_events: EventHandle;
  vest_events: EventHandle;
  vesting_schedule: VestingSchedule;
  withdrawal_address: Scalars["Address"]["output"];
};

export type VestingSchedule = {
  __typename?: "VestingSchedule";
  last_vested_period: Scalars["U64"]["output"];
  period_duration: Scalars["U64"]["output"];
  schedule: Array<FixedPoint32>;
  start_timestamp_secs: Scalars["U64"]["output"];
};

export type VoteDelegation = {
  __typename?: "VoteDelegation";
  last_locked_until_secs: Scalars["U64"]["output"];
  pending_voter: Scalars["Address"]["output"];
  voter: Scalars["Address"]["output"];
};

export type VotingEvents = {
  __typename?: "VotingEvents";
  create_proposal_events: EventHandle;
  register_forum_events: EventHandle;
  resolve_proposal_events: EventHandle;
  vote_events: EventHandle;
};

export type VotingForum = {
  __typename?: "VotingForum";
  events: VotingEvents;
  next_proposal_id: Scalars["U64"]["output"];
  proposals: Table;
};

export type VotingRecordKey = {
  __typename?: "VotingRecordKey";
  proposal_id: Scalars["U64"]["output"];
  voter: Scalars["Address"]["output"];
};

export type VotingRecords = {
  __typename?: "VotingRecords";
  votes: Table;
};

export type VotingRecordsV2 = {
  __typename?: "VotingRecordsV2";
  votes: SmartTable;
};

export type _0x1__aggregator__Aggregator = {
  __typename?: "_0x1__aggregator__Aggregator";
  handle: Scalars["Address"]["output"];
  key: Scalars["Address"]["output"];
  limit: Scalars["U128"]["output"];
};

export type _0x1__aggregator_v2__Aggregator = {
  __typename?: "_0x1__aggregator_v2__Aggregator";
  max_value: Scalars["Any"]["output"];
  value: Scalars["Any"]["output"];
};

export type _0x1__any__Any = {
  __typename?: "_0x1__any__Any";
  data: Array<Scalars["U8"]["output"]>;
  type_name: Scalars["String"]["output"];
};

export type _0x1__aptos_governance__CreateProposalEvent = {
  __typename?: "_0x1__aptos_governance__CreateProposalEvent";
  execution_hash: Array<Scalars["U8"]["output"]>;
  proposal_id: Scalars["U64"]["output"];
  proposal_metadata: SimpleMap;
  proposer: Scalars["Address"]["output"];
  stake_pool: Scalars["Address"]["output"];
};

export type _0x1__aptos_governance__VoteEvent = {
  __typename?: "_0x1__aptos_governance__VoteEvent";
  num_votes: Scalars["U64"]["output"];
  proposal_id: Scalars["U64"]["output"];
  should_pass: Scalars["Boolean"]["output"];
  stake_pool: Scalars["Address"]["output"];
  voter: Scalars["Address"]["output"];
};

export type _0x1__bls12381__Signature = {
  __typename?: "_0x1__bls12381__Signature";
  bytes: Array<Scalars["U8"]["output"]>;
};

export type _0x1__coin__DepositEvent = {
  __typename?: "_0x1__coin__DepositEvent";
  amount: Scalars["U64"]["output"];
};

export type _0x1__coin__WithdrawEvent = {
  __typename?: "_0x1__coin__WithdrawEvent";
  amount: Scalars["U64"]["output"];
};

export type _0x1__copyable_any__Any = {
  __typename?: "_0x1__copyable_any__Any";
  data: Array<Scalars["U8"]["output"]>;
  type_name: Scalars["String"]["output"];
};

export type _0x1__crypto_algebra__Element = {
  __typename?: "_0x1__crypto_algebra__Element";
  handle: Scalars["U64"]["output"];
};

export type _0x1__delegation_pool__AddStakeEvent = {
  __typename?: "_0x1__delegation_pool__AddStakeEvent";
  add_stake_fee: Scalars["U64"]["output"];
  amount_added: Scalars["U64"]["output"];
  delegator_address: Scalars["Address"]["output"];
  pool_address: Scalars["Address"]["output"];
};

export type _0x1__delegation_pool__BeneficiaryForOperator = {
  __typename?: "_0x1__delegation_pool__BeneficiaryForOperator";
  beneficiary_for_operator: Scalars["Address"]["output"];
};

export type _0x1__delegation_pool__CreateProposalEvent = {
  __typename?: "_0x1__delegation_pool__CreateProposalEvent";
  delegation_pool: Scalars["Address"]["output"];
  proposal_id: Scalars["U64"]["output"];
  voter: Scalars["Address"]["output"];
};

export type _0x1__delegation_pool__ReactivateStakeEvent = {
  __typename?: "_0x1__delegation_pool__ReactivateStakeEvent";
  amount_reactivated: Scalars["U64"]["output"];
  delegator_address: Scalars["Address"]["output"];
  pool_address: Scalars["Address"]["output"];
};

export type _0x1__delegation_pool__SetBeneficiaryForOperator = {
  __typename?: "_0x1__delegation_pool__SetBeneficiaryForOperator";
  new_beneficiary: Scalars["Address"]["output"];
  old_beneficiary: Scalars["Address"]["output"];
  operator: Scalars["Address"]["output"];
};

export type _0x1__delegation_pool__UnlockStakeEvent = {
  __typename?: "_0x1__delegation_pool__UnlockStakeEvent";
  amount_unlocked: Scalars["U64"]["output"];
  delegator_address: Scalars["Address"]["output"];
  pool_address: Scalars["Address"]["output"];
};

export type _0x1__delegation_pool__VoteEvent = {
  __typename?: "_0x1__delegation_pool__VoteEvent";
  delegation_pool: Scalars["Address"]["output"];
  num_votes: Scalars["U64"]["output"];
  proposal_id: Scalars["U64"]["output"];
  should_pass: Scalars["Boolean"]["output"];
  voter: Scalars["Address"]["output"];
};

export type _0x1__delegation_pool__WithdrawStakeEvent = {
  __typename?: "_0x1__delegation_pool__WithdrawStakeEvent";
  amount_withdrawn: Scalars["U64"]["output"];
  delegator_address: Scalars["Address"]["output"];
  pool_address: Scalars["Address"]["output"];
};

export type _0x1__ed25519__Signature = {
  __typename?: "_0x1__ed25519__Signature";
  bytes: Array<Scalars["U8"]["output"]>;
};

export type _0x1__ed25519__UnvalidatedPublicKey = {
  __typename?: "_0x1__ed25519__UnvalidatedPublicKey";
  bytes: Array<Scalars["U8"]["output"]>;
};

export type _0x1__ed25519__ValidatedPublicKey = {
  __typename?: "_0x1__ed25519__ValidatedPublicKey";
  bytes: Array<Scalars["U8"]["output"]>;
};

export type _0x1__fungible_asset__DepositEvent = {
  __typename?: "_0x1__fungible_asset__DepositEvent";
  amount: Scalars["U64"]["output"];
};

export type _0x1__fungible_asset__TransferRef = {
  __typename?: "_0x1__fungible_asset__TransferRef";
  metadata: Object;
};

export type _0x1__fungible_asset__WithdrawEvent = {
  __typename?: "_0x1__fungible_asset__WithdrawEvent";
  amount: Scalars["U64"]["output"];
};

export type _0x1__guid__ID = {
  __typename?: "_0x1__guid__ID";
  addr: Scalars["Address"]["output"];
  creation_num: Scalars["U64"]["output"];
};

export type _0x1__multi_ed25519__Signature = {
  __typename?: "_0x1__multi_ed25519__Signature";
  bytes: Array<Scalars["U8"]["output"]>;
};

export type _0x1__multi_ed25519__UnvalidatedPublicKey = {
  __typename?: "_0x1__multi_ed25519__UnvalidatedPublicKey";
  bytes: Array<Scalars["U8"]["output"]>;
};

export type _0x1__multi_ed25519__ValidatedPublicKey = {
  __typename?: "_0x1__multi_ed25519__ValidatedPublicKey";
  bytes: Array<Scalars["U8"]["output"]>;
};

export type _0x1__multisig_account__VoteEvent = {
  __typename?: "_0x1__multisig_account__VoteEvent";
  approved: Scalars["Boolean"]["output"];
  owner: Scalars["Address"]["output"];
  sequence_number: Scalars["U64"]["output"];
};

export type _0x1__object__TransferRef = {
  __typename?: "_0x1__object__TransferRef";
  self: Scalars["Address"]["output"];
};

export type _0x1__pool_u64__Pool = {
  __typename?: "_0x1__pool_u64__Pool";
  scaling_factor: Scalars["U64"]["output"];
  shareholders: Array<Scalars["Address"]["output"]>;
  shareholders_limit: Scalars["U64"]["output"];
  shares: SimpleMap;
  total_coins: Scalars["U64"]["output"];
  total_shares: Scalars["U64"]["output"];
};

export type _0x1__pool_u64_unbound__Pool = {
  __typename?: "_0x1__pool_u64_unbound__Pool";
  scaling_factor: Scalars["U64"]["output"];
  shares: TableWithLength;
  total_coins: Scalars["U64"]["output"];
  total_shares: Scalars["U128"]["output"];
};

export type _0x1__simple_map__Element = {
  __typename?: "_0x1__simple_map__Element";
  key: Scalars["Any"]["output"];
  value: Scalars["Any"]["output"];
};

export type _0x1__stake__AddStakeEvent = {
  __typename?: "_0x1__stake__AddStakeEvent";
  amount_added: Scalars["U64"]["output"];
  pool_address: Scalars["Address"]["output"];
};

export type _0x1__stake__AptosCoinCapabilities = {
  __typename?: "_0x1__stake__AptosCoinCapabilities";
  mint_cap: MintCapability;
};

export type _0x1__stake__ReactivateStakeEvent = {
  __typename?: "_0x1__stake__ReactivateStakeEvent";
  amount: Scalars["U64"]["output"];
  pool_address: Scalars["Address"]["output"];
};

export type _0x1__stake__UnlockStakeEvent = {
  __typename?: "_0x1__stake__UnlockStakeEvent";
  amount_unlocked: Scalars["U64"]["output"];
  pool_address: Scalars["Address"]["output"];
};

export type _0x1__stake__WithdrawStakeEvent = {
  __typename?: "_0x1__stake__WithdrawStakeEvent";
  amount_withdrawn: Scalars["U64"]["output"];
  pool_address: Scalars["Address"]["output"];
};

export type _0x1__staking_contract__AddStakeEvent = {
  __typename?: "_0x1__staking_contract__AddStakeEvent";
  amount: Scalars["U64"]["output"];
  operator: Scalars["Address"]["output"];
  pool_address: Scalars["Address"]["output"];
};

export type _0x1__staking_contract__BeneficiaryForOperator = {
  __typename?: "_0x1__staking_contract__BeneficiaryForOperator";
  beneficiary_for_operator: Scalars["Address"]["output"];
};

export type _0x1__staking_contract__DistributeEvent = {
  __typename?: "_0x1__staking_contract__DistributeEvent";
  amount: Scalars["U64"]["output"];
  operator: Scalars["Address"]["output"];
  pool_address: Scalars["Address"]["output"];
  recipient: Scalars["Address"]["output"];
};

export type _0x1__staking_contract__ResetLockupEvent = {
  __typename?: "_0x1__staking_contract__ResetLockupEvent";
  operator: Scalars["Address"]["output"];
  pool_address: Scalars["Address"]["output"];
};

export type _0x1__staking_contract__SetBeneficiaryForOperator = {
  __typename?: "_0x1__staking_contract__SetBeneficiaryForOperator";
  new_beneficiary: Scalars["Address"]["output"];
  old_beneficiary: Scalars["Address"]["output"];
  operator: Scalars["Address"]["output"];
};

export type _0x1__staking_contract__UnlockStakeEvent = {
  __typename?: "_0x1__staking_contract__UnlockStakeEvent";
  amount: Scalars["U64"]["output"];
  commission_paid: Scalars["U64"]["output"];
  operator: Scalars["Address"]["output"];
  pool_address: Scalars["Address"]["output"];
};

export type _0x1__staking_contract__UpdateVoterEvent = {
  __typename?: "_0x1__staking_contract__UpdateVoterEvent";
  new_voter: Scalars["Address"]["output"];
  old_voter: Scalars["Address"]["output"];
  operator: Scalars["Address"]["output"];
  pool_address: Scalars["Address"]["output"];
};

export type _0x1__string__String = {
  __typename?: "_0x1__string__String";
  bytes: Array<Scalars["U8"]["output"]>;
};

export type _0x1__transaction_fee__AptosCoinCapabilities = {
  __typename?: "_0x1__transaction_fee__AptosCoinCapabilities";
  burn_cap: BurnCapability;
};

export type _0x1__vesting__DistributeEvent = {
  __typename?: "_0x1__vesting__DistributeEvent";
  admin: Scalars["Address"]["output"];
  amount: Scalars["U64"]["output"];
  vesting_contract_address: Scalars["Address"]["output"];
};

export type _0x1__vesting__ResetLockupEvent = {
  __typename?: "_0x1__vesting__ResetLockupEvent";
  admin: Scalars["Address"]["output"];
  new_lockup_expiration_secs: Scalars["U64"]["output"];
  staking_pool_address: Scalars["Address"]["output"];
  vesting_contract_address: Scalars["Address"]["output"];
};

export type _0x1__vesting__UpdateVoterEvent = {
  __typename?: "_0x1__vesting__UpdateVoterEvent";
  admin: Scalars["Address"]["output"];
  new_voter: Scalars["Address"]["output"];
  old_voter: Scalars["Address"]["output"];
  staking_pool_address: Scalars["Address"]["output"];
  vesting_contract_address: Scalars["Address"]["output"];
};

export type _0x1__voting__CreateProposalEvent = {
  __typename?: "_0x1__voting__CreateProposalEvent";
  early_resolution_vote_threshold: Option;
  execution_hash: Array<Scalars["U8"]["output"]>;
  expiration_secs: Scalars["U64"]["output"];
  metadata: SimpleMap;
  min_vote_threshold: Scalars["U128"]["output"];
  proposal_id: Scalars["U64"]["output"];
};

export type _0x1__voting__VoteEvent = {
  __typename?: "_0x1__voting__VoteEvent";
  num_votes: Scalars["U64"]["output"];
  proposal_id: Scalars["U64"]["output"];
};
