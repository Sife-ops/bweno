import { Client } from '../client.ts';
import { SyncIface } from '../object/sync.ts';
import { SyncQueryIface, SyncRequestClass } from '../request/sync.ts';

export type SyncMethodType = (query?: SyncQueryIface) => Promise<SyncIface>;

export class SyncService {
  constructor(private client: Client) {}

  async sync(query?: SyncQueryIface): Promise<SyncIface> {
    const req = new SyncRequestClass(query);
    const res = await this.client.processRequest(req);
    return res.data;
  }
}
