import { Vector3 } from '@strdstnet/utils.binary';
import { BatchedPacket } from './BatchedPacket';
interface ILevelSound {
    sound: number;
    position: Vector3;
    extraData: number;
    entityType: string;
    isBabyMob: boolean;
    disableRelativeVolume: boolean;
}
export declare class LevelSound extends BatchedPacket<ILevelSound> {
    constructor(p?: ILevelSound);
}
export {};
