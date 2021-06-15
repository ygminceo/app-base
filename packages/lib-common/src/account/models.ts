import { TokenClaimsModel } from '@lib/common/authentication/models';
import { IntegrationModel } from '@lib/common/integration/models';
import { BankAccountModel } from '@lib/common/payment/models';
import { Optional } from 'utility-types';

export interface AccountModel {
  _id: string;
  emailAddress?: string;
  phoneNumber?: string;
  bankAccounts?: BankAccountModel[];
  integration?: IntegrationModel;
}

export interface AccountPrimaryKeyModel
  extends Pick<AccountModel, 'emailAddress' | 'phoneNumber'> {}

export interface AccountSummaryModel extends TokenClaimsModel, Pick<AccountModel, '_id'> {}

// Get
export interface AccountGetRequestModel
  extends AccountPrimaryKeyModel,
    Optional<Pick<AccountModel, '_id'>> {}

// Create
export interface AccountCreateRequestModel extends Omit<AccountModel, '_id'> {}

export interface AccountCreateResponseModel extends AccountModel {}
