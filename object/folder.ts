import { ObjectIdMetadataIface } from '../metadata.ts';

export interface FolderIface {
  name: string;
}

export type FolderResponseType = FolderIface & ObjectIdMetadataIface;
