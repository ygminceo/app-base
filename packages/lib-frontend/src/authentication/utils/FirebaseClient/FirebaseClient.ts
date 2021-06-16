import 'firebase/auth';
import { _FirebaseClient } from '@lib/frontend/authentication/utils/FirebaseClient/internal/_FirebaseClient';

class FirebaseClient extends _FirebaseClient {
  constructor() {
    super();
    this.initialize();
  }
}

export const firebaseApp = new FirebaseClient();
