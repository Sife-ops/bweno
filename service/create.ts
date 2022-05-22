import { Client } from '../client.ts';
import { FolderIface, FolderResponseType } from '../object/folder.ts';

import {
  CardItemIface,
  IdentityItemIface,
  ItemIface,
  LoginItemIface,
  LoginItemResponseType,
} from '../object/item.ts';

import {
  CreateCardRequestClass,
  CreateFolderRequestClass,
  CreateIdentityRequestClass,
  CreateLoginRequestClass,
  CreateSecureNoteRequestClass,
} from '../request.ts';

import { ObjectResponseIface } from '../response.ts';

export class CreateService {
  constructor(private client: Client) {}

  async login(
    login: LoginItemIface
  ): Promise<ObjectResponseIface<LoginItemResponseType>> {
    const loginRequest = new CreateLoginRequestClass(login);
    return await this.client.processRequest(loginRequest);
  }

  async secureNote(note: ItemIface) {
    const secureNoteRequest = new CreateSecureNoteRequestClass(note);
    return await this.client.processRequest(secureNoteRequest);
  }

  async card(card: CardItemIface) {
    const cardRequest = new CreateCardRequestClass(card);
    return await this.client.processRequest(cardRequest);
  }

  async identity(identity: IdentityItemIface) {
    const identityRequest = new CreateIdentityRequestClass(identity);
    return await this.client.processRequest(identityRequest);
  }

  async folder(
    folder: FolderIface
  ): Promise<ObjectResponseIface<FolderResponseType>> {
    const folderRequest = new CreateFolderRequestClass(folder);
    return await this.client.processRequest(folderRequest);
  }

  // todo: attachment
  // todo: org-collection
}
