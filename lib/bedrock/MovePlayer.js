"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovePlayer = void 0;
const Packet_1 = require("../Packet");
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class MovePlayer extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.MOVE_PLAYER, [
            { name: 'runtimeEntityId', parser: types_1.DataType.U_VARLONG },
            { name: 'positionX', parser: types_1.DataType.L_FLOAT },
            { name: 'positionY', parser: types_1.DataType.L_FLOAT },
            { name: 'positionZ', parser: types_1.DataType.L_FLOAT },
            { name: 'pitch', parser: types_1.DataType.L_FLOAT },
            { name: 'yaw', parser: types_1.DataType.L_FLOAT },
            { name: 'headYaw', parser: types_1.DataType.L_FLOAT },
            { name: 'mode', parser: types_1.DataType.BYTE, resolve: Packet_1.def(types_1.MovePlayerMode.NORMAL) },
            { name: 'onGround', parser: types_1.DataType.BOOLEAN },
            { name: 'ridingEntityRuntimeId', parser: types_1.DataType.U_VARLONG },
            {
                parser({ type, data, props }) {
                    if (props.mode === types_1.MovePlayerMode.TELEPORT) {
                        if (type === Packet_1.ParserType.ENCODE) {
                            data.writeLInt(props.teleportCause);
                            data.writeLInt(props.teleportItemId);
                        }
                        else {
                            props.teleportCause = data.readLInt();
                            props.teleportItemId = data.readLInt();
                        }
                    }
                },
            },
            { name: 'tick', parser: types_1.DataType.U_VARLONG, resolve: Packet_1.def(BigInt(Math.round(Date.now() / 50))) },
        ], p);
    }
}
exports.MovePlayer = MovePlayer;
