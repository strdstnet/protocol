"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeBundledPacket = exports.parseBundledPackets = exports.decodeBundledPacket = exports.PacketBundle = void 0;
const Packet_1 = require("../Packet");
const BundledPacket_1 = require("./BundledPacket");
const types_1 = require("../types");
const utils_binary_1 = require("@strdstnet/utils.binary");
const PartialPacket_1 = require("../custom/PartialPacket");
const ConnectionRequest_1 = require("./ConnectionRequest");
const ConnectionRequestAccepted_1 = require("./ConnectionRequestAccepted");
const NewIncomingConnection_1 = require("./NewIncomingConnection");
const ConnectedPing_1 = require("./ConnectedPing");
const ConnectedPong_1 = require("./ConnectedPong");
const PacketBatch_1 = require("../bedrock/PacketBatch");
const DisconnectionNotification_1 = require("../bedrock/DisconnectionNotification");
const UnknownBundledPacket_1 = require("../custom/UnknownBundledPacket");
class PacketBundle extends Packet_1.Packet {
    constructor(p, flags = types_1.BitFlag.Valid) {
        super(flags, [
            { name: 'sequenceNumber', parser: types_1.DataType.L_TRIAD },
            {
                parser({ type, props, data }) {
                    if (type === Packet_1.ParserType.DECODE) {
                        props.packets = parseBundledPackets(data);
                    }
                    else {
                        for (const packet of props.packets) {
                            data.append(encodeBundledPacket(packet).buf);
                        }
                    }
                },
            },
        ], p);
    }
    decode(data) {
        super.parse(data);
        return {
            ...(this.props),
            id: this.id,
            flags: this.id,
        };
    }
}
exports.PacketBundle = PacketBundle;
function decodeBundledPacket(data) {
    const flags = data.readByte();
    const length = Math.ceil(data.readShort() / 8);
    const props = {
        id: 0,
        reliability: (flags & 0xe0) >> 5,
        hasSplit: (flags & 0x10) > 0,
        messageIndex: 0,
        sequenceIndex: 0,
        orderIndex: 0,
        orderChannel: 0,
        splitCount: 0,
        splitId: 0,
        splitIndex: 0,
    };
    if (BundledPacket_1.BundledPacket.isReliable(props.reliability))
        props.messageIndex = data.readLTriad();
    if (BundledPacket_1.BundledPacket.isSequenced(props.reliability))
        props.sequenceIndex = data.readLTriad();
    if (BundledPacket_1.BundledPacket.isSequencedOrOrdered(props.reliability)) {
        props.orderIndex = data.readLTriad();
        props.orderChannel = data.readByte();
    }
    if (props.hasSplit) {
        props.splitCount = data.readInt();
        props.splitId = data.readShort();
        props.splitIndex = data.readInt();
    }
    return [props, length];
}
exports.decodeBundledPacket = decodeBundledPacket;
function parseBundledPackets(data) {
    const packets = [];
    while (!data.feof) {
        const [props, length] = decodeBundledPacket(data);
        const posBefore = data.pos;
        const packetId = data.buf[data.pos];
        let packet = null;
        if (props.hasSplit && props.splitIndex > 0) {
            packet = new PartialPacket_1.PartialPacket(packetId);
        }
        else {
            switch (packetId) {
                case types_1.Packets.CONNECTION_REQUEST:
                    packet = new ConnectionRequest_1.ConnectionRequest();
                    break;
                case types_1.Packets.CONNECTION_REQUEST_ACCEPTED:
                    packet = new ConnectionRequestAccepted_1.ConnectionRequestAccepted();
                    break;
                case types_1.Packets.NEW_INCOMING_CONNECTION:
                    packet = new NewIncomingConnection_1.NewIncomingConnection();
                    break;
                case types_1.Packets.CONNECTED_PING:
                    packet = new ConnectedPing_1.ConnectedPing();
                    break;
                case types_1.Packets.CONNECTED_PONG:
                    packet = new ConnectedPong_1.ConnectedPong();
                    break;
                case types_1.Packets.PACKET_BATCH:
                    packet = new PacketBatch_1.PacketBatch();
                    break;
                case types_1.Packets.DISCONNECTION_NOTIFICATION:
                    packet = new DisconnectionNotification_1.DisconnectionNotification();
                    break;
                default:
                    packet = new UnknownBundledPacket_1.UnknownBundledPacket(packetId);
            }
        }
        packet.props = props;
        if (props.hasSplit) {
            packet.data = data.readByteArray(length);
        }
        else {
            packet.decode(new utils_binary_1.BinaryData(data.read(length)), props);
        }
        packets.push(packet);
        data.pos = posBefore + length;
    }
    return packets;
}
exports.parseBundledPackets = parseBundledPackets;
function encodeBundledPacket(packet) {
    const data = new utils_binary_1.BinaryData();
    const packetData = packet.data || packet.encode(packet.props);
    packet.encodeBundleHeader(packetData, data);
    return packet.data;
}
exports.encodeBundledPacket = encodeBundledPacket;
