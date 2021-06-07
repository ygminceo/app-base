import {
  _UseFormProps,
  _UseFormReturns,
} from '@lib/frontend/core/hooks/useForm/internal/_useForm.model';
import { FormErrorData } from '@lib/frontend/core/hooks/useForm/useForm.model';
import { promisify } from '@lib/frontend/core/utils/promisify/promisify';
import { FormSchema } from '@lib/common/core/models';
import { useFormik } from 'formik';

export const _useForm = <F extends FormSchema>({
  onSubmit,
  initialValues,
  onValidate,
}: _UseFormProps<F>): _UseFormReturns<F> => {
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
    errors: errors as FormErrorData<F>,
    isValid,
  };
};
