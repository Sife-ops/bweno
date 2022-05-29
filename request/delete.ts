import { RequestIface, QueryParamType } from './request.ts';

export class DeleteRequest implements RequestIface {
  method = 'delete';
  path = '/object/:item/:id';
  param: QueryParamType;

  constructor(param: { item: string; id: string }) {
    this.param = param;
  }
}
