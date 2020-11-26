import { BatchedPacket } from '../bedrock/BatchedPacket';
import { Vector3 } from '@strdstnet/utils.binary';
import { Dimension } from '../types';
interface IChangeDimension {
    dimension: Dimension;
    position: Vector3;
    respawn?: boolean;
}
export declare class ChangeDimension extends BatchedPacket<IChangeDimension> {
    constructor(p?: IChangeDimension);
}
export {};
