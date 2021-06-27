import middy from '@middy/core';
import jsonBodyParser from '@middy/http-json-body-parser';
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { get } from 'lodash';

export const handler = () => (target: object, key: string, descriptor: PropertyDescriptor) => {
  const cb = descriptor.value;
  const main = middy(
    async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
      const uid = get(event.requestContext.authorizer, ['jwt', 'claims', 'user_id']);
      context.callbackWaitsForEmptyEventLoop = false;
      try {
        return {
          statusCode: 200,
          body: JSON.stringify(await cb(event.body, uid)),
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
  descriptor.value = main;
  return descriptor;
};
