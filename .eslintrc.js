module.exports = {
  extends: [
    'airbnb-typescript-prettier',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:testing-library/react',
  ],
  rules: {
    'testing-library/no-render-in-setup': [
      'error',
      { allowTestingFrameworkSetupHook: 'beforeEach' },
    ],
  },
};
