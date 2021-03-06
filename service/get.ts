// todo: end-to-end test
// todo: return undefined if not found?

import { Client } from '../client.ts';
import { GetOptionsIface, GetRequestClass } from '../request/get.ts';
import { ObjectIdClass } from '../object/object.ts';
import { ObjectIdParamType } from '../request/request.ts';

export type GetMethodType = <T extends ObjectIdClass>(
  param: ObjectIdParamType,
  options?: GetOptionsIface
) => Promise<T>;

export class GetService {
  constructor(private client: Client) {}

  async get<T extends ObjectIdClass>(
    param: ObjectIdParamType,
    options?: GetOptionsIface
  ): Promise<T> {
    const req = new GetRequestClass(param, options);
    const res = await this.client.processRequest(req);

    return res.data;
  }
}
