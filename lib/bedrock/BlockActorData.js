"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockActorData = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class BlockActorData extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.BLOCK_ACTOR_DATA, [
            { name: 'x', parser: types_1.DataType.VARINT },
            { name: 'y', parser: types_1.DataType.U_VARINT },
            { name: 'z', parser: types_1.DataType.VARINT },
            { name: 'namedTag', parser: types_1.DataType.STRING },
        ], p);
    }
}
exports.BlockActorData = BlockActorData;
