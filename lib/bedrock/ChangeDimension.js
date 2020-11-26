"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeDimension = void 0;
const Packet_1 = require("../Packet");
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class ChangeDimension extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.CHANGE_DIMENSION, [
            { name: 'dimension', parser: types_1.DataType.VARINT },
            { name: 'position', parser: types_1.DataType.VECTOR3 },
            { name: 'respawn', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(false) },
        ], p);
    }
}
exports.ChangeDimension = ChangeDimension;
