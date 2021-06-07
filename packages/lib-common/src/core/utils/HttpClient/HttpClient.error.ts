export class HttpError<T> extends Error {
  readonly status?: number;
  readonly data?: T;
  constructor(status?: number, data?: T) {
    super();
    this.status = status;
    this.data = data;
  }
}
