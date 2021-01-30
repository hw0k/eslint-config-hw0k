module.exports = {
  extends: [
    './javascript.js',
    'airbnb-typescript',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
};
