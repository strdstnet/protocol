import { IExperiments, Vector3 } from '@strdstnet/utils.binary'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { ParserType, Packet, def } from '../Packet'
import {
  DataType,
  Dimension,
  Gamemode,
  Packets,
  Protocol,
  BiomeType,
  GeneratorType,
  Difficulty,
  MultiplayerVisibility,
  IBoolGameRule,
  IIntGameRule,
  IFloatGameRule,
  PlayerPermissions,
  GameRuleType,
  IItemTableItem,
} from '../types'

interface IStartGameRequired {
  entityUniqueId: bigint,
  entityRuntimeId: bigint,
  position: Vector3,
  pitch: number,
  yaw: number,
}

interface IStartGameOptional {
  playerGamemode: Gamemode,
  seed: number,
  biomeType: BiomeType,
  biomeName: string,
  dimension: Dimension,
  generator: GeneratorType,
  worldGamemode: Gamemode,
  difficulty: Difficulty,
  spawnLocation: Vector3,
  achievementsDisabled: boolean,
  time: number,
  eduEditionOffer: number,
  eduFeaturesEnabled: boolean,
  eduProductUUID: string,
  rainLevel: number,
  lightningLevel: number,
  hasConfirmedPlatformLockedContent: boolean,
  isMultiplayerGame: boolean,
  hasLANBroadcast: boolean,
  xboxLiveBroadcastMode: MultiplayerVisibility,
  platformBroadcastMode: MultiplayerVisibility,
  commandsEnabled: boolean,
  texturePacksRequired: boolean,
  gameRules: Array<IBoolGameRule | IIntGameRule | IFloatGameRule>,
  experiments: IExperiments,
  IdontKnowhatThisIs?: boolean
  bonusChestEnabled: boolean,
  startWithMapEnabled: boolean,
  defaultPlayerPermission: PlayerPermissions,
  serverChunkTickRadius: number,
  hasLockedBehaviorPack: boolean,
  hasLockedResourcePack: boolean,
  fromLockedWorldTemplate: boolean,
  useMsaGamertagsOnly: boolean,
  fromWorldTemplate: boolean,
  worldTemplateOptionLocked: boolean,
  onlySpawnV1Villagers: boolean,
  vanillaVersion: string,
  limitedWorldWidth: number,
  limitedWorldLength: number,
  newNether: boolean,
  levelId: string,
  worldName: string,
  premiumWorldTemplateId: string,
  isTrial: boolean,
  isMovementServerAuthoritative: boolean,
  currentTick: bigint,
  enchantmentSeed: number,
  customBlocks: number,
  itemTable: IItemTableItem[],
  multiplayerCorrelationId: string,
  enableNewInventorySystem: boolean,
}

type IStartGame = IStartGameRequired & IStartGameOptional

export class StartGame extends BatchedPacket<IStartGame> {

  constructor(p?: IStartGameRequired & Partial<IStartGameOptional>) {
    super(Packets.START_GAME, [
      { name: 'entityUniqueId', parser: DataType.VARLONG },
      { name: 'entityRuntimeId', parser: DataType.U_VARLONG },
      { name: 'playerGamemode', parser: DataType.VARINT, resolve: def(Gamemode.SURVIVAL) },
      { name: 'position', parser: DataType.VECTOR3 },
      { name: 'pitch', parser: DataType.FLOAT },
      { name: 'yaw', parser: DataType.FLOAT },
      { name: 'seed', parser: DataType.VARINT, resolve: def(0) },
      { name: 'biomeType', parser: DataType.L_SHORT, resolve: def(0) },
      { name: 'biomeName', parser: DataType.STRING, resolve: def('plains') },
      { name: 'dimension', parser: DataType.VARINT, resolve: def(Dimension.OVERWOLD) },
      { name: 'generator', parser: DataType.VARINT, resolve: def(GeneratorType.OVERWORLD) },
      { name: 'worldGamemode', parser: DataType.VARINT, resolve: def(Gamemode.SURVIVAL) },
      { name: 'difficulty', parser: DataType.VARINT, resolve: def(Difficulty.NORMAL) },
      {
        name: 'spawnLocation',
        parser({ type, data, props, value }) {
          if(type === ParserType.DECODE) {
            props.spawnLocation = new Vector3(
              data.readVarInt(),
              data.readUnsignedVarInt(),
              data.readVarInt(),
            )
          } else {
            data.writeVarInt(value.x)
            data.writeUnsignedVarInt(value.y)
            data.writeVarInt(value.z)
          }
        },
        resolve: def(new Vector3(0, 0, 0)),
      },
      { name: 'achievementsDisabled', parser: DataType.BOOLEAN, resolve: def(true) },
      { name: 'time', parser: DataType.VARINT, resolve: def(0) },
      { name: 'eduEditionOffer', parser: DataType.VARINT, resolve: def(0) },
      { name: 'eduFeaturesEnabled', parser: DataType.BOOLEAN, resolve: def(false) },
      { name: 'eduProductUUID', parser: DataType.STRING, resolve: def('') },
      { name: 'rainLevel', parser: DataType.L_FLOAT, resolve: def(0) },
      { name: 'lightningLevel', parser: DataType.L_FLOAT, resolve: def(0) },
      { name: 'hasConfirmedPlatformLockedContent', parser: DataType.BOOLEAN, resolve: def(false) },
      { name: 'isMultiplayerGame', parser: DataType.BOOLEAN, resolve: def(true) },
      { name: 'hasLANBroadcast', parser: DataType.BOOLEAN, resolve: def(true) },
      { name: 'xboxLiveBroadcastMode', parser: DataType.VARINT, resolve: def(MultiplayerVisibility.PUBLIC) },
      { name: 'platformBroadcastMode', parser: DataType.VARINT, resolve: def(MultiplayerVisibility.PUBLIC) },
      { name: 'commandsEnabled', parser: DataType.BOOLEAN, resolve: def(true) },
      { name: 'texturePacksRequired', parser: DataType.BOOLEAN, resolve: def(true) },
      {
        name: 'gameRules',
        parser({ type, data, props, value }) {
          if(type === ParserType.DECODE) {
            props.gameRules = []

            const count = data.readUnsignedVarInt()
            for(let i = 0; i < count; i++) {
              const name = data.readString()
              const type = data.readUnsignedVarInt()
              let value: any

              switch(type) {
                case GameRuleType.BOOL:
                  value = data.readBoolean()
                  break
                case GameRuleType.INT:
                  value = data.readUnsignedVarInt()
                  break
                case GameRuleType.FLOAT:
                  value = data.readFloat()
                  break
                default:
                  throw new Error(`Unknown GameRuleType (DECODE): ${type}`)
              }

              props.gameRules.push({ name, type, value })
            }
          } else {
            data.writeUnsignedVarInt(value.length)

            for(const rule of value) {
              data.writeString(rule.name)
              data.writeUnsignedVarInt(rule.type)

              switch(rule.type) {
                case GameRuleType.BOOL:
                  data.writeBoolean(rule.value)
                  break
                case GameRuleType.INT:
                  data.writeUnsignedVarInt(rule.value)
                  break
                case GameRuleType.FLOAT:
                  data.writeFloat(rule.value)
                  break
                default:
                  throw new Error(`Unknown GameRuleType (ENCODE): ${type}`)
              }
            }
          }
        },
        resolve: def([
          { name: 'naturalregeneration', type: GameRuleType.BOOL, value: false },
          { name: 'showCoordinates', type: GameRuleType.BOOL, value: true },
          { name: 'pvp', type: GameRuleType.BOOL, value: true },
        ]),
      },
      { name: 'experiments', parser: DataType.EXPERIMENTS, resolve: def({ experiments: [], previouslyEnabled: false }) },
      { name: 'bonusChestEnabled', parser: DataType.BOOLEAN, resolve: def(false) },
      { name: 'startWithMapEnabled', parser: DataType.BOOLEAN, resolve: def(false) },
      { name: 'defaultPlayerPermission', parser: DataType.VARINT, resolve: def(PlayerPermissions.MEMBER) },
      { name: 'serverChunkTickRadius', parser: DataType.L_INT, resolve: def(4) },
      { name: 'hasLockedBehaviorPack', parser: DataType.BOOLEAN, resolve: def(false) },
      { name: 'hasLockedResourcePack', parser: DataType.BOOLEAN, resolve: def(false) },
      { name: 'fromLockedWorldTemplate', parser: DataType.BOOLEAN, resolve: def(false) },
      { name: 'useMsaGamertagsOnly', parser: DataType.BOOLEAN, resolve: def(false) },
      { name: 'fromWorldTemplate', parser: DataType.BOOLEAN, resolve: def(false) },
      { name: 'worldTemplateOptionLocked', parser: DataType.BOOLEAN, resolve: def(false) },
      { name: 'onlySpawnV1Villagers', parser: DataType.BOOLEAN, resolve: def(false) },
      { name: 'vanillaVersion', parser: DataType.STRING, resolve: def(Protocol.BEDROCK_VERSION) },
      { name: 'limitedWorldWidth', parser: DataType.L_INT, resolve: def(16) },
      { name: 'limitedWorldLength', parser: DataType.L_INT, resolve: def(16) },
      { name: 'newNether', parser: DataType.BOOLEAN, resolve: def(false) },
      {
        name: 'someExperimentalBullshit',
        parser({ type, data }) {
          if(type === ParserType.DECODE) {
            if(data.readBoolean()) data.readBoolean()
          } else {
            data.writeBoolean(false)
          }
        },
      },
      { name: 'levelId', parser: DataType.STRING, resolve: def('') },
      { name: 'worldName', parser: DataType.STRING, resolve: def('A Stardust Server') },
      { name: 'premiumWorldTemplateId', parser: DataType.STRING, resolve: def('') },
      { name: 'isTrial', parser: DataType.BOOLEAN, resolve: def(false) },
      { name: 'isMovementServerAuthoritative', parser: DataType.VARINT, resolve: def(0) },
      { name: 'currentTick', parser: DataType.L_LONG, resolve: def(0n) },
      { name: 'enchantmentSeed', parser: DataType.VARINT, resolve: def(0) },
      { name: 'customBlocks', parser: DataType.U_VARINT, resolve: def(0) },
      {
        name: 'itemTable',
        parser({ type, data, props, value }) {
          if(type === ParserType.DECODE) {
            props.itemTable = []

            const count = data.readUnsignedVarInt()
            for(let i = 0; i < count; i++) {
              props.itemTable.push({
                nid: data.readString(),
                rid: data.readLShort(),
                component: data.readBoolean()
              })
            }
          } else {
            data.writeUnsignedVarInt(props.itemTable.length)

            for(const { nid, rid, component } of props.itemTable) {
              data.writeString(nid)
              data.writeLShort(rid)
              data.writeBoolean(component)
            }
          }
        },
        resolve: def([]),
      },
      { name: 'multiplayerCorrelationId', parser: DataType.STRING, resolve: def('') },
      { name: 'enableNewInventorySystem', parser: DataType.BOOLEAN, resolve: def(false) }, // TODO: .
    ], p)
  }

}
