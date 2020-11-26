"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerUpdate = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class ContainerUpdate extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.CONTAINER_UPDATE, [
            { name: 'containerId', parser: types_1.DataType.U_VARINT },
            { name: 'slot', parser: types_1.DataType.U_VARINT },
            { name: 'stack', parser: types_1.DataType.VARINT, resolve: props => props.slot },
            { name: 'item', parser: types_1.DataType.CONTAINER_ITEM },
        ], p);
    }
}
exports.ContainerUpdate = ContainerUpdate;
