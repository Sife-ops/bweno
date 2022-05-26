import { RequestIface, QueryParamType } from './request.ts';

export class RestoreRequest implements RequestIface {
  method = 'post';
  path = '/restore/:item/:id';
  param: QueryParamType;

  constructor(param: QueryParamType) {
    this.param = param;
  }
}

