import { Client } from '../client.ts';
import { FolderClass } from '../object/folder.ts';
import { ItemClass } from '../object/item/item.ts';
import { ListQueryIface, ListRequestClass } from '../request/list.ts';
import { QueryParamType } from '../request/request.ts';

export class ListService {
  constructor(private client: Client) {}

  private async processListRequest(
    param: QueryParamType,
    query?: QueryParamType
  ) {
    const req = new ListRequestClass(param, query);
    const res = await this.client.processRequest(req);
    return res.data.data;
  }

  /**
   * List items.
   * @param options
   * @returns
   */
  async items(options?: ListQueryIface): Promise<ItemClass[]> {
    return await this.processListRequest({ object: 'items' }, options);
  }

  /**
   * List folders.
   * @param options
   * @returns
   */
  async folders(options?: ListQueryIface): Promise<FolderClass[]> {
    return await this.processListRequest({ object: 'folders' }, options);
  }
}
