import { ObjectIdIface } from './object.ts';

export interface FolderIface {
  name: string;
}

export class FolderClass implements ObjectIdIface {
  object = '';
  id = '';
  name: string;
  constructor(args: FolderIface) {
    this.name = args.name;
  }
}
