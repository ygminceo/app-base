import { _FirebaseApp } from '@lib/frontend/authentication/utils/FirebaseApp/internal/_FirebaseApp';
import 'firebase/auth';

class FirebaseApp extends _FirebaseApp {
  constructor() {
    super();
    this.initialize();
  }
}

export const firebaseApp = new FirebaseApp();
