type Field = {
  name: string;
  value: string;
  type: number;
};

type Item = {
  // organizationId: null,
  // collectionIds: null,
  folderId: string | null;
  type: number;
  name: string;
  notes: string;
  favorite: boolean;
  fields: Field[];
  // login: null,
  // secureNote: null,
  // card: null,
  // identity: null,
  // reprompt: 0
};

type Uri = {
  match: string;
  uri: string;
};

type ItemLogin = Item & {
  uris: Uri[];
  username: string;
  password: string;
  totp: string;
};

