## Installing

Add `eslint@^7` and `@whydnxx/dobby` as a (dev) dependency:

```sh
# using npm
npm install --save-dev eslint@^7 @whydnxx/dobby

# using yarn
yarn add --dev eslint@^7 @whydnxx/dobby
```

> Note: `@whydnxx/dobby` uses ESLint version 7, and will upgrade to version 8 until all upstream dependencies are updated to also use version 8.

## Usage

Add `@whydnxx/dobby` in your ESLint configuration:

```js
module.exports = {
  extends: [
    "@whydnxx/dobby",
    // ...
  ],
};
```

### For React projects

```js
module.exports = {
  extends: [
    "@whydnxx/dobby/react",
    // ...
  ],
};
```

### For Next.js projects\*

\*) Add [`eslint-config-next`](https://yarnpkg.com/package/eslint-config-next) as dev dependency

```js
module.exports = {
  extends: [
    "@whydnxx/dobby/react",
    "plugin:@next/next/recommended",
    // ...
  ],
};
```
