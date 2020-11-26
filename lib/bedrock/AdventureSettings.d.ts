import { BatchedPacket } from '../bedrock/BatchedPacket';
import { AdventureSettingsFlag } from '../types';
declare const Flags1: unique symbol;
declare const Flags2: unique symbol;
interface IAdventureSettingsProps {
    flags: Array<[AdventureSettingsFlag, boolean]>;
    commandPermission: number;
    playerPermission: number;
    entityUniqueId: bigint;
}
interface IAdventureSettings extends IAdventureSettingsProps {
    [Flags1]: number;
    [Flags2]: number;
}
export declare class AdventureSettings extends BatchedPacket<IAdventureSettings> {
    constructor(p?: IAdventureSettingsProps);
}
export {};
