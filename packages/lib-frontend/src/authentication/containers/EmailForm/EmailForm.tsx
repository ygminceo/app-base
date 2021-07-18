import React from 'react';
import { AUTHENTICATION } from '@lib/common/authentication/constants';
import { EmailFormModel } from '@lib/common/authentication/models';
import { COMMON } from '@lib/common/core/constants';
import {
  EMAIL_FORM_INITIAL_VALUES,
  EMAIL_FORM_VALIDATORS,
} from '@lib/frontend/authentication/containers/EmailForm/EmailForm.constants';
import { EmailFormProps } from '@lib/frontend/authentication/containers/EmailForm/EmailForm.model';
import { Form, Text, TextField, Wrapper } from '@lib/frontend/core/components';
import { useForm, useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const EmailForm = ({ onSubmit, onSuccess, ...props }: EmailFormProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation([AUTHENTICATION, COMMON]);

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
    onSubmit: (data) => onSubmit(data).then(() => onSuccess(data)),
  });

  return (
    <Wrapper style={styles} grow spacing center alignCenter>
      <Text large center>
        {t('authentication:messages.welcome')}
      </Text>
      <Form isLoading={isLoading} onSubmit={handleSubmit} isDisabled={!isFilled}>
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
    </Wrapper>
  );
};
