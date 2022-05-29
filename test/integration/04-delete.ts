import { bweno } from '../../test-deps.ts';

const folders = await bweno.list.folders();
const items = await bweno.list.items();

const vaultObjects = [...folders, ...items];

Deno.test({
  name: 'delete',
  fn: async () => {
    const testObjects = vaultObjects.filter((e) => {
      return e.name.startsWith('test-');
    });

    for (let i = 0; i < testObjects.length; i++) {
      const result = await bweno.delete(testObjects[i]);
      console.log(result);
    }
  },
});
