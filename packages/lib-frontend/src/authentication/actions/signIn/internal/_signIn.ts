import { _SignInWithTokenModel } from '@lib/frontend/authentication/actions/signIn/internal/_signIn.model';
import { sessionClient } from '@lib/frontend/authentication/utils/SessionClient/SessionClient';

export const _signInWithToken: _SignInWithTokenModel = (token: string) =>
  sessionClient
    .signIn(token)
    //TODO: handle error
    .catch((error) => {});
