// todo: response type
// todo: end-to-end test

import { Client } from '../client.ts';
import { UnlockOptionsIface, UnlockRequestClass } from '../request/unlock.ts';

export type UnlockMethodType = (
  options: UnlockOptionsIface
) => Promise<unknown>;

export class UnlockService {
  constructor(private client: Client) {}

  async unlock(options: UnlockOptionsIface): Promise<unknown> {
    const req = new UnlockRequestClass(options);
    const res = await this.client.processRequest(req);
    return res;
  }
}
