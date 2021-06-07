import { defaultsDeep } from 'lodash';

const { baseConfig } = require('../lib-backend/src/serverless/serverless.base');

export const serverlessConfig = defaultsDeep(
  {
    provider: {
      name: 'azure',
      runtime: 'nodejs12',
      region: 'West US 2',
      stage: 'dev',
      subscriptionId: '26a5b9ae-7a22-4ad3-8f89-03555ef29b36',
      // apim: true,
    },

    package: {
      individually: false,
    },

    plugins: ['serverless-dotenv-plugin', 'serverless-azure-functions', 'serverless-webpack'],
  },
  baseConfig,
);
