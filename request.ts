// todo: separate files

////////////////////////////////////////////////////////////////////////////////
// common

export type QueryParamType = Record<
  string,
  string | number | boolean | undefined
>;

export interface BasicRequestIface {
  method: string;
  path: string;
  param?: QueryParamType; // todo: use unknown?
  query?: QueryParamType;
  body?: unknown;
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

export interface ListParamIface extends QueryParamType {
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

export class CreateItemRequestClass implements BasicRequestIface {
  method = 'post';
  path = '/object/item';
  body: unknown;
  constructor(body: unknown) {
    this.body = body;
  }
}

export class CreateFolderRequestClass implements BasicRequestIface {
  method = 'post';
  path = '/object/folder';
  body: unknown;
  constructor(body: unknown) {
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
  item: string;
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
