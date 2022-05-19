interface BaseMetadata {
  object: string;
  id: string;
}

interface ItemMetadata extends BaseMetadata {
  revisionDate?: string;
  deletedDate?: string;
}

export interface BaseResponse {
  success: boolean;
  message?: string;
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
