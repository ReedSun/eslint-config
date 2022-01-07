# eslint-config

[![NPM Version](https://badge.fury.io/js/%40reedsun%2Feslint-config-vue.svg)](https://www.npmjs.com/package/@reedsun/eslint-config-vue)

## USAGE

1. Install `@reedsun/eslint-config-vue`

```sh
yarn add -dev @reedsun/eslint-config-vue
```

2. It will automatically generate a `.eslintrc.js` for you (if there's no such file before)

It will contains the following content:

```js
module.exports = {
  extends: '@reedsun/eslint-config-vue',
}
```

### 3. You are All Set

```sh
./node_modules/.bin/eslint
```

`eslint` will work and follow the @reedsun/eslint-config-vue rules.
