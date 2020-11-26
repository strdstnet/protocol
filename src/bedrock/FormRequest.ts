import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

interface IFormRequest {
  formId: number,
  formData: string,
}

export class FormRequest extends BatchedPacket<IFormRequest> {

  constructor(p?: IFormRequest) {
    super(Packets.FORM_REQUEST, [
      { name: 'formId', parser: DataType.U_VARINT },
      { name: 'formData', parser: DataType.STRING },
    ], p)
  }

}
