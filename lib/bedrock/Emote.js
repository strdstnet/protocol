"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emote = void 0;
const types_1 = require("../types");
const BatchedPacket_1 = require("./BatchedPacket");
class Emote extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.EMOTE, [
            { name: 'runtimeEntityId', parser: types_1.DataType.U_VARLONG },
            { name: 'emoteId', parser: types_1.DataType.STRING },
            { name: 'flags', parser: types_1.DataType.BYTE },
        ], p);
    }
}
exports.Emote = Emote;
