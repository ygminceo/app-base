import { config } from '@lib/common/core/utils/Config/Config';
import { STRIPE_INTEGRATION_GET } from '@lib/common/integration/stripe/constants';
import {
  StripeIntegrationGetRequestModel,
  StripeIntegrationGetResponseModel,
} from '@lib/common/integration/stripe/models';
import {
  BANK_ACCOUNT_ADD,
  BANK_TOKEN_LINK_CREATE,
  PAYMENT,
  PAYMENT_METHODS_GET,
} from '@lib/common/payment/constants';
import {
  BankAccountAddRequestModel,
  BankTokenLinkCreateRequestModel,
  BankTokenLinkCreateResponseModel,
  PaymentMethodsGetRequestModel,
  PaymentMethodsGetResponseModel,
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

  paymentMethodsGet = (data: PaymentMethodsGetRequestModel) =>
    this._client.post<PaymentMethodsGetRequestModel, PaymentMethodsGetResponseModel, any>(
      PAYMENT_METHODS_GET,
      data,
    );

  bankTokenLinkCreate = (data: BankTokenLinkCreateRequestModel) =>
    this._client.post<BankTokenLinkCreateRequestModel, BankTokenLinkCreateResponseModel, any>(
      BANK_TOKEN_LINK_CREATE,
      data,
    );

  bankAccountAdd = (data: BankAccountAddRequestModel) =>
    this._client.post<BankAccountAddRequestModel, void, any>(BANK_ACCOUNT_ADD, data);

  // Stripe
  stripeIntegrationGet = (data: StripeIntegrationGetRequestModel) =>
    this._client.post<StripeIntegrationGetRequestModel, StripeIntegrationGetResponseModel, any>(
      STRIPE_INTEGRATION_GET,
      data,
    );
}

export const paymentClient = new PaymentClient();
