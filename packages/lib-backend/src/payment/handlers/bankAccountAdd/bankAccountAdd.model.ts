import { CollectionModel } from '@lib/backend/utils/Database/Database.model';
import {
  BankAccountAddRequestModel,
  BankAccountAddResponseModel,
} from '@lib/common/payment/models';

export type BankAccountAddHandlerModel = (params: {
  data: BankAccountAddRequestModel;
  accountCollection: CollectionModel;
}) => Promise<BankAccountAddResponseModel>;
