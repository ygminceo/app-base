import { SignInRequestModel, SignInResponseModel } from '@lib/common/authentication/models';
import { CollectionModel } from '@lib/backend/utils/Database/Database.model';

export type SignInHandlerModel = (params: {
  data: SignInRequestModel;
  accountCollection: CollectionModel;
  otpCollection: CollectionModel;
}) => Promise<SignInResponseModel>;
