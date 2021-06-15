export type UseTranslationParamsModel = [ns: string[]];

export type TranslatorModel = (key: string, params?: object) => string;

export interface UseTranslationReturnsModel {
  t: TranslatorModel;
  isLoading: boolean;
}
