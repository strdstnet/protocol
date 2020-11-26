"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenConnectionRequestOne = void 0;
const Packet_1 = require("../Packet");
const types_1 = require("../types");
class OpenConnectionRequestOne extends Packet_1.Packet {
    constructor(p) {
        super(types_1.Packets.OPEN_CONNECTION_REQUEST_ONE, [
            { parser: types_1.DataType.MAGIC },
            { name: 'protocol', parser: types_1.DataType.BYTE },
            {
                parser({ type, data, props }) {
                    if (type === Packet_1.ParserType.ENCODE) {
                        data.writeBytes(0x00, props.mtuSize);
                    }
                    else {
                        props.mtuSize = data.length - 17;
                    }
                },
            },
        ], p);
    }
}
exports.OpenConnectionRequestOne = OpenConnectionRequestOne;
