"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transfer = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class Transfer extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.TRANSFER, [
            { name: 'address', parser: types_1.DataType.STRING },
            { name: 'port', parser: types_1.DataType.L_SHORT },
        ], p);
    }
}
exports.Transfer = Transfer;
