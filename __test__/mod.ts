import { Bweno } from '../mod.ts';
import { Client } from '../client.ts';
import { CreateLoginRequestClass } from '../request.ts';

Deno.test({
  name: 'temp',
  fn: () => {
    const a = new CreateLoginRequestClass({
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

Deno.test({
  name: 'temp',
  fn: () => {
    const a = new Client();

    const path = '/object/:object/:id';

    // const param = {
    //   object: 'item',
    //   id: '3',
    // };

    const param = undefined;

    const res = a['paramReplace'](path, param);
    console.log(res);
  },
});

Deno.test({
  name: 'temp',
  fn: async () => {
    const b = new Bweno();
    const r = await b.create.login({
      name: 'elden ree',
      fields: [
        {
          name: 'a',
          value: 'b',
          type: 180,
        },
      ],
    });
    if (!r.success) return;
    console.log(r);
    const d = await b['client']['delete'](`/object/item/${r.data.id}`);
    if (!d.success) {
      console.log('delete failed...');
      return;
    } else {
      console.log('deleting...');
      console.log(d);
    }
  },
});
