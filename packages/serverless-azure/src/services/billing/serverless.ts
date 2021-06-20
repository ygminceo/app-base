import { billingService } from '@lib/backend/billing/serverless/billing.serverless';
import { getService } from '@serverless/azure/core/getService/getService';
import { serverlessConfig } from '@serverless/azure/serverless';
import { defaultsDeep } from 'lodash';


const config = defaultsDeep(
  getService(billingService),

  serverlessConfig,
);

module.exports = config;
