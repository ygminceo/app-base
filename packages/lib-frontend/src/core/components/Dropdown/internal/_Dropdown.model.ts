import { DropdownProps } from '@lib/frontend/core/components/Dropdown/Dropdown.model';

export interface _DropdownProps extends Omit<DropdownProps, 'width' | 'height' | 'header'> {}
