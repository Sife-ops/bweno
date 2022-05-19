import { Client } from '../client.ts';
import { DataResponse } from '../entity/response.ts';
import { Folder } from '../entity/folder.ts';

import {
  Card,
  CardIface,
  Identity,
  IdentityIface,
  Item,
  Login,
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
  async login(body: LoginIface): Promise<DataResponse<Login>> {
    const loginRequest = new LoginRequest(body);
    return await this.client.processRequest(loginRequest);
  }

  /**
   * Note
   * @param body
   * @returns
   */
  async secureNote(body: Item): Promise<DataResponse<Item>> {
    const secureNoteRequest = new SecureNoteRequest(body);
    return await this.client.processRequest(secureNoteRequest);
  }

  /**
   * Card
   * @param body
   * @returns
   */
  async card(body: CardIface): Promise<DataResponse<Card>> {
    const cardRequest = new CardRequest(body);
    return await this.client.processRequest(cardRequest);
  }

  /**
   * Identity
   * @param body
   * @returns
   */
  async identity(body: IdentityIface): Promise<DataResponse<Identity>> {
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
