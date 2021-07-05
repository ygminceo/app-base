import React, { useState } from 'react';
import { AUTHENTICATION, OTP_CREATE, OTP_LENGTH } from '@lib/common/authentication/constants';
import { OtpField } from '@lib/frontend/authentication/components';
import {
  OTP_FORM_INITIAL_VALUES,
  OTP_FORM_VALIDATORS,
} from '@lib/frontend/authentication/containers/OtpForm/OtpForm.constants';
import { OtpFormProps } from '@lib/frontend/authentication/containers/OtpForm/OtpForm.model';
import { AsyncWrapper, Link, Text, Wrapper } from '@lib/frontend/core/components';
import { useForm, useQuery, useStyles } from '@lib/frontend/core/hooks';
import { promisify } from '@lib/frontend/core/utils/promisify/promisify';
import { Trans } from '@lib/frontend/locale/components';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const OtpForm = ({ username, onSubmit, onSuccess, onSend, ...props }: OtpFormProps) => {
  const { styles } = useStyles(props);
  const { t } = useTranslation([AUTHENTICATION]);
  const [retried, setRetried] = useState<boolean>(false);

  const { isLoading: isQueryLoading, query } = useQuery<void>(OTP_CREATE, () =>
    promisify(onSend)(username).finally(() => {
      handleReset();
      setRetried(true);
    }),
  );

  const _handleChange = (value: string) => {
    handleChange('otp')(value);
    if (value.length === OTP_LENGTH) {
      setTimeout(handleSubmit);
    }
  };

  const { values, errors, handleChange, handleSubmit, isLoading, handleReset } = useForm({
    initialValues: OTP_FORM_INITIAL_VALUES,
    validators: OTP_FORM_VALIDATORS,
    onSubmit: (data) =>
      promisify(onSubmit)(data)
        .then(() => onSuccess(data))
        .finally(() => {
          handleReset();
        }),
  });

  return (
    <AsyncWrapper style={styles} grow spacing center isLoading={isLoading || isQueryLoading}>
      <Wrapper row wrap center>
        <Trans
          ns="authentication"
          i18nKey="messages.verifyEnter"
          values={{ username }}
          components={[<Text bold />]}
        />
      </Wrapper>
      <Wrapper row center>
        <OtpField autoFocus value={values.otp} error={errors.otp} onChange={_handleChange} />
      </Wrapper>
      <Wrapper row center spacingTight>
        <Text>{t('authentication:messages.verifyDidntGet')}</Text>
        {retried ? null : <Link onPress={query}>{t('authentication:labels.resend')}</Link>}
      </Wrapper>
    </AsyncWrapper>
  );
};
