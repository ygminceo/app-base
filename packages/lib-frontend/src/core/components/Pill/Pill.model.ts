import { Activatable } from '@lib/frontend/core/components';
import { PressableProps } from '@lib/frontend/core/components/Pressable/Pressable.model';

export interface PillProps extends PressableProps {
  isActive?: boolean;
}
