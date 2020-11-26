import { Vector3, IItem, IAddress } from '@strdstnet/utils.binary';
export declare enum Packets {
    CONNECTED_PING = 0,
    UNCONNECTED_PING = 1,
    PING_OPEN_CONNECTIONS = 2,
    CONNECTED_PONG = 3,
    OPEN_CONNECTION_REQUEST_ONE = 5,
    OPEN_CONNECTION_REPLY_ONE = 6,
    OPEN_CONNECTION_REQUEST_TWO = 7,
    OPEN_CONNECTION_REPLY_TWO = 8,
    UNCONNECTED_PONG = 28,
    CONNECTION_REQUEST = 9,
    CONNECTION_REQUEST_ACCEPTED = 16,
    NEW_INCOMING_CONNECTION = 19,
    DISCONNECTION_NOTIFICATION = 21,
    INCOMPATIBLE_PROTOCOL = 25,
    EZ_TRANSFER = 69,
    EZ_LOGIN = 70,
    ACK = 192,
    NAK = 160,
    DATA_PACKET_0 = 128,
    DATA_PACKET_1 = 129,
    DATA_PACKET_2 = 130,
    DATA_PACKET_3 = 131,
    DATA_PACKET_4 = 132,
    DATA_PACKET_5 = 133,
    DATA_PACKET_6 = 134,
    DATA_PACKET_7 = 135,
    DATA_PACKET_8 = 136,
    DATA_PACKET_9 = 137,
    DATA_PACKET_A = 138,
    DATA_PACKET_B = 139,
    DATA_PACKET_C = 140,
    DATA_PACKET_D = 141,
    DATA_PACKET_E = 142,
    DATA_PACKET_F = 143,
    PACKET_BATCH = 254,
    LOGIN = 1,
    PLAY_STATUS = 2,
    DISCONNECT = 5,
    RESOURCE_PACKS_INFO = 6,
    RESOURCE_PACKS_STACK = 7,
    RESOURCE_PACKS_RESPONSE = 8,
    TEXT = 9,
    SET_TIME = 10,
    START_GAME = 11,
    ADD_PLAYER = 12,
    ADD_ENTITY = 13,
    REMOVE_ENTITY = 14,
    ADD_DROPPED_ITEM = 15,
    PICK_UP_DROPPED_ITEM = 17,
    MOVE_ENTITY = 18,
    MOVE_PLAYER = 19,
    BLOCK_UPDATE = 21,
    TICK_SYNC = 23,
    LEVEL_EVENT = 25,
    ENTITY_ANIMATION = 27,
    UPDATE_ATTRIBUTES = 29,
    CONTAINER_TRANSACTION = 30,
    ENTITY_EQUIPMENT = 31,
    INTERACT = 33,
    PLAYER_ACTION = 36,
    ENTITY_FALL = 37,
    ENTITY_METADATA = 39,
    SET_ENTITY_MOTION = 40,
    SET_HEALTH = 42,
    SET_SPAWN_POSITION = 43,
    ANIMATE = 44,
    RESPAWN = 45,
    CONTAINER_OPEN = 46,
    CONTAINER_CLOSE = 47,
    CONTAINER_NOTIFICATION = 49,
    CONTAINER_UPDATE = 50,
    ADVENTURE_SETTINGS = 55,
    BLOCK_ACTOR_DATA = 56,
    LEVEL_CHUNK = 58,
    CHANGE_DIMENSION = 61,
    SET_GAMEMODE = 62,
    PLAYER_LIST = 63,
    REQUEST_CHUNK_RADIUS = 69,
    CHUNK_RADIUS_UPDATED = 70,
    BOSS_EVENT = 74,
    AVAILABLE_COMMANDS = 76,
    COMMAND_REQUEST = 77,
    TRANSFER = 85,
    SET_TITLE = 88,
    FORM_REQUEST = 100,
    FORM_RESPONSE = 101,
    SET_LOCAL_PLAYER_INITIALIZED = 113,
    ENTITY_DEFINITION_LIST = 119,
    NETWORK_CHUNK_PUBLISHER = 121,
    BIOME_DEFINITION_LIST = 122,
    LEVEL_SOUND = 123,
    EMOTE = 138,
    CREATIVE_CONTENT = 145,
    PACKET_VIOLATION_WARNING = 156,
    ITEM_COMPONENT = 162
}
export declare const Protocol: {
    PROTOCOL_VERSION: number;
    BEDROCK_VERSION: string;
    SYSTEM_ADDRESSES: number;
    MAGIC: string;
};
export declare enum PacketViolationType {
    MALFORMED = 0
}
export declare enum PacketViolationSeverity {
    WARNING = 0,
    FINAL_WARNING = 1,
    TERMINATING_CONNECTION = 2
}
export interface IChainData {
    chain: [string, string, string];
}
export interface IToken {
    identityPublicKey: string;
    exp: number;
    nbf: number;
    certificateAuthority?: boolean;
    randomNonce?: number;
    iss?: string;
    iat?: number;
    extraData?: {
        XUID: string;
        identity: string;
        displayName: string;
        titleId: string;
    };
}
export interface IClientDataPersonaPiece {
    PieceId: string;
    PieceType: string;
    PackId: string;
    IsDefault: boolean;
    ProductId: string;
}
export interface IClientDataPieceTintColor {
    PieceType: string;
    Colors: string[];
}
export interface IClientData {
    ClientRandomId: number;
    ServerAddress: string;
    SkinId: string;
    SkinResourcePatch: string;
    SkinImageHeight: number;
    SkinImageWidth: number;
    SkinData: string;
    CapeImageHeight: number;
    CapeImageWidth: number;
    CapeData: string;
    SkinGeometryData: string;
    SkinAnimationData: string;
    PremiumSkin: boolean;
    PersonaSkin: boolean;
    CapeOnClassicSkin: boolean;
    CapeId: string;
    ArmSize: string;
    SkinColor: string;
    PersonaPieces: IClientDataPersonaPiece[];
    PieceTintColors: IClientDataPieceTintColor[];
}
export declare type Props = Record<string, never>;
export declare const FLOAT_MAX_VAL = 3.4028234663852886e+38;
export declare enum DataType {
    BYTE = 0,
    LONG = 1,
    MAGIC = 2,
    INT = 3,
    SHORT = 4,
    STRING = 5,
    RAW_STRING = 6,
    SECURITY = 7,
    BOOLEAN = 8,
    ADDRESS = 9,
    L_INT = 10,
    L_TRIAD = 11,
    L_SHORT = 12,
    FLOAT = 13,
    L_FLOAT = 14,
    L_LONG = 15,
    VECTOR3_FLOAT = 16,
    VECTOR3_VARINT = 17,
    VECTOR3 = 18,
    VARINT = 19,
    U_VARINT = 20,
    VARLONG = 21,
    U_VARLONG = 22,
    CONTAINER_ITEM = 23,
    CHUNK = 24,
    UUID = 25,
    ENTITY_METADATA = 26,
    BYTE_ROTATION = 27,
    BLOCK_POSITION = 28,
    BYTE_ARRAY = 29
}
export declare const BITFLAG_SECOND_SET: number;
export declare enum AdventureSettingsFlag {
    WORLD_IMMUTABLE = 1,
    NO_PVP = 2,
    AUTO_JUMP = 32,
    ALLOW_FLIGHT = 64,
    NO_CLIP = 128,
    WORLD_BUILDER = 256,
    FLYING = 512,
    MUTED = 1024,
    BUILD_AND_MINE,
    DOORS_AND_SWITCHES,
    OPEN_CONTAINERS,
    ATTACK_PLAYERS,
    ATTACK_MOBS,
    OPERATOR,
    TELEPORT
}
export declare enum CommandPermissions {
    NORMAL = 0,
    OPERATOR = 1,
    HOST = 2,
    AUTOMATION = 3,
    ADMIN = 4
}
export declare enum ArgType {
    INT = 1,
    FLOAT = 2,
    VALUE = 3,
    WILDCARD_INT = 4,
    OPERATOR = 5,
    TARGET = 6,
    FILE_PATH = 14,
    STRING = 29,
    POSITION = 37,
    MESSAGE = 41,
    RAW_TEXT = 43,
    JSON = 47,
    COMMAND = 54
}
export interface ICommandArgument {
    name: string;
    type: ArgType;
    optional: boolean;
}
export declare enum BossEventType {
    SHOW = 0,
    REGISTER_PLAYER = 1,
    HIDE = 2,
    UNREGISTER_PLAYER = 3,
    SET_HEALTH = 4,
    SET_TITLE = 5,
    UNKNOWN = 6,
    SET_TEXTURE = 7
}
export declare enum Dimension {
    OVERWOLD = 0,
    NETHER = 1,
    END = 2
}
export declare enum CommandOriginType {
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
    ENTITY_SERVER = 11
}
export declare enum ContainerActionSource {
    CONTAINER = 0,
    WORLD = 2,
    CREATIVE = 3,
    CLIENT = 99999
}
export declare enum ContainerTransactionType {
    NORMAL = 0,
    MISMATCH = 1,
    USE_ITEM = 2,
    USE_ITEM_ON_ENTITY = 3,
    RELEASE_ITEM = 4
}
export declare enum UseItemType {
    CLICK_BLOCK = 0,
    CLICK_AIR = 1,
    BREAK_BLOCK = 2
}
export declare enum UseItemOnEntityType {
    INTERACT = 0,
    ATTACK = 1
}
export declare type TransactionType = UseItemType & UseItemOnEntityType;
export interface ITransaction {
    type: TransactionType;
    position: Vector3;
    face?: number;
    hotbarSlot: number;
    itemHolding: IItem;
    playerPos?: Vector3;
    clickPos?: Vector3;
    blockRuntimeId?: number;
    entityRuntimeId?: bigint;
    headPos?: Vector3;
}
export declare enum InteractAction {
    LEAVE_VEHICLE = 3,
    MOUSE_OVER = 4,
    OPEN_NPC = 5,
    OPEN_INVENTORY = 6
}
export declare enum MovePlayerMode {
    NORMAL = 0,
    RESET = 1,
    TELEPORT = 2,
    PITCH = 3
}
export declare enum PlayStatusType {
    SUCCESS = 0,
    CLIENT_FAILED = 1,
    SERVER_FAILED = 2,
    PLAYER_SPAWN = 3,
    FAILED_INVALID_TENANT = 4,
    FAILED_VANILLA_EDU = 5,
    FAILED_EDU_VANILLA = 6,
    FAILED_SERVER_FULL = 7
}
export declare enum ResourcePackResponseStatus {
    NONE = 0,
    REFUSED = 1,
    SEND_PACKS = 2,
    HAVE_ALL_PACKS = 3,
    COMPLETED = 4
}
export declare enum RespawnState {
    SEARCHING = 0,
    SERVER_READY = 1,
    CLIENT_READY = 2
}
export declare enum Gamemode {
    SURVIVAL = 0,
    CREATIVE = 1,
    ADVENTURE = 2,
    SPECTATOR = 3
}
export declare enum TitleCommand {
    CLEAR = 0,
    RESET = 1,
    SET_TITLE = 2,
    SET_SUBTITLE = 3,
    SET_ACTIONBAR = 4,
    SET_ANIMATION_TIMES = 5
}
export declare enum BiomeType {
}
export declare enum GeneratorType {
    FINITE_OVERWORLD = 0,
    OVERWORLD = 1,
    FLAT = 2,
    NETHER = 3,
    END = 4
}
export declare enum Difficulty {
    PEACEFUL = 0,
    EASY = 1,
    NORMAL = 2,
    HARD = 3
}
export declare enum GameRuleType {
    BOOL = 1,
    INT = 2,
    FLOAT = 3
}
export interface IGameRule {
    name: string;
    type: GameRuleType;
}
export interface IBoolGameRule extends IGameRule {
    type: GameRuleType.BOOL;
    value: boolean;
}
export interface IIntGameRule extends IGameRule {
    type: GameRuleType.INT;
    value: number;
}
export interface IFloatGameRule extends IGameRule {
    type: GameRuleType.FLOAT;
    value: number;
}
export declare enum PlayerPermissions {
    VISITOR = 0,
    MEMBER = 1,
    OPERATOR = 2,
    CUSTOM = 3
}
export declare enum MultiplayerVisibility {
    NONE = 0,
    INVITE = 1,
    FRIENDS = 2,
    FRIENDS_OF_FRIENDS = 3,
    PUBLIC = 4
}
export interface IAttribute {
    name: string;
    defaultVal: number;
    currentVal: number;
    maxVal: number;
    minVal: number;
}
export interface IBundledPacket {
    reliability: number;
    hasSplit: boolean;
    messageIndex: number;
    sequenceIndex: number;
    orderIndex: number;
    orderChannel: number;
    splitCount: number;
    splitId: number;
    splitIndex: number;
}
export declare enum Reliability {
    Unreliable = 0,
    UnreliableSequenced = 1,
    Reliable = 2,
    ReliableOrdered = 3,
    ReliableSequenced = 4,
    UnreliableACK = 5,
    ReliableACK = 6,
    ReliableOrderedACK = 7
}
export declare const DummyAddress: IAddress;
export declare enum BitFlag {
    Valid = 128,
    ACK = 64,
    NAK = 32,
    PacketPair = 16,
    ContinuousSend = 8,
    NeedsBAndS = 4
}
