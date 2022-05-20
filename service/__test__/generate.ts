import { Bweno } from '../../mod.ts';
import { assert, logger } from '../../test-deps.ts';

Deno.test({
  name: 'temp',
  fn: async () => {
    const b = new Bweno();
    const r = await b.generate({
      length: 32,
    });

    assert(r.success);
    logger.verbose('generate', r);
  },
});
