import { Packet } from '../Packet'

export class BatchedPacket<T = never, TP = never> extends Packet<T, TP> {

  protected decodeId = false
  protected encodeId = false

}
