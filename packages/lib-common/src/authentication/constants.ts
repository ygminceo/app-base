import { AccountModel } from '@lib/common/account/models';

export const AUTHENTICATION = 'authentication';

export const SIGNOUT = 'signOut';
export const SIGNIN = 'signIn';

export const OTP_CREATE = 'otpCreate';
export const OTP_LENGTH = 4;
export const OTP_RETRY_SECONDS = 30;
export const OTP_EXPIRATION_SECONDS = 60 * 5;

export const TOKEN_CLAIM_KEYS: (keyof AccountModel)[] = ['emailAddress', 'phoneNumber'];
