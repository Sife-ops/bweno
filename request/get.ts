import { RequestIface, QueryParamType, ObjectIdParamType } from './request.ts';
import { ObjectIdClass } from '../object/object.ts';

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
    // constructor(object: ObjectIdClass, query?: QueryParamType) {

    // this.param = {
    //   object: object.object,
    //   id: object.id,
    // };

    this.param = param;
    this.query = query;
  }
}
