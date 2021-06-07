export class UnknownError extends Error {}

export class DuplicateError extends Error {}

export class FormError<F> extends Error {
  readonly data?: { [K in keyof F]?: string | undefined };
  constructor(data: { [K in keyof F]?: string | undefined }, message?: string) {
    super(message);
    this.data = data;
  }
}
