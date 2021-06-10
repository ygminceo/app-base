import { TokenClaims } from '@lib/common/authentication/models';
import { config } from '@lib/common/core/utils/Config/Config';
import admin from 'firebase-admin';
import { toString } from 'lodash';

const SERVER_FIREBASE_ADMIN_PROJECT_ID = config.get<string>('SERVER_FIREBASE_ADMIN_PROJECT_ID', '');
const SERVER_FIREBASE_ADMIN_EMAIL = config.get<string>('SERVER_FIREBASE_ADMIN_EMAIL', '');
const SERVER_FIREBASE_ADMIN_SECRET = config.get<string>('SERVER_FIREBASE_ADMIN_SECRET', '');

class FirebaseAdmin {
  constructor() {
    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: SERVER_FIREBASE_ADMIN_PROJECT_ID,
          privateKey: SERVER_FIREBASE_ADMIN_SECRET,
          clientEmail: SERVER_FIREBASE_ADMIN_EMAIL,
        }),
      });
    }
  }

  public createToken(id: string, claims: TokenClaims) {
    return admin.auth().createCustomToken(toString(id), claims);
  }

  public verifyToken(token: string) {
    return admin
      .auth()
      .verifyIdToken(token)
      .then((decoded) => ({
        id: decoded.uid,
        claims: decoded.additionalClaims,
      }));
  }
}

export const firebaseAdmin = new FirebaseAdmin();
