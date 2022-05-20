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

  /**
   * Login
   * @param body
   * @returns
   */
  async login(body: LoginIface): Promise<DataResponse<LoginClass>> {
    const loginRequest = new LoginRequest(body);
    return await this.client.processRequest(loginRequest);
  }

  /**
   * Note
   * @param body
   * @returns
   */
  async secureNote(body: ItemIface): Promise<DataResponse<ItemIface>> {
    const secureNoteRequest = new SecureNoteRequest(body);
    return await this.client.processRequest(secureNoteRequest);
  }

  /**
   * Card
   * @param body
   * @returns
   */
  async card(body: CardIface): Promise<DataResponse<CardClass>> {
    const cardRequest = new CardRequest(body);
    return await this.client.processRequest(cardRequest);
  }

  /**
   * Identity
   * @param body
   * @returns
   */
  async identity(body: IdentityIface): Promise<DataResponse<IdentityClass>> {
    const identityRequest = new IdentityRequest(body);
    return await this.client.processRequest(identityRequest);
  }

  /**
   * Folder
   * @param body
   * @returns
   */
  async folder(body: Folder): Promise<DataResponse<Folder>> {
    const folderRequest = new FolderRequest(body);
    return await this.client.processRequest(folderRequest);
  }
}
