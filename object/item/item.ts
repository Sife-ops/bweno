////////////////////////////////////////////////////////////////////////////////
// response types

// export interface ItemResponseIface {
//   fields?: Array<ItemFieldIface & { linkedId?: string }>;
// }

// // common
// interface ItemFieldResponseIface extends ItemFieldIface {
//   linkedId?: string;
// }
// interface ItemResponseIface extends ItemIface {
//   fields?: ItemFieldResponseIface[];
// }
// export type ItemResponseType = ItemResponseIface &
//   ItemMetadataIface &
//   ObjectIdMetadataIface;

// // login
// interface ItemLoginResponseIface extends ItemLoginIface {
//   passwordRevisionDate?: string;
// }
// interface LoginItemResponseIface extends ItemResponseIface {
//   login: ItemLoginResponseIface;
// }
// export type LoginItemResponseType = LoginItemResponseIface &
//   ItemMetadataIface &
//   ObjectIdMetadataIface;

// // list
// interface ItemListResponseIface extends ItemResponseIface {
//   login?: ItemLoginResponseIface;
//   // todo: notes
//   card?: ItemCardIface; // todo: metadata
//   identity?: ItemIdentityIface; // todo: metadata
// }
// export type ItemListResponseType = ItemListResponseIface &
//   ItemMetadataIface &
//   ObjectIdMetadataIface;

