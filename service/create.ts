// todo: attachment
// todo: org-collection

import { Client } from '../client.ts';
import { DataResponse } from '../object/response.ts';
import { FolderItemIface } from '../object/folder.ts';

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
  CardItemRequestClass,
  FolderItemRequestClass,
  IdentityItemRequestClass,
  LoginItemRequestClass,
  SecureNoteItemRequestClass,
} from '../request.ts';

export class Create {
  constructor(private client: Client) {}

  async login(body: LoginItemIface): Promise<DataResponse<LoginItemClass>> {
    const loginRequest = new LoginItemRequestClass(body);
    return await this.client.processRequest(loginRequest);
  }

  async secureNote(body: ItemIface): Promise<DataResponse<SecureNoteClass>> {
    const secureNoteRequest = new SecureNoteItemRequestClass(body);
    return await this.client.processRequest(secureNoteRequest);
  }

  async card(body: CardItemIface): Promise<DataResponse<CardItemClass>> {
    const cardRequest = new CardItemRequestClass(body);
    return await this.client.processRequest(cardRequest);
  }

  async identity(
    body: IdentityItemIface
  ): Promise<DataResponse<IdentityItemClass>> {
    const identityRequest = new IdentityItemRequestClass(body);
    return await this.client.processRequest(identityRequest);
  }

  async folder(body: FolderItemIface): Promise<DataResponse<FolderItemIface>> {
    const folderRequest = new FolderItemRequestClass(body);
    return await this.client.processRequest(folderRequest);
  }
}
