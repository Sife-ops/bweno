// todo: separate files

import { FolderIface } from './object/folder.ts';

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
// common

export type QueryParamType = Record<
  string,
  string | number | boolean | undefined
>;

export interface BasicRequestIface {
  method: string;
  path: string;
  param?: QueryParamType;
  query?: QueryParamType;
  body?: ItemIface;
}

////////////////////////////////////////////////////////////////////////////////
// generate

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
// status

export class StatusRequestClass implements BasicRequestIface {
  method = 'get';
  path = '/status';
}

////////////////////////////////////////////////////////////////////////////////
// list

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
// create

abstract class CreateItemRequestClass implements BasicRequestIface {
  method = 'post';
  path = '/object/item';
}

export class CreateLoginRequestClass extends CreateItemRequestClass {
  body: LoginItemClass;
  constructor(body: LoginItemIface) {
    super();
    this.body = new LoginItemClass(body);
  }
}

export class CreateSecureNoteRequestClass extends CreateItemRequestClass {
  body: SecureNoteClass;
  constructor(body: ItemIface) {
    super();
    this.body = new SecureNoteClass(body);
  }
}

export class CreateCardRequestClass extends CreateItemRequestClass {
  body: CardItemClass;
  constructor(body: CardItemIface) {
    super();
    this.body = new CardItemClass(body);
  }
}

export class CreateIdentityRequestClass extends CreateItemRequestClass {
  body: IdentityItemClass;
  constructor(body: IdentityItemIface) {
    super();
    this.body = new IdentityItemClass(body);
  }
}

export class CreateFolderRequestClass implements BasicRequestIface {
  method = 'post';
  path = '/object/folder';
  body: FolderIface;
  constructor(body: FolderIface) {
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

type ObjectOrgCollectionQuery = {
  organizationId: string;
};

// todo: ObjectOrgCollectionRequest

////////////////////////////////////////////////////////////////////////////////
// delete

export interface DeleteParamIface extends QueryParamType {
  item: 'attachment' | 'item' | 'folder' | 'org-collection';
  id: string;
}

export class DeleteRequest implements BasicRequestIface {
  method = 'delete';
  path = '/object/:item/:id';
  param: DeleteParamIface;
  constructor(param: DeleteParamIface) {
    this.param = param;
  }
}
