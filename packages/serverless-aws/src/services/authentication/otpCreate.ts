import { OtpCreateRequestModel, OtpModel } from '@lib/common/authentication/models';
import { otpCreateHandler } from '@lib/backend/authentication/handlers';
import { Database } from '@lib/backend/core/utils/Database/Database';
import { Mailer } from '@lib/backend/mail/utils/Mailer/Mailer';
import { HandlerModel } from '@lib/backend/serverless/serverless.model';
import { handler } from '@serverless/aws/core/decorators/handler/handler';

const database = new Database();

const mailer = new Mailer();

class Handler implements HandlerModel<OtpCreateRequestModel, OtpModel> {
  @handler()
  async main(data: OtpCreateRequestModel) {
    const otpCollection = database.getCollection('Otp');
    return await otpCreateHandler({ data, otpCollection, mailer });
  }
}

export const main = new Handler().main;
