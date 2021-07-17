import { RotatableProps } from '@lib/frontend/core/components/Rotatable/Rotatable.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const getRotatableStyle: StyleGetterModel<RotatableProps> = ({ x, y, z }) => [
  {
    transform: [
      { rotateX: `${x || 0}deg` },
      { rotateY: `${y || 0}deg` },
      { rotateZ: `${z || 0}deg` },
    ],
  },
];
