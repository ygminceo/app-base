import { _signOutFunction } from '@lib/frontend/authentication/actions/signOut/internal/_signOut.model';
import { firebaseApp } from '@lib/frontend/authentication/utils/FirebaseApp/FirebaseApp';

//TODO: handle error
export const _signOut: _signOutFunction = firebaseApp.signOut;
