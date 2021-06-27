import { TokenClaimsModel } from '@lib/common/authentication/models';

export interface SessionAdminModel {
  createToken(id: string, claims: TokenClaimsModel): Promise<string>;
  verifyToken(token: string): Promise<{ id: string; claims: TokenClaimsModel }>;
}
