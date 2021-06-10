import { KeyNotFoundError } from '@lib/common/core/utils/Config/Config.error';
import { _ConfigClass } from '@lib/common/core/utils/Config/internal/_Config.model';

export class _Config implements _ConfigClass {
  get<T>(key: string, defaultValue?: T | null) {
    const value = (process.env[key] || defaultValue) as unknown as T;
    if (value === undefined) {
      throw new KeyNotFoundError(key);
    }
    return value;
  }
}
