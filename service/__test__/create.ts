import { Bweno } from '../../mod.ts';

Deno.test({
  name: 'folder',
  fn: async () => {
    const b = new Bweno();
    const r = await b.create.folder({
      name: 'asdf',
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
