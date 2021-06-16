import { defaultsDeep } from 'lodash';
import { authenticationService } from '@lib/backend/authentication/serverless/authentication.serverless';
import { getService } from '@serverless/azure/core/getService/getService';
import { serverlessConfig } from '@serverless/azure/serverless';

const config = defaultsDeep(
  {
    ...getService(authenticationService),

    custom: {
      webpack: {
        includeModules: {
          nodeModulesRelativeDir: '../../../../../',
        },
      },
    },
  },

  serverlessConfig,
);

module.exports = config;
