import { defaultsDeep } from 'lodash';

const { baseConfig } = require('../lib-backend/src/serverless/serverless.base');

export const serverlessConfig = defaultsDeep(
  {
    provider: {
      name: 'aws',
      runtime: 'nodejs14.x',
      lambdaHashingVersion: 20201221,
      region: 'us-east-1',
      stage: 'dev',
      memorySize: 128,
    },

    plugins: ['serverless-dotenv-plugin', 'serverless-webpack', 'serverless-offline'],
  },
  baseConfig,
);
