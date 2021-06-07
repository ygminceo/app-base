import { LocaleState } from '@lib/frontend/locale/stores/localeState.model';
import { createReducer } from '@reduxjs/toolkit';

const initialState: LocaleState = {};

export const localeReducer = createReducer<LocaleState>(initialState, (builder) => builder);
