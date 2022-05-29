import { assert, bweno } from '../../test-deps.ts';

Deno.test({
  name: 'paramReplace',
  fn: () => {
    const path = '/object/:item/:id';
    const param = {
      item: 'a',
      id: 'b',
    };

    const result = bweno['client']['paramReplace'](path, param);

    assert(result === '/object/a/b');
  },
});
