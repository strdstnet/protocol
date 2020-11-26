"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelEvent = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class LevelEvent extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.LEVEL_EVENT, [
            { name: 'eventId', parser: types_1.DataType.VARINT },
            { name: 'x', parser: types_1.DataType.L_FLOAT },
            { name: 'y', parser: types_1.DataType.L_FLOAT },
            { name: 'z', parser: types_1.DataType.L_FLOAT },
            { name: 'data', parser: types_1.DataType.VARINT },
        ], p);
    }
}
exports.LevelEvent = LevelEvent;
