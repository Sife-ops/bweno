import { Bweno } from '../mod.ts';

Deno.test({
  name: 'temp',
  fn: async () => {
    const b = new Bweno();

    // const r = await b.create.login({
    //   name: 'asdf',
    //   login: {
    //     username: 'a',
    //     password: 'b',
    //   },
    // });

    // const r = await b.create.folder({
    //   name: 'asdf',
    // });

    // const r = await b.create.card({
    //   name: 'asdf',
    //   card: {
    //     number: '123',
    //   },
    // });

    // const r = await b.create.identity({
    //   name: 'asdf',
    //   identity: {
    //     firstName: 'asdf',
    //   },
    // });

    const r = await b.create.secureNote({
      name: 'asdf',
    })

    console.log(r);
  },
});
