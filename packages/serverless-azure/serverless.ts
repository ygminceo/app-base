import { baseConfig } from '@lib/backend/serverless/serverless.base';
import { services } from '@lib/backend/serverless/services';
import { config } from '@lib/common/core/utils/Config/Config';
import { defaultsDeep, get, set } from 'lodash';

const REACT_APP_PUBLIC_URL = config.get('REACT_APP_PUBLIC_URL', '');

const serverlessConfig = defaultsDeep(
  {
    service: 'azure',

    provider: {
      name: 'azure',
      runtime: 'nodejs12',
      region: 'West US 2',
      stage: 'dev',
      subscriptionId: '26a5b9ae-7a22-4ad3-8f89-03555ef29b36',

      apim: {
        cors: {
          allowCredentials: true,
          allowedOrigins: [REACT_APP_PUBLIC_URL],
          allowedMethods: ['GET', 'POST', 'PUT', 'DELETE'],
          allowedHeaders: ['*'],
          exposeHeaders: ['*'],
        }
      },
    },

    plugins: ['serverless-dotenv-plugin', 'serverless-azure-functions', 'serverless-webpack'],

    // Azure functions can't be packaged individually at the moment
    package: {
      individually: false,
    },
  },
  baseConfig,
);

services.forEach((service) => {
  // Apis
  set(
    serverlessConfig,
    ['provider', 'apim', 'apis'],
    [
      ...get(serverlessConfig, ['provider', 'apim', 'apis'], []),
      {
        name: `${service.name}-api`,
        displayName: `${service.name}-api`,
        path: `api/${service.name}`,
        subscriptionRequired: false,
        protocols: [process.env.NODE_ENV === 'development' ? 'http' : 'https'],
        authorization: 'none',
      },
    ],
  );

  // Backends
  set(
    serverlessConfig,
    ['provider', 'apim', 'backends'],
    [
      ...get(serverlessConfig, ['provider', 'apim', 'backends'], []),
      {
        name: `${service.name}-backend`,
        url: `api/${service.name}`,
      },
    ],
  );

  // Functions
  service.functions.forEach((func) =>
    set(serverlessConfig, ['functions', func.name], {
      handler: `src/services/${service.name}/${func.name}.main`,
      events: [
        {
          http: true,
          route: `${service.name}/${func.name}`,
          methods: [func.method],
          authLevel: 'anonymous',
        },
      ],
      apim: {
        api: `${service.name}-api`,
        backend: `${service.name}-backend`,
        operations: [
          {
            method: func.method,
            urlTemplate: `/${func.name}`,
            displayName: func.name,
          },
        ],
      },
    }),
  );
});

module.exports = serverlessConfig;
