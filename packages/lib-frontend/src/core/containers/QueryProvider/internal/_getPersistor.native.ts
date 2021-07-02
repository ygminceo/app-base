import AsyncStorage from '@react-native-async-storage/async-storage';
import { asyncStoragePersistor } from 'react-query/createAsyncStoragePersistor-experimental';

export const _getPersistor = () =>
  asyncStoragePersistor({
    // @ts-ignore
    storage: AsyncStorage,
  });
