import { ItemIface, ItemClass } from './item.ts';

export interface ItemIdentityIface {
  title?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  company?: string;
  email?: string;
  phone?: string;
  ssn?: string;
  username?: string;
  passportNumber?: string;
  licenseNumber?: string;
}

interface IdentityItemIface extends ItemIface {
  identity: ItemIdentityIface;
}

export class IdentityItemClass extends ItemClass implements IdentityItemIface {
  type = 4;

  identity: ItemIdentityIface;

  constructor(args: IdentityItemIface) {
    super(args);

    this.identity = args.identity;
  }
}
