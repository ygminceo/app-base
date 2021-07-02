import firebase from 'firebase/app';
import 'firebase/auth';
import { pick } from 'lodash';
import { TOKEN_CLAIM_KEYS } from '@lib/common/authentication/constants';
import { config } from '@lib/common/core/utils/Config/Config';
import { alertAdd } from '@lib/frontend/app/actions/alert/alert.action';
import { NETWORK_ALERT } from '@lib/frontend/app/constants';
import { _SessionClientModel } from '@lib/frontend/authentication/utils/SessionClient/internal/_SessionClient.model';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';
import { store } from '@lib/frontend/root/stores/store';
import { userSetAction } from '@lib/frontend/user/actions/user/user.action';

const REACT_APP_FIREBASE_APP_ID = config.get<string>('REACT_APP_FIREBASE_APP_ID', '');
const REACT_APP_FIREBASE_PROJECT_ID = config.get<string>('REACT_APP_FIREBASE_PROJECT_ID', '');
const REACT_APP_FIREBASE_TOKEN = config.get<string>('REACT_APP_FIREBASE_TOKEN', '');
const REACT_APP_FIREBASE_DOMAIN = config.get<string>('REACT_APP_FIREBASE_DOMAIN', '');
const REACT_APP_FIREBASE_STORAGE = config.get<string>('REACT_APP_FIREBASE_STORAGE', '');
const REACT_APP_FIREBASE_SENDER_ID = config.get<string>('REACT_APP_FIREBASE_SENDER_ID', '');

export class _SessionClient implements _SessionClientModel {
  public async initialize() {
    if (!Platform.isSsr) {
      if (!firebase.apps.length) {
        firebase.initializeApp({
          apiKey: REACT_APP_FIREBASE_TOKEN,
          authDomain: REACT_APP_FIREBASE_DOMAIN,
          projectId: REACT_APP_FIREBASE_PROJECT_ID,
          storageBucket: REACT_APP_FIREBASE_STORAGE,
          messagingSenderId: REACT_APP_FIREBASE_SENDER_ID,
          appId: REACT_APP_FIREBASE_APP_ID,
        });

        if (Platform.isTest) {
          // TODO: ENV
          firebase.auth().useEmulator('http://localhost:9099');
        }
      }

      //TODO: from locale
      firebase.auth().useDeviceLanguage();

      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          try {
            const { claims } = await user.getIdTokenResult();
            store.dispatch(
              userSetAction({
                ...pick(claims, TOKEN_CLAIM_KEYS),
                _id: user.uid,
              }),
            );
          } catch (e) {
            if (e.code === 'auth/network-request-failed') {
              store.dispatch(alertAdd(NETWORK_ALERT));
            }
            throw e;
          }
        } else {
          store.dispatch(userSetAction(null));
        }
      });
    }
  }

  public async signIn(token: string) {
    firebase.auth().signInWithCustomToken(token);
  }

  public async signOut() {
    firebase.auth().signOut();
  }

  public async getToken() {
    const currentUser = firebase.auth().currentUser;
    return currentUser && currentUser.getIdToken(true);
  }
}
