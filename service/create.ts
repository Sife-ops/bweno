import { Client } from '../client.ts';
import { DataResponse } from './response.ts';

import {
  Card,
  CardIface,
  Identity,
  IdentityIface,
  Item,
  Login,
  LoginIface,
} from '../item.ts';

import {
  LoginRequest,
  SecureNoteRequest,
  CardRequest,
  IdentityRequest,
} from '../request.ts';

export class Create {
  constructor(private client: Client) {}

  async login(body: LoginIface): Promise<DataResponse<Login>> {
    const login = new LoginRequest(body);
    return await this.client.processRequest(login);
  }

  async secureNote(body: Item): Promise<DataResponse<Item>> {
    const secureNote = new SecureNoteRequest(body);
    return await this.client.processRequest(secureNote);
  }

  async card(body: CardIface): Promise<DataResponse<Card>> {
    const card = new CardRequest(body);
    return await this.client.processRequest(card);
  }

  async identity(body: IdentityIface): Promise<DataResponse<Identity>> {
    const identity = new IdentityRequest(body);
    return await this.client.processRequest(identity);
  }
}
