"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerNotification = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const Packet_1 = require("../Packet");
const types_1 = require("../types");
class ContainerNotification extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.CONTAINER_NOTIFICATION, [
            { name: 'containerId', parser: types_1.DataType.U_VARINT },
            {
                name: 'items',
                parser({ type, data, props }) {
                    if (type === Packet_1.ParserType.ENCODE) {
                        data.writeUnsignedVarInt(props.items.length);
                        for (let i = 0; i < props.items.length; i++) {
                            const item = props.items[i];
                            data.writeVarInt(item.id === 0 || item.count < 1 ? 0 : 1);
                            data.writeContainerItem(item);
                        }
                    }
                    else {
                        const count = data.readUnsignedVarInt();
                        props.items = [];
                        for (let i = 0; i < count; i++) {
                            const isEmpty = data.readVarInt() === 1;
                            props.items.push(data.readContainerItem());
                        }
                    }
                },
            },
        ], p);
    }
}
exports.ContainerNotification = ContainerNotification;
