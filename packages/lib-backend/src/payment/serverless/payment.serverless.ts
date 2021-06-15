import { ServerlessService } from '@lib/backend/serverless/serverless.model';
import {
  BANK_ACCOUNT_ADD,
  BANK_TOKEN_LINK_CREATE,
  PAYMENT,
  PAYMENT_METHODS_GET,
} from '@lib/common/payment/constants';

export const paymentService: ServerlessService = {
  name: PAYMENT,
  port: 3001,
  functions: [
    {
      name: PAYMENT_METHODS_GET,
      method: 'post',
    },
    {
      name: BANK_TOKEN_LINK_CREATE,
      method: 'post',
    },
    {
      name: BANK_ACCOUNT_ADD,
      method: 'post',
    },
  ],
};
