"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityFall = void 0;
const types_1 = require("../types");
const BatchedPacket_1 = require("./BatchedPacket");
class EntityFall extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.ENTITY_FALL, [
            { name: 'runtimeEntityId', parser: types_1.DataType.U_VARLONG },
            { name: 'fallDistance', parser: types_1.DataType.L_FLOAT },
            { name: 'isInVoid', parser: types_1.DataType.BOOLEAN },
        ], p);
    }
}
exports.EntityFall = EntityFall;
