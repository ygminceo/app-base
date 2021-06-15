import {
  _UseTranslationParamsModel,
  _UseTranslationReturnsModel,
} from '@lib/frontend/locale/hooks/useTranslation/internal/_useTranslation.model';
import { useTranslation } from 'next-i18next';

export const _useTranslation = (...[ns]: _UseTranslationParamsModel): _UseTranslationReturnsModel => {
  const { t, ready } = useTranslation(ns);
  return { t: ready ? t : () => ' ', isLoading: !ready };
};
