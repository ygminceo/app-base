import { APP, CONTACT_ADD } from '@lib/common/app/constants';
import { ContactAddRequestModel } from '@lib/common/app/models';
import { config } from '@lib/common/core/utils/Config/Config';
import { HttpClient } from '@lib/frontend/core/utils/HttpClient/HttpClient';

const API_HOST = config.get<string>('REACT_APP_API_HOST', '');
const API_PORT = config.get<number>('REACT_APP_API_PORT', null);

class AppClient {
  private _client: HttpClient;

  constructor() {
    this._client = new HttpClient({
      baseURL: `${API_HOST}${API_PORT ? `:${API_PORT}` : ''}/api/${APP}`,
    });
  }

  contactAdd = (data: ContactAddRequestModel) =>
    this._client.post<ContactAddRequestModel, void, any>(CONTACT_ADD, data);
}

export const appClient = new AppClient();
