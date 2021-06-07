import {
  _UseTranslationProps,
  _UseTranslationReturns,
} from '@lib/frontend/locale/hooks/useTranslation/internal/_useTranslation.model';
import { useTranslation } from 'react-i18next';

export const _useTranslation = (...[ns]: _UseTranslationProps): _UseTranslationReturns => {
  const { t, ready } = useTranslation(ns);
  return { t, isLoading: !ready };
};
