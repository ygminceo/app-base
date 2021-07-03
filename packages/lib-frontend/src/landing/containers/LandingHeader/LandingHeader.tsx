import React from 'react';
import { APP } from '@lib/common/app/constants';
import { AUTHENTICATION } from '@lib/common/authentication/constants';
import { Header } from '@lib/frontend/app/components';
import { Button, Droppable, Pressable, Text, Wrapper } from '@lib/frontend/core/components';
import { LANDING_HEADER_MENU_OPTIONS } from '@lib/frontend/landing/containers/LandingHeader/LandingHeader.constants';
import { LandingHeaderProps } from '@lib/frontend/landing/containers/LandingHeader/LandingHeader.model';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const LandingHeader = ({ ...props }: LandingHeaderProps) => {
  const { t } = useTranslation([APP, AUTHENTICATION]);
  return (
    <Header>
      <Wrapper grow row alignCenter>
        {LANDING_HEADER_MENU_OPTIONS.map((menuOption, i) => (
          <Droppable key={i} render={() => <menuOption.component />}>
            {(isHovered) => (
              <Pressable isPressed={isHovered}>
                <Text>{t(menuOption.title)}</Text>
              </Pressable>
            )}
          </Droppable>
        ))}
        <Button small next onPress={() => null}>
          {t('authentication:labels.signIn')}
        </Button>
      </Wrapper>
    </Header>
  );
};
