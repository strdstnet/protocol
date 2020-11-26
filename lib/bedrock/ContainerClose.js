"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerClose = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const Packet_1 = require("../Packet");
const types_1 = require("../types");
class ContainerClose extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.CONTAINER_CLOSE, [
            { name: 'windowId', parser: types_1.DataType.BYTE },
            { name: 'server', parser: types_1.DataType.BOOLEAN, resolve: Packet_1.def(false) },
        ], p);
    }
}
exports.ContainerClose = ContainerClose;
