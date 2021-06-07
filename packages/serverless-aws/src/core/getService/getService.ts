import { ServerlessService } from '@lib/backend/serverless/serverless.model';
import { reduce } from 'lodash';

//TODO: model this
export const getService = (service: ServerlessService) => ({
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
