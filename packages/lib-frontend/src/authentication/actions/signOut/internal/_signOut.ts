import { _SignOutModel } from '@lib/frontend/authentication/actions/signOut/internal/_signOut.model';
import { firebaseApp } from '@lib/frontend/authentication/utils/FirebaseClient/FirebaseClient';

//TODO: handle error
export const _signOut: _SignOutModel = firebaseApp.signOut;
