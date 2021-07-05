import { StyleSheet } from 'react-native';
import {
  CIRCLE_SIZE_DEFAULT,
  CIRCLE_SIZE_LARGE,
  CIRCLE_SIZE_SMALL,
} from '@lib/frontend/core/components/Circle/Circle.constants';
import { CircleProps } from '@lib/frontend/core/components/Circle/Circle.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const circleStyle = StyleSheet.create({
  default: {
    width: CIRCLE_SIZE_DEFAULT,
    height: CIRCLE_SIZE_DEFAULT,
    borderRadius: CIRCLE_SIZE_DEFAULT / 2,
  },
  small: {
    width: CIRCLE_SIZE_SMALL,
    height: CIRCLE_SIZE_SMALL,
    borderRadius: CIRCLE_SIZE_SMALL / 2,
  },
  large: {
    width: CIRCLE_SIZE_LARGE,
    height: CIRCLE_SIZE_LARGE,
    borderRadius: CIRCLE_SIZE_LARGE / 2,
  },
});

export const getCircleStyle: StyleGetterModel<CircleProps> = ({ small, large }) => [
  large ? circleStyle.large : small ? circleStyle.small : circleStyle.default,
];
