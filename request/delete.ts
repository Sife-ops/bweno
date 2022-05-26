import { RequestIface, QueryParamType } from './request.ts';

export class DeleteRequest implements RequestIface {
  method = 'delete';
  path = '/object/:item/:id';
  param: QueryParamType;

  constructor(param: QueryParamType) {
    this.param = param;
  }
}
