import { LocaleStateModel } from '@lib/frontend/locale/stores/localeState.model';
import { createReducer } from '@reduxjs/toolkit';

const initialState: LocaleStateModel = {};

export const localeReducer = createReducer<LocaleStateModel>(initialState, (builder) => builder);
