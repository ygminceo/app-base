export type UseUncontrolledParamsModel<T> = [
  value: T | undefined,
  onChange: ((value: T) => any) | undefined,
  defaultValue: T,
];

export type UseUncontrolledReturnsModel<T> = [value: T, onFieldChange: (value: T) => any];
