import { BundledPacket } from './BundledPacket'
import { ParserType } from '../Packet'
import { IAddress } from '@strdstnet/utils.binary'
import { DataType, Packets, Protocol, DummyAddress } from '../types'

interface INewIncomingConnection {
  address: IAddress,
  systemAddresses: IAddress[],
  pingTime: bigint,
  pongTime: bigint,
}

export class NewIncomingConnection extends BundledPacket<INewIncomingConnection> {

  constructor(p?: INewIncomingConnection) {
    super(Packets.NEW_INCOMING_CONNECTION, [
      { name: 'address', parser: DataType.ADDRESS },
      {
        parser({ type, data, props }) {
          if(type === ParserType.ENCODE) {
            for(const address of props.systemAddresses) {
              data.writeAddress(address)
            }
          } else {
            props.systemAddresses = []

            const stop = data.length - 16
            for(let i = 0; i < Protocol.SYSTEM_ADDRESSES; i++) {
              if(data.pos >= stop) {
                props.systemAddresses.push(DummyAddress)
              } else {
                props.systemAddresses.push(data.readAddress())
              }
            }
          }
        },
      },
      { name: 'pingTime', parser: DataType.LONG },
      { name: 'pongTime', parser: DataType.LONG },
    ], p)
  }

}
