"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemComponent = void 0;
const types_1 = require("../types");
const BatchedPacket_1 = require("./BatchedPacket");
// TODO: Actually implement?
class ItemComponent extends BatchedPacket_1.BatchedPacket {
    constructor() {
        super(types_1.Packets.ITEM_COMPONENT, [
            { parser: types_1.DataType.U_VARINT, resolve: () => 0 },
        ]);
    }
}
exports.ItemComponent = ItemComponent;
