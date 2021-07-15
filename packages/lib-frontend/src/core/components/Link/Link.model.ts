import { PropsWithChildren } from 'react';
import { IconProps } from '@lib/frontend/core/components/Icon/Icon.model';
import { TextProps } from '@lib/frontend/core/components/Text/Text.model';

export interface LinkProps extends Omit<TextProps, 'children'>, PropsWithChildren<{}> {
  pathname?: string;
  newTab?: boolean;
  onPress?(): any;
}

export interface LinkModel extends Pick<LinkProps, 'pathname'>, Pick<IconProps, 'icon'> {
  label: string;
}
