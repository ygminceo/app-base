import { APIGatewayTokenAuthorizerEvent, Callback, Context } from 'aws-lambda';
import { authorizeHandler } from '@lib/backend/authentication/handlers';
import { SessionAdmin } from '@lib/backend/authentication/utils/SessionAdmin/SessionAdmin';

const sessionAdmin = new SessionAdmin();

const generateAuthResponse = (
  principalId: string,
  effect: 'Allow' | 'Deny',
  methodArn: string,
) => ({
  principalId,
  policyDocument: {
    Version: '2012-10-17',
    Statement: [
      {
        Action: 'execute-api:Invoke',
        Effect: effect,
        Resource: methodArn,
      },
    ],
  },
});

export const main = async (
  event: APIGatewayTokenAuthorizerEvent,
  context: Context,
  callback: Callback,
): Promise<void> => {
  const token = event.authorizationToken.split(' ')[1];
  // TODO: do sth with claims?
  const { id, claims } = await authorizeHandler({ data: { token }, sessionAdmin });
  callback(null, generateAuthResponse(id, 'Allow', event.methodArn));
};
