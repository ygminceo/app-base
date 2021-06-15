import { _useRouter } from '@lib/frontend/routing/hooks/useRouter/internal/_useRouter';
import { UseRouterReturnsModel } from '@lib/frontend/routing/hooks/useRouter/useRouter.model';

export const useRouter = (): UseRouterReturnsModel => _useRouter();
