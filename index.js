/*
 * File: index.js
 * Project: @reedsun/eslint-config-vue
 * File Created: Saturday, 2021-12-11 16:38:37
 * Author: ReedSun (reedsun@shanjing-inc.com)
 * -----
 * Last Modified: Monday, 2022-02-07 10:31:45
 * Modified By: ReedSun (reedsun@shanjing-inc.com)
 * -----
 * Copyright 2013 - 2022, Qingdao Shanjing Information Technology Co., Ltd.
 */
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  globals: {
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    defineProps: 'readonly',
    withDefaults: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/member-ordering': [2, { default: { order: 'alphabetically' } }],
    'max-lines': [2, { skipBlankLines: true, skipComments: true }],
    'max-lines-per-function': [2, { skipBlankLines: true, skipComments: true }],
    'no-alert': 1,
    'no-console': 1,
    'no-debugger': 1,
    'no-else-return': 2,
    'no-undef': 0, // https://typescript-eslint.io/docs/linting/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
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
