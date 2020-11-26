"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EzTransfer = void 0;
const Packet_1 = require("../Packet");
const types_1 = require("../types");
class EzTransfer extends Packet_1.Packet {
    constructor(props) {
        super(types_1.Packets.EZ_TRANSFER, [
            { name: 'serverType', parser: types_1.DataType.STRING },
            { name: 'clientId', parser: types_1.DataType.LONG },
            { name: 'sequenceNumber', parser: types_1.DataType.L_TRIAD },
            { name: 'loginData', parser: types_1.DataType.BYTE_ARRAY },
        ]);
        this.props = props;
    }
}
exports.EzTransfer = EzTransfer;
