import { assertEquals, assert, fail } from './test-deps.ts';

import { Bweno } from './mod.ts';

const { test } = Deno;

const badUrl = 'badUrl';
const inactiveUrl = 'http://localhost:8086';

const bweno = new Bweno();
const bwenoBadUrl = new Bweno(badUrl);
const bwenoInactiveUrl = new Bweno(inactiveUrl);

test({
  name: 'default URL is "http://localhost:8087"',
  fn(): void {
    assertEquals(bweno['url'], 'http://localhost:8087');
  },
});

test({
  name: 'custom URL is set',
  fn(): void {
    assertEquals(bwenoBadUrl['url'], badUrl);
  },
});

test({
  name: 'throws if invalid URL',
  async fn() {
    try {
      await bwenoBadUrl['bwApiRequest']('/status', { method: 'GET' });
      fail();
    } catch (e) {
      assertEquals(e.message, 'Invalid URL');
    }
  },
});

test({
  name: 'throws if connection refused',
  async fn() {
    try {
      await bwenoInactiveUrl['bwApiRequest']('/status', { method: 'GET' });
      fail();
    } catch (e) {
      assert(e.message.includes('Connection refused'));
    }
  },
});

test({
  name: 'generate',
  async fn() {
    const response = await bweno.generate();
    // console.log(response);
    assert(response.success);
  },
});

test({
  name: 'status',
  async fn() {
    const response = await bweno.status();
    // console.log(response);
    assert(response.success);
  },
});

test({
  name: 'throws if item not found',
  async fn() {
    try {
      await bweno.get({
        object: 'item',
        id: '766d5fcd-e8e9-4698-bb08-ad44002f6282',
      });
      fail();
    } catch (e) {
      assert(e.message.includes('Not found'));
    }
  },
});

// test({
//   name: 'get item',
//   async fn() {
//     const a = await bweno.get({
//       object: 'item',
//       id: '765d5fcd-e8e9-4698-bb08-ad44002f6282',
//     });
//     console.log(a);
//   },
// });
