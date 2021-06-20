import { get } from 'lodash';
import { billingService } from '@lib/backend/billing/serverless/billing.serverless';
import * as lambdas from '@lib/backend/billing/serverless/lambdas';
import { requestHook } from '@serverless/aws/core/requestHook/requestHook';

module.exports = billingService.functions.reduce(
  (result, v) => ({
    ...result,
    [v.name]: requestHook(get(lambdas, v.name)),
  }),
  {},
);
