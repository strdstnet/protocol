import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets, TitleCommand } from '../types'

interface ISetTitle {
  command: TitleCommand,
  text?: string,
  fadeInTime?: number,
  stayTime?: number,
  fadeOutTime?: number,
}

export class SetTitle extends BatchedPacket<ISetTitle> {

  constructor(p?: ISetTitle) {
    super(Packets.SET_TITLE, [
      { name: 'command', parser: DataType.VARINT },
      { name: 'text', parser: DataType.STRING, resolve: props => props.text || '' },
      { name: 'fadeInTime', parser: DataType.VARINT, resolve: props => props.fadeInTime || 0 },
      { name: 'stayTime', parser: DataType.VARINT, resolve: props => props.stayTime || 0 },
      { name: 'fadeOutTime', parser: DataType.VARINT, resolve: props => props.fadeOutTime || 0 },
    ], p)
  }

}
