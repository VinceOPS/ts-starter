module.exports = {
  extends: ['@gojob/eslint-config/typescript'],
  plugins: ['jest'],
  rules: {
    'jest/expect-expect': 'off',
  },
};
