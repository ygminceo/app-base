import { ArrowProps } from '@lib/frontend/core/components/Arrow/Arrow.model';
import { shapeStyle } from '@lib/frontend/core/styles/shape.style';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const getArrowStyle: StyleGetterModel<ArrowProps> = ({ rotate90, rotate180, rotate270 }) => [
  ...(rotate90
    ? [shapeStyle.rotate90]
    : rotate180
    ? [shapeStyle.rotate180]
    : rotate270
    ? [shapeStyle.rotate270]
    : []),
];
