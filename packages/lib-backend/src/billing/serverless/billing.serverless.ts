import { BANK_ACCOUNT_ADD, BANK_LINK_TOKEN_CREATE, BILLING } from '@lib/common/billing/constants';
import { ServerlessServiceModel } from '@lib/backend/serverless/serverless.model';

export const billingService: ServerlessServiceModel = {
  name: BILLING,
  port: 3001,
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
