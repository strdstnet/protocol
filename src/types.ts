import { CompoundTag } from '@strdst/utils.nbt'
import { Vector3, MAGIC, IItem, IAddress } from '@strdstnet/utils.binary'

export const Protocol = {
  PROTOCOL_VERSION: 10,
  NETWORK_VERSION: 428,
  BEDROCK_VERSION: '1.16.210',
  SYSTEM_ADDRESSES: 20,
  MAGIC,
}

export enum Packets {
  /* RAKNET (Raw) */
  CONNECTED_PING = 0x00, // 0
  UNCONNECTED_PING = 0x01, // 1
  PING_OPEN_CONNECTIONS = 0x02, // 2
  CONNECTED_PONG = 0x03, // 3
  OPEN_CONNECTION_REQUEST_ONE = 0x05, // 5
  OPEN_CONNECTION_REPLY_ONE = 0x06, // 6
  OPEN_CONNECTION_REQUEST_TWO = 0x07, // 7
  OPEN_CONNECTION_REPLY_TWO = 0x08, // 8
  UNCONNECTED_PONG = 0x1c, // 28

  /* RAKNET (Bundled) */
  CONNECTION_REQUEST = 0x09, // 9
  CONNECTION_REQUEST_ACCEPTED = 0x10, // 16
  NEW_INCOMING_CONNECTION = 0x13, // 19
  DISCONNECTION_NOTIFICATION = 0x15, // 21
  INCOMPATIBLE_PROTOCOL = 0x19, // 25

  /* STARDUST (Raw) */
  EZ_TRANSFER = 0x45, // 69
  EZ_LOGIN = 0x46, // 70


  ACK = 0xc0, // 192
  NAK = 0xa0, // 160

  DATA_PACKET_0 = 0x80,
  DATA_PACKET_1 = 0x81,
  DATA_PACKET_2 = 0x82,
  DATA_PACKET_3 = 0x83,
  DATA_PACKET_4 = 0x84,
  DATA_PACKET_5 = 0x85,
  DATA_PACKET_6 = 0x86,
  DATA_PACKET_7 = 0x87,
  DATA_PACKET_8 = 0x88,
  DATA_PACKET_9 = 0x89,
  DATA_PACKET_A = 0x8a,
  DATA_PACKET_B = 0x8b,
  DATA_PACKET_C = 0x8c,
  DATA_PACKET_D = 0x8d,
  DATA_PACKET_E = 0x8e,
  DATA_PACKET_F = 0x8f,

  PACKET_BATCH = 0xFE, // 254


  /* BEDROCK (Batched) */
  LOGIN = 0x01, // 1
  PLAY_STATUS = 0x02, // 2
  DISCONNECT = 0x05, // 5
  RESOURCE_PACKS_INFO = 0x06, // 6
  RESOURCE_PACKS_STACK = 0x07, // 7
  RESOURCE_PACKS_RESPONSE = 0x08, // 8
  TEXT = 0x09, // 9
  SET_TIME = 0x0a, // 10
  START_GAME = 0x0b, // 11
  ADD_PLAYER = 0x0c, // 12
  ADD_ENTITY = 0x0d, // 13
  REMOVE_ENTITY = 0x0e, // 14
  ADD_DROPPED_ITEM = 0x0f, // 15
  PICK_UP_DROPPED_ITEM = 0x11, // 17
  MOVE_ENTITY = 0x12, // 18
  MOVE_PLAYER = 0x13, // 19
  BLOCK_UPDATE = 0x15, // 21
  TICK_SYNC = 0x17, // 23
  LEVEL_EVENT = 0x19, // 25
  ENTITY_ANIMATION = 0x1b, // 27
  UPDATE_ATTRIBUTES = 0x1d, // 29
  CONTAINER_TRANSACTION = 0x1e, // 30
  ENTITY_EQUIPMENT = 0x1f, // 31
  INTERACT = 0x21, // 33
  BLOCK_PICK_REQUEST = 0x22, // 34
  PLAYER_ACTION = 0x24, // 36
  ENTITY_FALL = 0x25, // 37
  ENTITY_METADATA = 0x27, // 39
  SET_ENTITY_MOTION = 0x28, // 40
  SET_HEALTH = 0x2a, // 42
  SET_SPAWN_POSITION = 0x2b, // 43
  ANIMATE = 0x2c, // 44
  RESPAWN = 0x2d, // 45
  CONTAINER_OPEN = 0x2e, // 46
  CONTAINER_CLOSE = 0x2f, // 47
  CONTAINER_NOTIFICATION = 0x31,// 49
  CONTAINER_UPDATE = 0x32,// 50
  ADVENTURE_SETTINGS = 0x37, // 55
  BLOCK_ACTOR_DATA = 0x38, // 56
  LEVEL_CHUNK = 0x3a, // 58
  CHANGE_DIMENSION = 0x3d, // 61
  SET_GAMEMODE = 0x3e, // 62
  PLAYER_LIST = 0x3f, // 63
  REQUEST_CHUNK_RADIUS = 0x45, // 69
  CHUNK_RADIUS_UPDATED = 0x46, // 70
  BOSS_EVENT = 0x4a, // 74
  AVAILABLE_COMMANDS = 0x4c, // 76
  COMMAND_REQUEST = 0x4d, // 77
  TRANSFER = 0x55, // 85
  SET_TITLE = 0x58, // 88
  FORM_REQUEST = 0x64, // 100
  FORM_RESPONSE = 0x65, // 101
  SET_LOCAL_PLAYER_INITIALIZED = 0x71, // 113
  ENTITY_DEFINITION_LIST = 0x77, // 119
  NETWORK_CHUNK_PUBLISHER = 0x79, // 121
  BIOME_DEFINITION_LIST = 0x7a, // 122
  LEVEL_SOUND = 0x7b, // 123
  EMOTE = 0x8a, // 138
  CREATIVE_CONTENT = 0x91, // 145
  PACKET_VIOLATION_WARNING = 0x9c, // 156
  ITEM_COMPONENT = 0xA2, // 162
}

export enum PacketViolationType {
  MALFORMED = 0,
}

export enum PacketViolationSeverity {
  WARNING = 0,
  FINAL_WARNING = 1,
  TERMINATING_CONNECTION = 2,
}

export interface IChainData {
  chain: [string, string, string],
}

export interface IToken {
  identityPublicKey: string,
  exp: number,
  nbf: number,
  certificateAuthority?: boolean,
  randomNonce?: number,
  iss?: string,
  iat?: number,
  extraData?: {
    XUID: string,
    identity: string,
    displayName: string,
    titleId: string,
  },
}

export interface IClientDataPersonaPiece {
  PieceId: string,
  PieceType: string,
  PackId: string,
  IsDefault: boolean,
  ProductId: string,
}

export interface IClientDataPieceTintColor {
  PieceType: string,
  Colors: string[],
}

export interface IClientData {
  ClientRandomId: number,
  ServerAddress: string,
  SkinId: string,
  PlayFabId: string,
  SkinResourcePatch: string, // Base64
  SkinImageHeight: number,
  SkinImageWidth: number,
  SkinData: string, // Base64
  CapeImageHeight: number,
  CapeImageWidth: number,
  CapeData: string, // Base64
  SkinGeometryData: string, // Base64
  SkinAnimationData: string, // Base64
  PremiumSkin: boolean,
  PersonaSkin: boolean,
  CapeOnClassicSkin: boolean,
  CapeId: string,
  ArmSize: string,
  SkinColor: string,
  PersonaPieces: IClientDataPersonaPiece[],
  PieceTintColors: IClientDataPieceTintColor[],
}

export type Props = Record<string, never>

export const FLOAT_MAX_VAL = 340282346638528859811704183484516925440

export enum DataType {
  BYTE,
  LONG,
  MAGIC,
  INT,
  SHORT,
  STRING,     // with length prefixed
  RAW_STRING, // without length prefixed
  SECURITY,
  BOOLEAN,
  ADDRESS,
  L_INT,
  L_TRIAD,
  L_SHORT,
  FLOAT,
  L_FLOAT,
  L_LONG,
  VECTOR3_FLOAT,
  VECTOR3_VARINT,
  VECTOR3,
  VARINT,
  U_VARINT,
  VARLONG,
  U_VARLONG,
  CONTAINER_ITEM,
  CHUNK,
  UUID,
  ENTITY_METADATA,
  BYTE_ROTATION,
  BLOCK_POSITION,
  BYTE_ARRAY,
  EXPERIMENTS,
  SKIN
}

export const BITFLAG_SECOND_SET = 1 << 16
export enum AdventureSettingsFlag {
  WORLD_IMMUTABLE    = 0x01,
  NO_PVP             = 0x02,
  AUTO_JUMP          = 0x20,
  ALLOW_FLIGHT       = 0x40,
  NO_CLIP            = 0x80,
  WORLD_BUILDER      = 0x100,
  FLYING             = 0x200,
  MUTED              = 0x400,
  BUILD_AND_MINE     = 0x01 | BITFLAG_SECOND_SET,
  DOORS_AND_SWITCHES = 0x02 | BITFLAG_SECOND_SET,
  OPEN_CONTAINERS    = 0x04 | BITFLAG_SECOND_SET,
  ATTACK_PLAYERS     = 0x08 | BITFLAG_SECOND_SET,
  ATTACK_MOBS        = 0x10 | BITFLAG_SECOND_SET,
  OPERATOR           = 0x20 | BITFLAG_SECOND_SET,
  TELEPORT           = 0x80 | BITFLAG_SECOND_SET,
}

export enum CommandPermissions {
  NORMAL     = 0,
  OPERATOR   = 1,
  HOST       = 2,
  AUTOMATION = 3,
  ADMIN      = 4,
}

export enum ArgType {
  INT = 0x01,
  FLOAT = 0x02,
  VALUE = 0x03,
  WILDCARD_INT = 0x04,
  OPERATOR = 0x05,
  TARGET = 0x06,
  FILE_PATH = 0x0e,
  STRING = 0x1d,
  POSITION = 0x25,
  MESSAGE = 0x29,
  RAW_TEXT = 0x2b,
  JSON = 0x2f,
  COMMAND = 0x36,
}

export interface ICommandArgument {
  name: string,
  type: ArgType,
  optional: boolean,
}

export enum BossEventType {
  SHOW = 0,
  REGISTER_PLAYER = 1,
  HIDE = 2,
  UNREGISTER_PLAYER = 3,
  SET_HEALTH = 4,
  SET_TITLE = 5,
  UNKNOWN = 6,
  SET_TEXTURE = 7,
}

export enum Dimension {
  OVERWOLD = 0,
  NETHER   = 1,
  END      = 2,
}

export enum CommandOriginType {
  PLAYER = 0,
  BLOCK = 1,
  MINECART_BLOCK = 2,
  DEV_CONSOLE = 3,
  TEST = 4,
  PLAYER_AUTOMATION = 5,
  CLIENT_AUTOMATION = 6,
  DEDICATED_SERVER = 7,
  ENTITY = 8,
  VIRTUAL = 9,
  GAME_ARGUMENT = 10,
  ENTITY_SERVER = 11,
}

export enum ContainerActionSource {
  CONTAINER = 0,
  WORLD     = 2,
  CREATIVE  = 3,
  CLIENT    = 99999,
}

export enum ContainerTransactionType {
  NORMAL             = 0,
  MISMATCH           = 1,
  USE_ITEM           = 2,
  USE_ITEM_ON_ENTITY = 3,
  RELEASE_ITEM       = 4,
}

export enum UseItemType {
  CLICK_BLOCK = 0,
  CLICK_AIR   = 1,
  BREAK_BLOCK = 2,
}

export enum UseItemOnEntityType {
  INTERACT = 0,
  ATTACK   = 1,
}

export type TransactionType = UseItemType & UseItemOnEntityType

export interface ITransaction {
  type: TransactionType,
  position: Vector3,
  face?: number,
  hotbarSlot: number,
  itemHolding: IItem,
  playerPos?: Vector3
  clickPos?: Vector3,
  blockRuntimeId?: number,
  entityRuntimeId?: bigint,
  headPos?: Vector3
}

export enum InteractAction {
  LEAVE_VEHICLE  = 3,
  MOUSE_OVER     = 4,
  OPEN_NPC       = 5,
  OPEN_INVENTORY = 6,
}

export enum MovePlayerMode {
  NORMAL = 0,
  RESET = 1,
  TELEPORT = 2,
  PITCH = 3,
}

export enum PlayStatusType {
  SUCCESS               = 0,
  CLIENT_FAILED         = 1,
  SERVER_FAILED         = 2,
  PLAYER_SPAWN          = 3,
  FAILED_INVALID_TENANT = 4,
  FAILED_VANILLA_EDU    = 5,
  FAILED_EDU_VANILLA    = 6,
  FAILED_SERVER_FULL    = 7,
}

export enum ResourcePackResponseStatus {
  NONE           = 0,
  REFUSED        = 1,
  SEND_PACKS     = 2,
  HAVE_ALL_PACKS = 3,
  COMPLETED      = 4,
}

export enum RespawnState {
  SEARCHING    = 0,
  SERVER_READY = 1,
  CLIENT_READY = 2,
}

export enum Gamemode {
  SURVIVAL  = 0,
  CREATIVE  = 1,
  ADVENTURE = 2,
  SPECTATOR = 3,
}

export enum TitleCommand {
  CLEAR = 0,
  RESET = 1,
  SET_TITLE = 2,
  SET_SUBTITLE = 3,
  SET_ACTIONBAR = 4,
  SET_ANIMATION_TIMES = 5,
}

export enum TitleType {
  TITLE = 2,
  SUBTITLE = 3,
  ACTIONBAR = 4,
}

// TODO: Biome types
export enum BiomeType {

}

export enum GeneratorType {
  FINITE_OVERWORLD = 0,
  OVERWORLD        = 1,
  FLAT             = 2,
  NETHER           = 3,
  END              = 4,
}

export enum Difficulty {
  PEACEFUL = 0,
  EASY     = 1,
  NORMAL   = 2,
  HARD     = 3,
}

export enum GameRuleType {
  BOOL  = 1,
  INT   = 2,
  FLOAT = 3,
}

export interface IGameRule {
  name: string,
  type: GameRuleType,
}

export interface IBoolGameRule extends IGameRule {
  type: GameRuleType.BOOL,
  value: boolean,
}

export interface IIntGameRule extends IGameRule {
  type: GameRuleType.INT,
  value: number,
}

export interface IFloatGameRule extends IGameRule {
  type: GameRuleType.FLOAT,
  value: number,
}

export enum PlayerPermissions {
  VISITOR  = 0,
  MEMBER   = 1,
  OPERATOR = 2,
  CUSTOM   = 3,
}

export enum MultiplayerVisibility {
  NONE               = 0,
  INVITE             = 1,
  FRIENDS            = 2,
  FRIENDS_OF_FRIENDS = 3,
  PUBLIC             = 4,
}

export interface IAttribute {
  name: string,
  defaultVal: number,
  currentVal: number,
  maxVal: number,
  minVal: number,
}

export interface IBundledPacket {
  reliability: number,
  hasSplit: boolean,
  messageIndex: number,
  sequenceIndex: number,
  orderIndex: number,
  orderChannel: number,
  splitCount: number,
  splitId: number,
  splitIndex: number,
}

export enum Reliability {
  Unreliable = 0,
  UnreliableSequenced = 1,
  Reliable = 2,
  ReliableOrdered = 3,
  ReliableSequenced = 4,
  UnreliableACK = 5,
  ReliableACK = 6,
  ReliableOrderedACK = 7,
}

export enum WorldSound {
  HIT = 1,
  STEP = 2,
  PLACE = 6,
}

export const DummyAddress: IAddress = {
  ip: '0.0.0.0',
  port: 19132,
  family: 4,
}

export enum BitFlag {
  Valid = 0x80,
  ACK = 0x40,
  NAK = 0x20,
  PacketPair = 0x10,
  ContinuousSend = 0x08,
  NeedsBAndS = 0x04,
}

export interface IItemTableItem {
  nid: string,
  rid: number,
  component: boolean,
}

export interface ICommand {
  name: string,
  description: string,
  permission: CommandPermissions,
  args: ICommandArgument[],
  aliases: string[],
}
