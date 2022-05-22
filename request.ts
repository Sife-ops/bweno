// todo: separate files

import { Folder } from './object/folder.ts';

import {
  CardItemClass,
  CardItemIface,
  IdentityItemClass,
  IdentityItemIface,
  ItemIface,
  LoginItemClass,
  LoginItemIface,
  SecureNoteClass,
} from './object/item.ts';

////////////////////////////////////////////////////////////////////////////////

export type QueryParam = Record<string, string | number | boolean | undefined>;

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

export interface GenerateQuery extends QueryParam {
  uppercase?: boolean;
  lowercase?: boolean;
  number?: boolean;
  special?: boolean;
  length?: number;
  type?: 'passphrase' | 'password';
  separator?: string;
  words?: number;
  capitalize?: boolean;
  includeNumber?: boolean;
}

export class GenerateRequest implements BaseRequest {
  method = 'get';
  path = '/generate';

  query?: GenerateQuery;

  constructor(query?: GenerateQuery) {
    this.query = query;
  }
}

////////////////////////////////////////////////////////////////////////////////

export class StatusRequest implements BaseRequest {
  method = 'get';
  path = '/status';
}

////////////////////////////////////////////////////////////////////////////////

abstract class ItemRequest implements BaseRequest {
  method = 'post';
  path = '/object/item';
}

export class LoginRequest extends ItemRequest {
  body: LoginItemClass;
  constructor(body: LoginItemIface) {
    super();
    this.body = new LoginItemClass(body);
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
  body: CardItemClass;
  constructor(body: CardItemIface) {
    super();
    this.body = new CardItemClass(body);
  }
}

export class IdentityRequest extends ItemRequest {
  body: IdentityItemClass;
  constructor(body: IdentityItemIface) {
    super();
    this.body = new IdentityItemClass(body);
  }
}

export class FolderRequest implements BaseRequest {
  method = 'post';
  path = '/object/folder';

  body: Folder;

  constructor(body: Folder) {
    this.body = body;
  }
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

////////////////////////////////////////////////////////////////////////////////

export class DeleteRequest implements BaseRequest {
  method = 'delete';
  path = '/object/:item/:id';

  param: ItemId;

  constructor(param: ItemId) {
    this.param = param;
  }
}
