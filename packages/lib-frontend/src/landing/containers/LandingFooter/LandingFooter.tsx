import React from 'react';
import { LANDING } from '@lib/common/landing/constants';
import { CenterLayout } from '@lib/frontend/app/layouts';
import { Copyright, IconText, Link, Logo, Portal, Wrapper } from '@lib/frontend/core/components';
import { LANDING_FOOTER_LINK_GROUPS } from '@lib/frontend/landing/containers/LandingFooter/LandingFooter.constants';
import { LandingFooterProps } from '@lib/frontend/landing/containers/LandingFooter/LandingFooter.model';
import { LocaleSwitch } from '@lib/frontend/locale/containers';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const LandingFooter = ({ ...props }: LandingFooterProps) => {
  const { t } = useTranslation([LANDING]);
  return (
    <>
      <Portal>
        <Wrapper row absoluteBottom mAuto mBottom={80} center>
          {/* <LandingChatButton large /> */}
        </Wrapper>
      </Portal>

      <Wrapper fullWidth contrast p spacing>
        <Wrapper row spacing center fullWidth contrast p>
          {LANDING_FOOTER_LINK_GROUPS.map((group, i) => (
            <Wrapper key={i} spacingTight>
              <IconText contrast icon={group.icon}>
                {t(group.label)}
              </IconText>
              {group.links.map((link, j) => (
                <Link key={j} to={link.pathname}>
                  {t(link.label)}
                </Link>
              ))}
            </Wrapper>
          ))}

          {/* <LocaleSwitch /> */}
        </Wrapper>

        <Wrapper row center>
          <Copyright />
        </Wrapper>
      </Wrapper>
    </>
  );
};
