"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayStatus = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class PlayStatus extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.PLAY_STATUS, [
            { name: 'status', parser: types_1.DataType.INT },
        ], p);
    }
}
exports.PlayStatus = PlayStatus;
