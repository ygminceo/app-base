import { _signInWithTokenFunction } from '@lib/frontend/authentication/actions/signIn/internal/_signIn.model';
import { firebaseApp } from '@lib/frontend/authentication/utils/FirebaseApp/FirebaseApp';

export const _signInWithToken: _signInWithTokenFunction = (token: string) =>
  firebaseApp
    .signIn(token)
    //TODO: handle error
    .catch((error) => {});
