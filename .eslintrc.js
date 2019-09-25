module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    'jest/globals': true
  },
  plugins: ['jest'],
  extends: [
    'standard',
    'plugin:jest/all'
  ],
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "jest/no-test-callback": 0,
    "jest/no-test-return-statement": 0,
    "jest/no-hooks": 0,
    "import/first": 0,
    "jest/prefer-expect-assertions": 0,
    "jest/expect-expect": 0,
    "jest/prefer-spy-on": 0,
    "jest/require-top-level-describe": 0
  }
}
