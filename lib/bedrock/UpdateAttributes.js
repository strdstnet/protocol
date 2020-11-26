"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAttributes = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const Packet_1 = require("../Packet");
const types_1 = require("../types");
class UpdateAttributes extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.UPDATE_ATTRIBUTES, [
            { name: 'entityRuntimeId', parser: types_1.DataType.U_VARLONG },
            {
                parser({ type, data, props }) {
                    if (type === Packet_1.ParserType.DECODE) {
                        props.entries = [];
                        const count = data.readUnsignedVarInt();
                        for (let i = 0; i < count; i++) {
                            props.entries.push({
                                name: data.readString(),
                                defaultVal: data.readFloat(),
                                currentVal: data.readFloat(),
                                minVal: data.readFloat(),
                                maxVal: data.readFloat(),
                            });
                        }
                    }
                    else {
                        data.writeUnsignedVarInt(props.entries.length);
                        for (const attr of props.entries) {
                            data.writeFloat(attr.minVal);
                            data.writeFloat(attr.maxVal);
                            data.writeFloat(attr.currentVal);
                            data.writeFloat(attr.defaultVal);
                            data.writeString(attr.name);
                        }
                    }
                }
            },
            { name: 'tick', parser: types_1.DataType.U_VARLONG, resolve: Packet_1.def(BigInt(Math.round(Date.now() / 50))) },
        ], p);
    }
}
exports.UpdateAttributes = UpdateAttributes;
