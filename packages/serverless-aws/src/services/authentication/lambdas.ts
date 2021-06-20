import { get } from 'lodash';
import { authenticationService } from '@lib/backend/authentication/serverless/authentication.serverless';
import * as lambdas from '@lib/backend/authentication/serverless/lambdas';
import { requestHook } from '@serverless/aws/core/requestHook/requestHook';

module.exports = authenticationService.functions.reduce(
  (result, v) => ({
    ...result,
    [v.name]: requestHook(get(lambdas, v.name)),
  }),
  {},
);
