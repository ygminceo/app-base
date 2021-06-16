import { defaultsDeep } from 'lodash';
import { Serverless } from 'serverless/aws';
import { billingService } from '@lib/backend/billing/serverless/billing.serverless';
import { getService } from '@serverless/aws/core/getService/getService';
import { serverlessConfig } from '@serverless/aws/serverless';

const config: Serverless = defaultsDeep(
  {
    ...getService(billingService),

    custom: {
      'serverless-offline': {
        httpPort: billingService.port,
      },
    },
  },

  serverlessConfig,
);

module.exports = config;
