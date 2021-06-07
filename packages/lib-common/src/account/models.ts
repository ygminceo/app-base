import { TokenClaims } from '@lib/common/authentication/models';
import { BankAccountClass } from '@lib/common/payment/models';
import { Optional } from 'utility-types';

export interface AccountClass {
  _id: string;
  emailAddress?: string;
  phoneNumber?: string;
  bankAccounts?: BankAccountClass[];
}

export interface AccountClassOmitId extends Omit<AccountClass, '_id'> {}

export interface AccountClassPrimaryKey
  extends Pick<AccountClass, 'emailAddress' | 'phoneNumber'> {}

export interface AccountClassSummary extends TokenClaims, Pick<AccountClass, '_id'> {}

export interface AccountGetRequest
  extends AccountClassPrimaryKey,
    Optional<Pick<AccountClass, '_id'>> {}
