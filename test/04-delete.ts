import { bweno } from '../test-deps.ts';
import { testObject } from './input.ts';

const folders = await bweno.list.folders();
const items = await bweno.list.items();

Deno.test({
  name: 'folder',
  fn: async () => {
    const folder = folders.find((e) => {
      e.name === testObject.folder.name;
    });
    if (folder) {
      const r = await bweno.delete(folder);
      console.log(r);
    }
  },
});

Deno.test({
  name: 'login',
  fn: async () => {
    const login = items.find((e) => {
      e.name === testObject.login.name;
    });
    if (login) {
      const r = await bweno.delete(login);
      console.log(r);
    }
  },
});

Deno.test({
  name: 'note',
  fn: async () => {
    const note = items.find((e) => {
      e.name === testObject.note.name;
    });
    if (note) {
      const r = await bweno.delete(note);
      console.log(r);
    }
  },
});

Deno.test({
  name: 'card',
  fn: async () => {
    const card = items.find((e) => {
      e.name === testObject.card.name;
    });
    if (card) {
      const r = await bweno.delete(card);
      console.log(r);
    }
  },
});

Deno.test({
  name: 'identity',
  fn: async () => {
    const identity = items.find((e) => {
      e.name === testObject.identity.name;
    });
    if (identity) {
      const r = await bweno.delete(identity);
      console.log(r);
    }
  },
});
