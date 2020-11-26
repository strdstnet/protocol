"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerOpen = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class ContainerOpen extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.CONTAINER_OPEN, [
            { name: 'windowId', parser: types_1.DataType.BYTE },
            { name: 'containerType', parser: types_1.DataType.BYTE },
            { name: 'containerX', parser: types_1.DataType.VARINT },
            { name: 'containerY', parser: types_1.DataType.U_VARINT },
            { name: 'containerZ', parser: types_1.DataType.VARINT },
            { name: 'containerEntityId', parser: types_1.DataType.VARLONG },
        ], p);
    }
}
exports.ContainerOpen = ContainerOpen;
