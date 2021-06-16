import { reduce } from 'lodash';
import { ServerlessServiceModel } from '@lib/backend/serverless/serverless.model';

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
});
