import { MailerModel, MailType } from '@lib/backend/mail/utils/Mailer/Mailer.model';

export type MailSendHandlerModel = (params: { mail: MailType; mailer: MailerModel }) => Promise<void>;
