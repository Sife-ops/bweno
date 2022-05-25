// todo: response type
// todo: end-to-end test

import { Client } from '../client.ts';
import { LockRequestClass } from '../request/lock.ts';

export type LockMethodType = () => Promise<unknown>;

export class LockService {
  constructor(private client: Client) {}

  async lock(): Promise<unknown> {
    const req = new LockRequestClass();
    const res = await this.client.processRequest(req);
    return res;
  }
}
