export interface BaseResponse {
  success: boolean;
  message?: string;
}

interface BaseMetadata {
  object: string;
  id: string;
}

interface ItemMetadata extends BaseMetadata {
  revisionDate?: string;
  deletedDate?: string;
}

export interface DataResponse<T> extends BaseResponse {
  data: T & {
    object: string;
    id: string;
    revisionDate?: string;
    deletedDate?: string;
  };
}

export interface ItemResponse<T> extends BaseResponse {
  data: T & ItemMetadata;
}

export interface GenerateResponse extends BaseResponse {
  data: {
    object: string;
    data: string;
  };
}
