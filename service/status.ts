import { Client } from '../client.ts';
import { StatusIface } from '../object/status.ts';
import { StatusRequestClass } from '../request/status.ts';

export type StatusMethodType = () => Promise<StatusIface>;

export class StatusService {
  constructor(private client: Client) {}

  async status(): Promise<StatusIface> {
    const statusRequest = new StatusRequestClass();
    const res = await this.client.processRequest(statusRequest);
    return res.data.template;
  }
}
