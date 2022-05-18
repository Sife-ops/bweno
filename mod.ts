import { bwApiResonse } from './type.ts';

import {
  LoginIface,
  Item,
  Card,
  CardIface,
  Identity,
  IdentityIface,
  Login,
  SecureNote,
} from './item.ts';

interface ClientConfig {
  url?: string;
}

export class Client {
  private url: string;

  constructor(config: ClientConfig) {
    this.url = config.url ? config.url : 'http://localhost:8087';
  }

  private async request(e: string, i: RequestInit) {
    const response = await fetch(`${this.url}${e}`, i);
    const parsed: bwApiResonse = await response.json();
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

  async processRequest(o: BaseRequest) {
    let path = this.paramReplace(o.path, o.param);
    path = path + this.queryToString(o.query);

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

  constructor(config: ClientConfig) {
    this.client = new Client(config);
  }

  get create() {
    return new create(this.client);
  }
}

export class create {
  constructor(private client: Client) {}

  async login(body: LoginIface) {
    const login = new LoginRequest(body);
    return await this.client.processRequest(login);
  }

  async secureNote(body: Item) {
    const secureNote = new SecureNoteRequest(body);
    return await this.client.processRequest(secureNote);
  }
}

////////////////////////////////////////////////////////////////////////////////

type QueryParam = Record<string, string | number | boolean>;

interface BaseRequest {
  method: string;
  path: string;
  param?: QueryParam;
  query?: QueryParam;
  body?: Item;
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

  query: GenerateQuery;

  constructor(query: GenerateQuery) {
    this.query = query;
  }
}

////////////////////////////////////////////////////////////////////////////////

export class StatusRequest implements BaseRequest {
  method = 'get';
  path = '/status';
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
}

export class LoginRequest extends ItemRequest {
  body: Login;
  constructor(body: LoginIface) {
    super();
    this.body = new Login(body);
  }
}

export class SecureNoteRequest extends ItemRequest {
  body: SecureNote;
  constructor(body: Item) {
    super();
    this.body = new SecureNote(body);
  }
}

export class CardRequest extends ItemRequest {
  body: Card;
  constructor(body: CardIface) {
    super();
    this.body = new Card(body);
  }
}

export class IdentityRequest extends ItemRequest {
  body: Identity;
  constructor(body: IdentityIface) {
    super();
    this.body = new Identity(body);
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
