import { RequestIface, QueryParamType } from './request.ts';

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

export class ListRequestClass implements RequestIface {
  method = 'get';
  path = '/list/object/:object';
  param: QueryParamType;
  query?: QueryParamType;

  constructor(param: QueryParamType, query?: QueryParamType) {
    this.param = param;
    this.query = query;
  }
}
