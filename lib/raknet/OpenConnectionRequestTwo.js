"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenConnectionRequestTwo = void 0;
const Packet_1 = require("../Packet");
const types_1 = require("../types");
class OpenConnectionRequestTwo extends Packet_1.Packet {
    constructor(p) {
        super(types_1.Packets.OPEN_CONNECTION_REQUEST_TWO, [
            { parser: types_1.DataType.MAGIC },
            { name: 'address', parser: types_1.DataType.ADDRESS },
            { name: 'mtuSize', parser: types_1.DataType.SHORT },
            { name: 'clientId', parser: types_1.DataType.LONG },
        ], p);
    }
}
exports.OpenConnectionRequestTwo = OpenConnectionRequestTwo;
