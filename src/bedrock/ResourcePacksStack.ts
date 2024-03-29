import { IExperiments } from '@strdstnet/utils.binary'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { ParserType, IParserArgs } from '../Packet'
import { DataType, Packets } from '../types'

interface IResourcePack {
  id: string,
  version: string,
  subPackName: string,
}

interface IResourcePacksStack {
  mustAccept: boolean,
  behaviourPacks: IResourcePack[],
  resourcePacks: IResourcePack[],
  gameVersion: string,
  experiments: IExperiments,
}

function parsePacks(behaviourPacks: boolean) {
  return ({ type, data, props }: IParserArgs<IResourcePacksStack>) => {
    const prop = behaviourPacks ? 'behaviourPacks' : 'resourcePacks'
    if(type === ParserType.DECODE) {
      props[prop] = []

      const count = data.readUnsignedVarInt()
      for(let i = 0; i < count; i++) {
        props[prop].push({
          id: data.readString(),
          version: data.readString(),
          subPackName: data.readString(),
        })
      }
    } else {
      data.writeUnsignedVarInt(props[prop].length)
      for(const pack of props[prop]) {
        data.writeString(pack.id)
        data.writeString(pack.version)
        data.writeString(pack.subPackName)
      }
    }
  }
}

export class ResourcePacksStack extends BatchedPacket<IResourcePacksStack> {

  constructor(p?: IResourcePacksStack) {
    super(Packets.RESOURCE_PACKS_STACK, [
      { name: 'mustAccept', parser: DataType.BOOLEAN },
      { parser: parsePacks(true) },
      { parser: parsePacks(false) },
      { name: 'gameVersion', parser: DataType.STRING },
      { name: 'experiments', parser: DataType.EXPERIMENTS },
    ], p)
  }

}
