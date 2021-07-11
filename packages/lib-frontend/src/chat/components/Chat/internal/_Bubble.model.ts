import { BubbleProps, IMessage } from 'react-native-gifted-chat';
import { AppearableProps } from '@lib/frontend/core/components/Appearable/Appearable.model';

export interface _BubbleProps extends BubbleProps<IMessage>, Pick<AppearableProps, 'isVisible'> {}
