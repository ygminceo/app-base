import { CollectionClass } from '@lib/backend/utils/Database/Database.model';
import { OtpVerifyRequest } from '@lib/common/authentication/models';

export type otpVerifyFunction = (props: {
  data: OtpVerifyRequest;
  otpCollection: CollectionClass;
}) => Promise<void>;
