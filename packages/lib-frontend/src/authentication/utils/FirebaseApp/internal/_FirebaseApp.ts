import { TOKEN_CLAIM_KEYS } from '@lib/common/authentication/constants';
import { config } from '@lib/common/core/utils/Config/Config';
import { accountSetAction } from '@lib/frontend/account/actions/account/account.action';
import { _FirebaseAppClass } from '@lib/frontend/authentication/utils/FirebaseApp/internal/_FirebaseApp.model';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';
import { store } from '@lib/frontend/root/stores/store';
import firebase from 'firebase/app';
import { pick } from 'lodash';

const REACT_APP_FIREBASE_APP_ID = config.get<string>('REACT_APP_FIREBASE_APP_ID', '');
const REACT_APP_FIREBASE_PROJECT_ID = config.get<string>('REACT_APP_FIREBASE_PROJECT_ID', '');
const REACT_APP_FIREBASE_TOKEN = config.get<string>('REACT_APP_FIREBASE_TOKEN', '');
const REACT_APP_FIREBASE_DOMAIN = config.get<string>('REACT_APP_FIREBASE_DOMAIN', '');
const REACT_APP_FIREBASE_STORAGE = config.get<string>('REACT_APP_FIREBASE_STORAGE', '');
const REACT_APP_FIREBASE_SENDER_ID = config.get<string>('REACT_APP_FIREBASE_SENDER_ID', '');
const REACT_APP_FIREBASE_MEASUREMENT_ID = config.get<string>(
  'REACT_APP_FIREBASE_MEASUREMENT_ID',
  '',
);

export class _FirebaseApp implements _FirebaseAppClass {
  public initialize() {
    if (!Platform.isWebSsr) {
      if (!firebase.apps.length) {
        firebase.initializeApp({
          apiKey: REACT_APP_FIREBASE_TOKEN,
          authDomain: REACT_APP_FIREBASE_DOMAIN,
          projectId: REACT_APP_FIREBASE_PROJECT_ID,
          storageBucket: REACT_APP_FIREBASE_STORAGE,
          messagingSenderId: REACT_APP_FIREBASE_SENDER_ID,
          appId: REACT_APP_FIREBASE_APP_ID,
          measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID,
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
