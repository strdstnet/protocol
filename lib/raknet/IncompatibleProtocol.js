"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncompatibleProtocol = void 0;
const Packet_1 = require("../Packet");
const types_1 = require("../types");
class IncompatibleProtocol extends Packet_1.Packet {
    constructor(p) {
        super(types_1.Packets.INCOMPATIBLE_PROTOCOL, [
            { name: 'protocol', parser: types_1.DataType.BYTE },
            { name: 'magic', parser: types_1.DataType.MAGIC },
            { name: 'serverId', parser: types_1.DataType.LONG },
        ], p);
    }
}
exports.IncompatibleProtocol = IncompatibleProtocol;
