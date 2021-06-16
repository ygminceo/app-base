import { OTP_LENGTH } from '@lib/common/authentication/constants';
import { OtpCreateRequestModel, OtpModel } from '@lib/common/authentication/models';
import { OtpCreateHandlerModel } from '@lib/backend/authentication/handlers/otpCreate/otpCreate.model';
import { Crypto } from '@lib/backend/authentication/utils/Crypto/Crypto';
import { mailSendHandler } from '@lib/backend/mail/handlers';

export const otpCreateHandler: OtpCreateHandlerModel = async ({ data, otpCollection, mailer }) => {
  const dataFinal = await _before(data);
  //TODO: better way to upsert?
  await otpCollection.delete<object, OtpModel>({ username: dataFinal.username });
  const otp = otpCollection.save<OtpModel, OtpModel>(dataFinal);

  //TODO: email
  await mailSendHandler({
    mailer,
    mail: {
      from: 'ygminceo@gmail.com',
      to: ['yoongeemin@gmail.com'],
      subject: 'Test',
      html: 'Test',
    },
  });

  return otp;
};

const _before = async (data: OtpCreateRequestModel): Promise<OtpModel> => ({
  username: data.username,
  otp: await Crypto.randomInt(OTP_LENGTH),
});
