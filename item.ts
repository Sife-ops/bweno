import { Calls } from './mod.ts';
const calls = new Calls('http://localhost:8087');

interface Field {
  name?: string;
  value?: string;
  type?: number;
}

interface Item {
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
}

interface LoginIface extends Item {
  login?: ItemLogin;
}

export class Login implements LoginIface {
  type = 1;

  folderId?: string;
  name: string;
  notes?: string;
  favorite?: boolean;
  fields?: Field[];
  login?: ItemLogin;
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

//================================== TEST ====================================//
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

Deno.test({
  name: 'determine required fields for a LOGIN item',
  fn: async () => {
    const hardcoded = {
      type: 1, // required
      name: 'elden ring', // required
      login: {},
    };

    const login = new Login({
      name: 'asdf',
    });

    let res = await calls.post('/object/item', login);

    if (!res.success) {
      console.log('missing required field...');
      return;
    }

    // console.log(res);
    console.log(JSON.stringify(res, null, 2));

    res = await calls.delete(`/object/item/${res.data?.id}`);

    if (!res.success) {
      console.log('delete failed...');
      return;
    }

    console.log('deleting...');
  },
});

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

//================================== TEST ====================================//
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

Deno.test({
  name: 'determine required fields for a SECURE NOTE item',
  fn: async () => {
    const hardcoded = {
      type: 2, // required
      name: 'elden ring', // required
      secureNote: {},
    };

    const secureNote = new SecureNote({
      name: 'ree',
      notes: 'hi',
    });

    let res = await calls.post('/object/item', secureNote);

    if (!res.success) {
      console.log('missing required field...');
      return;
    }

    // console.log(res);
    console.log(JSON.stringify(res, null, 2));

    res = await calls.delete(`/object/item/${res.data?.id}`);

    if (!res.success) {
      console.log('delete failed...');
      return;
    }

    console.log('deleting...');
  },
});

////////////////////////////////////////////////////////////////////////////////

interface ItemCard {
  cardholderName?: string;
  brand?: string;
  number?: string;
  expMonth?: string;
  expYear?: string;
  code?: string;
}

interface CardIface extends Item {
  card?: ItemCard;
}

export class Card implements CardIface {
  type = 3;

  folderId?: string;
  name: string;
  notes?: string;
  favorite?: boolean;
  fields?: Field[];
  card?: ItemCard;
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

//================================== TEST ====================================//
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

Deno.test({
  name: 'determine required fields for a CARD item',
  fn: async () => {
    const hardcoded = {
      type: 3, // required
      name: 'elden ring', // required
      card: {}, // required
    };

    const card = new Card({
      name: 'fff',
    });

    let res = await calls.post('/object/item', card);

    if (!res.success) {
      console.log('missing required field...');
      return;
    }

    // console.log(res);
    console.log(JSON.stringify(res, null, 2));

    res = await calls.delete(`/object/item/${res.data?.id}`);

    if (!res.success) {
      console.log('delete failed...');
      return;
    }

    console.log('deleting...');
  },
});

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

interface IdentityIface extends Item {
  identity?: ItemIdentity;
}

export class Identity implements IdentityIface {
  type = 4;

  folderId?: string;
  name: string;
  notes?: string;
  favorite?: boolean;
  fields?: Field[];
  identity?: ItemIdentity;
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

//================================== TEST ====================================//
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

Deno.test({
  name: 'determine required fields for an IDENTITY item',
  fn: async () => {
    const hardcoded = {
      type: 4, // required
      name: 'elden ring', // required
      identity: {},
    };

    let res = await calls.post('/object/item', hardcoded);

    if (!res.success) {
      console.log('missing required field...');
      return;
    }

    // console.log(res);
    console.log(JSON.stringify(res, null, 2));

    res = await calls.delete(`/object/item/${res.data?.id}`);

    if (!res.success) {
      console.log('delete failed...');
      return;
    }

    console.log('deleting...');
  },
});
