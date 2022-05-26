import { Client, ClientConfig } from './client.ts';
import { CreateService } from './service/create.ts';
import { DeleteService, DeleteMethodType } from './service/delete.ts';
import { EditService, EditMethodType } from './service/edit.ts';
import { GenerateService, GenerateMethodType } from './service/generate.ts';
import { ListService } from './service/list.ts';
import { LockService, LockMethodType } from './service/lock.ts';
import { RestoreService, RestoreMethodType } from './service/restore.ts';
import { StatusService, StatusMethodType } from './service/status.ts';
import { SyncService, SyncMethodType } from './service/sync.ts';
import { UnlockService, UnlockMethodType } from './service/unlock.ts';

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
   * Unlock vault.
   */
  unlock: UnlockMethodType;

  /**
   * Restore object.
   */
  restore: RestoreMethodType;

  /**
   * Create object.
   */
  create: CreateService;

  /**
   * Edit object.
   */
  edit: EditMethodType;

  /**
   * Delete object.
   */
  delete: DeleteMethodType;

  constructor(config?: ClientConfig) {
    this.client = new Client(config);

    this.generate = new GenerateService(this.client).generate;
    this.status = new StatusService(this.client).status;
    this.list = new ListService(this.client);
    this.sync = new SyncService(this.client).sync;
    this.lock = new LockService(this.client).lock;
    this.unlock = new UnlockService(this.client).unlock;
    this.restore = new RestoreService(this.client).restore;
    this.create = new CreateService(this.client);
    this.edit = new EditService(this.client).edit;
    this.delete = new DeleteService(this.client).delete;
  }
}
