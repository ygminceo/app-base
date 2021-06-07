import { Appearable, Text, Wrapper } from '@lib/frontend/core/components';
import { _TextField } from '@lib/frontend/core/components/TextField/internal/_TextField';
import { TextFieldProps } from '@lib/frontend/core/components/TextField/TextField.model';
import { useStyles, useUncontrolled } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';
import { isNumber, isString } from 'lodash';
import React, { useEffect, useRef } from 'react';

export const TextField = ({
  autoComplete,
  autoFocus,
  center,
  isDisabled,
  error,
  label,
  left,
  maxLength,
  noClear,
  onBlur,
  onChange,
  onDelete,
  onSubmit,
  placeholder,
  right,
  transparent,
  type,
  value,
  ...props
}: TextFieldProps) => {
  const { styles } = useStyles({ ...props }, []);
  const ref = useRef<any>();
  const { t } = useTranslation(['common']);
  const [fieldValue, setFieldValue] = useUncontrolled<string>(value, onChange, '');
  const transition = useTheme('animation.transition');

  useEffect(() => {
    const focus =
      autoFocus !== undefined &&
      setTimeout(() => ref.current?.focus(), isNumber(autoFocus) ? autoFocus : transition);
    return () => {
      focus && clearTimeout(focus);
    };
  }, [autoFocus]);

  return (
    <Wrapper fullWidth relative spacingTight>
      <_TextField
        ref={ref}
        value={fieldValue}
        center={center}
        onBlur={onBlur}
        onChange={setFieldValue}
        onDelete={onDelete}
        onEscape={noClear ? undefined : () => setFieldValue('')}
        autoComplete={autoComplete}
        isDisabled={isDisabled}
        onSubmit={onSubmit}
        error={error}
        label={label}
        left={left}
        right={right}
        maxLength={maxLength}
        placeholder={placeholder}
        style={styles}
        transparent={transparent}
        type={type}
        noClear={noClear}
      />
      <Appearable isVisible={isString(error) && error.length > 0}>
        <Text error small pLeftTight pRightTight>
          {t(error as string)}
        </Text>
      </Appearable>
    </Wrapper>
  );
};
