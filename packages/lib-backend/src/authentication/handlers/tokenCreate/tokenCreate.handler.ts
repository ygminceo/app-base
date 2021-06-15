import { _tokenCreate } from '@lib/backend/authentication/handlers/tokenCreate/internal/_tokenCreate';
import { TokenCreateHandlerModel } from '@lib/backend/authentication/handlers/tokenCreate/tokenCreate.model';

export const tokenCreateHandler: TokenCreateHandlerModel = _tokenCreate;
