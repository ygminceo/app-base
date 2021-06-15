import { CardFormProps } from '@lib/frontend/payment/containers/CardForm/CardForm.model';
import { _CardForm } from '@lib/frontend/payment/containers/CardForm/internal/_CardForm';
import React from 'react';

export const CardForm = ({ ...props }: CardFormProps) => <_CardForm {...props} />;
