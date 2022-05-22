interface BasicResponseIface {
  success: boolean;
  message?: string;
}

interface DataResponseIface<T> extends BasicResponseIface {
  data?: T;
}

interface DataListResponseIface<T> extends BasicResponseIface {
  data?: {
    object: 'list';
    data: Array<T>;
  };
}
