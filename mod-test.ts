import { assertEquals, assert } from './test-deps.ts';

import { hello, Bweno } from './mod.ts';

const { test } = Deno;

test({
  name: 'example',
  fn(): void {
    assertEquals(hello(), 'hello');
  },
});

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
    } catch (e) {
      assert(e.message.includes('Connection refused'));
    }
  },
});

test({
  name: 'throws if connection refused',
  async fn() {
    const response = await bweno['bwApiRequest']('/status', { method: 'GET' });
    console.log(response);
  },
});
