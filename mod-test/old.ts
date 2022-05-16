// import { assertEquals, assert, fail } from './test-deps.ts';
// import { Bweno } from './mod.ts';

// const { test } = Deno;

// const badUrl = 'badUrl';
// const inactiveUrl = 'http://localhost:8086';

// const bweno = new Bweno();
// const bwenoBadUrl = new Bweno(badUrl);
// const bwenoInactiveUrl = new Bweno(inactiveUrl);

// test({
//   name: 'default URL is "http://localhost:8087"',
//   fn(): void {
//     assertEquals(bweno['url'], 'http://localhost:8087');
//   },
// });

// test({
//   name: 'custom URL is set',
//   fn(): void {
//     assertEquals(bwenoBadUrl['url'], badUrl);
//   },
// });

// test({
//   name: 'throws if invalid URL',
//   async fn() {
//     try {
//       await bwenoBadUrl['bwApiRequest']('/status', { method: 'GET' });
//       fail();
//     } catch (e) {
//       assertEquals(e.message, 'Invalid URL');
//     }
//   },
// });

// test({
//   name: 'throws if connection refused',
//   async fn() {
//     try {
//       await bwenoInactiveUrl['bwApiRequest']('/status', { method: 'GET' });
//       fail();
//     } catch (e) {
//       assert(e.message.includes('Connection refused'));
//     }
//   },
// });

// // endpoints

// test({
//   name: 'generate',
//   async fn() {
//     const response = await bweno.generate();
//     // console.log(response);
//     assert(response.success);
//   },
// });

// test({
//   name: 'generate with options',
//   async fn() {
//     const response = await bweno.generate({
//       length: 32,
//       special: true,
//     });
//     // console.log(response);
//     assert(response.success);
//   },
// });

// test({
//   name: 'status',
//   async fn() {
//     const response = await bweno.status();
//     // console.log(response);
//     assert(response.success);
//   },
// });

// test({
//   name: 'list object',
//   async fn() {
//     const response = await bweno.listObject('folders');
//     // console.log(response);
//     assert(response.success);
//   },
// });

// test({
//   name: 'send list',
//   async fn() {
//     const response = await bweno.sendList('Adobe');
//     // console.log(response);
//     assert(response.success);
//   },
// });

// test({
//   name: 'sync',
//   async fn() {
//     // todo: test options
//     // const response = await bweno.sync({ force: true });
//     const response = await bweno.sync();
//     // console.log(response);
//     assert(response.success);
//   },
// });

// // POST /lock
// // POST /unlock
// // POST /confirm/:object/:id
// // POST /restore/:object/:id
// // POST /move/:id/:organizationId
// // POST /attachment
// // POST /send/:id/remove-password
// // POST /object/:object
// // PUT  /object/:object/:id

// // test({
// //   name: 'throws if item not found',
// //   async fn() {
// //     try {
// //       await bweno.getObject({
// //         object: 'item',
// //         id: '766d5fcd-e8e9-4698-bb08-ad44002f6282',
// //       });
// //       fail();
// //     } catch (e) {
// //       assert(e.message.includes('Not found'));
// //     }
// //   },
// // });

// // test({
// //   name: 'get item',
// //   async fn() {
// //     const a = await bweno.getObject({
// //       object: 'item',
// //       id: '765d5fcd-e8e9-4698-bb08-ad44002f6282',
// //     });
// //     console.log(a);
// //   },
// // });
