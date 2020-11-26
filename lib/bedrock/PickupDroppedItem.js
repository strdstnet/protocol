"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickupDroppedItem = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class PickupDroppedItem extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.PICK_UP_DROPPED_ITEM, [
            { name: 'target', parser: types_1.DataType.U_VARLONG },
            { name: 'runtimeEntityId', parser: types_1.DataType.U_VARLONG },
        ], p);
    }
}
exports.PickupDroppedItem = PickupDroppedItem;
