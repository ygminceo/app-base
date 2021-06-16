import { OtpCreateRequestModel, OtpModel } from '@lib/common/authentication/models';
import { MailerModel } from '@lib/backend/mail/utils/Mailer/Mailer.model';
import { CollectionModel } from '@lib/backend/utils/Database/Database.model';

export type OtpCreateHandlerModel = (params: {
  data: OtpCreateRequestModel;
  otpCollection: CollectionModel;
  mailer: MailerModel;
}) => Promise<OtpModel>;
