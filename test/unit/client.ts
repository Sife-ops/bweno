import { assert, bweno, fail } from '../../test-deps.ts';

Deno.test({
  name: 'paramReplace - with param',
  fn: () => {
    const result = bweno['client']['paramReplace']('/object/:item/:id', {
      item: 'a',
      id: 'b',
    });
    assert(result === '/object/a/b');
  },
});

Deno.test({
  name: 'paramReplace - no param',
  fn: () => {
    const result = bweno['client']['paramReplace']('/status');
    assert(result === '/status');
  },
});

Deno.test({
  name: 'paramReplace - invalid param',
  fn: () => {
    try {
      bweno['client']['paramReplace']('/object/:item/:id', {
        object: 'a',
        id: 'b',
      });
      fail();
    } catch (e) {
      assert(e.message.includes('replacement error'));
    }
  },
});

Deno.test({
  name: 'queryToString',
  fn: () => {
    const query = {
      item: 'a',
      id: 'b',
    };

    const result = bweno['client']['queryToString'](query);

    assert(result === '?item=a&id=b');
  },
});
