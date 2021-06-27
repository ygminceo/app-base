import { OtpCreateRequestModel, OtpModel } from '@lib/common/authentication/models';
import { CollectionModel } from '@lib/backend/core/utils/Database/Database.model';
import { MailerModel } from '@lib/backend/mail/utils/Mailer/Mailer.model';

export type OtpCreateHandlerModel = (params: {
  data: OtpCreateRequestModel;
  otpCollection: CollectionModel;
  mailer: MailerModel;
}) => Promise<OtpModel>;
