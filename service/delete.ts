import { Client } from '../client.ts';
import { ItemIdParamIface, DeleteRequest } from '../request.ts';

export type DeleteMethod = (param: ItemIdParamIface) => Promise<unknown>;

export class Delete {
  constructor(private client: Client) {}

  async delete(param: ItemIdParamIface) {
    const deleteRequest = new DeleteRequest(param);
    return await this.client.processRequest(deleteRequest);
  }
}
