# eslint-config

[![NPM Version](https://badge.fury.io/js/%40reedsun%2Feslint-config.svg)](https://www.npmjs.com/package/@reedsun/eslint-config)

## USAGE

1. Install `@reedsun/eslint-config`

```sh
yarn add -dev @reedsun/eslint-config
```

2. It will automatically generate a `.eslintrc.js` for you (if there's no such file before)

It will contains the following content:

```js
module.exports = {
  extends: '@reedsun',
}
```

### 3. You are All Set

```sh
./node_modules/.bin/eslint
```

`eslint` will work and follow the @reedsun rules.
