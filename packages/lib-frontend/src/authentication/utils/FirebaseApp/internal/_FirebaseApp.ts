import { TOKEN_CLAIM_KEYS } from '@lib/common/authentication/constants';
import { accountSetAction } from '@lib/frontend/account/actions/account/account.action';
import { _FirebaseAppClass } from '@lib/frontend/authentication/utils/FirebaseApp/internal/_FirebaseApp.model';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';
import { store } from '@lib/frontend/root/stores/store';
import firebase from 'firebase/app';
import { pick } from 'lodash';

export class _FirebaseApp implements _FirebaseAppClass {
  public initialize() {
    if (!Platform.isWebSsr) {
      //TODO: change to secrets
      if (!firebase.apps.length) {
        firebase.initializeApp({
          apiKey: 'AIzaSyAM3iOSmgvSYMYJXhBwpfa-lzSP0hKm54g',
          authDomain: 'development-dc20e.firebaseapp.com',
          projectId: 'development-dc20e',
          storageBucket: 'development-dc20e.appspot.com',
          messagingSenderId: '398277661440',
          appId: '1:398277661440:web:27f97fd327ed440ca499e5',
          measurementId: 'G-H3FP9NSFE5',
        });
      }

      //TODO: from locale
      firebase.auth().useDeviceLanguage();

      firebase.auth().onAuthStateChanged((user) => {
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
  }

  public signIn(token: string) {
    return firebase.auth().signInWithCustomToken(token);
  }

  public signOut() {
    return firebase.auth().signOut();
  }
}
