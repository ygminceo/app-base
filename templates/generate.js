const { resolve } = require('path');
const { generateTemplateFiles } = require('generate-template-files');
const { PACKAGES_PATH } = require('../constants');

generateTemplateFiles([
  {
    option: 'React Component',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: resolve(__dirname, 'ReactComponent'),
    },
    stringReplacers: ['__NAME__', '__MODULE__', '__PATH__'],
    output: {
      path: resolve(PACKAGES_PATH, '__MODULE__(kebabCase)/src/__PATH__(pathCase)/__NAME__'),
      overwrite: false,
    },
  },
]);
