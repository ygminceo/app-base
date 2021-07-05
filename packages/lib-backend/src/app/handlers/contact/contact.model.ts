import { ContactRequestModel } from '@lib/common/app/models';
import { MailerModel } from '@lib/backend/mail/utils/Mailer/Mailer.model';

export type ContactHandlerModel = (params: {
  data: ContactRequestModel;
  mailer: MailerModel;
}) => Promise<void>;
