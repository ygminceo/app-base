const { resolve } = require('path');
const { PACKAGES_PATH } = require('./constants');

module.exports = {
  contextSeparator: '_',
  createOldCatalogs: false,
  customValueTemplate: null,
  defaultNamespace: 'common',
  defaultValue: '',
  failOnWarnings: false,
  indentation: 2,
  input: undefined,
  keepRemoved: false,
  keySeparator: '.',
  lineEnding: 'auto',
  locales: ['en', 'kr'],
  namespaceSeparator: ':',
  output: resolve(PACKAGES_PATH, 'lib-common/assets/locales/$LOCALE/$NAMESPACE.json'),
  skipDefaultValues: false,
  sort: true,
  useKeysAsDefaultValue: false,
  lexers: {
    js: [{ lexer: 'JavascriptLexer', functions: ['t', 'tLazy'] }],
    ts: [{ lexer: 'JavascriptLexer', functions: ['t', 'tLazy'] }],
    jsx: [{ lexer: 'JsxLexer', functions: ['t', 'tLazy'] }],
    tsx: [{ lexer: 'JsxLexer', functions: ['t', 'tLazy'] }],
  },
};
