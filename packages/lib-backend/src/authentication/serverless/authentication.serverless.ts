import { AUTHENTICATION, OTP_CREATE, SIGNIN } from '@lib/common/authentication/constants';
import { ServerlessServiceModel } from '@lib/backend/serverless/serverless.model';

export const authenticationService: ServerlessServiceModel = {
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
