import { Client } from '../client.ts';
import { DeleteParamIface, DeleteRequest } from '../request/delete.ts';

export type DeleteMethodType = (param: DeleteParamIface) => Promise<unknown>;

export class DeleteService {
  constructor(private client: Client) {}

  async delete(param: DeleteParamIface) {
    const deleteRequest = new DeleteRequest(param);
    const res = await this.client.processRequest(deleteRequest);
    return res.success;
  }
}
