import { Client } from '../client.ts';
import { GenerateQueryIface, GenerateRequestClass } from '../request.ts';

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
