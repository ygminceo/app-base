const { resolve } = require('path');
const { NATIVE_EXTENSIONS, ROOT_PATH } = require('./constants');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:import/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': ['error'],
    'implicit-arrow-linebreak': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'no-console': 'off',
    'no-trailing-spaces': 'warn',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': NATIVE_EXTENSIONS,
    },
    'import/resolver': {
      node: {
        extensions: NATIVE_EXTENSIONS,
      },
      typescript: {
        alwaysTryTypes: true,
        paths: resolve(ROOT_PATH, 'tsconfig.paths.json'),
      },
    },
  },
  ignorePatterns: ['**/node_modules/', 'templates/'],
};
