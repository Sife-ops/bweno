import {
  //
  Bweno,
} from '../mod.ts';

Deno.test({
  name: 'scratch',
  fn: async () => {
    const b = new Bweno();

    // const r = await b.status();

    // const f: Folder = {
    //   name: 'asdf'
    // }
    // const r = await b.create.folder({
    //   name: 'asdf',
    // })

    // const r = await b.delete({
    //   item: 'folder',
    //   id: '458f558f-8436-4746-9ff5-ae9f0135f010'
    // })

    // const r = await b.generate();

    // const r = await b.status();

    // const r = await b.list.items({
    //   trash: true,
    // });

    // const r = await b.sync();

    const r = await b.list.folders();
    const f = r.find((e) => e.name === 'Email');

    if (f) {
      const i = await b.list.items({
        folderId: f.id,
      });
      console.log(i);
    }
  },
});
