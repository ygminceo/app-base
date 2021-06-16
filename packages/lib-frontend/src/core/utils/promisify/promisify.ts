export const promisify = <T>(
  cb?: ((...args: any[]) => T | Promise<T>) | (() => T | Promise<T>),
) => (...args: any[]): Promise<T | undefined> => {
  const result = cb && cb(...args);
  if (result instanceof Promise) {
    return result;
  } else {
    return Promise.resolve(result);
  }
};
