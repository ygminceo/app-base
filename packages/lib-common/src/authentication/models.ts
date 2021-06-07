import { AccountClass, AccountClassSummary } from '@lib/common/account/models';

export interface EmailFormSchema {
  emailAddress: string;
}

export interface OtpFormSchema {
  otp: string;
}

// Sign up
export interface SignInRequest extends EmailFormSchema, OtpFormSchema {}

export interface SignInResponse {
  account: AccountClassSummary;
  token: string;
}

// Token
export interface TokenClaims extends Pick<AccountClass, 'emailAddress' | 'phoneNumber'> {}

// OTP
export interface OtpClass {
  username: string;
  otp: string;
}

export interface OtpCreateRequest extends Pick<OtpClass, 'username'> {}

export interface OtpVerifyRequest extends OtpClass {}
