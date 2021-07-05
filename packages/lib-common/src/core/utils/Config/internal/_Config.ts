import { get, toNumber } from 'lodash';
import { KeyNotFoundError } from '@lib/common/core/utils/Config/Config.error';
import { _ConfigModel } from '@lib/common/core/utils/Config/internal/_Config.model';

export class _Config implements _ConfigModel {
  get<T>(key: string, defaultValue?: T | null) {
    const value = (get(process.env, key, defaultValue) as unknown) as T;
    if (value === undefined) {
      throw new KeyNotFoundError(key);
    }
    return ((value as unknown) as string) === '' || isNaN((value as unknown) as number)
      ? value
      : ((toNumber(value) as unknown) as T);
  }
}
