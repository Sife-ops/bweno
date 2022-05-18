//================================== TEST ====================================//
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

import { Calls } from './mod.ts';

Deno.test({
  name: 'determine required fields for an item',
  fn: async () => {
    //
    const calls = new Calls('http://localhost:8087');
    let res = await calls.post('/object/item', {
      //   organizationId: null,
      //   collectionIds: null,
      //   folderId: null,
      type: 1, // required
      name: 'elden ring', // required
      //   notes: 'Some notes about this item.',
      //   favorite: false,
    //   fields: [],
      login: {
        //
        // password: 'myp@ssword123',
        uris: [{}]
      },
      //   secureNote: null,
      //   card: null,
      //   identity: null,
      //   reprompt: 0,
    });

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

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//================================== TEST ====================================//

interface Field {
  name?: string;
  value?: string;
  type?: number;
}

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

// Deno.test({
//   name: 'Login',
//   fn: () => {
//     const o = new Login({
//       name: 'a',
//       login: {
//         password: 'b',
//         username: 'c',
//       },
//     });
//     console.log(o);
//     const p = new Login({
//       name: 'a',
//       login: {
//         password: 'b',
//         username: 'c',
//       },
//     });
//     console.log(p);
//   },
// });

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//================================== TEST ====================================//
