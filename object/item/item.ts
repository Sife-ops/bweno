import { ItemCardIface } from './card.ts';
import { ItemIdentityIface } from './identity.ts';
import { ItemLoginClass } from './login.ts';
import { ObjectIdClass } from '../object.ts';

interface ItemFieldIface {
  name?: string;
  value?: string;
  type?: number; // todo: usage? up to 255?
}

class _ItemFieldClass implements ItemFieldIface {
  linkedId?: string;

  name?: string;
  value?: string;
  type?: number;

  constructor(args: ItemFieldIface) {
    this.name = args.name;
    this.value = args.value;
    this.type = args.type;
  }
}

export interface ItemIface {
  organizationId?: string;
  collectionIds?: string[];
  folderId?: string;
  name: string;
  notes?: string;
  favorite?: boolean;
  fields?: ItemFieldIface[];
  reprompt?: number;
}

export abstract class ItemClass extends ObjectIdClass implements ItemIface {
  type = 0; // todo: optional?
  revisionDate = '';
  deletedDate?: string;

  organizationId?: string;
  collectionIds?: string[];
  folderId?: string;
  name: string;
  favorite?: boolean;
  fields?: _ItemFieldClass[];
  reprompt?: number;

  login?: ItemLoginClass;
  notes?: string;
  card?: ItemCardIface;
  identity?: ItemIdentityIface;

  constructor(args: ItemIface) {
    super();

    this.organizationId = args.organizationId;
    this.collectionIds = args.collectionIds;
    this.folderId = args.folderId;
    this.name = args.name;
    this.notes = args.notes;
    this.favorite = args.favorite;
    this.fields = args.fields;
    this.reprompt = args.reprompt;
  }
}
