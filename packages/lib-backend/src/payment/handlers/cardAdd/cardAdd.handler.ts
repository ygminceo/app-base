import { CardAddHandlerModel } from '@lib/backend/payment/handlers/cardAdd/cardAdd.model';
import { _cardAddHandler } from '@lib/backend/payment/handlers/cardAdd/internal/_cardAdd.model';

export const cardAddHandler: CardAddHandlerModel = _cardAddHandler;
