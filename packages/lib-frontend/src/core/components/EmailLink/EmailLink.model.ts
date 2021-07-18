import { LinkProps } from '@lib/frontend/core/components/Link/Link.model';

export interface EmailLinkProps extends Omit<LinkProps, 'pathname'> {
  email: string;
}
