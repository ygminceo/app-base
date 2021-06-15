import { FormModel } from '@lib/common/core/models';
import { FormStepsProps } from '@lib/frontend/core/components/FormSteps/FormSteps.model';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { useForm, useStyles } from '@lib/frontend/core/hooks';
import { promisify } from '@lib/frontend/core/utils/promisify/promisify';
import React, { useCallback, useMemo, useState } from 'react';

export const FormSteps = ({ forms, ...props }: FormStepsProps) => {
  const { styles } = useStyles(props);
  const [step, setStep] = useState<number>(0);
  const [dataAll, setDataAll] = useState<FormModel>({});
  const isLastStep = useMemo(() => step === forms.length - 1, [step]);

  const form = forms[step];

  const onSubmit = useCallback(
    (data) => {
      setDataAll({ ...dataAll, ...data });
      return promisify(form.onSubmit)(data, { ...dataAll, ...data }).then(() =>
        isLastStep ? null : setStep(step + 1),
      );
    },
    [step],
  );

  const { values, errors, handleChange, handleSubmit, handleReset, isLoading, isValid } = useForm({
    initialValues: form.initialValues,
    validators: form.validators,
    onSubmit: onSubmit,
  });

  return (
    <Wrapper style={styles}>
      {form.component({
        values,
        dataAll,
        errors,
        handleChange,
        handleSubmit,
        handleReset: () => {
          handleReset();
          step > 0 && setStep(step - 1);
        },
        isLoading,
        isValid,
      })}
    </Wrapper>
  );
};
