import { shapeStyle } from '@lib/frontend/core/styles/shape.style';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const getExpandableStyle: StyleGetterModel<{ isOpen: boolean }> = ({ isOpen }) =>
  isOpen ? [shapeStyle.rotate90, shapeStyle.visible] : [shapeStyle.noRotate, shapeStyle.opaque];
