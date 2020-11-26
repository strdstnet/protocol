"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveEntity = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class RemoveEntity extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.REMOVE_ENTITY, [
            { name: 'entityRuntimeId', parser: types_1.DataType.VARLONG },
        ], p);
    }
}
exports.RemoveEntity = RemoveEntity;
