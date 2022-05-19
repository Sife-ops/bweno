interface Field {
  name?: string;
  value?: string;
  type?: number; // todo: usage? up to 255?
  // todo: lindedId
}

export interface Item {
  organizationId?: string;
  collectionIds?: string;
  folderId?: string;
  name: string;
  notes?: string;
  favorite?: boolean;
  fields?: Field[];
  reprompt?: number;
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

export interface LoginIface extends Item {
  login?: ItemLogin;
}

export class Login implements LoginIface {
  type = 1;

  folderId?: string;
  name: string;
  notes?: string;
  favorite?: boolean;
  fields?: Field[];
  login: ItemLogin;
  reprompt?: number;

  constructor(args: LoginIface) {
    this.folderId = args.folderId;
    this.name = args.name;
    this.notes = args.notes;
    this.favorite = args.favorite;
    this.fields = args.fields;
    this.login = args.login ? args.login : {};
    this.reprompt = args.reprompt;
  }
}

////////////////////////////////////////////////////////////////////////////////

export class SecureNote implements Item {
  type = 2;
  secureNote = {
    type: 0,
  };

  folderId?: string;
  name: string;
  notes?: string;
  favorite?: boolean;
  fields?: Field[];
  reprompt?: number;

  constructor(args: Item) {
    this.folderId = args.folderId;
    this.name = args.name;
    this.notes = args.notes;
    this.favorite = args.favorite;
    this.fields = args.fields;
    this.reprompt = args.reprompt;
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

export interface CardIface extends Item {
  card?: ItemCard;
}

export class Card implements CardIface {
  type = 3;

  folderId?: string;
  name: string;
  notes?: string;
  favorite?: boolean;
  fields?: Field[];
  card: ItemCard;
  reprompt?: number;

  constructor(args: CardIface) {
    this.folderId = args.folderId;
    this.name = args.name;
    this.notes = args.notes;
    this.favorite = args.favorite;
    this.fields = args.fields;
    this.card = args.card ? args.card : {};
    this.reprompt = args.reprompt;
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

export interface IdentityIface extends Item {
  identity?: ItemIdentity;
}

export class Identity implements IdentityIface {
  type = 4;

  folderId?: string;
  name: string;
  notes?: string;
  favorite?: boolean;
  fields?: Field[];
  identity: ItemIdentity;
  reprompt?: number;

  constructor(args: IdentityIface) {
    this.folderId = args.folderId;
    this.name = args.name;
    this.notes = args.notes;
    this.favorite = args.favorite;
    this.fields = args.fields;
    this.identity = args.identity ? args.identity : {};
    this.reprompt = args.reprompt;
  }
}
