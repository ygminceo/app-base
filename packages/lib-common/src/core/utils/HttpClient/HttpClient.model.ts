import { HttpError } from '@lib/common/core/utils/HttpClient/HttpClient.error';

export type HttpMethodModel = 'get' | 'post' | 'delete' | 'put';

export type HttpResponseModel = 'arraybuffer' | 'blob' | 'json';

export interface HttpRequestConfig {
  headers?: object;
  timeout?: number;
  withCredentials?: boolean;
  responseType?: HttpResponseModel;
}

export type GetRequest = <P extends object, T = any, E = any>(
  url: string,
  params?: P,
  config?: HttpRequestConfig,
) => Promise<T>;
export type DeleteRequest = <P extends object, T = any, E = any>(
  url: string,
  params?: P,
  config?: HttpRequestConfig,
) => Promise<T>;
export type PostRequest = <P extends object, T = any, E = any>(
  url: string,
  data?: P,
  config?: HttpRequestConfig,
) => Promise<T>;
export type PutRequest = <P extends object, T = any, E = any>(
  url: string,
  data?: P,
  config?: HttpRequestConfig,
) => Promise<T>;

export interface HttpClientModel {
  get: GetRequest;
  delete: DeleteRequest;
  post: PostRequest;
  put: PutRequest;
}

export interface HttpClientProps {
  baseURL: string;
  config?: HttpRequestConfig;
  onRequest?: (config: HttpRequestConfig) => HttpRequestConfig;
  onError?: (error: HttpError<any>) => any;
  onResponse?: <T>(data: T) => any;
}
