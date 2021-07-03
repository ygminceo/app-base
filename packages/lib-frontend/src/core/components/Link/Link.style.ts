import { colorStyle } from '@lib/frontend/core/styles/color.style';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const getLinkStyle: StyleGetterModel<any> = ({ isActive }) => [
  isActive ? colorStyle.primaryDark : colorStyle.primary,
];
