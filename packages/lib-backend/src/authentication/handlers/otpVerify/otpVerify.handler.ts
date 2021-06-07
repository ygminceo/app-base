import { otpVerifyFunction } from '@lib/backend/authentication/handlers/otpVerify/otpVerify.model';
import { InvalidOtpError } from '@lib/common/authentication/errors';
import { OtpClass } from '@lib/common/authentication/models';

export const otpVerifyHandler: otpVerifyFunction = async ({ data, otpCollection }) => {
  const otp = await otpCollection.get<Pick<OtpClass, 'username'>, OtpClass>({
    username: data.username,
  });
  if (!otp || otp.otp !== data.otp) {
    throw new InvalidOtpError();
  }
  await otpCollection.delete<object, OtpClass>({ username: data.username });
};
