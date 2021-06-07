import { _useForm } from '@lib/frontend/core/hooks/useForm/internal/_useForm';
import {
  FormErrorData,
  FormValidators,
  UseFormProps,
  UseFormReturns,
} from '@lib/frontend/core/hooks/useForm/useForm.model';
import { FormSchema } from '@lib/common/core/models';
import { every, get, isEmpty, keys, reduce, set, unset, values } from 'lodash';
import { useState } from 'react';

export const useForm = <F extends FormSchema>({
  initialValues,
  onSubmit,
  validators,
}: UseFormProps<F>): UseFormReturns<F> => {
  const [filledState, setFilledState] = useState<{ [key: string]: boolean }>(
    reduce(keys(validators), (result, k) => ({ ...result, [k]: false }), {}),
  );

  const { handleChange, ...returns } = _useForm({
    initialValues,
    onSubmit,
    onValidate: (data) =>
      reduce<FormValidators<F>, FormErrorData<F>>(
        validators,
        (result, validator, k) => {
          const error = validator && validator(get(data, k), data);
          error && error.length ? set(result, k, error) : unset(result, k);
          return result;
        },
        {},
      ),
  });

  return {
    ...returns,
    isFilled: every(values(filledState), Boolean),
    handleChange: (field: string) => (value: any) => {
      setFilledState({ ...filledState, [field]: !isEmpty(value) });
      return handleChange(field)(value);
    },
  };
};
