import { set } from 'lodash';
import { HttpClient as BaseHttpClient } from '@lib/common/core/utils/HttpClient/HttpClient';
import { HttpError } from '@lib/common/core/utils/HttpClient/HttpClient.error';
import {
  HttpMethodModel,
  HttpRequestConfig,
} from '@lib/common/core/utils/HttpClient/HttpClient.model';
import { sessionClient } from '@lib/frontend/authentication/utils/SessionClient/SessionClient';

export class HttpClient extends BaseHttpClient {
  async request<P, T = any, E = HttpError<any>>(
    method: HttpMethodModel,
    url: string,
    config?: HttpRequestConfig,
    data?: P,
  ) {
    // TODO: only if auth required
    const token = await sessionClient.getToken();
    const configWithHeaders = set(config || {}, ['headers', 'Authorization'], `Bearer ${token}`);
    return super.request<P, T, E>(method, url, configWithHeaders, data);
  }
}
