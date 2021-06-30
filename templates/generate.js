const { resolve } = require('path');
const { generateTemplateFiles } = require('generate-template-files');
const { ROOT_PATH } = require('../constants');

generateTemplateFiles([
  {
    option: 'React Component',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: resolve(__dirname, 'ReactComponent'),
    },
    stringReplacers: ['{{NAME}}', '{{SERVICE}}', '{{PATH}}'],
    output: {
      path: resolve(ROOT_PATH, 'packages/lib-frontend/src/{{SERVICE}}(camelCase)/{{PATH}}(pathCase)/{{NAME}}'),
      overwrite: false,
    },
  },

  {
    option: 'React Component Internal',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: resolve(__dirname, 'ReactComponentInternal'),
    },
    stringReplacers: ['{{NAME}}', '{{SERVICE}}', '{{PATH}}'],
    output: {
      path: resolve(ROOT_PATH, 'packages/lib-frontend/src/{{SERVICE}}(camelCase)/{{PATH}}(pathCase)/{{NAME}}'),
      overwrite: false,
    },
  },

  {
    option: 'Handler',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: resolve(__dirname, 'Handler'),
    },
    stringReplacers: ['{{NAME}}', '{{SERVICE}}'],
    output: {
      path: resolve(ROOT_PATH, 'packages/lib-backend/src/{{SERVICE}}(camelCase)/handlers/{{NAME}}(camelCase)'),
      overwrite: false,
    },
  },
]);
