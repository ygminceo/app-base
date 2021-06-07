import { OTP_LENGTH } from '@lib/common/authentication/constants';
import { OtpFieldProps } from '@lib/frontend/authentication/components/OtpField/OtpField.model';
import { otpFieldStyle } from '@lib/frontend/authentication/components/OtpField/OtpField.style';
import { Text, TextField, Wrapper } from '@lib/frontend/core/components';
import { useStyles, useUncontrolled } from '@lib/frontend/core/hooks';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';
import { chain, get, isEmpty, isString, last } from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';

export const OtpField = ({
  value,
  onChange,
  error,
  isDisabled,
  autoFocus,
  ...props
}: OtpFieldProps) => {
  const { styles } = useStyles(props);
  const [focused, setFocused] = useState<boolean>(false);
  const [fieldValue, setFieldValue] = useUncontrolled<string>(value, onChange, '');
  const currentSize = fieldValue.length;
  const transition = useTheme('animation.transition');

  useEffect(() => {
    const focus = autoFocus && setTimeout(() => setFocused(true), transition);
    return () => {
      focus && clearTimeout(focus);
    };
  }, [autoFocus]);

  const focus = useMemo(() => Math.max(Math.min(currentSize, OTP_LENGTH - 1), 0), [currentSize]);

  return (
    <Wrapper style={styles} relative spacingTight>
      <Wrapper row spacingTight>
        {chain(OTP_LENGTH)
          .range()
          .map((i: number) => {
            const currentFocused = i === focus;
            const currentCode = get(fieldValue, i);
            return (
              <Wrapper key={i} style={[otpFieldStyle.style]} relative>
                <TextField
                  isDisabled={isDisabled}
                  autoFocus={currentFocused && focused ? 0 : undefined}
                  noClear
                  center
                  type="number"
                  value={currentCode || ''}
                  error={!isEmpty(error)}
                  onBlur={currentFocused ? () => setFocused(false) : undefined}
                  onSubmit={currentFocused ? () => setFocused(false) : undefined}
                  onChange={(number: string) => {
                    if (!currentFocused) {
                      setFocused(true);
                    }
                    if (number && currentSize < OTP_LENGTH) {
                      const newValue = fieldValue + last(number);
                      setFieldValue && setFieldValue(newValue);
                    }
                  }}
                  onDelete={() => {
                    if (!currentFocused) {
                      setFocused(true);
                    }
                    if (currentSize) {
                      const newValue = fieldValue.substring(0, currentSize - 1);
                      setFieldValue(newValue);
                    }
                  }}
                  // onPaste={(data: any) => {
                  //   if (data && isInteger(toNumber(data)) && currentSize < length) {
                  //     const newValue = (fieldValue + data).substring(0, length);
                  //     setFieldValue(newValue);
                  //     setFieldValue(Math.min(size(newValue), length - 1));
                  //   }
                  // }}
                />
              </Wrapper>
            );
          })
          .value()}
      </Wrapper>

      <Wrapper absoluteFill above onPress={() => setFocused(true)} />

      {error && isString(error) && (
        <Text error small pLeftTight pRightTight>
          {error}
        </Text>
      )}
    </Wrapper>
  );
};
