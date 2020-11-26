"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundledPacket = void 0;
const utils_binary_1 = require("@strdstnet/utils.binary");
const Packet_1 = require("../Packet");
const types_1 = require("../types");
class BundledPacket extends Packet_1.Packet {
    constructor(flags, schema = [], props) {
        super((flags || 0) & 0xff, schema, {
            ...BundledPacket.defaultProps,
            props,
        });
        this.hasBeenProcessed = false;
        this.headerEncoded = false;
    }
    decode(data = this.data, bundledProps) {
        this.parse(data);
        return {
            ...(bundledProps || {}),
            ...this.props,
            id: this.id,
        };
    }
    append(data) {
        this.data.append(data.buf, data.pos);
    }
    clone() {
        const copy = new this.constructor();
        Object.assign(copy, this);
        return copy;
    }
    encodeBundleHeader(packetData, bundle = new utils_binary_1.BinaryData()) {
        if (this.headerEncoded)
            return this.data;
        let flags = this.props.reliability << 5;
        if (this.props.hasSplit)
            flags = flags | 0x10;
        bundle.writeByte(flags);
        bundle.writeShort(packetData.length << 3);
        if (BundledPacket.isReliable(this.props.reliability)) {
            bundle.writeLTriad(this.props.messageIndex);
        }
        if (BundledPacket.isSequenced(this.props.reliability)) {
            bundle.writeLTriad(this.props.sequenceIndex);
        }
        if (BundledPacket.isSequencedOrOrdered(this.props.reliability)) {
            bundle.writeLTriad(this.props.orderIndex);
            bundle.writeByte(this.props.orderChannel);
        }
        if (this.props.hasSplit) {
            bundle.writeInt(this.props.splitCount);
            bundle.writeShort(this.props.splitId);
            bundle.writeInt(this.props.splitIndex);
        }
        bundle.append(packetData);
        this.data = bundle;
        this.headerEncoded = true;
        return bundle;
    }
    getHeaderLength() {
        return [
            3,
            (BundledPacket.isReliable(this.props.reliability) ? 3 : 0),
            (BundledPacket.isSequenced(this.props.reliability) ? 3 : 0),
            (BundledPacket.isSequencedOrOrdered(this.props.reliability) ? 4 : 0),
            (this.props.hasSplit ? 10 : 0),
        ].reduce((p, c) => p + c);
    }
    static isReliable(reliability) {
        return (reliability === types_1.Reliability.Reliable ||
            reliability === types_1.Reliability.ReliableOrdered ||
            reliability === types_1.Reliability.ReliableSequenced ||
            reliability === types_1.Reliability.ReliableACK ||
            reliability === types_1.Reliability.ReliableOrderedACK);
    }
    static isSequenced(reliability) {
        return (reliability === types_1.Reliability.UnreliableSequenced ||
            reliability === types_1.Reliability.ReliableSequenced);
    }
    static isOrdered(reliability) {
        return (reliability === types_1.Reliability.ReliableOrdered ||
            reliability === types_1.Reliability.ReliableOrderedACK);
    }
    static isSequencedOrOrdered(reliability) {
        return BundledPacket.isSequenced(reliability) || BundledPacket.isOrdered(reliability);
    }
}
exports.BundledPacket = BundledPacket;
BundledPacket.defaultProps = {
    reliability: types_1.Reliability.Unreliable,
    hasSplit: false,
    messageIndex: 0,
    sequenceIndex: 0,
    orderIndex: 0,
    orderChannel: 0,
    splitCount: 0,
    splitId: 0,
    splitIndex: 0,
};
