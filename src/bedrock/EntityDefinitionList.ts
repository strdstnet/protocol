import { ParserType } from '../Packet'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { Packets } from '../types'
import fs from 'fs'
import path from 'path'

interface IEntityDefinitionList {
  entityDefinitions: Buffer,
}

export class EntityDefinitionList extends BatchedPacket<IEntityDefinitionList> {

  private static ENTITY_DEFINITIONS = fs.readFileSync(path.join(__dirname, '..', 'data', 'entity_definitions.nbt'))

  constructor(p?: Partial<IEntityDefinitionList>) {
    super(Packets.ENTITY_DEFINITION_LIST, [
      {
        parser({ type, data, props, value }) {
          if(type === ParserType.ENCODE) {
            data.append(value)
          } else {
            props.entityDefinitions = data.readRemaining()
          }
        },
        resolve: () => EntityDefinitionList.ENTITY_DEFINITIONS,
      },
    ], p)
  }

}
