import { BILLING } from '@lib/common/billing/constants';
import { BANK_ACCOUNT_ADD, BANK_LINK_TOKEN_CREATE } from '@lib/common/billing/constants';
import {
  BankAccountAddRequestModel,
  BankLinkTokenCreateRequestModel,
  BankLinkTokenCreateResponseModel,
} from '@lib/common/billing/models';
import { config } from '@lib/common/core/utils/Config/Config';
import { HttpClient } from '@lib/frontend/core/services/HttpClient/HttpClient';

const API_HOST = config.get<string>('REACT_APP_API_HOST', '');
const API_PORT = config.get<number>('REACT_APP_API_PORT', null);

class BillingClient {
  private _client: HttpClient;

  constructor() {
    this._client = new HttpClient({
      baseURL: `${API_HOST}${API_PORT ? `:${API_PORT}` : ''}/api/${BILLING}`,
    });
  }

  bankLinkTokenCreate = (data: BankLinkTokenCreateRequestModel) =>
    this._client.post<BankLinkTokenCreateRequestModel, BankLinkTokenCreateResponseModel, any>(
      BANK_LINK_TOKEN_CREATE,
      data,
    );

  bankAccountAdd = (data: BankAccountAddRequestModel) =>
    this._client.post<BankAccountAddRequestModel, void, any>(BANK_ACCOUNT_ADD, data);
}

export const billingClient = new BillingClient();
