import { tLazy } from '@lib/frontend/locale/utils/tLazy/tLazy';
import { HttpError } from '@lib/common/core/utils/HttpClient/HttpClient.error';

export class AccountAlreadyExistsError extends HttpError<string> {
  constructor() {
    super(400, tLazy('authentication:messages.accountAlreadyExists'));
  }
}
