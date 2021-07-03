import { AnimatableProperties } from 'react-native-animatable';

export interface AnimatableModel
  extends Pick<AnimatableProperties<any>, 'animation' | 'duration' | 'transition'> {
  onStart?(): any;
  onEnd?(): any;
}
