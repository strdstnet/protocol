import { ParserType } from '../Packet'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { Packets } from '../types'
import { SkinData, UUID } from '@strdstnet/utils.binary'

export enum PlayerListType {
  ADD = 0,
  REMOVE = 1,
}

interface IPlayer {
  id: bigint,
  UUID: UUID,
  XUID: string,
  username: string,
  skinData: SkinData,
}

interface IPlayerList {
  type: PlayerListType,
  players: IPlayer[],
}

export class PlayerList extends BatchedPacket<IPlayerList> {

  constructor(p?: IPlayerList) {
    super(Packets.PLAYER_LIST, [
      {
        parser({ type, data, props }) {
          if(type === ParserType.ENCODE) {
            data.writeByte(props.type)
            data.writeUnsignedVarInt(props.players.length)

            if(props.type === PlayerListType.ADD) {
              for(const player of props.players) {
                data.writeUUID(player.UUID)
                data.writeVarLong(player.id)
                data.writeString(player.username)
                data.writeString(player.XUID)
                data.writeString('') // platformChatId
                data.writeLInt(-1) // Build platform
                data.writeSkin(player.skinData)
                data.writeBoolean(false) // isTeacher
                data.writeBoolean(false) // isHost
              }
            } else {
              props.players.forEach(pl => data.writeUUID(pl.UUID))
            }
          } else {
            // TODO: Decode
            throw new Error(`DECODE not implemented`)
          }
        },
      },
    ], p)
  }

}
