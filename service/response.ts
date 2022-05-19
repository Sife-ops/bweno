export interface BaseResponse {
  success: boolean;
  message?: string;
  // data?: T;
}

export interface DataResponse<T> extends BaseResponse {
  data: T & {
    object: string;
    id: string;
    revisionDate: string;
    deletedDate?: string;
  };
}
