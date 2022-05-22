import { Client } from '../client.ts';
import { FolderIface } from '../object/folder.ts';

import {
  CardItemIface,
  IdentityItemIface,
  ItemIface,
  LoginItemIface,
} from '../object/item.ts';

import {
  CardItemRequestClass,
  FolderItemRequestClass,
  IdentityItemRequestClass,
  LoginItemRequestClass,
  SecureNoteItemRequestClass,
} from '../request.ts';

export class CreateService {
  constructor(private client: Client) {}

  async login(login: LoginItemIface) {
    const loginRequest = new LoginItemRequestClass(login);
    return await this.client.processRequest(loginRequest);
  }

  async secureNote(note: ItemIface) {
    const secureNoteRequest = new SecureNoteItemRequestClass(note);
    return await this.client.processRequest(secureNoteRequest);
  }

  async card(card: CardItemIface) {
    const cardRequest = new CardItemRequestClass(card);
    return await this.client.processRequest(cardRequest);
  }

  async identity(identity: IdentityItemIface) {
    const identityRequest = new IdentityItemRequestClass(identity);
    return await this.client.processRequest(identityRequest);
  }

  async folder(folder: FolderIface) {
    const folderRequest = new FolderItemRequestClass(folder);
    return await this.client.processRequest(folderRequest);
  }

  // todo: attachment
  // todo: org-collection
}
