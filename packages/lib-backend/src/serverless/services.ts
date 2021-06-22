import { AUTHENTICATION, OTP_CREATE, SIGNIN } from '@lib/common/authentication/constants';
import { BANK_ACCOUNT_ADD, BANK_LINK_TOKEN_CREATE, BILLING } from '@lib/common/billing/constants';
import { ServerlessServiceModel } from '@lib/backend/serverless/serverless.model';

export const services: ServerlessServiceModel[] = [
  {
    name: AUTHENTICATION,
    functions: [
      {
        name: OTP_CREATE,
        method: 'post',
      },
      {
        name: SIGNIN,
        method: 'post',
      },
    ],
  },
  {
    name: BILLING,
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
  },
];
