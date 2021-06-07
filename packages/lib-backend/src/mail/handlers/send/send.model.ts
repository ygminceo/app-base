import { MailerClass, MailType } from '@lib/backend/mail/utils/Mailer/Mailer.model';

export type sendFunction = (props: { mail: MailType; mailer: MailerClass }) => Promise<void>;
