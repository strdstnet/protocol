"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectedPing = void 0;
const types_1 = require("../types");
const BundledPacket_1 = require("./BundledPacket");
class ConnectedPing extends BundledPacket_1.BundledPacket {
    constructor(p) {
        super(types_1.Packets.CONNECTED_PING, [
            { name: 'time', parser: types_1.DataType.LONG },
        ], p);
    }
}
exports.ConnectedPing = ConnectedPing;
