import { Bweno } from '../mod.ts';

Deno.test({
  name: 'scratch',
  fn: async () => {
    //
    const b = new Bweno();
    // const r = b.generate({})
    const r = await b.status();
    console.log(r);
  },
});
