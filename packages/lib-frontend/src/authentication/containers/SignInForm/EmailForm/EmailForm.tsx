import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { EmailFormModel } from '@lib/common/authentication/models';
import { otpCreateAction } from '@lib/frontend/authentication/actions/otpCreate/otpCreate.action';
import {
  EMAIL_FORM_INITIAL_VALUES,
  EMAIL_FORM_VALIDATORS,
} from '@lib/frontend/authentication/containers/SignInForm/EmailForm/EmailForm.constants';
import { EmailFormProps } from '@lib/frontend/authentication/containers/SignInForm/EmailForm/EmailForm.model';
import { Form, Text, TextField, Wrapper } from '@lib/frontend/core/components';
import { useForm, useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';
import { AppDispatchModel } from '@lib/frontend/root/stores/store';

export const EmailForm = ({ onSuccess, ...props }: EmailFormProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation(['authentication']);
  const dispatch = useDispatch<AppDispatchModel>();

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isLoading,
    isFilled,
  } = useForm<EmailFormModel>({
    initialValues: EMAIL_FORM_INITIAL_VALUES,
    validators: EMAIL_FORM_VALIDATORS,
    onSubmit: (data) =>
      dispatch(otpCreateAction({ username: data.emailAddress }))
        .then(unwrapResult)
        .then(() => onSuccess(data)),
  });

  return (
    <Wrapper style={styles} grow spacing center alignCenter>
      <Text large center>
        {t('authentication:messages.welcome')}
      </Text>
      <Form isLoading={isLoading} onSubmit={handleSubmit} style={styles} isDisabled={!isFilled}>
        <TextField
          autoFocus
          label={t('common:labels.emailAddress')}
          value={values.emailAddress}
          error={errors.emailAddress}
          onChange={handleChange('emailAddress')}
          onSubmit={handleSubmit}
        />
      </Form>
    </Wrapper>
  );
};
