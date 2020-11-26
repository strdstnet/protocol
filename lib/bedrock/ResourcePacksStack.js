"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcePacksStack = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const Packet_1 = require("../Packet");
const types_1 = require("../types");
function parsePacks(behaviourPacks) {
    return ({ type, data, props }) => {
        const prop = behaviourPacks ? 'behaviourPacks' : 'resourcePacks';
        if (type === Packet_1.ParserType.DECODE) {
            props[prop] = [];
            const count = data.readUnsignedVarInt();
            for (let i = 0; i < count; i++) {
                props[prop].push({
                    id: data.readString(),
                    version: data.readString(),
                    subPackName: data.readString(),
                });
            }
        }
        else {
            data.writeUnsignedVarInt(props[prop].length);
            for (const pack of props[prop]) {
                data.writeString(pack.id);
                data.writeString(pack.version);
                data.writeString(pack.subPackName);
            }
        }
    };
}
class ResourcePacksStack extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.RESOURCE_PACKS_STACK, [
            { name: 'mustAccept', parser: types_1.DataType.BOOLEAN },
            { parser: parsePacks(true) },
            { parser: parsePacks(false) },
            { name: 'gameVersion', parser: types_1.DataType.STRING },
            {
                parser({ type, data }) {
                    if (type === Packet_1.ParserType.ENCODE) {
                        data.writeLInt(0);
                        data.writeBoolean(false);
                    }
                },
            },
        ], p);
    }
}
exports.ResourcePacksStack = ResourcePacksStack;
