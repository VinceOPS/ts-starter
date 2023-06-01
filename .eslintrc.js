/** @type {import('eslint').ESLint.Options} */
module.exports = {
  extends: [
    "@vinceops/eslint-config/typescript"
  ],
  plugins: ['jest'],
  rules: {
    'jest/expect-expect': 'off',
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-floating-promises": "warn"
  },
  ignorePatterns: ["**/*.d.ts"],
  parserOptions: {
    ecmaVersion: 2020,
    project: ["./tsconfig.json", "./cypress/tsconfig.json"],
    tsconfigRootDir: __dirname,
    sourceType: "module"
  }
};
