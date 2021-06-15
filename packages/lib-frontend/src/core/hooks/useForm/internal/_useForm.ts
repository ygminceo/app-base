import {
  _UseFormParamsModel,
  _UseFormReturnsModel,
} from '@lib/frontend/core/hooks/useForm/internal/_useForm.model';
import { FormErrorModel } from '@lib/frontend/core/hooks/useForm/useForm.model';
import { promisify } from '@lib/frontend/core/utils/promisify/promisify';
import { FormModel } from '@lib/common/core/models';
import { useFormik } from 'formik';

export const _useForm = <F extends FormModel>({
  onSubmit,
  initialValues,
  onValidate,
}: _UseFormParamsModel<F>): _UseFormReturnsModel<F> => {
  const {
    handleSubmit,
    handleReset,
    setFieldValue,
    setValues,
    isSubmitting,
    values,
    setErrors,
    errors,
    isValid,
  } = useFormik<F>({
    initialValues,
    onSubmit: (data) =>
      promisify(onSubmit)(data).catch((e) => {
        setErrors((e && e.data) || e || {});
      }),
    validate: promisify(onValidate),
    validateOnChange: false,
  });

  return {
    handleSubmit: () => (isSubmitting ? null : handleSubmit()),
    handleChange: (field: string) => (value: any) => setFieldValue(field, value),
    handleReset: () => handleReset(null),
    isLoading: isSubmitting,
    values,
    setValues,
    errors: errors as FormErrorModel<F>,
    isValid,
  };
};
