"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disconnect = void 0;
const BundledPacket_1 = require("../raknet/BundledPacket");
const types_1 = require("../types");
class Disconnect extends BundledPacket_1.BundledPacket {
    constructor(p) {
        super(types_1.Packets.DISCONNECT, [
            { name: 'hideScreen', parser: types_1.DataType.BOOLEAN },
            { name: 'message', parser: types_1.DataType.STRING },
        ], p);
    }
}
exports.Disconnect = Disconnect;
