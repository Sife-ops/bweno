// todo: response type
// todo: end-to-end test

import { Client } from '../client.ts';
import { EditRequestClass, EditOptionsIface } from '../request/edit.ts';
import { ObjectIdClass } from '../object/object.ts';

export type EditMethodType = (object: ObjectIdClass) => Promise<unknown>;

export class EditService {
  constructor(private client: Client) {}

  async edit(
    object: ObjectIdClass,
    options?: EditOptionsIface
  ): Promise<unknown> {
    const req = new EditRequestClass(object, options);
    const res = await this.client.processRequest(req);

    return res.success;
  }
}
