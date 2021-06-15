export type NeverType<T, E> = { [K in keyof E]: never } & T;

export interface FormModel {
  [field: string]: any;
}
