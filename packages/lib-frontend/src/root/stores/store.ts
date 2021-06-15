import { configureStore } from '@lib/frontend/root/stores/configureStore';

export const store = configureStore();

export type AppDispatchModel = typeof store.dispatch;
