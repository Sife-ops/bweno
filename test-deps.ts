import { Bweno } from './bweno.ts';

export const bweno = new Bweno();

export {
  assertEquals,
  assertNotEquals,
  assertThrows,
  assert,
  fail,
} from 'https://deno.land/std@v0.139.0/testing/asserts.ts';
