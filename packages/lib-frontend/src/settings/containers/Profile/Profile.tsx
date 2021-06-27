import React from 'react';
import { Divider, Link, Text, Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { ProfileProps } from '@lib/frontend/settings/containers/Profile/Profile.model';
import { useUser } from '@lib/frontend/user/stores/user.reducer';

export const Profile = ({ ...props }: ProfileProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation(['common']);
  const user = useUser();
  return (
    <Wrapper style={styles} grow spacing>
      <Divider />
      <Text subtitle>{t('settings:labels.profile')}</Text>

      <Wrapper row alignCenter>
        <Wrapper row alignCenter grow>
          <Text>{t('common:labels.emailAddress')}</Text>
          <Text>{user?.emailAddress}</Text>
        </Wrapper>
        <Link>{t('common:labels.change')}</Link>
      </Wrapper>

      <Wrapper row alignCenter>
        <Wrapper row alignCenter grow>
          <Text>{t('common:labels.phoneNumber')}</Text>
          <Text>{user?.phoneNumber}</Text>
        </Wrapper>
        <Link>{t('common:labels.change')}</Link>
      </Wrapper>
    </Wrapper>
  );
};
