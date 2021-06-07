import { HttpClient as BaseHttpClient } from '@lib/common/core/utils/HttpClient/HttpClient';
import { HttpClientProps as BaseHttpClientProps } from '@lib/common/core/utils/HttpClient/HttpClient.model';

export class HttpClient extends BaseHttpClient {
  constructor(props: BaseHttpClientProps) {
    super({
      ...props,
      config: { withCredentials: true },
    });
  }
}
