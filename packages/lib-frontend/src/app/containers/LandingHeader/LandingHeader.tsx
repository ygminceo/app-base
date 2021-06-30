import React from 'react';
import { Header } from '@lib/frontend/app/components';
import { LANDING_HEADER_MENU_OPTIONS } from '@lib/frontend/app/containers/LandingHeader/LandingHeader.constants';
import { LandingHeaderProps } from '@lib/frontend/app/containers/LandingHeader/LandingHeader.model';
import { Droppable, Pressable, Text, Wrapper } from '@lib/frontend/core/components';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const LandingHeader = ({ ...props }: LandingHeaderProps) => {
  const { t } = useTranslation(['app']);
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
      </Wrapper>
    </Header>
  );
};
