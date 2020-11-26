import { BinaryData } from '@strdstnet/utils.binary';
import { Packet, PacketProps, IPacketSchemaItem } from '../Packet';
import { IBundledPacket } from '../types';
export declare type BPacket<T> = T & IBundledPacket;
export declare type BPacketOpt<T> = T & Partial<IBundledPacket>;
export declare class BundledPacket<T = unknown> extends Packet<BPacket<T>> {
    hasBeenProcessed: boolean;
    headerEncoded: boolean;
    static defaultProps: IBundledPacket;
    constructor(flags?: number, schema?: Array<IPacketSchemaItem<BPacket<T>>>, props?: any);
    decode(data?: BinaryData, bundledProps?: PacketProps<IBundledPacket>): PacketProps<BPacket<T>>;
    append(data: BinaryData): void;
    clone(): BundledPacket<T>;
    encodeBundleHeader(packetData: BinaryData, bundle?: BinaryData): BinaryData;
    getHeaderLength(): number;
    static isReliable(reliability: number): boolean;
    static isSequenced(reliability: number): boolean;
    static isOrdered(reliability: number): boolean;
    static isSequencedOrOrdered(reliability: number): boolean;
}
