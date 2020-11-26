"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveEntity = exports.MoveEntityMode = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
var MoveEntityMode;
(function (MoveEntityMode) {
    MoveEntityMode[MoveEntityMode["GROUND"] = 1] = "GROUND";
    MoveEntityMode[MoveEntityMode["TELEPORT"] = 2] = "TELEPORT";
    MoveEntityMode[MoveEntityMode["FORCE_LOCAL"] = 3] = "FORCE_LOCAL";
})(MoveEntityMode = exports.MoveEntityMode || (exports.MoveEntityMode = {}));
class MoveEntity extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.MOVE_ENTITY, [
            { name: 'runtimeEntityId', parser: types_1.DataType.U_VARLONG },
            { name: 'mode', parser: types_1.DataType.BYTE, resolve: () => MoveEntityMode.GROUND },
            { name: 'position', parser: types_1.DataType.VECTOR3 },
            { name: 'rotX', parser: types_1.DataType.BYTE_ROTATION, resolve: () => 0 },
            { name: 'rotY', parser: types_1.DataType.BYTE_ROTATION, resolve: () => 0 },
            { name: 'rotZ', parser: types_1.DataType.BYTE_ROTATION, resolve: () => 0 },
        ]);
        if (p)
            this.props = p;
    }
}
exports.MoveEntity = MoveEntity;
