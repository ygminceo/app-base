import { AccountClass } from '@lib/common/account/models';
import { TOKEN_CLAIM_KEYS } from '@lib/common/authentication/constants';

export const ACCOUNT = 'account';

export const ACCOUNT_PRIMARY_KEYS: (keyof AccountClass)[] = ['emailAddress', 'phoneNumber'];

export const ACCOUNT_SUMMARY_KEYS: (keyof AccountClass)[] = ['_id', ...TOKEN_CLAIM_KEYS];
