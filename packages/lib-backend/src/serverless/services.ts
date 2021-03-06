import {
  AUTHENTICATION,
  AUTHORIZE,
  OTP_CREATE,
  SIGNIN,
} from '@lib/common/authentication/constants';
import {
  BANK_ADD,
  BANK_LINK_TOKEN_GET,
  BILLING,
  CARD_ADD,
  CARD_TOKEN_GET,
} from '@lib/common/billing/constants';
import { LANDING, SUBSCRIPTION_CREATE } from '@lib/common/landing/constants';
import { ServerlessServiceModel } from '@lib/backend/serverless/serverless.model';

export const services: ServerlessServiceModel[] = [
  {
    name: LANDING,
    functions: [
      {
        name: SUBSCRIPTION_CREATE,
        method: 'post',
      },
    ],
  },
  {
    name: AUTHENTICATION,
    functions: [
      {
        name: AUTHORIZE,
      },
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
        name: BANK_LINK_TOKEN_GET,
        method: 'post',
        protected: true,
      },
      {
        name: BANK_ADD,
        method: 'post',
        protected: true,
      },
      {
        name: CARD_TOKEN_GET,
        method: 'post',
        protected: true,
      },
      {
        name: CARD_ADD,
        method: 'post',
        protected: true,
      },
    ],
  },
];
