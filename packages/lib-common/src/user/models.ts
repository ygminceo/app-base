import { Optional } from 'utility-types';
import { TokenClaimsModel } from '@lib/common/authentication/models';
import { BankModel, CardModel } from '@lib/common/billing/models';

export interface UserModel {
  _id: string;
  email?: string;
  phoneNumber?: string;
  banks?: BankModel[];
  cards?: CardModel[];
  linkedAccounts?: {
    [name: string]: LinkedUserModel;
  };
}

export interface UserPrimaryKeyModel extends Pick<UserModel, 'email' | 'phoneNumber'> {}

// TODO: update this
export interface UserSummaryModel extends TokenClaimsModel, Pick<UserModel, '_id'> {}

// Get
export interface UserGetRequestModel
  extends UserPrimaryKeyModel,
    Optional<Pick<UserModel, '_id'>> {}

// Create
export interface UserCreateRequestModel extends Omit<UserModel, '_id'> {}

export interface UserCreateResponseModel extends UserModel {}

export interface LinkedUserModel {
  id: string;
}
