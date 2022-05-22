import { Client } from '../client.ts';
import { DeleteParamIface, DeleteRequest } from '../request.ts';

export type DeleteMethod = (param: DeleteParamIface) => Promise<unknown>;

export class DeleteService {
  constructor(private client: Client) {}

  async delete(param: DeleteParamIface) {
    const deleteRequest = new DeleteRequest(param);
    return await this.client.processRequest(deleteRequest);
  }
}
