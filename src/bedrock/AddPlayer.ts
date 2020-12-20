import { IItem, UUID, Vector3, ItemIsDurable } from '@strdstnet/utils.binary'
import { Metadata } from '@strdstnet/utils.binary/lib/Metadata'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { def } from '../Packet'
import { DataType, Packets, PlayerPermissions } from '../types'

interface IAddPlayerRequired {
  uuid: UUID,
  username: string,
  entityUniqueId: bigint,
  entityRuntimeId: bigint,
  position: Vector3,
  motion: Vector3,
  pitch: number,
  yaw: number,
  headYaw: number,
}

interface IAddPlayerOptional {
  platformChatId: string,
  item: IItem,
  deviceId: string,
  buildPlatform: number,
  metadata: Metadata,
  permissions: PlayerPermissions,
}

const itemHolding: IItem = {
  [ItemIsDurable]: false,
  nid: 'minecraft:air',
  rid: 0,
  meta: 0,
  count: 1,
  damage: 0,
}

type IAddPlayer = IAddPlayerRequired & IAddPlayerOptional

export class AddPlayer extends BatchedPacket<IAddPlayer> {

  constructor(p?: IAddPlayerRequired & Partial<IAddPlayerOptional>) {
    super(Packets.ADD_PLAYER, [
      { name: 'uuid', parser: DataType.UUID },
      { name: 'username', parser: DataType.STRING },
      { name: 'entityUniqueId', parser: DataType.VARLONG },
      { name: 'entityRuntimeId', parser: DataType.U_VARLONG },
      { name: 'platformChatId', parser: DataType.STRING, resolve: def('') },
      { name: 'position', parser: DataType.VECTOR3 },
      { name: 'motion', parser: DataType.VECTOR3 },
      { name: 'pitch', parser: DataType.FLOAT },
      { name: 'yaw', parser: DataType.FLOAT },
      { name: 'headYaw', parser: DataType.FLOAT },
      { name: 'item', parser: DataType.CONTAINER_ITEM, resolve: def(itemHolding) },
      { name: 'metadata', parser: DataType.ENTITY_METADATA, resolve: def(new Metadata()) },
      { parser: DataType.U_VARINT, resolve: def(0) },
      { parser: DataType.U_VARINT, resolve: def(0) },
      { parser: DataType.U_VARINT, resolve: def(0) },
      { name: 'permissions', parser: DataType.U_VARINT, resolve: def(PlayerPermissions.VISITOR) }, // Permissions
      { parser: DataType.U_VARINT, resolve: def(0) },
      { parser: DataType.L_LONG, resolve: def(0n) },
      { parser: DataType.U_VARINT, resolve: def(0) }, // Link count
      { name: 'deviceId', parser: DataType.STRING, resolve: def('') },
      { name: 'buildPlatform', parser: DataType.L_INT, resolve: def(0) },
    ], p)
  }

}
