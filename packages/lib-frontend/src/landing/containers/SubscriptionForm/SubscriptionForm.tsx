import React from 'react';
import { EmailFormModel } from '@lib/common/authentication/models';
import { COMMON } from '@lib/common/core/constants';
import { Form, TextField } from '@lib/frontend/core/components';
import { useForm, useStyles } from '@lib/frontend/core/hooks';
import {
  SUBSCRIPTION_FORM_INITIAL_VALUES,
  SUBSCRIPTION_FORM_VALIDATORS,
} from '@lib/frontend/landing/containers/SubscriptionForm/SubscriptionForm.constants';
import { SubscriptionFormProps } from '@lib/frontend/landing/containers/SubscriptionForm/SubscriptionForm.model';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const SubscriptionForm = ({ ...props }: SubscriptionFormProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation([COMMON]);

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isLoading,
    isFilled,
  } = useForm<EmailFormModel>({
    initialValues: SUBSCRIPTION_FORM_INITIAL_VALUES,
    validators: SUBSCRIPTION_FORM_VALIDATORS,
    onSubmit: (data) => console.warn(data),
    // onSubmit: (data) => onSubmit(data).then(() => onSuccess(data)),
  });

  return (
    <Form style={styles} isLoading={isLoading} onSubmit={handleSubmit} isDisabled={!isFilled}>
      <TextField
        autoFocus
        icon="email"
        label={t('common:labels.email')}
        value={values.email}
        error={errors.email}
        onChange={handleChange('email')}
        onSubmit={handleSubmit}
        isDisabled={isLoading}
      />
    </Form>
  );
};
