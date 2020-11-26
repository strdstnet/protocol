"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPlayer = void 0;
const Metadata_1 = require("@strdstnet/utils.binary/lib/Metadata");
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const Packet_1 = require("../Packet");
const types_1 = require("../types");
class AddPlayer extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.ADD_PLAYER, [
            { name: 'uuid', parser: types_1.DataType.UUID },
            { name: 'username', parser: types_1.DataType.STRING },
            { name: 'entityUniqueId', parser: types_1.DataType.VARLONG },
            { name: 'entityRuntimeId', parser: types_1.DataType.U_VARLONG },
            { name: 'platformChatId', parser: types_1.DataType.STRING, resolve: Packet_1.def('') },
            { name: 'position', parser: types_1.DataType.VECTOR3 },
            { name: 'motion', parser: types_1.DataType.VECTOR3 },
            { name: 'pitch', parser: types_1.DataType.FLOAT },
            { name: 'yaw', parser: types_1.DataType.FLOAT },
            { name: 'headYaw', parser: types_1.DataType.FLOAT },
            { name: 'item', parser: types_1.DataType.CONTAINER_ITEM, resolve: Packet_1.def(0) },
            { name: 'metadata', parser: types_1.DataType.ENTITY_METADATA, resolve: Packet_1.def(new Metadata_1.Metadata()) },
            { parser: types_1.DataType.U_VARINT, resolve: Packet_1.def(0) },
            { parser: types_1.DataType.U_VARINT, resolve: Packet_1.def(0) },
            { parser: types_1.DataType.U_VARINT, resolve: Packet_1.def(0) },
            { parser: types_1.DataType.U_VARINT, resolve: Packet_1.def(0) },
            { parser: types_1.DataType.U_VARINT, resolve: Packet_1.def(0) },
            { parser: types_1.DataType.L_LONG, resolve: Packet_1.def(0n) },
            { parser: types_1.DataType.U_VARINT, resolve: Packet_1.def(0) },
            { name: 'deviceId', parser: types_1.DataType.STRING, resolve: Packet_1.def('') },
            { name: 'buildPlatform', parser: types_1.DataType.L_INT, resolve: Packet_1.def(0) },
        ], p);
    }
}
exports.AddPlayer = AddPlayer;
