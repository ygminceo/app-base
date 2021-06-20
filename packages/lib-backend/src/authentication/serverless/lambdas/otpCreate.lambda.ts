import { OtpCreateRequestModel, OtpModel } from '@lib/common/authentication/models';
import { otpCreateHandler } from '@lib/backend/authentication/handlers';
import { Mailer } from '@lib/backend/mail/utils/Mailer/Mailer';
import { Database } from '@lib/backend/utils/Database/Database';

const database = new Database();

const mailer = new Mailer();

export const otpCreate = async (data: OtpCreateRequestModel): Promise<OtpModel> => {
  const otpCollection = database.getCollection('Otp');
  return await otpCreateHandler({ data, otpCollection, mailer });
};
