import { TOKEN_CLAIM_KEYS } from '@lib/common/authentication/constants';
import { accountSetAction } from '@lib/frontend/account/actions/account/account.action';
import { _FirebaseClientModel } from '@lib/frontend/authentication/utils/FirebaseClient/internal/_FirebaseClient.model';
import { store } from '@lib/frontend/root/stores/store';
import auth from '@react-native-firebase/auth';
import { pick } from 'lodash';

export class _FirebaseClient implements _FirebaseClientModel {
  public initialize() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        user?.getIdTokenResult().then((result) =>
          store.dispatch(
            accountSetAction({
              ...pick(result.claims, TOKEN_CLAIM_KEYS),
              _id: user.uid,
            }),
          ),
        );
      } else {
        store.dispatch(accountSetAction(null));
      }
    });
  }

  public signIn(token: string) {
    return auth().signInWithCustomToken(token);
  }

  public signOut() {
    return auth().signOut();
  }
}
