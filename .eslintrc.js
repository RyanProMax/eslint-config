module.exports = {
  /**
   * https://github.com/antfu/eslint-config
   */
  extends: ['@antfu'],
  rules: {
    // comma-dangle never
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    // semi always
    'semi': ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always']
  }
};
