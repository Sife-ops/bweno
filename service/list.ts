import { Client } from '../client.ts';
import { FolderResponseType } from '../object/folder.ts';
import { ItemResponseType } from '../object/item.ts';
import { ListRequestClass, ListQueryIface } from '../request.ts';
import { ListResponseIface } from '../response.ts';

export class ListService {
  constructor(private client: Client) {}

  async items(
    query?: ListQueryIface
  ): Promise<ListResponseIface<ItemResponseType>> {
    const listItemsRequest = new ListRequestClass({ object: 'items' }, query);
    return await this.client.processRequest(listItemsRequest);
  }

  async folders(
    query?: ListQueryIface
  ): Promise<ListResponseIface<FolderResponseType>> {
    const listFoldersRequest = new ListRequestClass(
      { object: 'folders' },
      query
    );
    return await this.client.processRequest(listFoldersRequest);
  }
}
