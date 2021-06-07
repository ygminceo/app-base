import { CollectionClass } from '@lib/backend/utils/Database/Database.model';
import { AccountClass, AccountClassOmitId } from '@lib/common/account/models';

export type accountCreateFunction = (props: {
  data: AccountClassOmitId;
  accountCollection: CollectionClass;
}) => Promise<AccountClass>;
