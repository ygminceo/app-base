import { createReducer } from '@reduxjs/toolkit';
import { LocaleStateModel } from '@lib/frontend/locale/stores/localeState.model';

const initialState: LocaleStateModel = {};

export const localeReducer = createReducer<LocaleStateModel>(initialState, (builder) => builder);
