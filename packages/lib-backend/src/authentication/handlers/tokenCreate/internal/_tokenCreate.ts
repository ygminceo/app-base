import { _TokenCreateHandlerModel } from '@lib/backend/authentication/handlers/tokenCreate/internal/_tokenCreate.model';
import { firebaseAdmin } from '@lib/backend/authentication/utils/FirebaseAdmin/FirebaseAdmin';
import { TOKEN_CLAIM_KEYS } from '@lib/common/authentication/constants';
import { pick } from 'lodash';

export const _tokenCreate: _TokenCreateHandlerModel = (account) =>
  firebaseAdmin.createToken(account._id, pick(account, TOKEN_CLAIM_KEYS));
