import { gql } from '@apollo/client';
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
  /** A calendar date (without time) */
  Date: any;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
};

export enum AddCardError {
  AddressVerificationFailed = 'ADDRESS_VERIFICATION_FAILED',
  CardExpired = 'CARD_EXPIRED',
  GenericDecline = 'GENERIC_DECLINE',
  InvalidAddress = 'INVALID_ADDRESS',
  InvalidCardData = 'INVALID_CARD_DATA',
  InvalidCardType = 'INVALID_CARD_TYPE',
  InvalidCreditCardNumber = 'INVALID_CREDIT_CARD_NUMBER',
  InvalidExpiration = 'INVALID_EXPIRATION',
  InvalidPostalCode = 'INVALID_POSTAL_CODE'
}

export type AddCardInput = {
  maverick?: InputMaybe<AddCardMaverickInput>;
  square?: InputMaybe<AddCardSquareInput>;
  userId: Scalars['ID'];
};

export type AddCardMaverickInput = {
  encryptedPayment?: InputMaybe<Scalars['String']>;
  info: MaverickCardInfoInput;
  paymentToken?: InputMaybe<Scalars['String']>;
};

export type AddCardPayload = {
  __typename?: 'AddCardPayload';
  card?: Maybe<PaymentInstrument>;
  errors: Array<AddCardProblem>;
};

export type AddCardProblem = ProblemInterface & {
  __typename?: 'AddCardProblem';
  code: AddCardError;
  message: Scalars['String'];
};

export type AddCardSquareInput = {
  nonce: Scalars['String'];
  verificationToken: Scalars['String'];
};

export type AddFcmTokenInput = {
  platform: ClientPlatform;
  token: Scalars['String'];
};

export type AddFcmTokenPayload = {
  __typename?: 'AddFcmTokenPayload';
  user: ClientUser;
};

export enum AddGameError {
  Placeholder = 'PLACEHOLDER'
}

export type AddGameInput = {
  game: GameInput;
};

export type AddGamePayload = {
  __typename?: 'AddGamePayload';
  errors: Array<AddGameProblem>;
  game: Game;
};

export type AddGameProblem = ProblemInterface & {
  __typename?: 'AddGameProblem';
  code: AddGameError;
  message: Scalars['String'];
};

export type AddNoteInput = {
  note: Scalars['String'];
  userId: Scalars['String'];
};

export enum AddOneUpTvItemError {
  InvalidUrl = 'INVALID_URL',
  NoActiveStreamForTwitchChannel = 'NO_ACTIVE_STREAM_FOR_TWITCH_CHANNEL',
  TournamentAlreadyHasStream = 'TOURNAMENT_ALREADY_HAS_STREAM'
}

export type AddOneUpTvItemProblem = ProblemInterface & {
  __typename?: 'AddOneUpTVItemProblem';
  code: AddOneUpTvItemError;
  message: Scalars['String'];
};

export type AddOneUpTvTournamentItemInput = {
  tournamentId: Scalars['ID'];
  twitchChannel: Scalars['String'];
};

export type AddOneUpTvTournamentItemPayload = {
  __typename?: 'AddOneUpTVTournamentItemPayload';
  errors: Array<AddOneUpTvItemProblem>;
  oneUpTvTournamentItem?: Maybe<OneUpTvTournamentItem>;
};

export enum AddOneUpTvVideoItemError {
  InvalidUrl = 'INVALID_URL'
}

export type AddOneUpTvVideoItemInput = {
  caption?: InputMaybe<Scalars['String']>;
  thumbnailUrl?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

export type AddOneUpTvVideoItemPayload = {
  __typename?: 'AddOneUpTVVideoItemPayload';
  errors: Array<AddOneUpTvVideoItemProblem>;
  video: OneUpTvVideoItem;
};

export type AddOneUpTvVideoItemProblem = ProblemInterface & {
  __typename?: 'AddOneUpTVVideoItemProblem';
  code: AddOneUpTvVideoItemError;
  message: Scalars['String'];
};

export type AddRecentSearchInput = {
  category: ExploreSearchCategory;
  id: Scalars['ID'];
};

export type AddRecentSearchPayload = {
  __typename?: 'AddRecentSearchPayload';
  errors: Array<AddRecentSearchProblem>;
  user: User;
};

export type AddRecentSearchProblem = ProblemInterface & {
  __typename?: 'AddRecentSearchProblem';
  code: AddRecentSearchProblemErrorCode;
  message: Scalars['String'];
};

export enum AddRecentSearchProblemErrorCode {
  ObjectNotFound = 'OBJECT_NOT_FOUND'
}

export enum AddSystemError {
  Placeholder = 'PLACEHOLDER'
}

export type AddSystemInput = {
  system: SystemInput;
};

export type AddSystemPayload = {
  __typename?: 'AddSystemPayload';
  errors: Array<AddSystemProblem>;
  system: System;
};

export type AddSystemProblem = ProblemInterface & {
  __typename?: 'AddSystemProblem';
  code: AddSystemError;
  message: Scalars['String'];
};

export type AddTierInput = {
  tier: TierInput;
};

export type AddTierPayload = {
  __typename?: 'AddTierPayload';
  tier: Tier;
};

export enum AddTransactionsError {
  DuplicateTransaction = 'DUPLICATE_TRANSACTION',
  InsufficientBalance = 'INSUFFICIENT_BALANCE'
}

export type AddTransactionsInput = {
  transactions: Array<TransactionInput>;
  userId: Scalars['ID'];
};

export type AddTransactionsPayload = {
  __typename?: 'AddTransactionsPayload';
  errors: Array<AddTransactionsProblem>;
  transactions?: Maybe<Array<Transaction>>;
};

export type AddTransactionsProblem = ProblemInterface & {
  __typename?: 'AddTransactionsProblem';
  code: AddTransactionsError;
  message: Scalars['String'];
};

export type AddUserPromoTicketInput = {
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  promoTicketId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type AddUserPromoTicketPayload = {
  __typename?: 'AddUserPromoTicketPayload';
  userPromoTicket: UserPromoTicket;
};

export enum AddUserSystemGame {
  UserDoesNotHaveSystem = 'USER_DOES_NOT_HAVE_SYSTEM'
}

export type AddUserSystemGameInput = {
  gameId: Scalars['String'];
  systemId: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type AddUserSystemGamePayload = {
  __typename?: 'AddUserSystemGamePayload';
  errors: Array<AddUserSystemGameProblem>;
  user?: Maybe<ClientUser>;
};

export type AddUserSystemGameProblem = ProblemInterface & {
  __typename?: 'AddUserSystemGameProblem';
  code: AddUserSystemGame;
  message: Scalars['String'];
};

export type AddWithdrawPayload = {
  __typename?: 'AddWithdrawPayload';
  withdrawal: Withdrawal;
};

export type AddWithdrawalInput = {
  amount: Scalars['String'];
  complete: Scalars['Boolean'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency: Scalars['String'];
  declined: Scalars['Boolean'];
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  fee: Scalars['String'];
  method: WithdrawalMethod;
  source: WithdrawalSource;
  speed: WithdrawalSpeed;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type AdminClientUser = AdminUser | ClientUser;

export type AdminUser = User & {
  __typename?: 'AdminUser';
  createdAt: Scalars['DateTime'];
  face: Face;
  id: Scalars['ID'];
  profile: UserProfile;
  referralShareLink: ShareLink;
  role: Role;
  shareLink: ShareLink;
  subRoles?: Maybe<Array<SubRole>>;
  updatedAt: Scalars['DateTime'];
};

export type AnyChatMessage = ChatTextMessage | MatchOfferUserJoinedChatMessage;

export type AnyChatRoom = DirectMessageChatRoom | GameChatRoom | MatchChatRoom | MatchOfferChatRoom | OneUpTvItemChatRoom | TournamentChatRoom;

export type AnyChatRoomEdge = {
  __typename?: 'AnyChatRoomEdge';
  cursor: Scalars['String'];
  node: AnyChatRoom;
};

export type AnyUser = AdminUser | BusinessUser | ClientUser | SystemUser;

export type AnyUserEdge = {
  __typename?: 'AnyUserEdge';
  cursor: Scalars['String'];
  node: AnyUser;
};

export enum ArenaMode {
  Cash = 'CASH',
  Free = 'FREE'
}

export enum AssignPassbaseIdentityError {
  InvalidUserIdentityRejectionReason = 'INVALID_USER_IDENTITY_REJECTION_REASON',
  InvalidUserIdentityStatus = 'INVALID_USER_IDENTITY_STATUS'
}

export type AssignPassbaseIdentityInput = {
  id: Scalars['ID'];
};

export type AssignPassbaseIdentityPayload = {
  __typename?: 'AssignPassbaseIdentityPayload';
  errors: Array<AssignPassbaseIdentityProblem>;
  user?: Maybe<ClientUser>;
};

export type AssignPassbaseIdentityProblem = ProblemInterface & {
  __typename?: 'AssignPassbaseIdentityProblem';
  code: AssignPassbaseIdentityError;
  message: Scalars['String'];
};

export type BusinessAccessRequest = {
  __typename?: 'BusinessAccessRequest';
  createdAt: Scalars['DateTime'];
  reason?: Maybe<ReviewBusinessAccessRequestDeclineReason>;
  schedulingLink?: Maybe<Scalars['String']>;
  status: BusinessAccessRequestStatus;
  updatedAt: Scalars['DateTime'];
};

export enum BusinessAccessRequestError {
  BusinessAccessRequestAlreadySubmitted = 'BUSINESS_ACCESS_REQUEST_ALREADY_SUBMITTED'
}

export type BusinessAccessRequestPayload = {
  __typename?: 'BusinessAccessRequestPayload';
  errors: Array<BusinessAccessRequestProblem>;
  request?: Maybe<BusinessAccessRequest>;
};

export type BusinessAccessRequestProblem = ProblemInterface & {
  __typename?: 'BusinessAccessRequestProblem';
  code: BusinessAccessRequestError;
  message: Scalars['String'];
};

export enum BusinessAccessRequestStatus {
  Approved = 'APPROVED',
  Declined = 'DECLINED',
  Pending = 'PENDING'
}

export type BusinessClientUser = BusinessUser | ClientUser;

export type BusinessClientUserEdge = {
  __typename?: 'BusinessClientUserEdge';
  cursor: Scalars['String'];
  node: BusinessClientUser;
};

export type BusinessConfiguration = {
  __typename?: 'BusinessConfiguration';
  subscriptionPlans: Array<SubscriptionPlan>;
};

export type BusinessMetrics = {
  __typename?: 'BusinessMetrics';
  followerCount: Scalars['Int'];
  id: Scalars['ID'];
  tournamentCount: Scalars['Int'];
  upcomingTournamentCount: Scalars['Int'];
};

export type BusinessSubscription = {
  __typename?: 'BusinessSubscription';
  entitlementId: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  usage: BusinessSubscriptionUsage;
};

export type BusinessSubscriptionUsage = {
  __typename?: 'BusinessSubscriptionUsage';
  numberOfTournaments: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BusinessTournamentFocus = {
  __typename?: 'BusinessTournamentFocus';
  game: Game;
  system?: Maybe<System>;
};

export type BusinessTournamentFocusFilterInput = {
  game?: InputMaybe<Scalars['ID']>;
  system?: InputMaybe<Scalars['ID']>;
};

export type BusinessTournamentFocusInput = {
  gameId: Scalars['ID'];
  systemId?: InputMaybe<Scalars['ID']>;
};

export type BusinessUser = User & {
  __typename?: 'BusinessUser';
  balance: Scalars['Int'];
  bio?: Maybe<Scalars['String']>;
  chatRooms: PaginatedChatRoomsResponse;
  coverImage?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  creatorProgramApplication?: Maybe<CreatorProgramApplication>;
  face: Face;
  finances: Finances;
  followers: PaginatedClientUserResponse;
  id: Scalars['ID'];
  isVerified: Scalars['Boolean'];
  metrics: BusinessMetrics;
  notes: PaginatedUserNoteResponse;
  notificationSettings: NotificationSettings;
  owner: ClientUser;
  referralShareLink: ShareLink;
  role: Role;
  shareLink: ShareLink;
  streamingAccounts: Array<StreamingAccount>;
  subscription?: Maybe<BusinessSubscription>;
  tournamentFocus?: Maybe<BusinessTournamentFocus>;
  transactions: PaginatedTransactionsResponse;
  updatedAt: Scalars['DateTime'];
  userRelation: UserRelation;
  website?: Maybe<Scalars['String']>;
};


export type BusinessUserChatRoomsArgs = {
  input?: InputMaybe<ChatRoomsInput>;
};


export type BusinessUserFollowersArgs = {
  input: UserFollowersQueryInput;
};


export type BusinessUserNotesArgs = {
  input: UserNotesInput;
};


export type BusinessUserTransactionsArgs = {
  input?: InputMaybe<UserTransactionsQueryInput>;
};


export type BusinessUserUserRelationArgs = {
  from?: InputMaybe<Scalars['String']>;
};

export type BusinessUserFilter = {
  isVerified?: InputMaybe<Scalars['Boolean']>;
  tournamentFocusFilter?: InputMaybe<BusinessTournamentFocusFilterInput>;
};

export type CancelMatchOfferInput = {
  id: Scalars['ID'];
};

export type CancelMatchOfferPayload = {
  __typename?: 'CancelMatchOfferPayload';
  errors: Array<CancelMatchOfferProblem>;
  matchOffer?: Maybe<MatchOffer>;
};

export type CancelMatchOfferProblem = ProblemInterface & {
  __typename?: 'CancelMatchOfferProblem';
  code: CancelMatchofferError;
  message: Scalars['String'];
};

export enum CancelMatchofferError {
  MatchOfferAlreadyCanceled = 'MATCH_OFFER_ALREADY_CANCELED',
  MatchOfferCompleted = 'MATCH_OFFER_COMPLETED'
}

export enum CancelTournamentError {
  TournamentAlreadyFinished = 'TOURNAMENT_ALREADY_FINISHED',
  TournamentAlreadyStarted = 'TOURNAMENT_ALREADY_STARTED'
}

export type CancelTournamentInput = {
  id: Scalars['String'];
};

export type CancelTournamentPayload = {
  __typename?: 'CancelTournamentPayload';
  errors: Array<CancelTournamentProblem>;
  tournament?: Maybe<Tournament>;
};

export type CancelTournamentProblem = ProblemInterface & {
  __typename?: 'CancelTournamentProblem';
  code: CancelTournamentError;
  message: Scalars['String'];
};

export enum CancelWithdrawalError {
  WithdrawalNotPending = 'WITHDRAWAL_NOT_PENDING'
}

export type CancelWithdrawalInput = {
  withdrawalId: Scalars['ID'];
};

export type CancelWithdrawalPayload = {
  __typename?: 'CancelWithdrawalPayload';
  errors: Array<CancelWithdrawalProblem>;
  withdrawal?: Maybe<Withdrawal>;
};

export type CancelWithdrawalProblem = ProblemInterface & {
  __typename?: 'CancelWithdrawalProblem';
  code: CancelWithdrawalError;
  message: Scalars['String'];
};

export type CashMode = {
  __typename?: 'CashMode';
  hasAccess: Scalars['Boolean'];
  invitedBy: ClientUser;
  invites: Scalars['Int'];
  unlockProgress: UnlockProgress;
};

export type ChallengeRecommendationsInput = {
  paging?: InputMaybe<Paging>;
};

export enum ChangePasswordError {
  InvalidCredentials = 'INVALID_CREDENTIALS'
}

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword?: InputMaybe<Scalars['String']>;
  totpCode?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type ChangePasswordPayload = {
  __typename?: 'ChangePasswordPayload';
  errors?: Maybe<Array<ChangePasswordError>>;
};

export type ChatMessage = {
  authorId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
};

export type ChatRoom = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lastMessage?: Maybe<AnyChatMessage>;
  numberOfParticipants: Scalars['Int'];
  participantIds: Array<Scalars['ID']>;
  updatedAt: Scalars['DateTime'];
};

export enum ChatRoomType {
  DirectMessage = 'DIRECT_MESSAGE',
  Match = 'MATCH',
  OneUpTv = 'ONE_UP_TV',
  Tournament = 'TOURNAMENT'
}

export type ChatRoomsFilter = {
  includeBusinessChatRooms?: InputMaybe<Scalars['Boolean']>;
  typeIn?: InputMaybe<Array<ChatRoomType>>;
};

export type ChatRoomsInput = {
  filter?: InputMaybe<ChatRoomsFilter>;
  paging?: InputMaybe<Paging>;
  sort?: InputMaybe<ChatRoomsSort>;
};

export type ChatRoomsSort = {
  direction: SortDirection;
  field: ChatRoomsSortField;
};

export enum ChatRoomsSortField {
  LastMessageCreatedAt = 'LAST_MESSAGE_CREATED_AT'
}

export type ChatTextMessage = ChatMessage & {
  __typename?: 'ChatTextMessage';
  author: AnyUser;
  authorId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type ClientMetrics = {
  __typename?: 'ClientMetrics';
  followerCount: Scalars['Int'];
  followingCount: Scalars['Int'];
  matchCount: Scalars['Int'];
  userId: Scalars['ID'];
};

export enum ClientPlatform {
  AdminDashboard = 'ADMIN_DASHBOARD',
  OneUpOs = 'ONE_UP_OS',
  PlayOneUp = 'PLAY_ONE_UP'
}

export type ClientUser = User & {
  __typename?: 'ClientUser';
  activeMatchFlow?: Maybe<MatchFlow>;
  arenaMode?: Maybe<ArenaMode>;
  balance: Scalars['Int'];
  business?: Maybe<BusinessUser>;
  businessAccessRequest?: Maybe<BusinessAccessRequest>;
  cashMode?: Maybe<CashMode>;
  challengeRecommendations: PaginatedClientUserResponse;
  chatRooms: PaginatedChatRoomsResponse;
  createdAt: Scalars['DateTime'];
  face: Face;
  finances: Finances;
  firstDepositBonusEligible: Scalars['Boolean'];
  followRecommendations: PaginatedBusinessClientUserResponse;
  followers: PaginatedClientUserResponse;
  followings: PaginatedClientUserResponse;
  id: Scalars['ID'];
  identity?: Maybe<UserIdentity>;
  isBusy: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  matchAlerts: PaginatedMatchAlertsResponse;
  metrics: ClientMetrics;
  notes: PaginatedUserNoteResponse;
  notificationSettings: NotificationSettings;
  notifications: PaginatedNotificationsResponse;
  profile: UserProfile;
  promoTickets: PaginatedUserPromoTicketResponse;
  recentSearches: RecentSearchesPaginatedResponse;
  referralShareLink: ShareLink;
  role: Role;
  shareLink: ShareLink;
  status: UserStatus;
  streamingAccounts: Array<StreamingAccount>;
  transactions: PaginatedTransactionsResponse;
  updatedAt: Scalars['DateTime'];
  userRelation: UserRelation;
  userSystems?: Maybe<Array<UserSystem>>;
};


export type ClientUserChallengeRecommendationsArgs = {
  input?: InputMaybe<ChallengeRecommendationsInput>;
};


export type ClientUserChatRoomsArgs = {
  input?: InputMaybe<ChatRoomsInput>;
};


export type ClientUserFollowRecommendationsArgs = {
  input?: InputMaybe<FollowRecommendationsInput>;
};


export type ClientUserFollowersArgs = {
  input: UserFollowersQueryInput;
};


export type ClientUserFollowingsArgs = {
  input: UserFollowingsQueryInput;
};


export type ClientUserMatchAlertsArgs = {
  input: MatchAlertsInput;
};


export type ClientUserNotesArgs = {
  input: UserNotesInput;
};


export type ClientUserNotificationsArgs = {
  input?: InputMaybe<NotificationsQueryInput>;
};


export type ClientUserPromoTicketsArgs = {
  input: UserPromoTicketsQueryInput;
};


export type ClientUserRecentSearchesArgs = {
  input: RecentSearchesInput;
};


export type ClientUserTransactionsArgs = {
  input?: InputMaybe<UserTransactionsQueryInput>;
};


export type ClientUserUserRelationArgs = {
  from?: InputMaybe<Scalars['String']>;
};

export type ClientUserEdge = {
  __typename?: 'ClientUserEdge';
  cursor: Scalars['String'];
  node: ClientUser;
};

export type ClientUserFilter = {
  businessAccessRequestStatus?: InputMaybe<BusinessAccessRequestStatus>;
};

export enum ClientUserSignInError {
  FraudProtection = 'FRAUD_PROTECTION',
  InvalidCredentials = 'INVALID_CREDENTIALS'
}

export type ClientUserSignInInput = {
  password: Scalars['String'];
  phone: Scalars['String'];
  seonSession: Scalars['String'];
};

export type ClientUserSignInPayload = {
  __typename?: 'ClientUserSignInPayload';
  customFirebaseAuthToken?: Maybe<Scalars['String']>;
  errors: Array<ClientUserSignInProblem>;
  user?: Maybe<ClientUser>;
};

export type ClientUserSignInProblem = ProblemInterface & {
  __typename?: 'ClientUserSignInProblem';
  code: ClientUserSignInError;
  message: Scalars['String'];
};

export enum ClientUserSignUpError {
  EmailAlreadyTaken = 'EMAIL_ALREADY_TAKEN',
  EmailInvalid = 'EMAIL_INVALID',
  FraudProtection = 'FRAUD_PROTECTION',
  InvalidPassword = 'INVALID_PASSWORD',
  OneUpIdAlreadyTaken = 'ONE_UP_ID_ALREADY_TAKEN',
  PhoneAlreadyTaken = 'PHONE_ALREADY_TAKEN'
}

export type ClientUserSignUpInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  oneUpId: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  seonSession?: InputMaybe<Scalars['String']>;
  userShareLinkId?: InputMaybe<Scalars['String']>;
  verificationCode?: InputMaybe<Scalars['String']>;
};

export type ClientUserSignUpPayload = {
  __typename?: 'ClientUserSignUpPayload';
  customFirebaseAuthToken?: Maybe<Scalars['String']>;
  errors: Array<ClientUserSignUpProblem>;
  user?: Maybe<ClientUser>;
};

export type ClientUserSignUpProblem = ProblemInterface & {
  __typename?: 'ClientUserSignUpProblem';
  code: ClientUserSignUpError;
  message: Scalars['String'];
};

export type ClientVersionConfiguration = {
  __typename?: 'ClientVersionConfiguration';
  minimumRequiredAndroidVersion: Scalars['String'];
};

export type Configuration = {
  __typename?: 'Configuration';
  blockIllegalStates: Scalars['Boolean'];
  business: BusinessConfiguration;
  clientVersion: ClientVersionConfiguration;
  games: Array<Game>;
  growth: GrowthConfiguration;
  id: Scalars['String'];
  legal: LegalConfiguration;
  match: MatchConfiguration;
  oneUpOSPayments: PaymentConfiguration;
  playOneUpPayments: PaymentConfiguration;
  rules: RulesConfiguration;
  systems: Array<System>;
  tournament: TournamentConfiguration;
};

export enum ConfirmMatchOfferError {
  IllegalJurisdiction = 'ILLEGAL_JURISDICTION',
  InsufficientBalance = 'INSUFFICIENT_BALANCE',
  JoinerBalanceInsufficient = 'JOINER_BALANCE_INSUFFICIENT',
  MatchOfferAlreadyConfirmed = 'MATCH_OFFER_ALREADY_CONFIRMED',
  MissingJoinerConfirmation = 'MISSING_JOINER_CONFIRMATION',
  PendingMatchOfferCondition = 'PENDING_MATCH_OFFER_CONDITION'
}

export type ConfirmMatchOfferInput = {
  id: Scalars['ID'];
};

export type ConfirmMatchOfferPayload = {
  __typename?: 'ConfirmMatchOfferPayload';
  errors: Array<ConfirmMatchOfferProblem>;
  matchOffer?: Maybe<MatchOffer>;
};

export type ConfirmMatchOfferProblem = ProblemInterface & {
  __typename?: 'ConfirmMatchOfferProblem';
  code: ConfirmMatchOfferError;
  message: Scalars['String'];
};

export enum ConnectStreamingAccountError {
  InvalidAccessToken = 'INVALID_ACCESS_TOKEN',
  StreamingAccountAlreadyConnected = 'STREAMING_ACCOUNT_ALREADY_CONNECTED'
}

export type ConnectStreamingAccountInput = {
  accessToken: Scalars['String'];
  refreshToken?: InputMaybe<Scalars['String']>;
  service: StreamingService;
  userId?: InputMaybe<Scalars['String']>;
};

export type ConnectStreamingAccountPayload = {
  __typename?: 'ConnectStreamingAccountPayload';
  errors: Array<ConnectStreamingAccountProblem>;
  userId?: Maybe<Scalars['String']>;
};

export type ConnectStreamingAccountProblem = ProblemInterface & {
  __typename?: 'ConnectStreamingAccountProblem';
  code: ConnectStreamingAccountError;
  message: Scalars['String'];
};

export enum Country {
  Us = 'US'
}

export type CreateBusinessAccessRequestInput = {
  oneUpUniversityApplicant: Scalars['Boolean'];
};

export enum CreateBusinessError {
  BusinessAlreadyCreated = 'BUSINESS_ALREADY_CREATED',
  MissingBusinessAccess = 'MISSING_BUSINESS_ACCESS',
  OneUpIdAlreadyTaken = 'ONE_UP_ID_ALREADY_TAKEN'
}

export type CreateBusinessInput = {
  avatarImage?: InputMaybe<Scalars['String']>;
  oneUpId: Scalars['String'];
};

export type CreateBusinessPayload = {
  __typename?: 'CreateBusinessPayload';
  business?: Maybe<BusinessUser>;
  errors: Array<CreateBusinessProblem>;
};

export type CreateBusinessProblem = ProblemInterface & {
  __typename?: 'CreateBusinessProblem';
  code: CreateBusinessError;
  message: Scalars['String'];
};

export enum CreateCreatorProgramApplicationError {
  AlreadyApplied = 'ALREADY_APPLIED',
  BusinessRequired = 'BUSINESS_REQUIRED'
}

export type CreateCreatorProgramApplicationPayload = {
  __typename?: 'CreateCreatorProgramApplicationPayload';
  application?: Maybe<CreatorProgramApplication>;
  errors: Array<CreateCreatorProgramApplicationProblem>;
};

export type CreateCreatorProgramApplicationProblem = ProblemInterface & {
  __typename?: 'CreateCreatorProgramApplicationProblem';
  code: CreateCreatorProgramApplicationError;
  message: Scalars['String'];
};

export enum CreateDepositError {
  CardExpired = 'CARD_EXPIRED',
  FraudProtection = 'FRAUD_PROTECTION',
  GenericDecline = 'GENERIC_DECLINE',
  IllegalJurisdiction = 'ILLEGAL_JURISDICTION',
  InactivePaymentGateway = 'INACTIVE_PAYMENT_GATEWAY',
  InsufficientFunds = 'INSUFFICIENT_FUNDS',
  InvalidCardType = 'INVALID_CARD_TYPE',
  PaymentLimitExceeded = 'PAYMENT_LIMIT_EXCEEDED',
  TransactionDeclinedByBank = 'TRANSACTION_DECLINED_BY_BANK',
  TransactionLimit = 'TRANSACTION_LIMIT'
}

export type CreateDepositInput = {
  amount: Scalars['Int'];
  cardId: Scalars['ID'];
  gateway: PaymentGateway;
  maverickInput?: InputMaybe<CreateDepositMaverickInput>;
  seonSession?: InputMaybe<Scalars['String']>;
  squareInput?: InputMaybe<CreateDepositSquareInput>;
  userId: Scalars['ID'];
};

export type CreateDepositMaverickInput = {
  depositIntentResult?: InputMaybe<DepositIntentResultInput>;
};

export type CreateDepositPayload = {
  __typename?: 'CreateDepositPayload';
  deposit?: Maybe<Deposit>;
  errors: Array<CreateDepositProblem>;
};

export type CreateDepositProblem = ProblemInterface & {
  __typename?: 'CreateDepositProblem';
  code: CreateDepositError;
  message: Scalars['String'];
};

export type CreateDepositSquareInput = {
  verificationToken: Scalars['String'];
};

export enum CreateDirectMessageChatRoomError {
  ZeroUsersInvited = 'ZERO_USERS_INVITED'
}

export type CreateDirectMessageChatRoomInput = {
  creator?: InputMaybe<Scalars['String']>;
  participants: Array<Scalars['String']>;
};

export type CreateDirectMessageChatRoomPayload = {
  __typename?: 'CreateDirectMessageChatRoomPayload';
  blockingUsers: Array<Scalars['String']>;
  chatRoom?: Maybe<DirectMessageChatRoom>;
  errors: Array<CreateDirectMessageChatRoomProblem>;
};

export type CreateDirectMessageChatRoomProblem = ProblemInterface & {
  __typename?: 'CreateDirectMessageChatRoomProblem';
  code: CreateDirectMessageChatRoomError;
  message: Scalars['String'];
};

export enum CreateMatchOfferConditionsError {
  InvalidPlayerFields = 'INVALID_PLAYER_FIELDS',
  MatchOfferCanceled = 'MATCH_OFFER_CANCELED',
  MatchOfferCompleted = 'MATCH_OFFER_COMPLETED'
}

export type CreateMatchOfferConditionsInput = {
  creatorFields: Array<MatchFieldInput>;
  joinerFields: Array<MatchFieldInput>;
  matchFields: Array<MatchFieldInput>;
  matchOfferId: Scalars['ID'];
};

export type CreateMatchOfferConditionsPayload = {
  __typename?: 'CreateMatchOfferConditionsPayload';
  errors: Array<CreateMatchOfferConditionsProblem>;
  matchOfferConditions?: Maybe<MatchOfferConditions>;
};

export type CreateMatchOfferConditionsProblem = ProblemInterface & {
  __typename?: 'CreateMatchOfferConditionsProblem';
  code: CreateMatchOfferConditionsError;
  message: Scalars['String'];
};

export enum CreateMatchOfferError {
  BlockedByInvite = 'BLOCKED_BY_INVITE',
  CreatorIsBusy = 'CREATOR_IS_BUSY',
  CreatorSystemGameSetupRequired = 'CREATOR_SYSTEM_GAME_SETUP_REQUIRED',
  InactiveGame = 'INACTIVE_GAME',
  InactiveSystem = 'INACTIVE_SYSTEM',
  InvalidMatchFields = 'INVALID_MATCH_FIELDS',
  InvalidPlayerFields = 'INVALID_PLAYER_FIELDS',
  InviteIsBusy = 'INVITE_IS_BUSY',
  InviteSystemGameSetupRequired = 'INVITE_SYSTEM_GAME_SETUP_REQUIRED',
  MissingMatchFields = 'MISSING_MATCH_FIELDS',
  MissingPlayerFields = 'MISSING_PLAYER_FIELDS'
}

export type CreateMatchOfferInput = {
  creatorFields: Array<MatchFieldInput>;
  game: Scalars['ID'];
  invite?: InputMaybe<Scalars['ID']>;
  matchFields: Array<MatchFieldInput>;
  stake: Scalars['Int'];
  system: Scalars['ID'];
};

export type CreateMatchOfferPayload = {
  __typename?: 'CreateMatchOfferPayload';
  errors: Array<CreateMatchOfferProblem>;
  matchOffer?: Maybe<MatchOffer>;
};

export type CreateMatchOfferProblem = ProblemInterface & {
  __typename?: 'CreateMatchOfferProblem';
  code: CreateMatchOfferError;
  message: Scalars['String'];
};

export enum CreateSupportTicketError {
  TicketForTargetAlreadyCreated = 'TICKET_FOR_TARGET_ALREADY_CREATED'
}

export type CreateSupportTicketInput = {
  body: Scalars['String'];
  subject: Scalars['String'];
  target: SupportTicketTarget;
  targetId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type CreateSupportTicketPayload = {
  __typename?: 'CreateSupportTicketPayload';
  errors: Array<CreateSupportTicketProblem>;
  supportTicket?: Maybe<SupportTicket>;
};

export type CreateSupportTicketProblem = ProblemInterface & {
  __typename?: 'CreateSupportTicketProblem';
  code: CreateSupportTicketError;
  message: Scalars['String'];
};

export type CreateTournamentInput = {
  adjustPrizePoolOnAutofill: Scalars['Boolean'];
  autoFillTournamentOnStart: Scalars['Boolean'];
  coverImage: Scalars['String'];
  creator?: InputMaybe<Scalars['ID']>;
  description: Scalars['String'];
  game: Scalars['ID'];
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  prizes: Array<Scalars['Int']>;
  roundMatchFields: RoundsMatchFieldsInput;
  stakes: Scalars['Int'];
  startType: TournamentStartType;
  system: Scalars['ID'];
  timeConfig?: InputMaybe<TournamentConfigInput>;
  title: Scalars['String'];
  totalNumberOfPlayers: Scalars['Int'];
  tournamentDays?: InputMaybe<TournamentDaysInput>;
};

export type CreateTournamentPayload = {
  __typename?: 'CreateTournamentPayload';
  errors: Array<CreateTournamentProblem>;
  tournament?: Maybe<Tournament>;
};

export type CreateTournamentProblem = ProblemInterface & {
  __typename?: 'CreateTournamentProblem';
  code: TournamentCreateError;
  message: Scalars['String'];
};

export enum CreateWithdrawalError {
  ExceedsMaxNumberWithdrawals = 'EXCEEDS_MAX_NUMBER_WITHDRAWALS',
  ExceedsMaxWithdrawalAmount = 'EXCEEDS_MAX_WITHDRAWAL_AMOUNT',
  FraudProtection = 'FRAUD_PROTECTION',
  InstantSpeedDisabled = 'INSTANT_SPEED_DISABLED',
  InsufficientBalance = 'INSUFFICIENT_BALANCE',
  UnderMinWithdrawalAmount = 'UNDER_MIN_WITHDRAWAL_AMOUNT',
  WithdrawalsOnlyBeforeNoon = 'WITHDRAWALS_ONLY_BEFORE_NOON',
  WithdrawalsOnlyOnWorkingDays = 'WITHDRAWALS_ONLY_ON_WORKING_DAYS'
}

export type CreateWithdrawalInput = {
  amount: Scalars['Int'];
  bankwireAddressInput?: InputMaybe<WithdrawalBankwireAddressInput>;
  cashappAddressInput?: InputMaybe<WithdrawalCashappAddressInput>;
  method: WithdrawalMethod;
  paypalAddressInput?: InputMaybe<WithdrawalPaypalAddressInput>;
  seonSession?: InputMaybe<Scalars['String']>;
  speed: WithdrawalSpeed;
  userId: Scalars['ID'];
};

export type CreateWithdrawalPayload = {
  __typename?: 'CreateWithdrawalPayload';
  errors: Array<CreateWithdrawalProblem>;
  withdrawal?: Maybe<Withdrawal>;
};

export type CreateWithdrawalProblem = ProblemInterface & {
  __typename?: 'CreateWithdrawalProblem';
  code: CreateWithdrawalError;
  message: Scalars['String'];
};

export type CreateWithdrawalSupportTicketInput = {
  note: Scalars['String'];
  withdrawalId: Scalars['String'];
};

export type CreateWithdrawalSupportTicketPayload = {
  __typename?: 'CreateWithdrawalSupportTicketPayload';
  withdrawal: Withdrawal;
};

export type CreatorProgramApplication = {
  __typename?: 'CreatorProgramApplication';
  canRetryAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  numberOfApplicationAttempts: Scalars['Int'];
  schedulingLink?: Maybe<Scalars['String']>;
  status: CreatorProgramApplicationStatus;
  updatedAt: Scalars['DateTime'];
};

export enum CreatorProgramApplicationStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type DeleteUserInput = {
  id: Scalars['ID'];
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  user: User;
};

export type Deposit = {
  __typename?: 'Deposit';
  amount: Scalars['Int'];
  card?: Maybe<PaymentInstrument>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  refunded: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  user: BusinessClientUser;
};

export type DepositConfiguration = {
  __typename?: 'DepositConfiguration';
  gateway: PaymentGateway;
  maxAmount: Scalars['Int'];
  minAmount: Scalars['Int'];
};

export type DepositEdge = {
  __typename?: 'DepositEdge';
  cursor: Scalars['String'];
  node: Deposit;
};

export type DepositIntentResultInput = {
  cardHolderAuth?: InputMaybe<Scalars['String']>;
  cavv: Scalars['String'];
  directoryServerId?: InputMaybe<Scalars['String']>;
  eci: Scalars['String'];
  threeDsVersion?: InputMaybe<Scalars['String']>;
  xid: Scalars['String'];
};

export type DepositQueryInput = {
  id: Scalars['ID'];
};

export enum DepositSearchFilterField {
  DepositId = 'DEPOSIT_ID',
  OneUpId = 'ONE_UP_ID',
  UserId = 'USER_ID'
}

export type DepositsFilter = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  includeFailed?: InputMaybe<Scalars['Boolean']>;
  refunded?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<DepositsSearchFilterInput>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type DepositsQueryInput = {
  filter?: InputMaybe<DepositsFilter>;
  paging?: InputMaybe<Paging>;
  sort?: InputMaybe<DepositsSort>;
};

export type DepositsSearchFilterInput = {
  searchFields: Array<DepositSearchFilterField>;
  searchTerm: Scalars['String'];
};

export type DepositsSort = {
  direction: SortDirection;
  field: DepositsSortField;
};

export enum DepositsSortField {
  CreatedAt = 'CREATED_AT'
}

export type DirectMessageChatRoom = ChatRoom & {
  __typename?: 'DirectMessageChatRoom';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lastMessage?: Maybe<AnyChatMessage>;
  numberOfParticipants: Scalars['Int'];
  participantIds: Array<Scalars['ID']>;
  participants: PaginatedAnyUserResponse;
  updatedAt: Scalars['DateTime'];
};


export type DirectMessageChatRoomParticipantsArgs = {
  input?: InputMaybe<ParticipantsInput>;
};

export enum DisconnectStreamingAccountError {
  StreamingAccountNotConnected = 'STREAMING_ACCOUNT_NOT_CONNECTED'
}

export type DisconnectStreamingAccountInput = {
  service: StreamingService;
  userId?: InputMaybe<Scalars['String']>;
};

export type DisconnectStreamingAccountPayload = {
  __typename?: 'DisconnectStreamingAccountPayload';
  errors: Array<DisconnectStreamingAccountProblem>;
  userId?: Maybe<Scalars['String']>;
};

export type DisconnectStreamingAccountProblem = ProblemInterface & {
  __typename?: 'DisconnectStreamingAccountProblem';
  code: DisconnectStreamingAccountError;
  message: Scalars['String'];
  userId: Scalars['String'];
};

export type EnrollUserInput = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  inviteOtp: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  totpSecret?: InputMaybe<Scalars['String']>;
};

export type EnrollUserPayload = {
  __typename?: 'EnrollUserPayload';
  enrollUserResult: EnrollUserResult;
  totpQrCodeUrl?: Maybe<Scalars['String']>;
  totpSecret?: Maybe<Scalars['String']>;
};

export enum EnrollUserResult {
  InvalidCredentials = 'INVALID_CREDENTIALS',
  Ok = 'OK',
  TotpSetupRequired = 'TOTP_SETUP_REQUIRED'
}

export enum ExploreSearchCategory {
  Business = 'BUSINESS',
  Tournament = 'TOURNAMENT',
  User = 'USER'
}

export type ExploreSearchInput = {
  category?: InputMaybe<ExploreSearchCategory>;
  paging?: InputMaybe<Paging>;
  searchTerm: Scalars['String'];
};

export type ExploreSearchResult = {
  __typename?: 'ExploreSearchResult';
  score: Scalars['Float'];
  value: ExploreSearchResultUnion;
};

export type ExploreSearchResultEdge = {
  __typename?: 'ExploreSearchResultEdge';
  cursor: Scalars['String'];
  node: ExploreSearchResult;
};

export type ExploreSearchResultUnion = AdminUser | BusinessUser | ClientUser | Tournament;

export type Face = {
  __typename?: 'Face';
  avatarImage?: Maybe<Scalars['String']>;
  isOnline: Scalars['Boolean'];
  oneUpId: Scalars['String'];
};

export type Finances = {
  __typename?: 'Finances';
  balance: Scalars['Int'];
  cards: Array<PaymentInstrument>;
  defaultCard?: Maybe<PaymentInstrument>;
  numberOfFreeInstantWithdrawals: Scalars['Int'];
};


export type FinancesCardsArgs = {
  input: UserFinancesCardsInput;
};


export type FinancesDefaultCardArgs = {
  input: UserFinancesCardsInput;
};

export type FirstDepositBonus = {
  __typename?: 'FirstDepositBonus';
  enabled: Scalars['Boolean'];
  steps: Array<FirstDepositBonusStep>;
};

export type FirstDepositBonusStep = {
  __typename?: 'FirstDepositBonusStep';
  id: Scalars['ID'];
  minAmount: Scalars['Int'];
  ticket: PromoTicket;
};

export enum FollowError {
  UserAlreadyFollowed = 'USER_ALREADY_FOLLOWED'
}

export type FollowInput = {
  fromId?: InputMaybe<Scalars['ID']>;
  toId: Scalars['ID'];
};

export type FollowPayload = {
  __typename?: 'FollowPayload';
  errors: Array<FollowProblem>;
  followState?: Maybe<FollowState>;
};

export type FollowProblem = ProblemInterface & {
  __typename?: 'FollowProblem';
  code: FollowError;
  message: Scalars['String'];
};

export type FollowRecommendationsInput = {
  paging?: InputMaybe<Paging>;
};

export enum FollowState {
  Following = 'FOLLOWING',
  NotFollowing = 'NOT_FOLLOWING',
  Pending = 'PENDING'
}

export type ForgotPasswordInput = {
  email?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type ForgotPasswordPayload = {
  __typename?: 'ForgotPasswordPayload';
  result: ForgotPasswordResult;
};

export enum ForgotPasswordResult {
  Ok = 'OK'
}

export enum FulfillWithdrawalError {
  AcceptExcludesReasons = 'ACCEPT_EXCLUDES_REASONS',
  CustomRejectRequiresText = 'CUSTOM_REJECT_REQUIRES_TEXT',
  CustomTextNotExpected = 'CUSTOM_TEXT_NOT_EXPECTED',
  RejectRequiresReason = 'REJECT_REQUIRES_REASON',
  WithdrawalNotPending = 'WITHDRAWAL_NOT_PENDING'
}

export type FulfillWithdrawalInput = {
  approve: Scalars['Boolean'];
  customDeclinedReasonText?: InputMaybe<Scalars['String']>;
  declinedReasons?: InputMaybe<Array<WithdrawalDeclinedReason>>;
  id: Scalars['ID'];
};

export type FulfillWithdrawalPayload = {
  __typename?: 'FulfillWithdrawalPayload';
  errors: Array<FulfillWithdrawalProblem>;
  withdrawal?: Maybe<Withdrawal>;
};

export type FulfillWithdrawalProblem = ProblemInterface & {
  __typename?: 'FulfillWithdrawalProblem';
  code: FulfillWithdrawalError;
  message: Scalars['String'];
};

export type Game = {
  __typename?: 'Game';
  active: Scalars['Boolean'];
  addFriendInstructions: Array<Scalars['String']>;
  arenaImage?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<Scalars['String']>;
  confirmImage?: Maybe<Scalars['String']>;
  createGameInstructions: Array<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  fields: Array<GameField>;
  houseRules: Array<GameRule>;
  howToPlay: Array<Scalars['String']>;
  iconImage: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  rules: Array<GameRule>;
  supportedSystems: Array<System>;
  thumbnailImage?: Maybe<Scalars['String']>;
  titleImage: Scalars['String'];
  tournamentDefaultImage?: Maybe<Scalars['String']>;
  tournamentDefaultShareImage?: Maybe<Scalars['String']>;
};

export type GameChatRoom = ChatRoom & {
  __typename?: 'GameChatRoom';
  createdAt: Scalars['DateTime'];
  game: Game;
  id: Scalars['ID'];
  lastMessage?: Maybe<AnyChatMessage>;
  numberOfParticipants: Scalars['Int'];
  participantIds: Array<Scalars['ID']>;
  updatedAt: Scalars['DateTime'];
};

export type GameField = {
  __typename?: 'GameField';
  _id: Scalars['ID'];
  name: Scalars['String'];
  parent?: Maybe<Scalars['ID']>;
  required?: Maybe<Scalars['Boolean']>;
  type?: Maybe<GameFieldType>;
  values: Array<GameFieldValue>;
};

export type GameFieldInput = {
  _id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: InputMaybe<Scalars['ID']>;
  required?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<GameFieldType>;
  values?: InputMaybe<Array<GameFieldValueInput>>;
};

export enum GameFieldType {
  Match = 'match',
  Player = 'player'
}

export type GameFieldValue = {
  __typename?: 'GameFieldValue';
  _id: Scalars['ID'];
  iconUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  number?: Maybe<Scalars['Float']>;
  parent?: Maybe<Scalars['ID']>;
  tintColor?: Maybe<Scalars['String']>;
};

export type GameFieldValueInput = {
  _id?: InputMaybe<Scalars['ID']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  number?: InputMaybe<Scalars['Float']>;
  parent?: InputMaybe<Scalars['ID']>;
  tintColor?: InputMaybe<Scalars['String']>;
};

export type GameInput = {
  fields?: InputMaybe<Array<GameFieldInput>>;
  name: Scalars['String'];
  supportedSystems?: InputMaybe<Array<Scalars['ID']>>;
};

export type GameRule = {
  __typename?: 'GameRule';
  description: Scalars['String'];
  name: Scalars['String'];
};

export type GameRuleInput = {
  description: Scalars['String'];
  name: Scalars['String'];
};

export type GetChatRoomInput = {
  id: Scalars['String'];
};

export type GetGameInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type GetSystemInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type GetTiersInput = {
  paging?: InputMaybe<Paging>;
};

export type GetTiersPaginatedResponse = {
  __typename?: 'GetTiersPaginatedResponse';
  edges: Array<TiersEdge>;
  pageInfo: PageInfo;
};

export type GetUserQueryInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  oneUpId?: InputMaybe<Scalars['ID']>;
};

export type GrowthConfiguration = {
  __typename?: 'GrowthConfiguration';
  firstDepositBonus: FirstDepositBonus;
  friendReferralBonus: PromoTicketBonus;
};

export type InputPostalAddress = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  address3?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type InviteFollowersToTournamentInput = {
  tournamentId: Scalars['String'];
};

export enum InviteTournamentPlayerError {
  TournamentAlreadyFinished = 'TOURNAMENT_ALREADY_FINISHED',
  TournamentAlreadyStarted = 'TOURNAMENT_ALREADY_STARTED',
  UserIsNotFollowingBusiness = 'USER_IS_NOT_FOLLOWING_BUSINESS'
}

export type InviteTournamentPlayerInput = {
  invites: Array<Scalars['ID']>;
  tournamentId: Scalars['ID'];
};

export type InviteTournamentPlayerPayload = {
  __typename?: 'InviteTournamentPlayerPayload';
  errors: Array<InviteTournamentPlayerProblem>;
  tournament?: Maybe<Tournament>;
};

export type InviteTournamentPlayerProblem = ProblemInterface & {
  __typename?: 'InviteTournamentPlayerProblem';
  code: InviteTournamentPlayerError;
  message: Scalars['String'];
};

export type InviteUserInput = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  role: Role;
  subRoles?: InputMaybe<Array<SubRole>>;
  totpSecret?: InputMaybe<Scalars['String']>;
};

export type InviteUserPayload = {
  __typename?: 'InviteUserPayload';
  inviteOtp?: Maybe<Scalars['String']>;
  inviteUserResult: InviteUserResult;
};

export enum InviteUserResult {
  Ok = 'OK',
  UserAlreadyExists = 'USER_ALREADY_EXISTS',
  UserAlreadyInvited = 'USER_ALREADY_INVITED'
}

export enum JoinMatchOfferError {
  JoinerAlreadyRejected = 'JOINER_ALREADY_REJECTED',
  JoinerIsBusy = 'JOINER_IS_BUSY',
  MatchOfferFilled = 'MATCH_OFFER_FILLED',
  SystemGameSetupRequired = 'SYSTEM_GAME_SETUP_REQUIRED'
}

export type JoinMatchOfferInput = {
  id: Scalars['ID'];
};

export type JoinMatchOfferPayload = {
  __typename?: 'JoinMatchOfferPayload';
  errors: Array<JoinMatchOfferProblem>;
  matchOffer?: Maybe<MatchOffer>;
};

export type JoinMatchOfferProblem = ProblemInterface & {
  __typename?: 'JoinMatchOfferProblem';
  code: JoinMatchOfferError;
  message: Scalars['String'];
};

export enum JoinTournamentError {
  AlreadyJoined = 'ALREADY_JOINED',
  IllegalJurisdiction = 'ILLEGAL_JURISDICTION',
  InsufficientBalance = 'INSUFFICIENT_BALANCE',
  InvalidPromoTicket = 'INVALID_PROMO_TICKET',
  SystemGameSetupRequired = 'SYSTEM_GAME_SETUP_REQUIRED',
  TournamentAlreadyStarted = 'TOURNAMENT_ALREADY_STARTED',
  TournamentFull = 'TOURNAMENT_FULL',
  TournamentInviteOnly = 'TOURNAMENT_INVITE_ONLY'
}

export type JoinTournamentInput = {
  id: Scalars['ID'];
  userPromoTicketId?: InputMaybe<Scalars['ID']>;
};

export type JoinTournamentPayload = {
  __typename?: 'JoinTournamentPayload';
  errors: Array<JoinTournamentProblem>;
  tournament?: Maybe<Tournament>;
};

export type JoinTournamentProblem = ProblemInterface & {
  __typename?: 'JoinTournamentProblem';
  code: JoinTournamentError;
  message: Scalars['String'];
};

export type Jurisdiction = {
  __typename?: 'Jurisdiction';
  country: Country;
  fullRegion: Scalars['String'];
  legal: Scalars['Boolean'];
  region: Region;
};

export type JurisdictionInput = {
  country: Country;
  legal: Scalars['Boolean'];
  region: Region;
};

export enum LeaveMatchOfferError {
  MatchOfferAlreadyCanceled = 'MATCH_OFFER_ALREADY_CANCELED',
  MatchOfferCompleted = 'MATCH_OFFER_COMPLETED'
}

export type LeaveMatchOfferInput = {
  id: Scalars['ID'];
};

export type LeaveMatchOfferPayload = {
  __typename?: 'LeaveMatchOfferPayload';
  errors: Array<LeaveMatchOfferProblem>;
  matchOffer?: Maybe<MatchOffer>;
};

export type LeaveMatchOfferProblem = ProblemInterface & {
  __typename?: 'LeaveMatchOfferProblem';
  code: LeaveMatchOfferError;
  message: Scalars['String'];
};

export enum LeaveTournamentError {
  NotTournamentPlayer = 'NOT_TOURNAMENT_PLAYER',
  TournamentAlreadyStarted = 'TOURNAMENT_ALREADY_STARTED',
  TournamentCancelled = 'TOURNAMENT_CANCELLED'
}

export type LeaveTournamentInput = {
  id: Scalars['ID'];
};

export type LeaveTournamentPayload = {
  __typename?: 'LeaveTournamentPayload';
  errors: Array<LeaveTournamentProblem>;
  tournament?: Maybe<Tournament>;
};

export type LeaveTournamentProblem = ProblemInterface & {
  __typename?: 'LeaveTournamentProblem';
  code: LeaveTournamentError;
  message: Scalars['String'];
};

export type LegalConfiguration = {
  __typename?: 'LegalConfiguration';
  coveredJurisdictions: Array<Jurisdiction>;
};

export type LegalJurisdictionInput = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type LegalJurisdictionPayload = {
  __typename?: 'LegalJurisdictionPayload';
  isLegal: Scalars['Boolean'];
};

export type MarkNotificationsAsSeenInput = {
  platform: ClientPlatform;
};

export type MarkNotificationsAsSeenPayload = {
  __typename?: 'MarkNotificationsAsSeenPayload';
  seenAt: Scalars['DateTime'];
};

export type MarketingNotification = {
  __typename?: 'MarketingNotification';
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deeplink: Scalars['String'];
  id: Scalars['ID'];
  platform?: Maybe<ClientPlatform>;
  sentAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
};

export enum MarketingNotificationDeeplinkRoute {
  DepositCreate = 'DEPOSIT_CREATE',
  GameAdd = 'GAME_ADD',
  Matches = 'MATCHES',
  Notifications = 'NOTIFICATIONS',
  Oneuptv = 'ONEUPTV',
  Tournaments = 'TOURNAMENTS',
  Users = 'USERS'
}

export type MarketingNotificationEdge = {
  __typename?: 'MarketingNotificationEdge';
  cursor: Scalars['String'];
  node: MarketingNotification;
};

export type MarketingNotificationsQueryInput = {
  paging?: InputMaybe<Paging>;
  sort?: InputMaybe<MarketingNotificationsSort>;
};

export type MarketingNotificationsSort = {
  direction: SortDirection;
  field: MarketingNotificationsSortField;
};

export enum MarketingNotificationsSortField {
  CreatedAt = 'CREATED_AT'
}

export type MarketingTournamentsFilter = {
  createdBy?: InputMaybe<Scalars['ID']>;
  game?: InputMaybe<Scalars['ID']>;
  system?: InputMaybe<Scalars['ID']>;
};

export type MarketingTournamentsQueryInput = {
  filter?: InputMaybe<MarketingTournamentsFilter>;
  paging?: InputMaybe<Paging>;
  sort?: InputMaybe<TournamentsSort>;
};

export type Match = {
  __typename?: 'Match';
  createdAt: Scalars['DateTime'];
  faction1: MatchFaction;
  faction2?: Maybe<MatchFaction>;
  factionType: MatchFactionType;
  factions: Array<MatchFaction>;
  fields: Array<MatchField>;
  game: Game;
  id: Scalars['ID'];
  liveStreams: Array<OneUpTvMatchItem>;
  outcome?: Maybe<MatchOutcome>;
  player1: MatchPlayer;
  player2?: Maybe<MatchPlayer>;
  shareLink: ShareLink;
  stake: Scalars['Int'];
  startDate?: Maybe<Scalars['DateTime']>;
  status: MatchStatus;
  system: System;
  tournamentInfo?: Maybe<MatchTournamentInfo>;
  updatedAt: Scalars['DateTime'];
  winner?: Maybe<MatchPlayer>;
};

export type MatchAlert = {
  __typename?: 'MatchAlert';
  createdAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  game: Game;
  id: Scalars['ID'];
  stakeRanges: Array<MatchAlertStakeRange>;
  system: System;
  updatedAt: Scalars['DateTime'];
};

export type MatchAlertEdge = {
  __typename?: 'MatchAlertEdge';
  cursor: Scalars['String'];
  node: MatchAlert;
};

export enum MatchAlertStakeRange {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export type MatchAlertsInput = {
  paging: Paging;
};

export type MatchChatRoom = ChatRoom & {
  __typename?: 'MatchChatRoom';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lastMessage?: Maybe<AnyChatMessage>;
  numberOfParticipants: Scalars['Int'];
  participantIds: Array<Scalars['ID']>;
  participants: PaginatedAnyUserResponse;
  updatedAt: Scalars['DateTime'];
};


export type MatchChatRoomParticipantsArgs = {
  input?: InputMaybe<ParticipantsInput>;
};

export type MatchConfiguration = {
  __typename?: 'MatchConfiguration';
  fee: Scalars['Int'];
  maximumMatchTimeMinutes: Scalars['Int'];
  otherResultReason: Array<MatchOtherResultReason>;
  playerDownvoteReasons: Array<MatchPlayerDownvoteReason>;
};

export type MatchEdge = {
  __typename?: 'MatchEdge';
  cursor: Scalars['String'];
  node: Match;
};

export type MatchEvidence = {
  __typename?: 'MatchEvidence';
  id: Scalars['ID'];
  type: MatchEvidenceType;
  url: Scalars['String'];
};

export enum MatchEvidenceType {
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export type MatchFaction = {
  evidence: Array<MatchEvidence>;
  id: Scalars['ID'];
  result?: Maybe<MatchResult>;
  startedAt?: Maybe<Scalars['DateTime']>;
};

export enum MatchFactionType {
  Player = 'PLAYER',
  Pvp = 'PVP',
  Team = 'TEAM',
  Tvt = 'TVT'
}

export type MatchField = {
  __typename?: 'MatchField';
  id: Scalars['ID'];
  name: Scalars['String'];
  value: MatchFieldValue;
};

export type MatchFieldInput = {
  id: Scalars['ID'];
  value: Scalars['ID'];
};

export type MatchFieldValue = {
  __typename?: 'MatchFieldValue';
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  tintColor?: Maybe<Scalars['String']>;
};

export type MatchFlow = Match | MatchOffer;

export type MatchOffer = {
  __typename?: 'MatchOffer';
  applicableUserPromoTicket?: Maybe<UserPromoTicket>;
  conditions: MatchOfferConditions;
  createdAt: Scalars['DateTime'];
  creator: MatchOfferPlayer;
  game: Game;
  id: Scalars['ID'];
  joiner?: Maybe<MatchOfferPlayer>;
  latestConditions?: Maybe<MatchOfferConditions>;
  matchFields: Array<MatchField>;
  matchOfferConditions: Array<MatchOfferConditions>;
  private: Scalars['Boolean'];
  stake: Scalars['Int'];
  status: MatchOfferStatus;
  system: System;
  updatedAt: Scalars['DateTime'];
};


export type MatchOfferConditionsArgs = {
  id: Scalars['String'];
};

export type MatchOfferChatRoom = ChatRoom & {
  __typename?: 'MatchOfferChatRoom';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lastMessage?: Maybe<AnyChatMessage>;
  numberOfParticipants: Scalars['Int'];
  participantIds: Array<Scalars['ID']>;
  updatedAt: Scalars['DateTime'];
};

export type MatchOfferConditions = {
  __typename?: 'MatchOfferConditions';
  createdAt: Scalars['DateTime'];
  creatorFields?: Maybe<Array<MatchField>>;
  id: Scalars['ID'];
  joinerFields?: Maybe<Array<MatchField>>;
  matchFields?: Maybe<Array<MatchField>>;
  reviewedAt?: Maybe<Scalars['DateTime']>;
  status: MatchOfferConditionsStatus;
  updatedAt: Scalars['DateTime'];
};

export enum MatchOfferConditionsStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Replaced = 'REPLACED'
}

export type MatchOfferEdge = {
  __typename?: 'MatchOfferEdge';
  cursor: Scalars['String'];
  node: MatchOffer;
};

export type MatchOfferInput = {
  id: Scalars['ID'];
};

export type MatchOfferPlayer = {
  __typename?: 'MatchOfferPlayer';
  confirmedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  playerFields: Array<MatchField>;
  updatedAt: Scalars['DateTime'];
  user: ClientUser;
  userId: Scalars['ID'];
};

export enum MatchOfferStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Filled = 'FILLED',
  Open = 'OPEN',
  PendingInvite = 'PENDING_INVITE'
}

export type MatchOfferUserJoinedChatMessage = ChatMessage & {
  __typename?: 'MatchOfferUserJoinedChatMessage';
  authorId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  joiner: ClientUser;
};

export type MatchOffersFilter = {
  game?: InputMaybe<Scalars['ID']>;
  statusIn?: InputMaybe<Array<MatchOfferStatus>>;
  system?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<Scalars['ID']>>;
};

export type MatchOffersQueryInput = {
  filter?: InputMaybe<MatchOffersFilter>;
  paging: Paging;
  sort?: InputMaybe<MatchOffersSort>;
};

export type MatchOffersSort = {
  direction: SortDirection;
  field: MatchOffersSortField;
};

export enum MatchOffersSortField {
  CreatedAt = 'CREATED_AT'
}

export type MatchOtherResultReason = {
  __typename?: 'MatchOtherResultReason';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type MatchOutcome = {
  __typename?: 'MatchOutcome';
  reviewedAt?: Maybe<Scalars['DateTime']>;
  reviewedBy?: Maybe<AdminUser>;
  type: MatchOutcomeType;
  winner?: Maybe<MatchFaction>;
};

export enum MatchOutcomeType {
  Regular = 'REGULAR',
  ReturnedStakes = 'RETURNED_STAKES'
}

export type MatchPlayer = MatchFaction & {
  __typename?: 'MatchPlayer';
  evidence: Array<MatchEvidence>;
  fields: Array<MatchField>;
  id: Scalars['ID'];
  liveStream?: Maybe<OneUpTvMatchItem>;
  oneUpId: Scalars['String'];
  result?: Maybe<MatchResult>;
  startedAt?: Maybe<Scalars['DateTime']>;
  tag?: Maybe<Scalars['String']>;
  user: SystemClientUser;
  userId: Scalars['ID'];
};

export type MatchPlayerDownvoteReason = {
  __typename?: 'MatchPlayerDownvoteReason';
  id: Scalars['ID'];
  reasonId: Scalars['String'];
  title: Scalars['String'];
};

export type MatchPlayersFilter = {
  users: Array<Scalars['ID']>;
};

export type MatchQueryInput = {
  id: Scalars['ID'];
};

export type MatchResult = {
  __typename?: 'MatchResult';
  note?: Maybe<Scalars['String']>;
  otherReasonLegacy?: Maybe<Scalars['String']>;
  type: MatchResultType;
};

export enum MatchResultType {
  Loss = 'LOSS',
  Other = 'OTHER',
  Win = 'WIN'
}

export enum MatchSearchFilterField {
  GamerTag = 'GAMER_TAG',
  MatchId = 'MATCH_ID',
  OneUpId = 'ONE_UP_ID',
  UserId = 'USER_ID'
}

export type MatchSearchFilterInput = {
  searchFields: Array<MatchSearchFilterField>;
  searchTerm: Scalars['String'];
};

export enum MatchStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Matched = 'MATCHED',
  Open = 'OPEN',
  Review = 'REVIEW',
  Running = 'RUNNING'
}

export type MatchTournamentInfo = {
  __typename?: 'MatchTournamentInfo';
  roundIndex: Scalars['Int'];
  tournament: Tournament;
};

export type MatchesFilter = {
  game?: InputMaybe<Scalars['ID']>;
  matchPlayersFilter?: InputMaybe<MatchPlayersFilter>;
  outcomeType?: InputMaybe<MatchOutcomeType>;
  search?: InputMaybe<MatchSearchFilterInput>;
  statusIn?: InputMaybe<Array<MatchStatus>>;
  system?: InputMaybe<Scalars['ID']>;
};

export type MatchesQueryInput = {
  filter?: InputMaybe<MatchesFilter>;
  paging?: InputMaybe<Paging>;
  sort?: InputMaybe<MatchesSort>;
};

export type MatchesSort = {
  direction: SortDirection;
  field: MatchesSortField;
};

export enum MatchesSortField {
  CreatedAt = 'CREATED_AT'
}

export type MaverickCardInfoInput = {
  addressLine1: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  state: Scalars['String'];
  zip: Scalars['String'];
};

export enum MaverickDepositIntentError {
  CardExpired = 'CARD_EXPIRED',
  EmailNotFound = 'EMAIL_NOT_FOUND',
  InvalidAddress = 'INVALID_ADDRESS',
  InvalidFullname = 'INVALID_FULLNAME',
  UserDontHaveDefaultCard = 'USER_DONT_HAVE_DEFAULT_CARD',
  UserNotFound = 'USER_NOT_FOUND'
}

export type MaverickDepositIntentInput = {
  amount: Scalars['Int'];
  userId: Scalars['ID'];
};

export type MaverickDepositIntentPayload = {
  __typename?: 'MaverickDepositIntentPayload';
  creditCardExpiresAt?: Maybe<Scalars['DateTime']>;
  errors: Array<MaverickDepositIntentProblem>;
  html: Scalars['String'];
};

export type MaverickDepositIntentProblem = ProblemInterface & {
  __typename?: 'MaverickDepositIntentProblem';
  code: MaverickDepositIntentError;
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCard: AddCardPayload;
  addFcmToken: AddFcmTokenPayload;
  addGame: AddGamePayload;
  addNote: UserNote;
  addOneUpTVTournamentItem: AddOneUpTvTournamentItemPayload;
  addOneUpTVVideoItem: AddOneUpTvVideoItemPayload;
  addRecentSearch: AddRecentSearchPayload;
  addSystem: AddSystemPayload;
  addTier: AddTierPayload;
  addTransactions: AddTransactionsPayload;
  addUserPromoTicket: AddUserPromoTicketPayload;
  addUserSystemGame: AddUserSystemGamePayload;
  addWithdrawal: AddWithdrawPayload;
  assignPassbaseIdentity: AssignPassbaseIdentityPayload;
  cancelMatchOffer: CancelMatchOfferPayload;
  cancelTournament: CancelTournamentPayload;
  cancelWithdrawal: CancelWithdrawalPayload;
  changePassword: ChangePasswordPayload;
  confirmMatchOffer: ConfirmMatchOfferPayload;
  connectStreamingAccount: ConnectStreamingAccountPayload;
  createBusiness: CreateBusinessPayload;
  createBusinessAccessRequest: BusinessAccessRequestPayload;
  createCreatorProgramApplication: CreateCreatorProgramApplicationPayload;
  createDeposit: CreateDepositPayload;
  createDirectMessageChatRoom: CreateDirectMessageChatRoomPayload;
  createMatchOffer: CreateMatchOfferPayload;
  createMatchOfferConditions: CreateMatchOfferConditionsPayload;
  createSupportTicket: CreateSupportTicketPayload;
  createTournament: CreateTournamentPayload;
  createWithdrawal: CreateWithdrawalPayload;
  createWithdrawalSupportTicket: CreateWithdrawalSupportTicketPayload;
  deleteNote: Scalars['Boolean'];
  deleteUser: DeleteUserPayload;
  disconnectStreamingAccount: DisconnectStreamingAccountPayload;
  enrollUser: EnrollUserPayload;
  follow: FollowPayload;
  forgotPassword: ForgotPasswordPayload;
  fulfillWithdrawal: FulfillWithdrawalPayload;
  inviteFollowersToTournament: InviteTournamentPlayerPayload;
  inviteTournamentPlayer: InviteTournamentPlayerPayload;
  inviteUser: InviteUserPayload;
  joinMatchOffer: JoinMatchOfferPayload;
  joinTournament: JoinTournamentPayload;
  leaveMatchOffer: LeaveMatchOfferPayload;
  leaveTournament: LeaveTournamentPayload;
  markNotificationsAsSeen: MarkNotificationsAsSeenPayload;
  maverickDepositIntent: MaverickDepositIntentPayload;
  passbaseFlowDidComplete: PassbaseFlowDidCompletePayload;
  promoteTournament: PromoteTournamentPayload;
  refundDeposit: RefundDepositPayload;
  refundUserPromoTicket: RefundUserPromoTicketPayload;
  rejectMatchOfferJoiner: RejectMatchOfferJoinerPayload;
  rejectUserIdentity: RejectUserIdentityPayload;
  removeCard: RemoveCardPayload;
  removeFcmToken: RemoveFcmTokenPayload;
  removeOneUpTvItem: RemoveOneUpTvItemPayload;
  removeSubscriptionPlan: RemoveSubscriptionPlanPayload;
  removeTournamentPlayer: RemoveTournamentPlayerPayload;
  removeUserPromoTicket: RemoveUserPromoTicketPayload;
  removeUserSystem: RemoveUserSystemPayload;
  removeUserSystemGame: RemoveUserSystemGamePayload;
  replyFollowRequest: ReplyFollowRequestPayload;
  resetPassword: ResetPasswordPayload;
  resetUserIdentity: ResetUserIdentityPayload;
  resetUserTotp: ResetUserTotpPayload;
  resubmitTournamentForReview: ResubmitTournamentForReviewPayload;
  reviewBusinessAccessRequest: ReviewBusinessAccessRequestPayload;
  reviewCreatorProgramApplication: ReviewCreatorProgramApplicationPayload;
  reviewMatchOfferConditions: ReviewMatchOfferConditionsPayload;
  reviewMatchOfferInvite: ReviewMatchOfferInvitePayload;
  reviewTournament: ReviewTournamentPayload;
  sendMarketingNotification: SendMarketingNotificationPayload;
  sendPhoneVerificationCode: SendPhoneVerificationCodePayload;
  setDefaultCard: SetDefaultCardPayload;
  setMatchOfferPlayerFields: SetMatchOfferPlayerFieldsPayload;
  signIn: ClientUserSignInPayload;
  signUp: ClientUserSignUpPayload;
  unfollow: UnfollowPayload;
  uninviteTournamentPlayer: UninviteTournamentPlayerPayload;
  updateAdminUser: UpdateAdminUserPayload;
  updateBusiness: UpdateBusinessPayload;
  updateFace: UpdateFacePayload;
  updateLegalConfiguration: UpdateLegalConfigurationPayload;
  updateMatchAlert: UpdateMatchAlertPayload;
  updateNotificationSettings: UpdateNotificationSettingsPayload;
  updateTier: UpdateTierPayload;
  updateTournament: UpdateTournamentPayload;
  updateUserProfile: UpdateUserProfilePayload;
  updateUserStatus: UpdateUserStatusPayload;
  upsertGame: UpsertGamePayload;
  upsertPromoTicket: UpsertPromoTicketPayload;
  upsertSubscriptionPlan: UpsertSubscriptionPlanPayload;
  upsertSystem: UpsertSystemPayload;
  upsertUserSystem: UpsertUserSystemPayload;
  useUserPromoTicket: UseUserPromoTicketPayload;
  verifyPassword: VerifyPasswordPayload;
  verifyPhoneVerificationCode: VerifyPhoneVerificationCodePayload;
  verifyTotp: VerifyTotpPayload;
};


export type MutationAddCardArgs = {
  input: AddCardInput;
};


export type MutationAddFcmTokenArgs = {
  input: AddFcmTokenInput;
};


export type MutationAddGameArgs = {
  input: AddGameInput;
};


export type MutationAddNoteArgs = {
  input: AddNoteInput;
};


export type MutationAddOneUpTvTournamentItemArgs = {
  input: AddOneUpTvTournamentItemInput;
};


export type MutationAddOneUpTvVideoItemArgs = {
  input: AddOneUpTvVideoItemInput;
};


export type MutationAddRecentSearchArgs = {
  input: AddRecentSearchInput;
};


export type MutationAddSystemArgs = {
  input: AddSystemInput;
};


export type MutationAddTierArgs = {
  input: AddTierInput;
};


export type MutationAddTransactionsArgs = {
  input: AddTransactionsInput;
};


export type MutationAddUserPromoTicketArgs = {
  input: AddUserPromoTicketInput;
};


export type MutationAddUserSystemGameArgs = {
  input: AddUserSystemGameInput;
};


export type MutationAddWithdrawalArgs = {
  input: AddWithdrawalInput;
};


export type MutationAssignPassbaseIdentityArgs = {
  input: AssignPassbaseIdentityInput;
};


export type MutationCancelMatchOfferArgs = {
  input: CancelMatchOfferInput;
};


export type MutationCancelTournamentArgs = {
  input: CancelTournamentInput;
};


export type MutationCancelWithdrawalArgs = {
  input: CancelWithdrawalInput;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationConfirmMatchOfferArgs = {
  input: ConfirmMatchOfferInput;
};


export type MutationConnectStreamingAccountArgs = {
  input: ConnectStreamingAccountInput;
};


export type MutationCreateBusinessArgs = {
  input: CreateBusinessInput;
};


export type MutationCreateBusinessAccessRequestArgs = {
  input?: InputMaybe<CreateBusinessAccessRequestInput>;
};


export type MutationCreateDepositArgs = {
  input: CreateDepositInput;
};


export type MutationCreateDirectMessageChatRoomArgs = {
  input: CreateDirectMessageChatRoomInput;
};


export type MutationCreateMatchOfferArgs = {
  input: CreateMatchOfferInput;
};


export type MutationCreateMatchOfferConditionsArgs = {
  input: CreateMatchOfferConditionsInput;
};


export type MutationCreateSupportTicketArgs = {
  input: CreateSupportTicketInput;
};


export type MutationCreateTournamentArgs = {
  input: CreateTournamentInput;
};


export type MutationCreateWithdrawalArgs = {
  input: CreateWithdrawalInput;
};


export type MutationCreateWithdrawalSupportTicketArgs = {
  input: CreateWithdrawalSupportTicketInput;
};


export type MutationDeleteNoteArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationDisconnectStreamingAccountArgs = {
  input: DisconnectStreamingAccountInput;
};


export type MutationEnrollUserArgs = {
  input: EnrollUserInput;
};


export type MutationFollowArgs = {
  input: FollowInput;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationFulfillWithdrawalArgs = {
  input: FulfillWithdrawalInput;
};


export type MutationInviteFollowersToTournamentArgs = {
  input: InviteFollowersToTournamentInput;
};


export type MutationInviteTournamentPlayerArgs = {
  input: InviteTournamentPlayerInput;
};


export type MutationInviteUserArgs = {
  input: InviteUserInput;
};


export type MutationJoinMatchOfferArgs = {
  input: JoinMatchOfferInput;
};


export type MutationJoinTournamentArgs = {
  input: JoinTournamentInput;
};


export type MutationLeaveMatchOfferArgs = {
  input: LeaveMatchOfferInput;
};


export type MutationLeaveTournamentArgs = {
  input: LeaveTournamentInput;
};


export type MutationMarkNotificationsAsSeenArgs = {
  input: MarkNotificationsAsSeenInput;
};


export type MutationMaverickDepositIntentArgs = {
  input: MaverickDepositIntentInput;
};


export type MutationPromoteTournamentArgs = {
  input: PromoteTournamentInput;
};


export type MutationRefundDepositArgs = {
  input: RefundDepositInput;
};


export type MutationRefundUserPromoTicketArgs = {
  input: RefundUserPromoTicketInput;
};


export type MutationRejectMatchOfferJoinerArgs = {
  input: RejectMatchOfferJoinerInput;
};


export type MutationRejectUserIdentityArgs = {
  input: RejectUserIdentityInput;
};


export type MutationRemoveCardArgs = {
  input: RemoveCardInput;
};


export type MutationRemoveFcmTokenArgs = {
  input: RemoveFcmTokenInput;
};


export type MutationRemoveOneUpTvItemArgs = {
  input: RemoveOneUpTvItemInput;
};


export type MutationRemoveSubscriptionPlanArgs = {
  input: RemoveSubscriptionPlanInput;
};


export type MutationRemoveTournamentPlayerArgs = {
  input: RemoveTournamentPlayerInput;
};


export type MutationRemoveUserPromoTicketArgs = {
  input: RemoveUserPromoTicketInput;
};


export type MutationRemoveUserSystemArgs = {
  input: RemoveUserSystemInput;
};


export type MutationRemoveUserSystemGameArgs = {
  input: RemoveUserSystemGameInput;
};


export type MutationReplyFollowRequestArgs = {
  input: ReplyFollowRequestInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationResetUserIdentityArgs = {
  input: ResetUserIdentityInput;
};


export type MutationResetUserTotpArgs = {
  input: ResetUserTotpInput;
};


export type MutationResubmitTournamentForReviewArgs = {
  input: ResubmitTournamentForReviewInput;
};


export type MutationReviewBusinessAccessRequestArgs = {
  input: ReviewBusinessAccessRequestInput;
};


export type MutationReviewCreatorProgramApplicationArgs = {
  input: ReviewCreatorProgramApplicationInput;
};


export type MutationReviewMatchOfferConditionsArgs = {
  input: ReviewMatchOfferConditionsInput;
};


export type MutationReviewMatchOfferInviteArgs = {
  input: ReviewMatchOfferInviteInput;
};


export type MutationReviewTournamentArgs = {
  input: ReviewTournamentInput;
};


export type MutationSendMarketingNotificationArgs = {
  input: SendMarketingNotificationInput;
};


export type MutationSendPhoneVerificationCodeArgs = {
  input: SendPhoneVerificationCodeInput;
};


export type MutationSetDefaultCardArgs = {
  input: SetDefaultCardInput;
};


export type MutationSetMatchOfferPlayerFieldsArgs = {
  input: SetMatchOfferPlayerFieldsInput;
};


export type MutationSignInArgs = {
  input: ClientUserSignInInput;
};


export type MutationSignUpArgs = {
  input: ClientUserSignUpInput;
};


export type MutationUnfollowArgs = {
  input: UnfollowInput;
};


export type MutationUninviteTournamentPlayerArgs = {
  input: UninviteTournamentPlayerInput;
};


export type MutationUpdateAdminUserArgs = {
  input: UpdateAdminUserInput;
};


export type MutationUpdateBusinessArgs = {
  input: UpdateBusinessInput;
};


export type MutationUpdateFaceArgs = {
  input: UpdateFaceInput;
};


export type MutationUpdateLegalConfigurationArgs = {
  input: UpdateLegalConfigurationInput;
};


export type MutationUpdateMatchAlertArgs = {
  input: UpdateMatchAlertInput;
};


export type MutationUpdateNotificationSettingsArgs = {
  input: UpdateNotificationSettingsInput;
};


export type MutationUpdateTierArgs = {
  input: UpdateTierInput;
};


export type MutationUpdateTournamentArgs = {
  input: UpdateTournamentInput;
};


export type MutationUpdateUserProfileArgs = {
  input: UpdateUserProfileInput;
};


export type MutationUpdateUserStatusArgs = {
  input: UpdateUserStatusInput;
};


export type MutationUpsertGameArgs = {
  input: UpsertGameInput;
};


export type MutationUpsertPromoTicketArgs = {
  input: UpsertPromoTicketInput;
};


export type MutationUpsertSubscriptionPlanArgs = {
  input: UpsertSubscriptionPlanInput;
};


export type MutationUpsertSystemArgs = {
  input: UpsertSystemInput;
};


export type MutationUpsertUserSystemArgs = {
  input: UpsertUserSystemInput;
};


export type MutationUseUserPromoTicketArgs = {
  input: UseUserPromoTicketInput;
};


export type MutationVerifyPasswordArgs = {
  input: VerifyPasswordInput;
};


export type MutationVerifyPhoneVerificationCodeArgs = {
  input: VerifyPhoneVerificationCodeInput;
};


export type MutationVerifyTotpArgs = {
  input: VerifyTotpInput;
};

export type Notification = {
  __typename?: 'Notification';
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deeplink?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  platform: ClientPlatform;
  seenAt?: Maybe<Scalars['DateTime']>;
  sender?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  type: NotificationType;
  updatedAt: Scalars['DateTime'];
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  cursor: Scalars['String'];
  node: Notification;
};

export type NotificationSettings = {
  __typename?: 'NotificationSettings';
  marketingEnabled: Scalars['Boolean'];
};

export enum NotificationType {
  AdminMatchReview = 'ADMIN_MATCH_REVIEW',
  AdminTournamentReview = 'ADMIN_TOURNAMENT_REVIEW',
  AdminUserIdentityMismatch = 'ADMIN_USER_IDENTITY_MISMATCH',
  AdminWithdrawalReview = 'ADMIN_WITHDRAWAL_REVIEW',
  BusinessAccessRequestApproved = 'BUSINESS_ACCESS_REQUEST_APPROVED',
  BusinessAccessRequestRejected = 'BUSINESS_ACCESS_REQUEST_REJECTED',
  ChatRoomNewMessage = 'CHAT_ROOM_NEW_MESSAGE',
  FollowRequest = 'FOLLOW_REQUEST',
  IdentityVerificationApproved = 'IDENTITY_VERIFICATION_APPROVED',
  IdentityVerificationReset = 'IDENTITY_VERIFICATION_RESET',
  IdentiyVerificationRejected = 'IDENTIY_VERIFICATION_REJECTED',
  MarketingNotification = 'MARKETING_NOTIFICATION',
  MatchCreatedInviteNotification = 'MATCH_CREATED_INVITE_NOTIFICATION',
  MatchCreatedTopicNotification = 'MATCH_CREATED_TOPIC_NOTIFICATION',
  MatchOfferCancel = 'MATCH_OFFER_CANCEL',
  MatchOfferConditionsCreate = 'MATCH_OFFER_CONDITIONS_CREATE',
  MatchOfferConditionsReview = 'MATCH_OFFER_CONDITIONS_REVIEW',
  MatchOfferConfirm = 'MATCH_OFFER_CONFIRM',
  MatchOfferCreate = 'MATCH_OFFER_CREATE',
  MatchOfferInviteReview = 'MATCH_OFFER_INVITE_REVIEW',
  MatchOfferJoin = 'MATCH_OFFER_JOIN',
  MatchOfferLeave = 'MATCH_OFFER_LEAVE',
  MatchOfferRejectJoiner = 'MATCH_OFFER_REJECT_JOINER',
  NewFollower = 'NEW_FOLLOWER',
  NewSupportMessage = 'NEW_SUPPORT_MESSAGE',
  OneuptvStreamCreated = 'ONEUPTV_STREAM_CREATED',
  PromoTicket = 'PROMO_TICKET',
  TournamentCreated = 'TOURNAMENT_CREATED',
  TournamentFlowInfo = 'TOURNAMENT_FLOW_INFO',
  TournamentInvite = 'TOURNAMENT_INVITE',
  TournamentReviewApproved = 'TOURNAMENT_REVIEW_APPROVED',
  TournamentReviewRejected = 'TOURNAMENT_REVIEW_REJECTED',
  WithdrawalApproved = 'WITHDRAWAL_APPROVED',
  WithdrawalRejected = 'WITHDRAWAL_REJECTED'
}

export type NotificationsFilter = {
  platform?: InputMaybe<ClientPlatform>;
};

export type NotificationsQueryInput = {
  filter?: InputMaybe<NotificationsFilter>;
  paging?: InputMaybe<Paging>;
  sort?: InputMaybe<NotificationsSort>;
};

export type NotificationsSort = {
  direction: SortDirection;
  field: NotificationsSortField;
};

export enum NotificationsSortField {
  CreatedAt = 'CREATED_AT'
}

export type OneUpTvItem = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  service: StreamingService;
  thumbnailUrl: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['ID'];
  videoUrl: Scalars['String'];
};

export type OneUpTvItemChatRoom = ChatRoom & {
  __typename?: 'OneUpTVItemChatRoom';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lastMessage?: Maybe<AnyChatMessage>;
  numberOfParticipants: Scalars['Int'];
  participantIds: Array<Scalars['ID']>;
  updatedAt: Scalars['DateTime'];
};

export type OneUpTvItemEdge = {
  __typename?: 'OneUpTVItemEdge';
  cursor: Scalars['String'];
  node: OneUpTvItem;
};

export type OneUpTvItemQueryInput = {
  id: Scalars['ID'];
};

export enum OneUpTvItemSortField {
  CreatedAt = 'CREATED_AT'
}

export enum OneUpTvItemType {
  Live = 'LIVE',
  Past = 'PAST'
}

export type OneUpTvItemsFilter = {
  matchItemsFilter?: InputMaybe<Scalars['ID']>;
  typeIn?: InputMaybe<Array<OneUpTvItemType>>;
  user?: InputMaybe<Scalars['ID']>;
};

export type OneUpTvItemsQueryInput = {
  filter?: InputMaybe<OneUpTvItemsFilter>;
  paging?: InputMaybe<Paging>;
  sort?: InputMaybe<OneUpTvItemsSort>;
};

export type OneUpTvItemsSort = {
  direction: SortDirection;
  field: OneUpTvItemSortField;
};

export type OneUpTvMatchItem = OneUpTvItem & {
  __typename?: 'OneUpTVMatchItem';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  match: Match;
  matchId: Scalars['String'];
  service: StreamingService;
  shareLink: ShareLink;
  thumbnailUrl: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: AnyUser;
  userId: Scalars['ID'];
  videoUrl: Scalars['String'];
};

export type OneUpTvTournamentItem = OneUpTvItem & {
  __typename?: 'OneUpTVTournamentItem';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  service: StreamingService;
  shareLink: ShareLink;
  thumbnailUrl: Scalars['String'];
  tournament: Tournament;
  tournamentId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['ID'];
  videoUrl: Scalars['String'];
};

export type OneUpTvVideoItem = OneUpTvItem & {
  __typename?: 'OneUpTVVideoItem';
  caption: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  service: StreamingService;
  shareLink: ShareLink;
  thumbnailUrl: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: AnyUser;
  userId: Scalars['ID'];
  videoUrl: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type PaginatedAnyUserResponse = {
  __typename?: 'PaginatedAnyUserResponse';
  edges: Array<AnyUserEdge>;
  pageInfo: PageInfo;
};

export type PaginatedBusinessClientUserResponse = {
  __typename?: 'PaginatedBusinessClientUserResponse';
  edges: Array<BusinessClientUserEdge>;
  pageInfo: PageInfo;
};

export type PaginatedChatRoomsResponse = {
  __typename?: 'PaginatedChatRoomsResponse';
  edges: Array<AnyChatRoomEdge>;
  pageInfo: PageInfo;
};

export type PaginatedClientUserResponse = {
  __typename?: 'PaginatedClientUserResponse';
  edges: Array<ClientUserEdge>;
  pageInfo: PageInfo;
};

export type PaginatedDepositsResponse = {
  __typename?: 'PaginatedDepositsResponse';
  edges: Array<DepositEdge>;
  pageInfo: PageInfo;
};

export type PaginatedExploreSearchResponse = {
  __typename?: 'PaginatedExploreSearchResponse';
  edges: Array<ExploreSearchResultEdge>;
  pageInfo: PageInfo;
};

export type PaginatedMarketingNotificationsResponse = {
  __typename?: 'PaginatedMarketingNotificationsResponse';
  edges: Array<MarketingNotificationEdge>;
  pageInfo: PageInfo;
};

export type PaginatedMatchAlertsResponse = {
  __typename?: 'PaginatedMatchAlertsResponse';
  edges: Array<MatchAlertEdge>;
  pageInfo: PageInfo;
};

export type PaginatedMatcheOffersResponse = {
  __typename?: 'PaginatedMatcheOffersResponse';
  edges: Array<MatchOfferEdge>;
  pageInfo: PageInfo;
};

export type PaginatedMatchesResponse = {
  __typename?: 'PaginatedMatchesResponse';
  edges: Array<MatchEdge>;
  pageInfo: PageInfo;
};

export type PaginatedNotificationsResponse = {
  __typename?: 'PaginatedNotificationsResponse';
  edges: Array<NotificationEdge>;
  pageInfo: PageInfo;
};

export type PaginatedOneUpTvItemResponse = {
  __typename?: 'PaginatedOneUpTVItemResponse';
  edges: Array<OneUpTvItemEdge>;
  pageInfo: PageInfo;
};

export type PaginatedPromoTicketsResponse = {
  __typename?: 'PaginatedPromoTicketsResponse';
  edges: Array<PromoTicketEdge>;
  pageInfo: PageInfo;
};

export type PaginatedSupportTicketsResponse = {
  __typename?: 'PaginatedSupportTicketsResponse';
  edges: Array<SupportTicketEdge>;
  pageInfo: PageInfo;
};

export type PaginatedSystemClientUserResponse = {
  __typename?: 'PaginatedSystemClientUserResponse';
  edges: Array<SystemClientUserEdge>;
  pageInfo: PageInfo;
};

export type PaginatedTournamentsResponse = {
  __typename?: 'PaginatedTournamentsResponse';
  edges: Array<TournamentEdge>;
  pageInfo: PageInfo;
};

export type PaginatedTransactionsResponse = {
  __typename?: 'PaginatedTransactionsResponse';
  edges: Array<TransactionEdge>;
  pageInfo: PageInfo;
};

export type PaginatedUserNoteResponse = {
  __typename?: 'PaginatedUserNoteResponse';
  edges: Array<UserNoteEdge>;
  pageInfo: PageInfo;
};

export type PaginatedUserPromoTicketResponse = {
  __typename?: 'PaginatedUserPromoTicketResponse';
  edges: Array<UserPromoTicketEdge>;
  pageInfo: PageInfo;
};

export type PaginatedWithdrawalsResponse = {
  __typename?: 'PaginatedWithdrawalsResponse';
  edges: Array<WithdrawalEdge>;
  pageInfo: PageInfo;
};

export type Paging = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  /** number of elements to return */
  first?: InputMaybe<Scalars['Int']>;
  /** number of elements to return */
  last?: InputMaybe<Scalars['Int']>;
};

export type ParticipantsInput = {
  paging?: InputMaybe<Paging>;
};

export type PassbaseEncryptedMetadataPayload = {
  __typename?: 'PassbaseEncryptedMetadataPayload';
  metadata: Scalars['String'];
};

export type PassbaseFlowDidCompletePayload = {
  __typename?: 'PassbaseFlowDidCompletePayload';
  user: ClientUser;
};

export type PaymentConfiguration = {
  __typename?: 'PaymentConfiguration';
  deposit: DepositConfiguration;
  withdrawal: WithdrawalConfiguration;
};

export enum PaymentGateway {
  Maverick = 'MAVERICK',
  Square = 'SQUARE'
}

export type PaymentInstrument = {
  __typename?: 'PaymentInstrument';
  brand: Scalars['String'];
  id: Scalars['ID'];
  last4: Scalars['String'];
  paymentSourceId: Scalars['String'];
};

export type PostalAddress = {
  __typename?: 'PostalAddress';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type ProblemInterface = {
  message: Scalars['String'];
};

export type PromoTicket = {
  __typename?: 'PromoTicket';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  key: Scalars['String'];
  maxUsageDurationDays?: Maybe<Scalars['Int']>;
  target: PromoTicketTarget;
  targetId?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PromoTicketBonus = {
  __typename?: 'PromoTicketBonus';
  enabled: Scalars['Boolean'];
  ticket: PromoTicket;
};

export type PromoTicketEdge = {
  __typename?: 'PromoTicketEdge';
  cursor: Scalars['String'];
  node: PromoTicket;
};

export type PromoTicketQueryInput = {
  amount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  key?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<PromoTicketTarget>;
};

export enum PromoTicketTarget {
  Match = 'MATCH',
  Tournament = 'TOURNAMENT'
}

export type PromoTicketsFilter = {
  target?: InputMaybe<PromoTicketTarget>;
};

export type PromoTicketsQueryInput = {
  filter?: InputMaybe<PromoTicketsFilter>;
  paging?: InputMaybe<Paging>;
  sort?: InputMaybe<PromoTicketsSort>;
};

export type PromoTicketsSort = {
  direction: SortDirection;
  field: PromoTicketsSortField;
};

export enum PromoTicketsSortField {
  Amount = 'AMOUNT',
  CreatedAt = 'CREATED_AT'
}

export enum PromoteTournamentError {
  InsufficientFunds = 'INSUFFICIENT_FUNDS',
  TournamentAlreadyFinished = 'TOURNAMENT_ALREADY_FINISHED',
  TournamentAlreadyPromoted = 'TOURNAMENT_ALREADY_PROMOTED',
  TournamentAlreadyStarted = 'TOURNAMENT_ALREADY_STARTED'
}

export type PromoteTournamentInput = {
  durationDays: Scalars['Int'];
  id: Scalars['ID'];
};

export type PromoteTournamentPayload = {
  __typename?: 'PromoteTournamentPayload';
  errors: Array<PromoteTournamentProblem>;
  tournament?: Maybe<Tournament>;
};

export type PromoteTournamentProblem = ProblemInterface & {
  __typename?: 'PromoteTournamentProblem';
  code: PromoteTournamentError;
  message: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  chatRoom: AnyChatRoom;
  deposit?: Maybe<Deposit>;
  deposits: PaginatedDepositsResponse;
  exploreSearch: PaginatedExploreSearchResponse;
  game: Game;
  getConfiguration: Configuration;
  getPassbaseEncryptedMetadata: PassbaseEncryptedMetadataPayload;
  legalJurisdiction: LegalJurisdictionPayload;
  marketingNotifications: PaginatedMarketingNotificationsResponse;
  marketingTournaments: PaginatedTournamentsResponse;
  match: Match;
  matchOffer: MatchOffer;
  matchOffers: PaginatedMatcheOffersResponse;
  matches: PaginatedMatchesResponse;
  me: AdminClientUser;
  oneUpTVItem: OneUpTvItem;
  oneUpTVItems: PaginatedOneUpTvItemResponse;
  promoTicket?: Maybe<PromoTicket>;
  promoTickets: PaginatedPromoTicketsResponse;
  supportTickets: PaginatedSupportTicketsResponse;
  system: System;
  tiers: GetTiersPaginatedResponse;
  tournament: Tournament;
  tournaments: PaginatedTournamentsResponse;
  user?: Maybe<AnyUser>;
  users: PaginatedAnyUserResponse;
  withdrawal?: Maybe<Withdrawal>;
  withdrawals: PaginatedWithdrawalsResponse;
};


export type QueryChatRoomArgs = {
  input: GetChatRoomInput;
};


export type QueryDepositArgs = {
  input: DepositQueryInput;
};


export type QueryDepositsArgs = {
  input: DepositsQueryInput;
};


export type QueryExploreSearchArgs = {
  input: ExploreSearchInput;
};


export type QueryGameArgs = {
  input: GetGameInput;
};


export type QueryLegalJurisdictionArgs = {
  input: LegalJurisdictionInput;
};


export type QueryMarketingNotificationsArgs = {
  input: MarketingNotificationsQueryInput;
};


export type QueryMarketingTournamentsArgs = {
  input: MarketingTournamentsQueryInput;
};


export type QueryMatchArgs = {
  input: MatchQueryInput;
};


export type QueryMatchOfferArgs = {
  input: MatchOfferInput;
};


export type QueryMatchOffersArgs = {
  input: MatchOffersQueryInput;
};


export type QueryMatchesArgs = {
  input: MatchesQueryInput;
};


export type QueryOneUpTvItemArgs = {
  input: OneUpTvItemQueryInput;
};


export type QueryOneUpTvItemsArgs = {
  input: OneUpTvItemsQueryInput;
};


export type QueryPromoTicketArgs = {
  input: PromoTicketQueryInput;
};


export type QueryPromoTicketsArgs = {
  input: PromoTicketsQueryInput;
};


export type QuerySupportTicketsArgs = {
  input: SupportTicketsQueryInput;
};


export type QuerySystemArgs = {
  input: GetSystemInput;
};


export type QueryTiersArgs = {
  input?: InputMaybe<GetTiersInput>;
};


export type QueryTournamentArgs = {
  input: TournamentQueryInput;
};


export type QueryTournamentsArgs = {
  input: TournamentsQueryInput;
};


export type QueryUserArgs = {
  input: GetUserQueryInput;
};


export type QueryUsersArgs = {
  input: UserQueryInput;
};


export type QueryWithdrawalArgs = {
  input: QueryWithdrawalInput;
};


export type QueryWithdrawalsArgs = {
  input?: InputMaybe<WithdrawalsQueryInput>;
};

export type QueryWithdrawalInput = {
  id: Scalars['String'];
};

export type RecentSearch = {
  __typename?: 'RecentSearch';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  value: ExploreSearchResultUnion;
};

export type RecentSearchEdge = {
  __typename?: 'RecentSearchEdge';
  cursor: Scalars['String'];
  node: RecentSearch;
};

export type RecentSearchesInput = {
  category?: InputMaybe<ExploreSearchCategory>;
  paging?: InputMaybe<Paging>;
};

export type RecentSearchesPaginatedResponse = {
  __typename?: 'RecentSearchesPaginatedResponse';
  edges: Array<RecentSearchEdge>;
  pageInfo: PageInfo;
};

export enum RefundDepositError {
  DepositNotRefundable = 'DEPOSIT_NOT_REFUNDABLE',
  UserHasInsufficientBalance = 'USER_HAS_INSUFFICIENT_BALANCE'
}

export type RefundDepositInput = {
  id: Scalars['ID'];
};

export type RefundDepositPayload = {
  __typename?: 'RefundDepositPayload';
  deposit?: Maybe<Deposit>;
  errors: Array<RefundDepositProblem>;
};

export type RefundDepositProblem = ProblemInterface & {
  __typename?: 'RefundDepositProblem';
  code: RefundDepositError;
  message: Scalars['String'];
};

export type RefundUserPromoTicketInput = {
  userPromoTicketId: Scalars['ID'];
};

export type RefundUserPromoTicketPayload = {
  __typename?: 'RefundUserPromoTicketPayload';
  userPromoTicket?: Maybe<UserPromoTicket>;
};

export enum Region {
  Ak = 'AK',
  Al = 'AL',
  Ar = 'AR',
  Az = 'AZ',
  Ca = 'CA',
  Co = 'CO',
  Ct = 'CT',
  De = 'DE',
  Fl = 'FL',
  Ga = 'GA',
  Hi = 'HI',
  Ia = 'IA',
  Id = 'ID',
  Il = 'IL',
  In = 'IN',
  Ks = 'KS',
  Ky = 'KY',
  La = 'LA',
  Ma = 'MA',
  Md = 'MD',
  Me = 'ME',
  Mi = 'MI',
  Mn = 'MN',
  Mo = 'MO',
  Ms = 'MS',
  Mt = 'MT',
  Nc = 'NC',
  Nd = 'ND',
  Ne = 'NE',
  Nh = 'NH',
  Nj = 'NJ',
  Nm = 'NM',
  Nv = 'NV',
  Ny = 'NY',
  Oh = 'OH',
  Ok = 'OK',
  Or = 'OR',
  Pa = 'PA',
  Ri = 'RI',
  Sc = 'SC',
  Sd = 'SD',
  Tn = 'TN',
  Tx = 'TX',
  Ut = 'UT',
  Va = 'VA',
  Vt = 'VT',
  Wa = 'WA',
  Wi = 'WI',
  Wv = 'WV',
  Wy = 'WY'
}

export enum RejectMatchOfferJoinerError {
  MatchOfferAlreadyCanceled = 'MATCH_OFFER_ALREADY_CANCELED',
  MatchOfferCompleted = 'MATCH_OFFER_COMPLETED',
  MatchOfferOpen = 'MATCH_OFFER_OPEN'
}

export type RejectMatchOfferJoinerInput = {
  id: Scalars['ID'];
};

export type RejectMatchOfferJoinerPayload = {
  __typename?: 'RejectMatchOfferJoinerPayload';
  errors: Array<RejectMatchOfferJoinerProblem>;
  matchOffer?: Maybe<MatchOffer>;
};

export type RejectMatchOfferJoinerProblem = ProblemInterface & {
  __typename?: 'RejectMatchOfferJoinerProblem';
  code: RejectMatchOfferJoinerError;
  message: Scalars['String'];
};

export enum RejectUserIdentityError {
  InvalidUserIdentityRejectionReason = 'INVALID_USER_IDENTITY_REJECTION_REASON',
  InvalidUserIdentityStatus = 'INVALID_USER_IDENTITY_STATUS'
}

export type RejectUserIdentityInput = {
  id: Scalars['ID'];
};

export type RejectUserIdentityPayload = {
  __typename?: 'RejectUserIdentityPayload';
  errors: Array<RejectUserIdentityProblem>;
  user?: Maybe<ClientUser>;
};

export type RejectUserIdentityProblem = ProblemInterface & {
  __typename?: 'RejectUserIdentityProblem';
  code: RejectUserIdentityError;
  message: Scalars['String'];
};

export type RemoveCardInput = {
  id: Scalars['ID'];
  userId: Scalars['ID'];
};

export type RemoveCardPayload = {
  __typename?: 'RemoveCardPayload';
  card: PaymentInstrument;
};

export type RemoveFcmTokenInput = {
  platform: ClientPlatform;
  token: Scalars['String'];
};

export type RemoveFcmTokenPayload = {
  __typename?: 'RemoveFcmTokenPayload';
  user: ClientUser;
};

export type RemoveOneUpTvItemInput = {
  id: Scalars['ID'];
};

export type RemoveOneUpTvItemPayload = {
  __typename?: 'RemoveOneUpTVItemPayload';
  id: Scalars['ID'];
};

export enum RemoveSubscriptionPlanError {
  SubscriptionPlanNotFound = 'SUBSCRIPTION_PLAN_NOT_FOUND'
}

export type RemoveSubscriptionPlanInput = {
  subscriptionPlanId: Scalars['String'];
};

export type RemoveSubscriptionPlanPayload = {
  __typename?: 'RemoveSubscriptionPlanPayload';
  errors: Array<RemoveSubscriptionPlanProblem>;
  subscriptionPlan?: Maybe<SubscriptionPlan>;
};

export type RemoveSubscriptionPlanProblem = ProblemInterface & {
  __typename?: 'RemoveSubscriptionPlanProblem';
  code: RemoveSubscriptionPlanError;
  message: Scalars['String'];
};

export enum RemoveTournamentPlayerError {
  NotTournamentPlayer = 'NOT_TOURNAMENT_PLAYER',
  TournamentAlreadyStarted = 'TOURNAMENT_ALREADY_STARTED'
}

export type RemoveTournamentPlayerInput = {
  tournamentId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type RemoveTournamentPlayerPayload = {
  __typename?: 'RemoveTournamentPlayerPayload';
  errors: Array<RemoveTournamentPlayerProblem>;
  tournament?: Maybe<Tournament>;
};

export type RemoveTournamentPlayerProblem = ProblemInterface & {
  __typename?: 'RemoveTournamentPlayerProblem';
  code: RemoveTournamentPlayerError;
  message: Scalars['String'];
};

export type RemoveUserPromoTicketInput = {
  userId: Scalars['ID'];
  userPromoTicketId: Scalars['ID'];
};

export type RemoveUserPromoTicketPayload = {
  __typename?: 'RemoveUserPromoTicketPayload';
  userPromoTicket: UserPromoTicket;
};

export enum RemoveUserSystemGame {
  UserDoesNotHaveGame = 'USER_DOES_NOT_HAVE_GAME',
  UserDoesNotHaveSystem = 'USER_DOES_NOT_HAVE_SYSTEM'
}

export type RemoveUserSystemGameInput = {
  gameId: Scalars['String'];
  systemId: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type RemoveUserSystemGamePayload = {
  __typename?: 'RemoveUserSystemGamePayload';
  errors: Array<RemoveUserSystemGameProblem>;
  user?: Maybe<ClientUser>;
};

export type RemoveUserSystemGameProblem = ProblemInterface & {
  __typename?: 'RemoveUserSystemGameProblem';
  code: RemoveUserSystemGame;
  message: Scalars['String'];
};

export type RemoveUserSystemInput = {
  systemId: Scalars['ID'];
  userId?: InputMaybe<Scalars['ID']>;
};

export type RemoveUserSystemPayload = {
  __typename?: 'RemoveUserSystemPayload';
  user: ClientUser;
};

export enum ReplyFollowRequestError {
  UserFollowNotRequested = 'USER_FOLLOW_NOT_REQUESTED'
}

export type ReplyFollowRequestInput = {
  accept: Scalars['Boolean'];
  fromId: Scalars['ID'];
  toId?: InputMaybe<Scalars['ID']>;
};

export type ReplyFollowRequestPayload = {
  __typename?: 'ReplyFollowRequestPayload';
  errors: Array<ReplyFollowRequestProblem>;
  followState?: Maybe<FollowState>;
};

export type ReplyFollowRequestProblem = ProblemInterface & {
  __typename?: 'ReplyFollowRequestProblem';
  code: ReplyFollowRequestError;
  message: Scalars['String'];
};

export type ResetPasswordInput = {
  email?: InputMaybe<Scalars['String']>;
  newPassword: Scalars['String'];
  otp: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};

export type ResetPasswordPayload = {
  __typename?: 'ResetPasswordPayload';
  result: ResetPasswordResult;
  totpQrCodeUrl?: Maybe<Scalars['String']>;
};

export enum ResetPasswordResult {
  InvalidCredentials = 'INVALID_CREDENTIALS',
  PasswordNotResettable = 'PASSWORD_NOT_RESETTABLE',
  RateLimitError = 'RATE_LIMIT_ERROR',
  TotpCodeRequired = 'TOTP_CODE_REQUIRED',
  TotpSetupRequired = 'TOTP_SETUP_REQUIRED'
}

export type ResetUserIdentityInput = {
  id: Scalars['ID'];
};

export type ResetUserIdentityPayload = {
  __typename?: 'ResetUserIdentityPayload';
  user?: Maybe<ClientUser>;
};

export enum ResetUserTotpError {
  InvalidUserId = 'INVALID_USER_ID',
  NoTotp = 'NO_TOTP'
}

export type ResetUserTotpInput = {
  id: Scalars['ID'];
};

export type ResetUserTotpPayload = {
  __typename?: 'ResetUserTotpPayload';
  errors: Array<ResetUserTotpProblem>;
};

export type ResetUserTotpProblem = ProblemInterface & {
  __typename?: 'ResetUserTotpProblem';
  code: ResetUserTotpError;
  message: Scalars['String'];
};

export enum ResubmitTournamentForReviewError {
  TournamentNotRejected = 'TOURNAMENT_NOT_REJECTED',
  TournamentNotRejectedWithResubmittableReason = 'TOURNAMENT_NOT_REJECTED_WITH_RESUBMITTABLE_REASON'
}

export type ResubmitTournamentForReviewInput = {
  tournamentId: Scalars['ID'];
};

export type ResubmitTournamentForReviewPayload = {
  __typename?: 'ResubmitTournamentForReviewPayload';
  errors: Array<ResubmitTournamentForReviewProblem>;
  tournament?: Maybe<Tournament>;
};

export type ResubmitTournamentForReviewProblem = ProblemInterface & {
  __typename?: 'ResubmitTournamentForReviewProblem';
  code: ResubmitTournamentForReviewError;
  message: Scalars['String'];
};

export enum ReviewBusinessAccessRequestDeclineReason {
  CandidateNotInterested = 'CANDIDATE_NOT_INTERESTED',
  CandidateViolatedTos = 'CANDIDATE_VIOLATED_TOS',
  UnsuitableCandidate = 'UNSUITABLE_CANDIDATE'
}

export enum ReviewBusinessAccessRequestError {
  BusinessAccessRequestAlreadyApproved = 'BUSINESS_ACCESS_REQUEST_ALREADY_APPROVED',
  BusinessAccessRequestReviewedAfterBusinessCreation = 'BUSINESS_ACCESS_REQUEST_REVIEWED_AFTER_BUSINESS_CREATION',
  CantDenyUnrequestedBusinessAccess = 'CANT_DENY_UNREQUESTED_BUSINESS_ACCESS'
}

export type ReviewBusinessAccessRequestInput = {
  approve: Scalars['Boolean'];
  reason?: InputMaybe<ReviewBusinessAccessRequestDeclineReason>;
  userId: Scalars['String'];
};

export type ReviewBusinessAccessRequestPayload = {
  __typename?: 'ReviewBusinessAccessRequestPayload';
  accessRequest?: Maybe<BusinessAccessRequest>;
  errors: Array<ReviewBusinessAccessRequestProblem>;
};

export type ReviewBusinessAccessRequestProblem = ProblemInterface & {
  __typename?: 'ReviewBusinessAccessRequestProblem';
  code: ReviewBusinessAccessRequestError;
  message: Scalars['String'];
};

export enum ReviewCreatorProgramApplicationError {
  ApplicationAlreadyReviewed = 'APPLICATION_ALREADY_REVIEWED'
}

export type ReviewCreatorProgramApplicationInput = {
  approved: Scalars['Boolean'];
  userId: Scalars['ID'];
};

export type ReviewCreatorProgramApplicationPayload = {
  __typename?: 'ReviewCreatorProgramApplicationPayload';
  application?: Maybe<CreatorProgramApplication>;
  errors: Array<ReviewCreatorProgramApplicationProblem>;
};

export type ReviewCreatorProgramApplicationProblem = ProblemInterface & {
  __typename?: 'ReviewCreatorProgramApplicationProblem';
  code: ReviewCreatorProgramApplicationError;
  message: Scalars['String'];
};

export enum ReviewMatchOfferConditionsError {
  MatchOfferConditionsApproved = 'MATCH_OFFER_CONDITIONS_APPROVED',
  MatchOfferConditionsCreator = 'MATCH_OFFER_CONDITIONS_CREATOR',
  MatchOfferConditionsRejected = 'MATCH_OFFER_CONDITIONS_REJECTED',
  MatchOfferConditionsReplaced = 'MATCH_OFFER_CONDITIONS_REPLACED',
  MatchOfferStatusCanceled = 'MATCH_OFFER_STATUS_CANCELED'
}

export type ReviewMatchOfferConditionsInput = {
  approve: Scalars['Boolean'];
  id: Scalars['ID'];
};

export type ReviewMatchOfferConditionsPayload = {
  __typename?: 'ReviewMatchOfferConditionsPayload';
  errors: Array<ReviewMatchOfferConditionsProblem>;
  matchOfferConditions?: Maybe<MatchOfferConditions>;
};

export type ReviewMatchOfferConditionsProblem = ProblemInterface & {
  __typename?: 'ReviewMatchOfferConditionsProblem';
  code: ReviewMatchOfferConditionsError;
  message: Scalars['String'];
};

export enum ReviewMatchOfferInviteError {
  MatchOfferCanceled = 'MATCH_OFFER_CANCELED',
  MatchOfferCompleted = 'MATCH_OFFER_COMPLETED',
  MatchOfferInviteAlreadyReviewed = 'MATCH_OFFER_INVITE_ALREADY_REVIEWED',
  UserNotInivted = 'USER_NOT_INIVTED'
}

export type ReviewMatchOfferInviteInput = {
  approve: Scalars['Boolean'];
  id: Scalars['ID'];
};

export type ReviewMatchOfferInvitePayload = {
  __typename?: 'ReviewMatchOfferInvitePayload';
  errors: Array<ReviewMatchOfferInviteProblem>;
  matchOffer?: Maybe<MatchOffer>;
};

export type ReviewMatchOfferInviteProblem = ProblemInterface & {
  __typename?: 'ReviewMatchOfferInviteProblem';
  code: ReviewMatchOfferInviteError;
  message: Scalars['String'];
};

export enum ReviewTournamentError {
  TournamentAlreadyApproved = 'TOURNAMENT_ALREADY_APPROVED'
}

export type ReviewTournamentInput = {
  approve: Scalars['Boolean'];
  id: Scalars['ID'];
  reasons: Array<ReviewTournamentRejectReason>;
};

export type ReviewTournamentPayload = {
  __typename?: 'ReviewTournamentPayload';
  errors: Array<ReviewTournamentProblem>;
  tournament?: Maybe<Tournament>;
};

export type ReviewTournamentProblem = ProblemInterface & {
  __typename?: 'ReviewTournamentProblem';
  code: ReviewTournamentError;
  message: Scalars['String'];
};

export enum ReviewTournamentRejectReason {
  InappropriateBusinessAvatarImage = 'INAPPROPRIATE_BUSINESS_AVATAR_IMAGE',
  InappropriateBusinessBio = 'INAPPROPRIATE_BUSINESS_BIO',
  InappropriateBusinessCoverImage = 'INAPPROPRIATE_BUSINESS_COVER_IMAGE',
  InappropriateBusinessUsername = 'INAPPROPRIATE_BUSINESS_USERNAME',
  InappropriateCoverImage = 'INAPPROPRIATE_COVER_IMAGE',
  InappropriateDescription = 'INAPPROPRIATE_DESCRIPTION',
  InappropriateTitle = 'INAPPROPRIATE_TITLE',
  IncompleteBusinessProfile = 'INCOMPLETE_BUSINESS_PROFILE',
  MissingBusinessAvatar = 'MISSING_BUSINESS_AVATAR',
  MissingBusinessCoverImage = 'MISSING_BUSINESS_COVER_IMAGE'
}

export enum Role {
  Admin = 'ADMIN',
  Business = 'BUSINESS',
  System = 'SYSTEM',
  User = 'USER'
}

export type RoundMatchField = {
  __typename?: 'RoundMatchField';
  id: Scalars['ID'];
  name: Scalars['String'];
  value: TournamentFieldValue;
};

export type RoundMatchFieldInput = {
  field: Scalars['ID'];
  value: Scalars['ID'];
};

export type RoundMatchFields = {
  __typename?: 'RoundMatchFields';
  fields: Array<RoundMatchField>;
};

export type RoundMatchFieldsInput = {
  fields: Array<RoundMatchFieldInput>;
};

export type RoundsMatchFieldsInput = {
  rounds: Array<RoundMatchFieldsInput>;
};

export type Rule = {
  __typename?: 'Rule';
  body: Scalars['String'];
  title: Scalars['String'];
};

export type RulesConfiguration = {
  __typename?: 'RulesConfiguration';
  houseRules: Array<Rule>;
  tournamentRules: Array<Rule>;
};

export enum SendMarketingNotificationError {
  InvalidDeeplink = 'INVALID_DEEPLINK'
}

export type SendMarketingNotificationInput = {
  body: Scalars['String'];
  deeplinkId?: InputMaybe<Scalars['ID']>;
  deeplinkRoute: MarketingNotificationDeeplinkRoute;
  platform?: InputMaybe<ClientPlatform>;
  sendAt?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
};

export type SendMarketingNotificationPayload = {
  __typename?: 'SendMarketingNotificationPayload';
  errors: Array<SendMarketingNotificationProblem>;
  notification?: Maybe<MarketingNotification>;
};

export type SendMarketingNotificationProblem = ProblemInterface & {
  __typename?: 'SendMarketingNotificationProblem';
  code: SendMarketingNotificationError;
  message: Scalars['String'];
};

export enum SendPhoneVerificationCodeError {
  RateLimitReached = 'RATE_LIMIT_REACHED',
  UserAlreadySignedup = 'USER_ALREADY_SIGNEDUP'
}

export type SendPhoneVerificationCodeInput = {
  phone: Scalars['String'];
};

export type SendPhoneVerificationCodePayload = {
  __typename?: 'SendPhoneVerificationCodePayload';
  code?: Maybe<Scalars['String']>;
  errors: Array<SendPhoneVerificationCodeProblem>;
};

export type SendPhoneVerificationCodeProblem = ProblemInterface & {
  __typename?: 'SendPhoneVerificationCodeProblem';
  code: SendPhoneVerificationCodeError;
  message: Scalars['String'];
};

export type SetDefaultCardInput = {
  id: Scalars['ID'];
  userId: Scalars['ID'];
};

export type SetDefaultCardPayload = {
  __typename?: 'SetDefaultCardPayload';
  card: PaymentInstrument;
};

export enum SetMatchOfferPlayerFieldsError {
  InvalidPlayerFields = 'INVALID_PLAYER_FIELDS',
  MatchOfferCompleted = 'MATCH_OFFER_COMPLETED',
  PendingMatchOfferConditions = 'PENDING_MATCH_OFFER_CONDITIONS'
}

export type SetMatchOfferPlayerFieldsInput = {
  fields: Array<MatchFieldInput>;
  id: Scalars['ID'];
};

export type SetMatchOfferPlayerFieldsPayload = {
  __typename?: 'SetMatchOfferPlayerFieldsPayload';
  errors: Array<SetMatchOfferPlayerFieldsProblem>;
  matchOffer?: Maybe<MatchOffer>;
};

export type SetMatchOfferPlayerFieldsProblem = ProblemInterface & {
  __typename?: 'SetMatchOfferPlayerFieldsProblem';
  code: SetMatchOfferPlayerFieldsError;
  message: Scalars['String'];
};

export type ShareLink = {
  __typename?: 'ShareLink';
  description: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export enum SortDirection {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING'
}

export type StreamingAccount = {
  __typename?: 'StreamingAccount';
  id: Scalars['ID'];
  service: StreamingService;
  username: Scalars['String'];
};

export enum StreamingService {
  Twitch = 'TWITCH',
  Youtube = 'YOUTUBE'
}

export enum SubRole {
  Finance = 'FINANCE',
  Fraud = 'FRAUD',
  Marketing = 'MARKETING',
  Master = 'MASTER',
  Review = 'REVIEW',
  Support = 'SUPPORT'
}

export type SubscriptionPlan = {
  __typename?: 'SubscriptionPlan';
  entitlementId: Scalars['String'];
  id: Scalars['ID'];
  isBase: Scalars['Boolean'];
  isPopular: Scalars['Boolean'];
  monthlyUsageLimits: SubscriptionPlanMonthlyUsageLimits;
  productIds: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type SubscriptionPlanInput = {
  entitlementId: Scalars['String'];
  isBase?: InputMaybe<Scalars['Boolean']>;
  isPopular: Scalars['Boolean'];
  monthlyUsageLimits: UpsertSubscriptionPlanUsageLimitsInput;
  productIds: Array<Scalars['String']>;
  subscriptionPlanId?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type SubscriptionPlanMonthlyUsageLimits = {
  __typename?: 'SubscriptionPlanMonthlyUsageLimits';
  maxNumberOfPlayers: Scalars['Int'];
  maxNumberOfTournaments: Scalars['Int'];
};

export type SupportTicket = {
  __typename?: 'SupportTicket';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lastMessage?: Maybe<Scalars['String']>;
  status: SupportTicketStatus;
  subject: Scalars['String'];
  target: SupportTicketTarget;
  targetId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['ID'];
  zendeskId: Scalars['String'];
};

export type SupportTicketEdge = {
  __typename?: 'SupportTicketEdge';
  cursor: Scalars['String'];
  node: SupportTicket;
};

export enum SupportTicketStatus {
  Closed = 'CLOSED',
  New = 'NEW',
  Open = 'OPEN',
  Pending = 'PENDING',
  Solved = 'SOLVED'
}

export enum SupportTicketTarget {
  Deposit = 'DEPOSIT',
  Match = 'MATCH',
  Tournament = 'TOURNAMENT',
  User = 'USER',
  Withdrawal = 'WITHDRAWAL'
}

export type SupportTicketsFilter = {
  statusIn?: InputMaybe<Array<SupportTicketStatus>>;
  target?: InputMaybe<SupportTicketTarget>;
  targetId?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type SupportTicketsQueryInput = {
  filter?: InputMaybe<SupportTicketsFilter>;
  paging?: InputMaybe<Paging>;
  sort?: InputMaybe<SupportTicketsSort>;
};

export type SupportTicketsSort = {
  direction: SortDirection;
  field: SupportTicketsSortField;
};

export enum SupportTicketsSortField {
  CreatedAt = 'CREATED_AT'
}

export type System = {
  __typename?: 'System';
  active: Scalars['Boolean'];
  addFriendInstructions: Array<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  network?: Maybe<Scalars['String']>;
  recordInstructions: Array<Scalars['String']>;
  systemImage?: Maybe<Scalars['String']>;
  tagName?: Maybe<Scalars['String']>;
};

export type SystemClientUser = ClientUser | SystemUser;

export type SystemClientUserEdge = {
  __typename?: 'SystemClientUserEdge';
  cursor: Scalars['String'];
  node: SystemClientUser;
};

export type SystemInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  addFriendInstructions?: InputMaybe<Array<Scalars['String']>>;
  icon?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  network?: InputMaybe<Scalars['String']>;
  recordInstructions?: InputMaybe<Array<Scalars['String']>>;
  systemImage?: InputMaybe<Scalars['String']>;
  tagName?: InputMaybe<Scalars['String']>;
};

export type SystemUser = User & {
  __typename?: 'SystemUser';
  createdAt: Scalars['DateTime'];
  face: Face;
  id: Scalars['ID'];
  role: Role;
  updatedAt: Scalars['DateTime'];
};

export type Ticket = {
  __typename?: 'Ticket';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Tier = {
  __typename?: 'Tier';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type TierInput = {
  name: Scalars['String'];
};

export type TiersEdge = {
  __typename?: 'TiersEdge';
  cursor: Scalars['String'];
  node: Tier;
};

export type Tournament = {
  __typename?: 'Tournament';
  PrizeWinnerIdArr: Array<Scalars['ID']>;
  _shareLink: ShareLink;
  accessibleByLink: Scalars['Boolean'];
  adjustPrizePoolOnAutofill: Scalars['Boolean'];
  applicableUserPromoTicket?: Maybe<UserPromoTicket>;
  autoFillTournamentOnStart: Scalars['Boolean'];
  coverImage: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdBy: AnyUser;
  createdById: Scalars['ID'];
  currentNumberOfPlayers: Scalars['Int'];
  currentRound: Scalars['Int'];
  days: Array<TournamentDay>;
  description: Scalars['String'];
  game: Game;
  id: Scalars['ID'];
  image: Scalars['String'];
  invites: PaginatedClientUserResponse;
  isOnline: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  joined: Scalars['Boolean'];
  liveStreams: Array<OneUpTvMatchItem>;
  myMatchHistory: Array<Match>;
  myUpcomingMatch?: Maybe<Match>;
  numberOfLiveStreams: Scalars['Int'];
  playerIdArr: Array<Scalars['ID']>;
  players: PaginatedSystemClientUserResponse;
  prizeWinnerIdArr: Array<Scalars['ID']>;
  prizes: Array<Scalars['Int']>;
  promotion?: Maybe<TournamentPromotion>;
  review: TournamentReview;
  reviewStatus: Scalars['String'];
  round: TournamentRound;
  roundMatchFields: Array<RoundMatchFields>;
  rounds: Array<TournamentRound>;
  /** @deprecated Please use _shareLink */
  shareLink: Scalars['String'];
  stakes: Scalars['Int'];
  startType: TournamentStartType;
  status: TournamentStatus;
  system: System;
  timeConfig: TournamentTimeConfig;
  title: Scalars['String'];
  totalNumberOfPlayers: Scalars['Int'];
  tournamentStream?: Maybe<OneUpTvTournamentItem>;
  updatedAt: Scalars['DateTime'];
  winners: Array<SystemClientUser>;
};


export type TournamentInvitesArgs = {
  input: TournamentInvitesQueryInput;
};


export type TournamentPlayersArgs = {
  input: TournamentPlayersQueryInput;
};


export type TournamentRoundArgs = {
  input: TournamentRoundInput;
};

export type TournamentChatRoom = ChatRoom & {
  __typename?: 'TournamentChatRoom';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lastMessage?: Maybe<AnyChatMessage>;
  numberOfParticipants: Scalars['Int'];
  participantIds: Array<Scalars['ID']>;
  participants: PaginatedAnyUserResponse;
  tournament: Tournament;
  updatedAt: Scalars['DateTime'];
};


export type TournamentChatRoomParticipantsArgs = {
  input?: InputMaybe<ParticipantsInput>;
};

export type TournamentConfigInput = {
  initialJoinTimeMinutes: Scalars['Int'];
  joinTimeMinutes: Scalars['Int'];
  matchTimeMinutes: Scalars['Int'];
  reviewTimeMinutes: Scalars['Int'];
  roundCreateDelayMinutes: Scalars['Int'];
};

export type TournamentConfiguration = {
  __typename?: 'TournamentConfiguration';
  config: TournamentDefaultConfiguration;
  promotion: TournamentPromotionConfiguration;
  serviceFee: Scalars['Float'];
};

export enum TournamentCreateError {
  NumberOfPlayersExceedsUsageLimit = 'NUMBER_OF_PLAYERS_EXCEEDS_USAGE_LIMIT',
  NumberOfTournamentsExceedsUsageLimit = 'NUMBER_OF_TOURNAMENTS_EXCEEDS_USAGE_LIMIT',
  PendingTournamentAlreadyExists = 'PENDING_TOURNAMENT_ALREADY_EXISTS',
  UserNotSubscribed = 'USER_NOT_SUBSCRIBED'
}

export type TournamentDay = {
  __typename?: 'TournamentDay';
  rounds: Scalars['Int'];
  startDate: Scalars['DateTime'];
};

export type TournamentDayInput = {
  rounds: Scalars['Int'];
  startDate: Scalars['DateTime'];
};

export type TournamentDaysInput = {
  days: Array<TournamentDayInput>;
};

export type TournamentDefaultConfiguration = {
  __typename?: 'TournamentDefaultConfiguration';
  initialJoinTime: TournamentDefaultConfigurationInitialJoinTime;
  joinTime: Scalars['Int'];
  leaveBeforeStartTime: Scalars['Int'];
  matchTime: Scalars['Int'];
  reviewTime: Scalars['Int'];
};

export type TournamentDefaultConfigurationInitialJoinTime = {
  __typename?: 'TournamentDefaultConfigurationInitialJoinTime';
  startWhenFilled: Scalars['Int'];
  timed: Scalars['Int'];
};

export type TournamentEdge = {
  __typename?: 'TournamentEdge';
  cursor: Scalars['String'];
  node: Tournament;
};

export type TournamentFieldValue = {
  __typename?: 'TournamentFieldValue';
  iconUrl: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  number: Scalars['Int'];
};

export type TournamentInvitesQueryInput = {
  paging: Paging;
};

export type TournamentPlayersQueryInput = {
  paging: Paging;
};

export type TournamentPromotion = {
  __typename?: 'TournamentPromotion';
  durationDays: Scalars['Int'];
  expiresAt: Scalars['DateTime'];
};

export type TournamentPromotionConfiguration = {
  __typename?: 'TournamentPromotionConfiguration';
  costPerDay: Scalars['Int'];
};

export type TournamentQueryInput = {
  id: Scalars['ID'];
};

export type TournamentReview = {
  __typename?: 'TournamentReview';
  reasons: Array<ReviewTournamentRejectReason>;
  status: TournamentReviewStatus;
};

export enum TournamentReviewStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type TournamentRound = {
  __typename?: 'TournamentRound';
  matches: Array<Match>;
  roundCompleted: Scalars['Boolean'];
};

export type TournamentRoundInput = {
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  roundIndex: Scalars['Int'];
};

export enum TournamentSearchFilterField {
  CreatorId = 'CREATOR_ID',
  CreatorOneUpId = 'CREATOR_ONE_UP_ID',
  TournamentId = 'TOURNAMENT_ID'
}

export type TournamentSearchFilterInput = {
  searchFields: Array<TournamentSearchFilterField>;
  searchTerm: Scalars['String'];
};

export enum TournamentStartType {
  OnDemand = 'ON_DEMAND',
  Planned = 'PLANNED'
}

export enum TournamentStatus {
  Canceled = 'CANCELED',
  Filled = 'FILLED',
  Finished = 'FINISHED',
  Open = 'OPEN',
  PayoutCompleted = 'PAYOUT_COMPLETED',
  Running = 'RUNNING'
}

export type TournamentTimeConfig = {
  __typename?: 'TournamentTimeConfig';
  initialJoinTimeMinutes: Scalars['Int'];
  joinTimeMinutes: Scalars['Int'];
  matchTimeMinutes: Scalars['Int'];
  reviewTimeMinutes: Scalars['Int'];
  roundCreateDelayMinutes: Scalars['Int'];
};

export type TournamentsFilter = {
  createdBy?: InputMaybe<Scalars['ID']>;
  feed?: InputMaybe<Scalars['Boolean']>;
  game?: InputMaybe<Scalars['ID']>;
  hasLiveStreams?: InputMaybe<Scalars['Boolean']>;
  idIn?: InputMaybe<Array<Scalars['ID']>>;
  reviewStatusIn?: InputMaybe<Array<TournamentReviewStatus>>;
  search?: InputMaybe<TournamentSearchFilterInput>;
  statusIn?: InputMaybe<Array<TournamentStatus>>;
  system?: InputMaybe<Scalars['ID']>;
  userInPlayers?: InputMaybe<Scalars['ID']>;
};

export type TournamentsQueryInput = {
  filter?: InputMaybe<TournamentsFilter>;
  paging?: InputMaybe<Paging>;
  sort?: InputMaybe<TournamentsSort>;
};

export type TournamentsSort = {
  direction: SortDirection;
  field: TournamentsSortField;
};

export enum TournamentsSortField {
  CreatedAt = 'CREATED_AT',
  StartsAt = 'STARTS_AT'
}

export type Transaction = {
  __typename?: 'Transaction';
  amount: Scalars['Int'];
  balance: Scalars['Int'];
  code: TransactionCode;
  createdAt: Scalars['DateTime'];
  entityRefId?: Maybe<Scalars['ID']>;
  entityType?: Maybe<TransactionEntityType>;
  id: Scalars['ID'];
  reason?: Maybe<Scalars['String']>;
};

export enum TransactionCode {
  BalanceUpdatedByAdmin = 'BALANCE_UPDATED_BY_ADMIN',
  DepositCreated = 'DEPOSIT_CREATED',
  DepositRefund = 'DEPOSIT_REFUND',
  GiftcardUsed = 'GIFTCARD_USED',
  MatchCanceled = 'MATCH_CANCELED',
  MatchLeft = 'MATCH_LEFT',
  MatchStakesReturned = 'MATCH_STAKES_RETURNED',
  MatchStarted = 'MATCH_STARTED',
  MatchStartedWithTicket = 'MATCH_STARTED_WITH_TICKET',
  MatchWon = 'MATCH_WON',
  RewardCashPayedOut = 'REWARD_CASH_PAYED_OUT',
  RewardPromotionPayedOut = 'REWARD_PROMOTION_PAYED_OUT',
  TournamentCanceled = 'TOURNAMENT_CANCELED',
  TournamentCommissionPayedOut = 'TOURNAMENT_COMMISSION_PAYED_OUT',
  TournamentJoined = 'TOURNAMENT_JOINED',
  TournamentLeft = 'TOURNAMENT_LEFT',
  TournamentPrizePayedOut = 'TOURNAMENT_PRIZE_PAYED_OUT',
  TournamentPromoted = 'TOURNAMENT_PROMOTED',
  Unknown = 'UNKNOWN',
  WithdrawalCanceled = 'WITHDRAWAL_CANCELED',
  WithdrawalCreated = 'WITHDRAWAL_CREATED',
  WithdrawalDeclined = 'WITHDRAWAL_DECLINED'
}

export type TransactionEdge = {
  __typename?: 'TransactionEdge';
  cursor: Scalars['String'];
  node: Transaction;
};

export enum TransactionEntityType {
  Deposit = 'DEPOSIT',
  Match = 'MATCH',
  Reward = 'REWARD',
  Tournament = 'TOURNAMENT',
  User = 'USER',
  Withdrawal = 'WITHDRAWAL'
}

export type TransactionInput = {
  amount: Scalars['Int'];
  code: TransactionCode;
  entityRefId?: InputMaybe<Scalars['ID']>;
  entityType?: InputMaybe<TransactionEntityType>;
  reason?: InputMaybe<Scalars['String']>;
};

export enum UnfollowError {
  UserNotFollowed = 'USER_NOT_FOLLOWED'
}

export type UnfollowInput = {
  fromId?: InputMaybe<Scalars['ID']>;
  toId: Scalars['ID'];
};

export type UnfollowPayload = {
  __typename?: 'UnfollowPayload';
  errors: Array<UnfollowProblem>;
  followState?: Maybe<FollowState>;
};

export type UnfollowProblem = ProblemInterface & {
  __typename?: 'UnfollowProblem';
  code: UnfollowError;
  message: Scalars['String'];
};

export enum UninviteTournamentPlayerError {
  TournamentAlreadyFinished = 'TOURNAMENT_ALREADY_FINISHED',
  TournamentAlreadyStarted = 'TOURNAMENT_ALREADY_STARTED',
  UserIsNotInvited = 'USER_IS_NOT_INVITED'
}

export type UninviteTournamentPlayerInput = {
  tournamentId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type UninviteTournamentPlayerPayload = {
  __typename?: 'UninviteTournamentPlayerPayload';
  errors: Array<UninviteTournamentPlayerProblem>;
  tournament?: Maybe<Tournament>;
};

export type UninviteTournamentPlayerProblem = ProblemInterface & {
  __typename?: 'UninviteTournamentPlayerProblem';
  code: UninviteTournamentPlayerError;
  message: Scalars['String'];
};

export type UnlockProgress = {
  __typename?: 'UnlockProgress';
  progress: Scalars['Int'];
  total: Scalars['Int'];
};

export type UpdateAdminUserInput = {
  id: Scalars['ID'];
  subRoles: Array<SubRole>;
};

export type UpdateAdminUserPayload = {
  __typename?: 'UpdateAdminUserPayload';
  user: AdminUser;
};

export type UpdateBusinessAttributesInput = {
  avatarImage?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  coverImage?: InputMaybe<Scalars['String']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  oneUpId?: InputMaybe<Scalars['String']>;
  tournamentFocus?: InputMaybe<BusinessTournamentFocusInput>;
  website?: InputMaybe<Scalars['String']>;
};

export enum UpdateBusinessError {
  OneupidAlreadyTaken = 'ONEUPID_ALREADY_TAKEN'
}

export type UpdateBusinessInput = {
  attributes: UpdateBusinessAttributesInput;
  userId: Scalars['ID'];
};

export type UpdateBusinessPayload = {
  __typename?: 'UpdateBusinessPayload';
  errors: Array<UpdateBusinessProblem>;
  user?: Maybe<BusinessUser>;
};

export type UpdateBusinessProblem = ProblemInterface & {
  __typename?: 'UpdateBusinessProblem';
  code: UpdateBusinessError;
  message: Scalars['String'];
};

export type UpdateFaceInput = {
  avatarImage?: InputMaybe<Scalars['URL']>;
  oneUpId?: InputMaybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type UpdateFacePayload = {
  __typename?: 'UpdateFacePayload';
  user?: Maybe<User>;
};

export type UpdateLegalConfigurationInput = {
  coveredJurisdictions: Array<JurisdictionInput>;
};

export type UpdateLegalConfigurationPayload = {
  __typename?: 'UpdateLegalConfigurationPayload';
  legal: LegalConfiguration;
};

export type UpdateMatchAlertInput = {
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  stakeRanges: Array<MatchAlertStakeRange>;
  userId: Scalars['ID'];
};

export type UpdateMatchAlertPayload = {
  __typename?: 'UpdateMatchAlertPayload';
  matchAlert: MatchAlert;
};

export type UpdateNotificationSettingsInput = {
  marketingEnabled: Scalars['Boolean'];
  userId?: InputMaybe<Scalars['ID']>;
};

export type UpdateNotificationSettingsPayload = {
  __typename?: 'UpdateNotificationSettingsPayload';
  notificationSettings: NotificationSettings;
};

export type UpdateTierInput = {
  id: Scalars['String'];
  tier: TierInput;
};

export type UpdateTierPayload = {
  __typename?: 'UpdateTierPayload';
  tier: Tier;
};

export type UpdateTournamentAttributesInput = {
  adjustPrizePoolOnAutofill?: InputMaybe<Scalars['Boolean']>;
  autoFillTournamentOnStart?: InputMaybe<Scalars['Boolean']>;
  coverImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export enum UpdateTournamentError {
  InvalidReviewStatus = 'INVALID_REVIEW_STATUS',
  InvalidStatus = 'INVALID_STATUS',
  TournamentAlreadyFinished = 'TOURNAMENT_ALREADY_FINISHED',
  TournamentAlreadyStarted = 'TOURNAMENT_ALREADY_STARTED'
}

export type UpdateTournamentInput = {
  attributes: UpdateTournamentAttributesInput;
  id: Scalars['String'];
};

export type UpdateTournamentPayload = {
  __typename?: 'UpdateTournamentPayload';
  errors: Array<UpdateTournamentProblem>;
  tournament?: Maybe<Tournament>;
};

export type UpdateTournamentProblem = ProblemInterface & {
  __typename?: 'UpdateTournamentProblem';
  code: UpdateTournamentError;
  message: Scalars['String'];
};

export type UpdateUserProfileInput = {
  id: Scalars['String'];
  profile: UserProfileInput;
};

export type UpdateUserProfilePayload = {
  __typename?: 'UpdateUserProfilePayload';
  status: UpdateUserProfileStatus;
  user?: Maybe<User>;
};

export enum UpdateUserProfileStatus {
  Ok = 'OK'
}

export type UpdateUserStatusInput = {
  id: Scalars['ID'];
  status: UserStatusInput;
};

export type UpdateUserStatusPayload = {
  __typename?: 'UpdateUserStatusPayload';
  user: ClientUser;
};

export type UpsertGameInput = {
  active: Scalars['Boolean'];
  addFriendInstructions: Array<Scalars['String']>;
  arenaImage?: InputMaybe<Scalars['String']>;
  backgroundImage?: InputMaybe<Scalars['String']>;
  createGameInstructions: Array<Scalars['String']>;
  fields: Array<GameFieldInput>;
  houseRules: Array<GameRuleInput>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  rules: Array<GameRuleInput>;
  supportedSystems: Array<Scalars['ID']>;
  thumbnailImage?: InputMaybe<Scalars['String']>;
  tournamentDefaultImage?: InputMaybe<Scalars['String']>;
  tournamentDefaultShareImage?: InputMaybe<Scalars['String']>;
};

export type UpsertGamePayload = {
  __typename?: 'UpsertGamePayload';
  game: Game;
};

export type UpsertPromoTicketInput = {
  amount: Scalars['Int'];
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['String']>;
  maxUsageDurationDays?: InputMaybe<Scalars['Int']>;
  target: PromoTicketTarget;
  targetId?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type UpsertPromoTicketPayload = {
  __typename?: 'UpsertPromoTicketPayload';
  ticket: PromoTicket;
};

export enum UpsertSubscriptionPlanError {
  EntitlementIdAlreadyExists = 'ENTITLEMENT_ID_ALREADY_EXISTS',
  SubscriptionPlanNotFound = 'SUBSCRIPTION_PLAN_NOT_FOUND'
}

export type UpsertSubscriptionPlanInput = {
  subscriptionPlan: SubscriptionPlanInput;
};

export type UpsertSubscriptionPlanPayload = {
  __typename?: 'UpsertSubscriptionPlanPayload';
  errors: Array<UpsertSubscriptionPlanProblem>;
  subscriptionPlan?: Maybe<SubscriptionPlan>;
};

export type UpsertSubscriptionPlanProblem = ProblemInterface & {
  __typename?: 'UpsertSubscriptionPlanProblem';
  code: UpsertSubscriptionPlanError;
  message: Scalars['String'];
};

export type UpsertSubscriptionPlanUsageLimitsInput = {
  maxNumberOfPlayers: Scalars['Int'];
  maxNumberOfTournaments: Scalars['Int'];
};

export type UpsertSystemInput = {
  active: Scalars['Boolean'];
  addFriendInstructions: Array<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  network?: InputMaybe<Scalars['String']>;
  recordInstructions: Array<Scalars['String']>;
  systemImage?: InputMaybe<Scalars['String']>;
  tagName?: InputMaybe<Scalars['String']>;
};

export type UpsertSystemPayload = {
  __typename?: 'UpsertSystemPayload';
  system: System;
};

export enum UpsertUserSystemError {
  GamerTagTaken = 'GAMER_TAG_TAKEN',
  TagUpdateLimitExceeded = 'TAG_UPDATE_LIMIT_EXCEEDED'
}

export type UpsertUserSystemInput = {
  systemId: Scalars['String'];
  tag?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type UpsertUserSystemPayload = {
  __typename?: 'UpsertUserSystemPayload';
  errors: Array<UpsertUserSystemProblem>;
  user?: Maybe<ClientUser>;
};

export type UpsertUserSystemProblem = ProblemInterface & {
  __typename?: 'UpsertUserSystemProblem';
  code: UpsertUserSystemError;
  message: Scalars['String'];
};

export enum UseUserPromoTicketError {
  NoApplicableUserPromoTicket = 'NO_APPLICABLE_USER_PROMO_TICKET'
}

export type UseUserPromoTicketInput = {
  amount: Scalars['Int'];
  target: PromoTicketTarget;
  targetId?: InputMaybe<Scalars['ID']>;
  userId: Scalars['ID'];
};

export type UseUserPromoTicketPayload = {
  __typename?: 'UseUserPromoTicketPayload';
  errors: Array<UseUserPromoTicketProblem>;
  userPromoTicket?: Maybe<UserPromoTicket>;
};

export type UseUserPromoTicketProblem = ProblemInterface & {
  __typename?: 'UseUserPromoTicketProblem';
  code: UseUserPromoTicketError;
  message: Scalars['String'];
};

export type User = {
  createdAt: Scalars['DateTime'];
  face: Face;
  id: Scalars['ID'];
  role: Role;
  updatedAt: Scalars['DateTime'];
};

export type UserFilter = {
  businessUserFilter?: InputMaybe<BusinessUserFilter>;
  clientUserFilter?: InputMaybe<ClientUserFilter>;
  identity?: InputMaybe<UserIdentityFilter>;
  published?: InputMaybe<Scalars['Boolean']>;
  /** adminUsers.read required to read admin users, playerUser.read required to read player users */
  role?: InputMaybe<Role>;
  roleIn?: InputMaybe<Array<Role>>;
  search?: InputMaybe<UserSearchFilterInput>;
};

export type UserFinancesCardsInput = {
  gateway: PaymentGateway;
};

export type UserFollowersQueryInput = {
  paging: Paging;
};

export type UserFollowingsQueryInput = {
  paging: Paging;
};

export type UserIdentity = {
  __typename?: 'UserIdentity';
  passbaseIdentityKey?: Maybe<Scalars['String']>;
  person: UserIdentityPerson;
  rejectionReason?: Maybe<UserIdentityRejectionReason>;
  status: UserIdentityStatus;
  watchListsClean: Scalars['Boolean'];
};

export type UserIdentityFilter = {
  status: UserIdentityStatus;
};

export type UserIdentityPerson = {
  __typename?: 'UserIdentityPerson';
  dateOfBirth?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export enum UserIdentityRejectionReason {
  IdentityMismatch = 'IDENTITY_MISMATCH',
  PassbaseIdentificationFailure = 'PASSBASE_IDENTIFICATION_FAILURE',
  UserIsMinor = 'USER_IS_MINOR'
}

export enum UserIdentityStatus {
  None = 'NONE',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Verified = 'VERIFIED'
}

export type UserNote = {
  __typename?: 'UserNote';
  author?: Maybe<AdminUser>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  note: Scalars['String'];
};

export type UserNoteEdge = {
  __typename?: 'UserNoteEdge';
  cursor: Scalars['String'];
  node: UserNote;
};

export type UserNoteSort = {
  direction: SortDirection;
  field: UserNoteSortField;
};

export enum UserNoteSortField {
  CreatedAt = 'CREATED_AT'
}

export type UserNotesInput = {
  paging?: InputMaybe<Paging>;
  sort?: InputMaybe<UserNoteSort>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  address?: Maybe<PostalAddress>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UserProfileInput = {
  address?: InputMaybe<InputPostalAddress>;
  dateOfBirth?: InputMaybe<Scalars['Date']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  oneUpId?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type UserPromoTicket = {
  __typename?: 'UserPromoTicket';
  createdAt: Scalars['DateTime'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  ticket: PromoTicket;
  updatedAt?: Maybe<Scalars['DateTime']>;
  usedAt?: Maybe<Scalars['DateTime']>;
};

export type UserPromoTicketEdge = {
  __typename?: 'UserPromoTicketEdge';
  cursor: Scalars['String'];
  node: UserPromoTicket;
};

export type UserPromoTicketsFilter = {
  expired?: InputMaybe<Scalars['Boolean']>;
  maxAmount?: InputMaybe<Scalars['Int']>;
  minAmount?: InputMaybe<Scalars['Int']>;
  target?: InputMaybe<PromoTicketTarget>;
  used?: InputMaybe<Scalars['Boolean']>;
};

export type UserPromoTicketsQueryInput = {
  filter?: InputMaybe<UserPromoTicketsFilter>;
  paging?: InputMaybe<Paging>;
  sort?: InputMaybe<UserPromoTicketsSort>;
};

export type UserPromoTicketsSort = {
  direction: SortDirection;
  field: UserPromoTicketsSortField;
};

export enum UserPromoTicketsSortField {
  CreatedAt = 'CREATED_AT'
}

export type UserQueryInput = {
  filter?: InputMaybe<UserFilter>;
  paging?: InputMaybe<Paging>;
  sort?: InputMaybe<UserSort>;
};

export type UserRelation = {
  __typename?: 'UserRelation';
  canView: Scalars['Boolean'];
  followState: FollowState;
  isBlocked: Scalars['Boolean'];
};

export enum UserSearchFilterField {
  Email = 'email',
  FirstName = 'firstName',
  LastName = 'lastName',
  OneUpId = 'oneUpId',
  Phone = 'phone',
  UserId = 'userId',
  UserSystemTag = 'userSystemTag'
}

export type UserSearchFilterInput = {
  searchFields: Array<UserSearchFilterField>;
  searchTerm: Scalars['String'];
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortField;
};

export enum UserSortField {
  CreatedAt = 'CREATED_AT',
  LastName = 'LAST_NAME',
  SearchScore = 'SEARCH_SCORE'
}

export type UserStatus = {
  __typename?: 'UserStatus';
  reason?: Maybe<UserStatusPenalityReason>;
  state: UserStatusState;
  suspensionExpiresAt?: Maybe<Scalars['DateTime']>;
};

export type UserStatusInput = {
  reason?: InputMaybe<UserStatusPenalityReason>;
  state: UserStatusState;
  suspensionExpiresAt?: InputMaybe<Scalars['DateTime']>;
};

export enum UserStatusPenalityReason {
  DuplicateAccounts = 'DUPLICATE_ACCOUNTS',
  FakeResults = 'FAKE_RESULTS',
  FraudulentChargeback = 'FRAUDULENT_CHARGEBACK',
  IdentityMismatch = 'IDENTITY_MISMATCH',
  ImproperGameplay = 'IMPROPER_GAMEPLAY',
  OffensiveLanguage = 'OFFENSIVE_LANGUAGE',
  SuspiciousDeposits = 'SUSPICIOUS_DEPOSITS',
  UserIsMinor = 'USER_IS_MINOR'
}

export enum UserStatusState {
  Active = 'ACTIVE',
  Banned = 'BANNED',
  Deactivated = 'DEACTIVATED',
  Suspended = 'SUSPENDED'
}

export type UserSystem = {
  __typename?: 'UserSystem';
  games: Array<Game>;
  system: System;
  tag?: Maybe<Scalars['String']>;
  tagChangedAt?: Maybe<Scalars['Date']>;
};

export type UserTransactionsFilter = {
  createdAfter?: InputMaybe<Scalars['DateTime']>;
  createdBefore?: InputMaybe<Scalars['DateTime']>;
};

export type UserTransactionsQueryInput = {
  filter?: InputMaybe<UserTransactionsFilter>;
  paging?: InputMaybe<Paging>;
  sort?: InputMaybe<UserTransactionsSort>;
};

export type UserTransactionsSort = {
  direction: SortDirection;
  field: UserTransactionsSortField;
};

export enum UserTransactionsSortField {
  CreatedAt = 'CREATED_AT'
}

export type VerifyPasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type VerifyPasswordPayload = {
  __typename?: 'VerifyPasswordPayload';
  totpQrCodeUrl?: Maybe<Scalars['String']>;
  verifyPasswordResult: VerifyPasswordResult;
};

export enum VerifyPasswordResult {
  InvalidCredentials = 'INVALID_CREDENTIALS',
  TotpCodeRequired = 'TOTP_CODE_REQUIRED',
  TotpSetupRequired = 'TOTP_SETUP_REQUIRED'
}

export enum VerifyPhoneVerificationCodeError {
  CodeInvalid = 'CODE_INVALID',
  RateLimitReached = 'RATE_LIMIT_REACHED'
}

export type VerifyPhoneVerificationCodeInput = {
  code: Scalars['String'];
  phone: Scalars['String'];
};

export type VerifyPhoneVerificationCodePayload = {
  __typename?: 'VerifyPhoneVerificationCodePayload';
  errors: Array<VerifyPhoneVerificationCodeProblem>;
  phone: Scalars['String'];
};

export type VerifyPhoneVerificationCodeProblem = ProblemInterface & {
  __typename?: 'VerifyPhoneVerificationCodeProblem';
  code: VerifyPhoneVerificationCodeError;
  message: Scalars['String'];
};

export type VerifyTotpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  totpCode: Scalars['String'];
};

export type VerifyTotpPayload = {
  __typename?: 'VerifyTotpPayload';
  customFirebaseAuthToken?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Scalars['String']>>;
  user?: Maybe<AdminUser>;
  verifyTotpResult: VerifyTotpResult;
};

export enum VerifyTotpResult {
  InvalidCredentials = 'INVALID_CREDENTIALS',
  Ok = 'OK'
}

export type Withdrawal = {
  __typename?: 'Withdrawal';
  address: WithdrawalAddress;
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** The fee as a decimal string representing the fee percentage (e.g. "0.1" for 10 percent). Up to 2 decimal places */
  fee: Scalars['Float'];
  /** The withdrawal fee, in cents */
  feeAmount: Scalars['Int'];
  id: Scalars['ID'];
  method: WithdrawalMethod;
  /** The withdrawal amount minus the fee, in cents */
  netAmount: Scalars['Int'];
  source: WithdrawalSource;
  speed: WithdrawalSpeed;
  state: WithdrawalState;
  supportTicket?: Maybe<SupportTicket>;
  ticket?: Maybe<Ticket>;
  updatedAt: Scalars['DateTime'];
  user: BusinessClientUser;
  userId: Scalars['ID'];
};

export type WithdrawalAddress = WithdrawalBankwireAddress | WithdrawalCashappAddress | WithdrawalPaypalAddress | WithdrawalStripeAddress | WithdrawalVenmoAddress;

export type WithdrawalBankwireAddress = {
  __typename?: 'WithdrawalBankwireAddress';
  accountNumber: Scalars['String'];
  bankName: Scalars['String'];
  routingNumber: Scalars['String'];
};

export type WithdrawalBankwireAddressInput = {
  accountNumber: Scalars['String'];
  bankName: Scalars['String'];
  routingNumber: Scalars['String'];
};

export type WithdrawalCashappAddress = {
  __typename?: 'WithdrawalCashappAddress';
  cashTag: Scalars['String'];
};

export type WithdrawalCashappAddressInput = {
  cashTag: Scalars['String'];
};

export type WithdrawalConfiguration = {
  __typename?: 'WithdrawalConfiguration';
  limitRequestsToBeforeNoon: Scalars['Boolean'];
  limitRequestsToWorkingDays: Scalars['Boolean'];
  maxAmount: Scalars['Int'];
  methods: Array<WithdrawalMethodConfiguration>;
  minAmount: Scalars['Int'];
};

export enum WithdrawalDeclinedReason {
  AccountSuspended = 'ACCOUNT_SUSPENDED',
  Custom = 'CUSTOM',
  ImproperGameplay = 'IMPROPER_GAMEPLAY',
  InvalidPaypalAccount = 'INVALID_PAYPAL_ACCOUNT',
  InvalidPaypalName = 'INVALID_PAYPAL_NAME',
  NoGameplay = 'NO_GAMEPLAY',
  SuspiciousDeposits = 'SUSPICIOUS_DEPOSITS'
}

export type WithdrawalEdge = {
  __typename?: 'WithdrawalEdge';
  cursor: Scalars['String'];
  node: Withdrawal;
};

export enum WithdrawalMethod {
  Bankwire = 'BANKWIRE',
  Cashapp = 'CASHAPP',
  Check = 'CHECK',
  Paypal = 'PAYPAL',
  Stripe = 'STRIPE',
  Venmo = 'VENMO'
}

export type WithdrawalMethodConfiguration = {
  __typename?: 'WithdrawalMethodConfiguration';
  active: Scalars['Boolean'];
  instantSpeedFee: Scalars['Float'];
  instantWithdrawalsEnabled: Scalars['Boolean'];
  normalSpeedFee: Scalars['Float'];
  target: WithdrawalMethod;
};

export type WithdrawalPaypalAddress = {
  __typename?: 'WithdrawalPaypalAddress';
  email: Scalars['String'];
};

export type WithdrawalPaypalAddressInput = {
  email: Scalars['String'];
};

export enum WithdrawalSearchFilterField {
  OneUpId = 'ONE_UP_ID',
  UserId = 'USER_ID',
  WithdrawalId = 'WITHDRAWAL_ID'
}

export type WithdrawalSearchFilterInput = {
  searchFields: Array<WithdrawalSearchFilterField>;
  searchTerm: Scalars['String'];
};

export enum WithdrawalSource {
  Business = 'BUSINESS',
  User = 'USER'
}

export enum WithdrawalSpeed {
  Instant = 'INSTANT',
  Normal = 'NORMAL'
}

export enum WithdrawalState {
  Approved = 'APPROVED',
  Cancelled = 'CANCELLED',
  Declined = 'DECLINED',
  Pending = 'PENDING'
}

export type WithdrawalStripeAddress = {
  __typename?: 'WithdrawalStripeAddress';
  cardId: Scalars['String'];
};

export type WithdrawalVenmoAddress = {
  __typename?: 'WithdrawalVenmoAddress';
  email: Scalars['String'];
};

export type WithdrawalsFilter = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  isPending?: InputMaybe<Scalars['Boolean']>;
  method?: InputMaybe<WithdrawalMethod>;
  search?: InputMaybe<WithdrawalSearchFilterInput>;
  speed?: InputMaybe<WithdrawalSpeed>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type WithdrawalsQueryInput = {
  filter?: InputMaybe<WithdrawalsFilter>;
  paging?: InputMaybe<Paging>;
  sort?: InputMaybe<WithdrawalsSort>;
};

export type WithdrawalsSort = {
  direction: SortDirection;
  field: WithdrawalsSortField;
};

export enum WithdrawalsSortField {
  CreatedAt = 'CREATED_AT',
  Speed = 'SPEED'
}
