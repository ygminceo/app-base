import { ReactElement } from 'react';
import { TrackableProps } from '@lib/frontend/analytics/containers/Trackable/Trackable.model';
import { DropdownProps } from '@lib/frontend/core/components/Dropdown/Dropdown.model';
import { FieldProps } from '@lib/frontend/core/components/Field/Field.model';
import { PressableProps } from '@lib/frontend/core/components/Pressable/Pressable.model';
import { SelectableOptionModel } from '@lib/frontend/core/components/SelectField/SelectField.model';
import { StyledProps } from '@lib/frontend/core/styles/style.model';

export interface DividerOptionModel {
  divider: true;
}

export type MenuOptionModel = SelectableOptionModel | DividerOptionModel;

export interface MenuProps
  extends Pick<DropdownProps, 'width' | 'height' | 'fullWidth'>,
    Pick<FieldProps<string>, 'value' | 'onChange'>,
    StyledProps,
    TrackableProps {
  options: MenuOptionModel[];
  renderOption?(option: SelectableOptionModel): string;
  renderValue?(option: SelectableOptionModel): string;
  anchor: ReactElement<PressableProps> | ((open: boolean) => ReactElement<PressableProps>);
  searchable?: boolean;
  selectOnEnter?: boolean;
}
