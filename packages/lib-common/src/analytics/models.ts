export interface AnalyticsEventModel<P = object> {
  object: string;
  action: string;
  params?: P;
}

export interface AnalyticsEventPageOpenModel<P = object> {
  name: string;
  pathname: string;
  params?: P;
}
