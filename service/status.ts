import { Client } from '../client.ts';
import { StatusRequestClass } from '../request.ts';

export type StatusMethod = () => Promise<unknown>;

export class Status {
  constructor(private client: Client) {}

  async status() {
    const statusRequest = new StatusRequestClass();
    return await this.client.processRequest(statusRequest);
  }
}
