import { BatchedPacket } from '../bedrock/BatchedPacket'
import { ParserType } from '../Packet'
import { DataType, Packets } from '../types'
import { IChunk } from '@strdstnet/utils.binary'

interface ILevelChunk {
  chunk: IChunk,
  cache: boolean,
  usedHashes: Array<bigint>,
}

export class LevelChunk extends BatchedPacket<ILevelChunk> {

  constructor(p?: ILevelChunk) {
    let subChunkCount = p ? p.chunk.subChunks.length : 0

    super(Packets.LEVEL_CHUNK, [
      {
        parser({ type, data, props }) {
          if(type === ParserType.ENCODE) {
            data.writeVarInt(props.chunk.x)
            data.writeVarInt(props.chunk.z)
            data.writeUnsignedVarInt(data.getLastNonEmtptySubChunk(props.chunk) + 1)
          } else {
            props.chunk = {
              x: data.readVarInt(),
              z: data.readVarInt(),
              subChunks: [],
              tiles: [],
              biomeData: [],
            }
            subChunkCount = data.readUnsignedVarInt()
          }
        },
      },
      { name: 'cache', parser: DataType.BOOLEAN },
      {
        parser({ type, data, props }) {
          if(type === ParserType.DECODE) {
            props.usedHashes = []
            if(props.cache) {
              const count = data.readUnsignedVarInt()
              for(let i = 0; i < count; i++) {
                props.usedHashes.push(data.readLLong())
              }
            }
          } else {
            if(props.cache) {
              data.writeUnsignedVarInt(props.usedHashes.length)

              for(const hash of props.usedHashes) {
                data.writeLLong(hash)
              }
            }
          }
        },
      },
      {
        parser({ type, data, props }) {
          if(type === ParserType.ENCODE) {
            data.writeChunkData(props.chunk)
          } else {
            data.readChunkData(props.chunk, subChunkCount)
          }
        },
      },
    ])

    if(p) this.props = p
  }

}
