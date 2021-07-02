import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental';

export const _getPersistor = () => createWebStoragePersistor({ storage: window.localStorage });
