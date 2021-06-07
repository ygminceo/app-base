import { DropdownProps } from '@lib/frontend/core/components/Dropdown/Dropdown.model';
import { FieldProps } from '@lib/frontend/core/components/Field/Field.model';
import { PressableProps } from '@lib/frontend/core/components/Pressable/Pressable.model';
import { SelectableOption } from '@lib/frontend/core/components/SelectField/SelectField.model';
import { ReactElement } from 'react';

export interface DividerOption {
  divider: true;
}

export type MenuOption = SelectableOption | DividerOption;

export interface MenuProps
  extends Pick<DropdownProps, 'width' | 'height' | 'fullWidth'>,
    Pick<FieldProps<string>, 'value' | 'onChange'> {
  options: MenuOption[];
  renderOption?(option: SelectableOption): string;
  renderValue?(option: SelectableOption): string;
  anchor: ReactElement<PressableProps> | ((open: boolean) => ReactElement<PressableProps>);
  searchable?: boolean;
  selectOnEnter?: boolean;
}
