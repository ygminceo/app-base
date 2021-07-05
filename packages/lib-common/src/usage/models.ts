export interface UsageEventModel<T = void> {
  object: string;
  action: string;
  params: T;
}

export interface UsageEventPageOpenModel {
  name: string;
  pathname: string;
  params?: object;
}
