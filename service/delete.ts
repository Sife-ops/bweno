import { Client } from '../client.ts';
import { DeleteRequest } from '../request/delete.ts';
import { ObjectIdClass } from '../object/object.ts';

export type DeleteMethodType = (object: ObjectIdClass) => Promise<boolean>;

export class DeleteService {
  constructor(private client: Client) {}

  async delete(object: ObjectIdClass): Promise<boolean> {
    const param = {
      object: object.object,
      id: object.id,
    };

    const req = new DeleteRequest(param);
    const res = await this.client.processRequest(req);

    return res.success;
  }
}
