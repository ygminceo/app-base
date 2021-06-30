import { Card } from '@lib/backend/billing/database/card.entity';
import { CardAddHandlerModel } from '@lib/backend/billing/handlers/cardAdd/cardAdd.model';
import { userGetHandler } from '@lib/backend/user/handlers';

export const cardAddHandler: CardAddHandlerModel = async ({ uid, data, userCollection }) => {
  const user = await userGetHandler({ data: { _id: uid }, userCollection });

  const card = new Card();
  card.id = data.id;
  card.brand = data.brand;
  card.exp_month = data.exp_month;
  card.exp_year = data.exp_year;
  card.last4 = data.last4;

  user.cards = [...(user.cards || []), card];
  await userCollection.save(user);
  return {};
};
