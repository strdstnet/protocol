import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

interface IFormResponse {
  formId: number,
  formData: string,
}

export class FormResponse extends BatchedPacket<IFormResponse> {

  constructor(p?: IFormResponse) {
    super(Packets.FORM_RESPONSE, [
      { name: 'formId', parser: DataType.VARINT },
      { name: 'formData', parser: DataType.STRING },
    ], p)
  }

}
