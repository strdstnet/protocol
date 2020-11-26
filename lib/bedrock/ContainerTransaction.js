"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerTransaction = void 0;
const BatchedPacket_1 = require("./BatchedPacket");
const Packet_1 = require("../Packet");
const types_1 = require("../types");
const utils_binary_1 = require("@strdstnet/utils.binary");
class ContainerTransaction extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.CONTAINER_TRANSACTION, [
            { name: 'requestId', parser: types_1.DataType.VARINT },
            {
                parser({ type, data, props }) {
                    if (type === Packet_1.ParserType.ENCODE) {
                        if (props.requestId !== 0) {
                            data.writeUnsignedVarInt(props.requestChangedSlots.length);
                            for (const { containerId, indexes } of props.requestChangedSlots) {
                                data.writeByte(containerId);
                                data.writeUnsignedVarInt(indexes.length);
                                indexes.forEach(i => data.writeByte(i));
                            }
                        }
                    }
                    else {
                        props.requestChangedSlots = [];
                        if (props.requestId !== 0) {
                            const count = data.readUnsignedVarInt();
                            for (let i = 0; i < count; i++) {
                                const containerId = data.readByte();
                                const count2 = data.readUnsignedVarInt();
                                const indexes = [];
                                for (let i2 = 0; i2 < count2; i2++) {
                                    indexes.push(data.readByte());
                                }
                                props.requestChangedSlots.push({ containerId, indexes });
                            }
                        }
                    }
                },
            },
            { name: 'transactionType', parser: types_1.DataType.U_VARINT },
            { name: 'hasItemStackIds', parser: types_1.DataType.BOOLEAN },
            {
                parser({ type, data, props }) {
                    if (type === Packet_1.ParserType.ENCODE) {
                        data.writeUnsignedVarInt(props.actions.length);
                        for (const action of props.actions) {
                            data.writeUnsignedVarInt(action.sourceType);
                            switch (action.sourceType) {
                                case types_1.ContainerActionSource.CONTAINER:
                                case types_1.ContainerActionSource.CLIENT:
                                    data.writeVarInt(action.containerId);
                                    break;
                                case types_1.ContainerActionSource.WORLD:
                                    data.writeUnsignedVarInt(action.sourceFlags || 0);
                                    break;
                                case types_1.ContainerActionSource.CREATIVE:
                                    break;
                                default:
                                    throw new Error(`Unknown inventory source type ${action.sourceType}`);
                            }
                            data.writeUnsignedVarInt(action.slot);
                            data.writeContainerItem(action.oldItem);
                            data.writeContainerItem(action.newItem);
                            if (props.hasItemStackIds && action.newItemStackId) {
                                data.writeVarInt(action.newItemStackId);
                            }
                        }
                    }
                    else {
                        props.actions = [];
                        const count = data.readUnsignedVarInt();
                        for (let i = 0; i < count; i++) {
                            const action = {};
                            action.sourceType = data.readUnsignedVarInt();
                            switch (action.sourceType) {
                                case types_1.ContainerActionSource.CONTAINER:
                                case types_1.ContainerActionSource.CLIENT:
                                    action.containerId = data.readVarInt();
                                    break;
                                case types_1.ContainerActionSource.WORLD:
                                    action.sourceFlags = data.readUnsignedVarInt();
                                    break;
                                case types_1.ContainerActionSource.CREATIVE:
                                    break;
                                default:
                                    throw new Error(`Unknown inventory source type ${action.sourceType}`);
                            }
                            action.slot = data.readUnsignedVarInt();
                            action.oldItem = data.readContainerItem();
                            action.newItem = data.readContainerItem();
                            if (props.hasItemStackIds) {
                                action.newItemStackId = data.readVarInt();
                            }
                            props.actions.push(action);
                        }
                    }
                },
            },
            {
                parser({ type, data, props }) {
                    if (type === Packet_1.ParserType.ENCODE) {
                        switch (props.transactionType) {
                            case types_1.ContainerTransactionType.USE_ITEM:
                                const useItem = props.transaction;
                                data.writeUnsignedVarInt(useItem.type);
                                data.writeVarInt(useItem.position.x);
                                data.writeUnsignedVarInt(useItem.position.y);
                                data.writeVarInt(useItem.position.z);
                                data.writeVarInt(useItem.face);
                                data.writeVarInt(useItem.hotbarSlot);
                                data.writeContainerItem(useItem.itemHolding);
                                data.writeVector3(useItem.playerPos);
                                data.writeVector3(useItem.clickPos);
                                data.writeUnsignedVarInt(useItem.blockRuntimeId);
                                break;
                            case types_1.ContainerTransactionType.USE_ITEM_ON_ENTITY:
                                const useItemEntity = props.transaction;
                                data.writeUnsignedVarLong(useItemEntity.entityRuntimeId);
                                data.writeUnsignedVarInt(useItemEntity.type);
                                data.writeVarInt(useItemEntity.hotbarSlot);
                                data.writeContainerItem(useItemEntity.itemHolding);
                                data.writeVector3(useItemEntity.playerPos);
                                data.writeVector3(useItemEntity.clickPos);
                                break;
                            case types_1.ContainerTransactionType.RELEASE_ITEM:
                                const itemRelease = props.transaction;
                                data.writeUnsignedVarInt(itemRelease.type);
                                data.writeVarInt(itemRelease.hotbarSlot);
                                data.writeContainerItem(itemRelease.itemHolding);
                                data.writeVector3(itemRelease.headPos);
                                break;
                            case types_1.ContainerTransactionType.NORMAL:
                            case types_1.ContainerTransactionType.MISMATCH:
                                break;
                            default:
                                throw new Error(`Unknown transaction type ${props.transactionType}`);
                        }
                    }
                    else {
                        switch (props.transactionType) {
                            case types_1.ContainerTransactionType.USE_ITEM:
                                props.transaction = {
                                    type: data.readUnsignedVarInt(),
                                    position: new utils_binary_1.Vector3(data.readVarInt(), data.readUnsignedVarInt(), data.readVarInt()),
                                    face: data.readVarInt(),
                                    hotbarSlot: data.readVarInt(),
                                    itemHolding: data.readContainerItem(),
                                    playerPos: data.readVector3(),
                                    clickPos: data.readVector3(),
                                    blockRuntimeId: data.readUnsignedVarInt(),
                                };
                                break;
                            case types_1.ContainerTransactionType.USE_ITEM_ON_ENTITY:
                                props.transaction = {
                                    entityRuntimeId: data.readUnsignedVarLong(),
                                    type: data.readUnsignedVarInt(),
                                    hotbarSlot: data.readVarInt(),
                                    itemHolding: data.readContainerItem(),
                                    playerPos: data.readVector3(),
                                    clickPos: data.readVector3(),
                                    position: new utils_binary_1.Vector3(0, 0, 0),
                                };
                                break;
                            case types_1.ContainerTransactionType.RELEASE_ITEM:
                                props.transaction = {
                                    type: data.readUnsignedVarInt(),
                                    hotbarSlot: data.readVarInt(),
                                    itemHolding: data.readContainerItem(),
                                    headPos: data.readVector3(),
                                    position: new utils_binary_1.Vector3(0, 0, 0),
                                };
                                break;
                            case types_1.ContainerTransactionType.NORMAL:
                            case types_1.ContainerTransactionType.MISMATCH:
                                break;
                            default:
                                throw new Error(`Unknown transaction type ${props.transactionType}`);
                        }
                    }
                },
            },
        ], p);
    }
}
exports.ContainerTransaction = ContainerTransaction;
