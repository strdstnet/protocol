"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdventureSettings = void 0;
const Packet_1 = require("../Packet");
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
const Flags1 = Symbol('flags 1');
const Flags2 = Symbol('flags 2');
class AdventureSettings extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.ADVENTURE_SETTINGS, [
            {
                parser({ type, props }) {
                    if (type === Packet_1.ParserType.ENCODE) {
                        let flags = 0;
                        let flags2 = 0;
                        for (const [flag, value] of props.flags) {
                            let f = (flag & types_1.BITFLAG_SECOND_SET) !== 0;
                            if (value) {
                                if (f)
                                    flags2 |= flag;
                                else
                                    flags |= flag;
                            }
                            else {
                                if (f)
                                    flags2 &= ~flag;
                                else
                                    flags &= ~flag;
                            }
                        }
                        props[Flags1] = flags;
                        props[Flags2] = flags2;
                    }
                    else {
                        // TODO: DECODE
                        throw new Error(`DECODE not implemented`);
                    }
                },
            },
            { parser: types_1.DataType.U_VARINT, resolve: props => props[Flags1] },
            { name: 'commandPermission', parser: types_1.DataType.U_VARINT },
            { parser: types_1.DataType.U_VARINT, resolve: props => props[Flags2] },
            { name: 'playerPermission', parser: types_1.DataType.U_VARINT },
            { parser: types_1.DataType.U_VARINT, resolve: Packet_1.def(0) },
            { name: 'entityUniqueId', parser: types_1.DataType.L_LONG },
        ], p);
    }
}
exports.AdventureSettings = AdventureSettings;
