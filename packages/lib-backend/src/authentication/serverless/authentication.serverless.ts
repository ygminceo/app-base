import { AUTHENTICATION, OTP_CREATE, SIGNIN } from '@lib/common/authentication/constants';
import { config } from '@lib/common/core/utils/Config/Config';
import { ServerlessServiceModel } from '@lib/backend/serverless/serverless.model';

const API_PORT = config.get<number>('REACT_APP_API_AUTHENTICATION_PORT', null);

export const authenticationService: ServerlessServiceModel = {
  name: AUTHENTICATION,
  port: API_PORT,
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
