import { AccountModel, AccountSummaryModel } from '@lib/common/account/models';

export interface EmailFormModel {
  emailAddress: string;
}

export interface OtpFormModel {
  otp: string;
}

// Sign up
export interface SignInRequestModel extends EmailFormModel, OtpFormModel {}

export interface SignInResponseModel {
  account: AccountSummaryModel;
  token: string;
}

// Token
export interface TokenClaimsModel extends Pick<AccountModel, 'emailAddress' | 'phoneNumber'> {}

// OTP
export interface OtpModel {
  username: string;
  otp: string;
}

export interface OtpCreateRequestModel extends Pick<OtpModel, 'username'> {}

export interface OtpVerifyRequestModel extends OtpModel {}
