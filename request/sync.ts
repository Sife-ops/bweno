import { RequestIface, QueryParamType } from './request.ts';

/**
 * Sync options.
 */
export interface SyncQueryIface extends QueryParamType {
  last: boolean;
  force: boolean;
}

export class SyncRequestClass implements RequestIface {
  method = 'post';
  path = '/sync';
  query?: QueryParamType;

  constructor(query?: QueryParamType) {
    this.query = query;
  }
}
