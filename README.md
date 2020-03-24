# kwiz-dotfiles

This repository holds the configuration files for `prettier` and `eslint` that should be used in every project.

## General

**Note:** make sure you have a `.npmrc` with the following content:

```bash
@kwizapp:registry=https://npm.pkg.github.com/kwizapp
```

Otherwise `npm` will not know here to pull the package from.

**Login to Github with a Token**

To install packages locally, you need to be logged in to Github with a Personal Access Token (PAT). The PAT requires at least `repo` and `read:packages` capabilities.

## @kwizapp/prettier-config

```bash
npm install @kwizapp/prettier-config
```

[go to README](https://github.com/kwizapp/kwiz-dotfiles/tree/dev/prettier-config)

## @kwizapp/eslint-config-js

```bash
npm install @kwizapp/eslint-config-js
```

[go to README](https://github.com/kwizapp/kwiz-dotfiles/tree/dev/eslint-configs/javascript)

## @kwizapp/eslint-config-ts

```bash
npm install @kwizapp/eslint-config-ts
```

[go to README](https://github.com/kwizapp/kwiz-dotfiles/tree/dev/eslint-configs/typescript)

## @kwizapp/eslint-config-ts-react

```bash
npm install @kwizapp/eslint-config-ts-react
```

[go to README](https://github.com/kwizapp/kwiz-dotfiles/tree/dev/eslint-configs/typescript-react)
