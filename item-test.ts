import { Calls } from './mod.ts';
import * as i from './item.ts';

const calls = new Calls('http://localhost:8087');

Deno.test({
  name: 'determine required fields for a LOGIN item',
  fn: async () => {
    const hardcoded = {
      type: 1, // required
      name: 'elden ring', // required
      login: {},
    };

    const login = new i.Login({
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

Deno.test({
  name: 'determine required fields for a SECURE NOTE item',
  fn: async () => {
    const hardcoded = {
      type: 2, // required
      name: 'elden ring', // required
      secureNote: {},
    };

    const secureNote = new i.SecureNote({
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

Deno.test({
  name: 'determine required fields for an IDENTITY item',
  fn: async () => {
    const hardcoded = {
      type: 4, // required
      name: 'elden ring', // required
      identity: {},
    };

    const identity = new Identity({
      name: 'gg',
    });

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
