import {
  BankAccountAddRequestModel,
  BankAccountAddResponseModel,
} from '@lib/common/billing/models';
import { CollectionModel } from '@lib/backend/utils/Database/Database.model';

export type BankAccountAddHandlerModel = (params: {
  data: BankAccountAddRequestModel;
  accountCollection: CollectionModel;
}) => Promise<BankAccountAddResponseModel>;
