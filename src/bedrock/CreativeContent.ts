import { BatchedPacket } from '../bedrock/BatchedPacket'
import { ParserType } from '../Packet'
import { Packets } from '../types'

interface ICreativeContent {
}

// TODO: implement
export class CreativeContent extends BatchedPacket<ICreativeContent> {

  constructor(p?: ICreativeContent) {
    super(Packets.CREATIVE_CONTENT, [
      {
        name: 'content',
        parser({ type, data }) {
          if(type === ParserType.ENCODE) {
            data.writeUnsignedVarInt(0)
          } else {
            throw new Error(`DECODE not implemented`)
          }
        }
      }
    ], p)
  }

}
