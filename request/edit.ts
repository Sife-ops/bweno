import { RequestIface, QueryParamType } from './request.ts';
import { ObjectIdClass } from '../object/object.ts';

/**
 * Edit options.
 */
export interface EditOptionsIface extends QueryParamType {
  organizationId: string;
}

export class EditRequestClass implements RequestIface {
  method = 'put';
  path = '/object/:object/:id';
  query?: QueryParamType;
  param: QueryParamType;
  body: unknown;

  constructor(body: ObjectIdClass, query?: QueryParamType) {
    this.query = query;
    this.param = {
      object: body.object,
      id: body.id,
    };
    this.body = body;
  }
}
