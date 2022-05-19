import { BaseRequest, QueryParam } from './request.ts';

/**
 * Client configuration.
 */
export interface ClientConfig {
  /**
   * Address of the local Bitwarden CLI REST server.
   */
  url?: string;
}

export class Client {
  private config: ClientConfig = {
    url: 'http://localhost:8087',
  };

  constructor(config?: ClientConfig) {
    if (config) {
      this.config = config;
    }
  }

  private async request(e: string, i: RequestInit) {
    const response = await fetch(`${this.config.url}${e}`, i);
    const parsed = await response.json();
    if (!parsed.success) {
      throw new Error(`API Error: ${parsed.message}`);
    }
    return parsed;
  }

  private async get(e: string) {
    return await this.request(e, { method: 'GET' });
  }

  private async post(e: string, b?: unknown) {
    return await this.request(e, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(b),
    });
  }

  private async put(e: string, b?: unknown) {
    return await this.request(e, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(b),
    });
  }

  private async delete(e: string) {
    return await this.request(e, { method: 'DELETE' });
  }

  private paramReplace(path: string, obj?: QueryParam): string {
    if (obj) {
      const keys = Object.keys(obj);
      if (keys.length > 0) {
        let p = path;
        keys.map((e) => {
          p = p.replace(`:${e}`, obj[e].toString());
        });
        return p;
      } else {
        return path;
      }
    } else {
      return path;
    }
  }

  private queryToString(obj?: QueryParam): string {
    if (obj) {
      const keys = Object.keys(obj);
      if (keys.length > 0) {
        return '?' + keys.map((key) => `${key}=${obj[key]}`).join('&');
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  async processRequest(obj: BaseRequest) {
    let path = this.paramReplace(obj.path, obj.param);
    path = path + this.queryToString(obj.query);

    if (
      obj.method === 'get' ||
      obj.method === 'post' ||
      obj.method === 'put' ||
      obj.method === 'delete'
    ) {
      return await this[obj.method](path, obj.body);
    } else {
      // todo: better error
      throw new Error('something');
    }
  }
}

Deno.test({
  name: 'temp',
  fn: async () => {
    const c = new Client();
    const r = await c['post']('/object/folder', {
      name: 'asdf',
    });
    if (!r.success) return;
    console.log(r);
    const d = await c['delete'](`/object/folder/${r.data.id}`);
    if (!d.success) {
      console.log('delete failed...');
      return;
    } else {
      console.log('deleting...');
      console.log(d);
    }
  },
});
