import { isNil } from 'lodash';
import { StyleSheet } from 'react-native';
import { flexStyle } from '@lib/frontend/core/styles/flex.style';
import { ShapeProps } from '@lib/frontend/core/styles/shape.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const shapeStyle = StyleSheet.create({
  fullWidth: { width: '100%' },
  overflowHidden: { overflow: 'hidden' },
  hidden: { display: 'none' },
  opaque: { opacity: 0 },
  visible: { opacity: 1 },
  minimized: { transform: [{ scale: 0.7 }] },
  zoomOut: { opacity: 0, transform: [{ scale: 0.95 }] },
  zoomIn: { opacity: 1, transform: [{ scale: 1 }] },
  noScale: { transform: [{ scaleX: 1 }] },
  absolute: { position: 'absolute' },
  relative: { position: 'relative' },
  noRotate: { transform: [{ rotate: '0deg' }] },
  rotate90: { transform: [{ rotate: '90deg' }] },
  rotate180: { transform: [{ rotate: '180deg' }] },
  rotate270: { transform: [{ rotate: '270deg' }] },
  below: { zIndex: -1 },
  above: { zIndex: 1 },
  absoluteFill: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
  },
  absoluteRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
  },
  absoluteLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    margin: 'auto',
  },
  absoluteTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    margin: 'auto',
  },
  absoluteBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
  },
});

export const getShapeStyle: StyleGetterModel<ShapeProps> = ({
  above,
  absolute,
  absoluteBottom,
  absoluteFill,
  absoluteLeft,
  absoluteRight,
  absoluteTop,
  below,
  bottom,
  fullWidth,
  height,
  hidden,
  left,
  opacity,
  opaque,
  overflowHidden,
  relative,
  right,
  top,
  width,
  isMinimized,
}) => [
  ...(fullWidth ? [shapeStyle.fullWidth] : isNil(width) ? [] : [{ width }, flexStyle.basisAuto]),
  ...(isNil(height) ? [] : [{ height }, flexStyle.basisAuto]),
  ...(hidden ? [shapeStyle.hidden] : []),
  ...(opaque ? [shapeStyle.opaque] : []),
  ...(overflowHidden ? [shapeStyle.overflowHidden] : []),
  ...(isNil(opacity) ? [] : [{ opacity }]),
  ...(absolute ? [shapeStyle.absolute] : []),
  ...(relative ? [shapeStyle.relative] : []),
  ...(absoluteTop ? [shapeStyle.absoluteTop] : []),
  ...(absoluteBottom ? [shapeStyle.absoluteBottom] : []),
  ...(absoluteLeft ? [shapeStyle.absoluteLeft] : []),
  ...(absoluteFill ? [shapeStyle.absoluteFill] : []),
  ...(absoluteRight ? [shapeStyle.absoluteRight] : []),
  ...(above ? [shapeStyle.above] : []),
  ...(below ? [shapeStyle.below] : []),
  ...(isNil(top) ? [] : [{ top }]),
  ...(isNil(bottom) ? [] : [{ bottom }]),
  ...(isNil(left) ? [] : [{ left }]),
  ...(isNil(right) ? [] : [{ right }]),
  ...(isMinimized ? [shapeStyle.minimized] : []),
];
