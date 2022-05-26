import { RequestIface, QueryParamType } from './request.ts';

/**
 * Unlock options.
 */
export interface UnlockOptionsIface {
  password?: string;
  passwordEnv?: string;
  passwordFile?: string;
}

export class UnlockRequestClass implements RequestIface {
  method = 'post';
  path = '/unlock';

  query?: QueryParamType;
  body?: unknown;

  constructor(args: UnlockOptionsIface) {
    if (args.password) {
      this.body = { password: args.password };
    } else if (args.passwordEnv) {
      this.query = { passwordEnv: args.passwordEnv };
    } else if (args.passwordFile) {
      this.query = { passwordFile: args.passwordFile };
    } else {
      throw new Error('improper arguments');
    }
  }
}
