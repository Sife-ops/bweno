import { Bweno } from '../bweno.ts';
import { assert } from '../test-deps.ts';

// todo: lock
// todo: unlock

const b = new Bweno();

Deno.test({
  name: 'generate',
  fn: async () => {
    const r = await b.generate();
    console.log(r);
    assert(r !== '');
    // todo: options
  },
});

Deno.test({
  name: 'status',
  fn: async () => {
    const r = await b.status();
    console.log(r);
    assert(r);
  },
});

Deno.test({
  // todo: enable
  ignore: true,
  name: 'sync',
  fn: async () => {
    const r = await b.sync();
    console.log(r);
    assert(r);
    // todo: options
  },
});
