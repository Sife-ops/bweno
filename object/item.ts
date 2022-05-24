////////////////////////////////////////////////////////////////////////////////
// common

interface ItemFieldIface {
  name?: string;
  value?: string;
  type?: number; // todo: usage? up to 255?
}

export interface ItemIface {
  organizationId?: string;
  collectionIds?: string;
  folderId?: string;
  name: string;
  notes?: string;
  favorite?: boolean;
  fields?: ItemFieldIface[];
  reprompt?: number;
}

abstract class ItemClass implements ItemIface {
  folderId?: string;
  name: string;
  notes?: string;
  favorite?: boolean;
  fields?: ItemFieldIface[];
  reprompt?: number;
  constructor(item: ItemIface) {
    this.folderId = item.folderId;
    this.name = item.name;
    this.notes = item.notes;
    this.favorite = item.favorite;
    this.fields = item.fields;
    this.reprompt = item.reprompt;
  }
}

////////////////////////////////////////////////////////////////////////////////
// login

interface ItemLoginIface {
  uris?: {
    match?: string;
    uri: string; // todo: nullable?
  }[];
  username?: string;
  password?: string;
  totp?: string;
}

export interface LoginItemIface extends ItemIface {
  login: ItemLoginIface;
}

export class LoginItemClass extends ItemClass {
  type = 1;
  login: ItemLoginIface;
  constructor(item: LoginItemIface) {
    super(item);
    this.login = item.login;
  }
}

////////////////////////////////////////////////////////////////////////////////
// note

export class SecureNoteClass extends ItemClass {
  type = 2;
  secureNote = {
    type: 0, // todo: usage? up to 255?
  };
  constructor(item: ItemIface) {
    super(item);
  }
}

////////////////////////////////////////////////////////////////////////////////
// card

interface ItemCardIface {
  cardholderName?: string;
  brand?: string;
  number?: string;
  expMonth?: string;
  expYear?: string;
  code?: string;
}

export interface CardItemIface extends ItemIface {
  card: ItemCardIface;
}

export class CardItemClass extends ItemClass {
  type = 3;
  card: ItemCardIface;
  constructor(item: CardItemIface) {
    super(item);
    this.card = item.card;
  }
}

////////////////////////////////////////////////////////////////////////////////
// identity

interface ItemIdentityIface {
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

export interface IdentityItemIface extends ItemIface {
  identity: ItemIdentityIface;
}

export class IdentityItemClass extends ItemClass {
  type = 4;
  identity: ItemIdentityIface;
  constructor(item: IdentityItemIface) {
    super(item);
    this.identity = item.identity;
  }
}
