import { bweno } from '../test-deps.ts';
import { testObject } from './input.ts';

Deno.test({
  name: 'folder',
  fn: async () => {
    const r = await bweno.create.folder(testObject.folder);
    console.log(r);
  },
});

Deno.test({
  name: 'login',
  fn: async () => {
    const r = await bweno.create.login(testObject.login);
    console.log(r);
  },
});

Deno.test({
  name: 'note',
  fn: async () => {
    // todo: remove reference to 'secureNote'
    const r = await bweno.create.secureNote(testObject.note);
    console.log(r);
  },
});

Deno.test({
  name: 'card',
  fn: async () => {
    // todo: remove reference to 'secureNote'
    const r = await bweno.create.card(testObject.card);
    console.log(r);
  },
});

Deno.test({
  name: 'identity',
  fn: async () => {
    const r = await bweno.create.identity(testObject.identity);
    console.log(r);
  },
});
