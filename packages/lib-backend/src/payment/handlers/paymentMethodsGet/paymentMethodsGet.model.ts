import { CollectionModel } from '@lib/backend/utils/Database/Database.model';
import { PaymentMethodsGetRequestModel, PaymentMethodsGetResponseModel } from '@lib/common/payment/models';

export type PaymentMethodsGetHandlerModel = (params: {
  data: PaymentMethodsGetRequestModel;
  accountCollection: CollectionModel;
}) => Promise<PaymentMethodsGetResponseModel>;
