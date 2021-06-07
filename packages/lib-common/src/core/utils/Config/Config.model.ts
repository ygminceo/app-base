export interface ConfigClass {
  get<T>(key: string, defaultValue?: T | null): T | null;
}
