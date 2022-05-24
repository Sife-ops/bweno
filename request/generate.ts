import { RequestIface, QueryParamType } from './request.ts';

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

export class GenerateRequestClass implements RequestIface {
  method = 'get';
  path = '/generate';
  query?: QueryParamType;

  constructor(query?: QueryParamType) {
    this.query = query;
  }
}
