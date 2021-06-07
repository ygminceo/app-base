import { ReactElement } from 'react';

export interface HoverableProps {
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  children:
    | ((isHovered: boolean) => ReactElement<HoverableChildProps>)
    | ReactElement<HoverableChildProps>;
}

export interface HoverableChildProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onResponderGrant?: () => void;
  onResponderRelease?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
}
