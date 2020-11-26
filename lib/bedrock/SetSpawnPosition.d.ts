import { BundledPacket } from '../raknet/BundledPacket';
interface ISetSpawnPosition {
    spawnType: number;
    coords: number[];
    forced: boolean;
}
export declare class SetSpawnPosition extends BundledPacket<ISetSpawnPosition> {
    constructor();
}
export {};
