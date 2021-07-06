import { ContactAddRequestModel } from '@lib/common/app/models';
import { contactHandler } from '@lib/backend/app/handlers';
import { Database } from '@lib/backend/core/utils/Database/Database';
import { Mailer } from '@lib/backend/mail/utils/Mailer/Mailer';
import { HandlerModel } from '@lib/backend/serverless/serverless.model';
import { handler } from '@serverless/aws/core/decorators/handler/handler';

const database = new Database();

const mailer = new Mailer();

class Handler implements HandlerModel<ContactAddRequestModel, void> {
  @handler()
  async main(data: ContactAddRequestModel) {
    const contactCollection = database.getCollection('Contact');
    return await contactHandler({ data, contactCollection, mailer });
  }
}

export const main = new Handler().main;
