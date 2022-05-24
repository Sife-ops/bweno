import { ItemIface, ItemClass } from './item.ts';

interface ItemLoginUriIface {
  match?: string;
  uri: string; // todo: nullable?
}

interface ItemLoginIface {
  uris?: ItemLoginUriIface[];
  username?: string;
  password?: string;
  totp?: string;
}

export class ItemLoginClass implements ItemLoginIface {
  passwordRevisionDate?: string;

  uris?: ItemLoginUriIface[];
  username?: string;
  password?: string;
  totp?: string;

  constructor(args: ItemLoginIface) {
    this.uris = args.uris;
    this.username = args.username;
    this.password = args.password;
    this.totp = args.totp;
  }
}

////////////////////////////////////////////////////////////////////////////////

export interface LoginItemIface extends ItemIface {
  login: ItemLoginIface;
}

interface PasswordHistoryIface {
  lastUsedDate: string;
  passworrd: string;
}

export class LoginItemClass extends ItemClass implements LoginItemIface {
  type = 1;
  passwordHistory?: PasswordHistoryIface[];

  login: ItemLoginClass;

  constructor(args: LoginItemIface) {
    super(args);

    this.login = args.login;
  }
}
