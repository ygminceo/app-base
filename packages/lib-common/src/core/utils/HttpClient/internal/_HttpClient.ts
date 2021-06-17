import axios, { AxiosError, AxiosResponse } from 'axios';
import { defaultsDeep } from 'lodash';
import { HttpError } from '@lib/common/core/utils/HttpClient/HttpClient.error';
import {
  HttpMethodModel,
  HttpRequestConfig,
} from '@lib/common/core/utils/HttpClient/HttpClient.model';
import {
  _HttpClientModel,
  _HttpClientProps,
} from '@lib/common/core/utils/HttpClient/internal/_HttpClient.model';

const toQueryString = (params: object) =>
  Object.entries(params)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export class _HttpClient implements _HttpClientModel {
  private _client: _HttpClientModel;

  constructor({ baseURL, config, onError, onRequest, onResponse }: _HttpClientProps) {
    this._client = axios.create(defaultsDeep({ baseURL }, config));
    if (onRequest) {
      axios.interceptors.request.use((baseConfig) => onRequest(baseConfig as HttpRequestConfig));
    }
    axios.interceptors.response.use(
      (response) => {
        onResponse && onResponse(response.data);
        return response;
      },
      (error) => {
        onError && onError(new HttpError<any>(error.response?.status, error.response?.data));
        return Promise.reject(error);
      },
    );
  }

  private _request<P extends object, T = any, E = HttpError<any>>(
    method: HttpMethodModel,
    url: string,
    config?: HttpRequestConfig,
    data?: P,
  ) {
    return this._client[method](url, data, config || {})
      .then((response: AxiosResponse<T>) => response.data)
      .catch((error: AxiosError<E>) => {
        if (error.message === 'Network Error') {
          // TODO: network alert
          console.warn('network');
        }
        throw new HttpError<E>(error.response?.status, error.response?.data);
      });
  }

  get<P extends object, T = any, E = HttpError<any>>(
    url: string,
    params?: P,
    config?: HttpRequestConfig,
  ) {
    const urlWithParams = params ? `${url}?${toQueryString(params)}` : url;
    return this._request<P, T, E>('get', urlWithParams, config);
  }

  delete<P extends object, T = any, E = HttpError<any>>(
    url: string,
    params?: P,
    config?: HttpRequestConfig,
  ) {
    const urlWithParams = params ? `${url}?${toQueryString(params)}` : url;
    return this._request<P, T, E>('delete', urlWithParams, config);
  }

  post<P extends object, T = any, E = HttpError<any>>(
    url: string,
    data?: P,
    config?: HttpRequestConfig,
  ) {
    return this._request<P, T, E>('post', url, config, data);
  }

  put<P extends object, T = any, E = HttpError<any>>(
    url: string,
    data?: P,
    config?: HttpRequestConfig,
  ) {
    return this._request<P, T, E>('put', url, config, data);
  }
}
