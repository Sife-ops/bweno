import { ObjectIdMetadataIface } from '../metadata.ts';

export interface FolderItemIface {
  name: string;
}

export type FolderItemResponseType = FolderItemIface & ObjectIdMetadataIface;
