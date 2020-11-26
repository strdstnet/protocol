import { Vector3 } from '@strdstnet/utils.binary';
import { BatchedPacket } from '../bedrock/BatchedPacket';
import { Dimension, Gamemode, BiomeType, GeneratorType, Difficulty, MultiplayerVisibility, IBoolGameRule, IIntGameRule, IFloatGameRule, PlayerPermissions } from '../types';
interface IStartGameRequired {
    entityUniqueId: bigint;
    entityRuntimeId: bigint;
    position: Vector3;
    pitch: number;
    yaw: number;
}
interface IStartGameOptional {
    playerGamemode: Gamemode;
    seed: number;
    biomeType: BiomeType;
    biomeName: string;
    dimension: Dimension;
    generator: GeneratorType;
    worldGamemode: Gamemode;
    difficulty: Difficulty;
    spawnLocation: Vector3;
    achievementsDisabled: boolean;
    time: number;
    eduEditionOffer: number;
    eduFeaturesEnabled: boolean;
    eduProductUUID: string;
    rainLevel: number;
    lightningLevel: number;
    hasConfirmedPlatformLockedContent: boolean;
    isMultiplayerGame: boolean;
    hasLANBroadcast: boolean;
    xboxLiveBroadcastMode: MultiplayerVisibility;
    platformBroadcastMode: MultiplayerVisibility;
    commandsEnabled: boolean;
    texturePacksRequired: boolean;
    gameRules: Array<IBoolGameRule | IIntGameRule | IFloatGameRule>;
    experiment?: number;
    IdontKnowhatThisIs?: boolean;
    bonusChestEnabled: boolean;
    startWithMapEnabled: boolean;
    defaultPlayerPermission: PlayerPermissions;
    serverChunkTickRadius: number;
    hasLockedBehaviorPack: boolean;
    hasLockedResourcePack: boolean;
    fromLockedWorldTemplate: boolean;
    useMsaGamertagsOnly: boolean;
    fromWorldTemplate: boolean;
    worldTemplateOptionLocked: boolean;
    onlySpawnV1Villagers: boolean;
    vanillaVersion: string;
    limitedWorldWidth: number;
    limitedWorldLength: number;
    newNether: boolean;
    levelId: string;
    worldName: string;
    premiumWorldTemplateId: string;
    isTrial: boolean;
    isMovementServerAuthoritative: boolean;
    currentTick: bigint;
    enchantmentSeed: number;
    customBlocks: number;
    legacyIdMap: {
        [k: string]: number;
    };
    multiplayerCorrelationId: string;
    enableNewInventorySystem: boolean;
}
declare type IStartGame = IStartGameRequired & IStartGameOptional;
export declare class StartGame extends BatchedPacket<IStartGame> {
    constructor(p?: IStartGameRequired & Partial<IStartGameOptional>);
}
export {};
