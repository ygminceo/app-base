export interface AnalyticsEventModel<T = void> {
  object: string;
  action: string;
  params: T;
}

export interface AnalyticsEventPageOpenModel {
  name: string;
  pathname: string;
  params?: object;
}
