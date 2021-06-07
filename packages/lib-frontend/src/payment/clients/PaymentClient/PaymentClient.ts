import { config } from '@lib/common/core/utils/Config/Config';
import {
  BANK_ACCOUNT_ADD,
  BANK_TOKEN_LINK_CREATE,
  PAYMENT,
} from '@lib/common/payment/constants';
import {
  BankAccountAddRequest,
  BankTokenLinkCreateRequest,
  BankTokenLinkCreateResponse,
} from '@lib/common/payment/models';
import { HttpClient } from '@lib/frontend/core/services/HttpClient/HttpClient';

const API_HOST = config.get<string>('REACT_APP_API_HOST', '');
const API_PORT = config.get<number>('REACT_APP_API_PORT', null);

class PaymentClient {
  private _client: HttpClient;

  constructor() {
    this._client = new HttpClient({
      baseURL: `${API_HOST}${API_PORT ? `:${API_PORT}` : ''}/api/${PAYMENT}`,
    });
  }

  bankTokenLinkCreate = (data: BankTokenLinkCreateRequest) =>
    this._client.post<BankTokenLinkCreateRequest, BankTokenLinkCreateResponse, any>(
      BANK_TOKEN_LINK_CREATE,
      data,
    );

  bankAccountAdd = (data: BankAccountAddRequest) =>
    this._client.post<BankAccountAddRequest, void, any>(BANK_ACCOUNT_ADD, data);
}

export const paymentClient = new PaymentClient();
