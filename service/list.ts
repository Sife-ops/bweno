import { Client } from '../client.ts';
import { FolderItemResponseType } from '../object/folder.ts';
import { ListRequestClass, ListQueryIface } from '../request.ts';
import { ListResponseIface } from '../response.ts';

export class ListService {
  constructor(private client: Client) {}

  //   async items(
  //     query?: ListQueryIface
  //   ): Promise<ListResponseIface<FolderItemResponseType>> {
  //     const listFolderRequest = new ListRequestClass({ object: 'items' }, query);
  //     return await this.client.processRequest(listFolderRequest);
  //   }

  async folders(
    query?: ListQueryIface
  ): Promise<ListResponseIface<FolderItemResponseType>> {
    const listFolderRequest = new ListRequestClass(
      { object: 'folders' },
      query
    );
    return await this.client.processRequest(listFolderRequest);
  }
}
