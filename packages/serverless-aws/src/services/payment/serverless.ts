import { paymentService } from '@lib/backend/payment/serverless/payment.serverless';
import { getService } from '@serverless/aws/core/getService/getService';
import { serverlessConfig } from '@serverless/aws/serverless';
import { defaultsDeep } from 'lodash';
import { Serverless } from 'serverless/aws';

const config: Serverless = defaultsDeep(
  {
    ...getService(paymentService),

    custom: {
      'serverless-offline': {
        httpPort: paymentService.port,
      },
    },
  },

  serverlessConfig,
);

module.exports = config;
