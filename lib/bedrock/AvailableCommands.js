"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailableCommands = void 0;
const Packet_1 = require("../Packet");
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class AvailableCommands extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.AVAILABLE_COMMANDS, [
            { parser: types_1.DataType.U_VARINT, resolve: Packet_1.def(0) },
            { parser: types_1.DataType.U_VARINT, resolve: Packet_1.def(0) },
            { parser: types_1.DataType.U_VARINT, resolve: Packet_1.def(0) },
            {
                parser({ type, data, props }) {
                    if (type === Packet_1.ParserType.ENCODE) {
                        data.writeUnsignedVarInt(props.commands.length);
                        for (const command of props.commands) {
                            data.writeString(command.trigger);
                            data.writeString(command.description);
                            data.writeByte(0);
                            data.writeByte(command.permission);
                            data.writeLInt(-1); // alias enum indexes
                            data.writeUnsignedVarInt(1);
                            data.writeUnsignedVarInt(command.args.length);
                            for (const arg of command.args) {
                                data.writeString(arg.name);
                                data.writeLInt(0x100000 | arg.type);
                                data.writeBoolean(arg.optional);
                                data.writeByte(0);
                            }
                        }
                        data.writeUnsignedVarInt(0);
                        data.writeUnsignedVarInt(0);
                    }
                    else {
                        // TODO: DECODE
                        throw new Error(`DECODE not implemented`);
                    }
                },
            },
        ], p);
    }
}
exports.AvailableCommands = AvailableCommands;
