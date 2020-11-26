"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerAction = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class PlayerAction extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.PLAYER_ACTION, [
            { name: 'runtimeEntityId', parser: types_1.DataType.U_VARLONG },
            { name: 'action', parser: types_1.DataType.VARINT },
            { name: 'actionX', parser: types_1.DataType.VARINT },
            { name: 'actionY', parser: types_1.DataType.U_VARINT },
            { name: 'actionZ', parser: types_1.DataType.VARINT },
            { name: 'face', parser: types_1.DataType.VARINT },
        ], p);
    }
}
exports.PlayerAction = PlayerAction;
