import { RequestIface, QueryParamType } from './request.ts';

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
  body: unknown;

  constructor(body: unknown, query?: QueryParamType) {
    this.query = query;
    this.body = body;
  }
}
