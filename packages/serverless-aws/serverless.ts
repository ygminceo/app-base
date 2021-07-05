import { defaultsDeep, set } from 'lodash';
import { AUTHORIZE } from '@lib/common/authentication/constants';
import { config } from '@lib/common/core/utils/Config/Config';
import { baseConfig } from '@lib/backend/serverless/serverless.base';
import { services } from '@lib/backend/serverless/services';

const API_PORT = config.get<number>('REACT_APP_API_PORT', null);
const STATIC_URL = config.get<number>('REACT_APP_STATIC_URL', null);

const serverlessConfig = defaultsDeep(
  {
    service: 'aws',

    provider: {
      // TODO: ENV
      name: 'aws',
      runtime: 'nodejs14.x',
      lambdaHashingVersion: 20201221,
      region: 'us-east-1',
      stage: 'dev',
      memorySize: 128,

      httpApi: {
        cors: {
          allowedOrigins: [PUBLIC_URL],
          allowedHeaders: ['*'],
        },
        authorizers: {
          [AUTHORIZE]: {
            type: 'token',
            functionName: AUTHORIZE,
            identitySource: ['$request.header.Authorization'],
          },
        },
      },
    },

    plugins: ['serverless-dotenv-plugin', 'serverless-webpack', 'serverless-offline'],

    custom: {
      'serverless-offline': {
        httpPort: API_PORT,
      },
    },
  },
  baseConfig,
);

services.forEach((service) => {
  // Functions
  service.functions.forEach((func) =>
    set(serverlessConfig, ['functions', func.name], {
      handler: `src/services/${service.name}/${func.name}.main`,
      events: func.method
        ? [
            {
              httpApi: {
                path: `api/${service.name}/${func.name}`,
                method: func.method,
                authorizer: func.protected ? { name: AUTHORIZE } : undefined,
              },
            },
          ]
        : undefined,
    }),
  );
});

module.exports = serverlessConfig;
