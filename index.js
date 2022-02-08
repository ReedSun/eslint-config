/*
 * File: index.js
 * Project: @reedsun/eslint-config
 * File Created: Saturday, 2021-12-11 16:38:37
 * Author: ReedSun (superreedsun@gmail.com)
 * -----
 * Last Modified: Tuesday, 2022-02-08 18:23:26
 * Modified By: ReedSun (superreedsun@gmail.com)
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/member-ordering': [2, { default: { order: 'alphabetically' } }],
    'max-lines': [2, { skipBlankLines: true, skipComments: true }],
    'max-lines-per-function': [2, { skipBlankLines: true, skipComments: true }],
    'no-alert': 1,
    'no-console': 1,
    'no-debugger': 1,
    'no-else-return': 2,
    'object-shorthand': 2,
    'prefer-template': 2,
    'prettier/prettier': [
      2,
      {
        arrowParens: 'always',
        bracketSpacing: true,
        printWidth: 100,
        proseWrap: 'always',
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
    'sort-imports': 2,
    'sort-keys': 2,
  },
};
