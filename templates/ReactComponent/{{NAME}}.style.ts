import { StyleSheet } from 'react-native';
import { {{NAME}}Props } from '@lib/frontend/{{SERVICE}}(camelCase)/{{PATH}}(pathCase)/{{NAME}}/{{NAME}}.model';
import { StyleGetterModel } from '@lib/frontend/core/styles/style.model';

export const {{NAME}}(camelCase)Style = StyleSheet.create({
  style: {},
});

export const get{{NAME}}Style: StyleGetterModel<{{NAME}}Props> = ({}) => [
  {{NAME}}(camelCase)Style.style,
];
