import { ParserType } from '../Packet'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { Packets } from '../types'
import fs from 'fs'
import path from 'path'

interface IBiomeDefinitionList {
  biomeDefinitions: Buffer,
}

export class BiomeDefinitionList extends BatchedPacket<IBiomeDefinitionList> {

  private static BIOME_DEFINITIONS = fs.readFileSync(path.join(__dirname, '..', 'data', 'biome_definitions.nbt'))

  constructor(p?: Partial<IBiomeDefinitionList>) {
    super(Packets.BIOME_DEFINITION_LIST, [
      {
        parser({ type, data, props, value }) {
          if(type === ParserType.ENCODE) {
            data.append(value)
          } else {
            props.biomeDefinitions = data.readRemaining()
          }
        },
        resolve: () => BiomeDefinitionList.BIOME_DEFINITIONS,
      },
    ], p)
  }

}
