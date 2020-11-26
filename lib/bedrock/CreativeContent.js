"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreativeContent = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const Packet_1 = require("../Packet");
const types_1 = require("../types");
// TODO: implement
class CreativeContent extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.CREATIVE_CONTENT, [
            {
                name: 'content',
                parser({ type, data }) {
                    if (type === Packet_1.ParserType.ENCODE) {
                        data.writeUnsignedVarInt(0);
                    }
                    else {
                        throw new Error(`DECODE not implemented`);
                    }
                }
            }
        ], p);
    }
}
exports.CreativeContent = CreativeContent;
