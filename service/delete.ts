import { BaseResponse } from '../entity/response.ts';
import { Client } from '../client.ts';
import { ItemId, DeleteRequest } from '../request.ts';

export type DeleteMethod = (param: ItemId) => Promise<BaseResponse>;

export class Delete {
  constructor(private client: Client) {}

  async delete(param: ItemId): Promise<BaseResponse> {
    const deleteRequest = new DeleteRequest(param);
    return await this.client.processRequest(deleteRequest);
  }
}
