import { Packets } from '../types'
import { Acknowledgement } from './Acknowledgement'

export class ACK extends Acknowledgement {

  constructor(sequences?: number[]) {
    super(Packets.ACK, sequences)
  }

}
