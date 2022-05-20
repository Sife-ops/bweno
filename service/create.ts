// todo: attachment
// todo: org-collection

import { Client } from '../client.ts';
import { DataResponse } from '../entity/response.ts';
import { Folder } from '../entity/folder.ts';

import {
  CardClass,
  CardIface,
  IdentityClass,
  IdentityIface,
  ItemIface,
  LoginClass,
  LoginIface,
  SecureNoteClass,
} from '../entity/item.ts';

import {
  CardRequest,
  FolderRequest,
  IdentityRequest,
  LoginRequest,
  SecureNoteRequest,
} from '../request.ts';

export class Create {
  constructor(private client: Client) {}

  async login(body: LoginIface): Promise<DataResponse<LoginClass>> {
    const loginRequest = new LoginRequest(body);
    return await this.client.processRequest(loginRequest);
  }

  async secureNote(body: ItemIface): Promise<DataResponse<SecureNoteClass>> {
    const secureNoteRequest = new SecureNoteRequest(body);
    return await this.client.processRequest(secureNoteRequest);
  }

  async card(body: CardIface): Promise<DataResponse<CardClass>> {
    const cardRequest = new CardRequest(body);
    return await this.client.processRequest(cardRequest);
  }

  async identity(body: IdentityIface): Promise<DataResponse<IdentityClass>> {
    const identityRequest = new IdentityRequest(body);
    return await this.client.processRequest(identityRequest);
  }

  async folder(body: Folder): Promise<DataResponse<Folder>> {
    const folderRequest = new FolderRequest(body);
    return await this.client.processRequest(folderRequest);
  }
}
