import { Packet } from '../Packet'
import { DataType, Packets, Protocol } from '../types'

export interface IUnconnectedPong {
  pingId: bigint,
  motd: string,
  serverId: bigint,
}

export interface IUnconnectedPongMOTD {
  line1: string,
  line2: string,
  maxPlayers: number,
  numPlayers: number,
}

export class UnconnectedPong extends Packet<IUnconnectedPong> {

  public static getMOTD({ line1, line2, maxPlayers, numPlayers }: IUnconnectedPongMOTD): string {
    return `MCPE;${line1};27;${Protocol.BEDROCK_VERSION};${numPlayers};${maxPlayers};0;${line2}`
  }

  public static parseMOTD(motd: string): IUnconnectedPongMOTD {
    const parts = motd.split(';')

    return {
      line1: parts[1],
      line2: parts[7],
      maxPlayers: parseInt(parts[5], 10),
      numPlayers: parseInt(parts[4], 10),
    }
  }

  constructor(p?: IUnconnectedPong) {
    super(Packets.UNCONNECTED_PONG, [
      { name: 'pingId', parser: DataType.LONG },
      { name: 'serverId', parser: DataType.LONG },
      { name: 'magic', parser: DataType.MAGIC },
      { name: 'motd', parser: DataType.RAW_STRING },
    ], p)
  }

}
