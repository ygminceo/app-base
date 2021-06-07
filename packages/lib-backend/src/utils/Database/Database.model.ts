export interface DatabaseClass {
  getCollection(name: string): CollectionClass;
}

export interface CollectionClass {
  get<P, T>(data: P, select?: (keyof T)[]): Promise<T>;
  save<P, T = P>(data: P): Promise<T>;
  delete<P, T = P>(data: P): Promise<void>;
}
