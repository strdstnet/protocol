"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitFlag = exports.DummyAddress = exports.Reliability = exports.MultiplayerVisibility = exports.PlayerPermissions = exports.GameRuleType = exports.Difficulty = exports.GeneratorType = exports.BiomeType = exports.TitleCommand = exports.Gamemode = exports.RespawnState = exports.ResourcePackResponseStatus = exports.PlayStatusType = exports.MovePlayerMode = exports.InteractAction = exports.UseItemOnEntityType = exports.UseItemType = exports.ContainerTransactionType = exports.ContainerActionSource = exports.CommandOriginType = exports.Dimension = exports.BossEventType = exports.ArgType = exports.CommandPermissions = exports.AdventureSettingsFlag = exports.BITFLAG_SECOND_SET = exports.DataType = exports.FLOAT_MAX_VAL = exports.PacketViolationSeverity = exports.PacketViolationType = exports.Protocol = exports.Packets = void 0;
const utils_binary_1 = require("@strdstnet/utils.binary");
var Packets;
(function (Packets) {
    /* RAKNET (Raw) */
    Packets[Packets["CONNECTED_PING"] = 0] = "CONNECTED_PING";
    Packets[Packets["UNCONNECTED_PING"] = 1] = "UNCONNECTED_PING";
    Packets[Packets["PING_OPEN_CONNECTIONS"] = 2] = "PING_OPEN_CONNECTIONS";
    Packets[Packets["CONNECTED_PONG"] = 3] = "CONNECTED_PONG";
    Packets[Packets["OPEN_CONNECTION_REQUEST_ONE"] = 5] = "OPEN_CONNECTION_REQUEST_ONE";
    Packets[Packets["OPEN_CONNECTION_REPLY_ONE"] = 6] = "OPEN_CONNECTION_REPLY_ONE";
    Packets[Packets["OPEN_CONNECTION_REQUEST_TWO"] = 7] = "OPEN_CONNECTION_REQUEST_TWO";
    Packets[Packets["OPEN_CONNECTION_REPLY_TWO"] = 8] = "OPEN_CONNECTION_REPLY_TWO";
    Packets[Packets["UNCONNECTED_PONG"] = 28] = "UNCONNECTED_PONG";
    /* RAKNET (Bundled) */
    Packets[Packets["CONNECTION_REQUEST"] = 9] = "CONNECTION_REQUEST";
    Packets[Packets["CONNECTION_REQUEST_ACCEPTED"] = 16] = "CONNECTION_REQUEST_ACCEPTED";
    Packets[Packets["NEW_INCOMING_CONNECTION"] = 19] = "NEW_INCOMING_CONNECTION";
    Packets[Packets["DISCONNECTION_NOTIFICATION"] = 21] = "DISCONNECTION_NOTIFICATION";
    Packets[Packets["INCOMPATIBLE_PROTOCOL"] = 25] = "INCOMPATIBLE_PROTOCOL";
    /* STARDUST (Raw) */
    Packets[Packets["EZ_TRANSFER"] = 69] = "EZ_TRANSFER";
    Packets[Packets["EZ_LOGIN"] = 70] = "EZ_LOGIN";
    Packets[Packets["ACK"] = 192] = "ACK";
    Packets[Packets["NAK"] = 160] = "NAK";
    Packets[Packets["DATA_PACKET_0"] = 128] = "DATA_PACKET_0";
    Packets[Packets["DATA_PACKET_1"] = 129] = "DATA_PACKET_1";
    Packets[Packets["DATA_PACKET_2"] = 130] = "DATA_PACKET_2";
    Packets[Packets["DATA_PACKET_3"] = 131] = "DATA_PACKET_3";
    Packets[Packets["DATA_PACKET_4"] = 132] = "DATA_PACKET_4";
    Packets[Packets["DATA_PACKET_5"] = 133] = "DATA_PACKET_5";
    Packets[Packets["DATA_PACKET_6"] = 134] = "DATA_PACKET_6";
    Packets[Packets["DATA_PACKET_7"] = 135] = "DATA_PACKET_7";
    Packets[Packets["DATA_PACKET_8"] = 136] = "DATA_PACKET_8";
    Packets[Packets["DATA_PACKET_9"] = 137] = "DATA_PACKET_9";
    Packets[Packets["DATA_PACKET_A"] = 138] = "DATA_PACKET_A";
    Packets[Packets["DATA_PACKET_B"] = 139] = "DATA_PACKET_B";
    Packets[Packets["DATA_PACKET_C"] = 140] = "DATA_PACKET_C";
    Packets[Packets["DATA_PACKET_D"] = 141] = "DATA_PACKET_D";
    Packets[Packets["DATA_PACKET_E"] = 142] = "DATA_PACKET_E";
    Packets[Packets["DATA_PACKET_F"] = 143] = "DATA_PACKET_F";
    Packets[Packets["PACKET_BATCH"] = 254] = "PACKET_BATCH";
    /* BEDROCK (Batched) */
    Packets[Packets["LOGIN"] = 1] = "LOGIN";
    Packets[Packets["PLAY_STATUS"] = 2] = "PLAY_STATUS";
    Packets[Packets["DISCONNECT"] = 5] = "DISCONNECT";
    Packets[Packets["RESOURCE_PACKS_INFO"] = 6] = "RESOURCE_PACKS_INFO";
    Packets[Packets["RESOURCE_PACKS_STACK"] = 7] = "RESOURCE_PACKS_STACK";
    Packets[Packets["RESOURCE_PACKS_RESPONSE"] = 8] = "RESOURCE_PACKS_RESPONSE";
    Packets[Packets["TEXT"] = 9] = "TEXT";
    Packets[Packets["SET_TIME"] = 10] = "SET_TIME";
    Packets[Packets["START_GAME"] = 11] = "START_GAME";
    Packets[Packets["ADD_PLAYER"] = 12] = "ADD_PLAYER";
    Packets[Packets["ADD_ENTITY"] = 13] = "ADD_ENTITY";
    Packets[Packets["REMOVE_ENTITY"] = 14] = "REMOVE_ENTITY";
    Packets[Packets["ADD_DROPPED_ITEM"] = 15] = "ADD_DROPPED_ITEM";
    Packets[Packets["PICK_UP_DROPPED_ITEM"] = 17] = "PICK_UP_DROPPED_ITEM";
    Packets[Packets["MOVE_ENTITY"] = 18] = "MOVE_ENTITY";
    Packets[Packets["MOVE_PLAYER"] = 19] = "MOVE_PLAYER";
    Packets[Packets["BLOCK_UPDATE"] = 21] = "BLOCK_UPDATE";
    Packets[Packets["TICK_SYNC"] = 23] = "TICK_SYNC";
    Packets[Packets["LEVEL_EVENT"] = 25] = "LEVEL_EVENT";
    Packets[Packets["ENTITY_ANIMATION"] = 27] = "ENTITY_ANIMATION";
    Packets[Packets["UPDATE_ATTRIBUTES"] = 29] = "UPDATE_ATTRIBUTES";
    Packets[Packets["CONTAINER_TRANSACTION"] = 30] = "CONTAINER_TRANSACTION";
    Packets[Packets["ENTITY_EQUIPMENT"] = 31] = "ENTITY_EQUIPMENT";
    Packets[Packets["INTERACT"] = 33] = "INTERACT";
    Packets[Packets["PLAYER_ACTION"] = 36] = "PLAYER_ACTION";
    Packets[Packets["ENTITY_FALL"] = 37] = "ENTITY_FALL";
    Packets[Packets["ENTITY_METADATA"] = 39] = "ENTITY_METADATA";
    Packets[Packets["SET_ENTITY_MOTION"] = 40] = "SET_ENTITY_MOTION";
    Packets[Packets["SET_HEALTH"] = 42] = "SET_HEALTH";
    Packets[Packets["SET_SPAWN_POSITION"] = 43] = "SET_SPAWN_POSITION";
    Packets[Packets["ANIMATE"] = 44] = "ANIMATE";
    Packets[Packets["RESPAWN"] = 45] = "RESPAWN";
    Packets[Packets["CONTAINER_OPEN"] = 46] = "CONTAINER_OPEN";
    Packets[Packets["CONTAINER_CLOSE"] = 47] = "CONTAINER_CLOSE";
    Packets[Packets["CONTAINER_NOTIFICATION"] = 49] = "CONTAINER_NOTIFICATION";
    Packets[Packets["CONTAINER_UPDATE"] = 50] = "CONTAINER_UPDATE";
    Packets[Packets["ADVENTURE_SETTINGS"] = 55] = "ADVENTURE_SETTINGS";
    Packets[Packets["BLOCK_ACTOR_DATA"] = 56] = "BLOCK_ACTOR_DATA";
    Packets[Packets["LEVEL_CHUNK"] = 58] = "LEVEL_CHUNK";
    Packets[Packets["CHANGE_DIMENSION"] = 61] = "CHANGE_DIMENSION";
    Packets[Packets["SET_GAMEMODE"] = 62] = "SET_GAMEMODE";
    Packets[Packets["PLAYER_LIST"] = 63] = "PLAYER_LIST";
    Packets[Packets["REQUEST_CHUNK_RADIUS"] = 69] = "REQUEST_CHUNK_RADIUS";
    Packets[Packets["CHUNK_RADIUS_UPDATED"] = 70] = "CHUNK_RADIUS_UPDATED";
    Packets[Packets["BOSS_EVENT"] = 74] = "BOSS_EVENT";
    Packets[Packets["AVAILABLE_COMMANDS"] = 76] = "AVAILABLE_COMMANDS";
    Packets[Packets["COMMAND_REQUEST"] = 77] = "COMMAND_REQUEST";
    Packets[Packets["TRANSFER"] = 85] = "TRANSFER";
    Packets[Packets["SET_TITLE"] = 88] = "SET_TITLE";
    Packets[Packets["FORM_REQUEST"] = 100] = "FORM_REQUEST";
    Packets[Packets["FORM_RESPONSE"] = 101] = "FORM_RESPONSE";
    Packets[Packets["SET_LOCAL_PLAYER_INITIALIZED"] = 113] = "SET_LOCAL_PLAYER_INITIALIZED";
    Packets[Packets["ENTITY_DEFINITION_LIST"] = 119] = "ENTITY_DEFINITION_LIST";
    Packets[Packets["NETWORK_CHUNK_PUBLISHER"] = 121] = "NETWORK_CHUNK_PUBLISHER";
    Packets[Packets["BIOME_DEFINITION_LIST"] = 122] = "BIOME_DEFINITION_LIST";
    Packets[Packets["LEVEL_SOUND"] = 123] = "LEVEL_SOUND";
    Packets[Packets["EMOTE"] = 138] = "EMOTE";
    Packets[Packets["CREATIVE_CONTENT"] = 145] = "CREATIVE_CONTENT";
    Packets[Packets["PACKET_VIOLATION_WARNING"] = 156] = "PACKET_VIOLATION_WARNING";
    Packets[Packets["ITEM_COMPONENT"] = 162] = "ITEM_COMPONENT";
})(Packets = exports.Packets || (exports.Packets = {}));
exports.Protocol = {
    PROTOCOL_VERSION: 10,
    BEDROCK_VERSION: '1.16.100',
    SYSTEM_ADDRESSES: 20,
    MAGIC: utils_binary_1.MAGIC,
};
var PacketViolationType;
(function (PacketViolationType) {
    PacketViolationType[PacketViolationType["MALFORMED"] = 0] = "MALFORMED";
})(PacketViolationType = exports.PacketViolationType || (exports.PacketViolationType = {}));
var PacketViolationSeverity;
(function (PacketViolationSeverity) {
    PacketViolationSeverity[PacketViolationSeverity["WARNING"] = 0] = "WARNING";
    PacketViolationSeverity[PacketViolationSeverity["FINAL_WARNING"] = 1] = "FINAL_WARNING";
    PacketViolationSeverity[PacketViolationSeverity["TERMINATING_CONNECTION"] = 2] = "TERMINATING_CONNECTION";
})(PacketViolationSeverity = exports.PacketViolationSeverity || (exports.PacketViolationSeverity = {}));
exports.FLOAT_MAX_VAL = 340282346638528859811704183484516925440;
var DataType;
(function (DataType) {
    DataType[DataType["BYTE"] = 0] = "BYTE";
    DataType[DataType["LONG"] = 1] = "LONG";
    DataType[DataType["MAGIC"] = 2] = "MAGIC";
    DataType[DataType["INT"] = 3] = "INT";
    DataType[DataType["SHORT"] = 4] = "SHORT";
    DataType[DataType["STRING"] = 5] = "STRING";
    DataType[DataType["RAW_STRING"] = 6] = "RAW_STRING";
    DataType[DataType["SECURITY"] = 7] = "SECURITY";
    DataType[DataType["BOOLEAN"] = 8] = "BOOLEAN";
    DataType[DataType["ADDRESS"] = 9] = "ADDRESS";
    DataType[DataType["L_INT"] = 10] = "L_INT";
    DataType[DataType["L_TRIAD"] = 11] = "L_TRIAD";
    DataType[DataType["L_SHORT"] = 12] = "L_SHORT";
    DataType[DataType["FLOAT"] = 13] = "FLOAT";
    DataType[DataType["L_FLOAT"] = 14] = "L_FLOAT";
    DataType[DataType["L_LONG"] = 15] = "L_LONG";
    DataType[DataType["VECTOR3_FLOAT"] = 16] = "VECTOR3_FLOAT";
    DataType[DataType["VECTOR3_VARINT"] = 17] = "VECTOR3_VARINT";
    DataType[DataType["VECTOR3"] = 18] = "VECTOR3";
    DataType[DataType["VARINT"] = 19] = "VARINT";
    DataType[DataType["U_VARINT"] = 20] = "U_VARINT";
    DataType[DataType["VARLONG"] = 21] = "VARLONG";
    DataType[DataType["U_VARLONG"] = 22] = "U_VARLONG";
    DataType[DataType["CONTAINER_ITEM"] = 23] = "CONTAINER_ITEM";
    DataType[DataType["CHUNK"] = 24] = "CHUNK";
    DataType[DataType["UUID"] = 25] = "UUID";
    DataType[DataType["ENTITY_METADATA"] = 26] = "ENTITY_METADATA";
    DataType[DataType["BYTE_ROTATION"] = 27] = "BYTE_ROTATION";
    DataType[DataType["BLOCK_POSITION"] = 28] = "BLOCK_POSITION";
    DataType[DataType["BYTE_ARRAY"] = 29] = "BYTE_ARRAY";
})(DataType = exports.DataType || (exports.DataType = {}));
exports.BITFLAG_SECOND_SET = 1 << 16;
var AdventureSettingsFlag;
(function (AdventureSettingsFlag) {
    AdventureSettingsFlag[AdventureSettingsFlag["WORLD_IMMUTABLE"] = 1] = "WORLD_IMMUTABLE";
    AdventureSettingsFlag[AdventureSettingsFlag["NO_PVP"] = 2] = "NO_PVP";
    AdventureSettingsFlag[AdventureSettingsFlag["AUTO_JUMP"] = 32] = "AUTO_JUMP";
    AdventureSettingsFlag[AdventureSettingsFlag["ALLOW_FLIGHT"] = 64] = "ALLOW_FLIGHT";
    AdventureSettingsFlag[AdventureSettingsFlag["NO_CLIP"] = 128] = "NO_CLIP";
    AdventureSettingsFlag[AdventureSettingsFlag["WORLD_BUILDER"] = 256] = "WORLD_BUILDER";
    AdventureSettingsFlag[AdventureSettingsFlag["FLYING"] = 512] = "FLYING";
    AdventureSettingsFlag[AdventureSettingsFlag["MUTED"] = 1024] = "MUTED";
    AdventureSettingsFlag[AdventureSettingsFlag["BUILD_AND_MINE"] = 0x01 | exports.BITFLAG_SECOND_SET] = "BUILD_AND_MINE";
    AdventureSettingsFlag[AdventureSettingsFlag["DOORS_AND_SWITCHES"] = 0x02 | exports.BITFLAG_SECOND_SET] = "DOORS_AND_SWITCHES";
    AdventureSettingsFlag[AdventureSettingsFlag["OPEN_CONTAINERS"] = 0x04 | exports.BITFLAG_SECOND_SET] = "OPEN_CONTAINERS";
    AdventureSettingsFlag[AdventureSettingsFlag["ATTACK_PLAYERS"] = 0x08 | exports.BITFLAG_SECOND_SET] = "ATTACK_PLAYERS";
    AdventureSettingsFlag[AdventureSettingsFlag["ATTACK_MOBS"] = 0x10 | exports.BITFLAG_SECOND_SET] = "ATTACK_MOBS";
    AdventureSettingsFlag[AdventureSettingsFlag["OPERATOR"] = 0x20 | exports.BITFLAG_SECOND_SET] = "OPERATOR";
    AdventureSettingsFlag[AdventureSettingsFlag["TELEPORT"] = 0x80 | exports.BITFLAG_SECOND_SET] = "TELEPORT";
})(AdventureSettingsFlag = exports.AdventureSettingsFlag || (exports.AdventureSettingsFlag = {}));
var CommandPermissions;
(function (CommandPermissions) {
    CommandPermissions[CommandPermissions["NORMAL"] = 0] = "NORMAL";
    CommandPermissions[CommandPermissions["OPERATOR"] = 1] = "OPERATOR";
    CommandPermissions[CommandPermissions["HOST"] = 2] = "HOST";
    CommandPermissions[CommandPermissions["AUTOMATION"] = 3] = "AUTOMATION";
    CommandPermissions[CommandPermissions["ADMIN"] = 4] = "ADMIN";
})(CommandPermissions = exports.CommandPermissions || (exports.CommandPermissions = {}));
var ArgType;
(function (ArgType) {
    ArgType[ArgType["INT"] = 1] = "INT";
    ArgType[ArgType["FLOAT"] = 2] = "FLOAT";
    ArgType[ArgType["VALUE"] = 3] = "VALUE";
    ArgType[ArgType["WILDCARD_INT"] = 4] = "WILDCARD_INT";
    ArgType[ArgType["OPERATOR"] = 5] = "OPERATOR";
    ArgType[ArgType["TARGET"] = 6] = "TARGET";
    ArgType[ArgType["FILE_PATH"] = 14] = "FILE_PATH";
    ArgType[ArgType["STRING"] = 29] = "STRING";
    ArgType[ArgType["POSITION"] = 37] = "POSITION";
    ArgType[ArgType["MESSAGE"] = 41] = "MESSAGE";
    ArgType[ArgType["RAW_TEXT"] = 43] = "RAW_TEXT";
    ArgType[ArgType["JSON"] = 47] = "JSON";
    ArgType[ArgType["COMMAND"] = 54] = "COMMAND";
})(ArgType = exports.ArgType || (exports.ArgType = {}));
var BossEventType;
(function (BossEventType) {
    BossEventType[BossEventType["SHOW"] = 0] = "SHOW";
    BossEventType[BossEventType["REGISTER_PLAYER"] = 1] = "REGISTER_PLAYER";
    BossEventType[BossEventType["HIDE"] = 2] = "HIDE";
    BossEventType[BossEventType["UNREGISTER_PLAYER"] = 3] = "UNREGISTER_PLAYER";
    BossEventType[BossEventType["SET_HEALTH"] = 4] = "SET_HEALTH";
    BossEventType[BossEventType["SET_TITLE"] = 5] = "SET_TITLE";
    BossEventType[BossEventType["UNKNOWN"] = 6] = "UNKNOWN";
    BossEventType[BossEventType["SET_TEXTURE"] = 7] = "SET_TEXTURE";
})(BossEventType = exports.BossEventType || (exports.BossEventType = {}));
var Dimension;
(function (Dimension) {
    Dimension[Dimension["OVERWOLD"] = 0] = "OVERWOLD";
    Dimension[Dimension["NETHER"] = 1] = "NETHER";
    Dimension[Dimension["END"] = 2] = "END";
})(Dimension = exports.Dimension || (exports.Dimension = {}));
var CommandOriginType;
(function (CommandOriginType) {
    CommandOriginType[CommandOriginType["PLAYER"] = 0] = "PLAYER";
    CommandOriginType[CommandOriginType["BLOCK"] = 1] = "BLOCK";
    CommandOriginType[CommandOriginType["MINECART_BLOCK"] = 2] = "MINECART_BLOCK";
    CommandOriginType[CommandOriginType["DEV_CONSOLE"] = 3] = "DEV_CONSOLE";
    CommandOriginType[CommandOriginType["TEST"] = 4] = "TEST";
    CommandOriginType[CommandOriginType["PLAYER_AUTOMATION"] = 5] = "PLAYER_AUTOMATION";
    CommandOriginType[CommandOriginType["CLIENT_AUTOMATION"] = 6] = "CLIENT_AUTOMATION";
    CommandOriginType[CommandOriginType["DEDICATED_SERVER"] = 7] = "DEDICATED_SERVER";
    CommandOriginType[CommandOriginType["ENTITY"] = 8] = "ENTITY";
    CommandOriginType[CommandOriginType["VIRTUAL"] = 9] = "VIRTUAL";
    CommandOriginType[CommandOriginType["GAME_ARGUMENT"] = 10] = "GAME_ARGUMENT";
    CommandOriginType[CommandOriginType["ENTITY_SERVER"] = 11] = "ENTITY_SERVER";
})(CommandOriginType = exports.CommandOriginType || (exports.CommandOriginType = {}));
var ContainerActionSource;
(function (ContainerActionSource) {
    ContainerActionSource[ContainerActionSource["CONTAINER"] = 0] = "CONTAINER";
    ContainerActionSource[ContainerActionSource["WORLD"] = 2] = "WORLD";
    ContainerActionSource[ContainerActionSource["CREATIVE"] = 3] = "CREATIVE";
    ContainerActionSource[ContainerActionSource["CLIENT"] = 99999] = "CLIENT";
})(ContainerActionSource = exports.ContainerActionSource || (exports.ContainerActionSource = {}));
var ContainerTransactionType;
(function (ContainerTransactionType) {
    ContainerTransactionType[ContainerTransactionType["NORMAL"] = 0] = "NORMAL";
    ContainerTransactionType[ContainerTransactionType["MISMATCH"] = 1] = "MISMATCH";
    ContainerTransactionType[ContainerTransactionType["USE_ITEM"] = 2] = "USE_ITEM";
    ContainerTransactionType[ContainerTransactionType["USE_ITEM_ON_ENTITY"] = 3] = "USE_ITEM_ON_ENTITY";
    ContainerTransactionType[ContainerTransactionType["RELEASE_ITEM"] = 4] = "RELEASE_ITEM";
})(ContainerTransactionType = exports.ContainerTransactionType || (exports.ContainerTransactionType = {}));
var UseItemType;
(function (UseItemType) {
    UseItemType[UseItemType["CLICK_BLOCK"] = 0] = "CLICK_BLOCK";
    UseItemType[UseItemType["CLICK_AIR"] = 1] = "CLICK_AIR";
    UseItemType[UseItemType["BREAK_BLOCK"] = 2] = "BREAK_BLOCK";
})(UseItemType = exports.UseItemType || (exports.UseItemType = {}));
var UseItemOnEntityType;
(function (UseItemOnEntityType) {
    UseItemOnEntityType[UseItemOnEntityType["INTERACT"] = 0] = "INTERACT";
    UseItemOnEntityType[UseItemOnEntityType["ATTACK"] = 1] = "ATTACK";
})(UseItemOnEntityType = exports.UseItemOnEntityType || (exports.UseItemOnEntityType = {}));
var InteractAction;
(function (InteractAction) {
    InteractAction[InteractAction["LEAVE_VEHICLE"] = 3] = "LEAVE_VEHICLE";
    InteractAction[InteractAction["MOUSE_OVER"] = 4] = "MOUSE_OVER";
    InteractAction[InteractAction["OPEN_NPC"] = 5] = "OPEN_NPC";
    InteractAction[InteractAction["OPEN_INVENTORY"] = 6] = "OPEN_INVENTORY";
})(InteractAction = exports.InteractAction || (exports.InteractAction = {}));
var MovePlayerMode;
(function (MovePlayerMode) {
    MovePlayerMode[MovePlayerMode["NORMAL"] = 0] = "NORMAL";
    MovePlayerMode[MovePlayerMode["RESET"] = 1] = "RESET";
    MovePlayerMode[MovePlayerMode["TELEPORT"] = 2] = "TELEPORT";
    MovePlayerMode[MovePlayerMode["PITCH"] = 3] = "PITCH";
})(MovePlayerMode = exports.MovePlayerMode || (exports.MovePlayerMode = {}));
var PlayStatusType;
(function (PlayStatusType) {
    PlayStatusType[PlayStatusType["SUCCESS"] = 0] = "SUCCESS";
    PlayStatusType[PlayStatusType["CLIENT_FAILED"] = 1] = "CLIENT_FAILED";
    PlayStatusType[PlayStatusType["SERVER_FAILED"] = 2] = "SERVER_FAILED";
    PlayStatusType[PlayStatusType["PLAYER_SPAWN"] = 3] = "PLAYER_SPAWN";
    PlayStatusType[PlayStatusType["FAILED_INVALID_TENANT"] = 4] = "FAILED_INVALID_TENANT";
    PlayStatusType[PlayStatusType["FAILED_VANILLA_EDU"] = 5] = "FAILED_VANILLA_EDU";
    PlayStatusType[PlayStatusType["FAILED_EDU_VANILLA"] = 6] = "FAILED_EDU_VANILLA";
    PlayStatusType[PlayStatusType["FAILED_SERVER_FULL"] = 7] = "FAILED_SERVER_FULL";
})(PlayStatusType = exports.PlayStatusType || (exports.PlayStatusType = {}));
var ResourcePackResponseStatus;
(function (ResourcePackResponseStatus) {
    ResourcePackResponseStatus[ResourcePackResponseStatus["NONE"] = 0] = "NONE";
    ResourcePackResponseStatus[ResourcePackResponseStatus["REFUSED"] = 1] = "REFUSED";
    ResourcePackResponseStatus[ResourcePackResponseStatus["SEND_PACKS"] = 2] = "SEND_PACKS";
    ResourcePackResponseStatus[ResourcePackResponseStatus["HAVE_ALL_PACKS"] = 3] = "HAVE_ALL_PACKS";
    ResourcePackResponseStatus[ResourcePackResponseStatus["COMPLETED"] = 4] = "COMPLETED";
})(ResourcePackResponseStatus = exports.ResourcePackResponseStatus || (exports.ResourcePackResponseStatus = {}));
var RespawnState;
(function (RespawnState) {
    RespawnState[RespawnState["SEARCHING"] = 0] = "SEARCHING";
    RespawnState[RespawnState["SERVER_READY"] = 1] = "SERVER_READY";
    RespawnState[RespawnState["CLIENT_READY"] = 2] = "CLIENT_READY";
})(RespawnState = exports.RespawnState || (exports.RespawnState = {}));
var Gamemode;
(function (Gamemode) {
    Gamemode[Gamemode["SURVIVAL"] = 0] = "SURVIVAL";
    Gamemode[Gamemode["CREATIVE"] = 1] = "CREATIVE";
    Gamemode[Gamemode["ADVENTURE"] = 2] = "ADVENTURE";
    Gamemode[Gamemode["SPECTATOR"] = 3] = "SPECTATOR";
})(Gamemode = exports.Gamemode || (exports.Gamemode = {}));
var TitleCommand;
(function (TitleCommand) {
    TitleCommand[TitleCommand["CLEAR"] = 0] = "CLEAR";
    TitleCommand[TitleCommand["RESET"] = 1] = "RESET";
    TitleCommand[TitleCommand["SET_TITLE"] = 2] = "SET_TITLE";
    TitleCommand[TitleCommand["SET_SUBTITLE"] = 3] = "SET_SUBTITLE";
    TitleCommand[TitleCommand["SET_ACTIONBAR"] = 4] = "SET_ACTIONBAR";
    TitleCommand[TitleCommand["SET_ANIMATION_TIMES"] = 5] = "SET_ANIMATION_TIMES";
})(TitleCommand = exports.TitleCommand || (exports.TitleCommand = {}));
// TODO: Biome types
var BiomeType;
(function (BiomeType) {
})(BiomeType = exports.BiomeType || (exports.BiomeType = {}));
var GeneratorType;
(function (GeneratorType) {
    GeneratorType[GeneratorType["FINITE_OVERWORLD"] = 0] = "FINITE_OVERWORLD";
    GeneratorType[GeneratorType["OVERWORLD"] = 1] = "OVERWORLD";
    GeneratorType[GeneratorType["FLAT"] = 2] = "FLAT";
    GeneratorType[GeneratorType["NETHER"] = 3] = "NETHER";
    GeneratorType[GeneratorType["END"] = 4] = "END";
})(GeneratorType = exports.GeneratorType || (exports.GeneratorType = {}));
var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["PEACEFUL"] = 0] = "PEACEFUL";
    Difficulty[Difficulty["EASY"] = 1] = "EASY";
    Difficulty[Difficulty["NORMAL"] = 2] = "NORMAL";
    Difficulty[Difficulty["HARD"] = 3] = "HARD";
})(Difficulty = exports.Difficulty || (exports.Difficulty = {}));
var GameRuleType;
(function (GameRuleType) {
    GameRuleType[GameRuleType["BOOL"] = 1] = "BOOL";
    GameRuleType[GameRuleType["INT"] = 2] = "INT";
    GameRuleType[GameRuleType["FLOAT"] = 3] = "FLOAT";
})(GameRuleType = exports.GameRuleType || (exports.GameRuleType = {}));
var PlayerPermissions;
(function (PlayerPermissions) {
    PlayerPermissions[PlayerPermissions["VISITOR"] = 0] = "VISITOR";
    PlayerPermissions[PlayerPermissions["MEMBER"] = 1] = "MEMBER";
    PlayerPermissions[PlayerPermissions["OPERATOR"] = 2] = "OPERATOR";
    PlayerPermissions[PlayerPermissions["CUSTOM"] = 3] = "CUSTOM";
})(PlayerPermissions = exports.PlayerPermissions || (exports.PlayerPermissions = {}));
var MultiplayerVisibility;
(function (MultiplayerVisibility) {
    MultiplayerVisibility[MultiplayerVisibility["NONE"] = 0] = "NONE";
    MultiplayerVisibility[MultiplayerVisibility["INVITE"] = 1] = "INVITE";
    MultiplayerVisibility[MultiplayerVisibility["FRIENDS"] = 2] = "FRIENDS";
    MultiplayerVisibility[MultiplayerVisibility["FRIENDS_OF_FRIENDS"] = 3] = "FRIENDS_OF_FRIENDS";
    MultiplayerVisibility[MultiplayerVisibility["PUBLIC"] = 4] = "PUBLIC";
})(MultiplayerVisibility = exports.MultiplayerVisibility || (exports.MultiplayerVisibility = {}));
var Reliability;
(function (Reliability) {
    Reliability[Reliability["Unreliable"] = 0] = "Unreliable";
    Reliability[Reliability["UnreliableSequenced"] = 1] = "UnreliableSequenced";
    Reliability[Reliability["Reliable"] = 2] = "Reliable";
    Reliability[Reliability["ReliableOrdered"] = 3] = "ReliableOrdered";
    Reliability[Reliability["ReliableSequenced"] = 4] = "ReliableSequenced";
    Reliability[Reliability["UnreliableACK"] = 5] = "UnreliableACK";
    Reliability[Reliability["ReliableACK"] = 6] = "ReliableACK";
    Reliability[Reliability["ReliableOrderedACK"] = 7] = "ReliableOrderedACK";
})(Reliability = exports.Reliability || (exports.Reliability = {}));
exports.DummyAddress = {
    ip: '0.0.0.0',
    port: 19132,
    family: 4,
};
var BitFlag;
(function (BitFlag) {
    BitFlag[BitFlag["Valid"] = 128] = "Valid";
    BitFlag[BitFlag["ACK"] = 64] = "ACK";
    BitFlag[BitFlag["NAK"] = 32] = "NAK";
    BitFlag[BitFlag["PacketPair"] = 16] = "PacketPair";
    BitFlag[BitFlag["ContinuousSend"] = 8] = "ContinuousSend";
    BitFlag[BitFlag["NeedsBAndS"] = 4] = "NeedsBAndS";
})(BitFlag = exports.BitFlag || (exports.BitFlag = {}));
