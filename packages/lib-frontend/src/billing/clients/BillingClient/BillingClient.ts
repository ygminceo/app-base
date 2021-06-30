import {
  BANK_ADD,
  BANK_LINK_TOKEN_CREATE,
  BILLING,
  CARD_ADD,
  CARD_TOKEN_GET,
} from '@lib/common/billing/constants';
import {
  BankAddRequestModel,
  BankLinkTokenCreateResponseModel,
  CardAddRequestModel,
  CardAddResponseModel,
  CardTokenGetResponseModel,
} from '@lib/common/billing/models';
import { config } from '@lib/common/core/utils/Config/Config';
import { HttpClient } from '@lib/frontend/core/utils/HttpClient/HttpClient';

const API_HOST = config.get<string>('REACT_APP_API_HOST', '');
const API_PORT = config.get<number>('REACT_APP_API_PORT', null);

class BillingClient {
  private _client: HttpClient;

  constructor() {
    this._client = new HttpClient({
      baseURL: `${API_HOST}${API_PORT ? `:${API_PORT}` : ''}/api/${BILLING}`,
    });
  }

  bankLinkTokenCreate = () =>
    this._client.post<void, BankLinkTokenCreateResponseModel, any>(BANK_LINK_TOKEN_CREATE);

  bankAdd = (data: BankAddRequestModel) =>
    this._client.post<BankAddRequestModel, void, any>(BANK_ADD, data);

  cardTokenGet = () => this._client.post<void, CardTokenGetResponseModel, any>(CARD_TOKEN_GET);

  cardAdd = (data: CardAddRequestModel) =>
    this._client.post<CardAddRequestModel, CardAddResponseModel, any>(CARD_ADD, data);
}

export const billingClient = new BillingClient();
