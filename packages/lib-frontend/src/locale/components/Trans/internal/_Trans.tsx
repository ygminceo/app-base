import { Trans, TransProps } from 'react-i18next';
import { Text } from '@lib/frontend/core/components';
import compose from '@lib/frontend/core/utils/compose/compose';
import { _TransProps } from '@lib/frontend/locale/components/Trans/internal/_Trans.model';

export const _Trans = compose<_TransProps, TransProps<string, string, Element>>({
  component: Trans,
  getProps: ({ ns, i18nKey, values, components, ...props }) => ({
    ns,
    i18nKey,
    values,
    components,
    parent: Text,
  }),
});
