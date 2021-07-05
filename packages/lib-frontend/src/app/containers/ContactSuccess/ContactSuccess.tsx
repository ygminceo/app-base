import { ContactSuccessProps } from '@lib/frontend/app/containers/ContactSuccess/ContactSuccess.model';
import React from 'react';
import { useStyles } from '@lib/frontend/core/hooks';
import { Icon, Wrapper, Text } from '@lib/frontend/core/components';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { APP } from '@lib/common/app/constants';

export const ContactSuccess = ({ ...props }: ContactSuccessProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation([APP]);
  return (
    <Wrapper style={styles} grow center alignCenter spacing>
      <Wrapper row center alignCenter spacing>
        <Icon icon="email" success xlarge />
        <Icon icon="check-circle" success xlarge />
      </Wrapper>
      <Text large>{t('app:messages.contactSuccess')}</Text>
    </Wrapper>
  );
};
