import { TOKEN_CLAIM_KEYS } from '@lib/common/authentication/constants';
import { accountSetAction } from '@lib/frontend/account/actions/account/account.action';
import { _FirebaseAppClass } from '@lib/frontend/authentication/utils/FirebaseApp/internal/_FirebaseApp.model';
import { store } from '@lib/frontend/root/stores/store';
import auth from '@react-native-firebase/auth';
import { pick } from 'lodash';

export class _FirebaseApp implements _FirebaseAppClass {
  public initialize() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        user?.getIdTokenResult().then((result) =>
          store.dispatch(
            accountSetAction({
              ...pick(result.claims, TOKEN_CLAIM_KEYS),
              id: user.uid,
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
