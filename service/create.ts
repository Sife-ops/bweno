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
    const loginRequest = new LoginRequest(body);
    return await this.client.processRequest(loginRequest);
  }

  async secureNote(body: Item): Promise<DataResponse<Item>> {
    const secureNoteRequest = new SecureNoteRequest(body);
    return await this.client.processRequest(secureNoteRequest);
  }

  async card(body: CardIface): Promise<DataResponse<Card>> {
    const cardRequest = new CardRequest(body);
    return await this.client.processRequest(cardRequest);
  }

  async identity(body: IdentityIface): Promise<DataResponse<Identity>> {
    const identityRequest = new IdentityRequest(body);
    return await this.client.processRequest(identityRequest);
  }
}
