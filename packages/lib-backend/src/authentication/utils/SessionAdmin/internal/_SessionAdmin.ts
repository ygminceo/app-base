import admin from 'firebase-admin';
import { toString } from 'lodash';
import { TokenClaimsModel } from '@lib/common/authentication/models';
import { config } from '@lib/common/core/utils/Config/Config';
import { _SessionAdminModel } from '@lib/backend/authentication/utils/SessionAdmin/internal/_SessionAdmin.model';

const SERVER_FIREBASE_ADMIN_PROJECT_ID = config.get<string>('SERVER_FIREBASE_ADMIN_PROJECT_ID', '');
const SERVER_FIREBASE_ADMIN_EMAIL = config.get<string>('SERVER_FIREBASE_ADMIN_EMAIL', '');
const SERVER_FIREBASE_ADMIN_SECRET = config
  .get<string>('SERVER_FIREBASE_ADMIN_SECRET', '')
  .replace(/\\n/g, '\n');

export class _SessionAdmin implements _SessionAdminModel {
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

  createToken(id: string, claims: TokenClaimsModel) {
    return admin.auth().createCustomToken(toString(id), claims);
  }

  verifyToken(token: string) {
    return admin
      .auth()
      .verifyIdToken(token)
      .then((decoded) => ({
        id: decoded.uid,
        claims: decoded.additionalClaims as TokenClaimsModel,
      }));
  }
}
