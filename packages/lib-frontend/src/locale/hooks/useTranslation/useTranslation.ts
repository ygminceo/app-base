import { _useTranslation } from '@lib/frontend/locale/hooks/useTranslation/internal/_useTranslation';
import {
  UseTranslationParamsModel,
  UseTranslationReturnsModel,
} from '@lib/frontend/locale/hooks/useTranslation/useTranslation.model';

export const useTranslation = (...[ns]: UseTranslationParamsModel): UseTranslationReturnsModel =>
  _useTranslation(ns);
