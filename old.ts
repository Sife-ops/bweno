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

  private async bwApiPutRequest(e: string, b?: unknown) {
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
    const keys = Object.keys(object);
    if (keys.length > 0) {
      return '?' + keys.map((key) => `${key}=${object[key]}`).join('&');
    } else {
      return '';
    }
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

  // todo: test
  async lock() {
    return await this.bwApiPostRequest('/lock');
  }

  // todo: test
  async unlock(input: t.unlockInput) {
    if (input.password) {
      return await this.bwApiPostRequest('/unlock', {
        password: input.password,
      });
    } else if (input.options) {
      const queryParams = this.objToQueryParams(input.options);
      return await this.bwApiPostRequest('/unlock' + queryParams);
    }
  }

  // POST /confirm/:object/:id
  // POST /restore/:object/:id
  // POST /move/:id/:organizationId
  // POST /attachment
  // POST /send/:id/remove-password

  async create<T extends t.bwObject>(input: {
    body: T;
    query: Record<string, unknown>;
  }) {
    const queryParams = this.objToQueryParams(input.query);
    return await this.bwApiPostRequest(
      `/object/${input.body.object}${queryParams}`,
      input.body
    );
  }

  async sendCreate<T extends t.bwObject>(input: {
    body: T;
    query: Record<string, unknown>;
  }) {
    const queryParams = this.objToQueryParams(input.query);
    return await this.bwApiPostRequest(
      `/object/send${queryParams}`,
      input.body
    );
  }

  // PUT  /object/:object/:id

  // todo: /object/send/:id
  async get(input: t.getObjectInput) {
    return await this.bwApiGetRequest(
      `/object/${input.objectType}/${input.id}`
    );
  }

  // DELETE /object/:object/:id
}

