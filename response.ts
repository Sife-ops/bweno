export interface BasicResponseIface {
  success: boolean;
  message?: string;
}

export interface ObjectResponseIface<T> extends BasicResponseIface {
  data: T;
}

export interface ListResponseIface<T> extends BasicResponseIface {
  data: {
    object: 'list';
    data: Array<T>;
  };
}
