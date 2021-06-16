import { defaultsDeep } from 'lodash';
import { Serverless } from 'serverless/aws';
import { authenticationService } from '@lib/backend/authentication/serverless/authentication.serverless';
import { getService } from '@serverless/aws/core/getService/getService';
import { serverlessConfig } from '@serverless/aws/serverless';

const config: Serverless = defaultsDeep(
  {
    ...getService(authenticationService),

    custom: {
      'serverless-offline': {
        httpPort: authenticationService.port,
      },
    },
  },

  serverlessConfig,
);

module.exports = config;
