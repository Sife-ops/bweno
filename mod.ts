import * as t from './type.ts';

export class Calls {
  constructor(private url: string) {}

  private async request(e: string, i: RequestInit) {
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
}

interface BaseRequest {
  method: string;
  path: string;
  param?: string[];
  query?: Record<string, unknown>;
  body?: Record<string, unknown>;
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

type ListObjectParam = [
  | 'items'
  | 'folders'
  | 'collections'
  | 'org-collections'
  | 'org-members'
  | 'organizations'
];

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
  path = '/list/object';

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

type ObjectItemLoginBody = {
  username: string;
  password: string;
};

class ItemLoginRequest extends ItemRequest {
  body: ObjectItemLoginBody;
  constructor(body: ObjectItemLoginBody) {
    super();
    this.body = body;
  }
}

Deno.test({
  name: 'ObjectItemLoginRequest',
  fn: () => {
    const o = new ItemLoginRequest({
      username: 'a',
      password: 'b',
    });
    console.log(o);
  },
});

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

class ObjectFolderRequest implements BaseRequest {
  method = 'post';
  path = '/object/folder';

  body: ObjectFolderBody;

  constructor(body: ObjectFolderBody) {
    this.body = body;
  }
}

Deno.test({
  name: 'ObjectFolderRequest',
  fn: () => {
    const o = new ObjectFolderRequest({
      name: 'a',
    });
    console.log(o);
  },
});

////////////////////////////////////////////////////////////////////////////////

type ObjectOrgCollectionQuery = {
  organizationId: string;
};

// todo: ObjectOrgCollectionRequest
