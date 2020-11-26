"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityEquipment = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class EntityEquipment extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.ENTITY_EQUIPMENT, [
            { name: 'entityRuntimeId', parser: types_1.DataType.U_VARLONG },
            { name: 'item', parser: types_1.DataType.CONTAINER_ITEM },
            { name: 'inventorySlot', parser: types_1.DataType.BYTE },
            { name: 'hotbarSlot', parser: types_1.DataType.BYTE },
            { name: 'containerId', parser: types_1.DataType.BYTE },
        ], p);
    }
}
exports.EntityEquipment = EntityEquipment;
