import { Client } from '../client.ts';

import { CardItemClass, CardItemIface } from '../object/item/item-card.ts';
import { FolderClass, FolderIface } from '../object/folder.ts';
import { ItemIface } from '../object/item/item.ts';
import { LoginItemClass, LoginItemIface } from '../object/item/item-login.ts';
import { NoteItemClass } from '../object/item/item-note.ts';

import {
  IdentityItemClass,
  IdentityItemIface,
} from '../object/item/item-identity.ts';

import {
  BasicRequestIface,
  CreateCardRequestClass,
  CreateFolderRequestClass,
  CreateIdentityRequestClass,
  CreateLoginRequestClass,
  CreateSecureNoteRequestClass,
} from '../request.ts';

export class CreateService {
  constructor(private client: Client) {}

  private async processRequest(o: BasicRequestIface) {
    const res = await this.client.processRequest(o);
    return res.data;
  }

  async login(login: LoginItemIface): Promise<LoginItemClass> {
    const loginRequest = new CreateLoginRequestClass(login);
    return await this.processRequest(loginRequest);
  }

  async secureNote(note: ItemIface): Promise<NoteItemClass> {
    const secureNoteRequest = new CreateSecureNoteRequestClass(note);
    return await this.processRequest(secureNoteRequest);
  }

  async card(card: CardItemIface): Promise<CardItemClass> {
    const cardRequest = new CreateCardRequestClass(card);
    return await this.processRequest(cardRequest);
  }

  async identity(identity: IdentityItemIface): Promise<IdentityItemClass> {
    const identityRequest = new CreateIdentityRequestClass(identity);
    return await this.processRequest(identityRequest);
  }

  async folder(folder: FolderIface): Promise<FolderClass> {
    const folderRequest = new CreateFolderRequestClass(folder);
    return await this.processRequest(folderRequest);
  }

  // todo: attachment
  // todo: org-collection
}
