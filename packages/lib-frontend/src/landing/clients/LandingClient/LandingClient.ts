import { config } from '@lib/common/core/utils/Config/Config';
import { LANDING, SUBSCRIPTION_CREATE } from '@lib/common/landing/constants';
import { SubscriptionCreateRequestModel } from '@lib/common/landing/models';
import { HttpClient } from '@lib/frontend/core/utils/HttpClient/HttpClient';

const API_HOST = config.get<string>('REACT_APP_API_HOST', '');
const API_PORT = config.get<number>('REACT_APP_API_PORT', null);

class LandingClient {
  private _client: HttpClient;

  constructor() {
    this._client = new HttpClient({
      baseURL: `${API_HOST}${API_PORT ? `:${API_PORT}` : ''}/api/${LANDING}`,
    });
  }

  subscriptionCreate = (data: SubscriptionCreateRequestModel) =>
    this._client.post<SubscriptionCreateRequestModel, void, any>(SUBSCRIPTION_CREATE, data);
}

export const landingClient = new LandingClient();
