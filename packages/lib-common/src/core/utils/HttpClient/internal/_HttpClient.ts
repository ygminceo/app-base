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
import { alertAdd } from '@lib/frontend/app/actions/alert/alert.action';
import { store } from '@lib/frontend/root/stores/store';

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

  request<P, T = any, E = HttpError<any>>(
    method: HttpMethodModel,
    url: string,
    config?: HttpRequestConfig,
    data?: P,
  ) {
    return this._client[method](url, data, config || {})
      .then((response: AxiosResponse<T>) => response.data)
      .catch((error: AxiosError<E>) => {
        if (error.message === 'Network Error') {
          store.dispatch(alertAdd({ message: 'network' }));
        }
        throw new HttpError<E>(error.response?.status, error.response?.data);
      });
  }

  get<P, T = any, E = HttpError<any>>(url: string, params?: P, config?: HttpRequestConfig) {
    const urlWithParams = params ? `${url}?${toQueryString((params as unknown) as object)}` : url;
    return this.request<P, T, E>('get', urlWithParams, config);
  }

  delete<P, T = any, E = HttpError<any>>(url: string, params?: P, config?: HttpRequestConfig) {
    const urlWithParams = params ? `${url}?${toQueryString((params as unknown) as object)}` : url;
    return this.request<P, T, E>('delete', urlWithParams, config);
  }

  post<P, T = any, E = HttpError<any>>(url: string, data?: P, config?: HttpRequestConfig) {
    return this.request<P, T, E>('post', url, config, data);
  }

  put<P, T = any, E = HttpError<any>>(url: string, data?: P, config?: HttpRequestConfig) {
    return this.request<P, T, E>('put', url, config, data);
  }
}
