export interface UsageEventModel<T = void> {
  object: string;
  action: string;
  params: T;
}
