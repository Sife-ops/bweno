import { ObjectIdClass } from './object.ts';

export interface FolderIface {
  name: string;
}

export class FolderClass extends ObjectIdClass implements FolderIface {
  name: string;

  constructor(args: FolderIface) {
    super();

    this.name = args.name;
  }
}
