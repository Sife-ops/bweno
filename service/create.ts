// todo: attachment
// todo: org-collection

import { Client } from '../client.ts';
import { DataResponse } from '../object/response.ts';
import { Folder } from '../object/folder.ts';

import {
  CardItemClass,
  CardItemIface,
  IdentityItemClass,
  IdentityItemIface,
  ItemIface,
  LoginItemClass,
  LoginItemIface,
  SecureNoteClass,
} from '../object/item.ts';

import {
  CardRequest,
  FolderRequest,
  IdentityRequest,
  LoginRequest,
  SecureNoteRequest,
} from '../request.ts';

export class Create {
  constructor(private client: Client) {}

  async login(body: LoginItemIface): Promise<DataResponse<LoginItemClass>> {
    const loginRequest = new LoginRequest(body);
    return await this.client.processRequest(loginRequest);
  }

  async secureNote(body: ItemIface): Promise<DataResponse<SecureNoteClass>> {
    const secureNoteRequest = new SecureNoteRequest(body);
    return await this.client.processRequest(secureNoteRequest);
  }

  async card(body: CardItemIface): Promise<DataResponse<CardItemClass>> {
    const cardRequest = new CardRequest(body);
    return await this.client.processRequest(cardRequest);
  }

  async identity(body: IdentityItemIface): Promise<DataResponse<IdentityItemClass>> {
    const identityRequest = new IdentityRequest(body);
    return await this.client.processRequest(identityRequest);
  }

  async folder(body: Folder): Promise<DataResponse<Folder>> {
    const folderRequest = new FolderRequest(body);
    return await this.client.processRequest(folderRequest);
  }
}
