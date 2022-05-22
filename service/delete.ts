import { Client } from '../client.ts';
import { DeleteParamIface, DeleteRequest } from '../request.ts';
import { BasicResponseIface } from '../response.ts';

export type DeleteMethodType = (
  param: DeleteParamIface
) => Promise<BasicResponseIface>;

export class DeleteService {
  constructor(private client: Client) {}

  async delete(param: DeleteParamIface): Promise<BasicResponseIface> {
    const deleteRequest = new DeleteRequest(param);
    return await this.client.processRequest(deleteRequest);
  }
}
