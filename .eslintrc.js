module.exports = {
  root: true,
  env: {
    browser: true, // browser global variables
    es2021: true, // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 12,
  },
  extends: ['plugin:vue/vue3-recommended', 'airbnb-base'],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
  },
}
