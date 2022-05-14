import { assertEquals } from './test-deps.ts';

import { hello } from './mod.ts';

Deno.test({
  name: 'example',
  fn(): void {
    assertEquals(hello(), 'hello');
  },
});
