import { HttpError } from '@lib/common/core/utils/HttpClient/HttpClient.error';
import { tLazy } from '@lib/frontend/locale/utils/tLazy/tLazy';

export class UserAlreadyExistsError extends HttpError<string> {
  constructor() {
    super(400, tLazy('authentication:messages.userAlreadyExists'));
  }
}

export class UserNotFoundError extends HttpError<string> {
  constructor() {
    super(400, tLazy('authentication:messages.userNotFound'));
  }
}
