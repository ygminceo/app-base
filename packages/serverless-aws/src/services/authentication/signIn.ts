import { SignInRequestModel, SignInResponseModel } from '@lib/common/authentication/models';
import { signInHandler } from '@lib/backend/authentication/handlers';
import { SessionAdmin } from '@lib/backend/authentication/utils/SessionAdmin/SessionAdmin';
import { Database } from '@lib/backend/core/utils/Database/Database';
import { HandlerModel } from '@lib/backend/serverless/serverless.model';
import { handler } from '@serverless/aws/core/decorators/handler/handler';

const database = new Database();

const sessionAdmin = new SessionAdmin();

class Handler implements HandlerModel<SignInRequestModel, SignInResponseModel> {
  @handler()
  async main(data: SignInRequestModel) {
    const userCollection = database.getCollection('User');
    const otpCollection = database.getCollection('Otp');
    return await signInHandler({ data, userCollection, otpCollection, sessionAdmin });
  }
}

export const main = new Handler().main;
