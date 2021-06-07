import { MailerClass } from '@lib/backend/mail/utils/Mailer/Mailer.model';
import { CollectionClass } from '@lib/backend/utils/Database/Database.model';
import { OtpClass, OtpCreateRequest } from '@lib/common/authentication/models';

export type otpCreateFunciton = (props: {
  data: OtpCreateRequest;
  otpCollection: CollectionClass;
  mailer: MailerClass;
}) => Promise<OtpClass>;
