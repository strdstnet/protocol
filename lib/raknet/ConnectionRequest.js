"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionRequest = void 0;
const types_1 = require("../types");
const BundledPacket_1 = require("./BundledPacket");
class ConnectionRequest extends BundledPacket_1.BundledPacket {
    constructor(p) {
        super(types_1.Packets.CONNECTION_REQUEST, [
            { name: 'clientId', parser: types_1.DataType.LONG },
            { name: 'sendPingTime', parser: types_1.DataType.LONG },
            { name: 'hasSecurity', parser: types_1.DataType.BOOLEAN },
        ], p);
    }
}
exports.ConnectionRequest = ConnectionRequest;
