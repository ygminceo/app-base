import React from 'react';
import { Link } from '@lib/frontend/core/components';
import { EmailLinkProps } from '@lib/frontend/core/components/EmailLink/EmailLink.model';

export const EmailLink = ({ email, ...props }: EmailLinkProps) => (
  <Link {...props} pathname={`mailto:${email}`} />
);
