"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketViolationWarning = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class PacketViolationWarning extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.PACKET_VIOLATION_WARNING, [
            { name: 'type', parser: types_1.DataType.VARINT },
            { name: 'severity', parser: types_1.DataType.VARINT },
            { name: 'packetId', parser: types_1.DataType.VARINT },
            { name: 'message', parser: types_1.DataType.STRING },
        ], p);
    }
}
exports.PacketViolationWarning = PacketViolationWarning;
