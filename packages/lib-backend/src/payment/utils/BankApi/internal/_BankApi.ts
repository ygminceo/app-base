import { _BankApiClass } from '@lib/backend/payment/utils/BankApi/internal/_BankApi.model';
import { config } from '@lib/common/core/utils/Config/Config';
import {
  BankTokenAccessCreateRequest,
  BankTokenLinkCreateRequest,
} from '@lib/common/payment/models';
import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

const REACT_APP_APP_NAME = config.get<string>('REACT_APP_APP_NAME');
const SERVER_PLAID_ENV = config.get<string>('SERVER_PLAID_ENV');
const SERVER_PLAID_CLIENT_ID = config.get<string>('SERVER_PLAID_CLIENT_ID');
const SERVER_PLAID_SECRET = config.get<string>('SERVER_PLAID_SECRET');
const SERVER_PLAID_PRODUCTS = config.get<any>('SERVER_PLAID_PRODUCTS').split(',');
const SERVER_PLAID_COUNTRY_CODES = config.get<any>('SERVER_PLAID_COUNTRY_CODES').split(',');
const SERVER_PLAID_REDIRECT_URI = config.get<any>('SERVER_PLAID_REDIRECT_URI');

export class _BankApi implements _BankApiClass {
  private _client: PlaidApi;

  constructor() {
    this._client = new PlaidApi(
      new Configuration({
        basePath: PlaidEnvironments[SERVER_PLAID_ENV],
        baseOptions: {
          headers: {
            'PLAID-CLIENT-ID': SERVER_PLAID_CLIENT_ID,
            'PLAID-SECRET': SERVER_PLAID_SECRET,
            'Plaid-Version': '2020-09-14',
          },
        },
      }),
    );
  }

  async bankTokenLinkCreate({ account_id }: BankTokenLinkCreateRequest) {
    //TODO: more env
    const response = await this._client.linkTokenCreate({
      user: {
        client_user_id: account_id,
      },
      client_name: REACT_APP_APP_NAME,
      products: SERVER_PLAID_PRODUCTS,
      country_codes: SERVER_PLAID_COUNTRY_CODES,
      // redirect_uri: SERVER_PLAID_REDIRECT_URI,
      // android_package_name: PLAID_ANDROID_PACKAGE_NAME,
      language: 'en',
    });
    return {
      token: response.data.link_token,
      exp: response.data.expiration,
    };
  }

  async bankTokenAccessCreate({ token, account_id }: BankTokenAccessCreateRequest) {
    return await this._client
      .itemPublicTokenExchange({
        public_token: token,
      })
      .then(async (response) => {
        const plaid_bank_access_token = response.data.access_token;
        const stripe_bank_access_token = (
          await this._client.processorStripeBankAccountTokenCreate({
            account_id,
            access_token: plaid_bank_access_token,
          })
        ).data.stripe_bank_account_token;
        return {
          plaid_bank_access_token,
          stripe_bank_access_token,
        };
      });
  }
}
