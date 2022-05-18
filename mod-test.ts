import {
  //
  Bweno,
  LoginRequest,
} from './mod.ts';

Deno.test({
  name: 'temp',
  fn: () => {
    const a = new LoginRequest({
      name: 'fff',
      login: {
        username: 'ggg',
      },
    });
    console.log(a);
  },
});

Deno.test({
  name: 'temp',
  fn: async () => {
    const bweno = new Bweno();
    await bweno.create.login({
      name: 'asdf',
      login: {
        password: 'a',
        username: 'b',
      },
    });
  },
});
