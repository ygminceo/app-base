import { Icon, Menu, Wrapper } from '@lib/frontend/core/components';
import {
  SelectableOption,
  SelectFieldProps
} from '@lib/frontend/core/components/SelectField/SelectField.model';
import { TextField } from '@lib/frontend/core/components/TextField/TextField';
import { useStyles, useUncontrolled } from '@lib/frontend/core/hooks';
import { find } from 'lodash';
import React from 'react';

export const SelectField = <T,>({
  options,
  isDisabled,
  error,
  label,
  onChange,
  value,
  defaultValue,
  renderOption,
  renderValue,
  searchable,
  selectOnEnter,
  ...props
}: SelectFieldProps) => {
  const { styles } = useStyles(props);
  const [fieldValue, onFieldChange] = useUncontrolled<string>(value, onChange, defaultValue);
  const selectedOption = find(options, { value: fieldValue }) as SelectableOption;
  return (
    <Menu
      fullWidth
      options={options}
      renderOption={renderOption}
      value={fieldValue}
      onChange={onFieldChange}
      searchable={searchable}
      selectOnEnter
      anchor={(open: boolean) => (
        <Wrapper style={styles} relative fullWidth>
          <Wrapper absoluteFill above />
          <TextField
            noClear
            right={
              <Wrapper
                style={{ transform: [open ? { rotate: '-180deg' } : { rotate: '0deg' }] }}
                animatable={{ transition: ['rotate'] }}
                center
                alignCenter>
                <Icon icon="chevron-down" />
              </Wrapper>
            }
            label={label}
            error={error}
            value={
              selectedOption
                ? renderValue
                  ? renderValue(selectedOption)
                  : selectedOption.label
                : undefined
            }
          />
        </Wrapper>
      )}
    />
  );
};
