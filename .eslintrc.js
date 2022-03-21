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
    'react/react-in-jsx-scope': 0,
    'max-len': 0,
    'react/prop-types': 0,
    'default-param-last': 0,
    'react/no-array-index-key': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unstable-nested-components': 0,
    'no-template-curly-in-string': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    'dot-notation': 0
  }
};
