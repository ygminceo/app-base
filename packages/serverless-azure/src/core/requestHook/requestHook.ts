import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { requestHookFunction } from '@lib/backend/serverless/serverless.model';

export const requestHook: requestHookFunction<AzureFunction> =
  <P, R>(cb: (data: P) => Promise<R>) =>
  async (context: Context, request: HttpRequest): Promise<void> => {
    const data = request.body;
    try {
      context.res = {
        status: 200,
        body: JSON.stringify(await cb(data)),
      };
    } catch (e) {
      console.error(e);
      context.res = {
        status: e.status || 500,
        body: e.data || e.message,
      };
    }
  };
