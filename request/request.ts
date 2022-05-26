export type QueryParamType = Record<
  string,
  string | number | boolean | undefined
>;

export type ObjectIdParamType = {
  object: string;
  id: string;
};

export interface RequestIface {
  method: string;
  path: string;
  param?: QueryParamType;
  query?: QueryParamType;
  body?: unknown;
}
