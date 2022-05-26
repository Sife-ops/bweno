// todo: response type
// todo: end-to-end test

import { Client } from '../client.ts';
import { ObjectIdClass } from '../object/object.ts';
import { RestoreRequest } from '../request/restore.ts';

export type RestoreMethodType = (object: ObjectIdClass) => Promise<unknown>;

export class RestoreService {
  constructor(private client: Client) {}

  async restore(object: ObjectIdClass) {
    const param = {
      object: object.object,
      id: object.id,
    };

    const req = new RestoreRequest(param);
    const res = await this.client.processRequest(req);

    return res.success;
  }
}
