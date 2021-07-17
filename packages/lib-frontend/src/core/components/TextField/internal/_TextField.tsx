import { isNil, size } from 'lodash';
import React, { forwardRef, RefObject, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput as NativeTextInput,
  TextInputKeyPressEventData,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Appearable, Icon, IconText, Text, Wrapper } from '@lib/frontend/core/components';
import { _TextFieldProps } from '@lib/frontend/core/components/TextField/internal/_TextField.model';
import { useStyles, useTextStyles } from '@lib/frontend/core/hooks';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

// const getKeyboardType = (type?: InputModel) => {
//   switch (type) {
//     case 'number':
//       return 'numeric';
//     case 'email':
//       return 'email-address';
//     case 'tel':
//       return 'phone-pad';
//     default:
//       return 'default';
//   }
// };

// const getAutoCompleteType = (autoComplete?: string | boolean, type?: InputModel) => {
//   if (autoComplete === false) {
//     return 'off';
//   }
//   switch (type) {
//     case 'password':
//       return 'password';
//     case 'email':
//       return 'email';
//     default:
//       return 'off';
//   }
// };

// const getTextContentType = (autoComplete?: string | boolean, type?: InputModel) => {
//   if (autoComplete === false) {
//     return 'none';
//   }
//   switch (type) {
//     case 'password':
//       return 'password';
//     case 'email':
//       return 'email';
//     default:
//       return 'none';
//   }
// };

export const _TextField = forwardRef<RefObject<any>, _TextFieldProps>(
  (
    {
      autoComplete,
      autoFocus,
      isDisabled,
      error,
      label,
      icon,
      left,
      maxLength,
      onBlur,
      onFocus,
      onChange,
      onDelete,
      onEscape,
      onSubmit,
      placeholder,
      right,
      noClear,
      transparent,
      type,
      value,
      center,
      numberOfLines,
      ...props
    },
    ref,
  ) => {
    const { styles } = useStyles(props);
    const { styles: textStyles } = useTextStyles({ center }, []);
    const [focused, setFocused] = useState<boolean>(false);
    const colorPrimary = useTheme<string>('colors.primary.main');
    const colorBorder = useTheme<string>('colors.border');
    const isError = error === true || size(error as any) > 0;
    return (
      <Wrapper
        style={styles}
        round
        fill={!transparent}
        muted={isDisabled}
        center
        overflowHidden
        relative
        border={!transparent}
        borderError={isError}
        borderPrimary={focused}>
        <Wrapper absoluteBottom above fill muted={isDisabled} height={3} />
        <TextInput
          // @ts-ignore
          ref={ref}
          style={[textStyles]}
          mode="flat"
          dense
          underlineColor="transparent"
          underlineColorAndroid="transparent"
          theme={{
            animation: { scale: 1 },
            colors: { background: 'transparent', primary: colorPrimary, placeholder: colorBorder },
          }}
          disabled={isDisabled}
          error={isError}
          // @ts-ignore
          label={
            icon ? (
              <IconText
                icon={icon}
                primary={!isError && focused}
                error={isError}
                color={colorBorder}
                animatable={{ transition: ['color'] }}>
                {label}
              </IconText>
            ) : (
              label
            )
          }
          value={value}
          onBlur={() => {
            setFocused(false);
            onBlur && onBlur();
          }}
          onFocus={() => {
            setFocused(true);
            onFocus && onFocus();
          }}
          multiline={(numberOfLines as number) > 1}
          numberOfLines={numberOfLines}
          onSubmitEditing={onSubmit}
          onChangeText={onChange}
          maxLength={maxLength}
          placeholder={placeholder}
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
          secureTextEntry={type === 'password'}
          // textContentType: getTextContentType(autoComplete, type),
          // autoCompleteType: getAutoCompleteType(autoComplete, type),
          // keyboardType: getKeyboardType(type),
          onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
            switch (e.nativeEvent.key) {
              case 'Backspace':
                return onDelete && onDelete();
              case 'Escape':
                return onEscape && onEscape();
            }
          }}
          render={(inputProps) => (
            <Wrapper row pLeftTight={!isNil(left)} center alignCenter>
              <Wrapper row alignEnd>
                {left}
              </Wrapper>
              <NativeTextInput {...inputProps} style={[...inputProps.style, textStyles]} />
              {(!noClear || right) && (
                <Wrapper row center alignCenter pRightTight>
                  {!noClear && !numberOfLines && (
                    <Appearable isVisible={size(value) > 0}>
                      <Icon
                        icon="times"
                        onPress={() => onChange && onChange('')}
                        isDisabled={isDisabled}
                      />
                    </Appearable>
                  )}
                  {right}
                </Wrapper>
              )}
            </Wrapper>
          )}
        />

        {maxLength && (
          <Wrapper absoluteRight pTopTight pRightTight>
            <Appearable isVisible={focused}>
              <Text small color={colorBorder}>{`${(value || '').length}/${maxLength}`}</Text>
            </Appearable>
          </Wrapper>
        )}
      </Wrapper>
    );
  },
);
