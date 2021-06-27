export interface DatabaseModel {
  getCollection(name: string): CollectionModel;
}

export interface CollectionModel {
  get<P, T>(data: P, select?: (keyof T)[]): Promise<T>;
  save<P, T = P>(data: P): Promise<T>;
  delete<P, T = P>(data: P): Promise<void>;
}
