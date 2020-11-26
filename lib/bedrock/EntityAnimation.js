"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityAnimation = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class EntityAnimation extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.ENTITY_ANIMATION, [
            { name: 'entityRuntimeId', parser: types_1.DataType.U_VARLONG },
            { name: 'event', parser: types_1.DataType.BYTE },
            { name: 'data', parser: types_1.DataType.VARINT },
        ], p);
    }
}
exports.EntityAnimation = EntityAnimation;
