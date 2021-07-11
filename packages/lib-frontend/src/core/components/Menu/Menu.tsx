import { get, isFunction, map } from 'lodash';
import React, { cloneElement, useCallback, useState } from 'react';
import { COMMON } from '@lib/common/core/constants';
import { headerStyle } from '@lib/frontend/app/components/Header/Header.style';
import { Divider, Icon, Pressable, Text, Wrapper } from '@lib/frontend/core/components';
import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import { IconText } from '@lib/frontend/core/components/IconText/IconText';
import {
  DividerOptionModel,
  MenuOptionModel,
  MenuProps,
} from '@lib/frontend/core/components/Menu/Menu.model';
import { getMenuOptionModelStyle } from '@lib/frontend/core/components/Menu/Menu.style';
import { SelectableOptionModel } from '@lib/frontend/core/components/SelectField/SelectField.model';
import { TextField } from '@lib/frontend/core/components/TextField/TextField';
import { useSearch, useStyles } from '@lib/frontend/core/hooks';
import { promisify } from '@lib/frontend/core/utils/promisify/promisify';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { useRouter } from '@lib/frontend/routing/hooks';

export const Menu = ({
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
  ...props
}: MenuProps) => {
  const { t } = useTranslation([COMMON]);
  const { search } = useSearch(optionsProp, ['label', 'value']);
  const { styles } = useStyles(props);
  const { styles: menuOptionStyles } = useStyles({}, [getMenuOptionModelStyle]);
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<MenuOptionModel[]>(optionsProp);
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

  const handlePress = (option: SelectableOptionModel) => {
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
    const selectedValue = (selectedOption as SelectableOptionModel).value;
    if (selectedValue) {
      onChange && onChange(selectedValue);
    }
    handleToggle(false);
  }, [options, onChange]);

  const searchbar = searchable ? (
    <>
      <TextField
        icon="search"
        label={t('common:labels.search')}
        style={headerStyle.style}
        autoFocus
        value={searchText}
        onChange={handleSearch}
        onSubmit={selectOnEnter && onChange ? handleEnter : undefined}
        transparent
      />
      <Divider />
    </>
  ) : undefined;

  return (
    <Dropdown
      style={styles}
      header={searchbar}
      anchor={anchorPressable}
      isOpen={isOpen}
      onClose={() => handleToggle(false)}
      width={width}
      height={height}
      fullWidth={fullWidth}>
      {options.length ? (
        map(options, (option: MenuOptionModel, i: number) => {
          if ((option as DividerOptionModel).divider) {
            return <Divider key={i} mTopTight mBottomTight />;
          }
          const {
            isDisabled,
            confirmMessage,
            icon,
            label,
            value,
            error,
          } = option as SelectableOptionModel;

          return (
            <Pressable
              key={i}
              onPress={() => handlePress(option as SelectableOptionModel)}
              isDisabled={isDisabled}
              confirmMessage={confirmMessage}>
              <Wrapper style={menuOptionStyles} row alignCenter spacing>
                <IconText icon={icon} error={error}>
                  {renderOption ? renderOption(option as SelectableOptionModel) : label}
                </IconText>
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
