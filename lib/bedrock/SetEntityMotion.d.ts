import { Vector3 } from '@strdstnet/utils.binary';
import { BatchedPacket } from '../bedrock/BatchedPacket';
interface ISetEntityMotion {
    runtimeEntityId: bigint;
    motion: Vector3;
}
export declare class SetEntityMotion extends BatchedPacket<ISetEntityMotion> {
    constructor(p?: ISetEntityMotion);
}
export {};
