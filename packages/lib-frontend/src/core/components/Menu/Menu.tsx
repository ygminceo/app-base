import { Divider, Icon, Pressable, Text, Wrapper } from '@lib/frontend/core/components';
import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import {
  DividerOption,
  MenuOption,
  MenuProps,
} from '@lib/frontend/core/components/Menu/Menu.model';
import { getMenuOptionStyle } from '@lib/frontend/core/components/Menu/Menu.style';
import { SelectableOption } from '@lib/frontend/core/components/SelectField/SelectField.model';
import { TextField } from '@lib/frontend/core/components/TextField/TextField';
import { useSearch, useStyles } from '@lib/frontend/core/hooks';
import { promisify } from '@lib/frontend/core/utils/promisify/promisify';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { useRouter } from '@lib/frontend/routing/hooks';
import { get, isFunction, map } from 'lodash';
import React, { cloneElement, useCallback, useState } from 'react';

export const Menu = <T,>({
  anchor,
  fullWidth,
  height,
  onChange,
  options: optionsProp,
  renderOption,
  searchable,
  selectOnEnter,
  value: menuValue,
  width,
}: MenuProps) => {
  const { t } = useTranslation(['common']);
  const { search } = useSearch(optionsProp, ['label', 'value']);
  const { styles: menuOptionStyles } = useStyles({}, [getMenuOptionStyle]);
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<MenuOption[]>(optionsProp);
  const [searchText, setSearchText] = useState<string>('');

  const handleToggle = (toggle: boolean) => {
    setOptions(optionsProp);
    setSearchText('');
    setIsOpen(toggle);
  };

  let anchorPressable = isFunction(anchor) ? anchor(isOpen) : anchor;
  anchorPressable = cloneElement(anchorPressable, {
    onPress: () => {
      const onPress = get(anchor, 'props.onPress');
      promisify(onPress)().then(() => handleToggle(!isOpen));
    },
  });

  const handlePress = (option: SelectableOption) => {
    option.onPress ? option.onPress() : onChange && onChange(option.value);
    option.pathname && router.push(option.pathname);
    handleToggle(false);
  };

  const handleSearch = useCallback(
    (value) => {
      setSearchText(value);
      setOptions(search(value));
    },
    [search, setSearchText, setSearchText],
  );

  const handleEnter = useCallback(() => {
    const selectedOption = options && options[0];
    const selectedValue = (selectedOption as SelectableOption).value;
    if (selectedValue) {
      onChange && onChange(selectedValue);
    }
    handleToggle(false);
  }, [options, onChange]);

  const searchbar = searchable ? (
    <>
      <TextField
        autoFocus
        value={searchText}
        onChange={handleSearch}
        onSubmit={selectOnEnter && onChange ? handleEnter : undefined}
        transparent
        placeholder={t('common:labels.search')}
      />
      <Divider />
    </>
  ) : undefined;

  return (
    <Dropdown
      header={searchbar}
      anchor={anchorPressable}
      isOpen={isOpen}
      onClose={() => handleToggle(false)}
      width={width}
      height={height}
      fullWidth={fullWidth}>
      {options.length ? (
        map(options, (option: MenuOption, i: number) => {
          if ((option as DividerOption).divider) {
            return <Divider key={i} mTopTight mBottomTight />;
          }
          const { isDisabled, confirmMessage, icon, label, value, error } =
            option as SelectableOption;

          return (
            <Pressable
              key={i}
              onPress={() => handlePress(option as SelectableOption)}
              isDisabled={isDisabled}
              confirmMessage={confirmMessage}>
              <Wrapper style={menuOptionStyles} row alignCenter spacing>
                {icon && <Icon icon={icon} error={error} />}
                <Text error={error}>
                  {renderOption ? renderOption(option as SelectableOption) : label}
                </Text>
                {value === menuValue && <Icon mLeftAuto icon="check" error={error} />}
              </Wrapper>
            </Pressable>
          );
        })
      ) : (
        <Pressable isDisabled>
          <Text muted>{t('common:labels.noResult')}</Text>
        </Pressable>
      )}
    </Dropdown>
  );
};
