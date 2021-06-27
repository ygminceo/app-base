import { HttpMethodModel } from '@lib/common/core/utils/HttpClient/HttpClient.model';

export interface ServerlessServiceModel {
  name: string;
  functions: ServerlessFunctionModel[];
}

export interface ServerlessFunctionModel {
  name: string;
  method?: HttpMethodModel;
  protected?: boolean;
}

export interface HandlerModel<P, R> {
  main(data: P, id?: string): Promise<R>;
}
