import { SubscriptionCreateRequestModel } from '@lib/common/landing/models';
import { CollectionModel } from '@lib/backend/core/utils/Database/Database.model';
import { MailerModel } from '@lib/backend/mail/utils/Mailer/Mailer.model';

export type SubscriptionCreateHandlerModel = (params: {
  data: SubscriptionCreateRequestModel;
  subscriptionCollection: CollectionModel;
  mailer: MailerModel;
}) => Promise<void>;
