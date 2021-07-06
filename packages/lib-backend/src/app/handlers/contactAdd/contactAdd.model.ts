import { CollectionModel } from '@lib/backend/core/utils/Database/Database.model';
import { MailerModel } from '@lib/backend/mail/utils/Mailer/Mailer.model';
import { ContactAddRequestModel } from '@lib/common/app/models';

export type ContactAddHandlerModel = (params: {
  data: ContactAddRequestModel;
  contactCollection: CollectionModel;
  mailer: MailerModel;
}) => Promise<void>;
