import { MailerModel, MailModel } from '@lib/backend/mail/utils/Mailer/Mailer.model';

export type MailSendHandlerModel = <P>(params: {
  mail: MailModel<P>;
  mailer: MailerModel;
}) => Promise<void>;
