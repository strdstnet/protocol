"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BossEvent = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const Packet_1 = require("../Packet");
const types_1 = require("../types");
class BossEvent extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.BOSS_EVENT, [
            { name: 'bossRuntimeId', parser: types_1.DataType.U_VARLONG },
            { name: 'type', parser: types_1.DataType.U_VARINT },
            {
                parser({ type, data, props }) {
                    if (type === Packet_1.ParserType.ENCODE) {
                        switch (props.type) {
                            case types_1.BossEventType.REGISTER_PLAYER:
                            case types_1.BossEventType.UNREGISTER_PLAYER:
                                data.writeUnsignedVarLong(props.playerRuntimeId);
                                break;
                            case types_1.BossEventType.SHOW:
                                data.writeString(props.title);
                                data.writeFloat(props.health);
                            case types_1.BossEventType.UNKNOWN:
                                data.writeLShort(0);
                            case types_1.BossEventType.SET_TEXTURE:
                                data.writeUnsignedVarInt(props.colour);
                                data.writeUnsignedVarInt(props.overlay);
                                break;
                            case types_1.BossEventType.SET_HEALTH:
                                data.writeFloat(props.health);
                                break;
                            case types_1.BossEventType.SET_TITLE:
                                data.writeString(props.title);
                                break;
                            default:
                                throw new Error(`Unsupported BossEventType: ${props.type}`);
                        }
                    }
                    else {
                        throw new Error(`DECODE not implemented`);
                    }
                },
            },
        ], p);
    }
}
exports.BossEvent = BossEvent;
