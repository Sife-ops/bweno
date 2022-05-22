export interface ObjectMetadataIface {
  object: string;
}

export interface ObjectIdMetadataIface extends ObjectMetadataIface {
  id: string;
}

export interface ItemMetadataIface {
  revisionDate?: string;
  deletedDate?: string;
}
