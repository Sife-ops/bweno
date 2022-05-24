import { Client } from '../client.ts';

import { CardItemClass, CardItemIface } from '../object/item/card.ts';
import { FolderClass, FolderIface } from '../object/folder.ts';
import { ItemIface } from '../object/item/item.ts';
import { LoginItemClass, LoginItemIface } from '../object/item/login.ts';
import { NoteItemClass } from '../object/item/note.ts';

import {
  IdentityItemClass,
  IdentityItemIface,
} from '../object/item/identity.ts';

import { RequestIface } from '../request/request.ts';
import {
  CreateFolderRequestClass,
  CreateItemRequestClass,
} from '../request/create.ts';

export class CreateService {
  constructor(private client: Client) {}

  private async processObject(req: RequestIface) {
    const res = await this.client.processRequest(req);
    return res.data;
  }

  /*
   * Item
   */
  private async processItem(o: unknown) {
    const req = new CreateItemRequestClass(o);
    return await this.processObject(req);
  }

  /**
   * Login item.
   * @param login
   * @returns
   */
  async login(login: LoginItemIface): Promise<LoginItemClass> {
    return await this.processItem(new LoginItemClass(login));
  }

  /**
   * Secure note item.
   * @param note
   * @returns
   */
  async secureNote(note: ItemIface): Promise<NoteItemClass> {
    return await this.processItem(new NoteItemClass(note));
  }

  /**
   * Card item.
   * @param card
   * @returns
   */
  async card(card: CardItemIface): Promise<CardItemClass> {
    return await this.processItem(new CardItemClass(card));
  }

  /**
   * Identity item.
   * @param identity
   * @returns
   */
  async identity(identity: IdentityItemIface): Promise<IdentityItemClass> {
    return await this.processItem(new IdentityItemClass(identity));
  }

  /*
   * Folder
   */

  /**
   * Folder object.
   * @param folder
   * @returns
   */
  async folder(folder: FolderIface): Promise<FolderClass> {
    const req = new CreateFolderRequestClass(folder);
    return await this.processObject(req);
  }

  // todo: attachment
  // todo: org-collection
}
