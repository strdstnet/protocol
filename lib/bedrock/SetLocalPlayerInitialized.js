"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetLocalPlayerInitialized = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class SetLocalPlayerInitialized extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.SET_LOCAL_PLAYER_INITIALIZED, [
            { name: 'entityRuntimeId', parser: types_1.DataType.U_VARLONG },
        ], p);
    }
}
exports.SetLocalPlayerInitialized = SetLocalPlayerInitialized;
