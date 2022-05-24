import { Client } from '../client.ts';
import { StatusRequestClass } from '../request/status.ts';

export type StatusMethodType = () => Promise<unknown>;

export class StatusService {
  constructor(private client: Client) {}

  async status() {
    const statusRequest = new StatusRequestClass();
    return await this.client.processRequest(statusRequest);
  }
}
