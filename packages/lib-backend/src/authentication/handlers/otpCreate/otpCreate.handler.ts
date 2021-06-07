import { otpCreateFunciton } from '@lib/backend/authentication/handlers/otpCreate/otpCreate.model';
import { Crypto } from '@lib/backend/authentication/utils/Crypto/Crypto';
import { OTP_LENGTH } from '@lib/common/authentication/constants';
import { OtpClass, OtpCreateRequest } from '@lib/common/authentication/models';

export const otpCreateHandler: otpCreateFunciton = async ({ data, otpCollection, mailer }) => {
  const dataFinal = await _before(data);
  //TODO: better way to upsert?
  await otpCollection.delete<object, OtpClass>({ username: dataFinal.username });
  const otp = otpCollection.save<OtpClass, OtpClass>(dataFinal);

  // await mailer.send({
  //   from: 'ygminceo@gmail.com',
  //   to: ['yoongeemin@gmail.com'],
  //   subject: 'Test',
  //   html: 'Test',
  // });

  return otp;
};

const _before = async (data: OtpCreateRequest): Promise<OtpClass> => ({
  username: data.username,
  otp: await Crypto.randomInt(OTP_LENGTH),
});
