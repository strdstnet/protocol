import { BundledPacket } from '../raknet/BundledPacket';
import { PartialPacket } from './PartialPacket';
export declare class ReassembledPacket extends BundledPacket {
    parts: Array<PartialPacket>;
    constructor(parts: Array<PartialPacket>, flags?: number);
}
