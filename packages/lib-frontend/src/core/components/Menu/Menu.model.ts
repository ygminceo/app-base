import { ReactElement } from 'react';
import { DropdownProps } from '@lib/frontend/core/components/Dropdown/Dropdown.model';
import { FieldProps } from '@lib/frontend/core/components/Field/Field.model';
import { PressableProps } from '@lib/frontend/core/components/Pressable/Pressable.model';
import { SelectableOptionModel } from '@lib/frontend/core/components/SelectField/SelectField.model';

export interface DividerOptionModel {
  divider: true;
}

export type MenuOptionModel = SelectableOptionModel | DividerOptionModel;

export interface MenuProps
  extends Pick<DropdownProps, 'width' | 'height' | 'fullWidth'>,
    Pick<FieldProps<string>, 'value' | 'onChange'> {
  options: MenuOptionModel[];
  renderOption?(option: SelectableOptionModel): string;
  renderValue?(option: SelectableOptionModel): string;
  anchor: ReactElement<PressableProps> | ((open: boolean) => ReactElement<PressableProps>);
  searchable?: boolean;
  selectOnEnter?: boolean;
}
