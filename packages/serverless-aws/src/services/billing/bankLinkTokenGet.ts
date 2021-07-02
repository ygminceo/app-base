import { BankLinkTokenGetResponseModel } from '@lib/common/billing/models';
import { bankLinkTokenGetHandler } from '@lib/backend/billing/handlers';
import { HandlerModel } from '@lib/backend/serverless/serverless.model';
import { handler } from '@serverless/aws/core/decorators/handler/handler';

class Handler implements HandlerModel<void, BankLinkTokenGetResponseModel> {
  @handler()
  async main(data: void, uid: string) {
    return await bankLinkTokenGetHandler({ uid });
  }
}

export const main = new Handler().main;
