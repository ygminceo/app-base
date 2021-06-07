import { FieldProps } from '@lib/frontend/core/components/Field/Field.model';
import { MenuProps } from '@lib/frontend/core/components/Menu/Menu.model';
import { PressableProps } from '@lib/frontend/core/components/Pressable/Pressable.model';
import { TextFieldProps } from '@lib/frontend/core/components/TextField/TextField.model';
import { ColorProps } from '@lib/frontend/core/styles/color.model';
import { RouteClass } from '@lib/frontend/routing/containers/Router/Router.model';
import { Optional } from 'utility-types';

export interface SelectableOption
  extends Pick<PressableProps, 'onPress' | 'isDisabled' | 'confirmMessage'>,
    Pick<ColorProps, 'error'>,
    Optional<Pick<RouteClass, 'pathname'>> {
  icon?: string;
  label?: string;
  value: string;
}

export interface SelectFieldProps
  extends Pick<MenuProps, 'renderOption' | 'renderValue' | 'searchable' | 'selectOnEnter'>,
    Pick<TextFieldProps, 'label' | 'error' | 'isDisabled'>,
    Pick<FieldProps<string>, 'value' | 'onChange' | 'defaultValue'> {
  options: SelectableOption[];
}
