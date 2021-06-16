import { get } from 'lodash';
import Config from 'react-native-config';
import { KeyNotFoundError } from '@lib/common/core/utils/Config/Config.error';
import { _ConfigModel } from '@lib/common/core/utils/Config/internal/_Config.model';

export class _Config implements _ConfigModel {
  get<T>(key: string, defaultValue?: T) {
    const value = (get(Config, key, defaultValue) as unknown) as T;
    if (value === undefined) {
      throw new KeyNotFoundError(key);
    }
    return value;
  }
}
