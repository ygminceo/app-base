import { BANK_ACCOUNT_ADD, BANK_LINK_TOKEN_CREATE, BILLING } from '@lib/common/billing/constants';
import { config } from '@lib/common/core/utils/Config/Config';
import { ServerlessServiceModel } from '@lib/backend/serverless/serverless.model';

const API_PORT = config.get<number>('REACT_APP_API_BILLING_PORT', null);

export const billingService: ServerlessServiceModel = {
  name: BILLING,
  port: API_PORT,
  functions: [
    {
      name: BANK_LINK_TOKEN_CREATE,
      method: 'post',
    },
    {
      name: BANK_ACCOUNT_ADD,
      method: 'post',
    },
  ],
};
