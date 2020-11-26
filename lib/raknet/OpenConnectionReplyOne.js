"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenConnectionReplyOne = void 0;
const Packet_1 = require("../Packet");
const types_1 = require("../types");
class OpenConnectionReplyOne extends Packet_1.Packet {
    constructor(p) {
        super(types_1.Packets.OPEN_CONNECTION_REPLY_ONE, [
            { parser: types_1.DataType.MAGIC },
            { name: 'serverId', parser: types_1.DataType.LONG },
            { parser: types_1.DataType.BYTE, resolve: () => 0 },
            { name: 'mtuSize', parser: types_1.DataType.SHORT },
        ], p);
    }
}
exports.OpenConnectionReplyOne = OpenConnectionReplyOne;
