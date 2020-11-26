"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartGame = void 0;
const utils_binary_1 = require("@strdstnet/utils.binary");
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const Packet_1 = require("../Packet");
const types_1 = require("../types");
class StartGame extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.START_GAME, [
            { name: 'entityUniqueId', parser: types_1.DataType.VARLONG },
            { name: 'entityRuntimeId', parser: types_1.DataType.U_VARLONG },
            { name: 'playerGamemode', parser: types_1.DataType.VARINT, resolve: Packet_1.def(types_1.Gamemode.SURVIVAL) },
            { name: 'position', parser: types_1.DataType.VECTOR3 },
            { name: 'pitch', parser: types_1.DataType.FLOAT },
            { name: 'yaw', parser: types_1.DataType.FLOAT },
            { name: 'seed', parser: types_1.DataType.VARINT, resolve: Packet_1.def(0) },
            { name: 'biomeType', parser: types_1.DataType.L_SHORT, resolve: Packet_1.def(0) },
            { name: 'biomeName', parser: types_1.DataType.STRING, resolve: Packet_1.def('plains') },
            { name: 'dimension', parser: types_1.DataType.VARINT, resolve: Packet_1.def(types_1.Dimension.OVERWOLD) },
            { name: 'generator', parser: types_1.DataType.VARINT, resolve: Packet_1.def(types_1.GeneratorType.OVERWORLD) },
            { name: 'worldGamemode', parser: types_1.DataType.VARINT, resolve: Packet_1.def(types_1.Gamemode.SURVIVAL) },
            { name: 'difficulty', parser: types_1.DataType.VARINT, resolve: Packet_1.def(types_1.Difficulty.NORMAL) },
            {
                name: 'spawnLocation',
                parser({ type, data, props, value }) {
                    if (type === Packet_1.ParserType.DECODE) {
                        props.spawnLocation = new utils_binary_1.Vector3(data.readVarInt(), data.readUnsignedVarInt(), data.readVarInt());
                    }
                    else {
                        data.writeVarInt(value.x);
                        data.writeUnsignedVarInt(value.y);
                        data.writeVarInt(value.z);
                    }
                },
                resolve: Packet_1.def(new utils_binary_1.Vector3(0, 0, 0)),
            },
            { name: 'achievementsDisabled', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(true) },
            { name: 'time', parser: types_1.DataType.VARINT, resolve: Packet_1.def(0) },
            { name: 'eduEditionOffer', parser: types_1.DataType.VARINT, resolve: Packet_1.def(0) },
            { name: 'eduFeaturesEnabled', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(false) },
            { name: 'eduProductUUID', parser: types_1.DataType.STRING, resolve: Packet_1.def('') },
            { name: 'rainLevel', parser: types_1.DataType.L_FLOAT, resolve: Packet_1.def(0) },
            { name: 'lightningLevel', parser: types_1.DataType.L_FLOAT, resolve: Packet_1.def(0) },
            { name: 'hasConfirmedPlatformLockedContent', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(false) },
            { name: 'isMultiplayerGame', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(true) },
            { name: 'hasLANBroadcast', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(true) },
            { name: 'xboxLiveBroadcastMode', parser: types_1.DataType.VARINT, resolve: Packet_1.def(types_1.MultiplayerVisibility.PUBLIC) },
            { name: 'platformBroadcastMode', parser: types_1.DataType.VARINT, resolve: Packet_1.def(types_1.MultiplayerVisibility.PUBLIC) },
            { name: 'commandsEnabled', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(true) },
            { name: 'texturePacksRequired', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(true) },
            {
                name: 'gameRules',
                parser({ type, data, props, value }) {
                    if (type === Packet_1.ParserType.DECODE) {
                        props.gameRules = [];
                        const count = data.readUnsignedVarInt();
                        for (let i = 0; i < count; i++) {
                            const name = data.readString();
                            const type = data.readUnsignedVarInt();
                            let value;
                            switch (type) {
                                case types_1.GameRuleType.BOOL:
                                    value = data.readBoolean();
                                    break;
                                case types_1.GameRuleType.INT:
                                    value = data.readUnsignedVarInt();
                                    break;
                                case types_1.GameRuleType.FLOAT:
                                    value = data.readFloat();
                                    break;
                                default:
                                    throw new Error(`Unknown GameRuleType (DECODE): ${type}`);
                            }
                            props.gameRules.push({ name, type, value });
                        }
                    }
                    else {
                        data.writeUnsignedVarInt(value.length);
                        for (const rule of value) {
                            data.writeString(rule.name);
                            data.writeUnsignedVarInt(rule.type);
                            switch (rule.type) {
                                case types_1.GameRuleType.BOOL:
                                    data.writeBoolean(rule.value);
                                    break;
                                case types_1.GameRuleType.INT:
                                    data.writeUnsignedVarInt(rule.value);
                                    break;
                                case types_1.GameRuleType.FLOAT:
                                    data.writeFloat(rule.value);
                                    break;
                                default:
                                    throw new Error(`Unknown GameRuleType (ENCODE): ${type}`);
                            }
                        }
                    }
                },
                resolve: Packet_1.def([
                    { name: 'naturalregeneration', type: types_1.GameRuleType.BOOL, value: false },
                    { name: 'showCoordinates', type: types_1.GameRuleType.BOOL, value: true },
                    { name: 'pvp', type: types_1.GameRuleType.BOOL, value: true },
                ]),
            },
            { name: 'experiment', parser: types_1.DataType.L_INT, resolve: Packet_1.def(0) },
            { name: 'IdontKnowhatThisIs', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(false) },
            { name: 'bonusChestEnabled', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(false) },
            { name: 'startWithMapEnabled', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(false) },
            { name: 'defaultPlayerPermission', parser: types_1.DataType.VARINT, resolve: Packet_1.def(types_1.PlayerPermissions.MEMBER) },
            { name: 'serverChunkTickRadius', parser: types_1.DataType.L_INT, resolve: Packet_1.def(4) },
            { name: 'hasLockedBehaviorPack', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(false) },
            { name: 'hasLockedResourcePack', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(false) },
            { name: 'fromLockedWorldTemplate', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(false) },
            { name: 'useMsaGamertagsOnly', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(false) },
            { name: 'fromWorldTemplate', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(false) },
            { name: 'worldTemplateOptionLocked', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(false) },
            { name: 'onlySpawnV1Villagers', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(false) },
            { name: 'vanillaVersion', parser: types_1.DataType.STRING, resolve: Packet_1.def(types_1.Protocol.BEDROCK_VERSION) },
            { name: 'limitedWorldWidth', parser: types_1.DataType.L_INT, resolve: Packet_1.def(16) },
            { name: 'limitedWorldLength', parser: types_1.DataType.L_INT, resolve: Packet_1.def(16) },
            { name: 'newNether', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(false) },
            {
                name: 'someExperimentalBullshit',
                parser({ type, data }) {
                    if (type === Packet_1.ParserType.DECODE) {
                        if (data.readBoolean())
                            data.readBoolean();
                    }
                    else {
                        data.writeBoolean(false);
                    }
                },
            },
            { name: 'levelId', parser: types_1.DataType.STRING, resolve: Packet_1.def('') },
            { name: 'worldName', parser: types_1.DataType.STRING, resolve: Packet_1.def('A Stardust Server') },
            { name: 'premiumWorldTemplateId', parser: types_1.DataType.STRING, resolve: Packet_1.def('') },
            { name: 'isTrial', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(false) },
            { name: 'isMovementServerAuthoritative', parser: types_1.DataType.VARINT, resolve: Packet_1.def(0) },
            { name: 'currentTick', parser: types_1.DataType.L_LONG, resolve: Packet_1.def(0n) },
            { name: 'enchantmentSeed', parser: types_1.DataType.VARINT, resolve: Packet_1.def(0) },
            { name: 'customBlocks', parser: types_1.DataType.U_VARINT, resolve: Packet_1.def(0) },
            {
                name: 'legacyIdMap',
                parser({ type, data, props, value }) {
                    if (type === Packet_1.ParserType.DECODE) {
                        props.legacyIdMap = {};
                        const count = data.readUnsignedVarInt();
                        for (let i = 0; i < count; i++) {
                            props.legacyIdMap[data.readString()] = data.readSignedLShort();
                        }
                    }
                    else {
                        const ids = Object.entries(value);
                        data.writeUnsignedVarInt(ids.length);
                        for (const [newId, legacyId] of ids) {
                            data.writeString(newId);
                            data.writeSignedLShort(legacyId);
                        }
                    }
                },
                resolve: Packet_1.def({}),
            },
            { name: 'multiplayerCorrelationId', parser: types_1.DataType.STRING, resolve: Packet_1.def('') },
            { name: 'enableNewInventorySystem', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(false) },
        ], p);
    }
}
exports.StartGame = StartGame;
