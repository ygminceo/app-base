import React from 'react';
import { DroppableMenu, Wrapper, Text, Icon } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import { LocaleSwitchProps } from '@lib/frontend/locale/containers/LocaleSwitch/LocaleSwitch.model';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const LocaleSwitch = ({ ...props }: LocaleSwitchProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation(['locale']);
  return (
    <DroppableMenu style={styles} options={[]}>
      <Wrapper row spacingTight center alignCenter>
        <Icon icon="globe" />
        <Text>{'English'}</Text>
      </Wrapper>
    </DroppableMenu>
  );
};
