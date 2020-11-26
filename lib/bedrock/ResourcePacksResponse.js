"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcePacksResponse = void 0;
const Packet_1 = require("../Packet");
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class ResourcePacksResponse extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.RESOURCE_PACKS_RESPONSE, [
            { name: 'status', parser: types_1.DataType.BYTE },
            {
                parser({ type, data, props }) {
                    if (type === Packet_1.ParserType.DECODE) {
                        props.packIds = [];
                        const count = data.readLShort();
                        for (let i = 0; i < count; i++) {
                            props.packIds.push(data.readString());
                        }
                    }
                    else {
                        data.writeLShort(props.packIds.length);
                        for (const id of props.packIds) {
                            data.writeString(id);
                        }
                    }
                },
            },
        ], p);
    }
}
exports.ResourcePacksResponse = ResourcePacksResponse;
