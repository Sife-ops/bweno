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

export type QueryParamType = Record<
  string,
  string | number | boolean | undefined
>;

export interface ItemIdParamIface extends QueryParamType {
  item: 'folder' | 'item';
  id: string;
}

export interface BasicRequestIface {
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

export class GenerateRequestClass implements BasicRequestIface {
  method = 'get';
  path = '/generate';
  query?: GenerateQueryIface;
  constructor(query?: GenerateQueryIface) {
    this.query = query;
  }
}

////////////////////////////////////////////////////////////////////////////////

export class StatusRequestClass implements BasicRequestIface {
  method = 'get';
  path = '/status';
}

////////////////////////////////////////////////////////////////////////////////

interface ListParamIface extends QueryParamType {
  object:
    | 'items'
    | 'folders'
    | 'collections'
    | 'org-collections'
    | 'org-members'
    | 'organizations';
}

export interface ListQueryIface extends QueryParamType {
  organizationId?: string;
  collectionId?: string;
  folderId?: string;
  search?: string;
  url?: string;
  trash?: boolean;
}

export class ListRequestClass implements BasicRequestIface {
  method = 'get';
  path = '/list/object/:object';
  param: ListParamIface;
  query?: ListQueryIface;
  constructor(param: ListParamIface, query?: ListQueryIface) {
    this.param = param;
    this.query = query;
  }
}

////////////////////////////////////////////////////////////////////////////////

abstract class ItemRequestClass implements BasicRequestIface {
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

export class FolderItemRequestClass implements BasicRequestIface {
  method = 'post';
  path = '/object/folder';
  body: FolderItemIface;
  constructor(body: FolderItemIface) {
    this.body = body;
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

export class ObjectFolderItemRequestClass implements BasicRequestIface {
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

export class DeleteRequest implements BasicRequestIface {
  method = 'delete';
  path = '/object/:item/:id';
  param: ItemIdParamIface;
  constructor(param: ItemIdParamIface) {
    this.param = param;
  }
}
