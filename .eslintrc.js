module.exports = {
  plugins: ['vue'], // enable vue plugin
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  rules: {
    "no-underscore-dangle": 'off',
    "max-len": ["error", { "code": 300 }],
    "linebreak-style": 0,
    'import/no-cycle': 'off',
    'no-param-reassign': 'off',
    'no-throw-literal': 'off',
  },
  "parserOptions": {
    "parser": "babel-eslint",
  },
  "globals": {
    "$": true,
  }
};
