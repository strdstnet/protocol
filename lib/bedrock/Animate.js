"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animate = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const Packet_1 = require("../Packet");
const types_1 = require("../types");
class Animate extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.ANIMATE, [
            { name: 'action', parser: types_1.DataType.VARINT },
            { name: 'entityRuntimeId', parser: types_1.DataType.U_VARLONG },
            {
                parser({ type, data, props }) {
                    if (type === Packet_1.ParserType.ENCODE) {
                        if ((props.action & 0x80) !== 0) {
                            data.writeFloat(props.boatRowingTime || 0);
                        }
                    }
                    else {
                        if ((props.action & 0x80) !== 0) {
                            props.boatRowingTime = data.readFloat();
                        }
                    }
                },
            },
        ], p);
    }
}
exports.Animate = Animate;
