import { HttpMethodModel } from '@lib/common/core/utils/HttpClient/HttpClient.model';

export interface ServerlessServiceModel {
  name: string;
  port: number;
  functions: ServerlessFunctionModel[];
}

export interface ServerlessFunctionModel {
  name: string;
  method: HttpMethodModel;
}

export type RequestHookModel<F> = <P, R>(cb: (data: P) => Promise<R>) => F;
