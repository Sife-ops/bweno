import * as t from './type.ts';
import * as g from './item.ts';

export class Client {
  constructor(private url: string) {}

  private async request(e: string, i: RequestInit) {
    const response = await fetch(`${this.url}${e}`, i);
    const parsed: t.bwApiResonse = await response.json();
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

  private paramToString(
    path: string,
    obj: Record<string, string | number | boolean>
  ): string {
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
  }

  private queryToString(obj: Record<string, unknown>): string {
    const keys = Object.keys(obj);
    if (keys.length > 0) {
      return '?' + keys.map((key) => `${key}=${obj[key]}`).join('&');
    } else {
      return '';
    }
  }

  async processRequest(o: BaseRequest) {
    let path = this.paramToString(o.path, o.param);

    if (o.query) {
      path = path + this.queryToString(o.query);
    }

    if (
      o.method === 'get' ||
      o.method === 'post' ||
      o.method === 'put' ||
      o.method === 'delete'
    ) {
      return await this[o.method](path, o.body);
    } else {
      // todo: better error
      throw new Error('something');
    }
  }
}

////////////////////////////////////////////////////////////////////////////////

export class Bweno {
  private client: Client;

  constructor(url: string = 'http://localhost:8087') {
    this.client = new Client(url);
  }

  get create() {
    return new create(this.client);
  }
}

export class create {
  constructor(private client: Client) {}

  async login(body: g.LoginIface) {
    const login = new LoginRequest(body);
    return await this.client.processRequest(login);
  }

  async secureNote(body: g.Item) {
    const secureNote = new SecureNoteRequest(body);
    return await this.client.processRequest(secureNote);
  }
}

Deno.test({
  name: 'temp',
  fn: async () => {
    const bweno = new Bweno();
    await bweno.create.login({
      name: 'asdf',
      login: {
        password: 'a',
        username: 'b',
      },
    });
  },
});

////////////////////////////////////////////////////////////////////////////////

type QueryParam = Record<string, string | number | boolean>;

interface BaseRequest {
  method: string;
  path: string;
  // todo: make optional
  param: QueryParam;
  query?: QueryParam;
  body?: g.Item;
}

////////////////////////////////////////////////////////////////////////////////

type GenerateQuery = {
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  special: boolean;
  length: number;
  type: 'passphrase' | 'password';
  separator: string;
  words: number;
  capitalize: boolean;
  includeNumber: boolean;
};

export class GenerateRequest implements BaseRequest {
  method = 'get';
  path = '/generate';
  param = {};

  query: GenerateQuery;

  constructor(query: GenerateQuery) {
    this.query = query;
  }
}

////////////////////////////////////////////////////////////////////////////////

export class StatusRequest implements BaseRequest {
  method = 'get';
  path = '/status';
  param = {};
}

////////////////////////////////////////////////////////////////////////////////

type ListObjectParam = {
  object:
    | 'items'
    | 'folders'
    | 'collections'
    | 'org-collections'
    | 'org-members'
    | 'organizations';
};

type ListObjectQuery = {
  organizationId: string;
  collectionId: string;
  folderId: string;
  search: string;
  url: string;
  trash: boolean;
};

export class ListObjectRequest implements BaseRequest {
  method = 'get';
  path = '/list/object/:object';

  param: ListObjectParam;
  query: ListObjectQuery;

  constructor(param: ListObjectParam, query: ListObjectQuery) {
    this.param = param;
    this.query = query;
  }
}

////////////////////////////////////////////////////////////////////////////////

abstract class ItemRequest implements BaseRequest {
  method = 'post';
  path = '/object/item';
  param = {};
}

export class LoginRequest extends ItemRequest {
  body: g.Login;
  constructor(body: g.LoginIface) {
    super();
    this.body = new g.Login(body);
  }
}

export class SecureNoteRequest extends ItemRequest {
  body: g.SecureNote;
  constructor(body: g.Item) {
    super();
    this.body = new g.SecureNote(body);
  }
}

export class CardRequest extends ItemRequest {
  body: g.Card;
  constructor(body: g.CardIface) {
    super();
    this.body = new g.Card(body);
  }
}

export class IdentityRequest extends ItemRequest {
  body: g.Identity;
  constructor(body: g.IdentityIface) {
    super();
    this.body = new g.Identity(body);
  }
}

////////////////////////////////////////////////////////////////////////////////

type ObjectAttachmentQuery = {
  itemId: string;
  file: string;
  // organizationId?: string;
};

// todo: ObjectAttachmentRequest

////////////////////////////////////////////////////////////////////////////////

type ObjectFolderBody = {
  name: string;
};

export class ObjectFolderRequest implements BaseRequest {
  method = 'post';
  path = '/object/folder';
  param = {};

  body: ObjectFolderBody;

  constructor(body: ObjectFolderBody) {
    this.body = body;
  }
}

////////////////////////////////////////////////////////////////////////////////

type ObjectOrgCollectionQuery = {
  organizationId: string;
};

// todo: ObjectOrgCollectionRequest
