"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChunkRadiusUpdated = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class ChunkRadiusUpdated extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.CHUNK_RADIUS_UPDATED, [
            { name: 'radius', parser: types_1.DataType.VARINT },
        ], p);
    }
}
exports.ChunkRadiusUpdated = ChunkRadiusUpdated;
