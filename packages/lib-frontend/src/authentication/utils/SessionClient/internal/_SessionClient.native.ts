import auth from '@react-native-firebase/auth';
import { pick } from 'lodash';
import { TOKEN_CLAIM_KEYS } from '@lib/common/authentication/constants';
import { _SessionClientModel } from '@lib/frontend/authentication/utils/SessionClient/internal/_SessionClient.model';
import { store } from '@lib/frontend/root/stores/store';
import { userSetAction } from '@lib/frontend/user/actions/user/user.action';

export class _SessionClient implements _SessionClientModel {
  public async initialize() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        user?.getIdTokenResult().then((result) =>
          store.dispatch(
            userSetAction({
              ...pick(result.claims, TOKEN_CLAIM_KEYS),
              _id: user.uid,
            }),
          ),
        );
      } else {
        store.dispatch(userSetAction(null));
      }
    });
  }

  public async signIn(token: string) {
    auth().signInWithCustomToken(token);
  }

  public async signOut() {
    auth().signOut();
  }

  public async getToken() {
    const currentUser = auth().currentUser;
    return currentUser && currentUser.getIdToken(true);
  }
}
