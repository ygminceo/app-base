import { CollectionModel } from '@lib/backend/utils/Database/Database.model';
import { OtpVerifyRequestModel } from '@lib/common/authentication/models';

export type OtpVerifyHandlerModel = (params: {
  data: OtpVerifyRequestModel;
  otpCollection: CollectionModel;
}) => Promise<void>;
