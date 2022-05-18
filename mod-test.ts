import * as m from './mod.ts';

Deno.test({
  name: 'temp',
  fn: () => {
    const a = new m.ItemLoginRequest({
      name: 'fff',
    });
    console.log(a);
  },
});
