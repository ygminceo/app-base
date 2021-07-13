import { Analytics, getAnalytics, setUserId } from 'firebase/analytics';
import { getApps, initializeApp } from 'firebase/app';
import {
  Auth,
  getAuth,
  onAuthStateChanged,
  signInWithCustomToken,
  signOut,
  useAuthEmulator,
  useDeviceLanguage,
} from 'firebase/auth';
import { pick } from 'lodash';
import { TOKEN_CLAIM_KEYS } from '@lib/common/authentication/constants';
import { config } from '@lib/common/core/utils/Config/Config';
import { alertAdd } from '@lib/frontend/app/actions/alert/alert.action';
import { NETWORK_ALERT } from '@lib/frontend/app/constants';
import { _SessionClientModel } from '@lib/frontend/authentication/utils/SessionClient/internal/_SessionClient.model';
import { Platform } from '@lib/frontend/core/utils/Platform/Platform';
import { store } from '@lib/frontend/root/stores/store';
import { userSetAction } from '@lib/frontend/user/actions/user/user.action';

const REACT_APP_FIREBASE_API_KEY = config.get<string>('REACT_APP_FIREBASE_API_KEY', '');
const REACT_APP_FIREBASE_APP_ID = config.get<string>('REACT_APP_FIREBASE_APP_ID', '');
const REACT_APP_FIREBASE_AUTH_DOMAIN = config.get<string>('REACT_APP_FIREBASE_AUTH_DOMAIN', '');
const REACT_APP_FIREBASE_PROJECT_ID = config.get<string>('REACT_APP_FIREBASE_PROJECT_ID', '');
const REACT_APP_FIREBASE_SENDER_ID = config.get<string>('REACT_APP_FIREBASE_SENDER_ID', '');
const REACT_APP_FIREBASE_STORAGE_BUCKET = config.get<string>(
  'REACT_APP_FIREBASE_STORAGE_BUCKET',
  '',
);

export class _SessionClient implements _SessionClientModel {
  auth?: Auth;
  analytics?: Analytics;

  constructor() {
    if (Platform.isWeb && !getApps().length) {
      initializeApp({
        apiKey: REACT_APP_FIREBASE_API_KEY,
        appId: REACT_APP_FIREBASE_APP_ID,
        authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
        messagingSenderId: REACT_APP_FIREBASE_SENDER_ID,
        projectId: REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
      });

      this.auth = getAuth();
      this.analytics = getAnalytics();

      if (Platform.isTest) {
        // TODO: ENV
        useAuthEmulator(this.auth, 'http://localhost:9099');
      }

      //TODO: from locale
      useDeviceLanguage(this.auth);

      onAuthStateChanged(this.auth, async (user) => {
        if (user) {
          try {
            this.analytics && setUserId(this.analytics, user.uid);

            const { claims } = await user.getIdTokenResult();

            store.dispatch(
              userSetAction({
                ...pick(claims as object, TOKEN_CLAIM_KEYS),
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
    this.auth && signInWithCustomToken(this.auth, token);
  }

  public async signOut() {
    // @ts-ignore
    this.analytics && setUserId(this.analytics, null);
    this.auth && await signOut(this.auth);
  }

  public async getToken() {
    const currentUser = this.auth && this.auth.currentUser;
    return currentUser ? await currentUser.getIdToken(true) : null;
  }
}
