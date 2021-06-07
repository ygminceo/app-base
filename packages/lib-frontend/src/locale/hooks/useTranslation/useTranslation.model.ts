export type UseTranslationProps = [ns: string[]];

export type TranslatorFn = (key: string, params?: object) => string;

export interface UseTranslationReturns {
  t: TranslatorFn;
  isLoading: boolean;
}
