"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDroppedItem = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class AddDroppedItem extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.ADD_DROPPED_ITEM, [
            { name: 'entityUniqueId', parser: types_1.DataType.VARLONG, resolve: props => props.entityUniqueId || props.entityRuntimeId },
            { name: 'entityRuntimeId', parser: types_1.DataType.U_VARLONG },
            { name: 'item', parser: types_1.DataType.CONTAINER_ITEM },
            { name: 'position', parser: types_1.DataType.VECTOR3 },
            { name: 'motion', parser: types_1.DataType.VECTOR3 },
            { name: 'metadata', parser: types_1.DataType.ENTITY_METADATA },
            { name: 'fromFishing', parser: types_1.DataType.BOOLEAN },
        ], p);
    }
}
exports.AddDroppedItem = AddDroppedItem;
