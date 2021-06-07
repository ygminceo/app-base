import { IconProps } from '@lib/frontend/core/components/Icon/Icon.model';
import { MenuProps } from '@lib/frontend/core/components/Menu/Menu.model';
import { StyledProps } from '@lib/frontend/core/styles/style.model';

export interface IconMenuProps
  extends Pick<MenuProps, 'options'>,
    Pick<IconProps, 'icon'>,
    StyledProps {}
