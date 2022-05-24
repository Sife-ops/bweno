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

  async generate(query?: GenerateQueryIface): Promise<string> {
    const generateRequest = new GenerateRequestClass(query);
    const res = await this.client.processRequest(generateRequest);
    return res.data.data;
  }
}
