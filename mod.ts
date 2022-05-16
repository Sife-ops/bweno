import * as t from './type.ts';

export class Calls {
  constructor(private url: string) {}

  async request(e: string, i: RequestInit) {
    const response = await fetch(`${this.url}${e}`, i);
    const parsed: t.bwApiResonse = await response.json();
    if (!parsed.success) {
      throw new Error(`API Error: ${parsed.message}`);
    }
    return parsed;
  }

  async get(e: string) {
    return await this.request(e, { method: 'GET' });
  }

  async post(e: string, b?: unknown) {
    return await this.request(e, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(b),
    });
  }

  async put(e: string, b?: unknown) {
    return await this.request(e, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(b),
    });
  }

  async delete(e: string) {
    return await this.request(e, { method: 'DELETE' });
  }

  objToQueryString(object: Record<string, unknown>) {
    const keys = Object.keys(object);
    if (keys.length > 0) {
      return '?' + keys.map((key) => `${key}=${object[key]}`).join('&');
    } else {
      return '';
    }
  }

  async processRequest(o: BaseRequest) {
    let queryString = '';
    if (o.query) {
      queryString = this.objToQueryString(o.query);
    }
    await this[o.method](o.path + queryString, o.body);
  }
}

interface BaseRequest {
  method: 'get' | 'post' | 'put' | 'delete';
  path: string;
  query?: Record<string, unknown>;
  body?: Record<string, unknown>;
}

const StatusRequest: BaseRequest = {
  method: 'get',
  path: '/status',
};
