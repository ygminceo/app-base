import { _SessionClient } from '@lib/frontend/authentication/utils/SessionClient/internal/_SessionClient';

class SessionClient extends _SessionClient {}

export const sessionClient = new SessionClient();
