import { defaultsDeep, set } from 'lodash';
import { config } from '@lib/common/core/utils/Config/Config';
import { baseConfig } from '@lib/backend/serverless/serverless.base';
import { services } from '@lib/backend/serverless/services';

const API_PORT = config.get<number>('REACT_APP_API_PORT', null);

const serverlessConfig = defaultsDeep(
  {
    service: 'aws',

    provider: {
      name: 'aws',
      runtime: 'nodejs14.x',
      lambdaHashingVersion: 20201221,
      region: 'us-east-1',
      stage: 'dev',
      memorySize: 128,
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
      events: [
        {
          http: {
            path: `api/${service.name}/${func.name}`,
            method: func.method,
            cors: true,
          },
        },
      ],
    }),
  );
});

module.exports = serverlessConfig;
