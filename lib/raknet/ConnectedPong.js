"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectedPong = void 0;
const types_1 = require("../types");
const BundledPacket_1 = require("./BundledPacket");
class ConnectedPong extends BundledPacket_1.BundledPacket {
    constructor(p) {
        super(types_1.Packets.CONNECTED_PONG, [
            { name: 'pingTime', parser: types_1.DataType.LONG },
            { name: 'pongTime', parser: types_1.DataType.LONG },
        ], p);
    }
}
exports.ConnectedPong = ConnectedPong;
