interface Field {
  name?: string;
  value?: string;
  type?: number; // todo: usage? up to 255?
  // todo: linkedId
}

export interface ItemIface {
  organizationId?: string;
  collectionIds?: string;
  folderId?: string;
  name: string;
  notes?: string;
  favorite?: boolean;
  fields?: Field[];
  reprompt?: number;
}

abstract class BaseItemClass implements ItemIface {
  folderId?: string;
  name: string;
  notes?: string;
  favorite?: boolean;
  fields?: Field[];
  reprompt?: number;

  constructor(args: ItemIface) {
    this.folderId = args.folderId;
    this.name = args.name;
    this.notes = args.notes;
    this.favorite = args.favorite;
    this.fields = args.fields;
    this.reprompt = args.reprompt;
  }
}

////////////////////////////////////////////////////////////////////////////////

interface Uri {
  match?: string;
  uri: string;
}

interface ItemLogin {
  uris?: Uri[];
  username?: string;
  password?: string;
  totp?: string;
  // todo: passwordRevisionDate
}

export interface LoginIface extends ItemIface {
  login?: ItemLogin;
}

export class LoginClass extends BaseItemClass {
  type = 1;

  login: ItemLogin;

  constructor(args: LoginIface) {
    super(args);
    this.login = args.login ? args.login : {};
  }
}

////////////////////////////////////////////////////////////////////////////////

export class SecureNoteClass extends BaseItemClass {
  type = 2;
  secureNote = {
    type: 0, // todo: usage? up to 255?
  };

  constructor(args: ItemIface) {
    super(args);
  }
}

////////////////////////////////////////////////////////////////////////////////

interface ItemCard {
  cardholderName?: string;
  brand?: string;
  number?: string;
  expMonth?: string;
  expYear?: string;
  code?: string;
}

export interface CardIface extends ItemIface {
  card?: ItemCard;
}

export class CardClass extends BaseItemClass {
  type = 3;

  card: ItemCard;

  constructor(args: CardIface) {
    super(args);
    this.card = args.card ? args.card : {};
  }
}

////////////////////////////////////////////////////////////////////////////////

interface ItemIdentity {
  title?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  company?: string;
  email?: string;
  phone?: string;
  ssn?: string;
  username?: string;
  passportNumber?: string;
  licenseNumber?: string;
}

export interface IdentityIface extends ItemIface {
  identity?: ItemIdentity;
}

export class IdentityClass extends BaseItemClass {
  type = 4;

  identity: ItemIdentity;

  constructor(args: IdentityIface) {
    super(args);
    this.identity = args.identity ? args.identity : {};
  }
}
