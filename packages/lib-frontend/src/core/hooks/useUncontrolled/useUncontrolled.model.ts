export type UseUncontrolledProps<T> = [
  value: T | undefined,
  onChange: ((value: T) => any) | undefined,
  defaultValue: T,
];

export type UseUncontrolledReturns<T> = [value: T, onFieldChange: (value: T) => any];
