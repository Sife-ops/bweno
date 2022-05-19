import { Client, ClientConfig } from './client.ts';
import { Create } from './service/create.ts';

export class Bweno {
  private client: Client;

  /**
   * Create an entity.
   */
  create: Create;

  constructor(config?: ClientConfig) {
    this.client = new Client(config);
    this.create = new Create(this.client);
  }
}
