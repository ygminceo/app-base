import React from 'react';
import { APP } from '@lib/common/app/constants';
import { AUTHENTICATION } from '@lib/common/authentication/constants';
import { LANDING } from '@lib/common/landing/constants';
import { Header } from '@lib/frontend/app/components';
import { Button, TextField, Wrapper } from '@lib/frontend/core/components';
import { LandingHeaderProps } from '@lib/frontend/landing/containers/LandingHeader/LandingHeader.model';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const LandingHeader = ({ onContactModalOpen, ...props }: LandingHeaderProps) => {
  const { t } = useTranslation([APP, AUTHENTICATION, LANDING]);

  return (
    <Header>
      {/* {LANDING_HEADER_MENU_OPTIONS.map((menuOption, i) => (
          <Droppable key={i} render={() => <menuOption.component />}>
            <Text>{t(menuOption.title)}</Text>
          </Droppable>
        ))} */}
      <Wrapper mLeftAuto row spacing alignCenter>
        {/* <ThemeSwitch /> */}
        <Button small next onPress={onContactModalOpen}>
          {t('landing:labels.getStarted')}
        </Button>
      </Wrapper>
    </Header>
  );
};
