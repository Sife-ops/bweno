export type QueryParamType = Record<
  string,
  string | number | boolean | undefined
>;

export interface RequestIface {
  method: string;
  path: string;
  param?: QueryParamType;
  query?: QueryParamType;
  body?: unknown;
}
