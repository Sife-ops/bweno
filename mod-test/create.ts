// import { assertEquals, assert, fail } from '../test-deps.ts';
// import { assertEquals } from '../test-deps.ts';
import { Bweno } from '../mod.ts';

const { test } = Deno;

const bweno = new Bweno();

test({
  name: 'create folder',
  async fn() {
    const res = await bweno['bwApiPostRequest']('/object/folder', {
      name: 'aaa',
    });
    console.log(res);
  },
});
