module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['react-hooks'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'linebreak-style': 0,
    quotes: [2, 'single'],
    'react/react-in-jsx-scope': 0
  }
};
