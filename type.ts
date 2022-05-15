export interface bwApiResonse {
  success: boolean;
  message?: string;
}

export type bwObjectType =
  | 'item'
  | 'username'
  | 'password'
  | 'uri'
  | 'totp'
  | 'notes'
  | 'exposed'
  | 'attachment'
  | 'folder'
  | 'collection'
  | 'org-collection'
  | 'organization'
  | 'template'
  | 'fingerprint';

export type bwObjectListType =
  | 'items'
  | 'folders'
  | 'collections'
  | 'org-collections'
  | 'org-members'
  | 'organizations';

export interface getOptions {
  object: bwObjectType;
  id: string;
}
// interface bwObject {
//   object: bwObjectType;
//   id: string;
// }

// type bwApiGetResponse = {
//   data: bwObject;
// } & bwApiResonse;

// type b = bwApiResonse & bwApiGetResponse;
