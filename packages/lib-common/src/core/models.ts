export type NeverType<T, E> = { [K in keyof E]: never } & T;

export interface FormSchema {
  [field: string]: any;
}
