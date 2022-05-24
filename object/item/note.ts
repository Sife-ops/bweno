import { ItemIface, ItemClass } from './item.ts';

export class NoteItemClass extends ItemClass {
  type = 2;
  secureNote = { type: 0 }; // todo: usage?

  notes?: string;

  constructor(args: ItemIface) {
    super(args);

    this.notes = args.notes;
  }
}
