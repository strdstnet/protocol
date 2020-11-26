"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetEntityMotion = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class SetEntityMotion extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.SET_ENTITY_MOTION, [
            { name: 'runtimeEntityId', parser: types_1.DataType.U_VARLONG },
            { name: 'motion', parser: types_1.DataType.VECTOR3 },
        ], p);
    }
}
exports.SetEntityMotion = SetEntityMotion;
