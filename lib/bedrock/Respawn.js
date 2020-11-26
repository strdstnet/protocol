"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Respawn = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class Respawn extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.RESPAWN, [
            { name: 'position', parser: types_1.DataType.VECTOR3 },
            { name: 'state', parser: types_1.DataType.BYTE },
            { name: 'entityRuntimeId', parser: types_1.DataType.U_VARLONG },
        ], p);
    }
}
exports.Respawn = Respawn;
