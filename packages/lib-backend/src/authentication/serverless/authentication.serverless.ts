import { ServerlessService } from '@lib/backend/serverless/serverless.model';
import { AUTHENTICATION, OTP_CREATE, SIGNIN } from '@lib/common/authentication/constants';

export const authenticationService: ServerlessService = {
  name: AUTHENTICATION,
  port: 3001,
  functions: [
    {
      name: OTP_CREATE,
      method: 'post',
    },
    {
      name: SIGNIN,
      method: 'post',
    },
  ],
};
