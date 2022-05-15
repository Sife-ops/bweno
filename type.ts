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

export type generateOptions = {
  uppercase?: boolean;
  lowercase?: boolean;
  number?: boolean;
  special?: boolean;
  length?: number;
  type?: 'passphrase' | 'password';
  separator?: string;
  words?: number;
  capitalize?: boolean;
  includeNumber?: boolean;
};

export interface getOptions {
  object: bwObjectType;
  id: string;
}

export type syncOptions = {
  last?: boolean;
  force?: boolean;
};

export type unlockOptions = {
  passwordEnv: string;
  passwordFile: string;
};
