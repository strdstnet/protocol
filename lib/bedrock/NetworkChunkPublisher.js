"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkChunkPublisher = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class NetworkChunkPublisher extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.NETWORK_CHUNK_PUBLISHER, [
            { name: 'x', parser: types_1.DataType.VARINT },
            { name: 'y', parser: types_1.DataType.VARINT },
            { name: 'z', parser: types_1.DataType.VARINT },
            { name: 'radius', parser: types_1.DataType.U_VARINT },
        ], p);
    }
}
exports.NetworkChunkPublisher = NetworkChunkPublisher;
