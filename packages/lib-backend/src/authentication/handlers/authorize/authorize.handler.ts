import { AuthorizeHandlerModel } from '@lib/backend/authentication/handlers/authorize/authorize.model';

// TODO: handle error
export const authorizeHandler: AuthorizeHandlerModel = async ({ data, sessionAdmin }) =>
  sessionAdmin.verifyToken(data.token);
