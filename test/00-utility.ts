import { assert, bweno } from '../test-deps.ts';

// todo: lock
// todo: unlock

Deno.test({
  name: 'generate',
  fn: async () => {
    const r = await bweno.generate();
    console.log(r);
    assert(r !== '');
    // todo: options
  },
});

Deno.test({
  name: 'status',
  fn: async () => {
    const r = await bweno.status();
    console.log(r);
    assert(r);
  },
});

Deno.test({
  // todo: enable
  ignore: true,
  name: 'sync',
  fn: async () => {
    const r = await bweno.sync();
    console.log(r);
    assert(r);
    // todo: options
  },
});
