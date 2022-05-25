import { Client, ClientConfig } from './client.ts';
import { CreateService } from './service/create.ts';
import { DeleteService, DeleteMethodType } from './service/delete.ts';
import { GenerateService, GenerateMethodType } from './service/generate.ts';
import { ListService } from './service/list.ts';
import { LockService, LockMethodType } from './service/lock.ts';
import { StatusService, StatusMethodType } from './service/status.ts';
import { SyncService, SyncMethodType } from './service/sync.ts';

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
   * Sync vault.
   */
  sync: SyncMethodType;

  /**
   * Lock vault.
   */
  lock: LockMethodType;

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
    this.sync = new SyncService(this.client).sync;
    this.lock = new LockService(this.client).lock;
    this.create = new CreateService(this.client);
    this.delete = new DeleteService(this.client).delete;
  }
}
