import { Client, ClientConfig } from './client.ts';
import { Create } from './service/create.ts';
import { Delete, DeleteMethod } from './service/delete.ts';
import { Generate, GenerateMethod } from './service/generate.ts';

export class Bweno {
  private client: Client;

  /**
   * Generate a password.
   */
  generate: GenerateMethod;

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
    this.generate = new Generate(this.client).generate;
    this.create = new Create(this.client);
    this.delete = new Delete(this.client).delete;
  }
}
