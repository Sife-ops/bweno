import { Client, ClientConfig } from './client.ts';
import { CreateService } from './service/create.ts';
import { DeleteService, DeleteMethodType } from './service/delete.ts';
import { GenerateService, GenerateMethodType } from './service/generate.ts';
import { ListService } from './service/list.ts';
import { StatusService, StatusMethodType } from './service/status.ts';

export class Bweno {
  private client: Client;

  /**
   * Generate a password.
   */
  generate: GenerateMethodType;

  /**
   * Show status.
   */
  status: StatusMethodType;

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
  delete: DeleteMethodType;

  constructor(config?: ClientConfig) {
    this.client = new Client(config);

    this.generate = new GenerateService(this.client).generate;
    this.status = new StatusService(this.client).status;
    this.list = new ListService(this.client);
    this.create = new CreateService(this.client);
    this.delete = new DeleteService(this.client).delete;
  }
}
