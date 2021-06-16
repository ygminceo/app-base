import { Optional } from 'utility-types';
import { TokenClaimsModel } from '@lib/common/authentication/models';
import { BankAccountModel } from '@lib/common/billing/models';

export interface AccountModel {
  _id: string;
  emailAddress?: string;
  phoneNumber?: string;
  bankAccounts?: BankAccountModel[];
}

export interface AccountPrimaryKeyModel
  extends Pick<AccountModel, 'emailAddress' | 'phoneNumber'> {}

// TODO: update this
export interface AccountSummaryModel extends TokenClaimsModel, Pick<AccountModel, '_id'> {}

// Get
export interface AccountGetRequestModel
  extends AccountPrimaryKeyModel,
    Optional<Pick<AccountModel, '_id'>> {}

// Create
export interface AccountCreateRequestModel extends Omit<AccountModel, '_id'> {}

export interface AccountCreateResponseModel extends AccountModel {}
