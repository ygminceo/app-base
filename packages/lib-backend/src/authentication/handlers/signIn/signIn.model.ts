import { CollectionModel } from '@lib/backend/utils/Database/Database.model';
import { SignInRequestModel, SignInResponseModel } from '@lib/common/authentication/models';

export type SignInHandlerModel = (params: {
  data: SignInRequestModel;
  accountCollection: CollectionModel;
  otpCollection: CollectionModel;
}) => Promise<SignInResponseModel>;
