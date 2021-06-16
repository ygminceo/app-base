const paths = require('./tsconfig.paths.json').compilerOptions.paths;

module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: true,
  printWidth: 100,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  importOrder: [...Object.keys(paths).map((k) => `${k.replace('*', '(.*)')}$`), '^[./]'],
};
