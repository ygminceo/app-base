import { FormValidator } from '@lib/frontend/core/hooks/useForm/useForm.model';
import { tLazy } from '@lib/frontend/locale/utils/tLazy/tLazy';
import { FormSchema } from '@lib/common/core/models';

export const required: FormValidator<FormSchema> = (value: string) =>
  value ? undefined : tLazy('common.messages.required');

export const noNumberOrSpecialCharacter: FormValidator<FormSchema> = (value: any) =>
  required(value) ||
  (/[0-9~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(value) // eslint-disable-line no-useless-escape
    ? tLazy('common.messages.noNumberOrSpecialCharacter')
    : undefined);

export const validEmail: FormValidator<FormSchema> = (value: string) =>
  value && /\S+@\S+\.\S+/.test(value.toLowerCase())
    ? undefined
    : tLazy('common.messages.invalidEmailAddress');

export const exactLength = (length: number) => (value: string) =>
  value.length === length ? undefined : tLazy('common.messages.incorrectLength');
