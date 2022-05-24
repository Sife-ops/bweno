import { RequestIface } from './request.ts';

export class CreateItemRequestClass implements RequestIface {
  method = 'post';
  path = '/object/item';
  body: unknown;

  constructor(body: unknown) {
    this.body = body;
  }
}

export class CreateFolderRequestClass implements RequestIface {
  method = 'post';
  path = '/object/folder';
  body: unknown;

  constructor(body: unknown) {
    this.body = body;
  }
}
