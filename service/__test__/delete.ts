import { assert, logger } from '../../test-deps.ts';
import { Bweno } from '../../mod.ts';

Deno.test({
  name: 'delete',
  fn: async () => {
    const b = new Bweno();
    const r = await b.create.folder({
      name: 'asdf',
    });

    assert(r.success);
    logger.verbose('create', r);

    const d = await b.delete({
      id: r.data.id,
      item: 'folder',
    });

    assert(d.success);
    logger.verbose('delete', d);
  },
});
