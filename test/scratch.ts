import {
  //
  Bweno,
  //
  VaultObject,
  Folder,
  //
  Item,
  Card,
  Login,
} from '../mod.ts';

const f = (o: VaultObject): void => {
  //
};

const ff = (o: Item): void => {
  //
};

Deno.test({
  name: 'scratch',
  fn: async () => {
    const folder = new Folder({ name: 'a' });

    const card = new Card({ name: 'a', card: { number: '123' } });
    const login = new Login({ name: 'a', login: { password: 'a' } });

    f(folder);
    f(card);
    f(login);

    // ff(folder);
    ff(card);
    ff(login);

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

    // const r = await b.list.folders();

    // const r = await b.list.items({
    //   trash: true,
    // });

    const r = await b.sync();

    console.log(r);
  },
});
