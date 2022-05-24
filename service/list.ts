import { Client } from '../client.ts';

import { ItemClass } from '../object/item/item.ts';
import { FolderClass } from '../object/folder.ts';

import {
  ListParamIface,
  ListQueryIface,
  ListRequestClass,
} from '../request/list.ts';

export class ListService {
  constructor(private client: Client) {}

  private async processListRequest(
    param: ListParamIface,
    query?: ListQueryIface
  ) {
    const req = new ListRequestClass(param, query);
    const res = await this.client.processRequest(req);
    return res.data.data;
  }

  /**
   * List items.
   * @param query
   * @returns
   */
  async items(query?: ListQueryIface): Promise<Array<ItemClass>> {
    return await this.processListRequest({ object: 'items' }, query);
  }

  /**
   * List folders.
   * @param query
   * @returns
   */
  async folders(query?: ListQueryIface): Promise<Array<FolderClass>> {
    return await this.processListRequest({ object: 'folders' }, query);
  }
}
