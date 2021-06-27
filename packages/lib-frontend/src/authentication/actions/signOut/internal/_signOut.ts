import { _SignOutModel } from '@lib/frontend/authentication/actions/signOut/internal/_signOut.model';
import { sessionClient } from '@lib/frontend/authentication/utils/SessionClient/SessionClient';

//TODO: handle error
export const _signOut: _SignOutModel = sessionClient.signOut;
