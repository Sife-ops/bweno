import { Client } from '../client.ts';
import { SyncIface } from '../object/sync.ts';
import { SyncQueryIface, SyncRequestClass } from '../request/sync.ts';

export type SyncMethodType = (query?: SyncQueryIface) => Promise<SyncIface>;

export class SyncService {
  constructor(private client: Client) {}

  async sync(options?: SyncQueryIface): Promise<SyncIface> {
    const req = new SyncRequestClass(options);
    const res = await this.client.processRequest(req);
    return res.data;
  }
}
