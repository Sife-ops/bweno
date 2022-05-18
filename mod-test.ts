import * as m from './mod.ts';

Deno.test({
  name: 'temp',
  fn: () => {
    const a = new m.LoginRequest({
      name: 'fff',
      login: {
        username: 'ggg',
      },
    });
    console.log(a);
  },
});
