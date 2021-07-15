import React from 'react';
import { COMMON } from '@lib/common/core/constants';
import { SETTINGS } from '@lib/common/settings/constants';
import { Button, Icon, Text, Wrapper } from '@lib/frontend/core/components';
import { useIsMobile, useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { PROFILE_SETTINGS_OPTIONS } from '@lib/frontend/settings/containers/Profile/Profile.constants';
import { ProfileProps } from '@lib/frontend/settings/containers/Profile/Profile.model';
import { useUser } from '@lib/frontend/user/stores/user.reducer';

export const Profile = ({ ...props }: ProfileProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation([COMMON, SETTINGS]);
  const user = useUser();
  const isMobile = useIsMobile();
  return (
    <Wrapper style={styles} row={!isMobile} grow spacing>
      <Text subtitle>{t('settings:labels.profile')}</Text>
      <Wrapper spacing>
        {PROFILE_SETTINGS_OPTIONS.map((option, i) => (
          // TODO: icontext
          <Wrapper key={i} row spacingTight>
            {option.icon && <Icon icon={option.icon} />}
            <Wrapper>
              {option.label && <Text>{t(option.label)}</Text>}
              {user && <Text muted>{option.value(user) || t('common:labels.notSet')}</Text>}
            </Wrapper>
            <Button small next>
              Change
            </Button>
          </Wrapper>
        ))}
      </Wrapper>
    </Wrapper>
  );
};
