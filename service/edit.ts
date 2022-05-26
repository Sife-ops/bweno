// todo: response type
// todo: end-to-end test

import { Client } from '../client.ts';
import { EditRequestClass, EditOptionsIface } from '../request/edit.ts';
import { ObjectIdClass } from '../object/object.ts';

export type EditMethodType = <T extends ObjectIdClass>(
  object: T,
  options?: EditOptionsIface
) => Promise<T>;

export class EditService {
  constructor(private client: Client) {}

  async edit<T extends ObjectIdClass>(
    object: T,
    options?: EditOptionsIface
  ): Promise<T> {
    const req = new EditRequestClass(object, options);
    const res = await this.client.processRequest(req);

    return res.data;
  }
}
