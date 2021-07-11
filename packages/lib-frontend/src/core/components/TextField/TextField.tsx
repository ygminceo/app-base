import { isNumber, isString } from 'lodash';
import React, { forwardRef, RefObject, useEffect, useRef } from 'react';
import { COMMON } from '@lib/common/core/constants';
import { Appearable, IconText, Wrapper } from '@lib/frontend/core/components';
import { TextFieldProps } from '@lib/frontend/core/components/TextField/TextField.model';
import { _TextField } from '@lib/frontend/core/components/TextField/internal/_TextField';
import { useStyles, useUncontrolled } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

export const TextField = forwardRef<RefObject<any>, TextFieldProps>(
  (
    {
      autoComplete,
      autoFocus,
      center,
      isDisabled,
      error,
      label,
      left,
      maxLength,
      icon,
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
      numberOfLines,
      ...props
    },
    ref,
  ) => {
    const { styles } = useStyles({ ...props }, []);

    const inputRef = useRef<any>();

    const { t } = useTranslation([COMMON]);
    const [fieldValue, setFieldValue] = useUncontrolled<string>(value, onChange, '');
    const transition = useTheme<number>('animation.transition');

    useEffect(() => {
      const focus =
        autoFocus !== undefined &&
        setTimeout(
          () => ((ref || inputRef) as RefObject<any>).current?.focus(),
          isNumber(autoFocus) ? autoFocus : transition,
        );
      return () => {
        focus && clearTimeout(focus);
      };
    }, [autoFocus]);

    return (
      <Wrapper fullWidth relative spacingTight>
        <_TextField
          ref={ref || inputRef}
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
          icon={icon}
          left={left}
          right={right}
          maxLength={maxLength}
          placeholder={placeholder}
          style={styles}
          transparent={transparent}
          type={type}
          noClear={noClear}
          numberOfLines={numberOfLines}
        />
        <Appearable isVisible={isString(error) && error.length > 0}>
          <IconText error small pLeftTight icon="exclamation-circle">
            {t(error as string)}
          </IconText>
        </Appearable>
      </Wrapper>
    );
  },
);
