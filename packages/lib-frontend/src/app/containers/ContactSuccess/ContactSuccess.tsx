import React from 'react';
import { APP } from '@lib/common/app/constants';
import { COMMON } from '@lib/common/core/constants';
import { ContactSuccessProps } from '@lib/frontend/app/containers/ContactSuccess/ContactSuccess.model';
import { Button, Icon, Text, Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const ContactSuccess = ({ onSuccess, ...props }: ContactSuccessProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation([APP, COMMON]);
  return (
    <Wrapper style={styles} grow center alignCenter spacing>
      <Wrapper row center alignCenter spacing>
        <Icon icon="email" success xlarge />
        <Icon icon="check-circle" success xlarge />
      </Wrapper>
      <Text large center>
        {t('app:messages.contactSuccess')}
      </Text>
      <Button onPress={onSuccess}>{t('common:labels.close')}</Button>
    </Wrapper>
  );
};
