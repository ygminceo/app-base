import { tLazy } from '@lib/frontend/locale/utils/tLazy/tLazy';
import { HttpError } from '@lib/common/core/utils/HttpClient/HttpClient.error';

export class UnauthorizedError extends HttpError<string> {
  constructor() {
    super(401);
  }
}

export class InvalidOtpError extends HttpError<string> {
  constructor() {
    super(401, tLazy('authentication:messages.invalidOtp'));
  }
}
