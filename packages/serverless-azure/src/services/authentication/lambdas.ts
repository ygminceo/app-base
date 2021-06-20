import { authenticationService } from '@lib/backend/authentication/serverless/authentication.serverless';
import * as lambdas from '@lib/backend/authentication/serverless/lambdas';
import { requestHook } from '@serverless/azure/core/requestHook/requestHook';
import { get } from 'lodash';

module.exports = authenticationService.functions.reduce(
  (result, v) => ({
    ...result,
    [v.name]: requestHook(get(lambdas, v.name)),
  }),
  {},
);
