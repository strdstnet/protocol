import { Packet, ParserType, PacketProps } from '../Packet'
import { BundledPacket } from './BundledPacket'
import { BitFlag, DataType } from '../types'
import { BinaryData } from '@strdstnet/utils.binary'
import { encodeBundledPacket, parseBundledPackets } from '../BundleUtils'

export interface IPacketBundle {
  sequenceNumber: number,
  packets: Array<BundledPacket<any>>,
}

type PacketBundleDecode = PacketProps<IPacketBundle> & {
  flags: number,
}

export class PacketBundle extends Packet<IPacketBundle> {

  constructor(p?: IPacketBundle, flags: number = BitFlag.Valid) {
    super(flags, [
      { name: 'sequenceNumber', parser: DataType.L_TRIAD },
      {
        parser({ type, props, data }) {
          if(type === ParserType.DECODE) {
            props.packets = parseBundledPackets(data)
          } else {
            for(const packet of props.packets) {
              data.append(encodeBundledPacket(packet).buf)
            }
          }
        },
      },
    ], p)
  }

  public decode(data: BinaryData): PacketBundleDecode {
    super.parse(data)

    return {
      ...(this.props),
      id: this.id,
      flags: this.id,
    }
  }

}
