"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityMetadata = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class EntityMetadata extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.ENTITY_METADATA, [
            { name: 'entityRuntimeId', parser: types_1.DataType.U_VARLONG },
            { name: 'metadata', parser: types_1.DataType.ENTITY_METADATA },
            { name: 'tick', parser: types_1.DataType.U_VARLONG },
        ], p);
    }
}
exports.EntityMetadata = EntityMetadata;
