import { FolderIface } from '../../object/folder.ts';
import { LoginItemIface } from '../../object/item/login.ts';
import { ItemIface } from '../../object/item/item.ts';
import { CardItemIface } from '../../object/item/card.ts';
import { IdentityItemIface } from '../../object/item/identity.ts';

interface TestObject {
  folder: FolderIface;
  login: LoginItemIface;
  note: ItemIface;
  card: CardItemIface;
  identity: IdentityItemIface;
}

export const testObject: TestObject = {
  folder: {
    name: 'test-folder',
  },
  login: {
    name: 'test-login',
    login: {
      username: 'username',
      password: 'password',
    },
  },
  note: {
    name: 'test-note',
    notes: 'notes',
  },
  card: {
    name: 'test-card',
    card: {
      number: '123',
    },
  },
  identity: {
    name: 'test-identity',
    identity: {
      email: 'test@identity.com',
    },
  },
};
