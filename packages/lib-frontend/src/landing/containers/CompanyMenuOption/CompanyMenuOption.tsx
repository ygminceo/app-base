import React from 'react';
import { LANDING } from '@lib/common/landing/constants';
import { IconText, Pressable, Wrapper } from '@lib/frontend/core/components';
import { COMPANY_MENU_OPTION_LINKS } from '@lib/frontend/landing/containers/CompanyMenuOption/CompanyMenuOption.constants';
import { CompanyMenuOptionProps } from '@lib/frontend/landing/containers/CompanyMenuOption/CompanyMenuOption.model';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const CompanyMenuOption = ({ ...props }: CompanyMenuOptionProps) => {
  const { t } = useTranslation([LANDING]);
  return (
    <Wrapper grow spacingTight>
      {COMPANY_MENU_OPTION_LINKS.map((link, i) => (
        <Pressable key={i}>
          <IconText icon={link.icon}>{t(link.label)}</IconText>
        </Pressable>
      ))}
    </Wrapper>
  );
};
