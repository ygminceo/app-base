module.exports = {
  contextSeparator: '_',
  createOldCatalogs: false,
  customValueTemplate: null,
  defaultValue: '',
  failOnWarnings: false,
  indentation: 2,
  input: undefined,
  keepRemoved: false,
  keySeparator: '.',
  lineEnding: 'auto',
  locales: ['en', 'kr'],
  namespaceSeparator: ':',
  output: 'packages/lib-assets/src/public/locales/$LOCALE/$NAMESPACE.json',
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
