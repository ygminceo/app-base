import { _SessionClient } from '@lib/frontend/authentication/utils/SessionClient/internal/_SessionClient';

class SessionClient extends _SessionClient {
  constructor() {
    super();
    this.initialize();
  }
}

export const sessionClient = new SessionClient();
