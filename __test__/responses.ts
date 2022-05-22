import { Client } from '../client.ts';

const c = new Client();

////////////////////////////////////////////////////////////////////////////////
// get: /generate

Deno.test({
  name: 'generate',
  fn: async () => {
    const r = await c['get']('/generate');
    console.log(r);
  },
});

// {
//   success: true,
//   data: {
//     object: 'string',
//     data: 'NCVTUZPjg6aALp',
//   },
// };

////////////////////////////////////////////////////////////////////////////////
// get: /status

Deno.test({
  name: 'status',
  fn: async () => {
    const r = await c['get']('/status');
    console.log(r);
  },
});

// {
//   success: true,
//   data: {
//     object: "template",
//     template: {
//       serverUrl: null,
//       lastSync: "2022-05-15T10:51:54.136Z",
//       userEmail: "wyatt.goettsch@gmail.com",
//       userId: "6cd332a3-edf5-4d91-b56f-abcc0077779e",
//       status: "unlocked"
//     }
//   }
// }

////////////////////////////////////////////////////////////////////////////////
// get: /list/:object

Deno.test({
  name: 'list folders',
  fn: async () => {
    const r = await c['get']('/list/object/folders');
    console.log(r);
  },
});

// folders
// {
//   success: true,
//   data: {
//     object: "list",
//     data: [
//       { object: "folder", id: "e1286f4c-d179-4217-bdf7-adf70180ddca", name: "Device" },
//       { object: "folder", id: "b4dd08be-6a89-4d4a-8396-adf701800e6f", name: "Email" },
//       { object: "folder", id: "66d3e53d-9c4b-47b5-a2fc-adf701834879", name: "System" },
//       { object: "folder", id: null, name: "No Folder" }
//     ]
//   }
// }

// Deno.test({
//   name: 'list items',
//   fn: async () => {
//     const r = await c['get']('/list/object/items');
//     console.log(r);
//   },
// });

////////////////////////////////////////////////////////////////////////////////

// todo: /send/list

////////////////////////////////////////////////////////////////////////////////
// post: /sync

Deno.test({
  name: 'sync',
  fn: async () => {
    const r = await c['post']('/sync');
    console.log(r);
  },
});

//  {
//   success: true,
//   data: {
//     noColor: false,
//     object: 'message',
//     title: 'Syncing complete.',
//     message: null,
//   },
// };

////////////////////////////////////////////////////////////////////////////////

// todo: /lock
// todo: /unlock
// todo: /confirm
// todo: /restore
// todo: /move
// todo: /attachment
// todo: /send/:id/remove-password

////////////////////////////////////////////////////////////////////////////////
// post: /object/:object

Deno.test({
  name: 'create folder',
  fn: async () => {
    const r = await c['post']('/object/folder', {
      name: 'asdf',
    });
    console.log(r);
    const d = await c['delete'](`/object/folder/${r.data.id}`);
    console.log(d);
  },
});

// folder
// {
//   success: true,
//   data: {
//     object: 'folder',
//     id: 'fab45f49-1984-4895-93a6-ae9b018a9e95',
//     name: 'asdf',
//   },
// };

////////////////////////////////////////////////////////////////////////////////
// put: /object/:object/:id

Deno.test({
  name: 'update folder',
  fn: async () => {
    const r = await c['post']('/object/folder', {
      name: 'asdf',
    });
    console.log(r);
    const u = await c['put'](`/object/folder/${r.data.id}`, {
      name: 'fdsa',
    });
    console.log(u);
    const d = await c['delete'](`/object/folder/${r.data.id}`);
    console.log(d);
  },
});

// folder
// {
//   success: true,
//   data: {
//     object: 'folder',
//     id: 'fab45f49-1984-4895-93a6-ae9b018a9e95',
//     name: 'asdf',
//   },
// };

////////////////////////////////////////////////////////////////////////////////
// get: /object/:object/:id

Deno.test({
  name: 'get folder',
  fn: async () => {
    const r = await c['post']('/object/folder', {
      name: 'asdf',
    });
    console.log('create', r);
    const g = await c['get'](`/object/folder/${r.data.id}`);
    console.log('get', g);
    const d = await c['delete'](`/object/folder/${r.data.id}`);
    console.log('delete', d);
  },
});

// folder
// {
//   success: true,
//   data: {
//     object: 'folder',
//     id: 'fab45f49-1984-4895-93a6-ae9b018a9e95',
//     name: 'asdf',
//   },
// };

////////////////////////////////////////////////////////////////////////////////
// delete: /object/:object/:id

// { success: true };
