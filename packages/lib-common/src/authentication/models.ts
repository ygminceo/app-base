import { UserModel, UserSummaryModel } from '@lib/common/user/models';

export interface EmailFormModel {
  email: string;
}

export interface OtpFormModel {
  otp: string;
}

// Sign up
export interface SignInRequestModel extends EmailFormModel, OtpFormModel {}

export interface SignInResponseModel {
  user: UserSummaryModel;
  token: string;
}

// Token
export interface TokenClaimsModel extends Pick<UserModel, 'email' | 'phoneNumber'> {}

// OTP
// TODO: limit retries
export interface OtpModel {
  username: string;
  otp: string;
}

export interface OtpCreateRequestModel extends Pick<OtpModel, 'username'> {}

export interface OtpVerifyRequestModel extends OtpModel {}

// Authorization
export interface AuthorizeRequestModel {
  token: string;
}

export interface AuthorizeResponseModel {
  id: string;
  claims: TokenClaimsModel;
}

export interface AuthorizedRequestModel {
  uid: string;
}
