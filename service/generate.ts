import { Client } from '../client.ts';
import { GenerateQuery, GenerateRequest } from '../request.ts';
import { GenerateResponse } from '../object/response.ts';

export type GenerateMethod = (
  query?: GenerateQuery
) => Promise<GenerateResponse>;

export class Generate {
  constructor(private client: Client) {}

  async generate(query?: GenerateQuery): Promise<GenerateResponse> {
    const generateRequest = new GenerateRequest(query);
    return await this.client.processRequest(generateRequest);
  }
}
