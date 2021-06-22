import { OtpCreateRequestModel, OtpModel } from '@lib/common/authentication/models';
import { otpCreateHandler } from '@lib/backend/authentication/handlers';
import { Mailer } from '@lib/backend/mail/utils/Mailer/Mailer';
import { Database } from '@lib/backend/utils/Database/Database';
import { requestHook } from '@serverless/aws/core/requestHook/requestHook';

const database = new Database();

const mailer = new Mailer();

export const main = requestHook<OtpCreateRequestModel, OtpModel>(
  async (data: OtpCreateRequestModel): Promise<OtpModel> => {
    const otpCollection = database.getCollection('Otp');
    return await otpCreateHandler({ data, otpCollection, mailer });
  },
);
