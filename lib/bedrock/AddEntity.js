"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddEntity = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const Packet_1 = require("../Packet");
const types_1 = require("../types");
class AddEntity extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.ADD_ENTITY, [
            { name: 'entityUniqueId', parser: types_1.DataType.VARLONG, resolve: props => props.entityUniqueId || props.entityRuntimeId },
            { name: 'entityRuntimeId', parser: types_1.DataType.U_VARLONG },
            { name: 'type', parser: types_1.DataType.STRING },
            { name: 'position', parser: types_1.DataType.VECTOR3 },
            { name: 'motion', parser: types_1.DataType.VECTOR3 },
            { name: 'pitch', parser: types_1.DataType.FLOAT },
            { name: 'yaw', parser: types_1.DataType.FLOAT },
            { name: 'headYaw', parser: types_1.DataType.FLOAT },
            { name: 'attributes', parser: types_1.DataType.U_VARINT, resolve: Packet_1.def(0) },
            { name: 'metadata', parser: types_1.DataType.ENTITY_METADATA },
            { name: 'links', parser: types_1.DataType.U_VARINT, resolve: () => Packet_1.def(0) },
        ], p);
    }
}
exports.AddEntity = AddEntity;
