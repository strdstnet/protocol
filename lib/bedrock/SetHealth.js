"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetHealth = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class SetHealth extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.SET_HEALTH, [
            { name: 'health', parser: types_1.DataType.VARINT },
        ], p);
    }
}
exports.SetHealth = SetHealth;
