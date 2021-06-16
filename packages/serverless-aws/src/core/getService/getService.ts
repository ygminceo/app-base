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
        handler: `functions/${func.name}.main`,
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
});
