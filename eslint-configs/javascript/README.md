# @kwizapp/eslint-config-js

[Link to Package](https://github.com/kwizapp/kwiz-dotfiles/packages/160122)

### Javascript

This repository holds the **base javascript** `eslint` configuration for all projects inside the **@kwizapp** organization.

## Usage

### Installation

```bash
npm install @kwizapp/eslint-config-js
```

**Note:** make sure you have a `.npmrc` with the following content:

```bash
@kwizapp:registry=https://npm.pkg.github.com/kwizapp
```

Otherwise `npm` will not know here to pull the package from.

### Peer Dependencies

Make sure your project has the following packages installed:

- prettier
- eslint
- eslint-config-prettier
- eslint-plugin-prettier

```shell
npm install --save-dev prettier eslint eslint-config-prettier eslint-plugin-prettier
```

### Applying ESLint Rules

Create a `.eslintrc.js` file in the root of your project with the following content:

```js
module.exports = {
  extends: ["@kwizapp/eslint-config-js"]
};
```

`eslint` will find this file on it's path

### Linting

Make sure you enable linting inside your editor.

**`npm scripts`**
You can use the following command to lint your project files. Add the following to your `package.json`.

```json
scripts": {
  "lint": "eslint \"{src,test}/**/*.{js,ts,tsx}\" --fix",
},
```

more information [here](https://eslint.org/)
