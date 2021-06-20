import { authenticationService } from '@lib/backend/authentication/serverless/authentication.serverless';
import { getService } from '@serverless/azure/core/getService/getService';
import { serverlessConfig } from '@serverless/azure/serverless';
import { defaultsDeep } from 'lodash';

const config = defaultsDeep(
  getService(authenticationService),

  serverlessConfig,
);

module.exports = config;
