import { OtpVerifyRequestModel } from '@lib/common/authentication/models';
import { CollectionModel } from '@lib/backend/core/utils/Database/Database.model';

export type OtpVerifyHandlerModel = (params: {
  data: OtpVerifyRequestModel;
  otpCollection: CollectionModel;
}) => Promise<void>;
