import { BundledPacket } from '../raknet/BundledPacket'
import { Packets } from '../types'

interface ISetSpawnPosition {
  spawnType: number,
  coords: number[],
  forced: boolean,
}

// TODO: Actually implement
export class SetSpawnPosition extends BundledPacket<ISetSpawnPosition> {

  constructor() {
    super(Packets.SET_SPAWN_POSITION, [])
  }

}
