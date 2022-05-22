// todo: separate files

import { FolderItemIface } from './object/folder.ts';

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

export type QueryParamType = Record<string, string | number | boolean | undefined>;

export interface ItemIdParamIface extends QueryParamType {
  item: 'folder' | 'item';
  id: string;
}

export interface BaseRequestIface {
  method: string;
  path: string;
  param?: QueryParamType;
  query?: QueryParamType;
  body?: ItemIface;
}

////////////////////////////////////////////////////////////////////////////////

export interface GenerateQueryIface extends QueryParamType {
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

export class GenerateRequestClass implements BaseRequestIface {
  method = 'get';
  path = '/generate';
  query?: GenerateQueryIface;
  constructor(query?: GenerateQueryIface) {
    this.query = query;
  }
}

////////////////////////////////////////////////////////////////////////////////

export class StatusRequestClass implements BaseRequestIface {
  method = 'get';
  path = '/status';
}

////////////////////////////////////////////////////////////////////////////////

abstract class ItemRequestClass implements BaseRequestIface {
  method = 'post';
  path = '/object/item';
}

export class LoginItemRequestClass extends ItemRequestClass {
  body: LoginItemClass;
  constructor(body: LoginItemIface) {
    super();
    this.body = new LoginItemClass(body);
  }
}

export class SecureNoteItemRequestClass extends ItemRequestClass {
  body: SecureNoteClass;
  constructor(body: ItemIface) {
    super();
    this.body = new SecureNoteClass(body);
  }
}

export class CardItemRequestClass extends ItemRequestClass {
  body: CardItemClass;
  constructor(body: CardItemIface) {
    super();
    this.body = new CardItemClass(body);
  }
}

export class IdentityItemRequestClass extends ItemRequestClass {
  body: IdentityItemClass;
  constructor(body: IdentityItemIface) {
    super();
    this.body = new IdentityItemClass(body);
  }
}

export class FolderItemRequestClass implements BaseRequestIface {
  method = 'post';
  path = '/object/folder';

  body: FolderItemIface;

  constructor(body: FolderItemIface) {
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

export class ListObjectRequest implements BaseRequestIface {
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

export class ObjectFolderItemRequestClass implements BaseRequestIface {
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

export class DeleteRequest implements BaseRequestIface {
  method = 'delete';
  path = '/object/:item/:id';
  param: ItemIdParamIface;
  constructor(param: ItemIdParamIface) {
    this.param = param;
  }
}
