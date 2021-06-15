import { CatalogGroupModel } from '@lib/frontend/admin/containers/Catalog/Catalog.model';
import { OtpField } from '@lib/frontend/authentication/components';
import { OtpFieldProps } from '@lib/frontend/authentication/components/OtpField/OtpField.model';
import { PhoneField } from '@lib/frontend/authentication/components/PhoneField/PhoneField';
import { PhoneFieldProps } from '@lib/frontend/authentication/components/PhoneField/PhoneField.model';
import {
  Button,
  Icon,
  SelectField,
  Text,
  TextField,
  Wrapper
} from '@lib/frontend/core/components';
import { ButtonProps } from '@lib/frontend/core/components/Button/Button.model';
import { IconProps } from '@lib/frontend/core/components/Icon/Icon.model';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import { MenuOptionModel, MenuProps } from '@lib/frontend/core/components/Menu/Menu.model';
import {
  SelectableOptionModel,
  SelectFieldProps
} from '@lib/frontend/core/components/SelectField/SelectField.model';
import { TextProps } from '@lib/frontend/core/components/Text/Text.model';
import { TextFieldProps } from '@lib/frontend/core/components/TextField/TextField.model';
import { WrapperProps } from '@lib/frontend/core/components/Wrapper/Wrapper.model';
import React from 'react';

const ICON = 'times';

const SELECT_OPTIONS: SelectableOptionModel[] = [
  { label: 'option 1', value: '1' },
  { label: 'option 2', value: '2' },
  { label: 'option 3', value: '3' },
];

const MENU_OPTIONS: MenuOptionModel[] = [...SELECT_OPTIONS, { divider: true }];

const texts: CatalogGroupModel<TextProps> = {
  component: Text,
  components: [
    { props: { children: 'default' } },
    { props: { children: 'small', small: true } },
    { props: { children: 'large', large: true } },
    { props: { children: 'xlarge', xlarge: true } },
    { props: { children: 'capitalized', capitalize: true } },
    { props: { children: 'uppercase', uppercase: true } },
    { props: { children: 'contrast', contrast: true } },
    { props: { children: 'sucess', success: true } },
    { props: { children: 'error', error: true } },
    { props: { children: 'primary', primary: true } },
    { props: { children: 'bold', bold: true } },
    { props: { children: 'title', title: true } },
    { props: { children: 'subtitle', subtitle: true } },
  ],
};

const wrapperChildren = [
  <Wrapper key={0} width={30} height={30} backgroundColor="#bdfdff" border />,
  <Wrapper key={1} width={30} height={30} backgroundColor="#bdfdff" border />,
  <Wrapper key={2} width={30} height={30} backgroundColor="#bdfdff" border />,
];

const wrappers: CatalogGroupModel<WrapperProps> = {
  component: Wrapper,
  props: { width: 150, height: 150, children: wrapperChildren, backgroundColor: '#00f9ff' },
  components: [
    { props: {} },
    { props: { border: true } },
    { props: { round: true } },
    { props: { shadow: true } },
    { props: { p: true } },
    { props: { pTight: true } },
    { props: { m: true } },
    { props: { mTight: true } },
    { props: { spacing: true } },
    { props: { spacingTight: true } },
    { props: { row: true } },
    { props: { row: true, shadow: true } },
    { props: { row: true, spacing: true } },
    { props: { row: true, spacingTight: true } },
  ],
};

const buttons: CatalogGroupModel<ButtonProps> = {
  component: Button,
  props: { onPress: () => null },
  components: [
    { props: { children: 'default' } },
    { props: { children: 'success', success: true } },
    { props: { children: 'error', error: true } },
    { props: { children: 'transparent', transparent: true } },
    { props: { children: 'small', small: true } },
    { props: { children: 'disabled', isDisabled: true } },
    { props: { children: 'loading', isLoading: true } },
    { props: { children: 'icon', icon: ICON } },
    { props: { children: 'message', confirmMessage: 'message' } },
    {
      props: {
        children: 'async',
        onPress: () => new Promise((resolve) => setTimeout(resolve, 3000)),
      },
    },
  ],
};

const icons: CatalogGroupModel<IconProps> = {
  component: Icon,
  props: { icon: ICON },
  components: [
    { props: {} },
    { props: { small: true } },
    { props: { large: true } },
    { props: { xlarge: true } },
    { props: { onPress: () => null } },
    { props: { small: true, onPress: () => null } },
    { props: { large: true, onPress: () => null } },
    { props: { xlarge: true, onPress: () => null } },
  ],
};

const textfields: CatalogGroupModel<TextFieldProps> = {
  component: TextField,
  components: [
    { props: {} },
    { props: { label: 'label' } },
    { props: { type: 'number', label: 'number' } },
    { props: { isDisabled: true, label: 'disabled' } },
    { props: { transparent: true, label: 'transparent' } },
    { props: { autoComplete: 'email', label: 'auto complete' } },
    { props: { error: 'error', label: 'error' } },
    { props: { maxLength: 5, label: 'max length' } },
    { props: { left: <Icon icon={ICON} />, label: 'left icon' } },
    { props: { right: <Icon icon={ICON} />, label: 'right icon' } },
    { props: { noClear: true, label: 'no clear' } },
  ],
};

const menus: CatalogGroupModel<MenuProps> = {
  component: Menu,
  components: [
    { props: { anchor: <Button>Default</Button>, options: MENU_OPTIONS } },
    { props: { anchor: <Button>Selected</Button>, options: MENU_OPTIONS, value: '1' } },
    { props: { anchor: <Button>Width</Button>, options: MENU_OPTIONS, value: '2', width: 250 } },
  ],
};

const selectFields: CatalogGroupModel<SelectFieldProps> = {
  component: SelectField,
  components: [
    { props: { options: SELECT_OPTIONS } },
    { props: { options: SELECT_OPTIONS, label: 'label' } },
    { props: { options: SELECT_OPTIONS, label: 'default value', defaultValue: '1' } },
    { props: { options: SELECT_OPTIONS, label: 'searchable', searchable: true } },
  ],
};

const otpFields: CatalogGroupModel<OtpFieldProps> = {
  component: OtpField,
  components: [{ props: { autoFocus: true } }],
};

const phoneFields: CatalogGroupModel<PhoneFieldProps> = {
  component: PhoneField,
  components: [{ props: {} }],
};

export const CATALOG_GROUPS: CatalogGroupModel<any>[] = [
  texts,
  wrappers,
  buttons,
  textfields,
  icons,
  selectFields,
  menus,
  otpFields,
  phoneFields,
];
