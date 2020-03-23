# @kwizapp/prettier-config

[Link to Package](https://github.com/kwizapp/kwiz-dotfiles/packages/160099)

This repository holds the shared `prettier` configuration for all projects inside the **@kwizapp** organization.

## Usage

### Installation

```bash
npm install @kwizapp/prettier-config
```

**Note:** make sure you have a `.npmrc` with the following content:

```bash
@kwizapp:registry=https://npm.pkg.github.com/kwizapp
```

Otherwise `npm` will not know here to pull the package from.

### Peer Dependencies

Make sure your project has `prettier` installed:

```bash
npm install prettier
```

### Applying Prettier Rules

Create a `.prettierrc.js` file in the root of your project with the following content:

```js
module.exports = {
  ...require("@kwizapp/prettier-config")
};
```

`prettier` will find this file on it's path

### Formatting

Make sure you enable formatting inside your editor.

**`npm scripts`**
You can use the following command to format your project files. Add the following to your `package.json`.

```json
scripts": {
  "format": "prettier --write \"src/**/*.{js,ts,tsx}\"",
},
```
