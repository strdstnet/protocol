"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenConnectionReplyTwo = void 0;
const Packet_1 = require("../Packet");
const types_1 = require("../types");
class OpenConnectionReplyTwo extends Packet_1.Packet {
    constructor(p) {
        super(types_1.Packets.OPEN_CONNECTION_REPLY_TWO, [
            { parser: types_1.DataType.MAGIC },
            { name: 'serverId', parser: types_1.DataType.LONG },
            { name: 'address', parser: types_1.DataType.ADDRESS },
            { name: 'mtuSize', parser: types_1.DataType.SHORT },
            { parser: types_1.DataType.BYTE, resolve: () => 0 },
        ], p);
    }
}
exports.OpenConnectionReplyTwo = OpenConnectionReplyTwo;
