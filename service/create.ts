import { Client } from '../client.ts';
import { FolderIface, FolderClass } from '../object/folder.ts';

import {
  CardItemIface,
  IdentityItemIface,
  ItemIface,
  LoginItemIface,
} from '../object/item.ts';

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

  async login(login: LoginItemIface) {
    const loginRequest = new CreateLoginRequestClass(login);
    return await this.processRequest(loginRequest);
  }

  async secureNote(note: ItemIface) {
    const secureNoteRequest = new CreateSecureNoteRequestClass(note);
    return await this.processRequest(secureNoteRequest);
  }

  async card(card: CardItemIface) {
    const cardRequest = new CreateCardRequestClass(card);
    return await this.processRequest(cardRequest);
  }

  async identity(identity: IdentityItemIface) {
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
