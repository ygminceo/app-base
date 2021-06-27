import { AuthorizeRequestModel, AuthorizeResponseModel } from '@lib/common/authentication/models';
import { SessionAdminModel } from '@lib/backend/authentication/utils/SessionAdmin/SessionAdmin.model';

export type AuthorizeHandlerModel = (params: {
  data: AuthorizeRequestModel;
  sessionAdmin: SessionAdminModel;
}) => Promise<AuthorizeResponseModel>;
