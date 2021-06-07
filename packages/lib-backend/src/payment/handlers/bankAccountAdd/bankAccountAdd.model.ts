import { CollectionClass } from '@lib/backend/utils/Database/Database.model';
import { BankAccountAddRequest, BankAccountAddResponse } from '@lib/common/payment/models';

export type bankAccountAddFunction = (props: {
  data: BankAccountAddRequest;
  accountCollection: CollectionClass;
}) => Promise<BankAccountAddResponse>;
