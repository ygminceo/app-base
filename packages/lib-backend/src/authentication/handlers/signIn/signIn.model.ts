import { SignInRequestModel, SignInResponseModel } from '@lib/common/authentication/models';
import { SessionAdminModel } from '@lib/backend/authentication/utils/SessionAdmin/SessionAdmin.model';
import { CollectionModel } from '@lib/backend/core/utils/Database/Database.model';

export type SignInHandlerModel = (params: {
  data: SignInRequestModel;
  userCollection: CollectionModel;
  otpCollection: CollectionModel;
  sessionAdmin: SessionAdminModel;
}) => Promise<SignInResponseModel>;
