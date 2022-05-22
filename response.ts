interface BasicResponse {
  success: boolean;
  message?: string;
}

interface DataResponse<T> extends BasicResponse {
  data: T;
}
