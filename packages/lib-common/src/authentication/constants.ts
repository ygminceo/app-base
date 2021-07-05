import { UserModel } from '@lib/common/user/models';

export const AUTHENTICATION = 'authentication';

export const AUTHORIZE = 'authorize';

export const SIGNOUT = 'signOut';
export const SIGNIN = 'signIn';

export const OTP_CREATE = 'otpCreate';
export const OTP_LENGTH = 4;
export const OTP_RETRY_SECONDS = 30;
export const OTP_EXPIRATION_SECONDS = 60 * 5;

export const TOKEN_CLAIM_KEYS: (keyof UserModel)[] = ['email', 'phoneNumber'];
