import React from 'react';
import { LANDING } from '@lib/common/landing/constants';
import {
  Activatable,
  Button,
  Copyright,
  IconText,
  Portal,
  Wrapper,
} from '@lib/frontend/core/components';
import { LANDING_FOOTER_LINK_GROUPS } from '@lib/frontend/landing/containers/LandingFooter/LandingFooter.constants';
import { LandingFooterProps } from '@lib/frontend/landing/containers/LandingFooter/LandingFooter.model';
import { LocaleSwitch } from '@lib/frontend/locale/containers';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { RouteLink } from '@lib/frontend/routing/components';

export const LandingFooter = ({ onContactModalOpen, ...props }: LandingFooterProps) => {
  const { t } = useTranslation([LANDING]);
  return (
    <>
      <Portal>
        <Wrapper row absoluteBottom mAuto mBottom={48} center>
          <Button large next onPress={onContactModalOpen}>
            {t('landing:labels.getStarted')}
          </Button>
        </Wrapper>
      </Portal>

      <Wrapper pTight fullWidth spacing>
        <Wrapper row spacing>
          {LANDING_FOOTER_LINK_GROUPS.map((group, i) => (
            <Wrapper key={i} spacingTight>
              <IconText bold icon={group.icon}>
                {t(group.title)}
              </IconText>
              {group.links.map((link, j) => (
                <Activatable key={j}>
                  {(isActive) => (
                    <Wrapper>
                      <RouteLink to={link.pathname}>
                        <IconText
                          primary
                          dark={isActive}
                          icon={link.icon}
                          animatable={{ transition: ['color'] }}>
                          {t(link.title)}
                        </IconText>
                      </RouteLink>
                    </Wrapper>
                  )}
                </Activatable>
              ))}
            </Wrapper>
          ))}
        </Wrapper>
        <Wrapper row center alignCenter spacing>
          <Copyright />
          <LocaleSwitch />
        </Wrapper>
      </Wrapper>
    </>
  );
};
