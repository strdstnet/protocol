import { Packet, PacketProps } from '../Packet';
import { BPacket, BundledPacket } from './BundledPacket';
import { IBundledPacket, Props } from '../types';
import { BinaryData } from '@strdstnet/utils.binary';
export interface IPacketBundle {
    sequenceNumber: number;
    packets: Array<BundledPacket<any>>;
}
declare type PacketBundleDecode = PacketProps<IPacketBundle> & {
    flags: number;
};
export declare class PacketBundle extends Packet<IPacketBundle> {
    constructor(p?: IPacketBundle, flags?: number);
    decode(data: BinaryData): PacketBundleDecode;
}
export declare function decodeBundledPacket<T extends IBundledPacket = BPacket<any>>(data: BinaryData): [T, number];
export declare function parseBundledPackets(data: BinaryData): Array<BundledPacket<any>>;
export declare function encodeBundledPacket(packet: BundledPacket<Props>): BinaryData;
export {};
