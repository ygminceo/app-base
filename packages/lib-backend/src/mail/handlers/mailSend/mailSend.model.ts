import { MailerModel, MailModel } from '@lib/backend/mail/utils/Mailer/Mailer.model';

export type MailSendHandlerModel = (params: {
  mail: MailModel;
  mailer: MailerModel;
}) => Promise<void>;
