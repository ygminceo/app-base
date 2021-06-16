import { Portal } from 'react-native-paper';
import { _PortalProps } from '@lib/frontend/core/components/Portal/internal/_Portal.model';
import compose from '@lib/frontend/core/utils/compose/compose';

export const _Portal = compose<_PortalProps, any>({
  component: Portal,
  getProps: ({ children }) => ({ children }),
});
