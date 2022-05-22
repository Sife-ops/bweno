import { Client, ClientConfig } from './client.ts';
import { Create } from './service/create.ts';
import { Delete, DeleteMethod } from './service/delete.ts';
import { Generate, GenerateMethod } from './service/generate.ts';
import { Status, StatusMethod } from './service/status.ts';
import { ListService } from './service/list.ts';

export class Bweno {
  private client: Client;

  /**
   * Generate a password.
   */
  generate: GenerateMethod;

  /**
   * Show status.
   */
  status: StatusMethod;

  /**
   * List objects.
   */
  list: ListService;

  /**
   * Create an object.
   */
  create: Create;

  /**
   * Delete an object.
   */
  delete: DeleteMethod;

  constructor(config?: ClientConfig) {
    this.client = new Client(config);

    this.generate = new Generate(this.client).generate;
    this.status = new Status(this.client).status;
    this.list = new ListService(this.client);
    this.create = new Create(this.client);
    this.delete = new Delete(this.client).delete;
  }
}
