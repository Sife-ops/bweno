import * as t from './type.ts';

export class Bweno {
  constructor(private url: string = 'http://localhost:8087') {}

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

  private async bwApiPostRequest(e: string, b?: unknown) {
    return await this.bwApiRequest(e, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(b),
    });
  }

  private async bwApiPutRequest(e: string, b: unknown) {
    return await this.bwApiRequest(e, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(b),
    });
  }

  private async bwApiDeleteRequest(e: string) {
    return await this.bwApiRequest(e, { method: 'DELETE' });
  }

  private objToQueryParams(object: Record<string, unknown>) {
    return (
      '?' +
      Object.keys(object)
        .map((key) => `${key}=${object[key]}`)
        .join('&')
    );
  }

  async generate(options?: t.generateOptions) {
    let queryParams = '';
    if (options) {
      queryParams = queryParams.concat(this.objToQueryParams(options));
    }
    return await this.bwApiGetRequest('/generate' + queryParams);
  }

  async status() {
    return await this.bwApiGetRequest('/status');
  }

  // todo: /list/object/send
  async listObject(object: t.bwObjectListType) {
    return await this.bwApiGetRequest(`/list/object/${object}`);
  }

  async sendList(search: string) {
    return await this.bwApiGetRequest(`/send/list?search=${search}`);
  }

  async sync(options?: t.syncOptions) {
    let queryParams = '';
    if (options) {
      queryParams = queryParams.concat(this.objToQueryParams(options));
    }
    return await this.bwApiPostRequest('/sync' + queryParams);
  }

  // POST /lock
  // POST /unlock
  // POST /confirm/:object/:id
  // POST /restore/:object/:id
  // POST /move/:id/:organizationId
  // POST /attachment
  // POST /send/:id/remove-password
  // POST /object/:object
  // PUT  /object/:object/:id

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

  // DELETE /object/:object/:id
}
