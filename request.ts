import { Folder } from './entity/folder.ts';

import {
  ItemIface,
  CardClass,
  CardIface,
  IdentityClass,
  IdentityIface,
  LoginClass,
  LoginIface,
  SecureNoteClass,
} from './entity/item.ts';

////////////////////////////////////////////////////////////////////////////////

export type QueryParam = Record<string, string | number | boolean>;

export interface ItemId extends QueryParam {
  item: 'folder' | 'item';
  id: string;
}

export interface BaseRequest {
  method: string;
  path: string;
  param?: QueryParam;
  query?: QueryParam;
  body?: ItemIface;
}

////////////////////////////////////////////////////////////////////////////////

abstract class ItemRequest implements BaseRequest {
  method = 'post';
  path = '/object/item';
}

export class LoginRequest extends ItemRequest {
  body: LoginClass;
  constructor(body: LoginIface) {
    super();
    this.body = new LoginClass(body);
  }
}

export class SecureNoteRequest extends ItemRequest {
  body: SecureNoteClass;
  constructor(body: ItemIface) {
    super();
    this.body = new SecureNoteClass(body);
  }
}

export class CardRequest extends ItemRequest {
  body: CardClass;
  constructor(body: CardIface) {
    super();
    this.body = new CardClass(body);
  }
}

export class IdentityRequest extends ItemRequest {
  body: IdentityClass;
  constructor(body: IdentityIface) {
    super();
    this.body = new IdentityClass(body);
  }
}

////////////////////////////////////////////////////////////////////////////////

export class DeleteRequest implements BaseRequest {
  method = 'delete';
  path = '/object/:item/:id';

  param: ItemId;

  constructor(param: ItemId) {
    this.param = param;
  }
}

////////////////////////////////////////////////////////////////////////////////

export class FolderRequest implements BaseRequest {
  method = 'post';
  path = '/object/folder';

  body: Folder;

  constructor(body: Folder) {
    this.body = body;
  }
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
