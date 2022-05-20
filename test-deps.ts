export {
  assertEquals,
  assertNotEquals,
  assertThrows,
  assert,
  fail,
} from 'https://deno.land/std@v0.139.0/testing/asserts.ts';

export const logger = {
  verbose: (...data: unknown[]) => {
    if (Deno.env.get('VERBOSE')) {
      console.log(...data);
    }
  },
};
