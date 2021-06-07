export class KeyNotFoundError extends Error {
  constructor(key: string) {
    super(`Key not found: ${key}`);
  }
}
