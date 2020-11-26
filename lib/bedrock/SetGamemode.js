"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetGamemode = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class SetGamemode extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.SET_GAMEMODE, [
            { name: 'mode', parser: types_1.DataType.VARINT },
        ], p);
    }
}
exports.SetGamemode = SetGamemode;
