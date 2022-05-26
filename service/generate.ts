import { Client } from '../client.ts';

import {
  GenerateRequestClass,
  GenerateQueryIface,
} from '../request/generate.ts';

export type GenerateMethodType = (
  query?: GenerateQueryIface
) => Promise<string>;

export class GenerateService {
  constructor(private client: Client) {}

  async generate(options?: GenerateQueryIface): Promise<string> {
    const req = new GenerateRequestClass(options);
    const res = await this.client.processRequest(req);
    return res.data.data;
  }
}
