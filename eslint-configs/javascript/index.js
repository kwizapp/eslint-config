module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  // define parser options to make features such as async/wait work
  parserOptions: {
    ecmaVersion: 2020 // same as ECMAScript 10
  }
};
