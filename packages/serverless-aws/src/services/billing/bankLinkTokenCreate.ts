import { BankLinkTokenCreateResponseModel } from '@lib/common/billing/models';
import { bankLinkTokenCreateHandler } from '@lib/backend/billing/handlers';
import { HandlerModel } from '@lib/backend/serverless/serverless.model';
import { handler } from '@serverless/aws/core/decorators/handler/handler';

class Handler implements HandlerModel<void, BankLinkTokenCreateResponseModel> {
  @handler()
  async main(data: void, uid: string) {
    return await bankLinkTokenCreateHandler({ uid });
  }
}

export const main = new Handler().main;
