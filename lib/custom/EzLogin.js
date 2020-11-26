"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EzLogin = void 0;
const Packet_1 = require("../Packet");
const types_1 = require("../types");
class EzLogin extends Packet_1.Packet {
    constructor() {
        super(types_1.Packets.EZ_LOGIN, [
            { name: 'address', parser: types_1.DataType.ADDRESS },
            { name: 'mtuSize', parser: types_1.DataType.SHORT },
            { name: 'clientId', parser: types_1.DataType.LONG },
            { name: 'sequenceNumber', parser: types_1.DataType.L_TRIAD },
            { name: 'loginData', parser: types_1.DataType.BYTE_ARRAY },
        ]);
    }
}
exports.EzLogin = EzLogin;
