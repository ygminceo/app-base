import { ContactAddHandlerModel } from '@lib/backend/app/handlers/contactAdd/contactAdd.model';

export const contactHandler: ContactAddHandlerModel = async ({
  data,
  contactCollection,
  mailer,
}) => {
  return await contactCollection.save(data);
};
