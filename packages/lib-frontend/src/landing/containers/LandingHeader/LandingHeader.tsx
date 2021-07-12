import React from 'react';
import { APP } from '@lib/common/app/constants';
import { AUTHENTICATION } from '@lib/common/authentication/constants';
import { LANDING } from '@lib/common/landing/constants';
import { Header } from '@lib/frontend/app/components';
import { Arrow, Droppable, Pressable, Text, Wrapper } from '@lib/frontend/core/components';
import { LandingChatButton } from '@lib/frontend/landing/containers';
import { LANDING_HEADER_MENU_OPTIONS } from '@lib/frontend/landing/containers/LandingHeader/LandingHeader.constants';
import { LandingHeaderProps } from '@lib/frontend/landing/containers/LandingHeader/LandingHeader.model';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const LandingHeader = ({ ...props }: LandingHeaderProps) => {
  const { t } = useTranslation([APP, AUTHENTICATION, LANDING]);
  return (
    <Header>
      <Wrapper grow row alignCenter>
        {LANDING_HEADER_MENU_OPTIONS.map((menuOption, i) => (
          <Droppable key={i} render={() => <menuOption.component />}>
            {(isActive) => (
              <Pressable isPressed={isActive}>
                <Wrapper row center alignCenter spacingTight>
                  <Text>{t(menuOption.title)}</Text>
                  <Arrow down rotate180={isActive} />
                </Wrapper>
              </Pressable>
            )}
          </Droppable>
        ))}
      </Wrapper>

      <Wrapper row spacing alignCenter>
        {/* <ThemeSwitch /> */}
        <LandingChatButton small />
      </Wrapper>
    </Header>
  );
};
