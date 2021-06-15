import { FormModel } from '@lib/common/core/models';
import { _useForm } from '@lib/frontend/core/hooks/useForm/internal/_useForm';
import {
  FormErrorModel,
  FormValidatorsModel,
  UseFormParamsModel,
  UseFormReturnsModel,
} from '@lib/frontend/core/hooks/useForm/useForm.model';
import { every, get, isEmpty, keys, reduce, set, unset, values } from 'lodash';
import { useState } from 'react';

export const useForm = <F extends FormModel>({
  initialValues,
  onSubmit,
  validators,
}: UseFormParamsModel<F>): UseFormReturnsModel<F> => {
  const [filledState, setFilledState] = useState<{ [key: string]: boolean }>(
    reduce(keys(validators), (result, k) => ({ ...result, [k]: false }), {}),
  );

  const { handleChange, ...returns } = _useForm({
    initialValues,
    onSubmit,
    onValidate: (data) =>
      reduce<FormValidatorsModel<F>, FormErrorModel<F>>(
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
