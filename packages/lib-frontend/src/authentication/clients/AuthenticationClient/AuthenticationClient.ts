import { AUTHENTICATION, OTP_CREATE, SIGNIN, SIGNOUT } from '@lib/common/authentication/constants';
import {
  OtpCreateRequestModel,
  SignInRequestModel,
  SignInResponseModel,
} from '@lib/common/authentication/models';
import { config } from '@lib/common/core/utils/Config/Config';
import { HttpClient } from '@lib/frontend/core/services/HttpClient/HttpClient';

const API_HOST = config.get<string>('REACT_APP_API_HOST', '');
const API_PORT = config.get<number>('REACT_APP_API_PORT', null);

class AuthenticationClient {
  private _client: HttpClient;

  constructor() {
    this._client = new HttpClient({
      baseURL: `${API_HOST}${API_PORT ? `:${API_PORT}` : ''}/api/${AUTHENTICATION}`,
    });
  }

  otpCreate = (data: OtpCreateRequestModel) =>
    this._client.post<OtpCreateRequestModel, void, any>(OTP_CREATE, data);

  signIn = (data: SignInRequestModel) =>
    this._client.post<SignInRequestModel, SignInResponseModel, any>(SIGNIN, data);

  signOut = () => this._client.post<{}, void, any>(SIGNOUT);
}

export const authenticationClient = new AuthenticationClient();
