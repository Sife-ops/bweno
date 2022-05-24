import { ItemIface, ItemClass } from './item.ts';

export interface ItemCardIface {
  cardholderName?: string;
  brand?: string;
  number?: string;
  expMonth?: string;
  expYear?: string;
  code?: string;
}

export interface CardItemIface extends ItemIface {
  card: ItemCardIface;
}

export class CardItemClass extends ItemClass implements CardItemIface {
  type = 3;

  card: ItemCardIface;

  constructor(args: CardItemIface) {
    super(args);

    this.card = args.card;
  }
}
