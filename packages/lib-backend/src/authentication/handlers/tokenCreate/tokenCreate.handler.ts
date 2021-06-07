import { _tokenCreate } from '@lib/backend/authentication/handlers/tokenCreate/internal/_tokenCreate';
import { tokenCreateFunction } from '@lib/backend/authentication/handlers/tokenCreate/tokenCreate.model';

export const tokenCreateHandler: tokenCreateFunction = _tokenCreate;
