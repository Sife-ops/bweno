import { Client, ClientConfig } from './client.ts';
import { CreateService } from './service/create.ts';
import { DeleteService, DeleteMethod } from './service/delete.ts';
import { GenerateService, GenerateMethod } from './service/generate.ts';
import { StatusService, StatusMethod } from './service/status.ts';
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
  create: CreateService;

  /**
   * Delete an object.
   */
  delete: DeleteMethod;

  constructor(config?: ClientConfig) {
    this.client = new Client(config);

    this.generate = new GenerateService(this.client).generate;
    this.status = new StatusService(this.client).status;
    this.list = new ListService(this.client);
    this.create = new CreateService(this.client);
    this.delete = new DeleteService(this.client).delete;
  }
}
