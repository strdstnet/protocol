"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerList = exports.PlayerListType = void 0;
const Packet_1 = require("../Packet");
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
var PlayerListType;
(function (PlayerListType) {
    PlayerListType[PlayerListType["ADD"] = 0] = "ADD";
    PlayerListType[PlayerListType["REMOVE"] = 1] = "REMOVE";
})(PlayerListType = exports.PlayerListType || (exports.PlayerListType = {}));
class PlayerList extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.PLAYER_LIST, [
            {
                parser({ type, data, props }) {
                    if (type === Packet_1.ParserType.ENCODE) {
                        data.writeByte(props.type);
                        data.writeUnsignedVarInt(props.players.length);
                        if (props.type === PlayerListType.ADD) {
                            for (const player of props.players) {
                                data.writeUUID(player.UUID);
                                data.writeVarLong(player.id);
                                data.writeString(player.username);
                                data.writeString(player.XUID);
                                data.writeString(''); // platformChatId
                                data.writeLInt(-1); // Build platform
                                data.writeSkin(player.skinData);
                                data.writeBoolean(false); // isTeacher
                                data.writeBoolean(false); // isHost
                            }
                        }
                        else {
                            props.players.forEach(pl => data.writeUUID(pl.UUID));
                        }
                    }
                    else {
                        // TODO: Decode
                        throw new Error(`DECODE not implemented`);
                    }
                },
            },
        ], p);
    }
}
exports.PlayerList = PlayerList;
