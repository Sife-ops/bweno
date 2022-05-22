import { Client } from '../client.ts';
import { FolderItemIface } from '../object/folder.ts';

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

export class Create {
  constructor(private client: Client) {}

  async login(body: LoginItemIface) {
    const loginRequest = new LoginItemRequestClass(body);
    return await this.client.processRequest(loginRequest);
  }

  async secureNote(body: ItemIface) {
    const secureNoteRequest = new SecureNoteItemRequestClass(body);
    return await this.client.processRequest(secureNoteRequest);
  }

  async card(body: CardItemIface) {
    const cardRequest = new CardItemRequestClass(body);
    return await this.client.processRequest(cardRequest);
  }

  async identity(body: IdentityItemIface) {
    const identityRequest = new IdentityItemRequestClass(body);
    return await this.client.processRequest(identityRequest);
  }

  async folder(body: FolderItemIface) {
    const folderRequest = new FolderItemRequestClass(body);
    return await this.client.processRequest(folderRequest);
  }

  // todo: attachment
  // todo: org-collection
}
