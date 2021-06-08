module.exports = {
  extends: ['@vinceops/eslint-config/typescript'],
  plugins: ['jest'],
  rules: {
    'jest/expect-expect': 'off',
  },
};
