import { every, get, isEmpty, isFunction, reduce, set, unset, values } from 'lodash';
import { useState } from 'react';
import { FormModel } from '@lib/common/core/models';
import { _useForm } from '@lib/frontend/core/hooks/useForm/internal/_useForm';
import {
  FormErrorModel,
  FormValidatorsModel,
  UseFormParamsModel,
  UseFormReturnsModel,
} from '@lib/frontend/core/hooks/useForm/useForm.model';

export const useForm = <F extends FormModel>({
  initialValues: initialValuesProps,
  onSubmit,
  validators,
}: UseFormParamsModel<F>): UseFormReturnsModel<F> => {
  const initialValues = isFunction(initialValuesProps) ? initialValuesProps() : initialValuesProps;

  const [filledState, setFilledState] = useState<{ [key: string]: boolean }>(
    reduce(
      validators,
      (result, v, k) => ({ ...result, [k]: !v || !v(initialValues[k], initialValues) }),
      {},
    ),
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
