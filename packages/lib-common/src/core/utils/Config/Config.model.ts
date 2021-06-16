export interface ConfigModel {
  get<T>(key: string, defaultValue?: T | null): T | null;
}
