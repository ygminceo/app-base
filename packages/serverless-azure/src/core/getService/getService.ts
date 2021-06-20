import { reduce } from 'lodash';
import { ServerlessServiceModel } from '@lib/backend/serverless/serverless.model';

export const getService = (service: ServerlessServiceModel) => ({
  service: service.name,

  functions: reduce(
    service.functions,
    (result, func) => ({
      ...result,
      [func.name]: {
        handler: `lambdas.${func.name}`,
        events: [
          {
            http: true,
            route: `${service.name}/${func.name}`,
            methods: [func.method],
            authLevel: 'anonymous',
          },
        ],
      },
    }),
    {},
  ),

  custom: {
    webpack: {
      includeModules: {
        nodeModulesRelativeDir: '../../../../../',
      },
    },
  },
});
