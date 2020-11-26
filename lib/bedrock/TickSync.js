"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TickSync = void 0;
const types_1 = require("../types");
const BatchedPacket_1 = require("./BatchedPacket");
class TickSync extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.TICK_SYNC, [
            { name: 'clientRequestTimestamp', parser: types_1.DataType.L_LONG },
            { name: 'serverReceptionTimestamp', parser: types_1.DataType.L_LONG },
        ], p);
    }
}
exports.TickSync = TickSync;
