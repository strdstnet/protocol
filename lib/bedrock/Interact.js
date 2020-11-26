"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interact = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const Packet_1 = require("../Packet");
const types_1 = require("../types");
// TODO: Implement properly?
class Interact extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.INTERACT, [
            { name: 'action', parser: types_1.DataType.BYTE },
            { name: 'target', parser: types_1.DataType.U_VARLONG },
            {
                parser({ type, data, props }) {
                    if (type === Packet_1.ParserType.ENCODE) {
                        if (props.action == types_1.InteractAction.MOUSE_OVER) {
                            data.readFloat();
                            data.readFloat();
                            data.readFloat();
                        }
                    }
                    else {
                        throw new Error(`DECODE not implemented`);
                    }
                },
            },
        ], p);
    }
}
exports.Interact = Interact;
