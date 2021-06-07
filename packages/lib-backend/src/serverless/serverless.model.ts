import { HttpMethod } from '@lib/common/core/utils/HttpClient/HttpClient.model';

export interface ServerlessService {
  name: string;
  port: number;
  functions: ServerlessFunction[];
}

export interface ServerlessFunction {
  name: string;
  method: HttpMethod;
}

export type requestHookFunction<F> = <P, R>(cb: (data: P) => Promise<R>) => F;
