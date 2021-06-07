import { ServerlessService } from '@lib/backend/serverless/serverless.model';
import { reduce } from 'lodash';

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
