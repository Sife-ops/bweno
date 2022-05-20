import { Client, ClientConfig } from './client.ts';
import { Create } from './service/create.ts';
import { Delete, DeleteMethod } from './service/delete.ts';

export class Bweno {
  private client: Client;

  /**
   * Create an entity.
   */
  create: Create;

  /**
   * Delete an entity.
   */
  delete: DeleteMethod;

  constructor(config?: ClientConfig) {
    this.client = new Client(config);
    this.create = new Create(this.client);
    this.delete = new Delete(this.client).delete;
  }
}
