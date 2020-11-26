import { Packets } from '../types'
import { Acknowledgement } from './Acknowledgement'

export class NAK extends Acknowledgement {

  constructor(sequences?: number[]) {
    super(Packets.NAK, sequences)
  }

}
