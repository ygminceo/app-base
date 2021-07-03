import { MenuProps } from '@lib/frontend/core/components/Menu/Menu.model';
import { StyledPropsWithChildren } from '@lib/frontend/core/styles/style.model';

export interface DroppableMenuProps
  extends Pick<MenuProps, 'options'>,
    StyledPropsWithChildren<{}> {}
