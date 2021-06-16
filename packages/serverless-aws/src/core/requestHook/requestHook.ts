import middy from '@middy/core';
import jsonBodyParser from '@middy/http-json-body-parser';
import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';
import { RequestHookModel } from '@lib/backend/serverless/serverless.model';

export const requestHook: RequestHookModel<APIGatewayProxyHandler> = <P, R>(
  cb: (data: P) => Promise<R>,
) => {
  const main = middy(
    async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
      context.callbackWaitsForEmptyEventLoop = false;
      const data = (event.body as unknown) as P;
      try {
        return {
          statusCode: 200,
          body: JSON.stringify(await cb(data)),
        };
      } catch (e) {
        console.error(e);
        return {
          statusCode: e.status || 500,
          body: e.data || e.message,
        };
      }
    },
  );
  main.use(jsonBodyParser());
  return main;
};
