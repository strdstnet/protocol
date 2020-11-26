"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewIncomingConnection = void 0;
const BundledPacket_1 = require("./BundledPacket");
const Packet_1 = require("../Packet");
const types_1 = require("../types");
class NewIncomingConnection extends BundledPacket_1.BundledPacket {
    constructor(p) {
        super(types_1.Packets.NEW_INCOMING_CONNECTION, [
            { name: 'address', parser: types_1.DataType.ADDRESS },
            {
                parser({ type, data, props }) {
                    if (type === Packet_1.ParserType.ENCODE) {
                        for (const address of props.systemAddresses) {
                            data.writeAddress(address);
                        }
                    }
                    else {
                        props.systemAddresses = [];
                        const stop = data.length - 16;
                        for (let i = 0; i < types_1.Protocol.SYSTEM_ADDRESSES; i++) {
                            if (data.pos >= stop) {
                                props.systemAddresses.push(types_1.DummyAddress);
                            }
                            else {
                                props.systemAddresses.push(data.readAddress());
                            }
                        }
                    }
                },
            },
            { name: 'pingTime', parser: types_1.DataType.LONG },
            { name: 'pongTime', parser: types_1.DataType.LONG },
        ], p);
    }
}
exports.NewIncomingConnection = NewIncomingConnection;
