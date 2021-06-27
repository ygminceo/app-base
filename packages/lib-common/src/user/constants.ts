import { TOKEN_CLAIM_KEYS } from '@lib/common/authentication/constants';
import { UserModel } from '@lib/common/user/models';

export const USER = 'user';

export const USER_PRIMARY_KEYS: (keyof UserModel)[] = ['emailAddress', 'phoneNumber'];

export const USER_SUMMARY_KEYS: (keyof UserModel)[] = ['_id', ...TOKEN_CLAIM_KEYS];
