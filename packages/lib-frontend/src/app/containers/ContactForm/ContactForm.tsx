import React from 'react';
import { ContactFormModel } from '@lib/common/app/models';
import { COMMON } from '@lib/common/core/constants';
import { USER } from '@lib/common/user/constants';
import {
  CONTACT_FORM_INITIAL_VALUES,
  CONTACT_FORM_VALIDTATORS,
} from '@lib/frontend/app/containers/ContactForm/ContactForm.constants';
import { ContactFormProps } from '@lib/frontend/app/containers/ContactForm/ContactForm.model';
import { Form, Text, TextField, Wrapper } from '@lib/frontend/core/components';
import { useForm, useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const ContactForm = ({ onSuccess, ...props }: ContactFormProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation([COMMON, USER]);

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isLoading,
    isFilled,
  } = useForm<ContactFormModel>({
    initialValues: CONTACT_FORM_INITIAL_VALUES,
    validators: CONTACT_FORM_VALIDTATORS,
    // onSubmit: (data) => onSubmit(data).then(() => onSuccess(data)),
    onSubmit: (data) => onSuccess(data),
  });

  return (
    <Wrapper grow spacing>
      <Text center large>
        {t('app:messages.contact')}
      </Text>
      <Form style={styles} onSubmit={handleSubmit} isDisabled={!isFilled} isLoading={isLoading}>
        <TextField
          label={t('user:labels.email')}
          type="email"
          icon="email"
          autoFocus
          error={errors.email}
          value={values.email}
          onChange={handleChange('email')}
          isDisabled={isLoading}
        />
        <TextField
          label={t('app:labels.contactDetail')}
          numberOfLines={5}
          icon="ear"
          error={errors.detail}
          value={values.detail}
          onChange={handleChange('detail')}
          isDisabled={isLoading}
        />
      </Form>
    </Wrapper>
  );
};
