import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IFormRequest {
    formId: number;
    formData: string;
}
export declare class FormRequest extends BatchedPacket<IFormRequest> {
    constructor(p?: IFormRequest);
}
export {};
