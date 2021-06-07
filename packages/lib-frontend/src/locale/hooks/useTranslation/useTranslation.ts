import { _useTranslation } from '@lib/frontend/locale/hooks/useTranslation/internal/_useTranslation';
import {
  UseTranslationProps,
  UseTranslationReturns,
} from '@lib/frontend/locale/hooks/useTranslation/useTranslation.model';

export const useTranslation = (...[ns]: UseTranslationProps): UseTranslationReturns =>
  _useTranslation(ns);
