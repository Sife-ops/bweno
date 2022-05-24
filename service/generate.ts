import { Client } from '../client.ts';

import {
  GenerateRequestClass,
  GenerateQueryIface,
} from '../request/generate.ts';

export type GenerateMethodType = (
  query?: GenerateQueryIface
) => Promise<unknown>;

export class GenerateService {
  constructor(private client: Client) {}

  async generate(query?: GenerateQueryIface) {
    const generateRequest = new GenerateRequestClass(query);
    return await this.client.processRequest(generateRequest);
  }
}
