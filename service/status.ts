import { Client } from '../client.ts';
import { StatusRequest } from '../request.ts';
import { StatusResponse } from '../entity/response.ts';

export type StatusMethod = () => Promise<StatusResponse>;

export class Status {
  constructor(private client: Client) {}

  async status(): Promise<StatusResponse> {
    const statusRequest = new StatusRequest();
    return await this.client.processRequest(statusRequest);
  }
}
