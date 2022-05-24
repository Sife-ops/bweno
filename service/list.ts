import { Client } from '../client.ts';
import { ListRequestClass, ListQueryIface } from '../request.ts';

export class ListService {
  constructor(private client: Client) {}

  async items(query?: ListQueryIface) {
    const listItemsRequest = new ListRequestClass({ object: 'items' }, query);
    return await this.client.processRequest(listItemsRequest);
  }

  async folders(query?: ListQueryIface) {
    const listFoldersRequest = new ListRequestClass(
      { object: 'folders' },
      query
    );
    return await this.client.processRequest(listFoldersRequest);
  }
}
