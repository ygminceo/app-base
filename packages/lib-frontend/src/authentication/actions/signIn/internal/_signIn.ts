import { _SignInWithTokenModel } from '@lib/frontend/authentication/actions/signIn/internal/_signIn.model';
import { firebaseApp } from '@lib/frontend/authentication/utils/FirebaseClient/FirebaseClient';

export const _signInWithToken: _SignInWithTokenModel = (token: string) =>
  firebaseApp
    .signIn(token)
    //TODO: handle error
    .catch((error) => {});
