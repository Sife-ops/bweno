import { Bweno } from '../mod.ts';

Deno.test({
  name: 'temp',
  fn: async () => {
    const b = new Bweno();
    const r = await b.create.folder({
      name: 'asdf',
    });
    console.log(r);
  },
});
