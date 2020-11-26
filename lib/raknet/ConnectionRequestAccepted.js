"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionRequestAccepted = void 0;
const BundledPacket_1 = require("./BundledPacket");
const Packet_1 = require("../Packet");
const types_1 = require("../types");
class ConnectionRequestAccepted extends BundledPacket_1.BundledPacket {
    constructor(p) {
        super(types_1.Packets.CONNECTION_REQUEST_ACCEPTED, [
            { name: 'address', parser: types_1.DataType.ADDRESS },
            { name: 'systemIndex', parser: types_1.DataType.SHORT },
            {
                parser({ type, data, props }) {
                    if (type === Packet_1.ParserType.DECODE) {
                        props.systemAddresses = [];
                        for (let i = 0; i < types_1.Protocol.SYSTEM_ADDRESSES; i++) {
                            props.systemAddresses.push(data.readAddress());
                        }
                    }
                    else {
                        for (const address of props.systemAddresses) {
                            data.writeAddress(address);
                        }
                    }
                },
            },
            { name: 'requestTime', parser: types_1.DataType.LONG },
            { name: 'time', parser: types_1.DataType.LONG },
        ], p);
    }
}
exports.ConnectionRequestAccepted = ConnectionRequestAccepted;
