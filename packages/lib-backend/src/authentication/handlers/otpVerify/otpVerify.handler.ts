import { InvalidOtpError } from '@lib/common/authentication/errors';
import { OtpModel } from '@lib/common/authentication/models';
import { OtpVerifyHandlerModel } from '@lib/backend/authentication/handlers/otpVerify/otpVerify.model';

export const otpVerifyHandler: OtpVerifyHandlerModel = async ({ data, otpCollection }) => {
  const otp = await otpCollection.get<Pick<OtpModel, 'username'>, OtpModel>({
    username: data.username,
  });
  if (!otp || otp.otp !== data.otp) {
    throw new InvalidOtpError();
  }
  await otpCollection.delete<object, OtpModel>({ username: data.username });
};
