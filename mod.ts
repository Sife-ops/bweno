import * as t from './type.ts';

export class Bweno {
  constructor(
    // todo: change to object
    private url: string = 'http://localhost:8087'
  ) {}

  private async bwApiRequest(e: string, i: RequestInit) {
    const response = await fetch(`${this.url}${e}`, i);

    const parsed: t.bwApiResonse = await response.json();

    if (!parsed.success) {
      throw new Error(`API Error: ${parsed.message}`);
    }

    return parsed;
  }

  private async bwApiGetRequest(e: string) {
    return await this.bwApiRequest(e, { method: 'GET' });
  }

  private async bwApiPostRequest(e: string, b: unknown) {
    return await this.bwApiRequest(e, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(b),
    });
  }

  private async bwApiPutRequest(e: string, b: unknown) {
    return await this.bwApiRequest(e, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(b),
    });
  }

  private async bwApiDeleteRequest(e: string) {
    return await this.bwApiRequest(e, { method: 'DELETE' });
  }

  async generate() {
    return await this.bwApiGetRequest('/generate');
  }

  /**
   * todo:
   * what is this?
   * serve.commands.ts:343
   * ctx.params.object === "send"
   * @param options
   * @returns
   */
  async get(options: t.getOptions) {
    return await this.bwApiGetRequest(
      `/object/${options.object}/${options.id}`
    );
  }

  async listObjectItems() {
    return await this.bwApiGetRequest('/list/object/items');
  }
}
