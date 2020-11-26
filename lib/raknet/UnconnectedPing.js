"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnconnectedPing = void 0;
const Packet_1 = require("../Packet");
const types_1 = require("../types");
class UnconnectedPing extends Packet_1.Packet {
    constructor(p) {
        super(types_1.Packets.UNCONNECTED_PING, [
            { name: 'pingId', parser: types_1.DataType.LONG },
            { name: 'magic', parser: types_1.DataType.MAGIC },
            { name: 'clientId', parser: types_1.DataType.LONG },
        ], p);
    }
}
exports.UnconnectedPing = UnconnectedPing;
