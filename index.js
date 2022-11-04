/*
 * File: index.js
 * Project: @reedsun/eslint-config-vue
 * File Created: Saturday, 2021-12-11 16:38:37
 * Author: ReedSun (superreedsun@gmail.com)
 * -----
 * Last Modified: Saturday, 2022-10-29 16:26:54
 * Modified By: ReedSun (superreedsun@gmail.com)
 */
const { defaultOrder } = require('@typescript-eslint/eslint-plugin/dist/rules/member-ordering');

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
    'plugin:tailwindcss/recommended',
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
  root: true,
  rules: {
    '@typescript-eslint/member-ordering': [
      2,
      { default: { memberTypes: defaultOrder, order: 'alphabetically' } },
    ],
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
    // throw error in tailwindcss rule
    'tailwindcss/classnames-order': 2,
    'tailwindcss/enforces-negative-arbitrary-values': 2,
    'tailwindcss/enforces-shorthand': 2,
    'tailwindcss/migration-from-tailwind-2': 2,
    'tailwindcss/no-arbitrary-value': 2,
    'tailwindcss/no-custom-classname': 2,
  },
};
