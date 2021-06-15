import { paymentMethodsGetHandler } from '@lib/backend/payment/handlers';
import { Database } from '@lib/backend/utils/Database/Database';
import {
  PaymentMethodsGetRequestModel,
  PaymentMethodsGetResponseModel,
} from '@lib/common/payment/models';
import { requestHook } from '@serverless/aws/core/requestHook/requestHook';

const database = new Database();

export const main = requestHook<PaymentMethodsGetRequestModel, PaymentMethodsGetResponseModel>(
  async (data) => {
    const accountCollection = database.getCollection('Account');
    return await paymentMethodsGetHandler({ data, accountCollection });
  },
);
