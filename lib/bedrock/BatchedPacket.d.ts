import { Packet } from '../Packet';
export declare class BatchedPacket<T = never> extends Packet<T> {
    protected decodeId: boolean;
    protected encodeId: boolean;
}
