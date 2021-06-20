import { reduce } from 'lodash';
import { ServerlessServiceModel } from '@lib/backend/serverless/serverless.model';

//TODO: model this
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
            http: {
              path: `api/${service.name}/${func.name}`,
              method: func.method,
              cors: true,
            },
          },
        ],
      },
    }),
    {},
  ),

  custom: {
    'serverless-offline': {
      httpPort: service.port,
      lambdaPort: service.port + 1000,
    },
  },
});
