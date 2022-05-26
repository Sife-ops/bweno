import { ObjectIdParamType, QueryParamType, RequestIface } from './request.ts';

/**
 * Get options.
 */
export interface GetOptionsIface extends QueryParamType {
  itemId: string;
  organizationId: string;
  output: string;
}

export class GetRequestClass implements RequestIface {
  method = 'get';
  path = '/object/:object/:id';
  query?: QueryParamType;
  param: QueryParamType;

  constructor(param: ObjectIdParamType, query?: QueryParamType) {
    this.param = param;
    this.query = query;
  }
}
