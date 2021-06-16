import { UseAccountProtectedReturnsModel } from '@lib/frontend/account/hooks/useAccountProtected/useAccountProtected.model';
import { useAccount } from '@lib/frontend/account/stores/account.reducer';

export const useAccountProtected = (): UseAccountProtectedReturnsModel => {
  const account = useAccount();
  if (account) {
    return account;
  }
  // TODO: redirect if unauthenticated?
  throw Error();
};
