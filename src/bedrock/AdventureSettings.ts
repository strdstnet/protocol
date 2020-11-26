import { def, ParserType } from '../Packet'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets, AdventureSettingsFlag, BITFLAG_SECOND_SET } from '../types'

const Flags1 = Symbol('flags 1')
const Flags2 = Symbol('flags 2')

interface IAdventureSettingsProps {
  flags: Array<[AdventureSettingsFlag, boolean]>,
  commandPermission: number,
  playerPermission: number,
  entityUniqueId: bigint,
}

interface IAdventureSettings extends IAdventureSettingsProps {
  [Flags1]: number,
  [Flags2]: number,
}

export class AdventureSettings extends BatchedPacket<IAdventureSettings> {

  constructor(p?: IAdventureSettingsProps) {
    super(Packets.ADVENTURE_SETTINGS, [
      {
        parser({ type, props }) {
          if(type === ParserType.ENCODE) {
            let flags = 0
            let flags2 = 0

            for(const [flag, value] of props.flags) {
              let f = (flag & BITFLAG_SECOND_SET) !== 0

              if(value) {
                if(f) flags2 |= flag
                else flags |= flag
              } else {
                if(f) flags2 &= ~flag
                else flags &= ~flag
              }
            }

            props[Flags1] = flags
            props[Flags2] = flags2
          } else {
            // TODO: DECODE
            throw new Error(`DECODE not implemented`)
          }
        },
      },
      { parser: DataType.U_VARINT, resolve: props => props[Flags1] },
      { name: 'commandPermission', parser: DataType.U_VARINT },
      { parser: DataType.U_VARINT, resolve: props => props[Flags2] },
      { name: 'playerPermission', parser: DataType.U_VARINT },
      { parser: DataType.U_VARINT, resolve: def(0) },
      { name: 'entityUniqueId', parser: DataType.L_LONG },
    ], p)
  }

}
